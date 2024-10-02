from rest_framework.generics import ListAPIView, CreateAPIView

from rest_framework.permissions import IsAuthenticated

from .models import Customer,Sale,Product, Market_Trend

from .serializers import CustomerSerializer, ProductSerializer, Market_TrendSerializer, SaleSerializer

from rest_framework.exceptions import APIEXCEPTION

# My Views


'''CUSTOMER VIEW'''

# Custom View

class CustomerListView(ListAPIView):
    
    queryset = Customer.objects.all()
    
    serializer_class = CustomerSerializer
    
    permission_classes =[IsAuthenticated]
 
       
class CustomeCreateView(CreateAPIView):
    
    queryset = Customer.objects.all()
    
    serializer_class = CustomerSerializer
    
    permission_classes = [IsAuthenticated]
    
    
'''PRODUCT VIEW''' 
               
# Product View    
class ProductListView(ListAPIView):
    
    queryset = Product.objects.all()
    
    serializer_class = ProductSerializer
    
    permission_classes = [IsAuthenticated]
    
    
class ProductCreateView(CreateAPIView):
    
    queryset = Product.objects.all()
    
    serializer_class = ProductSerializer
    
    permission_classes = [IsAuthenticated]
# Handle exception
    
    def post(self, request,*args,**kwargs):
        try:
            return super().post(request,*args,**kwargs)
        except IntegrityError:
            raise APIEXCEPTION ('Database integrity error')
        except Exception as e:
            raise APIEXCEPTION ('Error Creating product')
# I added it to validate price

    def validate_price(self, value):
         if not value:
             raise serializers.ValidationError('price is required')


'''SALE VIEW'''    
            
# Sale Views           
class SaleListView(ListAPIView):
    queryset = Sale.objects.all()
    
    serializer_class = SaleSerializer
    
    permission_classes = [IsAuthenticated]
    
    
class SaleCreateView(CreateAPIView):
    
    queryset = Sale.objects.all()
    
    serializer_class = ProductSerializer
    
    permission_classes = [IsAuthenticated]
    
 
'''MARKET VIEW'''

#Market Views             
class Market_TrendListView(ListAPIView):
    
    queryset = Market_Trend.objects.all()
    
    serializer_class = Market_TrendSerializer
    
    permission_classes = [IsAuthenticated]
    
    
class Market_TrendCreateView(CreateAPIView):
    
    queryset = Market_Trend.objects.all()
    
    serializer_class = Market_TrendSerializer
    
    permission_classes = [IsAuthenticated]
    