from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from main.serializers import ObjectIdSerializer

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    class Meta:
        model = User
        fields = [
            'id', 'username', 'email', 'password', 'status',
            'institution', 'is_approved', 'photo', 'additional_info'
        ]
        extra_kwargs = {
            'password': {'write_only': True},
            'is_approved': {'read_only': True},
        }

    def create(self, validated_data):
        # Prevent mass assignment of sensitive fields
        validated_data.pop('is_superuser', None)
        validated_data.pop('is_staff', None)
        validated_data.pop('is_approved', None)

        password = validated_data.pop('password')
        user = User(**validated_data)
        #  pass hashing
        user.set_password(password)  
        user.save()
        return user


class ProfileSerializer(ObjectIdSerializer, serializers.ModelSerializer):
    email = serializers.EmailField(
        required=False,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    class Meta:
        model = User
        fields = [
            'id', 'username', 'email', 'status',
            'institution', 'photo', 'additional_info'
        ]
        extra_kwargs = {
            'username': {'required': False},
            'email': {'required': False},
        }

    def update(self, instance, validated_data):
        if 'username' in validated_data or 'email' in validated_data:
            instance.is_approved = False

        # Save way fields update
        for field in ['username', 'email', 'status', 'institution', 'photo', 'additional_info']:
            if field in validated_data:
                setattr(instance, field, validated_data[field])

        instance.save()
        return instance
