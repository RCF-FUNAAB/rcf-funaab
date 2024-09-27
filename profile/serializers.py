from rest_framework import serializers
from .models import Profile

class ProfileSerializer (serializers.ModelSerializers):
    class Meta:
        models = Profile
        fields = ['Id','user_name','first_name','last_name']
    