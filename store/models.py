from django.db import models

class Payment(models.Model):
    bank_used = models.CharField(max_length=100)
    bank_account_name = models.CharField(max_length=100)
    date_of_transaction = models.DateField()
    receipt = models.ImageField(upload_to='receipts/')
    
    def __str__(self):
        return f'{self.bank_account_name} - {self.bank_used}'