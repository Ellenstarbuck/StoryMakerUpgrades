# Generated by Django 2.2.9 on 2020-03-06 11:47

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('storys', '0012_auto_20200301_1352'),
    ]

    operations = [
        migrations.AlterField(
            model_name='story',
            name='age_rating',
            field=models.PositiveSmallIntegerField(validators=[django.core.validators.MinValueValidator(6), django.core.validators.MaxValueValidator(12)]),
        ),
    ]