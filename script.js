// Arrow function to calculate the sum of even numbers up to n
const sumOfEvens = (n) => {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }
    return sum;
};


const userInput = prompt("Enter a number to calculate the sum of all even numbers up to it:");


const n = parseInt(userInput);
if (!isNaN(n) && n > 0) {
    const result = sumOfEvens(n);
    alert(`The sum of even numbers up to ${n} is ${result}`);
} else {
    alert("Please enter a valid positive number.");
}