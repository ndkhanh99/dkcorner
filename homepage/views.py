from django.shortcuts import render
from rest_framework import generics 
from .models import MenuItems
from .serializers import MenuItemsSerializers
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

def index(request):
    return render(request, 'index.html')

### MenuItems Api ###
@api_view(['GET'])
def getMenuItems(request):
    items = MenuItems.objects.order_by()
    serializer = MenuItemsSerializers(items, many = True)
    return Response(serializer.data)
class MenuListView(generics.CreateAPIView):
    queryset = MenuItems.objects.all()
    serializer_class = MenuItemsSerializers
    
### test api ###
def test(request):
    return HttpResponse('Test sucessfully!')
    
    

    
