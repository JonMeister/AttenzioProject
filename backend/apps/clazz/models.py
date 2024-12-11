from django.db import models
from apps.course.models import Course

class Clazz(models.Model):
    clazz_id = models.AutoField(primary_key=True)
    method = models.CharField(max_length=500)
    date = models.DateField()
    topic = models.CharField(max_length=500)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    
    class Meta:
        db_table = "clazz"
        
    def __str__(self):
        return f"{self.topic} - {self.date}"