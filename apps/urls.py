from rest_framework import routers
from .api import AppViewSet

router = routers.DefaultRouter()
router.register('api/apps', AppViewSet, 'apps')
urlpatterns = router.urls