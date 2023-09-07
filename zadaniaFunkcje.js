// Zadanie 1111111111
function dodaj(a, b) {return a + b;}

let addNumbers = dodaj(2, 3);

console.log(addNumbers);


// Zadanie 2222222222
function odejmij(a, b) {return a - b;}

let subNum = odejmij(2, 3);

console.log(subNum);



function mul(a, b) {return a * b;}

let mulNum = mul(2, 3);

console.log(mulNum);



function div(a, b) {return a / b;}

let divNum = div(2, 3);

console.log(divNum);


// Zadanie 3333333333333333
function calc(a, b, operator) 
{
if (typeof a !== 'number') {return "pierwszy parametr musi być liczbą"}
if (typeof b !== 'number') {return "drugi parametr musi być liczbą"}

if (operator === 'add') {return a + b} 
else if (operator === 'subtract') {return a - b} 
else if (operator === 'multiply') {return a * b} 
else if (operator === 'divide') {
if (b === 0) {return "nie można dzielić przez zero"}
return a / b}
else {return "Nieprawidłowy operator. Dostępne operatory: 'add', 'subtract', 'multiply', 'divide'."}
}

console.log(calc(3, 3, 'multiply'));


//Zadanie 4444444444444444
function isPrimeNum(num)
{
if (num <= 1) {return false};

for (let i = 2; i <= Math.sqrt(num); i++) {if (num % i === 0) {return false}}

return true;
}
console.log(isPrimeNum(7))
console.log(isPrimeNum(8))

// Zadanie 555555555
function factorial(n) 
{
if (n === 0 || n === 1) {return 1} 
else {return n * factorial(n - 1)}
}
console.log(factorial(5));

// Zadanie 6666666666
function fibonacci(n) 
{
let fib = [0, 1]; 
for (let i = 2; i <= n; i++) {fib[i] = fib[i - 1] + fib[i - 2];}
return fib[n];
}

console.log(fibonacci(7));

// Zadanie 77777777
function vowelCount(str) 
{
const vowels = "aeiouAEIOU";
let count = 0;
for (let i = 0; i < str.length; i++) {if (vowels.includes(str[i])) {count++;}}
return count;
}

console.log(vowelCount("hello world")); 