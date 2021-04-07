const numbers = [3,5,7,9,11];
const newNumbers = numbers.map(num => {
    return num * 5;
});

console.log(`Array awal : ${numbers}`);
console.log(`Array baru hasil dengan perkalian 5 : ${newNumbers}`);