from django.db import models


class IllnessTag(models.Model):
    class TypeEnum(models.TextChoices):
        """
        Type choices
        """
        ILLNESS = "Illness"
        ORGAN = "Organ"
        ORGAN_SYSTEM = "OrganSystem"
        INSTITUTION = "Institution"

    name = models.CharField(max_length=255, help_text="Name of the tag")
    type = models.CharField(max_length=32, choices=TypeEnum.choices,
                            default=TypeEnum.ILLNESS, null=False, blank=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class IllnessCase(models.Model):
    class SexEnum(models.TextChoices):
        """
        Sex choices
        """
        MALE = "Male"
        FEMALE = "Female"

    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    tags = models.ManyToManyField(IllnessTag, blank=True)
    markup = models.JSONField(null=True, blank=True)
    age = models.IntegerField(null=True, blank=True)
    sex = models.CharField(max_length=10, choices=SexEnum.choices,
                           default=SexEnum.MALE, null=False, blank=False)
    picture = models.ImageField(
        upload_to='illness_cases/', null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
