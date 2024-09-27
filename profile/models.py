import uuid
from django.db import models
from account.models import User

class  Profile (models.Model):
    
    Id = models.UUIDField(unique = True, primary_key = True, editable = False, default = uuid.uuid4)
    
    first_name = models.CharField(unique = True,max_length = 50,help_text = 'Your Firstname', blank = True)
    
    last_name = models.CharField(max_length = 30, unique = True, help_text = 'Your Lastname', blank = True)
    
    user_name = models.CharField(unique = True,max_length = 50,help_text = 'Your Nickname', blank = True)
    