from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, Group, Permission
from rest_framework_simplejwt.tokens import RefreshToken # type: ignore


# AUTH_PROVIDERS setup
AUTH_PROVIDERS = {
    'email': 'email',
}

# Custom Manager for User
class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Please provide an email address')
        if not username:
            raise ValueError('Please provide a username')

        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_verified', True)
        
        # Default superuser permissions
        extra_fields.setdefault('can_create', True)
        extra_fields.setdefault('can_update', True)
        extra_fields.setdefault('can_delete', True)
        extra_fields.setdefault('can_read', True)

        return self.create_user(username, email, password, **extra_fields)


# Custom User model
class User(AbstractBaseUser, PermissionsMixin):
    id = models.BigAutoField(primary_key=True, editable=False)
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(max_length=255, unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    auth_provider = models.CharField(max_length=50, blank=False, null=False, default=AUTH_PROVIDERS.get('email'))

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = UserManager()

    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }

    def __str__(self):
        return self.email

    # Adding related_name to avoid clashes with built-in Group and Permission models
    groups = models.ManyToManyField(
        Group,
        related_name='custom_user_set',
        blank=True,
    )

    user_permissions = models.ManyToManyField(
        Permission,
        related_name='custom_user_set',
        blank=True,
    )
