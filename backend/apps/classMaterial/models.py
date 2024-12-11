from django.db import models
from apps.clazz.models import Clazz

class ClassMaterial(models.Model):
    name = models.CharField(max_length=500, primary_key=True)
    type = models.CharField(max_length=500)
    source = models.CharField(max_length=500)
    date = models.DateField()
    clazz = models.ForeignKey(Clazz, on_delete=models.CASCADE)
    
    class Meta:
        db_table = "class_material"
        
    def __str__(self):
        return self.name