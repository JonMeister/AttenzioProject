from django.db import models
from apps.role.models import Role

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=500)
    last_name = models.CharField(max_length=500)
    email = models.EmailField(max_length=500)
    password = models.CharField(max_length=500)
    picture = models.CharField(max_length=500, blank=True, null=True)
    address = models.CharField(max_length=500, blank=True, null=True)
    cc = models.CharField(max_length=500, blank=True, null=True)
    phone_number = models.CharField(max_length=500, blank=True, null=True)
    proof_of_registration = models.CharField(max_length=500, blank=True, null=True)
    professional_license_number = models.CharField(max_length=500, blank=True, null=True)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    
    class Meta:
        db_table = "user"
        
    def __str__(self):
        return f"{self.name} {self.last_name}"
