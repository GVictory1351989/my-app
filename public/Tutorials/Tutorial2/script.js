// 👉 Primitive vs Non-Primitive Types
let typesOutput = '';
let firstName = 'Manish';
let age = 25;
let isStudent = true;
let score;
let code = null;

typesOutput += `typeof 'Manish' = ${typeof firstName}\n`;
typesOutput += `typeof 25 = ${typeof age}\n`;
typesOutput += `typeof true = ${typeof isStudent}\n`;
typesOutput += `typeof undefined = ${typeof score}\n`;
typesOutput += `typeof null = ${typeof code}  // object (bug)\n`;

document.getElementById('types').innerText = typesOutput;

// 👉 String Methods
let strMethods = '';
let str = 'JavaScript is Fun';

strMethods += `toUpperCase(): ${str.toUpperCase()}\n`;
strMethods += `toLowerCase(): ${str.toLowerCase()}\n`;
strMethods += `substr(0,10): ${str.substr(0, 10)}\n`;
strMethods += `substring(0,10): ${str.substring(0, 10)}\n`;
strMethods += `split(' '): ${str.split(' ')}\n`;
strMethods += `includes('Fun'): ${str.includes('Fun')}\n`;
strMethods += `replace('Fun','Awesome'): ${str.replace('Fun', 'Awesome')}\n`;
strMethods += `charAt(0): ${str.charAt(0)}\n`;
strMethods += `indexOf('Script'): ${str.indexOf('Script')}\n`;
strMethods += `concat(): ${'30'.concat('Days', 'Of', 'JS')}\n`;
strMethods += `startsWith('Java'): ${str.startsWith('Java')}\n`;
strMethods += `endsWith('Fun'): ${str.endsWith('Fun')}\n`;
strMethods += `search('is'): ${str.search('is')}\n`;
strMethods += `match(/is/gi): ${str.match(/is/gi)}\n`;
strMethods += `repeat(2): ${'Hi! '.repeat(2)}\n`;

document.getElementById('methods').innerText = strMethods;

// 👉 Type Casting
let castOutput = '';
castOutput += `parseInt('10.5') = ${parseInt('10.5')}\n`;
castOutput += `parseFloat('10.5') = ${parseFloat('10.5')}\n`;
castOutput += `Number('20') = ${Number('20')}\n`;
castOutput += `+'30.7' = ${+'30.7'}\n`;
castOutput += `parseInt(9.81) = ${parseInt(9.81)}\n`;

document.getElementById('casting').innerText = castOutput;

// 👉 Questions & Answers
let qa = '';
qa += `Q1: What will typeof null return?\nA: object (historical bug)\n\n`;
qa += `Q2: How to convert string '10' to number?\nA: parseInt('10'), Number('10'), +'10'\n\n`;
qa += `Q3: What is the output of 'Asabeneh'.split('')?\nA: ['A', 's', 'a', 'b', 'e', 'n', 'e', 'h']\n\n`;
qa += `Q4: What does '30 Days Of JS'.includes('Days') return?\nA: true\n\n`;
qa += `Q5: Which method repeats a string?\nA: repeat(n)\n`;

document.getElementById('qa').innerText = qa;
