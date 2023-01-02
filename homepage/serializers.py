from rest_framework import routers, serializers, viewsets
from .models import MenuItems

class MenuItemsSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MenuItems
        fields = ('id', 'name', 'created_by','updated_at', 'created_at')
    