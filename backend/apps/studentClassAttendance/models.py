from django.db import models
from apps.clazz.models import Clazz
from apps.user.models import User


class StudentClassAttendance(models.Model):
    attendance_id = models.AutoField(primary_key=True)
    location = models.CharField(max_length=500)
    is_valid = models.BooleanField(default=False)
    date = models.DateField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    clazz = models.ForeignKey(Clazz, on_delete=models.CASCADE)
    
    class Meta:
        db_table = "student_class_attendance"
        
    def __str__(self):
        return f"Attendance for {self.user} in {self.clazz} on {self.date}"