from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User


class CustomUserAdmin(UserAdmin):
    list_display = ('email', 'username', 'is_staff', 'is_active')

    # Override to restrict permission fields 
    def get_fieldsets(self, request, obj=None):
        if not request.user.is_superuser:
            # usual users see basic info
            return (
                (None, {'fields': ('username',)}),
                ('Personal info', {'fields': ('email', 'status', 'is_approved', 'photo')}),
            )
        # full access for admin 
        return super().get_fieldsets(request, obj)


admin.site.register(User, CustomUserAdmin)
