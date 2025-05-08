from rest_framework import serializers
from .models import IllnessCase, IllnessTag


class IllnessTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = IllnessTag
        fields = '__all__'


class IllnessCaseSerializer(serializers.ModelSerializer):
    tags = IllnessTagSerializer(read_only=True, many=True)

    class Meta:
        model = IllnessCase
        fields = '__all__'
