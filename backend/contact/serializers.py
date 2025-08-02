
from rest_framework import serializers

from .models import Contact
from main.serializers import ObjectIdSerializer


class ContactSerializer(ObjectIdSerializer, serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
