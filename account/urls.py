from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.RegisterUserAPIView.as_view(), name='register_user'),
    path('login/', views.LoginUserAPIView.as_view(), name='login_user'),
    path('verify-otp/', views.VerifyOTPAPIView.as_view(), name='verify_otp'),
    path('action/<str:token>/', views.UserActionTokenAPIView.as_view(), name='user_action'),
]