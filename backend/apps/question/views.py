from rest_framework import generics, status
from rest_framework.response import Response

from .models import Question
from .serializer import QuestionSerializer

class ListCreateQuestion(generics.ListAPIView):
  queryset = Question.objects.all()
  serializer_class = QuestionSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = QuestionSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
