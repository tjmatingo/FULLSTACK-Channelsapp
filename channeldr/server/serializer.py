from rest_framework import serializers
from .models import Server, Category

'''
Serializer for the Server model to convert model instances to JSON format
and vice versa.
'''

class ServerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Server
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'