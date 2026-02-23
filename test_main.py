import requests
import json
import time

url = "http://127.0.0.1:8000/comment"
headers = {"Content-Type": "application/json"}
data = {
    "comment": "This product is amazing!"
}

# we'll run uvicorn in background then call this
if __name__ == "__main__":
    for _ in range(5):
        try:
            response = requests.post(url, json=data, headers=headers)
            print(f"Status Code: {response.status_code}")
            print(f"Response: {response.json()}")
            break
        except requests.exceptions.ConnectionError:
            time.sleep(1)
