from rest_framework import generics, status
from rest_framework.response import Response

from .models import Answer
from .serializer import AnswerSerializer

class ListCreateAnswer(generics.ListAPIView):
  queryset = Answer.objects.all()
  serializer_class = AnswerSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = AnswerSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
