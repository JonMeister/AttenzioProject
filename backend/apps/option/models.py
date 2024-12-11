from django.db import models

class Option(models.Model):
    option_id = models.AutoField(primary_key=True)
    is_correct = models.BooleanField(default=False)
    content = models.CharField(max_length=500)
    
    class Meta:
        db_table = "option"
        
    def __str__(self):
        return self.content