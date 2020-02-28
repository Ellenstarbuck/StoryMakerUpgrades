# Generated by Django 2.2.9 on 2020-02-27 18:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('storys', '0007_auto_20200227_1809'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='story',
            name='line',
        ),
        migrations.AddField(
            model_name='line',
            name='story',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='lines', to='storys.Story'),
        ),
    ]