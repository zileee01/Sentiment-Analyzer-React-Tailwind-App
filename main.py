from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Adjust if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
) 

class SentimentRequest(BaseModel):
    text: str

@app.post("/analyse")
def analyse_sentiment(request: SentimentRequest):
    text = request.text.lower()

    # fake data
    if any(word in text for word in ["love", "great", "awesome", "happy"]):
        sentiment = "positive"
    elif any(word in text for word in ["bad", "hate", "angry", "terrible", "sad"]):
        sentiment = "negative"
    else:
        sentiment = "neutral"

    return {"sentiment": sentiment}
