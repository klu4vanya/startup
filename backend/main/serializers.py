from django.utils.translation import gettext_lazy as _
from rest_framework import serializers
from bson import ObjectId
from bson.errors import InvalidId
from drf_spectacular.utils import extend_schema_field
from drf_spectacular.types import OpenApiTypes


@extend_schema_field(OpenApiTypes.STR)
class ObjectIdField(serializers.Field):
    default_error_messages = {
        "invalid": _("Enter a valid Object Id."),
    }

    def to_representation(self, value):
        if isinstance(value, ObjectId):
            return str(value)
        return value

    def to_internal_value(self, data):
        if not isinstance(data, ObjectId):
            try:
                data = ObjectId(data)
            except InvalidId:
                self.fail("invalid")
        return data

    class Meta:
        swagger_schema_fields = {
            "type": "string",
            "example": {
                "id": "1234ab5cd6e78f9g0hig12k3",
            }
        }


class ObjectIdSerializer(serializers.Serializer):
    id = ObjectIdField(read_only=True)
