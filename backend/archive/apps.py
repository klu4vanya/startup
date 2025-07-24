from django.apps import AppConfig


class ArchiveConfig(AppConfig):
    default_auto_field = "django_mongodb_backend.fields.ObjectIdAutoField"
    name = 'archive'
