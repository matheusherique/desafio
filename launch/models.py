from django.db import models

class Launch(models.Model):
    flight_id = models.CharField(max_length=100)
    flight_number = models.IntegerField()
    launch_year = models.IntegerField()
    launch_date_utc = models.CharField(max_length=100)
    launch_date_local = models.CharField(max_length=100)
    rocket_id = models.CharField(max_length=100)
    rocket_name = models.CharField(max_length=100)
    rocket_type = models.CharField(max_length=100)
    land_success = models.BooleanField()
    site_name = models.CharField(max_length=100)
    customer = models.CharField(max_length=100)
    nationality = models.CharField(max_length=100)
    manufacturer = models.CharField(max_length=100)
    epoch = models.CharField(max_length=100)
    launch_success = models.BooleanField()
