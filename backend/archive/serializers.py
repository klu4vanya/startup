from rest_framework import serializers

from .models import IllnessCase, IllnessTag, IllnessPicture
from main.serializers import ObjectIdSerializer


class IllnessTagSerializer(ObjectIdSerializer, serializers.ModelSerializer):
    class Meta:
        model = IllnessTag
        fields = '__all__'


class IllnessCaseSerializer(ObjectIdSerializer, serializers.ModelSerializer):
    tags = IllnessTagSerializer(read_only=True, many=True)

    class Meta:
        model = IllnessCase
        fields = '__all__'


class IllnessPictureSerializer(ObjectIdSerializer, serializers.ModelSerializer):
    class Meta:
        model = IllnessPicture
        fields = '__all__'
