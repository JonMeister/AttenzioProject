from django.db import models


class Role(models.Model):
    role_id = models.AutoField(primary_key=True)  # Usamos AutoField para IDs automáticos
    name = models.CharField(max_length=500)
    
    class Meta:
        db_table = "role"
        
    def __str__(self):
        return self.name
