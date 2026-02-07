from django.db import models
from django.conf import settings 
from django.shortcuts import get_object_or_404
from django.dispatch import receiver

def serverIconUploadPath(instance, filename):
    return f'server/{instance.id}/server_icons/{filename}'

def serverBannerUploadPath(instance, filename):
    return f'server/{instance.id}/server_banner/{filename}'

# function for the directory path for saving category icons
def categoryIconUploadPath(instance, filename):
    return f"category/{instance.id}/category_icon/{filename}"

# Create your models here.
class Category(models.Model):
    '''Model representing a Server category.'''
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    # SVG
    icon = models.FileField(null=True, blank=True, upload_to=categoryIconUploadPath)
    
    def save(self, *args, **kwargs):
        if self.id:
            existing = get_object_or_404(Category, id=self.id)

            # if icon is changed the old one must be deleted
            if existing.icon != self.icon:
                existing.icon.delete(save=False)
        super(Category, self).save(*args, **kwargs)
    
    # if category is deleted icon must be deleted as well
    @receiver(models.signals.pre_delete, sender="server.Category")
    def category_delete_files(sender, instance, **kwargs):        
        for field in instance._meta.fields:
            if field.name == "icon":
                file = getattr(instance, field.name)
                if file:
                    file.delete(save=False)


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
        return f"{self.name} - {self.id}"
    

class Channel(models.Model):
    name = models.CharField(max_length=100)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='channel_owner')
    server = models.ForeignKey(Server, on_delete=models.CASCADE, related_name='channel_server')
    topic = models.CharField(max_length=100)
    banner = models.ImageField(upload_to=serverBannerUploadPath, null=True, blank=True)
    icon = models.ImageField(upload_to=serverIconUploadPath, null=True, blank=True)


    def save(self, *args, **kwargs):
        # saves all the names in the db in lowercase to avoid case sensitivity issues
        
        self.name = self.name.lower()
        super(Channel, self).save(*args, **kwargs)

        # checking if the id exists
        if self.id:
            existing = get_object_or_404(Channel, id=self.id)

            # if icon is changed the old one must be deleted
            if existing.icon != self.icon:
                existing.icon.delete(save=False)
        super(Channel, self).save(*args, **kwargs)
    
    # if channel is deleted icon must be deleted as well
    @receiver(models.signals.pre_delete, sender="server.Channel")
    def category_delete_files(sender, instance, **kwargs):        
        for field in instance._meta.fields:
            if field.name == "icon":
                file = getattr(instance, field.name)
                if file:
                    file.delete(save=False)



    def __str__(self):
        return self.name