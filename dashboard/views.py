from rest_framework.generics import  ListAPIView, CreateAPIView

from rest_framework.permissions import IsAuthenticated
from .models import User, Dashboard,Widget

from .Serializers import WidgetSerializer, DashboardSerializer, UserSerializer

from rest_framework.exceptions import APIException




# Dashboard View

class DashboardListView(ListAPIView):
    
    queryset = Dashboard.objects.all()
    
    serializer_class = DashboardSerializer
    
    permissions_classes = [IsAuthenticated]
    
    
class DashboardCreateView(CreateAPIView):
    
    queryset = Dashboard.objects.all()
    
    serializer_class = DashboardSerializer
    
    permission_classes = [IsAuthenticated]
    
# Handle exception

    def post(self, request,*args,**kwargs):
        try:
            return super().post(request,*args,**Kwargs)
        except Exception as e:
            raise APIEXCEPTION ('error creating dashboard')
    
# add validation

    def validate_name(self, value):
        if not value:
            raise validators.ValidationError('Name is required')
        return value
        

    
# User View   

class UserListView(ListAPIView):
    
    queryset = User.objects.all()
    
    serializer_class = UserSerializer
    
    permissions_classes = [IsAuthenticated]
    
    
class userCreateView(CreateAPIView):
    
    queryset = User.objects.all()
    
    serializer_class = UserSerializer
    
    permissions_classes = [IsAuthenticated]




# Widget View

class WidgetListView(ListAPIView):
    
    queryset = Widget.objects.all()
    
    serializer_class = WidgetSerializer
    
    permissions_classes = [IsAuthenticated]
 
       
class WidgetCreateView(CreateAPIView):
    
    queryset = Widget.objects.all()
    
    serializer_class = WidgetSerializer
    
    permissions_classes = [IsAuthenticated]
    
    
