from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    username = models.CharField(db_index=True, max_length=255, unique=True)
    email = models.EmailField(db_index=True, unique=True)

    class RoleEnum(models.TextChoices):
        DOCTOR = "Doctor"
        TEACHER = "Teacher"
        STUDENT = "Student"

    status = models.CharField(max_length=10, choices=RoleEnum.choices,
                              default=RoleEnum.STUDENT, null=False, blank=False)

    photo = models.ImageField(upload_to='user_photos/', null=True, blank=True)

    institution = models.CharField(max_length=255, null=True, blank=True)

    additional_info = models.JSONField(null=True, blank=True)

    is_approved = models.BooleanField(default=False, null=False, blank=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.email
