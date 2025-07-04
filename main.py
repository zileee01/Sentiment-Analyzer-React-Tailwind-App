from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from nltk.sentiment import SentimentIntensityAnalyzer

# Initialize app
app = FastAPI()

# CORS: Let frontend call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # adjust based on frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the sentiment analyzer
sia = SentimentIntensityAnalyzer()

# Pydantic model
class SentimentRequest(BaseModel):
    text: str

@app.post("/analyse")
def analyze_sentiment(request: SentimentRequest):
    scores = sia.polarity_scores(request.text)

    # Simple rule-based decision
    compound = scores["compound"]
    if compound >= 0.05:
        sentiment = "positive"
    elif compound <= -0.05:
        sentiment = "negative"
    else:
        sentiment = "neutral"

    return {
        "sentiment": sentiment,
        "scores": scores  # Optional: return full SIA scores
    }
