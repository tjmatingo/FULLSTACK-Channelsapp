from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Server
from .serializer import ServerSerializer

# endpoint setup
class ServerListViewSet(viewsets.ViewSet):
    queryset = Server.objects.all()

    def list(self, request):
        # Sample data representing servers
        category = request.query_params.get('category')
        if category:
            # convert to JSON so it can be sent over to the frontend
            # done using a serializer
            self.queryset = self.queryset.filter(category__name=category) #updating queryset to filter by category name

        serializer = ServerSerializer(self.queryset, many=True)
        return Response(serializer.data)

    