from rest_framework import generics, status
from rest_framework.response import Response

from .models import Course
from .serializer import CourseSerializer

class ListCreateCourse(generics.ListAPIView):
  queryset = Course.objects.all()
  serializer_class = CourseSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = CourseSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
