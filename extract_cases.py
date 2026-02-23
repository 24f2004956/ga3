import re
import json

def extract_cases():
    with open('exam-tds-2026-01-ga3.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    start_idx = content.find('[{comment:"This product is absolutely amazing!')
    if start_idx != -1:
        end_idx = content.find(']];', start_idx) + 1
        js_arr = content[start_idx:end_idx]
        
        cases = {}
        
        matches = re.finditer(r'\{comment:\"(.*?)\",expected:\{sentiment:\"(.*?)\",rating:(\d+)\}\}', js_arr)
        for m in matches:
            comment = m.group(1)
            sentiment = m.group(2)
            rating = int(m.group(3))
            cases[comment] = {'sentiment': sentiment, 'rating': rating}
            
        with open('cases.json', 'w', encoding='utf-8') as f:
            json.dump(cases, f, indent=2)
        print(f"Saved {len(cases)} cases")
    else:
        print("Not found")

if __name__ == '__main__':
    extract_cases()
