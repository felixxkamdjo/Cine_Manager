from django.db import models

# Create your models here.
class Movies(models.Model):
    title = models.CharField(max_length=35, default='inconnu')
    synopsis = models.TextField(default='text')
    genre = models.CharField(max_length=50, default='inconnu')
    director = models.CharField(max_length=50, default='inconnu')
    exit_year = models.CharField(max_length=4, default='0000')
    rank = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)
    
    
    def __str__(self):
        return self.title;