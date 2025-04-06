from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'status', 'is_approved', 'photo', 'additional_info']

        extra_kwargs = {
            'password': {'write_only': True},
            'is_approved': {'read_only': True}
        }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class ProfileSerializer(serializers.ModelSerializer):
    access_token = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'status', 'is_approved', 'photo', 'additional_info']

        extra_kwargs = {
            'is_approved': {'read_only': True},
        }
