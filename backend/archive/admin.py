from django.contrib import admin

from .models import IllnessCase, IllnessTag, IllnessPicture

admin.site.register(IllnessCase)
admin.site.register(IllnessTag)
admin.site.register(IllnessPicture)
