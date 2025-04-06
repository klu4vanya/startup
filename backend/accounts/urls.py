from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

from .views import RegistrationView, ProfileView

app_name = "accounts"

urlpatterns = [
    # Get token.
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(),
         name='token_refresh'),  # Refresh token
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('api/register/', RegistrationView.as_view(), name='register'),
    path('api/profile/', ProfileView.as_view(), name='profile'),
]
