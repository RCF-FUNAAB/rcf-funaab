# Generated by Django 5.0.7 on 2024-07-27 23:57

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_pizzeria_active_pizzeria_description_pizzeria_email_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Church',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('phone_number', models.CharField(blank=True, max_length=11, validators=[django.core.validators.RegexValidator(regex='^0\\d{9,10}$')])),
                ('description', models.TextField(blank=True)),
                ('email', models.EmailField(blank=True, max_length=245)),
                ('active', models.BooleanField(default=True)),
            ],
        ),
        migrations.DeleteModel(
            name='pizzeria',
        ),
    ]
