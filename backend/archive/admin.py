from django.contrib import admin

from .models import IllnessCase, IllnessTag

admin.site.register(IllnessCase)
admin.site.register(IllnessTag)
