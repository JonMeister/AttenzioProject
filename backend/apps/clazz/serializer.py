from rest_framework import serializers
from .models import Clazz

class ClazzSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = Clazz
    fields = '__all__'