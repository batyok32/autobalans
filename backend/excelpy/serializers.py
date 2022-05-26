from rest_framework import serializers


class OperationsSerializer(serializers.Serializer):
    Do = serializers.CharField(max_length=50)
    Ko = serializers.CharField(max_length=50)
    sum = serializers.IntegerField()
    time = serializers.CharField(max_length=50)
    name = serializers.CharField(max_length=100)


class StartDataSerializer(serializers.Serializer):
    cs = serializers.CharField(max_length=50)
    sum = serializers.IntegerField()


class MainSerializer(serializers.Serializer):
    operations = OperationsSerializer(many=True, read_only=True)
    start_data = StartDataSerializer(many=True, read_only=True)
    template_file = serializers.FileField()
