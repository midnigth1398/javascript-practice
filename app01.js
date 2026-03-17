let numbers = [3, 8, 15, 20, 7];
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (num % 2 === 0 && num > 10) {
         console.log("numero especial");
    } else {
        console.log("numero normal");
    }
} 
