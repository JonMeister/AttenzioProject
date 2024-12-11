from rest_framework import generics, status
from rest_framework.response import Response

from .models import Option
from .serializer import OptionSerializer

class ListCreateOption(generics.ListAPIView):
  queryset = Option.objects.all()
  serializer_class = OptionSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = OptionSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
