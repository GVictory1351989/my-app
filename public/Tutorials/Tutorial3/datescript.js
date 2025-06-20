function showCurrentDate() {
    const now = new Date();
    document.getElementById('output').innerText =
        `📅 Current Date:\n${now.toString()}`;
}

function addDays() {
    const now = new Date();
    now.setDate(now.getDate() + 10);
    document.getElementById('output').innerText =
        `📅 Date After 10 Days:\n${now.toDateString()}`;
}

function subtractDays() {
    const now = new Date();
    now.setDate(now.getDate() - 5);
    document.getElementById('output').innerText =
        `📅 Date 5 Days Ago:\n${now.toDateString()}`;
}

function dateDifference() {
    const start = new Date('2025-01-01');
    const end = new Date('2025-06-20');
    const diffTime = end - start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('output').innerText =
        `🧮 Difference Between 1 Jan 2025 and 20 June 2025:\n${diffDays} days`;
}

function formatDate() {
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0'); // Months start at 0
    const yyyy = now.getFullYear();

    const formatted = `${dd}/${mm}/${yyyy}`;
    document.getElementById('output').innerText =
        `🗓️ Formatted Date:\n${formatted}`;
}

function showTimestamp() {
    const now = new Date();
    document.getElementById('output').innerText =
        `⏱️ Unix Timestamp (ms): ${now.getTime()}\n⏱️ ISO: ${now.toISOString()}`;
}

function showAlert() {
    alert('⚠️ This is a simple alert message!');
}

// 🪟 Prompt Method
function getPrompt() {
    const name = prompt('Enter your name:', 'Guest');
    if (name !== null) {
        document.getElementById('output').innerText = `📝 You entered: ${name}`;
    }
}

// 🪟 Confirm Method
function getConfirmation() {
    const response = confirm('Do you want to continue?');
    document.getElementById('output').innerText =
        response ? '✅ You clicked OK' : '❌ You clicked Cancel';
}