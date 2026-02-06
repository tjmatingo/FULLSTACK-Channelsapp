from rest_framework import serializers
from .models import Server, Category, Channel

'''
Serializer for the Server model to convert model instances to JSON format
and vice versa.
'''

class ChannelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Channel 
        fields  = '__all__'

class ServerSerializer(serializers.ModelSerializer):
    num_members = serializers.SerializerMethodField()
    channel_server = ChannelSerializer(many=True)
    
    # selecting server db table and excluding the member field
    class Meta:
        model = Server
        exclude = ("member",)
    
    def get_num_members(self, obj):
        if hasattr(obj, "num_members"):
            return obj.num_members
        else: 
            return None
    
    
    def to_representation(self, instance):
        '''
         removes the num members attribure if there us no members
        '''
        data = super().to_representation(instance)
        num_members = self.context.get("num_members")

        if not num_members:
            data.pop("num_members", None)
        return data

class CategorySerializer(serializers.ModelSerializer):
    # selecting the category db table with all the fields
    class Meta:
        model = Category
        fields = '__all__'