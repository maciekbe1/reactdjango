from apps.models import App
from rest_framework import viewsets, permissions
from .serializers import AppSerializer

class AppViewSet(viewsets.ModelViewSet):
  queryset = App.objects.all()
  permissions_classes = [
    permissions.AllowAny,
  ]

  serializer_class = AppSerializer