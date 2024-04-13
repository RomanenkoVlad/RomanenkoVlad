if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
kiwi / 91
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

7 - false

const sum = (a, b) => a + b;

98 - 16,52,98,12,34,90,15,56,15,10,25,73,45,3,31,10,98,70,24,51,11,83,79,92,30
const greet = name => `Hello, ${name}!`;
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
kiwi

const isPalindrome = str => str === str.split("").reverse().join("");
const sum = (a, b) => a + b;
53,79,36,74,43,31,88,36,58,28,96,42,41,2,41,54,70,57,73,16,59,88,70,56,76,26,32,38,12,43,13,33,16,65,65,10,2,99,7,62,77,30,31,20,96,96,26,58,23,24,98,99,2,74,65,25,21,6,25,84,34,95,49,20,84,99 / 1

const deepClone = obj => JSON.parse(JSON.stringify(obj));
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

