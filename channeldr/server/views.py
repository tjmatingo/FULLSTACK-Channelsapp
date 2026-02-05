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
        qty = request.query_params.get('qty') # default to 10 if not provided
        by_user = request.query_params.get('by_user') == "true" 

        '''
        order of if statements is the order of appearents in search bar
        '''
        
        if category:
            # convert to JSON so it can be sent over to the frontend
            # done using a serializer
            self.queryset = self.queryset.filter(category__name=category) #updating queryset to filter by category name
                    
        if by_user:
            user_id = request.user.id
            self.queryset = self.queryset.filter(member=user_id) # updating queryset to filter by user ID

        if qty:
            self.queryset = self.queryset[:int(qty)] # updating queryset to limit the number of results


        serializer = ServerSerializer(self.queryset, many=True)
        return Response(serializer.data)

    