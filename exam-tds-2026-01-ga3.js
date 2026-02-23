var Jt=Object.create;var re=Object.defineProperty;var Yt=Object.getOwnPropertyDescriptor;var zt=Object.getOwnPropertyNames;var Bt=Object.getPrototypeOf,Vt=Object.prototype.hasOwnProperty;var R=(e,a)=>()=>(e&&(a=e(e=0)),a);var L=(e,a)=>()=>(a||e((a={exports:{}}).exports,a),a.exports),M=(e,a)=>{for(var t in a)re(e,t,{get:a[t],enumerable:!0})},Kt=(e,a,t,s)=>{if(a&&typeof a=="object"||typeof a=="function")for(let l of zt(a))!Vt.call(e,l)&&l!==t&&re(e,l,{get:()=>a[l],enumerable:!(s=Yt(a,l))||s.enumerable});return e};var G=(e,a,t)=>(t=e!=null?Jt(Bt(e)):{},Kt(a||!e||!e.__esModule?re(t,"default",{value:e,enumerable:!0}):t,e));var be={};M(be,{default:()=>or});import{html as tr}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import{default as rr}from"https://cdn.jsdelivr.net/npm/seedrandom@3/+esm";async function or({user:e,weight:a=1}){let t="q-fifa-world-cup-top4-excel",s="FIFA World Cup Data Cross-Table Analysis",l=rr(`${e.email}#${t}`),u=Math.floor(l()*10),r=[{id:1,q1:"How many times has Brazil reached the top 4?",q2:"How many World Cup goals did Miroslav Klose score?",hashes:["4fc82b26aecb47d2868c4efbe3581732a3e7cbcc6c2efb32062c08170a05eeb8","b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]},{id:2,q1:"How many World Cups has Germany won?",q2:"How many World Cup goals did Ronaldo score?",hashes:["4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a","e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]},{id:3,q1:"How many times was France a runner-up?",q2:"How many World Cup goals did Gerd M\xFCller score?",hashes:["d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35","8527a891e224136950ff32ca212b45bc93f69fbb801c3b1ebedac52775f99e61"]},{id:4,q1:"How many times has Italy reached the top 4?",q2:"How many World Cup goals did Just Fontaine score?",hashes:["2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3","3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278"]},{id:5,q1:"How many times did Argentina finish in third place?",q2:"How many World Cup goals did S\xE1ndor Kocsis score?",hashes:["5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9","4fc82b26aecb47d2868c4efbe3581732a3e7cbcc6c2efb32062c08170a05eeb8"]},{id:6,q1:"How many times was Netherlands a runner-up?",q2:"How many World Cup goals did J\xFCrgen Klinsmann score?",hashes:["4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce","4fc82b26aecb47d2868c4efbe3581732a3e7cbcc6c2efb32062c08170a05eeb8"]},{id:7,q1:"How many times did England finish in fourth place?",q2:"How many World Cup goals did Helmut Rahn score?",hashes:["d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35","4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]},{id:8,q1:"How many World Cups has Brazil won?",q2:"How many World Cup goals did Gerd M\xFCller score?",hashes:["ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d","8527a891e224136950ff32ca212b45bc93f69fbb801c3b1ebedac52775f99e61"]},{id:9,q1:"How many times was Germany a runner-up?",q2:"How many World Cup goals did Just Fontaine score?",hashes:["4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a","3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278"]},{id:10,q1:"How many World Cups has France won?",q2:"How many World Cup goals did Miroslav Klose score?",hashes:["d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35","b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]}][u],d=tr`
    <div class="mb-3">
      <p>
        You're a sports analyst preparing a report on FIFA World Cup performance. Your task is to analyze historical 
        data from two different tables on the
        <a href="https://en.wikipedia.org/wiki/FIFA_World_Cup" target="_blank">FIFA World Cup Wikipedia page</a>.
      </p>

      <p><strong>Instructions:</strong></p>
      <ol>
        <li>Go to the <a href="https://en.wikipedia.org/wiki/FIFA_World_Cup" target="_blank">FIFA World Cup Wikipedia page</a></li>
        <li>Find the <strong>"Teams reaching the top four"</strong> table (for team statistics)</li>
        <li>Find the <strong>"Top goalscorers"</strong> individual player table</li>
        <li><strong>Load both tables into Google Sheets</strong> to analyze the data</li>
        <li>Use Google Sheets formulas to calculate the requested values</li>
        <li>Submit both answers separated by a comma (e.g., "27, 16")</li>
      </ol>

      <p style="margin-top: 1.5em;">
        <strong>Questions:</strong><br />
        <strong>1.</strong> ${r.q1}<br />
        <strong>2.</strong> ${r.q2}
      </p>

      <p class="text-muted" style="font-size: 0.9em;">
        💡 Find the answer to both questions from the two tables, then enter them comma-separated below.
      </p>

      <label for="${t}" class="form-label">
        <strong>Your answer (comma-separated numbers):</strong>
      </label>
      <input class="form-control" id="${t}" name="${t}" type="text" placeholder="e.g., 27, 16" required />
    </div>
  `;return{id:t,title:s,weight:a,question:d,answer:async n=>{let o=n.split(",").map(y=>y.trim());if(o.length!==2)throw new Error("Please enter two answers separated by a comma, e.g., '27, 16'");let c=o[0],m=o[1],h=async y=>{let b=new TextEncoder().encode(String(y)),E=await crypto.subtle.digest("SHA-256",b);return Array.from(new Uint8Array(E)).map(S=>S.toString(16).padStart(2,"0")).join("")},f=await h(c),g=await h(m);if(f!==r.hashes[0]||g!==r.hashes[1])throw new Error("One or both answers are incorrect. Please recalculate.");return!0}}}var we=R(()=>{"use strict"});var xe={};M(xe,{default:()=>ar});import{html as nr}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import{default as ir}from"https://cdn.jsdelivr.net/npm/seedrandom@3/+esm";async function ar({user:e,weight:a=1}){let t="q-llm-structured-output",s="LLM Structured Output - FastAPI Sentiment Analysis",l=ir(`${e.email}#${t}`),i=[...[{comment:"This product is absolutely amazing! Best purchase I've ever made. Highly recommend to everyone!",expected:{sentiment:"positive",rating:5}},{comment:"Terrible experience. The product broke within a week. Complete waste of money. Very disappointed.",expected:{sentiment:"negative",rating:1}},{comment:"It's okay, nothing special. Does what it's supposed to do. Average quality for the price.",expected:{sentiment:"neutral",rating:3}},{comment:"I love this! The quality is outstanding and it exceeded all my expectations. Perfect!",expected:{sentiment:"positive",rating:5}},{comment:"Worst purchase ever. Poor quality, bad customer service, and not worth the money at all.",expected:{sentiment:"negative",rating:1}},{comment:"Pretty good product. Works well and I'm satisfied with it. Would buy again.",expected:{sentiment:"positive",rating:4}},{comment:"Not great, not terrible. It's just fine. Nothing to complain about but nothing impressive either.",expected:{sentiment:"neutral",rating:3}},{comment:"Absolutely horrible. Broke immediately and customer support was useless. Do not buy this!",expected:{sentiment:"negative",rating:1}},{comment:"Really happy with this purchase! Good quality and fast delivery. Definitely recommend.",expected:{sentiment:"positive",rating:4}},{comment:"Disappointing. Expected better quality for this price. Not satisfied with the purchase.",expected:{sentiment:"negative",rating:2}},{comment:"It's alright. Does the job but nothing extraordinary. Average product overall.",expected:{sentiment:"neutral",rating:3}},{comment:"Fantastic! This is exactly what I needed. Great value for money and excellent quality.",expected:{sentiment:"positive",rating:5}},{comment:"Very poor quality. Not as described and stopped working after two days. Avoid!",expected:{sentiment:"negative",rating:1}},{comment:"Nice product. I'm pleased with it. Good features and reasonable price point.",expected:{sentiment:"positive",rating:4}},{comment:"Meh. It's acceptable but could be better. Works fine but not impressive at all.",expected:{sentiment:"neutral",rating:3}},{comment:"One of the best restaurants I have ever visited. The food was exquisite, service impeccable, and the atmosphere was magical. A true five-star experience!",expected:{sentiment:"positive",rating:5}},{comment:"This laptop is a beast! Lightning-fast performance, gorgeous display, and the battery lasts all day. Worth every penny \u2014 absolutely love it!",expected:{sentiment:"positive",rating:5}},{comment:"The hotel stay was phenomenal. Spotlessly clean rooms, incredibly friendly staff, and the breakfast buffet was outstanding. Can't wait to come back!",expected:{sentiment:"positive",rating:5}},{comment:"I finished this book in one sitting \u2014 I couldn't put it down! The storytelling is gripping, the characters are vivid, and the ending blew my mind. Masterpiece!",expected:{sentiment:"positive",rating:5}},{comment:"Great customer service! The representative was helpful, patient, and resolved my issue quickly. A small wait time, but overall a very positive experience.",expected:{sentiment:"positive",rating:4}},{comment:"Really solid headphones. The sound quality is crisp and clear, noise cancellation works great, and they're very comfortable to wear for long sessions.",expected:{sentiment:"positive",rating:4}},{comment:"Enjoyed the movie a lot. Great performances, stunning visuals, and a compelling story. A couple of slow scenes in the middle but overall very entertaining.",expected:{sentiment:"positive",rating:4}},{comment:"The course material was well-structured and easy to follow. I learned a ton and the instructor explained everything clearly. Would recommend to beginners!",expected:{sentiment:"positive",rating:4}},{comment:"The coffee shop was decent. The drinks were fine and the seating was comfortable enough, but the prices felt a bit high for what you get. I might return.",expected:{sentiment:"neutral",rating:3}},{comment:"The app works but it's nothing groundbreaking. The interface is a bit cluttered and it occasionally lags, but it gets the job done for everyday use.",expected:{sentiment:"neutral",rating:3}},{comment:"Mixed feelings about this hotel. The location was perfect and the room was clean, but the air conditioning was noisy and the Wi-Fi was unreliable.",expected:{sentiment:"neutral",rating:3}},{comment:"The meal was average \u2014 not bad, but not memorable either. The pasta was a bit overcooked and the sauce lacked seasoning. Service was prompt though.",expected:{sentiment:"neutral",rating:3}},{comment:"It's an okay keyboard. Typing feel is acceptable and build quality is passable. Not the best I've used but certainly not the worst either.",expected:{sentiment:"neutral",rating:3}},{comment:"Below expectations. The packaging was damaged, setup took forever, and performance is noticeably slower than advertised. Probably won't buy from this brand again.",expected:{sentiment:"negative",rating:2}},{comment:"The customer support was frustrating. I waited 45 minutes on hold only to be transferred twice without getting my issue resolved. Very disappointing service.",expected:{sentiment:"negative",rating:2}},{comment:"The film started with promise but quickly fell apart. Plot holes everywhere, lazy writing, and the CGI looked cheap. Wasted two hours of my evening.",expected:{sentiment:"negative",rating:2}},{comment:"Mediocre food. My steak was overcooked and the sides were cold. The staff seemed rushed and forgot one of our drinks. Not worth the price they charge.",expected:{sentiment:"negative",rating:2}},{comment:"Absolutely disgraceful. I received a completely different product from what was shown in the listing. Attempts to contact the seller have been ignored. Scam!",expected:{sentiment:"negative",rating:1}},{comment:"Never again. The delivery took three weeks, the item arrived broken, and the return process was an absolute nightmare. This company should be shut down.",expected:{sentiment:"negative",rating:1}},{comment:"The worst hotel experience of my life. Dirty rooms, cockroaches in the bathroom, and the front desk staff was rude. I demanded a refund and was refused.",expected:{sentiment:"negative",rating:1}},{comment:"This software is a disaster. It crashes every 10 minutes, deleted my project files twice, and the so-called 'support team' never responded to my tickets.",expected:{sentiment:"negative",rating:1}},{comment:"Dreadful experience from start to finish. The food was cold, the waiter was dismissive, and we were charged for items we never ordered. Absolute disgrace.",expected:{sentiment:"negative",rating:1}},{comment:"Incredible concert experience! The sound was crystal clear, the setlist was perfect, and the crowd energy made it truly unforgettable. One of the best nights of my life!",expected:{sentiment:"positive",rating:5}},{comment:"The gym is functional. Equipment is mostly available during off-peak hours, cleanliness is acceptable, though some machines are outdated. Decent for the monthly fee.",expected:{sentiment:"neutral",rating:3}},{comment:"Complete rip-off. Paid premium price for what turned out to be a cheap knockoff. The materials feel flimsy, the stitching is already unravelling, and returns are refused.",expected:{sentiment:"negative",rating:1}}]];for(let n=i.length-1;n>0;n--){let o=Math.floor(l()*(n+1));[i[n],i[o]]=[i[o],i[n]]}let r=i.slice(0,5),d=async n=>{if(!n||typeof n!="string")throw new Error("Please provide a valid URL");if(!n.startsWith("http://")&&!n.startsWith("https://"))throw new Error("URL must start with http:// or https://");let o=n.endsWith("/comment")?n:n.replace(/\/$/,"")+"/comment",c=0,m=[];for(let h=0;h<r.length;h++){let f=r[h];try{let g=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:f.comment})});if(!g.ok)throw new Error(`Endpoint returned ${g.status} ${g.statusText} for test ${h+1}`);let y=g.headers.get("content-type");if(!y||!y.includes("application/json"))throw new Error(`Expected Content-Type: application/json, got: ${y}`);let w;try{w=await g.json()}catch(k){throw new Error(`Invalid JSON response for test ${h+1}: ${k.message}`)}if(!w.sentiment||!w.rating)throw new Error(`Response missing required fields. Expected 'sentiment' and 'rating', got: ${JSON.stringify(w)}`);let b=["positive","negative","neutral"];if(!b.includes(w.sentiment))throw new Error(`Invalid sentiment: '${w.sentiment}'. Must be one of: ${b.join(", ")}`);if(typeof w.rating!="number"||!Number.isInteger(w.rating))throw new Error(`Rating must be an integer, got: ${typeof w.rating} (${w.rating})`);if(w.rating<1||w.rating>5)throw new Error(`Rating must be between 1 and 5, got: ${w.rating}`);let E=w.sentiment===f.expected.sentiment&&w.rating===f.expected.rating;E&&c++,m.push({testNumber:h+1,comment:f.comment.slice(0,50)+"...",expected:f.expected,received:{sentiment:w.sentiment,rating:w.rating},correct:E})}catch(g){throw g.name==="TypeError"||g.message.includes("fetch")?new Error(`Cannot reach endpoint: ${o}. Make sure your server is running and accessible. Error: ${g.message}`):g}}if(c>=3)return!0;{let h=m.map(f=>`Test ${f.testNumber}: ${f.correct?"\u2705 PASS":"\u274C FAIL"}
  Comment: "${f.comment}"
  Expected: sentiment="${f.expected.sentiment}", rating=${f.expected.rating}
  Received: sentiment="${f.received.sentiment}", rating=${f.received.rating}`).join(`

`);throw new Error(`Failed: Only ${c}/5 tests passed (need 3/5).

${h}

Tip: Make sure your LLM prompt clearly defines sentiment categories and rating scale. Use structured outputs to enforce the exact JSON schema.`)}},p=nr`
    <p><strong>Scenario:</strong> You're building a customer feedback analysis system that needs to 
    process thousands of comments per day. Your API must return <strong>structured, consistent JSON</strong> 
    responses that can be directly stored in a database without further parsing.</p>

    <p><strong>Your Task:</strong> Create a <strong>FastAPI endpoint</strong> 
    <code>POST /comment</code> that accepts a comment and returns sentiment analysis as structured JSON.</p>

    <p><strong>Request Format:</strong></p>
    <pre><code>{
  "comment": "This product is amazing!"
}</code></pre>

    <p><strong>Response Format:</strong></p>
    <pre><code>{
  "sentiment": "positive",
  "rating": 5
}</code></pre>

    <p><strong>Field Specifications:</strong></p>
    <table>
      <tr>
        <th>Field</th>
        <th>Type</th>
        <th>Valid Values</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><code>sentiment</code></td>
        <td>string</td>
        <td><code>"positive"</code>, <code>"negative"</code>, <code>"neutral"</code></td>
        <td>Overall sentiment of the comment</td>
      </tr>
      <tr>
        <td><code>rating</code></td>
        <td>integer</td>
        <td>1-5</td>
        <td>Sentiment intensity (5=highly positive, 1=highly negative)</td>
      </tr>
    </table>

    <p><strong>Requirements:</strong></p>
    <ul>
      <li>Use <strong>gpt-4.1-mini</strong> model (supports structured outputs)</li>
      <li>Use OpenAI's <strong>structured outputs</strong> feature to enforce the JSON schema</li>
      <li>Return <code>Content-Type: application/json</code></li>
      <li>Handle errors gracefully (invalid input, API failures)</li>
    </ul>

    
    <p><strong>Testing:</strong></p>
    <ul>
      <li>Your endpoint will be tested with <strong>5 random comments</strong></li>
      <li>You need <strong>at least 3 out of 5</strong> correct responses to pass</li>
      <li>Both <code>sentiment</code> and <code>rating</code> must match exactly</li>
    </ul>

    <p><strong>Helpful Resources:</strong></p>
    <ul>
      <li>📖 <a href="https://platform.openai.com/docs/guides/structured-outputs" target="_blank">OpenAI Structured Outputs Guide</a></li>
      <li>📖 <a href="https://platform.openai.com/docs/models/gpt-4o-mini" target="_blank">GPT-4o Mini Model Features</a></li>
      <li>📖 <a href="https://fastapi.tiangolo.com/tutorial/body/" target="_blank">FastAPI Request Body</a></li>
    </ul>

    <p>💡 <strong>Tip:</strong> Use OpenAI's <code>response_format</code> parameter with a JSON schema 
    to guarantee your response structure. This is better than parsing text responses!</p>

    <hr />

    <label for="${t}" class="form-label">Enter the URL of your FastAPI endpoint:</label>
    <input type="url" class="form-control" id="${t}" name="${t}" placeholder="https://your-api.com" required />
  `;return{id:t,title:s,weight:a,question:p,answer:d,help:[]}}var ve=R(()=>{"use strict"});var Ee={};M(Ee,{default:()=>cr});import{html as sr}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import{default as lr}from"https://cdn.jsdelivr.net/npm/seedrandom@3/+esm";async function cr({user:e,weight:a=1}){let t="q-code-interpreter-ai-analysis",s="Code Interpreter with AI Error Analysis",l=lr(`${e.email}#${t}`),i=[...[{id:1,code:`x = 5
y = 10
result = x + y
print(result)`,hasError:!1,expectedOutput:`15
`,errorLines:[]},{id:2,code:`numbers = [1, 2, 3, 4, 5]
total = sum(numbers)
print(f'Sum: {total}')`,hasError:!1,expectedOutput:`Sum: 15
`,errorLines:[]},{id:3,code:`def greet(name):
    return f'Hello, {name}!'

message = greet('Alice')
print(message)`,hasError:!1,expectedOutput:`Hello, Alice!
`,errorLines:[]},{id:4,code:`for i in range(3):
    print(i * 2)`,hasError:!1,expectedOutput:`0
2
4
`,errorLines:[]},{id:5,code:`data = {'name': 'John', 'age': 30}
print(data['name'])
print(data['age'])`,hasError:!1,expectedOutput:`John
30
`,errorLines:[]},{id:6,code:`text = 'hello world'
print(text.upper())
print(len(text))`,hasError:!1,expectedOutput:`HELLO WORLD
11
`,errorLines:[]},{id:7,code:`import math
result = math.sqrt(16)
print(int(result))`,hasError:!1,expectedOutput:`4
`,errorLines:[]},{id:8,code:`numbers = [x**2 for x in range(5)]
print(numbers)`,hasError:!1,expectedOutput:`[0, 1, 4, 9, 16]
`,errorLines:[]},{id:9,code:`a, b = 10, 20
a, b = b, a
print(f'a={a}, b={b}')`,hasError:!1,expectedOutput:`a=20, b=10
`,errorLines:[]},{id:10,code:`def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n-1)

print(factorial(5))`,hasError:!1,expectedOutput:`120
`,errorLines:[]},{id:21,code:`text = 'Python'
print(text[:3])
print(text[3:])`,hasError:!1,expectedOutput:`Pyt
hon
`,errorLines:[]},{id:22,code:`x = True
y = False
print(x and y)
print(x or y)`,hasError:!1,expectedOutput:`False
True
`,errorLines:[]},{id:23,code:`words = ['hello', 'world']
result = ' '.join(words)
print(result)`,hasError:!1,expectedOutput:`hello world
`,errorLines:[]},{id:24,code:`x = -7.8
print(abs(x))
print(round(x))`,hasError:!1,expectedOutput:`7.8
-8
`,errorLines:[]},{id:25,code:`nums = [3, 1, 4, 1, 5]
print(sorted(nums))`,hasError:!1,expectedOutput:`[1, 1, 3, 4, 5]
`,errorLines:[]},{id:26,code:`items = ['a', 'b', 'c']
for i, v in enumerate(items):
    print(i, v)`,hasError:!1,expectedOutput:`0 a
1 b
2 c
`,errorLines:[]},{id:27,code:`d = {'x': 1, 'y': 2}
print(list(d.keys()))
print(list(d.values()))`,hasError:!1,expectedOutput:`['x', 'y']
[1, 2]
`,errorLines:[]},{id:28,code:`sentence = 'one two three'
parts = sentence.split()
print(len(parts))
print(parts[1])`,hasError:!1,expectedOutput:`3
two
`,errorLines:[]},{id:29,code:`nums = [4, 7, 2, 9, 1]
print(min(nums))
print(max(nums))`,hasError:!1,expectedOutput:`1
9
`,errorLines:[]},{id:30,code:`i = 3
while i > 0:
    print(i)
    i -= 1`,hasError:!1,expectedOutput:`3
2
1
`,errorLines:[]},{id:31,code:`point = (3, 4)
x, y = point
print(x + y)`,hasError:!1,expectedOutput:`7
`,errorLines:[]},{id:32,code:`text = 'foo bar foo'
result = text.replace('foo', 'baz')
print(result)`,hasError:!1,expectedOutput:`baz bar baz
`,errorLines:[]},{id:33,code:`a = {1, 2, 3}
b = {2, 3, 4}
print(sorted(a & b))
print(sorted(a | b))`,hasError:!1,expectedOutput:`[2, 3]
[1, 2, 3, 4]
`,errorLines:[]},{id:34,code:`result = list(range(0, 10, 3))
print(result)`,hasError:!1,expectedOutput:`[0, 3, 6, 9]
`,errorLines:[]},{id:35,code:`s = 'hello.py'
print(s.startswith('hello'))
print(s.endswith('.py'))`,hasError:!1,expectedOutput:`True
True
`,errorLines:[]},{id:36,code:`matrix = [[1, 2], [3, 4], [5, 6]]
print(matrix[1][0])
print(matrix[2][1])`,hasError:!1,expectedOutput:`3
6
`,errorLines:[]},{id:37,code:`x = 42
print(isinstance(x, int))
print(isinstance(x, str))`,hasError:!1,expectedOutput:`True
False
`,errorLines:[]},{id:38,code:`keys = ['a', 'b', 'c']
vals = [1, 2, 3]
d = dict(zip(keys, vals))
print(d)`,hasError:!1,expectedOutput:`{'a': 1, 'b': 2, 'c': 3}
`,errorLines:[]},{id:39,code:`x = 17
print(x // 5)
print(x % 5)`,hasError:!1,expectedOutput:`3
2
`,errorLines:[]},{id:40,code:`lst = [1, 2, 3]
lst.append(4)
lst.pop(0)
print(lst)`,hasError:!1,expectedOutput:`[2, 3, 4]
`,errorLines:[]},{id:11,code:`x = 10
y = 0
result = x / y
print(result)`,hasError:!0,errorLines:[3],errorType:"ZeroDivisionError"},{id:12,code:`numbers = [1, 2, 3]
print(numbers[0])
print(numbers[5])`,hasError:!0,errorLines:[3],errorType:"IndexError"},{id:13,code:`data = {'name': 'Alice'}
print(data['name'])
print(data['age'])`,hasError:!0,errorLines:[3],errorType:"KeyError"},{id:14,code:`x = '10'
y = 5
result = x + y
print(result)`,hasError:!0,errorLines:[3],errorType:"TypeError"},{id:15,code:`def divide(a, b):
    return a / b

result = divide(10, 0)
print(result)`,hasError:!0,errorLines:[2],errorType:"ZeroDivisionError"},{id:16,code:`import non_existent_module
x = 10
print(x)`,hasError:!0,errorLines:[1],errorType:"ModuleNotFoundError"},{id:17,code:`numbers = [1, 2, 3]
for i in range(5):
    print(numbers[i])`,hasError:!0,errorLines:[3],errorType:"IndexError"},{id:18,code:`text = None
print(text.upper())`,hasError:!0,errorLines:[2],errorType:"AttributeError"},{id:19,code:`x = 10
y = '5'
if x > y:
    print('Greater')`,hasError:!0,errorLines:[3],errorType:"TypeError"},{id:20,code:`def process():
    x = 10
    print(y)

process()`,hasError:!0,errorLines:[3],errorType:"NameError"},{id:41,code:`x = 5
if x > 3
    print('yes')`,hasError:!0,errorLines:[2],errorType:"SyntaxError"},{id:42,code:`x = 10
result = x(5)
print(result)`,hasError:!0,errorLines:[2],errorType:"TypeError"},{id:43,code:`s = 'abc'
x = int(s)
print(x)`,hasError:!0,errorLines:[2],errorType:"ValueError"},{id:44,code:`x = 5
x.append(10)
print(x)`,hasError:!0,errorLines:[2],errorType:"AttributeError"},{id:45,code:`print(result)
result = 42`,hasError:!0,errorLines:[1],errorType:"NameError"},{id:46,code:`lst = []
print(lst[0])`,hasError:!0,errorLines:[2],errorType:"IndexError"},{id:47,code:`def recurse():
    return recurse()

recurse()`,hasError:!0,errorLines:[2],errorType:"RecursionError"},{id:48,code:`x = None
y = x + 1
print(y)`,hasError:!0,errorLines:[2],errorType:"TypeError"},{id:49,code:`d = {'outer': {'inner': 1}}
print(d['outer']['missing'])`,hasError:!0,errorLines:[2],errorType:"KeyError"},{id:50,code:`x = 10
y = 0
print(x % y)`,hasError:!0,errorLines:[3],errorType:"ZeroDivisionError"},{id:51,code:`x = 42
print(len(x))`,hasError:!0,errorLines:[2],errorType:"TypeError"},{id:52,code:`lst = [1, 2, 3]
print(lst.keys())`,hasError:!0,errorLines:[2],errorType:"AttributeError"},{id:53,code:`lst = [1, 2, 3]
lst.remove(99)
print(lst)`,hasError:!0,errorLines:[2],errorType:"ValueError"},{id:54,code:`a = 'hello'
b = 'world'
print(a * b)`,hasError:!0,errorLines:[3],errorType:"TypeError"},{id:55,code:`from fake_library import something
print(something)`,hasError:!0,errorLines:[1],errorType:"ModuleNotFoundError"},{id:56,code:`def foo():
    print(z)
    z = 5

foo()`,hasError:!0,errorLines:[2],errorType:"UnboundLocalError"},{id:57,code:`lst = [10, 20, 30]
print(lst[-10])`,hasError:!0,errorLines:[2],errorType:"IndexError"},{id:58,code:`def add(a, b):
    return a + b

result = add(1, 2, 3)
print(result)`,hasError:!0,errorLines:[4],errorType:"TypeError"},{id:59,code:`import math
result = math.sqrt(-1)
print(result)`,hasError:!0,errorLines:[2],errorType:"ValueError"},{id:60,code:`t = (3, 1, 2)
t.sort()
print(t)`,hasError:!0,errorLines:[2],errorType:"AttributeError"}]];for(let n=i.length-1;n>0;n--){let o=Math.floor(l()*(n+1));[i[n],i[o]]=[i[o],i[n]]}let r=i.slice(0,3),d=async n=>{if(!n||typeof n!="string")throw new Error("Please provide a valid URL");if(!n.startsWith("http://")&&!n.startsWith("https://"))throw new Error("URL must start with http:// or https://");let o=n.endsWith("/code-interpreter")?n:n.replace(/\/$/,"")+"/code-interpreter",c=0,m=[];for(let h of r)try{let f=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:h.code})});if(!f.ok)throw new Error(`API returned ${f.status}: ${await f.text()}`);let g=f.headers.get("content-type");if(!g||!g.includes("application/json"))throw new Error(`Expected JSON, got: ${g}`);let y=await f.json();if(!Array.isArray(y.error))throw new Error(`'error' must be an array, got: ${typeof y.error}`);if(typeof y.result!="string")throw new Error(`'result' must be a string, got: ${typeof y.result}`);if(h.hasError){let w=h.errorLines.sort((k,S)=>k-S),b=y.error.sort((k,S)=>k-S);if(!(JSON.stringify(w)===JSON.stringify(b))){m.push({testId:h.id,passed:!1,reason:`Error line mismatch. Expected: ${JSON.stringify(w)}, Got: ${JSON.stringify(b)}`});continue}if(!y.result.includes("Traceback")&&!y.result.includes("Error")){m.push({testId:h.id,passed:!1,reason:"Result should contain error traceback"});continue}c++,m.push({testId:h.id,passed:!0})}else{if(y.error.length!==0){m.push({testId:h.id,passed:!1,reason:`Expected no errors, but got error array: ${JSON.stringify(y.error)}`});continue}if(y.result!==h.expectedOutput){m.push({testId:h.id,passed:!1,reason:`Output mismatch.
Expected: ${JSON.stringify(h.expectedOutput)}
Got: ${JSON.stringify(y.result)}`});continue}c++,m.push({testId:h.id,passed:!0})}}catch(f){throw f.name==="TypeError"&&f.message.includes("fetch")?new Error(`Cannot reach endpoint: ${o}. Make sure your server is running and CORS is enabled.`):f}if(c!==3){let h=m.filter(f=>!f.passed);throw new Error(`Only ${c}/3 tests passed.

Failed tests:
`+h.map(f=>`  Test ${f.testId}: ${f.reason}`).join(`
`))}return!0},p=sr`
    <p><strong>Scenario:</strong> You're building a code execution service that not only runs Python code 
    but also uses AI to analyze errors and identify the exact line numbers where errors occur.</p>

    <p><strong>Your Task:</strong> Create a <strong>FastAPI endpoint</strong> 
    <code>POST /code-interpreter</code> that executes Python code and uses AI to analyze errors.</p>

    <p><strong>System Architecture:</strong></p>
    <ul>
      <li><strong>Tool Function:</strong> Executes Python code and returns exact output</li>
      <li><strong>AI Agent:</strong> Analyzes errors (only when they occur) to identify line numbers</li>
    </ul>

    <p><strong>Request Format:</strong></p>
    <pre><code>{
  "code": "x = 10\ny = 0\nresult = x / y\nprint(result)"
}</code></pre>

    <p><strong>Response Format:</strong></p>
    <pre><code>{
  "error": [3],           // Line numbers with errors (from AI analysis)
  "result": "Traceback..." // Exact execution output
}</code></pre>

    <p><strong>Implementation Flow:</strong></p>
    <pre><code>Input: {"code": "..."}
    ↓
1. Tool: execute_python_code()
    → Runs code with exec()
    → Captures stdout/stderr
    → Returns: {success: bool, output: str}
    ↓
2. Check: Success?
    → Yes: Return {error: [], result: output}
    → No: AI analyzes traceback
    ↓
3. AI Agent (only if error):
    → Input: code + traceback
    → Uses LLM with structured output
    → Returns: error line numbers
    ↓
4. Return: {error: [lines], result: traceback}
</code></pre>

    <p><strong>Part 1: Tool Function (execute_python_code)</strong></p>
    <pre><code>def execute_python_code(code: str) -> dict:
    """
    Execute Python code and return exact output.

    Returns:
        {
            "success": bool,
            "output": str  # Exact stdout or traceback
        }
    """
    import sys
    from io import StringIO
    import traceback

    # Capture stdout
    old_stdout = sys.stdout
    sys.stdout = StringIO()

    try:
        # Execute code
        exec(code)
        output = sys.stdout.getvalue()
        return {"success": True, "output": output}

    except Exception as e:
        # Get full traceback
        output = traceback.format_exc()
        return {"success": False, "output": output}

    finally:
        sys.stdout = old_stdout
</code></pre>

    <p><strong>Part 2: AI Error Analysis</strong></p>
    <pre><code>from pydantic import BaseModel
from google import genai
from google.genai import types

class ErrorAnalysis(BaseModel):
    error_lines: List[int]  # Line numbers with errors

def analyze_error_with_ai(code: str, traceback: str) -> List[int]:
    """
    Use LLM with structured output to identify error line numbers.
    """
    client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))

    prompt = f"""
Analyze this Python code and its error traceback.
Identify the line number(s) where the error occurred.

CODE:
{code}

TRACEBACK:
{traceback}

Return the line number(s) where the error is located.
"""

    response = client.models.generate_content(
        model='gemini-2.0-flash-exp',
        contents=prompt,
        config=types.GenerateContentConfig(
            response_mime_type="application/json",
            response_schema=types.Schema(
                type=types.Type.OBJECT,
                properties={
                    "error_lines": types.Schema(
                        type=types.Type.ARRAY,
                        items=types.Schema(type=types.Type.INTEGER)
                    )
                },
                required=["error_lines"]
            )
        )
    )

    result = ErrorAnalysis.model_validate_json(response.text)
    return result.error_lines
</code></pre>

    
    <p><strong>Key Requirements:</strong></p>
    <ul>
      <li>✅ <strong>Tool Function:</strong> Must execute code and return exact output</li>
      <li>✅ <strong>AI Only When Needed:</strong> Only invoke AI for error analysis</li>
      <li>✅ <strong>Structured Output:</strong> Use Pydantic models for AI response</li>
      <li>✅ <strong>Exact Output:</strong> Don't modify execution results</li>
      <li>✅ <strong>CORS Enabled:</strong> Required for testing</li>
      <li>✅ <strong>Line Numbers:</strong> AI must identify exact error lines</li>
    </ul>

    <p><strong>Example 1: Successful Code</strong></p>
    <pre><code>POST /code-interpreter
{
  "code": "x = 5\ny = 10\nprint(x + y)"
}

Response:
{
  "error": [],
  "result": "15\n"
}
</code></pre>

    <p><strong>Example 2: Code with Error</strong></p>
    <pre><code>POST /code-interpreter
{
  "code": "x = 10\ny = 0\nresult = x / y"
}

Response:
{
  "error": [3],
  "result": "Traceback (most recent call last):\n  File \"<string>\", line 3, in <module>\nZeroDivisionError: division by zero"
}
</code></pre>

    <p><strong>Testing:</strong></p>
    <ul>
      <li>Your endpoint will be tested with 3 random Python code snippets</li>
      <li>Some will have errors, some won't</li>
      <li><strong>For successful code:</strong> Result must match expected output exactly</li>
      <li><strong>For error code:</strong> AI must correctly identify error line numbers</li>
    </ul>

    <p><strong>Helpful Resources:</strong></p>
    <ul>
      <li>📖 <a href="https://ai.google.dev/gemini-api/docs/structured-output" target="_blank">Gemini Structured Output</a></li>
      <li>📖 <a href="https://docs.python.org/3/library/functions.html#exec" target="_blank">Python exec() function</a></li>
      <li>📖 <a href="https://docs.python.org/3/library/traceback.html" target="_blank">Python traceback module</a></li>
      <li>📖 <a href="https://fastapi.tiangolo.com/tutorial/cors/" target="_blank">FastAPI CORS</a></li>
    </ul>

    <hr />

    <label for="${t}" class="form-label">Enter your API endpoint URL:</label>
    <input type="url" class="form-control" id="${t}" name="${t}" 
           placeholder="https://your-api.com" required />
  `;return{id:t,title:s,weight:a,question:p,answer:d,help:[]}}var $e=R(()=>{"use strict"});var ke={};M(ke,{default:()=>pr});import{html as dr}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import{parse as ur}from"https://cdn.jsdelivr.net/npm/yaml/+esm";async function pr({user:e,weight:a=1}){let t="q-scheduled-github-actions",s="Create a Scheduled GitHub Action",l=async i=>{let r=i.match(/https:\/\/github\.com\/([^/]+)\/([^/]+)/);if(!r)throw new Error("URL does not match https://github.com/<user>/<repo>");let[,d,p]=r,n=`https://api.github.com/repos/${d}/${p}/actions/runs`,{workflow_runs:o}=await fetch(n).then($=>$.json());if(!o?.length)throw new Error("No workflow runs found");let c=o[0],m=`https://api.github.com/repos/${d}/${p}/contents/.github/workflows`,h=await fetch(m).then($=>$.json());if(!h?.length)throw new Error("No workflow files found");let f=!1;for(let $ of h){let T=await fetch($.download_url).then(x=>x.text()),D=ur(T);for(let x of D?.on?.schedule??[]){let v=x.cron.trim().split(/\s+/);v[0]!="*"&&v[1]!="*"&&v[2]=="*"&&v[3]=="*"&&v[4]=="*"&&(f=!0)}}if(!f)throw new Error("No daily scheduled triggers found in workflows");let{jobs:g}=await fetch(c.jobs_url).then($=>$.json()),y=!1,w=`https://api.github.com/repos/${d}/${p}/commits`,b=await fetch(w).then($=>$.json()),E=new Date(c.created_at),k=new Date(c.updated_at),S=b.some($=>{let T=new Date($.commit.author.date);return T>=E&&T<=new Date(k.getTime()+5*6e4)});for(let{steps:$}of g)for(let{name:T}of $)T.includes(e.email)&&(y=!0);if(!y)throw new Error(`Latest run does ${c.html_url} not include ${e.email} in the name`);if(!S)throw new Error(`Latest workflow run was at ${k.toLocaleString()} but there was no commit to the repo after that within 5 minutes`);return!0},u=dr`
    <div class="mb-3">
      <h2>Automating Repository Updates for DevSync</h2>
      <p>
        <strong>DevSync Solutions</strong> is a mid-sized software development company specializing in collaborative
        tools for remote teams. With a growing client base and an expanding portfolio of projects, DevSync emphasizes
        efficient workflow management and robust version control practices to maintain high-quality software delivery.
      </p>
      <p>
        As part of their commitment to maintaining seamless and transparent development processes, DevSync has
        identified the need to implement automated daily updates to their GitHub repositories. These updates serve
        multiple purposes:
      </p>
      <ol>
        <li>
          <strong>Activity Tracking:</strong> Ensuring that each repository reflects daily activity helps in monitoring
          project progress and team engagement.
        </li>
        <li>
          <strong>Automated Documentation:</strong> Regular commits can be used to update status files, logs, or
          documentation without manual intervention.
        </li>
        <li>
          <strong>Backup and Recovery:</strong> Automated commits provide an additional layer of backup, ensuring that
          changes are consistently recorded.
        </li>
        <li>
          <strong>Compliance and Auditing:</strong> Maintaining a clear commit history aids in compliance with industry
          standards and facilitates auditing processes.
        </li>
      </ol>
      <p>
        Manually managing these daily commits is inefficient and prone to human error, especially as the number of
        repositories grows. To address this, DevSync seeks to automate the process using GitHub Actions, ensuring
        consistency, reliability, and scalability across all projects.
      </p>
      <p>
        DevSync&#39;s DevOps team has decided to standardize the implementation of GitHub Actions across all company
        repositories. The objective is to create a scheduled workflow that runs once daily, adds a commit to the
        repository, and ensures that these actions are consistently tracked and verifiable.
      </p>
      <p>
        As a junior developer or DevOps engineer at DevSync, you are tasked with setting up this automation for a
        specific repository. This exercise will not only enhance your understanding of GitHub Actions but also
        contribute to the company&#39;s streamlined workflow management.
      </p>

      <h2>Your Task</h2>
      <p>
        Create a scheduled <a href="https://github.com/features/actions">GitHub action</a> that runs daily and adds a
        commit to your repository. The workflow should:
      </p>

      <ul>
        <li>
          Use <code>schedule</code> with <code>cron</code> syntax to run <strong>once per day</strong> (must use
          specific hours/minutes, not wildcards)
        </li>
        <li>Include a step with your email <code>${e.email}</code> in its name</li>
        <li>Create a commit in each run</li>
        <li>Be located in <code>.github/workflows/</code> directory</li>
      </ul>
      <p>After creating the workflow:</p>
      <ul>
        <li>Trigger the workflow and wait for it to complete</li>
        <li>Ensure it appears as the <strong>most recent action</strong> in your repository</li>
        <li>Verify that it creates a commit during or within 5 minutes of the workflow run</li>
      </ul>
      <p>
        <label for="${t}" class="form-label">
          Enter your repository URL (format: <code>https://github.com/USER/REPO</code>):
        </label>
        <input class="form-control" id="${t}" name="${t}" />
      </p>
    </div>
  `;return{id:t,title:s,weight:a,question:u,answer:l}}var Se=R(()=>{"use strict"});var Te={};M(Te,{default:()=>hr});import{html as mr}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function hr({weight:e=1}){let a="q-github-actions-badge",t="GitHub Actions Workflow with Status Badge",s=async u=>{let r=u.trim().match(/github\.com\/([^/]+)\/([^/]+)/);if(!r)throw new Error("Please provide a valid GitHub repository URL");let[,d,p]=r,n=p.replace(/\.git$/,""),o=`https://api.github.com/repos/${d}/${n}/actions/workflows`,c=await fetch(o);if(!c.ok)throw c.status===404?new Error("Repository not found or Actions not enabled."):new Error(`GitHub API error: ${c.status}`);let m=await c.json();if(!m.workflows||m.workflows.length===0)throw new Error("No workflows found. Please create at least one GitHub Actions workflow.");let h=`https://api.github.com/repos/${d}/${n}/actions/runs?per_page=1`,f=await fetch(h);if(!f.ok)throw new Error(`Failed to fetch workflow runs: ${f.status}`);let g=await f.json();if(!g.workflow_runs||g.workflow_runs.length===0)throw new Error("No workflow runs found. Please trigger your workflow at least once.");let y=g.workflow_runs[0];if(y.conclusion!=="success")throw new Error(`Workflow status: ${y.conclusion}. Please ensure it passes successfully.`);let w=`https://api.github.com/repos/${d}/${n}/readme`,b=await fetch(w);if(b.ok){let E=await b.json(),k=atob(E.content);if(!(k.includes("/actions/workflows/")&&k.includes("/badge.svg")))throw new Error("No GitHub Actions status badge found in README. Please add a workflow status badge.")}return!0},l=mr`
    <p>
      <strong>CI/CD Visibility</strong> - Add transparency to your project by displaying workflow status directly in
      your repository's README.
    </p>

    <h4>Requirements:</h4>
    <ol>
      <li>Create a GitHub Actions workflow in your repository</li>
      <li>Ensure the workflow runs successfully (green checkmark)</li>
      <li>Add a status badge to your README.md file</li>
    </ol>

    <h4>How to create a status badge:</h4>
    <ol>
      <li>Go to your repository's <strong>Actions</strong> tab</li>
      <li>Click on your workflow</li>
      <li>Click the <strong>three dots (•••)</strong> in the upper right</li>
      <li>Select <strong>"Create status badge"</strong></li>
      <li>Copy the Markdown and paste it into your README.md</li>
    </ol>

    <h4>Example Badge Markdown:</h4>
    <pre><code>![CI](https://github.com/username/repo/actions/workflows/ci.yml/badge.svg)</code></pre>

    <div class="mb-3">
      <label for="${a}" class="form-label"> Enter your GitHub repository URL: </label>
      <input
        type="url"
        class="form-control"
        id="${a}"
        name="${a}"
        placeholder="https://github.com/username/repository"
        required
      />
    </div>
  `;return{id:a,title:t,question:l,answer:s,weight:e}}var Ae=R(()=>{"use strict"});var Re=L((Ie,oe)=>{(function(e,a,t){function s(r){var d=this,p=i();d.next=function(){var n=2091639*d.s0+d.c*23283064365386963e-26;return d.s0=d.s1,d.s1=d.s2,d.s2=n-(d.c=n|0)},d.c=1,d.s0=p(" "),d.s1=p(" "),d.s2=p(" "),d.s0-=p(r),d.s0<0&&(d.s0+=1),d.s1-=p(r),d.s1<0&&(d.s1+=1),d.s2-=p(r),d.s2<0&&(d.s2+=1),p=null}function l(r,d){return d.c=r.c,d.s0=r.s0,d.s1=r.s1,d.s2=r.s2,d}function u(r,d){var p=new s(r),n=d&&d.state,o=p.next;return o.int32=function(){return p.next()*4294967296|0},o.double=function(){return o()+(o()*2097152|0)*11102230246251565e-32},o.quick=o,n&&(typeof n=="object"&&l(n,p),o.state=function(){return l(p,{})}),o}function i(){var r=4022871197,d=function(p){p=String(p);for(var n=0;n<p.length;n++){r+=p.charCodeAt(n);var o=.02519603282416938*r;r=o>>>0,o-=r,o*=r,r=o>>>0,o-=r,r+=o*4294967296}return(r>>>0)*23283064365386963e-26};return d}a&&a.exports?a.exports=u:t&&t.amd?t(function(){return u}):this.alea=u})(Ie,typeof oe=="object"&&oe,typeof define=="function"&&define)});var De=L((_e,ne)=>{(function(e,a,t){function s(i){var r=this,d="";r.x=0,r.y=0,r.z=0,r.w=0,r.next=function(){var n=r.x^r.x<<11;return r.x=r.y,r.y=r.z,r.z=r.w,r.w^=r.w>>>19^n^n>>>8},i===(i|0)?r.x=i:d+=i;for(var p=0;p<d.length+64;p++)r.x^=d.charCodeAt(p)|0,r.next()}function l(i,r){return r.x=i.x,r.y=i.y,r.z=i.z,r.w=i.w,r}function u(i,r){var d=new s(i),p=r&&r.state,n=function(){return(d.next()>>>0)/4294967296};return n.double=function(){do var o=d.next()>>>11,c=(d.next()>>>0)/4294967296,m=(o+c)/(1<<21);while(m===0);return m},n.int32=d.next,n.quick=n,p&&(typeof p=="object"&&l(p,d),n.state=function(){return l(d,{})}),n}a&&a.exports?a.exports=u:t&&t.amd?t(function(){return u}):this.xor128=u})(_e,typeof ne=="object"&&ne,typeof define=="function"&&define)});var Me=L((Pe,ie)=>{(function(e,a,t){function s(i){var r=this,d="";r.next=function(){var n=r.x^r.x>>>2;return r.x=r.y,r.y=r.z,r.z=r.w,r.w=r.v,(r.d=r.d+362437|0)+(r.v=r.v^r.v<<4^(n^n<<1))|0},r.x=0,r.y=0,r.z=0,r.w=0,r.v=0,i===(i|0)?r.x=i:d+=i;for(var p=0;p<d.length+64;p++)r.x^=d.charCodeAt(p)|0,p==d.length&&(r.d=r.x<<10^r.x>>>4),r.next()}function l(i,r){return r.x=i.x,r.y=i.y,r.z=i.z,r.w=i.w,r.v=i.v,r.d=i.d,r}function u(i,r){var d=new s(i),p=r&&r.state,n=function(){return(d.next()>>>0)/4294967296};return n.double=function(){do var o=d.next()>>>11,c=(d.next()>>>0)/4294967296,m=(o+c)/(1<<21);while(m===0);return m},n.int32=d.next,n.quick=n,p&&(typeof p=="object"&&l(p,d),n.state=function(){return l(d,{})}),n}a&&a.exports?a.exports=u:t&&t.amd?t(function(){return u}):this.xorwow=u})(Pe,typeof ie=="object"&&ie,typeof define=="function"&&define)});var Ce=L((qe,ae)=>{(function(e,a,t){function s(i){var r=this;r.next=function(){var p=r.x,n=r.i,o,c,m;return o=p[n],o^=o>>>7,c=o^o<<24,o=p[n+1&7],c^=o^o>>>10,o=p[n+3&7],c^=o^o>>>3,o=p[n+4&7],c^=o^o<<7,o=p[n+7&7],o=o^o<<13,c^=o^o<<9,p[n]=c,r.i=n+1&7,c};function d(p,n){var o,c,m=[];if(n===(n|0))c=m[0]=n;else for(n=""+n,o=0;o<n.length;++o)m[o&7]=m[o&7]<<15^n.charCodeAt(o)+m[o+1&7]<<13;for(;m.length<8;)m.push(0);for(o=0;o<8&&m[o]===0;++o);for(o==8?c=m[7]=-1:c=m[o],p.x=m,p.i=0,o=256;o>0;--o)p.next()}d(r,i)}function l(i,r){return r.x=i.x.slice(),r.i=i.i,r}function u(i,r){i==null&&(i=+new Date);var d=new s(i),p=r&&r.state,n=function(){return(d.next()>>>0)/4294967296};return n.double=function(){do var o=d.next()>>>11,c=(d.next()>>>0)/4294967296,m=(o+c)/(1<<21);while(m===0);return m},n.int32=d.next,n.quick=n,p&&(p.x&&l(p,d),n.state=function(){return l(d,{})}),n}a&&a.exports?a.exports=u:t&&t.amd?t(function(){return u}):this.xorshift7=u})(qe,typeof ae=="object"&&ae,typeof define=="function"&&define)});var Le=L((Oe,se)=>{(function(e,a,t){function s(i){var r=this;r.next=function(){var p=r.w,n=r.X,o=r.i,c,m;return r.w=p=p+1640531527|0,m=n[o+34&127],c=n[o=o+1&127],m^=m<<13,c^=c<<17,m^=m>>>15,c^=c>>>12,m=n[o]=m^c,r.i=o,m+(p^p>>>16)|0};function d(p,n){var o,c,m,h,f,g=[],y=128;for(n===(n|0)?(c=n,n=null):(n=n+"\0",c=0,y=Math.max(y,n.length)),m=0,h=-32;h<y;++h)n&&(c^=n.charCodeAt((h+32)%n.length)),h===0&&(f=c),c^=c<<10,c^=c>>>15,c^=c<<4,c^=c>>>13,h>=0&&(f=f+1640531527|0,o=g[h&127]^=c+f,m=o==0?m+1:0);for(m>=128&&(g[(n&&n.length||0)&127]=-1),m=127,h=4*128;h>0;--h)c=g[m+34&127],o=g[m=m+1&127],c^=c<<13,o^=o<<17,c^=c>>>15,o^=o>>>12,g[m]=c^o;p.w=f,p.X=g,p.i=m}d(r,i)}function l(i,r){return r.i=i.i,r.w=i.w,r.X=i.X.slice(),r}function u(i,r){i==null&&(i=+new Date);var d=new s(i),p=r&&r.state,n=function(){return(d.next()>>>0)/4294967296};return n.double=function(){do var o=d.next()>>>11,c=(d.next()>>>0)/4294967296,m=(o+c)/(1<<21);while(m===0);return m},n.int32=d.next,n.quick=n,p&&(p.X&&l(p,d),n.state=function(){return l(d,{})}),n}a&&a.exports?a.exports=u:t&&t.amd?t(function(){return u}):this.xor4096=u})(Oe,typeof se=="object"&&se,typeof define=="function"&&define)});var Ne=L((Fe,le)=>{(function(e,a,t){function s(i){var r=this,d="";r.next=function(){var n=r.b,o=r.c,c=r.d,m=r.a;return n=n<<25^n>>>7^o,o=o-c|0,c=c<<24^c>>>8^m,m=m-n|0,r.b=n=n<<20^n>>>12^o,r.c=o=o-c|0,r.d=c<<16^o>>>16^m,r.a=m-n|0},r.a=0,r.b=0,r.c=-1640531527,r.d=1367130551,i===Math.floor(i)?(r.a=i/4294967296|0,r.b=i|0):d+=i;for(var p=0;p<d.length+20;p++)r.b^=d.charCodeAt(p)|0,r.next()}function l(i,r){return r.a=i.a,r.b=i.b,r.c=i.c,r.d=i.d,r}function u(i,r){var d=new s(i),p=r&&r.state,n=function(){return(d.next()>>>0)/4294967296};return n.double=function(){do var o=d.next()>>>11,c=(d.next()>>>0)/4294967296,m=(o+c)/(1<<21);while(m===0);return m},n.int32=d.next,n.quick=n,p&&(typeof p=="object"&&l(p,d),n.state=function(){return l(d,{})}),n}a&&a.exports?a.exports=u:t&&t.amd?t(function(){return u}):this.tychei=u})(Fe,typeof le=="object"&&le,typeof define=="function"&&define)});var Ge=L(()=>{});var We=L((He,V)=>{(function(e,a,t){var s=256,l=6,u=52,i="random",r=t.pow(s,l),d=t.pow(2,u),p=d*2,n=s-1,o;function c(b,E,k){var S=[];E=E==!0?{entropy:!0}:E||{};var $=g(f(E.entropy?[b,w(a)]:b??y(),3),S),T=new m(S),D=function(){for(var x=T.g(l),v=r,A=0;x<d;)x=(x+A)*s,v*=s,A=T.g(1);for(;x>=p;)x/=2,v/=2,A>>>=1;return(x+A)/v};return D.int32=function(){return T.g(4)|0},D.quick=function(){return T.g(4)/4294967296},D.double=D,g(w(T.S),a),(E.pass||k||function(x,v,A,q){return q&&(q.S&&h(q,T),x.state=function(){return h(T,{})}),A?(t[i]=x,v):x})(D,$,"global"in E?E.global:this==t,E.state)}function m(b){var E,k=b.length,S=this,$=0,T=S.i=S.j=0,D=S.S=[];for(k||(b=[k++]);$<s;)D[$]=$++;for($=0;$<s;$++)D[$]=D[T=n&T+b[$%k]+(E=D[$])],D[T]=E;(S.g=function(x){for(var v,A=0,q=S.i,C=S.j,J=S.S;x--;)v=J[q=n&q+1],A=A*s+J[n&(J[q]=J[C=n&C+v])+(J[C]=v)];return S.i=q,S.j=C,A})(s)}function h(b,E){return E.i=b.i,E.j=b.j,E.S=b.S.slice(),E}function f(b,E){var k=[],S=typeof b,$;if(E&&S=="object")for($ in b)try{k.push(f(b[$],E-1))}catch{}return k.length?k:S=="string"?b:b+"\0"}function g(b,E){for(var k=b+"",S,$=0;$<k.length;)E[n&$]=n&(S^=E[n&$]*19)+k.charCodeAt($++);return w(E)}function y(){try{var b;return o&&(b=o.randomBytes)?b=b(s):(b=new Uint8Array(s),(e.crypto||e.msCrypto).getRandomValues(b)),w(b)}catch{var E=e.navigator,k=E&&E.plugins;return[+new Date,e,k,e.screen,w(a)]}}function w(b){return String.fromCharCode.apply(0,b)}if(g(t.random(),a),typeof V=="object"&&V.exports){V.exports=c;try{o=Ge()}catch{}}else typeof define=="function"&&define.amd?define(function(){return c}):t["seed"+i]=c})(typeof self<"u"?self:He,[],Math)});var F=L((Ko,Ue)=>{var fr=Re(),gr=De(),yr=Me(),br=Ce(),wr=Le(),xr=Ne(),H=We();H.alea=fr;H.xor128=gr;H.xorwow=yr;H.xorshift7=br;H.xor4096=wr;H.tychei=xr;Ue.exports=H});var I,ce=R(()=>{"use strict";I=(e,a)=>e[Math.floor(a()*e.length)]});var Je={};M(Je,{default:()=>Ar});import{html as vr}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Ar({user:e,weight:a=1}){let t="q-google-dorks",s="Data Sourcing with Google Dorks",l=(0,je.default)(`${e.email}#${t}`),i=I(Er,l)(l),r=vr`
  <div class="mb-3">
    <h2>Data Sourcing with Google Dorks for OpenData Insights</h2>

    <p>
      <strong>OpenData Insights</strong> is a research organization that specializes in discovering, aggregating,
      and analyzing publicly available datasets from government portals, academic institutions, and official repositories.
      These datasets are critical for economic analysis, policy evaluation, and data-driven journalism.
    </p>

    <p>
      A major challenge faced by OpenData Insights is that valuable datasets are often buried deep within websites and
      are not easily discoverable through standard search queries. Many important files—such as budgets, reports,
      and statistics—exist as downloadable documents (PDFs, Excel files, CSVs) and require more precise search techniques.
    </p>

    <p>
      To solve this problem, the team relies on <strong>Google Dorks</strong> (advanced search operators) to systematically
      uncover relevant datasets from specific domains and file types.
    </p>

    <p><strong>Common Google Dork Operators:</strong></p>
    <ul>
      <li><code>site:</code> – Restrict results to a specific domain (e.g., <code>site:gov.in</code>)</li>
      <li><code>filetype:</code> or <code>ext:</code> – Locate specific file types (e.g., <code>filetype:xlsx</code>)</li>
      <li><code>intitle:</code> – Search for keywords in page titles</li>
      <li><code>inurl:</code> – Search for keywords in URLs</li>
      <li><code>intext:</code> – Search for keywords in page content</li>
      <li><code>"quoted phrase"</code> – Exact phrase matching</li>
    </ul>

    <p>
      OpenData Insights has asked you to construct a Google Dork query that will reliably surface
      high-value datasets relevant to their research needs.
    </p>

    <h2>Your Task</h2>
    <p>
      Construct a <strong>single Google Dork query</strong> that fulfills the following requirements:
    </p>

    <ol>
      <li>
        <strong>Domain Targeting:</strong> Limit results to the relevant domain
        <code>${i.requiredDomain}</code>.
      </li>
      <li>
        <strong>File Discovery:</strong> Target specific downloadable dataset formats
        (e.g., Excel, PDF, or CSV).
      </li>
      <li>
        <strong>Keyword Precision:</strong> Use title, URL, or content operators to narrow results
        to datasets related to <strong>${i.summary}</strong>.
      </li>
    </ol>

    <p class="text-info">
      <em>
        Your query must be at least ${i.minLength} characters long and use multiple Google Dork operators
        to ensure precision.
      </em>
    </p>

    <label for="${t}" class="form-label">
      What Google Dork query would you use to find relevant datasets for
      <strong>${i.summary}</strong>?
    </label>

    <input
      class="form-control font-monospace"
      id="${t}"
      name="${t}"
      placeholder="e.g., site:gov.in filetype:xlsx intitle:budget 2024"
      style="font-size: 0.9rem;"
      required
    />

    <p class="text-muted mt-2">
      <small>
        Your answer will be validated to ensure it uses appropriate operators, targets the correct domain,
        specifies relevant file types, and includes necessary keywords.
      </small>
    </p>
  </div>
`;return{id:t,title:s,weight:a,question:r,answer:async p=>{if(!p||typeof p!="string")throw new Error("Answer is required. Please enter a Google Dork query.");let n=p.trim();if(n.length<i.minLength)throw new Error(`Query is too short (${n.length} chars). Please make it more specific with at least ${i.minLength} characters. Hint: Use multiple operators and keywords.`);for(let m of i.requiredOperators)if(!$r(n,m))throw new Error(`Query must use the '${m}' operator. For example: ${m}example`);if(!Tr(n,i.requiredDomain))throw new Error(`Query must target the appropriate domain using 'site:${i.requiredDomain}' or similar. This ensures you're searching within the correct websites for this task.`);if(!kr(n,i.requiredFiletypes))throw new Error(`Query must specify a relevant file type using 'filetype:' operator. Expected one of: ${i.requiredFiletypes.join(", ")}. For example: filetype:${i.requiredFiletypes[0]}`);if(!Sr(n,i.requiredKeywords))throw new Error(`Query must include relevant keywords: ${i.requiredKeywords.join(", ")}. These help narrow down the search to the specific data requested.`);let o=n.toLowerCase(),c=["site:","filetype:","ext:","intitle:","inurl:","intext:"].filter(m=>o.includes(m)).length;if(c<2)throw new Error(`Query should use at least 2 different search operators for more precise results. Currently using only ${c}. Try adding intitle:, inurl:, or quoted phrases.`);return!0}}}var je,Er,$r,kr,Sr,Tr,Ye=R(()=>{"use strict";je=G(F(),1);ce();Er=[e=>{let t=I([2020,2021,2022,2023,2024,2025],e),l=I(["gov.in","nic.in"],e);return{id:`budget-${t}-${l}`,description:`Find Excel files containing budget data from ${t} on Indian government websites`,requiredOperators:["site:","filetype:"],requiredDomain:l,requiredFiletypes:["xls","xlsx","csv"],requiredKeywords:["budget",String(t)],minLength:35,summary:`Excel budget files from ${t} on ${l}`,hint:`Try: site:${l} filetype:xlsx budget ${t}`}},e=>{let t=I(["maharashtra","karnataka","tamil nadu","delhi","gujarat","bihar","arunachal pradesh"],e);return{id:`census-${t.replace(/ /g,"-")}`,description:`Find PDF census or population data reports for ${t} from Indian government sources`,requiredOperators:["site:","filetype:"],requiredDomain:"gov.in",requiredFiletypes:["pdf"],requiredKeywords:["census",t],minLength:40,summary:`PDF census data for ${t}`,hint:`Try: site:gov.in filetype:pdf census "${t}"`}},e=>{let t=I(["railways","telecom","power","petroleum","steel","mining"],e);return{id:`psu-${t}`,description:`Find annual reports or financial data from Indian public sector companies in the ${t} sector`,requiredOperators:["site:","filetype:","intitle:"],requiredDomain:"gov.in",requiredFiletypes:["pdf","xlsx"],requiredKeywords:[t,"annual","report"],minLength:45,summary:`${t} PSU annual reports from India`,hint:`Try: site:gov.in intitle:"annual report" filetype:pdf ${t}`}},e=>{let t=I(["finance","commerce","health","education","agriculture"],e);return{id:`ministry-${t}`,description:`Find downloadable spreadsheets with statistics from the Indian Ministry of ${t.charAt(0).toUpperCase()+t.slice(1)}`,requiredOperators:["site:","filetype:","inurl:"],requiredDomain:"gov.in",requiredFiletypes:["xls","xlsx","csv"],requiredKeywords:[t,"statistics"],minLength:42,summary:`spreadsheets from Indian Ministry of ${t}`,hint:`Try: site:gov.in inurl:${t} filetype:xlsx statistics`}},e=>{let t=I(["consumer price index","wholesale price index","gdp growth","inflation rate"],e);return{id:`economic-india-${t.replace(/ /g,"-")}`,description:`Find statistical bulletins or data files containing ${t} data from Indian statistical organizations`,requiredOperators:["site:","filetype:"],requiredDomain:"gov.in",requiredFiletypes:["pdf","xls","xlsx"],requiredKeywords:t.split(" "),minLength:45,summary:`${t} data from Indian sources`,hint:`Try: site:mospi.gov.in filetype:xlsx "${t}"`}},e=>{let t=I(["tesla","apple","microsoft","amazon","google","meta","nvidia"],e),l=I([2022,2023,2024],e);return{id:`sec-${t}-${l}`,description:`Find the ${l} annual report (10-K filing) for ${t.charAt(0).toUpperCase()+t.slice(1)} from the SEC EDGAR database`,requiredOperators:["site:","filetype:"],requiredDomain:"sec.gov",requiredFiletypes:["pdf","htm","html"],requiredKeywords:[t,"10-k"],minLength:38,summary:`${t.toUpperCase()} 10-K annual report from SEC`,hint:`Try: site:sec.gov filetype:pdf ${t} 10-K ${l}`}},e=>{let t=I(["brazil","germany","japan","australia","canada","france","uk"],e);return{id:`worldbank-${t}`,description:`Find World Bank economic indicator datasets or country reports for ${t.charAt(0).toUpperCase()+t.slice(1)}`,requiredOperators:["site:","filetype:"],requiredDomain:"worldbank.org",requiredFiletypes:["pdf","xlsx","csv"],requiredKeywords:[t,"data"],minLength:40,summary:`World Bank data for ${t}`,hint:`Try: site:worldbank.org filetype:xlsx ${t} economic data`}},e=>{let t=I(["climate change","renewable energy","carbon emissions","biodiversity","deforestation"],e);return{id:`un-${t.replace(/ /g,"-")}`,description:`Find United Nations reports or datasets about ${t} from official UN domains`,requiredOperators:["site:","filetype:"],requiredDomain:"un.org",requiredFiletypes:["pdf","xlsx"],requiredKeywords:t.split(" ").concat(["report"]),minLength:42,summary:`UN reports on ${t}`,hint:`Try: site:un.org filetype:pdf "${t}" report`}},e=>{let t=I(["monetary policy","inflation","interest rates","financial stability","banking"],e),l=I(["europe","asia","global"],e);return{id:`imf-${t.replace(/ /g,"-")}`,description:`Find IMF working papers or data files about ${t} with focus on ${l}`,requiredOperators:["site:","filetype:"],requiredDomain:"imf.org",requiredFiletypes:["pdf","xlsx"],requiredKeywords:[t.split(" ")[0],l],minLength:40,summary:`IMF ${t} data for ${l}`,hint:`Try: site:imf.org filetype:pdf ${t} ${l}`}},e=>{let t=I(["germany","france","italy","spain","netherlands","poland"],e),l=I(["employment","trade","population","energy","agriculture"],e);return{id:`eurostat-${t}-${l}`,description:`Find Eurostat statistical datasets about ${l} for ${t.charAt(0).toUpperCase()+t.slice(1)}`,requiredOperators:["site:","filetype:"],requiredDomain:"europa.eu",requiredFiletypes:["xlsx","csv","pdf"],requiredKeywords:[t,l,"statistics"],minLength:45,summary:`Eurostat ${l} statistics for ${t}`,hint:`Try: site:ec.europa.eu filetype:xlsx ${t} ${l} statistics`}}],$r=(e,a)=>e.toLowerCase().includes(a.toLowerCase()),kr=(e,a)=>{let t=e.toLowerCase();return a.some(s=>t.includes(`filetype:${s}`)||t.includes(`ext:${s}`))},Sr=(e,a)=>{let t=e.toLowerCase();return a.every(s=>t.includes(s.toLowerCase()))},Tr=(e,a)=>{let t=e.toLowerCase(),s=a.toLowerCase(),l=/(^|\s)site:([^\s]+)/gi,u;for(;(u=l.exec(t))!==null;){let i=u[2];if(i.startsWith("-")&&(i=i.slice(1)),i=i.replace(/^https?:\/\//,""),i=i.replace(/^(\*|\.)+/,""),i===s||i.endsWith("."+s))return!0}return!1}});var ze={};M(ze,{default:()=>_r});import{html as Ir}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import{default as Rr}from"https://cdn.jsdelivr.net/npm/seedrandom@3/+esm";async function _r({user:e,weight:a=1}){let t="q-llm-audio-topic-extraction",s="LLM Audio Processing \u2013 YouTube Topic Timestamp Finder",l=Rr(`${e.email}#${t}`),i=[...[{videoUrl:"https://youtu.be/vA5TTz6BXhY",topics:[{topic:"Homebrew package manager if you're on Linux you can use whatever package",expectedTime:"00:05:50"},{topic:"generate some SSH keys and add them to GitHub I'm going to show you how to do",expectedTime:"00:33:07"},{topic:"would merge it into the main and then I could push to the the remote repo so",expectedTime:"00:45:38"},{topic:"latest deployment and it happened really quick because it's such a small project",expectedTime:"00:48:44"},{topic:"continuous deployment with versel which is a great hosting company with a very",expectedTime:"00:46:22"},{topic:"we look at the workflow here is we would run get add and add files to",expectedTime:"00:16:30"}]},{videoUrl:"https://youtu.be/kCc8FmEb1nY",topics:[{topic:"we also have the reverse mapping so we can take this list and decode it to get",expectedTime:"00:10:20"},{topic:"like a level of indirection here where we don't directly go to the embedding",expectedTime:"00:58:49"},{topic:"all of the uh noes talk to each other uh fully so as an example if you're doing",expectedTime:"01:14:37"},{topic:"parameters uh the layer Norm will U eventually create outputs that might not",expectedTime:"01:36:59"},{topic:"documents that have to format where the question is on top and then an answer is",expectedTime:"01:52:47"}]},{videoUrl:"https://youtu.be/rfscVS0vtbw",topics:[{topic:"it's going to be awesome. So first thing we can do is we can actually just like print out a number.",expectedTime:"00:39:00"},{topic:"different types of variables and the different types of data that we can store inside of variables.",expectedTime:"00:16:09"},{topic:"I could say phrase dot upper, and then parentheses. And then after this, I could say dot is upper.",expectedTime:"00:32:17"},{topic:"Beatles feet and miles, get file extension meters and kilometers roll dice. So it's",expectedTime:"03:31:21"}]},{videoUrl:"https://youtu.be/3c-iBn73dDE",topics:[{topic:"So if I do this it says it can find the image locally.",expectedTime:"00:50:32"},{topic:"So we've talked about Dr Network and how we created our own",expectedTime:"01:37:03"},{topic:"you're done with it and you have created your own docker image.",expectedTime:"02:20:16"}]},{videoUrl:"https://youtu.be/xxpc-HPKN28",topics:[{topic:"And those variables would be your data. But if you chose samples, that you know, just",expectedTime:"00:10:15"},{topic:"the mode. Of course, if you measure a whole bunch of people, then eventually you're probably",expectedTime:"03:43:52"},{topic:"I imagined what the normal distribution would look like for that class with the distribution",expectedTime:"06:43:13"}]}]];for(let h=i.length-1;h>0;h--){let f=Math.floor(l()*(h+1));[i[h],i[f]]=[i[f],i[h]]}let r=i[0],d=[...r.topics];for(let h=d.length-1;h>0;h--){let f=Math.floor(l()*(h+1));[d[h],d[f]]=[d[f],d[h]]}let p=d[0];function n(h){if(!h||typeof h!="string")return null;let g=h.trim().match(/^(\d{1,2}):(\d{2}):(\d{2})$/);if(!g)return null;let y=parseInt(g[1],10),w=parseInt(g[2],10),b=parseInt(g[3],10);return w>=60||b>=60?null:y*3600+w*60+b}let o=3*60,c=async h=>{if(!h||typeof h!="string"||!h.trim())throw new Error("Please enter your FastAPI endpoint URL.");let f=h.trim();if(!f.startsWith("http://")&&!f.startsWith("https://"))throw new Error("URL must start with http:// or https://");let g=f.endsWith("/ask")?f:f.replace(/\/+$/,"")+"/ask",y;try{y=await fetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({video_url:r.videoUrl,topic:p.topic})})}catch(v){throw new Error(`Cannot reach your endpoint at ${g}.
Make sure your FastAPI server is running and publicly accessible.
Network error: ${v.message}`)}if(!y.ok){let v="";try{v=await y.text()}catch{}throw new Error(`Your endpoint returned HTTP ${y.status} ${y.statusText}.
Response body: ${v.slice(0,300)||"(empty)"}

Ensure the endpoint handles POST /ask and returns 200 on success.`)}let w=y.headers.get("content-type")||"";if(!w.includes("application/json"))throw new Error(`Expected Content-Type: application/json but got: "${w}".
Make sure your FastAPI route returns a JSON response.`);let b;try{b=await y.json()}catch(v){throw new Error(`Response body is not valid JSON: ${v.message}`)}let E=[];if(b.timestamp||E.push("timestamp"),b.video_url||E.push("video_url"),b.topic||E.push("topic"),E.length)throw new Error(`Response JSON is missing required field(s): ${E.join(", ")}.
Received: ${JSON.stringify(b).slice(0,300)}

Expected shape:
{
  "timestamp": "HH:MM:SS",
  "video_url": "...",
  "topic": "..."
}`);let k=String(b.timestamp).trim(),S=n(k);if(S===null)throw new Error(`"timestamp" value "${k}" is not a valid HH:MM:SS timestamp.
Required format examples: "00:05:47"  "01:34:09"  "03:31:21"

Make sure your Gemini prompt explicitly asks for HH:MM:SS format.`);let $=n(p.expectedTime),T=Math.abs(S-$),D=`${Math.floor(T/60)}m ${T%60}s`;if(T<=o)return!0;let x=S<$?"too early":"too late";throw new Error(`Timestamp "${k}" is ${D} ${x} (tolerance is \xB13 minutes).

Video:  ${r.videoUrl}
Topic:  "${p.topic}"

Hints:
\u2022 Make sure you're uploading the audio (not video frames) to Gemini.
\u2022 Ask Gemini for the exact moment the topic is first mentioned, not the chapter start.
\u2022 Verify your Gemini prompt explicitly requests output in HH:MM:SS format.
\u2022 For long videos (>1 hour), ensure yt-dlp downloads the full audio file.`)},m=Ir`
    <p>
      <strong>Scenario:</strong> You're building a smart video search tool for an e-learning platform.
      Given any YouTube video and a spoken phrase or topic, your API must pinpoint the
      <em>exact moment</em> it appears — so learners can jump straight to the relevant section
      instead of scrubbing through hours of content.
    </p>

    <div style="background:#0d1f3c;border:1px solid #1e4a8c;border-radius:8px;padding:16px 20px;margin:14px 0;color:#e8f4ff;line-height:1.8">
      <div style="font-size:12px;letter-spacing:2px;color:#4fc3f7;margin-bottom:8px">◆ YOUR ASSIGNMENT</div>
      <p style="margin:0">
        Build a <strong>FastAPI endpoint</strong> <code>POST /ask</code> that:
      </p>
      <ol style="margin:8px 0 0 0;padding-left:20px">
        <li>Receives a <strong>YouTube URL</strong> and a <strong>topic / spoken phrase</strong></li>
        <li>Downloads the <strong>audio</strong> from the video using <code>yt-dlp</code></li>
        <li>Uploads the audio to <strong>Gemini via the Files API</strong></li>
        <li>Asks Gemini to locate when that topic is spoken in the audio</li>
        <li>Returns the timestamp as a single <code>HH:MM:SS</code> string</li>
      </ol>
    </div>

    <p><strong>Request format:</strong></p>
    <pre><code>{
  "video_url": "https://youtu.be/dQw4w9WgXcQ",
  "topic": "the spoken phrase or subject to locate"
}</code></pre>

    <p><strong>Response format:</strong></p>
    <pre><code>{
  "timestamp": "00:05:47",
  "video_url": "https://youtu.be/dQw4w9WgXcQ",
  "topic": "the spoken phrase or subject to locate"
}</code></pre>

    <p><strong>Field specifications:</strong></p>
    <table>
      <thead>
        <tr>
          <th>Field</th><th>Type</th><th>Required</th><th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>timestamp</code></td>
          <td>string</td><td>✅ Yes</td>
          <td>
            Time when the topic is first spoken — <strong>HH:MM:SS format only</strong>
            (e.g. <code>"00:05:47"</code>, <code>"01:34:09"</code>, <code>"03:31:21"</code>)
          </td>
        </tr>
        <tr>
          <td><code>video_url</code></td>
          <td>string</td><td>✅ Yes</td>
          <td>Echo back the original video URL from the request</td>
        </tr>
        <tr>
          <td><code>topic</code></td>
          <td>string</td><td>✅ Yes</td>
          <td>Echo back the original topic from the request</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Grading:</strong></p>
    <div style="background:#1b2a1b;border:1px solid #2e7d32;border-radius:6px;padding:12px 16px;margin:8px 0;color:#c8e6c9">
      ✅ <strong>Full marks</strong> if your returned timestamp is within
      <strong>±3 minutes</strong> of the correct answer.<br/>
      ❌ <strong>Zero marks</strong> if the timestamp is outside that window or the
      response format is wrong.
    </div>

    <p><strong>Requirements &amp; constraints:</strong></p>
    <ul>
      <li>Use <code>yt-dlp</code> to download <strong>audio only</strong> — never video frames
        (sending video frames to Gemini triggers the "10,800 image limit" error)</li>
      <li>Use the <strong>Gemini Files API</strong> (<code>client.files.upload()</code>) to upload
        the audio; do not embed audio bytes inline</li>
      <li>Poll for the uploaded file's state to become <code>ACTIVE</code> before calling
        <code>generate_content</code></li>
      <li>Use <strong>structured outputs</strong> (<code>response_schema</code>) to guarantee
        the HH:MM:SS format in Gemini's response</li>
      <li>Clean up the temporary audio file after processing</li>
      <li>Timestamps <strong>must</strong> be in <code>HH:MM:SS</code> — not <code>MM:SS</code>
        or plain seconds</li>
      <li>Recommended model: <code>gemini-2.0-flash</code> or <code>gemini-1.5-pro</code></li>
    </ul>


    <p><strong>Helpful resources:</strong></p>
    <ul>
      <li>📖 <a href="https://ai.google.dev/gemini-api/docs/audio" target="_blank">Gemini Audio Processing guide</a></li>
      <li>📖 <a href="https://ai.google.dev/api/files" target="_blank">Gemini Files API reference</a></li>
      <li>📖 <a href="https://ai.google.dev/gemini-api/docs/structured-output" target="_blank">Gemini Structured Outputs</a></li>
      <li>📖 <a href="https://github.com/yt-dlp/yt-dlp" target="_blank">yt-dlp documentation</a></li>
      <li>📖 <a href="https://fastapi.tiangolo.com/tutorial/body/" target="_blank">FastAPI request body</a></li>
    </ul>

    <p>
      💡 <strong>Key insight:</strong> The hardest part is <em>not</em> the Gemini call —
      it's correctly downloading audio-only with <code>yt-dlp</code> and waiting for the
      Files API upload to finish processing. Get those two steps right and the rest follows naturally.
    </p>

    <p>
      💡 You can solve this question even without using any audio or video parsing. Can you think?
    </p>

    <hr />

    <label for="${t}" class="form-label">
      Enter the base URL of your FastAPI endpoint
      <small class="text-muted">(the validator will call <code>POST /ask</code> on it)</small>:
    </label>
    <input
      type="url"
      class="form-control"
      id="${t}"
      name="${t}"
      placeholder="https://your-api.example.com"
      required
    />
    <small class="form-text text-muted">
      Example: if your server is at <code>https://abc.ngrok.io</code>, enter that —
      the validator automatically appends <code>/ask</code>.
    </small>
  `;return{id:t,title:s,weight:a,question:m,answer:c,help:[]}}var Be=R(()=>{"use strict"});var Ve={};M(Ve,{default:()=>Pr});import{html as Dr}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Pr({user:e,weight:a=2}){let t="q-cdp-runtime-diagnostics",s="Browser Runtime Diagnostics using DevTools Instrumentation",u=`https://sanand0.github.io/tdsdata/cdp_trap/index.html?student=${encodeURIComponent(e.email)}`,i=15;function r(n){let o=0;for(let c=0;c<n.length;c++)o=(o<<5)-o+n.charCodeAt(c),o|=0;return Math.abs(o)}let d=Dr`
    <div class="mb-3">
      <p>
        You are a <strong>Tools Engineer</strong> investigating a production monitoring dashboard
        where silent frontend failures go undetected. The backend logs show no errors, but
        engineers suspect runtime failures are happening inside the <strong>browser</strong>.
      </p>

      <p>
        A special TDS monitoring website has been deployed that simulates real-world frontend behavior:
      </p>
      <ul>
        <li>15 interconnected pages with navigation links</li>
        <li>Console logs, warnings, and debug messages</li>
        <li>Asynchronous JavaScript errors triggered after delays</li>
        <li>Runtime-only failures (not visible in HTML source code)</li>
      </ul>

      <p>
        <strong>Each student gets a personalized error pattern</strong> based on their email address.
        The same email will always generate the same error locations.
      </p>

      <p>
        <strong>Your assigned monitoring URL:</strong><br />
        <code>${u}</code><br />
        <a href="${u}" target="_blank">Open in new tab</a>
      </p>

      <hr />

      <h5>Task: Automated Runtime Diagnostics</h5>
      <ol>
        <li><strong>Use browser automation</strong> (Playwright/Puppeteer) to open the URL programmatically</li>
        <li><strong>Navigate all 15 pages</strong> starting from index.html using the provided links</li>
        <li><strong>Capture console events</strong>: logs, warnings, errors, and page errors</li>
        <li><strong>Wait for asynchronous failures</strong> (errors triggered after ~1-3 second delays)</li>
        <li><strong>Record page names where uncaught JavaScript exceptions occurred</strong></li>
        <li><strong>Generate diagnostic report</strong> in the required format</li>
      </ol>

      <hr />

      <h5>What You'll Capture (Examples from the runtime script):</h5>
      <ul>
        <li><code>[TDS] Student: your.email@domain.com | Page: 0 initialized</code> - Synchronous logs</li>
        <li><code>[TDS] Deprecated analytics API detected on page 3</code> - Warnings</li>
        <li><code>[TDS] Background sync started on page 5</code> - Async logs after ~1-3 seconds</li>
        <li><code>undefinedFunctionCall_TDS_7()</code> - <strong>Runtime errors (uncaught exceptions)</strong></li>
        <li><code>Heartbeat | Student: ... | Page: X</code> - Continuous diagnostics</li>
      </ul>

      <p><strong>⚠️ IMPORTANT:</strong> Only count <strong>uncaught JavaScript exceptions</strong> (like <code>undefinedFunctionCall_TDS_7</code>) as errors, not console.error() messages.</p>

      <hr />

      <h5>Required Output Format (STRICT)</h5>
      <p>Enter your final answer EXACTLY in this format (key=value pairs):</p>
      <pre>
TOTAL_PAGES_VISITED=15
TOTAL_ERRORS=4
FIRST_ERROR_PAGE=page_3.html
      </pre>

      <p><strong>Definitions:</strong></p>
      <ul>
        <li><code>TOTAL_PAGES_VISITED</code> = Total number of pages you navigated to (should be 15)</li>
        <li><code>TOTAL_ERRORS</code> = Count of pages where <strong>uncaught JavaScript exceptions</strong> occurred (not console.error messages)</li>
        <li><code>FIRST_ERROR_PAGE</code> = Name of the first page where an uncaught exception occurred (e.g., "index.html" or "page_7.html")</li>
      </ul>

      <hr />

      <h5>Learning Resources (AskAI)</h5>
      <ul>
        <li>"What is Chrome DevTools Protocol (CDP) and how do automation frameworks use it?"</li>
        <li>"How do I capture console logs and errors in Playwright/Puppeteer?"</li>
        <li>"What's the difference between synchronous errors and asynchronous runtime errors?"</li>
        <li>"How do I programmatically navigate between pages and wait for async operations?"</li>
        <li>"Why does traditional HTTP scraping (requests/BeautifulSoup) fail for runtime diagnostics?"</li>
        <li>"How do I listen to the 'pageerror' event in browser automation to detect uncaught exceptions?"</li>
        <li>"What's the difference between console.error() messages and actual JavaScript exceptions?"</li>
      </ul>

      <p class="text-muted">
        <strong>💡 Hint:</strong> Simple HTTP scraping won't work here. You need a browser automation tool
        that can listen to <strong>pageerror events</strong> (uncaught exceptions) and wait for asynchronous failures.
        Only count actual JavaScript exceptions, not console messages.
      </p>

      <label for="${t}" class="form-label">
        <strong>Your Diagnostic Report:</strong>
      </label>
      <textarea
        class="form-control"
        id="${t}"
        name="${t}"
        rows="4"
        placeholder="TOTAL_PAGES_VISITED=15&#10;TOTAL_ERRORS=4&#10;FIRST_ERROR_PAGE=page_3.html"
        required
      ></textarea>
    </div>
  `;return{id:t,title:s,weight:a,question:d,answer:async n=>{let o=n.split(`
`).map(w=>w.trim()).filter(Boolean),c={};for(let w of o){let[b,E]=w.split("=");!b||!E||(c[b.trim()]=E.trim())}if(!c.TOTAL_PAGES_VISITED||!c.TOTAL_ERRORS||!c.FIRST_ERROR_PAGE)throw new Error(`Invalid format. Use:
TOTAL_PAGES_VISITED=...
TOTAL_ERRORS=...
FIRST_ERROR_PAGE=...`);let m=parseInt(c.TOTAL_PAGES_VISITED,10),h=parseInt(c.TOTAL_ERRORS,10);if(!Number.isInteger(m)||m<0)throw new Error("TOTAL_PAGES_VISITED must be a non-negative integer");if(!Number.isInteger(h)||h<0)throw new Error("TOTAL_ERRORS must be a non-negative integer");if(m!==i)throw new Error(`TOTAL_PAGES_VISITED must be ${i} (you reported ${m})`);let f=r(e.email),g=0,y=null;for(let w=1;w<=i;w++)(f+w)%4===0&&(g++,y===null&&(y=`page_${w}.html`));if(h!==g)throw new Error(`Incorrect TOTAL_ERRORS. Expected ${g}, got ${h}.`);if(c.FIRST_ERROR_PAGE!==y)throw new Error(`Incorrect FIRST_ERROR_PAGE. Expected ${y}, got ${c.FIRST_ERROR_PAGE}.`);return!0}}}var Ke=R(()=>{"use strict"});var tt={};M(tt,{default:()=>Hr});import{html as Mr}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import{default as qr}from"https://cdn.jsdelivr.net/npm/seedrandom@3/+esm";function Or(e,a){let t=0;for(let s of e)t+=Cr[s]??500;return t/1e3*a}function Lr(e){let s=[],l=0;for(;s.length<z&&l<5e3;){l++;let u=60+e()*(Xe-2*60-Ze),i=60+e()*(X-2*60-et);s.some(d=>Math.abs(d.x-u)<90&&Math.abs(d.y-i)<90)||s.push({x:u,y:i})}return s}function Fr(e,a){return{x0:e,y0:X-a-et,x1:e+Ze,y1:X-a}}async function Nr(e){let{PDFDocument:a,rgb:t,StandardFonts:s}=await import("https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/+esm"),l=await a.create(),u=l.addPage([Xe,X]),i=await l.embedFont(s.Helvetica);for(let{x:r,y:d}of e)u.drawText(Qe,{x:r,y:d,size:de,font:i,color:t(0,0,0)});return l.save()}function Gr(e,a){return Math.abs(e[0]-a.x0)<=K&&Math.abs(e[1]-a.y0)<=K&&Math.abs(e[2]-a.x1)<=K&&Math.abs(e[3]-a.y1)<=K}async function Hr({user:e,weight:a=1}){let t="q-pdf-bounding-box",s="PDF Text Bounding Box Detection",l=qr(`${e.email}#${t}`),u=Lr(l),i=u.map(({x:o,y:c})=>Fr(o,c)),r=null,d=(async()=>{try{let o=await Nr(u),c=new Blob([o],{type:"application/pdf"});r=URL.createObjectURL(c);let m=document.getElementById(`${t}-download`);m&&(m.href=r,m.style.display="inline-block",m.textContent="\u2B07 Download your PDF")}catch(o){console.error("PDF generation failed:",o)}})(),p=async o=>{await d;let c;try{c=JSON.parse(o.trim())}catch{throw new Error(`Could not parse your input as JSON.
Expected format: [[x0, y0, x1, y1], [x0, y0, x1, y1], ...]`)}if(!Array.isArray(c))throw new Error("Input must be a JSON array of bounding boxes.");for(let g=0;g<c.length;g++){let y=c[g];if(!Array.isArray(y)||y.length!==4||y.some(w=>typeof w!="number"))throw new Error(`Entry ${g+1} is invalid. Each bounding box must be [x0, y0, x1, y1] with numeric values.`)}let m=0,h=[];for(let g=0;g<i.length;g++){let y=i[g],w=c.find(b=>Gr(b,y));w?(m++,h.push(`  \u2705 Word ${g+1}: matched by [${w.join(", ")}]`)):h.push(`  \u274C Word ${g+1}: Not Matched`)}let f=Math.ceil(z*.8);if(m>=f)return!0;throw new Error(`Only ${m}/${z} bounding boxes matched (need ${f}).

`+h.join(`
`)+`

Tolerance is \xB130 pts per coordinate. Make sure you're using PyMuPDF (fitz) to extract coordinates.`)},n=Mr`
    <p>
      <strong>Scenario:</strong> A single-page PDF has been generated uniquely for you.
      It contains the word <code>"text"</code> placed at <strong>${z} random locations</strong>.
      Your task is to programmatically find the bounding-box coordinates of every occurrence and submit them.
    </p>

    <p>
      <strong>Step 1 – Download your personalised PDF:</strong><br />
      <a id="${t}-download" style="display:none;" download="bounding_box_task.pdf">
        ⏳ Generating PDF…
      </a>
      <small class="text-muted">(Generated in your browser from your email as seed – unique to you)</small>
    </p>

    <p>
      <strong>Step 2 – Extract bounding boxes with Python:</strong><br />
      Run the provided <code>main.py</code> solution script:
    </p>
    <pre><code>pip install pymupdf
python main.py bounding_box_task.pdf text</code></pre>

    <p>
      <strong>Step 3 – Submit the output:</strong><br />
      The script prints a JSON array. Paste it below.
    </p>

    <p><strong>Expected submission format</strong> (array of <code>[x0, y0, x1, y1]</code> in PDF points, PyMuPDF coordinate system – origin at top-left):</p>
    <pre><code>[[34, 120, 58, 134], [210, 305, 234, 319], ...]</code></pre>

    <p><strong>Acceptance criteria:</strong></p>
    <ul>
      <li>Provide all <strong>${z}</strong> bounding boxes (order does not matter)</li>
      <li>At least <strong>8 out of 10</strong> must match within <strong>±30 points</strong> per coordinate</li>
      <li>Each bounding box: <code>[x0, y0, x1, y1]</code> as integers</li>
    </ul>

    <p><strong>Helpful Resources:</strong></p>
    <ul>
      <li>📖 <a href="https://pymupdf.readthedocs.io/en/latest/page.html#Page.search_for" target="_blank">PyMuPDF – <code>page.search_for()</code></a></li>
      <li>📖 <a href="https://pymupdf.readthedocs.io/en/latest/rect.html" target="_blank">PyMuPDF – Rect objects</a></li>
    </ul>

    <hr />

    <label for="${t}" class="form-label">
      Paste your JSON array of bounding boxes:
    </label>
    <textarea
      class="form-control font-monospace"
      id="${t}"
      name="${t}"
      rows="6"
      placeholder='[[x0, y0, x1, y1], [x0, y0, x1, y1], ...]'
      required
    ></textarea>
    <small class="form-text text-muted">
      Paste the exact JSON printed by <code>main.py</code> – a flat array of 10 bounding boxes.
    </small>
  `;return{id:t,title:s,weight:a,question:n,answer:p,help:[]}}var Xe,X,de,Qe,z,Cr,Ze,et,K,rt=R(()=>{"use strict";Xe=612,X=792,de=14,Qe="text",z=10,Cr={t:278,e:556,x:556};Ze=Or(Qe,de),et=de;K=30});var ut={};M(ut,{default:()=>eo});import{html as Wr}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import{default as ot}from"https://cdn.jsdelivr.net/npm/seedrandom@3/+esm";function Yr(e){return Jr.has(e)}function zr(e,a){return Yr(a)?e*jr:e}function Br(e){let a=[];for(let t=0;t<ue;t++){let s=[];for(let l=0;l<dt;l++){let u=Math.floor(e()*28)+1,i=Math.floor(e()*990)+10,r=st[Math.floor(e()*st.length)],d=Math.floor(e()*at.length),p=`${at[d](u)} ${i} ${r}`;s.push({day:u,amount:i,currency:r,text:p})}a.push(s)}return a}function Vr(e,a){let t={};e.flat().forEach(({day:l})=>{t[l]=(t[l]??0)+1});let s=Object.keys(t).map(Number).filter(l=>t[l]>=15).sort((l,u)=>l-u);return s.length===0?Number(Object.entries(t).sort((l,u)=>u[1]-l[1])[0][0]):s[Math.floor(a()*s.length)]}function Kr(e,a){let t=0;return e.flat().forEach(({day:s,amount:l,currency:u})=>{s===a&&(t+=zr(l,u))}),Math.round(t)}function Xr(e,a){let t=Array.from({length:dt},(s,l)=>l);for(let s=t.length-1;s>0;s--){let l=Math.floor(a()*(s+1));[t[s],t[l]]=[t[l],t[s]]}return e.map((s,l)=>{let u=t[l],i=u%pe,r=Math.floor(u/pe),d=U+i*nt,p=U+r*it,n=4+a()*(nt-80),o=4+a()*(it-14);return{text:s.text,x:d+n,y:Q-(p+o)-ct}})}async function Qr(e,a){let{PDFDocument:t,rgb:s,StandardFonts:l}=await import("https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/+esm"),u=await t.create(),i=await u.embedFont(l.Helvetica),r=s(0,0,0);for(let d=0;d<ue;d++){let p=u.addPage([lt,Q]);p.drawText(`Expense Report \u2013 January 2024   (Page ${d+1} / ${ue})`,{x:U,y:Q-U/2-6,size:7,font:i,color:s(.4,.4,.4)});let n=Xr(e[d],a);for(let{text:o,x:c,y:m}of n)p.drawText(o,{x:c,y:m,size:ct,font:i,color:r})}return u.save()}function Zr(e){let a=["th","st","nd","rd"],t=e%100;return e+(a[(t-20)%10]||a[t]||a[0])}async function eo({user:e,weight:a=1}){let t="q-pdf-expense-tracker",s="AI Expense Tracker \u2013 Gemini Multi-Page PDF Analysis",l=ot(`${e.email}#${t}#data`),u=ot(`${e.email}#${t}#layout`),i=Br(l),r=Vr(i,l),d=Kr(i,r),p=`${Zr(r)} January`,n=`${r}Jan`,o=(async()=>{try{let h=await Qr(i,u),f=new Blob([h],{type:"application/pdf"}),g=URL.createObjectURL(f),y=document.getElementById(`${t}-download`);y&&(y.href=g,y.download=`expenses_${e.email.split("@")[0]}.pdf`,y.textContent="\u2B07 Download your Expense PDF",y.style.display="inline-block",y.style.padding="6px 14px",y.style.background="#1a73e8",y.style.color="#fff",y.style.borderRadius="4px",y.style.textDecoration="none")}catch(h){console.error("PDF generation error:",h);let f=document.getElementById(`${t}-download`);f&&(f.textContent="\u274C PDF generation failed \u2013 please refresh")}})(),c=async h=>{await o;let f=h.trim().replace(/[,\s]+$/,""),g=Number(f);if(!f||Number.isNaN(g)||g<=0)throw new Error(`Please enter a positive numeric value (total Rupees).
Example: 45680`);if(Math.abs(g-d)/d<=.15)return!0;let b=g<d?"too low":"too high";throw new Error(`Your answer of \u20B9${g.toLocaleString()} is ${b}.
Hint: re-check whether you've included ALL pages, converted Dollar amounts at 80 Rs = 1 Dollar, and matched all date format variants for ${p}.
(Accepted range: \xB115% of the correct value)`)},m=Wr`
    <p>
      <strong>Scenario:</strong> You're building an AI-powered expense tracker that
      analyses multi-page PDF receipts. The PDF below was generated uniquely for you
      and contains <strong>10 pages × 50 expense entries</strong> placed at random
      positions across each page.
    </p>

    <p>
      Each entry has a <strong>January date</strong> and an amount in either
      <code>Rs / Rupees</code> or <code>Dollar / Dollars / USD</code>.<br />
      Dates appear in many formats: <em>17Jan, Jan17, January 17, 17JAN, 17January …</em>
    </p>

    <div style="border:1px solid #f59e0b;border-radius:6px;padding:14px;margin:14px 0">
      <strong>🎯 YOUR TARGET DATE (unique to you):</strong>
      <span style="font-size:1.3em;font-weight:bold;margin-left:8px;color:#b45309">
        ${p} &nbsp;(<code>${n}</code>)
      </span>
    </div>

    <p><strong>Task – do all steps using a Python script + Gemini API:</strong></p>
    <ol>
      <li>
        <strong>Download</strong> your personalised PDF and save it locally:<br />
        <a id="${t}-download" style="display:none;" >⏳ Generating PDF…</a>
      </li>
      <li>
        <strong>Upload</strong> the PDF to Gemini via the Files API
        (<code>client.files.upload()</code>).
      </li>
      <li>
        <strong>Prompt</strong> Gemini to extract <em>every</em> expense entry whose
        date is <strong>${p}</strong> from all 10 pages — in any date
        format variant.
      </li>
      <li>
        <strong>Convert</strong> Dollar amounts to Rupees at the fixed rate:<br />
        <code>1 Dollar = 80 Rs</code>
      </li>
      <li>
        <strong>Sum</strong> all Rupee amounts (original + converted) for that date
        and enter the total below.
      </li>
    </ol>

    <p><strong>Key facts:</strong></p>
    <ul>
      <li>500 total entries (10 pages × 50 per page)</li>
      <li>Conversion rate: <strong>1 Dollar&nbsp;=&nbsp;80 Rs</strong>
          (applies to Dollar / Dollars / USD entries)</li>
      <li>Your answer is accepted if it is within <strong>±15%</strong> of the
          correct total</li>
    </ul>

    <p><strong>Recommended implementation skeleton:</strong></p>
    <pre><code>pip install google-genai
export GEMINI_API_KEY=your_key_here
python main.py expenses.pdf "${n}"</code></pre>

    <p><strong>Helpful Resources:</strong></p>
    <ul>
      <li>📖 <a href="https://ai.google.dev/api/files" target="_blank">Gemini Files API</a></li>
      <li>📖 <a href="https://ai.google.dev/gemini-api/docs/structured-output" target="_blank">Gemini Structured Outputs</a></li>
      <li>📖 <a href="https://ai.google.dev/gemini-api/docs/document-processing" target="_blank">Gemini Document Processing</a></li>
    </ul>

    <hr />

    <label for="${t}" class="form-label">
      Enter the total Rupees spent on <strong>${p}</strong>
      (Rs + converted Dollars):
    </label>
    <input
      type="number"
      class="form-control"
      id="${t}"
      name="${t}"
      placeholder="e.g. 45680"
      min="1"
      required
    />
    <small class="form-text text-muted">
      Enter an integer or decimal — accepted within ±15% of the correct value.
    </small>
  `;return{id:t,title:s,weight:a,question:m,answer:c,help:[]}}var lt,Q,U,ct,ue,dt,pe,Ur,jr,nt,it,at,st,Jr,pt=R(()=>{"use strict";lt=612,Q=792,U=30,ct=8.5,ue=10,dt=50,pe=5,Ur=10,jr=80,nt=(lt-2*U)/pe,it=(Q-2*U)/Ur,at=[e=>`${e}Jan`,e=>`${e}JAN`,e=>`${e}January`,e=>`Jan${e}`,e=>`Jan ${e}`,e=>`January ${e}`,e=>`${String(e).padStart(2,"0")}Jan`,e=>`${String(e).padStart(2,"0")}January`],st=["Rs","Rupees","Dollar","Dollars","USD"],Jr=new Set(["Dollar","Dollars","USD"])});var bt={};M(bt,{default:()=>mo});import{html as to}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import{default as ro}from"https://cdn.jsdelivr.net/npm/seedrandom@3/+esm";function no(e){let a=new Set,t=[];for(;t.length<N;){let s=mt[Math.floor(e()*mt.length)],l=ht[Math.floor(e()*ht.length)],u=`${s} ${l}`;if(a.has(u))continue;a.add(u);let i=2024+Math.floor(e()*3),r=1+Math.floor(e()*12),d=1+Math.floor(e()*28),p=[String(d).padStart(2,"0"),String(r).padStart(2,"0"),String(i)].join("/");t.push({name:u,date:p})}return t}function io(e){let a=e.createLinearGradient(0,0,0,O);a.addColorStop(0,"#050d1a"),a.addColorStop(1,"#0a1f3d"),e.fillStyle=a,e.fillRect(0,0,_,O),e.fillStyle="rgba(100,160,255,0.04)";for(let t=20;t<_;t+=40)for(let s=20;s<O;s+=40)e.fillRect(t,s,2,2)}function ao(e){let a=e.createLinearGradient(0,0,_,0);a.addColorStop(0,"#0d2a52"),a.addColorStop(1,"#061530"),e.fillStyle=a,e.fillRect(0,0,_,72),e.font="bold 28px 'Courier New', monospace",e.fillStyle="#4fc3f7",e.textAlign="left",e.textBaseline="middle",e.fillText("\u25C6 NEXUS EVENTS",36,36),e.font="18px 'Courier New', monospace",e.fillStyle="rgba(255,255,255,0.55)",e.textAlign="center",e.fillText("LIVE ATTENDEE CHECK-IN FEED",_/2,36);let t=new Date,s=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0"),u=String(t.getSeconds()).padStart(2,"0");e.font="bold 20px 'Courier New', monospace",e.fillStyle="#4fc3f7",e.textAlign="right",e.fillText(`${s}:${l}:${u}`,_-36,36),e.strokeStyle="rgba(79,195,247,0.3)",e.lineWidth=1,e.beginPath(),e.moveTo(0,72),e.lineTo(_,72),e.stroke()}function so(e,a,t){let s=Math.min(1,t*6);e.globalAlpha=s;let l=_/2-200,u=O/2-20,i=560,r=200;e.shadowColor="rgba(0,120,255,0.35)",e.shadowBlur=40,e.fillStyle="rgba(10,30,70,0.92)",W(e,l,u,i,r,16),e.fill(),e.shadowBlur=0,e.strokeStyle="rgba(79,195,247,0.6)",e.lineWidth=2,W(e,l,u,i,r,16),e.stroke(),e.fillStyle="#00c853",e.beginPath(),e.arc(l+i-28,u+28,20,0,Math.PI*2),e.fill(),e.font="bold 18px sans-serif",e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText("\u2713",l+i-28,u+28),e.font="12px 'Courier New', monospace",e.fillStyle="rgba(79,195,247,0.8)",e.textAlign="left",e.fillText("ATTENDEE NAME",l+28,u+38),e.font="bold 42px 'Georgia', serif",e.fillStyle="#ffffff",e.fillText(a.name,l+28,u+90),e.font="12px 'Courier New', monospace",e.fillStyle="rgba(79,195,247,0.8)",e.fillText("REGISTRATION DATE",l+28,u+126),e.font="bold 30px 'Courier New', monospace",e.fillStyle="#4fc3f7",e.fillText(a.date,l+28,u+168),e.globalAlpha=1,e.shadowBlur=0}function ft(e,a){let t=_-340,s=90,l=310,u=O-140;e.fillStyle="rgba(5, 15, 40, 0.85)",W(e,t,s,l,u,12),e.fill(),e.strokeStyle="rgba(79,195,247,0.2)",e.lineWidth=1,W(e,t,s,l,u,12),e.stroke(),e.font="11px 'Courier New', monospace",e.fillStyle="rgba(79,195,247,0.7)",e.textAlign="left",e.fillText("\u25B8 RECENT CHECK-INS",t+16,s+24),e.strokeStyle="rgba(79,195,247,0.15)",e.beginPath(),e.moveTo(t+8,s+38),e.lineTo(t+l-8,s+38),e.stroke();let i=Math.min(a.length,8);for(let r=0;r<i;r++){let d=a[a.length-1-r],p=s+60+r*70,n=r===0?1:Math.max(.2,1-r*.12);e.globalAlpha=n,e.fillStyle=r===0?"rgba(79,195,247,0.12)":"rgba(255,255,255,0.03)",W(e,t+8,p-14,l-16,58,8),e.fill(),e.fillStyle=r===0?"#00c853":"rgba(79,195,247,0.5)",e.beginPath(),e.arc(t+22,p+12,5,0,Math.PI*2),e.fill(),e.font=`${r===0?"bold ":""}15px 'Georgia', serif`,e.fillStyle=r===0?"#fff":"rgba(255,255,255,0.75)",e.textAlign="left",e.fillText(d.name,t+36,p+16),e.font="12px 'Courier New', monospace",e.fillStyle=r===0?"#4fc3f7":"rgba(79,195,247,0.6)",e.fillText(d.date,t+36,p+36),e.globalAlpha=1}}function lo(e,a,t){let s=O-44,l=20;e.fillStyle="rgba(5,15,40,0.8)",e.fillRect(0,s-8,_,52),e.strokeStyle="rgba(79,195,247,0.2)",e.lineWidth=1,e.beginPath(),e.moveTo(0,s-8),e.lineTo(_,s-8),e.stroke(),e.font="13px 'Courier New', monospace",e.fillStyle="#4fc3f7",e.textAlign="left",e.fillText(`CHECKED IN: ${a} / ${N}`,l,s+18),e.fillStyle="rgba(79,195,247,0.15)",W(e,_/2-200,s+4,400,12,6),e.fill();let i=400*Math.min(1,t/B),r=e.createLinearGradient(_/2-200,0,_/2+200,0);r.addColorStop(0,"#0077ff"),r.addColorStop(1,"#00c8ff"),e.fillStyle=r,i>0&&(W(e,_/2-200,s+4,i,12,6),e.fill());let d=Math.floor(t),p=String(Math.floor(d/60)).padStart(2,"0"),n=String(d%60).padStart(2,"0");e.font="13px 'Courier New', monospace",e.fillStyle="rgba(255,255,255,0.45)",e.textAlign="right",e.fillText(`${p}:${n}`,_-l,s+18)}function co(e,a){let t=Math.min(1,a*3);e.globalAlpha=t,e.font="bold 52px 'Georgia', serif",e.fillStyle="#ffffff",e.textAlign="center",e.textBaseline="middle",e.fillText("NEXUS EVENTS",_/2,O/2-48),e.font="22px 'Courier New', monospace",e.fillStyle="#4fc3f7",e.fillText("ATTENDEE CHECK-IN SYSTEM",_/2,O/2+16),e.font="14px 'Courier New', monospace",e.fillStyle="rgba(255,255,255,0.4)",e.fillText("Recording session in progress\u2026",_/2,O/2+60),e.globalAlpha=1}function uo(e){e.font="bold 40px 'Georgia', serif",e.fillStyle="#00c853",e.textAlign="center",e.textBaseline="middle",e.fillText("\u2713 Check-In Session Complete",_/2,O/2-20),e.font="18px 'Courier New', monospace",e.fillStyle="rgba(79,195,247,0.8)",e.fillText(`${N} attendees registered`,_/2,O/2+30)}function W(e,a,t,s,l,u){e.beginPath(),e.moveTo(a+u,t),e.lineTo(a+s-u,t),e.quadraticCurveTo(a+s,t,a+s,t+u),e.lineTo(a+s,t+l-u),e.quadraticCurveTo(a+s,t+l,a+s-u,t+l),e.lineTo(a+u,t+l),e.quadraticCurveTo(a,t+l,a,t+l-u),e.lineTo(a,t+u),e.quadraticCurveTo(a,t,a+u,t),e.closePath()}async function po(e,a){return new Promise((t,s)=>{let l=document.createElement("canvas");l.width=_,l.height=O;let u=l.getContext("2d"),i=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(c=>MediaRecorder.isTypeSupported(c))||"video/webm",r=l.captureStream(30),d=new MediaRecorder(r,{mimeType:i,videoBitsPerSecond:25e5}),p=[];d.ondataavailable=c=>{c.data.size>0&&p.push(c.data)},d.onstop=()=>{let c=new Blob(p,{type:i});t(c)},d.onerror=s;let n=performance.now();d.start(200);function o(){let c=(performance.now()-n)/1e3;if(io(u),ao(u,c),c<ee)co(u,c/ee);else{let m=c-ee,h=Math.floor(m/Z);if(h>=N)ft(u,e),uo(u);else{let f=m%Z/Z,g=e.slice(0,h+1);so(u,e[h],f),g.length>0&&ft(u,g)}lo(u,Math.min(h+1,N),c)}a(Math.min(1,c/B)),c<B?requestAnimationFrame(o):d.stop()}requestAnimationFrame(o)})}function gt(e){return String(e??"").trim().toLowerCase().replace(/\s+/g," ")}function yt(e){return String(e??"").trim().replace(/\s/g,"")}async function mo({user:e,weight:a=1}){let t="q-video-attendee-extraction",s="AI Video Attendee Extraction \u2013 Gemini Video API",l=ro(`${e.email}#${t}#v2`),u=no(l),i=!1,r=async n=>{if(!n||!n.trim())throw new Error("Please paste your extracted JSON before submitting.");let o;try{o=JSON.parse(n.trim())}catch{throw new Error(`Could not parse your input as JSON.
Expected format: [{"name": "Alice Smith", "date": "15/02/2024"}, ...]`)}if(!Array.isArray(o))throw new Error('Your JSON must be an array of objects: [{"name":\u2026, "date":\u2026}, \u2026]');for(let g=0;g<o.length;g++){let y=o[g];if(typeof y!="object"||y===null||!y.name||!y.date)throw new Error(`Entry ${g+1} is missing 'name' or 'date' fields.
Got: ${JSON.stringify(y)}`)}let c=0,m=[],h=[];for(let g of u)o.find(w=>gt(w.name)===gt(g.name)&&yt(w.date)===yt(g.date))?(c++,m.push(g.name)):h.push(`${g.name} (${g.date})`);let f=Math.ceil(N*.75);if(c>=f)return!0;throw new Error(`Only ${c}/${N} entries matched correctly (need ${f}/20).

Tips:
\u2022 Watch the full video \u2013 entries appear one at a time over ~44 seconds.
\u2022 Make sure dates are in dd/mm/yyyy format.
\u2022 Check the "recent check-ins" panel on the right for entries you may have missed.`)};function d(){if(i)return;i=!0;let n=document.getElementById(`${t}-rec-btn`),o=document.getElementById(`${t}-prog-wrap`),c=document.getElementById(`${t}-prog-bar`),m=document.getElementById(`${t}-prog-label`),h=document.getElementById(`${t}-download`);n&&(n.disabled=!0,n.textContent="\u23FA Recording\u2026",n.style.background="#c62828"),o&&(o.style.display="block"),po(u,f=>{let g=Math.round(f*100);c&&(c.style.width=g+"%"),m&&(m.textContent=`Recording: ${g}% (${Math.round(f*B)}s / ${Math.round(B)}s)`)}).then(f=>{let g=URL.createObjectURL(f);h&&(h.href=g,h.download=`attendee_checkin_${e.email.split("@")[0]}.webm`,h.style.display="inline-block",h.textContent="\u2B07 Download your Attendee Video (.webm)"),n&&(n.textContent="\u2705 Recording Complete",n.style.background="#1b5e20"),m&&(m.textContent="\u2705 Video ready! Click download link above."),i=!1}).catch(f=>{console.error("Video generation error:",f),n&&(n.disabled=!1,n.textContent="\u{1F534} Retry Recording",n.style.background="#e65100"),m&&(m.textContent=`Error: ${f.message}`),i=!1})}setTimeout(()=>{let n=document.getElementById(`${t}-rec-btn`);n&&n.addEventListener("click",d)},100);let p=to`
    <p>
      <strong>Situation:</strong> You're building an AI system for a corporate event company.
      They record attendee check-ins live on screen during events. You need to extract
      names and registration dates from a ~44-second video feed.
    </p>

    <div style="background:linear-gradient(135deg,#0d1f3c,#0a2a50);border:1px solid #1e4a8c;border-radius:10px;padding:18px 24px;margin:16px 0;color:#e8f4ff">
      <div style="font-size:13px;color:#4fc3f7;letter-spacing:2px;margin-bottom:10px">◆ YOUR MISSION</div>
      <ol style="margin:0;padding-left:22px;line-height:2">
        <li>Generate &amp; download your unique <strong>~44-second check-in video</strong> below</li>
        <li>Upload it to <strong>Gemini Files API</strong> (<code>client.files.upload()</code>)</li>
        <li>Use Gemini to extract <strong>all 20</strong> attendee <code>[name, date]</code> pairs from the video</li>
        <li>Return structured JSON: <code>[{"name": "John Doe", "date": "15/02/2026"}, …]</code></li>
        <li>Paste the JSON array into the field below</li>
      </ol>
      <div style="margin-top:12px;padding:10px;background:rgba(79,195,247,0.1);border-radius:6px;font-size:13px">
        📊 Expected: <strong>20 name-date pairs</strong> &nbsp;|&nbsp;
        Date format: <strong>dd/mm/yyyy</strong> &nbsp;|&nbsp;
        Pass if <strong>≥ 15/20 correct</strong>
      </div>
    </div>

    <!-- Step 1: Generate video -->
    <p><strong>Step 1 – Generate your unique video:</strong></p>
    <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:8px">
      <button
        id="${t}-rec-btn"
        style="padding:10px 22px;background:#1565c0;color:#fff;border:none;border-radius:6px;font-size:15px;cursor:pointer;font-weight:bold"
      >
        ⏺ Generate & Record Video
      </button>
      <a
        id="${t}-download"
        style="display:none;padding:10px 20px;background:#1b5e20;color:#fff;border-radius:6px;font-size:14px;font-weight:bold;text-decoration:none"
      >
        ⬇ Download your Attendee Video (.webm)
      </a>
    </div>

    <div id="${t}-prog-wrap" style="display:none;margin-bottom:16px">
      <div style="background:#0d1f3c;border-radius:6px;height:14px;overflow:hidden;margin-bottom:6px">
        <div id="${t}-prog-bar" style="height:100%;width:0%;background:linear-gradient(90deg,#0077ff,#00c8ff);transition:width 0.5s;border-radius:6px"></div>
      </div>
      <small id="${t}-prog-label" style="color:#4fc3f7">Starting…</small>
    </div>

    <div style="background:#1a1a2e;border:1px solid #333;border-radius:6px;padding:12px 16px;margin-bottom:16px;font-size:13px;color:#aaa">
      ⏱ Recording takes ~44 seconds in real time. The browser draws each frame live — please keep this tab active during recording.
    </div>

    <!-- Step 2: Implement solution -->
    <p><strong>Step 2 – Use Gemini to extract attendees:</strong></p>
    <pre style="background:#0d1117;color:#c9d1d9;padding:14px;border-radius:8px;font-size:13px;overflow-x:auto"><code>pip install google-genai
export GEMINI_API_KEY=your_key_here
python main.py attendee_checkin.webm</code></pre>

    <p><strong>Expected JSON output format:</strong></p>
    <pre style="background:#0d1117;color:#c9d1d9;padding:14px;border-radius:8px;font-size:13px;overflow-x:auto"><code>[
  {"name": "Alice Smith",    "date": "03/07/2025"},
  {"name": "Benjamin Patel", "date": "21/11/2024"},
  ...
]</code></pre>

    <p><strong>Helpful Resources:</strong></p>
    <ul>
      <li>📖 <a href="https://ai.google.dev/gemini-api/docs/vision?lang=python#video-file-upload" target="_blank">Gemini – Video file upload &amp; analysis</a></li>
      <li>📖 <a href="https://ai.google.dev/api/files" target="_blank">Gemini Files API reference</a></li>
      <li>📖 <a href="https://ai.google.dev/gemini-api/docs/structured-output" target="_blank">Gemini Structured Outputs (JSON schema)</a></li>
    </ul>

    <hr />

    <label for="${t}" class="form-label">
      Paste your extracted JSON array (20 <code>{name, date}</code> objects):
    </label>
    <textarea
      class="form-control font-monospace"
      id="${t}"
      name="${t}"
      rows="8"
      placeholder='[{"name": "Alice Smith", "date": "03/07/2025"}, {"name": "Benjamin Patel", "date": "21/11/2024"}, ...]'
      required
      style="font-size:13px"
    ></textarea>
    <small class="form-text text-muted">
      Paste the complete JSON array printed by <code>main.py</code>. Accepted if ≥ 15 / 20 entries are correct.
    </small>
  `;return{id:t,title:s,weight:a,question:p,answer:r,help:[]}}var mt,ht,N,Z,ee,oo,B,_,O,wt=R(()=>{"use strict";mt=["Aarav","Aditi","Aisha","Alexander","Amara","Ananya","Benjamin","Charlotte","Chen","David","Elena","Fatima","Gabriel","Haruto","Isabella","James","Kavya","Lena","Liam","Linh","Lucas","Maya","Mohammed","Naledi","Natasha","Noah","Olivia","Priya","Rafael","Rania","Rohan","Samuel","Sara","Siddharth","Sofia","Stefan","Tariq","Tomas","Uma","Valentina","Victor","Wanjiru","Xavier","Yuki","Zara","Arjun","Elif","Ingrid","Javier","Kenji","Laila","Miriam","Nadia","Omar","Petra","Rhea","Santiago","Thabo","Ulrike","Vivek","Wren","Yara","Zoe"],ht=["Acharya","Aldridge","Andersen","Balogun","Barros","Campbell","Chen","Costa","Diallo","Dubois","Erikson","Fernandez","Fischer","Gomez","Gupta","Hansen","Hashimoto","Ibrahim","Jensen","Johansson","Kamau","Khan","Kumar","Laurent","Lee","Lindqvist","Lopez","Mehta","Moreau","Mukherjee","Nakamura","Nkosi","Okafor","Oliveira","Patel","Petrov","Rahman","Reyes","Russo","Schmidt","Sharma","Singh","Solis","Suzuki","Tan","Theron","Torres","Vargas","Weber","Zhang"],N=20,Z=2.2,ee=2,oo=1.8,B=ee+N*Z+oo,_=1280,O=720});var xt={};M(xt,{default:()=>fo});import{html as ho}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function fo({weight:e=1}){let a="q-function-calling",t="Function Calling",s={"Ticket $ID status?":"get_ticket_status(ticket_id=$ID)","Status update for ticket $ID":"get_ticket_status(ticket_id=$ID)","Update on ticket $ID, please.":"get_ticket_status(ticket_id=$ID)","Check ticket $ID status now.":"get_ticket_status(ticket_id=$ID)","Ticket $ID: current status.":"get_ticket_status(ticket_id=$ID)","What's the status of ticket $ID?":"get_ticket_status(ticket_id=$ID)","Book meeting on $DATE at $TIME in $ROOM":'schedule_meeting(date="$DATE", time="$TIME", meeting_room="$ROOM")',"Arrange meeting $DATE, $TIME, room: $ROOM":'schedule_meeting(date="$DATE", time="$TIME", meeting_room="$ROOM")',"Set meeting for $DATE, $TIME at $ROOM":'schedule_meeting(date="$DATE", time="$TIME", meeting_room="$ROOM")',"$DATE meeting at $TIME in $ROOM":'schedule_meeting(date="$DATE", time="$TIME", meeting_room="$ROOM")',"Schedule meeting on $DATE in $ROOM at $TIME":'schedule_meeting(date="$DATE", time="$TIME", meeting_room="$ROOM")',"Organize meeting $DATE $TIME $ROOM":'schedule_meeting(date="$DATE", time="$TIME", meeting_room="$ROOM")',"Expense balance for emp $EMPID":"get_expense_balance(employee_id=$EMPID)","What is emp $EMPID's expense balance?":"get_expense_balance(employee_id=$EMPID)","Check expenses for employee $EMPID":"get_expense_balance(employee_id=$EMPID)","Show expense status for emp $EMPID":"get_expense_balance(employee_id=$EMPID)","Employee $EMPID, expense balance?":"get_expense_balance(employee_id=$EMPID)","$EMPID expense balance":"get_expense_balance(employee_id=$EMPID)","Calculate bonus for emp $EMPID in $YEAR":"calculate_performance_bonus(employee_id=$EMPID, current_year=$YEAR)","Bonus details for employee $EMPID for $YEAR":"calculate_performance_bonus(employee_id=$EMPID, current_year=$YEAR)","What bonus for emp $EMPID in $YEAR?":"calculate_performance_bonus(employee_id=$EMPID, current_year=$YEAR)","Emp $EMPID bonus $YEAR":"calculate_performance_bonus(employee_id=$EMPID, current_year=$YEAR)","Fetch bonus for emp $EMPID for $YEAR":"calculate_performance_bonus(employee_id=$EMPID, current_year=$YEAR)","Employee $EMPID performance bonus $YEAR":"calculate_performance_bonus(employee_id=$EMPID, current_year=$YEAR)","Report office issue $ISSUE for $DEPT":'report_office_issue(issue_code=$ISSUE, department="$DEPT")',"Office issue $ISSUE in $DEPT":'report_office_issue(issue_code=$ISSUE, department="$DEPT")',"$ISSUE reported in $DEPT department":'report_office_issue(issue_code=$ISSUE, department="$DEPT")',"Log issue $ISSUE for $DEPT dept":'report_office_issue(issue_code=$ISSUE, department="$DEPT")',"File issue $ISSUE in $DEPT":'report_office_issue(issue_code=$ISSUE, department="$DEPT")',"Report: issue $ISSUE, department $DEPT":'report_office_issue(issue_code=$ISSUE, department="$DEPT")'},l={$ID:()=>Math.floor(Math.random()*9e4)+1e4,$DATE:()=>{let c=String(Math.floor(Math.random()*12)+1).padStart(2,"0"),m=String(Math.floor(Math.random()*28)+1).padStart(2,"0");return`2025-${c}-${m}`},$TIME:()=>{let o=String(Math.floor(Math.random()*24)).padStart(2,"0"),c=String(Math.floor(Math.random()*60)).padStart(2,"0");return`${o}:${c}`},$ROOM:()=>["Room A","Room B","Conf1","Meeting Room"][Math.floor(Math.random()*4)],$EMPID:()=>Math.floor(Math.random()*9e4)+1e4,$YEAR:()=>2025,$ISSUE:()=>Math.floor(Math.random()*9e4)+1e4,$DEPT:()=>["Facilities","HR","IT","Operations"][Math.floor(Math.random()*4)]},u=Object.keys(s),i=u[Math.floor(Math.random()*u.length)],r=i,d=s[i];for(let o in l)if(r.includes(o)){let c=l[o](),m=new RegExp(o.replace("$","\\$"),"g");r=r.replace(m,c),d=d.replace(m,c)}let p=async o=>{if(!o.startsWith("http"))throw new Error("Expected a URL");let c=await fetch(o+"?"+new URLSearchParams({q:r}));if(!c.ok)throw new Error(`Failed to fetch: ${c.statusText}`);let m;try{m=await c.json()}catch(g){throw new Error(`Failed to parse JSON: ${g}`)}let h=JSON.parse(m.arguments),f=`${m.name}(${Object.entries(h).map(([g,y])=>`${g}=${JSON.stringify(y)}`).join(", ")})`;if(f!==d)throw new Error(`Got incorrect function call: ${f}`);return!0},n=ho`
    <div class="mb-3">
      <p>
        <strong>TechNova Corp.</strong> is a multinational corporation that has implemented a digital assistant to
        support employees with various internal tasks. The assistant can answer queries related to human resources, IT
        support, and administrative services. Employees use a simple web interface to enter their requests, which may
        include:
      </p>
      <ul>
        <li>Checking the status of an IT support ticket.</li>
        <li>Scheduling a meeting.</li>
        <li>Retrieving their current expense reimbursement balance.</li>
        <li>Requesting details about their performance bonus.</li>
        <li>Reporting an office issue by specifying a department or issue number.</li>
      </ul>
      <p>
        Each question is direct and templatized, containing one or more parameters such as an employee or ticket number
        (which might be randomized). In the backend, a FastAPI app routes each request by matching the query to one of a
        set of pre-defined functions. The response that the API returns is used by OpenAI to call the right function
        with the necessary arguments.
      </p>
      <p><strong>Pre-Defined Functions:</strong></p>
      <p>For this exercise, assume the following functions have been defined:</p>
      <ul>
        <li><code>get_ticket_status(ticket_id: int)</code></li>
        <li><code>schedule_meeting(date: str, time: str, meeting_room: str)</code></li>
        <li><code>get_expense_balance(employee_id: int)</code></li>
        <li><code>calculate_performance_bonus(employee_id: int, current_year: int)</code></li>
        <li><code>report_office_issue(issue_code: int, department: str)</code></li>
      </ul>
      <p>
        Each function has a specific signature, and the student’s FastAPI app should map specific queries to these
        functions.
      </p>
      <p><strong>Example Questions (Templatized with a Random Number):</strong></p>
      <ol>
        <li>
          <strong>Ticket Status:</strong><br />Query: <code>"What is the status of ticket 83742?"</code><br />→ Should
          map to <code>get_ticket_status(ticket_id=83742)</code>
        </li>
        <li>
          <strong>Meeting Scheduling:</strong><br />Query:
          <code>"Schedule a meeting on 2025-02-15 at 14:00 in Room A."</code><br />→ Should map to
          <code>schedule_meeting(date="2025-02-15", time="14:00", meeting_room="Room A")</code>
        </li>
        <li>
          <strong>Expense Reimbursement:</strong><br />Query: <code>"Show my expense balance for employee 10056."</code
          ><br />→ Should map to
          <code>get_expense_balance(employee_id=10056)</code>
        </li>
        <li>
          <strong>Performance Bonus Calculation:</strong><br />Query:
          <code>"Calculate performance bonus for employee 10056 for 2025."</code><br />→ Should map to
          <code>calculate_performance_bonus(employee_id=10056, current_year=2025)</code>
        </li>
        <li>
          <strong>Office Issue Reporting:</strong><br />Query:
          <code>"Report office issue 45321 for the Facilities department."</code><br />→ Should map to
          <code>report_office_issue(issue_code=45321, department="Facilities")</code>
        </li>
      </ol>
      <p><strong>Task Overview:</strong></p>
      <p>Develop a FastAPI application that:</p>
      <ol>
        <li>
          Exposes a GET endpoint <code>/execute?q=...</code> where the query parameter <code>q</code> contains one of
          the pre-templatized questions.
        </li>
        <li>Analyzes the <code>q</code> parameter to identify which function should be called.</li>
        <li>Extracts the parameters from the question text.</li>
        <li>
          <p>Returns a response in the following JSON format:</p>
          <pre><code class="language-json">{ "name": "function_name", "arguments": "{ ...JSON encoded parameters... }" }</code></pre>
        </li>
      </ol>
      <p>For example, the query <code>"What is the status of ticket 83742?"</code> should return:</p>
      <pre><code class="language-json">{
  "name": "get_ticket_status",
  "arguments": "{\\"ticket_id\\": 83742}"
}</code></pre>
      <p>Make sure you enable <strong>CORS</strong> to allow GET requests from any origin.</p>

      <div class="mb-3">
        <label for="${a}" class="form-label">
          What is the API URL endpoint for your implementation? It might look like:
          <code>http://127.0.0.1:8000/execute</code>
        </label>
        <input class="form-control" id="${a}" name="${a}" type="url" required />
        <p class="text-muted">
          We'll check by sending a GET request to this URL with <code>?q=...</code> containing a task. We'll verify that
          it matches the expected response. Arguments must be in the same order as the function definition.
        </p>
      </div>
    </div>
  `;return{id:a,title:t,weight:e,question:n,answer:p}}var vt=R(()=>{"use strict"});var $t={};M($t,{default:()=>xo});import go from"https://cdn.jsdelivr.net/npm/jszip@3/+esm";import{unsafeHTML as yo}from"https://cdn.jsdelivr.net/npm/lit-html@3/directives/unsafe-html.js";import{html as bo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import{generate as wo}from"https://sanand0.github.io/tdsdata/js_table/table.js";async function xo({user:e,weight:a=1}){let t="q-github-action-playwright",s="GitHub Action: Scrape Table Sums with Playwright",l=(0,Et.default)(`${e.email}#${t}`),u=Math.floor(l()*90),i=Array.from({length:10},(o,c)=>u+c).map(o=>o.toString()),r=i.reduce((o,c)=>o+wo(c,50,10).reduce((m,h)=>m+h.reduce((f,g)=>f+g,0),0),0),d=i.map(o=>`<li><a href="https://sanand0.github.io/tdsdata/js_table/?seed=${o}" target="_blank">Seed ${o}</a></li>`).join(""),p=bo`
    <div class="mb-3">
      <h4>Case Study: Automated QA with Playwright and GitHub Actions</h4>
      <p>
        <strong>DataDash</strong> is a data engineering firm that automates QA for web-based reports. They want to
        ensure that all numbers in dynamically generated tables are correct by scraping and summing them using
        Playwright, running as a GitHub Action.
      </p>
      <p>
        Visit each link below, compute the sum of all numbers in all tables, and print the total in your GitHub Action
        logs:
      </p>
      <ul class="small">
        ${yo(d)}
      </ul>
      <p>
        <strong>Your Task:</strong> Create a GitHub Action in any of your repositories that runs a Playwright script to
        scrape all the above pages, sum all numbers, and print the total in the logs. One of the steps in your workflow
        must have your email address <code>${e.email}</code> in the name.
      </p>
      <label for="${t}" class="form-label"
        >What is your repository URL and
        <a
          href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens"
          target="_blank"
          >GitHub Personal Access Token</a
        >? Separate them with a space</label
      >
      <input class="form-control" id="${t}" name="${t}" />
      <p class="text-muted">
        Example: <code>https://github.com/&lt;user&gt;/&lt;repo&gt; &lt;token&gt;</code>. We'll fetch the latest GitHub
        Action run log, search for the answer, and check for your email in the step name.
      </p>
    </div>
  `;return{id:t,title:s,weight:a,question:p,answer:async o=>{let c=o.match(/https:\/\/github\.com\/([^/]+)\/([^/\s]+)\s+(\w+)/);if(!c)throw new Error("URL does not match https://github.com/<user>/<repo> <token>");let[,m,h,f]=c,g={Authorization:`Bearer ${f}`},y=`https://api.github.com/repos/${m}/${h}/actions/runs`,{workflow_runs:w}=await fetch(y,{headers:g}).then(v=>v.json());if(!w?.length)throw new Error("No runs found");let{jobs_url:b,logs_url:E}=w[0],k=await fetch(`/proxy/${E}`,{headers:g});if(!k.ok)throw new Error("Could not fetch logs");let S=await k.arrayBuffer(),$=await go.loadAsync(S);if(!(await Promise.all(Object.values($.files).filter(v=>!v.dir&&v.name.endsWith(".txt")).map(v=>v.async("text"))).then(v=>v.join(`
`))).match(new RegExp(String(r))))throw new Error("Sum not found in logs");let{jobs:D}=await fetch(b,{headers:g}).then(v=>v.json()),x=!1;for(let{steps:v}of D)for(let{name:A}of v)A.includes(e.email)&&(x=!0);if(!x)throw new Error("No step with your email in the name");return!0}}}var Et,kt=R(()=>{"use strict";Et=G(F(),1)});function vo(e,a,t){let s=(0,me.default)(e);return Array.from({length:a},()=>Array.from({length:t},()=>Math.round(s()*1e3)))}function he(e){let a="q-playwright-table-server",t=e?.email??e??"",s=(0,me.default)(`${t}#${a}`),l=Math.floor(s()*90),u=Array.from({length:10},(r,d)=>(l+d).toString()),i=u.reduce((r,d)=>r+vo(d,50,10).reduce((p,n)=>p+n.reduce((o,c)=>o+c,0),0),0);return{n:l,seeds:u,expected:i}}async function St({email:e}){return async a=>{let{expected:t}=he({email:e}),s=parseInt(String(a??"").trim(),10);if(!Number.isFinite(s))throw new Error("Please provide a valid integer for the total sum.");if(s!==t)throw new Error("Incorrect total. Make sure you're summing all numbers across all 10 table pages for your assigned seeds.");return!0}}var me,Tt=R(()=>{"use strict";me=G(F(),1)});var At={};M(At,{default:()=>ko});import{unsafeHTML as Eo}from"https://cdn.jsdelivr.net/npm/lit-html@3/directives/unsafe-html.js";import{html as $o}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function ko({user:e,weight:a=1}){let t="q-playwright-table-server",s="Sum table values with Playwright",{seeds:l}=he(e),u=l.map(r=>`<li><a href="https://sanand0.github.io/tdsdata/js_table/?seed=${r}" target="_blank">Seed ${r}</a></li>`).join(""),i=$o`
    <div class="mb-3">
      <p>
        <strong>DataDash</strong> validates generated reports by sampling numeric tables. QA engineers scrape several
        tables and verify aggregated metrics.
      </p>
      <p>Visit each link below, compute the sum of all numbers in all tables, and enter the total:</p>
      <ul class="small">
        ${Eo(u)}
      </ul>
      <label for="${t}" class="form-label">Total sum</label>
      <input class="form-control" id="${t}" name="${t}" />
    </div>
  `;return{id:t,title:s,weight:a,question:i,answer:await St(e)}}var It=R(()=>{"use strict";Tt()});var _t={};M(_t,{default:()=>Ao});import{html as So}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Ao({user:e,weight:a=1}){let t="q-crawl-html",s="Count crawled HTML files",l=(0,Rt.default)(`${e.email}#${t}`),u=Math.floor(l()*16),i=u+10+Math.floor(l()*(26-u-10)),r=String.fromCharCode(65+u),d=String.fromCharCode(65+i),p,n=async c=>/^-?\d+$/.test(c)?(p||(p=Object.entries(To).reduce((m,[h,f])=>{let g=h.toUpperCase();return g>=r&&g<=d?m+f:m},0)),parseInt(c,10)===p):!1,o=So`
    <div class="mb-3">
      <p>
        <strong>SiteScout</strong> collects competitor pages for market research. Its crawler stores HTML files in
        alphabetized folders. Estimate workload by counting how many files fall between letters
        <code>${r}</code> and <code>${d}</code>.
      </p>
      <p>
        Crawl <code>https://sanand0.github.io/tdsdata/crawl_html/</code>. How many HTML files begin with letters from
        <code>${r}</code> to <code>${d}</code>?
      </p>
      <label for="${t}" class="form-label">Number of files</label>
      <input class="form-control" id="${t}" name="${t}" />
    </div>
  `;return{id:t,title:s,weight:a,question:o,answer:n}}var Rt,To,Dt=R(()=>{"use strict";Rt=G(F(),1),To={t:9,n:4,s:12,i:3,w:8,e:7,a:6,p:10,f:8,m:7,h:5,c:3,y:1,o:7,v:3,r:3,d:4,l:2,b:2,q:1,u:1}});function te(e,a,t={verbose:!1},s=""){if(!(e===null&&a===null)){if(e===null||a===null)throw new Error(`At ${s||"root"}: Expected ${e}, but got ${a}`);if(typeof e!="object"&&typeof a!="object"){if(e!==a)throw new Error(`At ${s||"root"}: Values don't match`+(t.verbose?`. Expected: ${JSON.stringify(e)}. Actual: ${JSON.stringify(a)}`:""));return}if(Array.isArray(e)!==Array.isArray(a))throw new Error(`At ${s||"root"}: Type mismatch - one is array, other is object`);if(Array.isArray(e)){if(e.length!==a.length)throw new Error(`At ${s||"root"}: Array length mismatch`+(t.verbose?`. Expected: ${e.length}. Actual: ${a.length}`:""));e.forEach((l,u)=>{te(l,a[u],t,`${s}[${u}]`)})}else{let l=Object.keys(e).sort(),u=Object.keys(a).sort();if(l.length!==u.length)throw new Error(`At ${s||"root"}: Different number of properties`+(t.verbose?`. Expected: ${l.length}. Actual: ${u.length}`:""));for(let i=0;i<l.length;i++)if(l[i]!==u[i])throw new Error(`At ${s||"root"}: Property name mismatch`+(t.verbose?`. Expected: ${JSON.stringify(l[i])}. Actual: ${JSON.stringify(u[i])}`:""));l.forEach(i=>{te(e[i],a[i],t,s?`${s}.${i}`:i)})}}}var Pt=R(()=>{"use strict"});var qt={};M(qt,{default:()=>Ro});import{html as Io}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Ro({user:e,weight:a=1}){let t="q-scrape-imdb-movies",s="Scrape IMDb movies",l=(0,Mt.default)(`${e.email}#${t}`),u=0,i=0;for(;i-u<1;)u=Math.floor(l()*7)+2,i=Math.floor(l()*7)+2,u>i&&([i,u]=[u,i]);let r,d=async n=>{if(!r){let f=await fetch(`/proxy/https://www.imdb.com/search/title/?user_rating=${u},${i}`);if(f.ok)r=await f.text();else throw new Error(`I wasn't able to get the IMDb data to verify. Please try again. Response: ${f.status} ${f.statusText}`)}let h=[...new DOMParser().parseFromString(r,"text/html").querySelectorAll(".ipc-metadata-list-summary-item")].map(f=>{let g=f.querySelector(".ipc-title-link-wrapper").getAttribute("href").match(/(tt\d+)/)[1],y=f.querySelector(".ipc-title__text").textContent,w=f.querySelector(".dli-title-metadata-item").textContent,b=f.querySelector(".ipc-rating-star--rating").textContent;return{id:g,title:y,year:w,rating:b}});return te(h,JSON.parse(n),{verbose:!0}),!0},p=Io`
    <div class="mb-3">
      <h2 id="-case-study-enhancing-content-curation-for-streamflix-streaming-service-">
        <strong>Content Curation for StreamFlix Streaming</strong>
      </h2>
      <p>
        <strong>StreamFlix</strong> is a rapidly growing streaming service aiming to provide a diverse and high-quality
        library of movies, TV shows, etc. to its subscribers. To maintain a competitive edge and ensure customer
        satisfaction, StreamFlix invests heavily in data-driven content curation. By analyzing movie ratings and other
        key metrics, the company seeks to identify films that align with subscriber preferences and emerging viewing
        trends.
      </p>
      <p>
        With millions of titles available on platforms like IMDb, manually sifting through titles to select suitable
        additions to StreamFlix&#39;s catalog is both time-consuming and inefficient. To streamline this process,
        StreamFlix&#39;s data analytics team requires an automated solution to extract and analyze movie data based on
        specific rating criteria.
      </p>
      <p>
        Develop a Python program that interacts with IMDb&#39;s dataset to extract detailed information about titles
        within a specified rating range. The extracted data should include the movie&#39;s unique ID, title, release
        year, and rating. This information will be used to inform content acquisition decisions, ensuring that
        StreamFlix consistently offers high-quality and well-received films to its audience.
      </p>
      <p>
        Imagine you are a data analyst at StreamFlix, responsible for expanding the platform&#39;s movie library. Your
        task is to identify titles that have received favorable ratings on IMDb, ensuring that the selected titles meet
        the company&#39;s quality standards and resonate with subscribers.
      </p>
      <p>To achieve this, you need to:</p>
      <ol>
        <li>
          <strong>Extract Data:</strong> Retrieve movie information from IMDb for all films that have a rating between
          <code>${u}</code> and <code>${i}</code>.
        </li>
        <li>
          <strong>Format Data:</strong> Structure the extracted information into a JSON format containing the following
          fields:
          <ul>
            <li><code>id</code>: The unique identifier for the movie on IMDb.</li>
            <li><code>title</code>: The official title of the movie.</li>
            <li><code>year</code>: The year the movie was released.</li>
            <li><code>rating</code>: The IMDb user rating for the movie.</li>
          </ul>
        </li>
      </ol>
      <h2>Your Task</h2>
      <ol>
        <li>
          <strong>Source:</strong> Utilize IMDb&#39;s advanced web search at
          <a href="https://www.imdb.com/search/title/">https://www.imdb.com/search/title/</a> to access movie data.
        </li>
        <li><strong>Filter:</strong> Filter all titles with a rating between ${u} and ${i}.</li>
        <li>
          <p>
            <strong>Format:</strong> For up to the first 25 titles, extract the necessary details: ID, title, year, and
            rating. The ID of the movie is the part of the URL after <code>tt</code> in the <code>href</code> attribute.
            For example, <a href="https://www.imdb.com/title/tt10078772/"><code>tt10078772</code></a
            >. Organize the data into a JSON structure as follows:
          </p>
          <pre><code class="json">[
  { "id": "tt1234567", "title": "Movie 1", "year": "2021", "rating": "5.8" },
  { "id": "tt7654321", "title": "Movie 2", "year": "2019", "rating": "6.2" },
  // ... more titles
]</code></pre>
        </li>
        <li><strong>Submit:</strong> Submit the JSON data in the text box below.</li>
      </ol>
      <h2>Impact</h2>
      <p>
        By completing this assignment, you&#39;ll simulate a key component of a streaming service&#39;s content
        acquisition strategy. Your work will enable StreamFlix to make informed decisions about which titles to license,
        ensuring that their catalog remains both diverse and aligned with subscriber preferences. This, in turn,
        contributes to improved customer satisfaction and retention, driving the company&#39;s growth and success in a
        competitive market.
      </p>
      <label for="${t}" class="form-label"> What is the JSON data? </label>
      <textarea class="form-control" id="${t}" name="${t}" rows="5" required></textarea>
      <p class="text-muted">
        IMDb search results may differ by region. You may need to manually translate titles. Results may also change
        periodically. You may need to re-run your scraper code.
      </p>
    </div>
  `;return{id:t,title:s,weight:a,question:p,answer:d}}var Mt,Ct=R(()=>{"use strict";Mt=G(F(),1);Pt()});var Ft={};M(Ft,{default:()=>_o});import{html as Ot}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function _o({user:e,weight:a=1}){let t="q-llm-structured-extraction",s="Extract Structured Data with Schema Validation",l=(0,Lt.default)(`${e.email}#${t}`),u=[()=>{let n=[{type:"invoice",fields:["invoiceNumber","date","vendor","total","items"],sample:"Invoice #INV-2024-001 dated 2024-03-15 from Acme Corp. Items: Widget A $50, Widget B $30. Total: $80"},{type:"receipt",fields:["storeName","date","items","subtotal","tax","total"],sample:"Store: Best Buy, Date: 03/20/2024, Items: Laptop $999, Mouse $25, Subtotal: $1024, Tax: $92.16, Total: $1116.16"},{type:"job posting",fields:["title","company","location","salary","requirements"],sample:"Senior Software Engineer at Google in Mountain View, CA. Salary: $150k-$200k. Requirements: 5+ years Python, distributed systems"},{type:"meeting notes",fields:["date","attendees","topics","decisions","actionItems"],sample:"Meeting on 2024-03-15 with John, Sarah, Mike. Discussed Q2 roadmap. Decided to launch feature X in April. Action: Sarah to prepare launch plan"}],o=n[Math.floor(l()*n.length)],c=Math.floor(l()*2)+3;return{type:o.type,fields:o.fields.slice(0,c),optionalFields:o.fields.slice(c),sample:o.sample,description:`Extract ${o.type} data`,validationRules:[`Required fields: ${o.fields.slice(0,c).join(", ")}`,`Optional fields: ${o.fields.slice(c).join(", ")}`,"All required fields must be present and non-empty"]}},()=>{let n=[{type:"research paper",fields:["title","authors","abstract","year","keywords","methodology"],sample:"Title: Deep Learning for NLP. Authors: Smith et al. Year: 2024. Abstract: We propose a novel architecture... Keywords: NLP, transformers. Methodology: We trained on 1B tokens"},{type:"clinical trial",fields:["trialId","phase","participants","intervention","outcomes","status"],sample:"Trial NCT12345, Phase 3, 500 participants. Intervention: Drug A 100mg daily. Primary outcome: disease progression. Status: Recruiting"},{type:"product specs",fields:["name","model","dimensions","weight","features","price"],sample:'Product: UltraPhone Pro. Model: UP-2024. Dimensions: 6.1" display. Weight: 180g. Features: 5G, 108MP camera. Price: $899'}],o=n[Math.floor(l()*n.length)],c=Math.floor(l()*2)+3;return{type:o.type,fields:o.fields.slice(0,c),optionalFields:o.fields.slice(c),sample:o.sample,description:`Extract ${o.type} data`,validationRules:[`Required fields: ${o.fields.slice(0,c).join(", ")}`,"Use appropriate data types (strings, numbers, arrays)","Handle missing or ambiguous data gracefully"]}},()=>{let n=[{type:"customer review",fields:["rating","product","pros","cons","recommendation"],sample:"Rating: 4/5. Product: Laptop X. Pros: Fast, lightweight. Cons: Battery life. Recommendation: Yes, great for travel"},{type:"support ticket",fields:["ticketId","priority","category","issue","customerInfo"],sample:"Ticket #T-5678, Priority: High, Category: Login issues. Customer john@example.com reports unable to access account since yesterday"},{type:"survey response",fields:["respondentId","age","satisfaction","feedback","likelyToRecommend"],sample:"Respondent R-123, Age: 35, Satisfaction: 8/10, Feedback: Great service but slow shipping. Likely to recommend: 9/10"}],o=n[Math.floor(l()*n.length)],c=Math.floor(l()*2)+3;return{type:o.type,fields:o.fields.slice(0,c),optionalFields:o.fields.slice(c),sample:o.sample,description:`Extract ${o.type} data`,validationRules:[`Required fields: ${o.fields.slice(0,c).join(", ")}`,"Numeric fields must be actual numbers, not strings","Arrays must be arrays, not comma-separated strings"]}}],i=u[Math.floor(l()*u.length)](),r=Math.floor(l()*2)+2,d=async n=>{try{let o=JSON.parse(n);if(!o.schema||typeof o.schema!="object")throw new Error("Response must include 'schema' object defining the expected structure");if(!o.extracted||typeof o.extracted!="object")throw new Error("Response must include 'extracted' object with the parsed data");if(!o.validated||typeof o.validated!="boolean")throw new Error("Response must include 'validated' boolean indicating if extraction passed validation");let c=o.schema;if(!c.type||c.type!=="object")throw new Error("Schema must be an object type definition");if(!c.properties||typeof c.properties!="object")throw new Error("Schema must define properties for each field");if(!c.required||!Array.isArray(c.required))throw new Error("Schema must define required fields array");for(let h of i.fields){if(!c.properties[h])throw new Error(`Schema missing definition for required field: ${h}`);if(!c.required.includes(h))throw new Error(`Required field '${h}' not listed in schema.required array`)}let m=o.extracted;for(let h of i.fields){if(!m.hasOwnProperty(h))throw new Error(`Extracted data missing required field: ${h}`);let f=m[h];if(f==null||f==="")throw new Error(`Required field '${h}' is empty or null. Value: ${JSON.stringify(f)}`);let g=c.properties[h];if(g.type==="number"&&typeof f!="number")throw new Error(`Field '${h}' should be number but got ${typeof f}: ${JSON.stringify(f)}`);if(g.type==="array"&&!Array.isArray(f))throw new Error(`Field '${h}' should be array but got ${typeof f}: ${JSON.stringify(f)}`);if(g.type==="string"&&typeof f!="string")throw new Error(`Field '${h}' should be string but got ${typeof f}: ${JSON.stringify(f)}`)}if(!o.confidence||typeof o.confidence!="number"||o.confidence<0||o.confidence>1)throw new Error(`Response must include 'confidence' score between 0 and 1, got: ${o.confidence}`);if(o.errors&&!Array.isArray(o.errors))throw new Error("If provided, 'errors' must be an array of validation error messages");if(!o.validated){if(!o.retryCount||typeof o.retryCount!="number")throw new Error("Failed validations must include 'retryCount' indicating retry attempts");if(o.retryCount>r)throw new Error(`Too many retries: ${o.retryCount} (max: ${r}). Should have fallback strategy.`);if(!o.errors||o.errors.length===0)throw new Error("Failed validation must include 'errors' array explaining what went wrong")}return!o.promptUsed&&!o.model&&console.warn("Warning: Should include 'promptUsed' or 'model' to show LLM was used for extraction"),!0}catch(o){throw o instanceof SyntaxError?new Error(`Invalid JSON response: ${o.message}`):o}},p=Ot`
    <div class="mb-3">
      <h4>Structured Data Extraction with Schema Validation</h4>
      <p>
        <strong>DataExtract Inc.</strong> builds document processing systems that extract structured data from
        unstructured text. Their clients need reliable extraction with schema validation to ensure data quality before
        inserting into databases. Your task is to extract data according to a schema, validate it, and handle failures
        gracefully.
      </p>

      <p><strong>Your Task:</strong> ${i.description}</p>

      <p><strong>Sample Text:</strong></p>
      <pre><code>${i.sample}</code></pre>

      <p><strong>Requirements:</strong></p>
      <ol>
        <li>
          <strong>Schema Definition:</strong>
          <ul>
            <li>Define JSON schema with required fields: ${i.fields.join(", ")}</li>
            <li>Optional fields: ${i.optionalFields.join(", ")||"none"}</li>
            <li>Specify types for each field (string, number, array, etc.)</li>
            <li>Use JSON Schema format or similar</li>
          </ul>
        </li>
        <li>
          <strong>LLM Extraction:</strong>
          <ul>
            <li>Use LLM to extract structured data from text</li>
            <li>Use function calling / structured output mode when available</li>
            <li>OpenAI: <code>response_format={"type": "json_object"}</code></li>
            <li>Or use clear prompt: "Return JSON with these fields..."</li>
          </ul>
        </li>
        <li>
          <strong>Validation:</strong>
          <ul>
            <li>Validate against schema (check required fields, types)</li>
            <li>Check data quality (non-empty values, valid formats)</li>
            <li>Use validation libraries (ajv, pydantic, etc.)</li>
            <li>Return validation status and errors</li>
          </ul>
        </li>
        <li>
          <strong>Error Handling:</strong>
          <ul>
            <li>If validation fails, retry with improved prompt (max ${r} retries)</li>
            <li>Log validation errors for debugging</li>
            <li>Include confidence score for extraction quality</li>
            <li>Handle edge cases (missing data, ambiguous values)</li>
          </ul>
        </li>
      </ol>

      <p><strong>Validation Rules:</strong></p>
      <ul>
        ${i.validationRules.map(n=>Ot`<li>${n}</li>`)}
      </ul>

      <p><strong>Use your <a href="https://aipipe.org/">AI Pipe</a> token when prompted.</strong></p>

      <p><strong>Response Format:</strong></p>
      <pre><code class="language-json">{
  "schema": {
    "type": "object",
    "properties": {
      "${i.fields[0]}": {"type": "string"},
      ...
    },
    "required": ${JSON.stringify(i.fields)}
  },
  "extracted": {
    "${i.fields[0]}": "extracted value",
    ...
  },
  "validated": true,
  "confidence": 0.95,
  "errors": [],
  "retryCount": 0,
  "model": "gpt-4"
}</code></pre>

      <p><strong>Example Extraction Prompt:</strong></p>
      <pre><code>Extract the following information from the text and return as JSON:

Required fields:
${i.fields.map(n=>`- ${n}: description of field`).join(`
`)}

Text: "${i.sample}"

Return only valid JSON matching this structure.</code></pre>

      <p><strong>Testing:</strong></p>
      <p>Your extraction will be tested with:</p>
      <ul>
        <li>Sample text: "${i.sample.slice(0,80)}..."</li>
        <li>Schema validation for required fields</li>
        <li>Type checking (strings, numbers, arrays)</li>
        <li>Confidence scoring</li>
      </ul>

      <label for="${t}" class="form-label">Paste your structured extraction result as JSON:</label>
      <textarea class="form-control" id="${t}" name="${t}" rows="15" placeholder='{"schema": {...}, "extracted": {...}, ...}'></textarea>
    </div>
  `;return{id:t,title:s,weight:a,question:p,answer:d}}var Lt,Nt=R(()=>{"use strict";Lt=G(F(),1)});function Gt(e,a){let t=URL.createObjectURL(e),s=document.createElement("a");s.href=t,s.download=a,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(t)}var Ht=R(()=>{"use strict"});var Ut={};M(Ut,{default:()=>Po});import{html as Do}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import*as j from"https://cdn.jsdelivr.net/npm/xlsx/+esm";async function Po({user:e,weight:a=1}){let t="q-clean-up-excel-sales-data",s="Clean up Excel sales data",l=(0,Wt.default)(`${e.email}#${t}`),u=["John Doe","Jane Smith","Alice Johnson","Bob Brown","Charlie Davis","Eve Wilson","Frank Thomas"],i={US:["USA","U.S.A","United States"],AE:["UAE","U.A.E","United Arab Emirates"],UK:["U.K","United Kingdom"],IN:["Ind","IND","India"],BR:["BRA","Bra","Brazil"],FR:["Fra","FRA","France"]},r=Object.keys(i),d=["Alpha","Beta","Gamma","Delta","Epsilon","Zeta","Eta","Theta","Iota","Kappa"],p=[],n=[["TransactionID","Customer Name","Country","Date","Product/Code","Sales","Cost"]];function o(x,v){return new Date(x.getTime()+l()*(v.getTime()-x.getTime()))}function c(x){if(l()<.5){let v=String(x.getMonth()+1).padStart(2,"0"),A=String(x.getDate()).padStart(2,"0");return`${v}-${A}-${x.getFullYear()}`}else{let v=String(x.getMonth()+1).padStart(2,"0"),A=String(x.getDate()).padStart(2,"0");return`${x.getFullYear()}/${v}/${A}`}}let m=x=>" ".repeat(Math.floor(l()*4))+x+" ".repeat(Math.floor(l()*4));for(let x=1;x<=1e3;x++){let v=Math.floor(l()*9901)+100,A=l()<.1,q=A?v*.5:Math.floor(l()*4951)+50,C={TransactionID:x,"Customer Name":I(u,l),Country:I(r,l),Date:o(new Date(2022,0,1),new Date(2023,11,31)),Product:I(d,l),Sales:v,Cost:q};p.push(C),n.push([String(C.TransactionID).padStart(4,"0"),m(C["Customer Name"]),l()<.3?C.Country:I(i[C.Country],l),c(C.Date),C.Product+"/"+l().toString(36).substr(2,6),m(String(C.Sales))+" USD",A?"":C.Cost+" USD"])}let h=j.utils.book_new(),f=j.utils.aoa_to_sheet(n);j.utils.book_append_sheet(h,f,"RawData");let g=j.write(h,{bookType:"xlsx",type:"array"}),y=new Blob([g],{type:"application/octet-stream"}),w=I(r,l),b=I(d,l),E=o(new Date(2022,0,1),new Date(2023,11,31)),k=p.filter(x=>x.Country===w&&x.Product===b&&x.Date<=E).reduce((x,v)=>x+v.Sales,0),S=p.filter(x=>x.Country===w&&x.Product===b&&x.Date<=E).reduce((x,v)=>x+v.Cost,0),$=(k-S)/k,T=async x=>{if(x==null)throw new Error("Answer is required. Please enter the margin as a number or percentage.");let v;if(typeof x=="string"){let A=x.trim();if(A.endsWith("%")){let q=parseFloat(A.slice(0,-1));if(!Number.isFinite(q))throw new Error("Answer must be a numeric percentage (e.g. 12.34%) or decimal (e.g. 0.1234)");v=q/100}else{let q=parseFloat(A);if(!Number.isFinite(q))throw new Error("Answer must be a numeric percentage (e.g. 12.34%) or decimal (e.g. 0.1234)");v=q}}else if(typeof x=="number")v=x;else throw new Error("Answer must be a number or a numeric string (optionally ending with '%')");if(!Number.isFinite(v))throw new Error("Answer must be a finite number");if(Math.abs(v-$)>1e-4)throw new Error("Incorrect answer");return!0},D=Do`
    <h2 id="improving-sales-data-accuracy-for-retailwise-inc-">Improving Sales Data Accuracy for RetailWise Inc.</h2>
    <p>
      <strong>RetailWise Inc.</strong> is a retail analytics firm that supports companies in optimizing their pricing,
      margins, and inventory decisions. Their reports depend on accurate historical sales data, but legacy data sources
      are often messy. Recently, RetailWise received an Excel sheet containing 1,000 transaction records that were
      generated from scanned receipts. Due to OCR inconsistencies and legacy formatting issues, the data in the Excel
      sheet is not clean.
    </p>
    <p>The Excel file has these columns, and they are messy:</p>
    <ul>
      <li><strong>Customer Name</strong>: Contains leading/trailing spaces.</li>
      <li>
        <strong>Country</strong>: Uses inconsistent representations. Instead of 2-letter abbreviations, it also contains
        other values like &quot;USA&quot; vs. &quot;US&quot;, &quot;UK&quot; vs. &quot;U.K&quot;, &quot;Fra&quot; for
        France, &quot;Bra&quot; for Brazil, &quot;Ind&quot; for India.
      </li>
      <li><strong>Date</strong>: Uses mixed formats like &quot;MM-DD-YYYY&quot;, &quot;YYYY/MM/DD&quot;, etc.</li>
      <li>
        <strong>Product</strong>: Includes a product name followed by a slash and a random code (e.g.,
        &quot;Theta/5x01vd&quot;). Only the product name part (before the slash) is relevant.
      </li>
      <li>
        <strong>Sales and Cost</strong>: Contain extra spaces and the currency string (&quot;USD&quot;). In some rows,
        the Cost field is missing. When the cost is missing, it should be treated as 50% of the Sales value.
      </li>
      <li>
        <strong>TransactionID</strong>: Though formatted as four-digit numbers, this field may have inconsistent
        spacing.
      </li>
    </ul>
    <h3 id="-your-task-"><strong>Your Task</strong></h3>
    <p>
      You need to clean this Excel data and calculate the total margin for all transactions that satisfy the following
      criteria:
    </p>
    <ul>
      <li>
        <strong>Time Filter:</strong> Sales that occurred up to and including a specified date
        (<strong>${E}</strong>).
      </li>
      <li>
        <strong>Product Filter:</strong> Transactions for a specific product (<strong>${b}</strong>). (Use only
        the product name before the slash.)
      </li>
      <li>
        <strong>Country Filter:</strong> Transactions from a specific country (<strong>${w}</strong>), after
        standardizing the country names.
      </li>
    </ul>
    <p>The <strong>total margin</strong> is defined as:</p>
    <p>
      <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <semantics>
          <mrow>
            <mtext>Total&nbsp;Margin</mtext>
            <mo>=</mo>
            <mfrac>
              <mrow>
                <mtext>Total&nbsp;Sales</mtext>
                <mo>−</mo>
                <mtext>Total&nbsp;Cost</mtext>
              </mrow>
              <mtext>Total&nbsp;Sales</mtext>
            </mfrac>
          </mrow>
          <annotation encoding="application/x-tex">
            ext{Total Margin} = rac{ ext{Total Sales} - ext{Total Cost}}{ ext{Total Sales}}
          </annotation>
        </semantics>
      </math>
    </p>
    <p>Your solution should address the following challenges:</p>
    <ol>
      <li>
        <strong>Trim and Normalize Strings:</strong> Remove extra spaces from the <strong>Customer Name</strong> and
        <strong>Country</strong> fields. Map inconsistent country names (e.g., &quot;USA&quot;, &quot;U.S.A&quot;,
        &quot;US&quot;) to a standardized format.
      </li>
      <li>
        <strong>Standardize Date Formats:</strong> Detect and convert dates from &quot;MM-DD-YYYY&quot; and
        &quot;YYYY/MM/DD&quot; into a consistent date format (e.g., ISO 8601).
      </li>
      <li>
        <strong>Extract the Product Name:</strong> From the <strong>Product</strong> field, extract the portion before
        the slash (e.g., extract &quot;Theta&quot; from &quot;Theta/5x01vd&quot;).
      </li>
      <li>
        <strong>Clean and Convert Sales and Cost:</strong> Remove the &quot;USD&quot; text and extra spaces from the
        <strong>Sales</strong> and <strong>Cost</strong> fields. Convert these fields to numerical values. Handle
        missing Cost values appropriately (50% of Sales).
      </li>
      <li>
        <strong>Filter the Data:</strong> Include only transactions up to and including <strong>${E}</strong>,
        matching product <strong>${b}</strong>, and country <strong>${w}</strong>.
      </li>
      <li>
        <strong>Calculate the Margin:</strong> Sum the Sales and Cost for the filtered transactions. Compute the overall
        margin using the formula provided.
      </li>
    </ol>
    <p>By cleaning the data and calculating accurate margins, RetailWise Inc. can:</p>
    <ul>
      <li>
        <strong>Improve Decision Making:</strong> Provide clients with reliable margin analyses to optimize pricing and
        inventory.
      </li>
      <li>
        <strong>Enhance Reporting:</strong> Ensure historical data is consistent and accurate, boosting stakeholder
        confidence.
      </li>
      <li>
        <strong>Streamline Operations:</strong> Reduce the manual effort needed to clean data from legacy sources.
      </li>
    </ul>

    <div class="mb-3">
      <p>
        Download the Sales Excel file:
        <button class="btn btn-sm btn-outline-primary" type="button" @click=${()=>Gt(y,`${t}.xlsx`)}>
          ${t}.xlsx
        </button>
      </p>
      <label for="${t}" class="form-label">
        What is the total margin for transactions before <strong>${E}</strong> for <strong>${b}</strong> sold
        in <strong>${w}</strong> (which may be spelt in different ways)?
      </label>
      <input class="form-control" id="${t}" name="${t}" required />
      <p class="text-muted">You can enter the margin as a percentage (e.g. 12.34%) or a decimal (e.g. 0.1234).</p>
    </div>
  `;return{id:t,title:s,weight:a,question:D,answer:T}}var Wt,jt=R(()=>{"use strict";Wt=G(F(),1);Ht();ce()});import{html as Y,render as Xt}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function fe(e,a){let t=Y`<ol class="mt-3">
    ${e.map(({id:u,title:i,weight:r})=>Y`<li><a href="#h${u}">${i}</a> (${r} ${r==1?"mark":"marks"})</li>`)}
  </ol>`,s=[Y`<h1 class="display-6">Questions</h1>`,t,...e.map(({id:u,title:i,weight:r,question:d,help:p},n)=>(p&&!Array.isArray(p)&&(p=[p]),Y`
        <div class="card my-5" data-question="${u}" id="h${u}">
          <div class="card-header">
            <span class="badge text-bg-primary me-2">${n+1}</span>
            ${i} (${r} ${r==1?"mark":"marks"})
          </div>
          ${p?p.map(o=>Y`<div class="card-body border-bottom">${o}</div>`):""}
          <div class="card-body">${d}</div>
          <div class="card-footer d-flex">
            <button type="button" class="btn btn-primary check-answer" data-question="${u}">Check</button>
          </div>
        </div>
      `))],l={index:t,questions:s};for(let[u,i]of a)Xt(l[i],u)}import{unsafeHTML as Qt}from"https://cdn.jsdelivr.net/npm/lit-html@3/directives/unsafe-html.js";import{Marked as Zt}from"https://cdn.jsdelivr.net/npm/marked@13/+esm";var ge="https://tds.s-anand.net",ye=e=>e&&!e.match(/^(https?|mailto):/),er=new Zt({renderer:{image(e,a,t){return ye(e)&&(e=`${ge}/${e}`),`<img src="${e}" alt="${t}" ${a?`title="${a}"`:""} class="img-fluid" loading="lazy">`},link(e,a,t){return ye(e)&&(e=`${ge}/${e.endsWith(".md")?`#/${e.replace(/\.md$/,"")}`:e}`),`<a href="${e}" ${a?`title="${a}"`:""} target="_blank">${t}</a>`}}}),P=e=>Qt(er.parse(e));async function _n(e,a){let t=[{...await Promise.resolve().then(()=>(we(),be)).then(s=>s.default({user:e,weight:1})),help:[P(`
![](https://files.s-anand.net/images/q-fifa-world-cup.webp)

### Ask AI

- [How do I efficiently get data from Wikipedia into Google Sheets?](#askai)
- [What are the best ways to analyze tabular data using Google Sheets formulas?](#askai)
- [How do I use VLOOKUP, SUMIF, and other advanced formulas to extract specific information from large datasets?](#askai)
`)]},{...await Promise.resolve().then(()=>(ve(),xe)).then(s=>s.default({user:e,weight:1})),help:[P(`
### Ask AI
- [What is the difference between a normal AI text response vs a structured output response?](#askai)
- [Which AI models support structured outputs, and which ones do not? Why?](#askai)
- [What is the difference between streaming responses and structured outputs?](#askai)
- [How do I enforce a specific JSON schema in OpenAI's structured output?](#askai)
- [Why is structured output better than parsing text for production APIs?](#askai)
      `)]},{...await Promise.resolve().then(()=>($e(),Ee)).then(s=>s.default({user:e,weight:1})),help:[P(`
  ### Ask AI
  - [Can LLM models search the internet by themselves? Why or why not?](#askai)
  - [If the ChatGPT website can search the internet, does that mean the LLM itself has internet access capabilities?](#askai)
  - [Why does Gemini on the website answer "What is today's date?" correctly, but the same model in Python gives an incorrect answer?
](#askai)
  - [What is the difference between structured output, function calling, and normal AI responses?
](#askai)
      `)]},{...await Promise.resolve().then(()=>(Se(),ke)).then(s=>s.default({user:e,weight:1})),help:[P(`
### Ask AI

- [What is cron syntax and how do I read '0 * * * *'?](#askai)
- [Why use GitHub Actions for scheduling instead of cron on a server?](#askai)
- [What are the limitations of GitHub Actions scheduled workflows?](#askai)
- [How do I test a scheduled workflow without waiting for the cron time?](#askai)
- [What happens to scheduled workflows if my repository becomes inactive?](#askai)
- [How do I make my scheduled workflow commit changes back to the repo?](#askai)
- [What is the difference between Cron jobs and Systemd timers in Linux?](#askai)
  `)]},{...await Promise.resolve().then(()=>(Ae(),Te)).then(s=>s.default({user:e,weight:1})),help:[P(`
### Ask AI

- [What is a GitHub Actions status badge and how do I add one to my README?](#askai)
- [How do I manually trigger my workflow to test it?](#askai)
- [What does "workflow_dispatch" mean and why should I include it?](#askai)
- [My badge shows "no status". What's wrong and how do I fix it?](#askai)
- [How can I customize my badge appearance?](#askai)
  `)]},{...await Promise.resolve().then(()=>(Ye(),Je)).then(s=>s.default({user:e,weight:1})),help:[P(`
### Ask AI

- [What are Google dorks and how are they used for advanced searching?](#askai)
- [How can I write safe Google dork queries to find public technical content?](#askai)
- [What are ethical and legal considerations when using Google dorks?](#askai)
        `)]},{...await Promise.resolve().then(()=>(Be(),ze)).then(s=>s.default({user:e,weight:1})),help:[P(`
  ### Ask AI
  - [Why does sending YouTube URLs directly to Gemini cause the "10,800 image limit" error?](#askai)
  - [How do I extract audio from YouTube videos using yt-dlp in Python?](#askai)
  - [What is the Gemini Files API and how do I upload audio files to it?](#askai)
  - [How do I use structured outputs in Gemini to ensure consistent JSON responses?](#askai)
  - [What's the difference between processing video frames vs audio for content analysis?](#askai)
  - [How do I implement proper cleanup of temporary files in FastAPI?](#askai)
  - [What Gemini model should I use for audio processing and why?](#askai)
      `)]},{...await Promise.resolve().then(()=>(Ke(),Ve)).then(s=>s.default({user:e,weight:2})),help:[P(`
### Ask AI
- [What is Chrome DevTools Protocol (CDP) and how does it differ from regular web scraping?](#askai)
- [How do I use Playwright or Puppeteer to capture browser console logs and errors?](#askai)
- [What is the difference between synchronous errors and asynchronous JavaScript errors?](#askai)
- [How do I programmatically navigate between pages and wait for all network requests?](#askai)
- [Why doesn't traditional scraping (requests/BeautifulSoup) capture runtime errors?](#askai)
- [How do I detect if a JavaScript error occurred on a page using browser automation?](#askai)
        `)]},{...await Promise.resolve().then(()=>(rt(),tt)).then(s=>s.default({user:e,weight:2})),help:[P(`
### Ask AI
- [What is a PDF bounding box and what coordinate system does PyMuPDF use to describe text positions?](#askai)
- [What is the difference between PyMuPDF's coordinate system (top-left origin) and the native PDF coordinate system (bottom-left origin)?](#askai)
- [How does \`page.search_for()\` work in PyMuPDF, and what does it return?](#askai)
- [Why do different PDF libraries (PyMuPDF, pdfplumber, pypdf) return different coordinates for the same text?](#askai)
- [What real-world use cases rely on knowing the exact position of text in a PDF \u2014 not just the text itself?](#askai)
- [How do AI document processing pipelines like Amazon Textract or Google Document AI use bounding boxes?](#askai)
- [How would I draw a highlight or rectangle around extracted text using PyMuPDF?](#askai)
        `)]},{...await Promise.resolve().then(()=>(pt(),ut)).then(s=>s.default({user:e,weight:2})),help:[P(`
### Ask AI
- [What is the Gemini Files API and why do I need it to process large PDFs instead of sending the file inline?](#askai)
- [How do I use Gemini's structured output (response_schema) to guarantee I get valid JSON back instead of free-form text?](#askai)
- [Why does my Gemini file upload get stuck in "PROCESSING" state, and how should I poll for it to become ACTIVE?](#askai)
- [How do I write a prompt that makes Gemini reliably match many different date format variants (17Jan, Jan17, January 17, etc.) for the same date?](#askai)
- [What is the difference between Gemini's document understanding capability and simply extracting raw text from a PDF?](#askai)
- [In a real expense management product, why would you use an LLM for extraction instead of regex or rule-based parsing?](#askai)
        `)]},{...await Promise.resolve().then(()=>(wt(),bt)).then(s=>s.default({user:e,weight:2})),help:[P(`
### Ask AI
- [What is the Gemini Files API and why is it necessary for video files rather than passing video content directly in the API call?](#askai)
- [How does Gemini process a video file \u2014 does it analyze every frame, sample frames, or process audio separately?](#askai)
- [What is the difference between using Gemini for video understanding versus traditional computer vision (OpenCV, frame-by-frame OCR)?](#askai)
- [What does temperature=0 do in a Gemini API call, and why is it important for data extraction tasks?](#askai)
- [What kinds of real-world enterprise workflows are now being automated using AI video understanding \u2014 beyond simple transcription?](#askai)
- [How does Gemini's multimodal video understanding compare to running a speech-to-text model followed by text extraction?](#askai)
        `)]},{...await Promise.resolve().then(()=>(vt(),xt)).then(s=>s.default({user:e,weight:1})),help:[P(`
### Ask AI
- [What is function calling in AI models like OpenAI's GPT?](#askai)
- [How does function calling differ from structured output?](#askai)
- [What are the benefits of using function calling for API integrations?](#askai)
- [How do I implement function calling in Python with the OpenAI API?](#askai)
- [What happens if a function call fails during AI response generation?](#askai)
        `)]},{...await Promise.resolve().then(()=>(kt(),$t)).then(s=>s.default({user:e,weight:1})),help:[P(`
### Ask AI
- [How do I set up a GitHub Action to run Playwright tests?](#askai)
- [What is the difference between Playwright and Puppeteer for browser automation?](#askai)
- [How can I use Playwright to scrape data from websites in a GitHub Action?](#askai)
- [What are the best practices for handling dynamic content in Playwright?](#askai)
- [How do I debug Playwright scripts running in GitHub Actions?](#askai)
        `)]},{...await Promise.resolve().then(()=>(It(),At)).then(s=>s.default({user:e,weight:1})),help:[P(`
### Ask AI
- [How do I use Playwright to extract data from HTML tables?](#askai)
- [What methods does Playwright provide for table scraping?](#askai)
- [How do I handle pagination when scraping tables with Playwright?](#askai)
- [What are the advantages of using Playwright over traditional scraping libraries for tables?](#askai)
- [How do I sum values from a scraped table using Playwright?](#askai)
        `)]},{...await Promise.resolve().then(()=>(Dt(),_t)).then(s=>s.default({user:e,weight:1})),help:[P(`
### Ask AI
- [What is web crawling and how does it differ from web scraping?](#askai)
- [How do I implement a basic HTML crawler in Python?](#askai)
- [What are the ethical considerations when crawling websites?](#askai)
- [How do I handle rate limiting and robots.txt when crawling?](#askai)
- [What tools can I use for advanced web crawling?](#askai)
        `)]},{...await Promise.resolve().then(()=>(Ct(),qt)).then(s=>s.default({user:e,weight:1})),help:[P(`
### Ask AI
- [How do I scrape data from IMDb using Python and BeautifulSoup?](#askai)
- [What are the best practices for handling dynamic content on websites like IMDb?](#askai)
- [How can I use APIs instead of scraping for movie data?](#askai)
- [What are the legal considerations when scraping websites?](#askai)
- [How do I parse HTML tables and extract structured data?](#askai)
        `)]},{...await Promise.resolve().then(()=>(Nt(),Ft)).then(s=>s.default({user:e,weight:1})),help:[P(`
### Ask AI
- [How do I use LLMs for structured data extraction from unstructured text?](#askai)
- [What is the difference between prompt engineering and fine-tuning for extraction tasks?](#askai)
- [How can I ensure consistent JSON output from AI models?](#askai)
- [What tools are available for post-processing AI-generated structured data?](#askai)
- [How do I handle edge cases in LLM-based data extraction?](#askai)
        `)]},{...await Promise.resolve().then(()=>(jt(),Ut)).then(s=>s.default({user:e,weight:1})),help:[P(`
### Ask AI
- [How do I clean and preprocess sales data in Excel?](#askai)
- [What Excel functions are useful for data cleaning and analysis?](#askai)
- [How can I handle missing data and outliers in spreadsheets?](#askai)
- [What are the best practices for data validation in Excel?](#askai)
- [How do I automate data cleaning tasks in Excel?](#askai)
        `)]}];return fe(t,a),Object.fromEntries(t.map(({id:s,...l})=>[s,l]))}export{_n as questions};
