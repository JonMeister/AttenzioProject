from django.db import models
from apps.option.models import Option
from apps.clazz.models import Clazz

class Question(models.Model):
    question_id = models.AutoField(primary_key=True)
    type = models.CharField(max_length=500)
    content = models.CharField(max_length=500)
    difficulty = models.CharField(max_length=500)
    option = models.ForeignKey(Option, on_delete=models.CASCADE)
    clazz = models.ForeignKey(Clazz, on_delete=models.CASCADE)
    
    class Meta:
        db_table = "question"
        
    def __str__(self):
        return self.question_id