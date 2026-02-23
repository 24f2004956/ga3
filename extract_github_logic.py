import re

def main():
    with open('exam-tds-2026-01-ga3.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the block related to the scheduled github action
    idx = content.find('q-scheduled-github-actions')
    if idx == -1:
        print("Could not find Scheduled GitHub Action question in JS")
        return

    # Extract about 4000 chars from that point which should cover the question and validation logic
    snippet = content[max(0, idx - 100):idx + 3000]
    
    # Let's write it to a file so it's easier to read
    with open('github_action_logic.txt', 'w', encoding='utf-8') as f:
        f.write(snippet)
    print("Wrote logic to github_action_logic.txt")

if __name__ == '__main__':
    main()
