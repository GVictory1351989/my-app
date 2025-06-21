const callback = (n) => {
    return n ** 2;
};

function cube(callback, n) {
    return callback(n) * n;
}

function showOutput() {
    const result = cube(callback, 3); // 3^2 = 9, 9 * 3 = 27
    const outputDiv = document.getElementById('callbacklog');
    outputDiv.innerText = `Output: ${result}`;
    outputDiv.style.display = 'block';
}
// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
function higheroutput()
{
    const result = higherOrder(2)(3)(10);
    const outputDiv = document.getElementById('higheroutputlog');
    outputDiv.innerText = `Output: ${result}`;
    outputDiv.style.display = 'block';
}


const numbers = [1, 2, 3, 4, 5];
const sumArray = arr => {
    let sum = 0;
    // call back here 
    const callback = function (element) {
        sum += element;
    }
    //arr.forEach(function (element) {
    //    sum += element;
    //});
    //arr.forEach((element) => {
    //    sum += element;
    //});
    // now for each 
    arr.forEach(callback);
    return sum;
};
function highordercallbackoutput() {
    const result = sumArray(numbers);
    const outputDiv = document.getElementById('higheroutputlog2');
    outputDiv.innerText = `Output: ${result}`;
    outputDiv.style.display = 'block';
}

function setinterval() {
    setTimeout(sayHello, 2000) // duration in milliseconds
}
function sayHello() {
    let result = " After pressing button function run after 2 sec show sayhello";
    const outputDiv = document.getElementById('setintervallog');
    outputDiv.innerText = `Output: ${result}`;
    outputDiv.style.display = 'block';
}

const countries = ['Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',]

function filterexample() {
    const countriescontainingland = countries.filter((country) => country.includes('land'))
    const outputDiv = document.getElementById('filterlog');
    outputDiv.innerText = `Output: ${countriescontainingland}`;
    outputDiv.style.display = 'block';
}