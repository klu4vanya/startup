from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'status', 'institution', 'is_approved', 'photo', 'additional_info']

        extra_kwargs = {
            'password': {'write_only': True},
            'is_approved': {'read_only': True}
        }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'status', 'institution', 'photo', 'additional_info']

        extra_kwargs = {
            'username': {'required': False},  # Делаем необязательным для обновления
            'email': {'required': False},    # Делаем необязательным для обновления
        }

    def update(self, instance, validated_data):
        if validated_data.get('username') is not None or validated_data.get('email') is not None:
            instance.is_approved = False
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.status = validated_data.get('status', instance.status)
        instance.institution = validated_data.get('institution', instance.institution)
        instance.photo = validated_data.get('photo', instance.photo)
        instance.additional_info = validated_data.get('additional_info', instance.additional_info)
        instance.save()
        return instance
