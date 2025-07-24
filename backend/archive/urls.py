from django.urls import path
from .views import IllnessCaseViewSet, IllnessTagViewSet, IllnessPictureViewSet

app_name = "archive"

urlpatterns = [
    path('illness-cases/',
         IllnessCaseViewSet.as_view({'get': 'list', 'post': 'create'}), name='illness-cases'),
    path('illness-cases/<int:pk>',
         IllnessCaseViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='illness-case'),
    path('illness-tags/',
         IllnessTagViewSet.as_view({'get': 'list', 'post': 'create'}), name='illness-tags'),
    path('illness-tags/<int:pk>',
         IllnessTagViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='illness-tag'),
    path('illness-pictures/',
         IllnessPictureViewSet.as_view({'get': 'list', 'post': 'create'}), name='illness-pictures'),
    path('illness-pictures/<int:pk>',
         IllnessPictureViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='illness-picture'),
]
