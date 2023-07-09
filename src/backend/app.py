import fastapi

newsAPI = "c1aa2105825b431591bdd4ee903f5165" # Change to env variable
app = fastapi.FastAPI()

@app.get("/")
def index():
    print("Hello World")
    