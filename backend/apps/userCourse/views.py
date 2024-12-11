from rest_framework import generics, status
from rest_framework.response import Response

from .models import UserCourse
from .serializer import UserCourseSerializer

class ListCreateUserCourse(generics.ListAPIView):
  queryset = UserCourse.objects.all()
  serializer_class = UserCourseSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = UserCourseSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
