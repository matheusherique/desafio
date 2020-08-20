from django.shortcuts import render

from .models import Launch
from .serializers import LaunchSerializer
from django.http import JsonResponse
from rest_framework import generics
import requests

class LaunchListCreate(generics.ListCreateAPIView):
    queryset = Launch.objects.all()
    serializer_class = LaunchSerializer
    
class Rocket(object):

    def next_launch(request):
        if request.method == "GET":
            json = requests.get('https://api.spacexdata.com/v3/launches/next')
            json = json.json()
            launch = Launch()
            launch.flight_number = int(json['flight_number'])
            launch.launch_year = int(json['launch_year'])
            launch.launch_date_utc = json['launch_date_utc']
            launch.launch_date_local = json['launch_date_local']
            launch.rocket_id = json['rocket']['rocket_id']
            launch.rocket_name = json['rocket']['rocket_name']
            launch.rocket_type = json['rocket']['rocket_type']
            launch.land_success = False
            launch.site_name = json['launch_site']['site_name_long']
            launch.customer = json['rocket']['second_stage']['payloads'][0]['customers'][0]
            launch.nationality = json['rocket']['second_stage']['payloads'][0]['nationality']
            launch.launch_success = False

            serializer = LaunchSerializer(data=launch.as_json())

            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=201)
            else:
                return JsonResponse(serializer.errors, status=400)
