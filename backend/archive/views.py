from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend

from .pagination import StandardResultsSetPagination
from .mixin import ChangeModelMixin
from .serializers import *


class IllnessCaseViewSet(ChangeModelMixin, ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = IllnessCase.objects.all()
    serializer_class = IllnessCaseSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['title', 'description', 'tags', 'age', 'sex', 'created_at   ']


class IllnessTagViewSet(ChangeModelMixin, ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = IllnessTag.objects.all()
    serializer_class = IllnessTagSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['name', 'type']
