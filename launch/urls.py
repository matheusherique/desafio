from django.urls import path
from . import views

urlpatterns = [
    path('api/launch/', views.LaunchListCreate.as_view()),
    path('next/', views.Rocket.next_launch, name='next'),
    path('latest/', views.Rocket.latest_launch, name='latest'),
    path('upcoming/', views.Rocket.upcoming_launches, name='upcoming'),
    path('past/', views.Rocket.past_launches, name='past'),
]