
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError, AuthenticationFailed
from django.db.models import Count

from .schema import server_list_docs
from .models import Server
from .serializer import ServerSerializer

# endpoint setup
class ServerListViewSet(viewsets.ViewSet):
    queryset = Server.objects.all()

    @server_list_docs
    def list(self, request):
        """List and filter server objects based on query parameters.

            This endpoint returns a list of servers and supports multiple optional
            query parameters for filtering, limiting results, and annotating
            additional data. Filters are applied in the order they appear in the
            request URL.

            Supported query parameters:

                category (str, optional):
                    Filters servers by category name.

                qty (int, optional):
                    Limits the number of returned server objects.
                    If not provided, all matching servers are returned.

                by_user (str, optional):
                    When set to "true", returns only servers that the
                    authenticated user is a member of.
                    Requires authentication.

                by_serverID (str, optional):
                    Filters the result to a single server with the given ID.
                    Requires authentication.

                with_numMembers (str, optional):
                    When set to "true", annotates each server with the total
                    number of members and includes this data in the serializer
                    context.

            Authentication:
            
                - Authentication is required when using `by_user=true`
                or when filtering by `by_serverID`.

                - If authentication is missing when required, an
                AuthenticationFailed exception is raised.

            Filtering behavior:
            
                - Filters are applied sequentially in the order they appear
                in the search bar.
                
                - Multiple filters can be combined in a single request.
                
                - If `qty` is provided, slicing is applied after all other
                filters.

            Error handling:
            
                - Raises AuthenticationFailed if a protected filter is used
                without authentication.
                
                - Raises ValidationError if `by_serverID` is invalid or if
                no server exists with the given ID.
                
                - Raises ValidationError if `by_serverID` cannot be cast to
                a valid value.

            Returns:
            
                Response:
                
                    A DRF Response object containing serialized server data.
                    If `with_numMembers=true`, the response includes the
                    annotated member count for each server.

            Example:
            
                GET /api/servers/?category=gaming&qty=5&with_numMembers=true

                GET /api/servers/?by_user=true

                GET /api/servers/?by_serverID=12
        """
        # Sample data representing servers
        category = request.query_params.get('category')
        qty = request.query_params.get('qty') # default to 10 if not provided
        by_user = request.query_params.get('by_user') == "true" 
        by_serverID = request.query_params.get('by_serverID')
        with_numMembers = request.query_params.get("with_numMembers") == "true"
        
        '''
        order of if statements is the order of appearents in search bar
        '''

        # # must be logged in
        # if by_user or by_serverID and not request.user.is_authenticated:
        #     raise AuthenticationFailed()
        
        if category:
            # convert to JSON so it can be sent over to the frontend
            # done using a serializer
            self.queryset = self.queryset.filter(category__name=category) #updating queryset to filter by category name
                    
        if by_user:
            if by_user and request.user.is_authenticated:    
                user_id = request.user.id
                self.queryset = self.queryset.filter(member=user_id) # updating queryset to filter by user ID
            else:
                raise AuthenticationFailed()

        if with_numMembers:
            self.queryset = self.queryset.annotate(num_members=Count("member")) # filter and return number of members 

        if qty:
            self.queryset = self.queryset[:int(qty)] # updating queryset to limit the number of results


        if by_serverID:
            if not request.user.is_authenticated:
                raise AuthenticationFailed()
            
            try:
                self.queryset = self.queryset.filter(id=by_serverID)
                if not self.queryset.exists():
                    raise ValidationError(detail=f"Server with id {by_serverID} not found")
            except ValueError: 
                raise ValidationError(detail=f"Server ValueError")

        # passing the above filters to the serializer   
        serializer = ServerSerializer(self.queryset, many=True, context={"num_members":with_numMembers})
        return Response(serializer.data)

    