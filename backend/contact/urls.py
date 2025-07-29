from django.urls import path
from .views import ContactViewSet

app_name = "contact"

urlpatterns = [
    path('create/', ContactViewSet.as_view({'post': 'create'}), name='contact'),
]
