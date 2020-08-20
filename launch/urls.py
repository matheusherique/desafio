from django.urls import path
from . import views

urlpatterns = [
    path('api/launch/', views.LaunchListCreate.as_view()),
]