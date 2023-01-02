from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class MenuItems(models.Model):
    
    name = models.CharField(max_length=250)
    # created_by = models.ForeignKey(User, on_delete = models.CASCADE)
    created_by = models.CharField(max_length=50)
    updated_at = models.DateTimeField(auto_now = True)
    created_at = models.DateTimeField(auto_now_add = True)
    
    class Meta:
        ordering = ['-updated_at', '-created_at']
    def __str__(self):
        return self.name