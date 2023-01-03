from rest_framework import routers, serializers, viewsets
from .models import MenuItems
from rest_framework.serializers import ModelSerializer

class MenuItemsSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MenuItems
        fields = ('id', 'name', 'path', 'created_by','updated_at', 'created_at')
    