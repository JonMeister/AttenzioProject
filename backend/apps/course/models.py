from django.db import models

class Course(models.Model):
    course_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=500)
    
    class Meta:
        db_table = "course"
        
    def __str__(self):
        return self.name