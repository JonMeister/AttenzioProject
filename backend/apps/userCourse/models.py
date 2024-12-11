from django.db import models
from apps.user.models import User
from apps.course.models import Course

# Create your models here.
class UserCourse(models.Model):
    usercourse_id= models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    
    class Meta:
        db_table = "user_course"  # Explicit table name
        unique_together = ('user', 'course')
        
    def __str__(self):
        return self.name
