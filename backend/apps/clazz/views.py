from rest_framework import generics, status
from rest_framework.response import Response

from .models import Clazz
from .serializer import ClazzSerializer

class ListCreateClazz(generics.ListAPIView):
  queryset = Clazz.objects.all()
  serializer_class = ClazzSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = ClazzSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
