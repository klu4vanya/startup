from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now_add=True, null=False, blank=False, help_text="Created at")
    updated_at = models.DateTimeField(auto_now=True, null=False, blank=False, help_text="Updated at")

    def __str__(self):
        return self.name
