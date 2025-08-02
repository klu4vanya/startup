from rest_framework import viewsets, permissions, status
from rest_framework.throttling import UserRateThrottle, AnonRateThrottle
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .serializers import UserSerializer, ProfileSerializer

User = get_user_model()

class IsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj == request.user


class UserCreateViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['post']
    #throttling anon access
    throttle_classes = [AnonRateThrottle] 

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        # Return limited info to prevet info leak
        data = {
            "id": user.id,
            "username": user.username,
        }
        return Response(data, status=status.HTTP_201_CREATED)


class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwner]
    throttle_classes = [UserRateThrottle]

    def get_queryset(self):
        return User.objects.filter(pk=self.request.user.pk)

    def get_object(self):
        return self.request.user

    def update(self, request, *args, **kwargs):
        user = self.get_object()

        # Block immediate update of username or email without verification
        sensitive_fields = ['email', 'username']
        if any(field in request.data for field in sensitive_fields):
            #  Implement logic verification logic 
            return Response(
                {
                    "detail": "Changing username or email requires verification. Please verify before updating."
                },
                status=status.HTTP_202_ACCEPTED,
            )

        # Use partial=True to support partial updates
        serializer = self.get_serializer(user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
