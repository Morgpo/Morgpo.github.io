from fastapi import FastAPI

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

@app.get("/api/dropbox_auth")
async def dropbox_auth():
    # Implement the dropbox OAuth2 flow here
    # Have the RedirectURI be morgpo.github.io/LockForge/index
    pass