from rest_framework.generics import (
ListApiView, CreateAPIView, DetailAPIView) 
from .models import Profile
from .serializers import ProfileSerializer

#ProfileListView

class ProfileListView(ListApiView):
    queryset = Profile.objects.all()
    
    serializer_class = ProfileSerializer
    
#ProfileCreateView

class ProfileCreateView(CreateAPIView):
    queryset = Profile.objects.all()
    
    serializer_class = ProfileSerializer
    
# profileDetailView

class profileDetailView(DetailView):
    
    queryset = Profile.objects.all()
    
    serializer_class = ProfileSerializer
    
    