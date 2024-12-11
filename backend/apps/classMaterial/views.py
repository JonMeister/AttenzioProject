from rest_framework import generics, status
from rest_framework.response import Response

from .models import ClassMaterial
from .serializer import ClassMaterialSerializer

class ListCreateClassMaterial(generics.ListAPIView):
  queryset = ClassMaterial.objects.all()
  serializer_class = ClassMaterialSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = ClassMaterialSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
