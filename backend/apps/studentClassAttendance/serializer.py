from rest_framework import serializers
from .models import StudentClassAttendance

class StudentClassAttendanceSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = StudentClassAttendance
    fields = '__all__'