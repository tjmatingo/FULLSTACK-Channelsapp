from django.db import models
from django.conf import settings 

# Create your models here.
class Category(models.Model):
    '''Model representing a Server category.'''
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return self.name
    

class Server(models.Model):
    '''Model representing a Server.'''
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=250, null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='server_category')
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='server_owner')
    member = models.ManyToManyField(settings.AUTH_USER_MODEL)

    def __str__(self):
        return self.name
    

class Channel(models.Model):
    name = models.CharField(max_length=100)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='channel_owner')
    server = models.ForeignKey(Server, on_delete=models.CASCADE, related_name='channel_server')
    topic = models.CharField(max_length=100)


    def save(self, *args, **kwargs):
        # saves all the names in the db in lowercase to avoid case sensitivity issues
        
        self.name = self.name.lower()
        super(Channel, self).save(*args, **kwargs)




    def __str__(self):
        return self.name