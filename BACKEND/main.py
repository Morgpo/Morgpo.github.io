from fastapi import FastAPI
from fastapi.responses import JSONResponse
import random
import string

app = FastAPI()

def generate_random_password(length=18):
    # Generate a random password
    pass

@app.get("/api/generate_password")
async def generate_password():
    password = generate_random_password()
    # Needs to send a JSON response of the generated password
    pass

@app.get("/api/fetch_accounts")
async def fetch_accounts(): 
    # Needs to send a JSON response of all the account names
    pass