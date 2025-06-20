function functionWithoutParams() {
    const def = `function functionWithoutParams() {\n    console.log('Hello from a simple function!');\n}`;
    const output = 'Hello from a simple function!';
    showOutput('functionWithoutParams', `${def}\n\n📤 Output:\n${output}`);
}

function functionReturningValue() {
    const def = `function add() {\n    return 5 + 3;\n}`;
    const result = 5 + 3;
    showOutput('functionReturningValue', `${def}\n\n📤 Output:\n5 + 3 = ${result}`);
}

function functionWithParam(name = 'Guest') {
    const def = `function greet(name) {\n    return \`Hello, \${name}!\`;\n}`;
    const output = `Hello, ${name}!`;
    showOutput('functionWithParam', `${def}\n\n📤 Output:\n${output}`);
}

function functionWithTwoParams(a = 2, b = 3) {
    const def = `function sum(a, b) {\n    return a + b;\n}`;
    const output = `${a} + ${b} = ${a + b}`;
    showOutput('functionWithTwoParams', `${def}\n\n📤 Output:\n${output}`);
}

function functionManyParams(...args) {
    const def = `function sumMany(a, b, c, d, e) {\n    return a + b + c + d + e;\n}`;
    const sum = args.reduce((acc, val) => acc + val, 0);
    showOutput('functionManyParams', `${def}\n\n📤 Output:\nSum = ${sum}`);
}

function functionUnlimitedArgs() {
    const def = `function sumAll() {\n    let sum = 0;\n    for (let i = 0; i < arguments.length; i++) {\n        sum += arguments[i];\n    }\n    return sum;\n}`;
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    showOutput('functionUnlimitedArgs', `${def}\n\n📤 Output:\nSum = ${sum}`);
}

const arrowUnlimitedArgs = (...args) => {
    const def = `const sum = (...args) => args.reduce((acc, val) => acc + val, 0);`;
    const total = args.reduce((acc, val) => acc + val, 0);
    showOutput('arrowUnlimitedArgs', `${def}\n\n📤 Output:\nTotal = ${total}`);
};

function anonymousExample() {
    const def = `const greet = function () {\n    return 'Hi there!';\n}`;
    const greet = function () {
        return 'Hi there!';
    };
    showOutput('anonymousExample', `${def}\n\n📤 Output:\n${greet()}`);
}

function expressionExample() {
    const def = `const square = function (x) {\n    return x * x;\n}`;
    const square = function (x) {
        return x * x;
    };
    showOutput('expressionExample', `${def}\n\n📤 Output:\n4² = ${square(4)}`);
}

function invokeImmediately() {
    const def = `(function () {\n    console.log('Executed automatically!');\n})();`;
    showOutput('invokeImmediately', `${def}\n\n📤 Output:\nExecuted automatically!`);
}

function arrowFunctionExample() {
    const def = `const multiply = (a, b) => a * b;`;
    const multiply = (a, b) => a * b;
    showOutput('arrowFunctionExample', `${def}\n\n📤 Output:\n6 × 7 = ${multiply(6, 7)}`);
}

function defaultParams(name = 'Guest') {
    const def = `function greet(name = 'Guest') {\n    return \`Welcome, \${name}!\`;\n}`;
    const output = `Welcome, ${name}!`;
    showOutput('defaultParams', `${def}\n\n📤 Output:\n${output}`);
}

function compareFunctions() {
    const def = `function greet() { return 'Hello from normal function'; }\nconst greetArrow = () => 'Hello from arrow function';`;
    function greet() {
        return 'Hello from normal function';
    }
    const greetArrow = () => 'Hello from arrow function';
    showOutput('compareFunctions', `${def}\n\n📤 Output:\n${greet()}
${greetArrow()}`);
}

function showOutput(title, message) {
    document.getElementById('output').innerText = `📘 ${title}\n\n${message}`;
}
