from django.test import TestCase
from .models import Launch

class LaunchTestCase(TestCase):
    def setUp(self):
        Launch.objects.create(
            flight_number = 100,
            launch_year = 1984,
            launch_date_utc = "2017-11-14T00:00:00",
            launch_date_local = "2017-11-14T00:00:00",
            rocket_id = "01",
            rocket_name = "Falcon",
            rocket_type = "Falcon",
            land_success = True,
            site_name = "Sítio de Atibaia",
            customer = "Mercedes",
            nationality = "Brazilian",
            launch_success = True,
            video_link = "youtube.com"
        )

    def test_launch_site_name(self):
        launch = Launch.objects.get(flight_number="100")

        self.assertEqual(launch.site_name, 'Sítio de Atibaia')
        self.assertNotEqual(launch.site_name, 'youtube.com')

    def test_launch_as_json(self):
        launch = Launch.objects.get(flight_number="100")

        self.assertEqual(launch.as_json()["customer"], "Mercedes")
        self.assertNotEqual(launch.as_json()["site_name"], "youtube.com")