from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class Account(AbstractUser):
    '''Custom user model for the platform.'''
    # Additional fields can be added here as needed
    pass