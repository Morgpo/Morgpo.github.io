import random
import string

class PasswordGenerator:
    @staticmethod
    def generate_password(length=16):
        # Generate a random password with the specified length
        characters = string.ascii_letters + string.digits + string.punctuation
        password = ''.join(random.choice(characters) for i in range(length))
        return password