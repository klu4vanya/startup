from django.db import models


class IllnessTag(models.Model):
    """
    Illness tag model.
    """
    class TypeEnum(models.TextChoices):
        """
        Type choices
        """
        ILLNESS = "Illness"
        ORGAN = "Organ"
        ORGAN_SYSTEM = "OrganSystem"
        INSTITUTION = "Institution"

    name = models.CharField(max_length=255, help_text="Name of the tag")
    type = models.CharField(max_length=32, choices=TypeEnum.choices, default=TypeEnum.ILLNESS,
                            null=False, blank=False, help_text="Type of the tag")

    created_at = models.DateTimeField(auto_now_add=True, null=False, blank=False, help_text="Created at")
    updated_at = models.DateTimeField(auto_now=True, null=False, blank=False, help_text="Updated at")

    class Meta:
        unique_together = ('name', 'type')

    def __str__(self):
        return self.name


class IllnessCase(models.Model):
    """
    Illness case of a patient.
    """
    class SexEnum(models.TextChoices):
        """
        Sex choices
        """
        MALE = "Male"
        FEMALE = "Female"

    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True, help_text="Description of the illness case")
    tags = models.ManyToManyField(IllnessTag, blank=True, help_text="Tags of the illness case")
    markup = models.JSONField(null=True, blank=True, help_text="Markup of the illness case")
    age = models.IntegerField(null=True, blank=True, help_text="Age of the patient")
    sex = models.CharField(max_length=10, choices=SexEnum.choices, default=SexEnum.MALE,
                           null=False, blank=False, help_text="Sex of the patient")

    created_at = models.DateTimeField(auto_now_add=True, null=False, blank=False, help_text="Created at")
    updated_at = models.DateTimeField(auto_now=True, null=False, blank=False, help_text="Updated at")

    def __str__(self):
        return self.title


class IllnessPicture(models.Model):
    """
    Picture related to an illness case
    """
    illness_case = models.ForeignKey(IllnessCase, on_delete=models.CASCADE, null=False, blank=False)
    picture = models.FileField(upload_to='illness_cases/', null=False, blank=False,
                               help_text="Picture of the illness case")

    created_at = models.DateTimeField(auto_now_add=True, null=False, blank=False, help_text="Created at")
    updated_at = models.DateTimeField(auto_now=True, null=False, blank=False, help_text="Updated at")

    def __str__(self):
        return f"{self.illness_case.title} - {self.picture.name}"
