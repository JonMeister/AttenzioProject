from django.db import models
from apps.option.models import Option
from apps.user.models import User

class Answer(models.Model):
    answer_id = models.AutoField(primary_key=True)
    content = models.CharField(max_length=500)
    option = models.ForeignKey(Option, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    class Meta:
        db_table = "answer"
        
    def __str__(self):
        return f"Answer by {self.user.name} to {self.option.content}"