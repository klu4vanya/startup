from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from django.core.validators import MaxLengthValidator, RegexValidator
import imghdr


def validate_photo(image):
    header = image.read(512)
    image.seek(0)
    file_type = imghdr.what(None, header)
    if file_type not in ('jpeg', 'png','tiff'):
        raise ValidationError(f'Unsupported image type: {file_type}. Allowed: jpeg, png.')


class User(AbstractUser):
    class RoleEnum(models.TextChoices):
        DOCTOR = "Doctor"
        TEACHER = "Teacher"
        STUDENT = "Student"

    username = models.CharField(db_index=True, max_length=255, unique=True, blank=False)
    email = models.EmailField(db_index=True, unique=True, blank=False)

    status = models.CharField(
        max_length=10,
        choices=RoleEnum.choices,
        default=RoleEnum.STUDENT,
        db_index=True,
        blank=False,
    )

    photo = models.ImageField(
        upload_to='user_photos/',
        blank=True,
        null=True,  
        validators=[validate_photo],
        help_text="JPEG or PNG only"
    )

    institution = models.CharField(
        max_length=255,
        blank=True,  
        validators=[
            MaxLengthValidator(255),
            RegexValidator(
                regex=r'^[\w\s\-,.&()]+$',
                message="Institution name may only contain letters, numbers, spaces, and - , . & ( )"
            )
        ],
        
    )

    additional_info = models.JSONField(
        blank=True,
        null=True,
    )

    is_approved = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True, )
    updated_at = models.DateTimeField(auto_now=True, help_text="Record last updated")

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def clean(self):
        if self.email:
            self.email = self.email.strip().lower()

        if isinstance(self.additional_info, dict):
            allowed = {'bio', 'linkedin', 'github'}
            cleaned = {k: v for k, v in self.additional_info.items() if k in allowed}
            self.additional_info = cleaned

        super().clean()

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.email
