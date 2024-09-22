from rest_framework import serializers
from .models import Payment

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['bank_used', 'bank_account_name', 'date_of_transaction', 'receipt']