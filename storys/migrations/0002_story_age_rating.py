# Generated by Django 2.2.9 on 2020-02-26 15:05

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('storys', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='story',
            name='age_rating',
            field=models.PositiveSmallIntegerField(default=9, validators=[django.core.validators.MinValueValidator(8), django.core.validators.MaxValueValidator(12)]),
            preserve_default=False,
        ),
    ]
