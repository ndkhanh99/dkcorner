from django.urls import path 
from . import views 
from django.conf import settings 
from django.urls import path, include 
from django.conf.urls.static import static

urlpatterns = [ 
    path('', views.index, name='index'), 
    path('company', views.index, name='company'),
    path('product', views.index, name='product'),
    path('about', views.index, name='about'),
    path('contact', views.index, name='contact'),

]