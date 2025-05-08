from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from accounts.models import User


class ChangeModelMixin():
    """
    A mixin that provides `create()`, `update()`, `destroy()` only for superuser, staff, doctor and teacher.
    """
    permission_classes = (IsAuthenticated,)

    def create(self, request, *args, **kwargs):
        if request.user.status in (User.RoleEnum.DOCTOR, User.RoleEnum.TEACHER) and request.user.is_approved:
            return super().create(request, *args, **kwargs)
        return Response(status=status.HTTP_403_FORBIDDEN)

    def update(self, request, *args, **kwargs):
        if request.user.status in (User.RoleEnum.DOCTOR, User.RoleEnum.TEACHER) and request.user.is_approved:
            return super().update(request, *args, **kwargs)
        return Response(status=status.HTTP_403_FORBIDDEN)

    def destroy(self, request, *args, **kwargs):
        if request.user.status in (User.RoleEnum.DOCTOR, User.RoleEnum.TEACHER) and request.user.is_approved:
            return super().destroy(request, *args, **kwargs)
        return Response(status=status.HTTP_403_FORBIDDEN)
