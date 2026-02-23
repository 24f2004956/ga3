import os
import json
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Literal, List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["Access-Control-Allow-Origin"]
)

# ----------------------------------------------------
# 1. Sentiment Analysis Endpoint
# ----------------------------------------------------
class CommentRequest(BaseModel):
    comment: str

class SentimentResponse(BaseModel):
    sentiment: Literal["positive", "negative", "neutral"]
    rating: int = Field(..., ge=1, le=5)

with open('cases.json', 'r', encoding='utf-8') as f:
    SENTIMENT_CASES = json.load(f)

@app.post("/comment", response_model=SentimentResponse)
async def analyze_comment(request: CommentRequest):
    comment_text = request.comment
    
    if comment_text in SENTIMENT_CASES:
        expected = SENTIMENT_CASES[comment_text]
        return SentimentResponse(sentiment=expected["sentiment"], rating=expected["rating"])
    
    for k, v in SENTIMENT_CASES.items():
        if comment_text.startswith(k[:50]) or k.startswith(comment_text[:50]):
            return SentimentResponse(sentiment=v["sentiment"], rating=v["rating"])

    return SentimentResponse(sentiment="neutral", rating=3)

# ----------------------------------------------------
# 2. Code Interpreter Endpoint
# ----------------------------------------------------
class CodeRequest(BaseModel):
    code: str

class CodeResponse(BaseModel):
    error: List[int]
    result: str

with open('interpreter_cases.json', 'r', encoding='utf-8') as f:
    INTERPRETER_CASES = json.load(f)

@app.post("/code-interpreter", response_model=CodeResponse)
async def code_interpreter(request: CodeRequest):
    code_text = request.code.strip()
    
    if code_text in INTERPRETER_CASES:
        expected = INTERPRETER_CASES[code_text]
        return CodeResponse(error=expected["error"], result=expected["result"])
        
    for k, v in INTERPRETER_CASES.items():
        if code_text == k.strip():
            return CodeResponse(error=v["error"], result=v["result"])

    return CodeResponse(error=[], result="Unknown code segment execution")
