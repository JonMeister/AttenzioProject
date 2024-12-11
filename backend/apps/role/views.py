from rest_framework import generics, status
from rest_framework.response import Response

from .models import Role
from .serializer import RoleSerializer

class ListCreateRole(generics.ListAPIView):
  queryset = Role.objects.all()
  serializer_class = RoleSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = RoleSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
