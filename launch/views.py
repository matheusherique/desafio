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
            __json = requests.get('https://api.spacexdata.com/v3/launches/next')
            __json = __json.json()
            __launch = Launch()
            __launch.flight_number = int(__json['flight_number'])
            __launch.launch_year = int(__json['launch_year'])
            __launch.launch_date_utc = __json['launch_date_utc']
            __launch.launch_date_local = __json['launch_date_local']
            __launch.rocket_id = __json['rocket']['rocket_id']
            __launch.rocket_name = __json['rocket']['rocket_name']
            __launch.rocket_type = __json['rocket']['rocket_type']
            __launch.land_success = False
            __launch.site_name = __json['launch_site']['site_name_long']
            __launch.customer = __json['rocket']['second_stage']['payloads'][0]['customers'][0]
            __launch.nationality = __json['rocket']['second_stage']['payloads'][0]['nationality']
            __launch.launch_success = False
            __launch.video_link = __json['links']['video_link']

            __serializer = LaunchSerializer(data=__launch.as_json())

            if __serializer.is_valid():
                __serializer.save()
                return JsonResponse(__serializer.data, status=201)
            else:
                return JsonResponse(__serializer.errors, status=400)

    def latest_launch(request):
        if request.method == "GET":
            __json = requests.get('https://api.spacexdata.com/v3/launches/latest')
            __json = __json.json()
            __launch = Launch()
            __launch.flight_number = int(__json['flight_number'])
            __launch.launch_year = int(__json['launch_year'])
            __launch.launch_date_utc = __json['launch_date_utc']
            __launch.launch_date_local = __json['launch_date_local']
            __launch.rocket_id = __json['rocket']['rocket_id']
            __launch.rocket_name = __json['rocket']['rocket_name']
            __launch.rocket_type = __json['rocket']['rocket_type']
            __launch.land_success = False
            __launch.site_name = __json['launch_site']['site_name_long']
            __launch.customer = __json['rocket']['second_stage']['payloads'][0]['customers'][0]
            __launch.nationality = __json['rocket']['second_stage']['payloads'][0]['nationality']
            __launch.launch_success = False
            __launch.video_link = "https://www.youtube.com/embed/" + __json['links']['youtube_id']

            __serializer = LaunchSerializer(data=__launch.as_json())

            if __serializer.is_valid():
                __serializer.save()
                return JsonResponse(__serializer.data, status=201)
            return JsonResponse(__serializer.errors, status=400)

    def upcoming_launches(request):
        __launches = []

        if request.method == "GET":
            __json = requests.get('https://api.spacexdata.com/v3/launches/upcoming')
            __json = __json.json()

            for flight in __json:
                __launch = Launch()
                __launch.flight_number = int(flight['flight_number'])
                __launch.launch_year = int(flight['launch_year'])
                __launch.launch_date_utc = flight['launch_date_utc']
                __launch.launch_date_local = flight['launch_date_local']
                __launch.rocket_id = flight['rocket']['rocket_id']
                __launch.rocket_name = flight['rocket']['rocket_name']
                __launch.rocket_type = flight['rocket']['rocket_type']
                __launch.land_success = False
                __launch.site_name = flight['launch_site']['site_name_long']
                __launch.customer = flight['rocket']['second_stage']['payloads'][0]['customers']
                __launch.nationality = flight['rocket']['second_stage']['payloads'][0]['nationality']
                __launch.manufacturer = flight['rocket']['second_stage']['payloads'][0]['manufacturer']
                __launch.launch_success = False
                __launch.video_link = flight['links']['video_link']

                __launches.append(__launch.as_json())
                __serializer = LaunchSerializer(data=__launch.as_json())
                if __serializer.is_valid():
                    __serializer.save()

            return JsonResponse(__launches, safe=False, status=201)

    def past_launches(request):
        __launches = []

        if request.method == "GET":
            __json = requests.get('https://api.spacexdata.com/v3/launches/past')
            __json = __json.json()

            for flight in __json:
                __launch = Launch()
                __launch.flight_number = int(flight['flight_number'])
                __launch.launch_year = int(flight['launch_year'])
                __launch.launch_date_utc = flight['launch_date_utc']
                __launch.launch_date_local = flight['launch_date_local']
                __launch.rocket_id = flight['rocket']['rocket_id']
                __launch.rocket_name = flight['rocket']['rocket_name']
                __launch.rocket_type = flight['rocket']['rocket_type']
                __launch.land_success = False
                __launch.site_name = flight['launch_site']['site_name_long']
                __launch.customer = flight['rocket']['second_stage']['payloads'][0]['customers']
                __launch.nationality = flight['rocket']['second_stage']['payloads'][0]['nationality']
                __launch.manufacturer = flight['rocket']['second_stage']['payloads'][0]['manufacturer']
                __launch.launch_success = False
                __launch.video_link = "https://www.youtube.com/embed/" + flight['links']['video_link']

                __launches.append(__launch.as_json())
                __serializer = LaunchSerializer(data=__launch.as_json())
                if __serializer.is_valid():
                    __serializer.save()

            return JsonResponse(__launches, safe=False, status=201)