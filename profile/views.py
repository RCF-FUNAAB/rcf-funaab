from rest_framework.generics import (
ListAPIView, CreateAPIView, RetrieveAPIView) 

from .models import Profile

from .serializers import ProfileSerializer

from rest_framework.permissions import IsAuthenticated

from rest_framework import status

from rest_framework.response import Response



#ProfileListView

class ProfileListView(ListApiView):
    queryset = Profile.objects.all()
    
    permission_classes = [IsAuthenticated]
    
    serializer_class = ProfileSerializer
    
#ProfileCreateView

class ProfileCreateView(CreateAPIView):
    queryset = Profile.objects.all()
    
    permission_classes = [IsAuthenticated]
    
    serializer_class = ProfileSerializer
    
    def post(self, request,*args,**kwargs):
        try:
            return super().post(request,*args,**Kwargs)
        except Exception as e:
            return Response (str(e), status = status.HTTP_400_BAD_REQUEST)
            
    
# profileDetailView

class profileDetailView(RetrieveAPIView):
    
    queryset = Profile.objects.all()
    
    permission_classes = [IsAuthenticated]
    
    serializer_class = ProfileSerializer
    
    lookup_field = 'pk'
    
    