"""
URL configuration for attenzio project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import re_path, include

urlpatterns = [
    re_path('admin/', admin.site.urls),
    re_path(r'^answer/', include('apps.answer.urls')),
    re_path(r'^classMaterial/', include('apps.classMaterial.urls')),
    re_path(r'^clazz/', include('apps.clazz.urls')),
    re_path(r'^course/', include('apps.course.urls')),
    re_path(r'^option/', include('apps.option.urls')),
    re_path(r'^question/', include('apps.question.urls')),
    re_path(r'^role/', include('apps.role.urls')),
    re_path(r'^studentClassAttendance/', include('apps.studentClassAttendance.urls')),
    re_path(r'^user/', include('apps.user.urls')),
    re_path(r'^userCourse/', include('apps.userCourse.urls')),
]
