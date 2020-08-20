from django.shortcuts import render

from .models import Launch
from .serializers import LaunchSerializer
from rest_framework import generics

class LaunchListCreate(generics.ListCreateAPIView):
    queryset = Launch.objects.all()
    serializer_class = LaunchSerializer
