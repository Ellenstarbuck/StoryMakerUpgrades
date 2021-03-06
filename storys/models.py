from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.

#story model 
class Story(models.Model): 
  title = models.CharField(max_length=50)
  age_rating = models.PositiveSmallIntegerField(validators=[MinValueValidator(6), MaxValueValidator(12)]) 
  image = models.CharField(max_length=200)
  lineStart = models.CharField(max_length=400, default='Your first line')
  owner = models.ForeignKey(User, related_name='storys', on_delete=models.CASCADE)
  genre = models.CharField(max_length=50, blank=True) 
  

  def __str__(self):
    return f'{self.title}'



#line model - the story model is a foreign key, and it gets attached to that story model
class Line(models.Model):
  line = models.CharField(max_length=400)
  owner = models.ForeignKey(User, related_name='lines', null=True, on_delete=models.CASCADE)
  story = models.ForeignKey(Story, related_name='lines', blank=False, null=True, on_delete=models.CASCADE)


  def __str__(self):
        return f'{self.line}'
