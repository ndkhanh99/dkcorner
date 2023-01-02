from django.shortcuts import render
from rest_framework import generics 
from .models import MenuItems
from .serializers import MenuItemsSerializers
from django.http import HttpResponse

def index(request):
    return render(request, 'index.html')
class MenuListView(generics.CreateAPIView):
    queryset = MenuItems.objects.all()
    serializer_class = MenuItemsSerializers
    
def test(request):
    return HttpResponse('Test sucessfully!')
    
    

    
