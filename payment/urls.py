from django.urls import path
from .views import PaymentCreate, PaymentList

urlpatterns = [
    path('payment/', PaymentList.as_view(),name = 'payment_list'),
    path('payment/v1/', PaymentCreate.as_view(),name = 'payment_create'),

]