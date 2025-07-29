from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import CreateModelMixin

from .serializers import ContactSerializer
from .models import Contact


class ContactViewSet(CreateModelMixin, GenericViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
