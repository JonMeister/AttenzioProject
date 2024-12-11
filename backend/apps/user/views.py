from rest_framework import generics, status
from rest_framework.response import Response

from .models import User
from .serializer import UserSerializer

class ListCreateUser(generics.ListAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = UserSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
