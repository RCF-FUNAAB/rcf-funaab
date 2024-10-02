from  rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from .models import Payment
from rest_framework import permissions
from .serializers import PaymentSerializer

class PaymentList(APIView):
	queryset = Payment.objects.all()
	serializer_class = PaymentSerializer
	permission_classes = [permissions.IsAuthenticated]
	
class PaymentCreate(CreateAPIView):
	queryset = Payment.objects.all()
	permission_classes = [permissions.IsAuthenticated]
	serializer_class = PaymentSerializer