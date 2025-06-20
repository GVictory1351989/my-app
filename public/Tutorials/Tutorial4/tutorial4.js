function showBasicArray() {
    const fruits = ['apple', 'banana', 'mango'];
    document.getElementById('output').innerText =
        `📦 Basic Array:\n[${fruits.join(', ')}]\n\n🛠️ Used: join()`;
}

function showAddRemove() {
    let items = ['pen', 'pencil'];
    items.push('eraser');
    items.unshift('marker');
    items.pop();
    items.shift();
    document.getElementById('output').innerText =
        `🔧 Add/Remove:\n[${items.join(', ')}]\n\n🛠️ Used: push(), unshift(), pop(), shift(), join()`;
}

function showCheck() {
    const fruits = ['banana', 'orange', 'mango'];
    const result = fruits.includes('banana')
        ? '✅ banana exists in array'
        : '❌ banana not found';
    document.getElementById('output').innerText =
        `${result}\n\n🛠️ Used: includes()`;
}

function showLoop() {
    const numbers = [1, 2, 3, 4];
    let result = '🔁 Loop (forEach):\n';
    numbers.forEach((num, i) => {
        result += `Index ${i} ➜ ${num}\n`;
    });
    document.getElementById('output').innerText =
        `${result}\n🛠️ Used: forEach()`;
}

function showMapFilter() {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(n => n * 2);
    const evens = numbers.filter(n => n % 2 === 0);
    document.getElementById('output').innerText =
        `🧪 Original: ${numbers}\n🔁 Doubled: ${doubled}\n🧮 Even Numbers: ${evens}\n\n🛠️ Used: map(), filter()`;
}

function showSearch() {
    const names = ['ram', 'shyam', 'sita', 'gita'];
    const index = names.indexOf('sita');
    const found = names.find(n => n.startsWith('g'));
    document.getElementById('output').innerText =
        `🔍 Index of 'sita': ${index}\n🔎 First starting with 'g': ${found}\n\n🛠️ Used: indexOf(), find(), startsWith()`;
}

function showDynamic() {
    let list = [];
    list.push('📌 Start');
    for (let i = 1; i <= 5; i++) {
        list.push('Item ' + i);
    }
    list.pop();
    document.getElementById('output').innerText =
        `🛠️ Dynamic List:\n${list.join('\n')}\n\n🛠️ Used: push(), pop(), for loop, join()`;
}
