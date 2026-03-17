function countSpecialNumbers(numbers){
    let specialCount = 0;

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (num % 2 === 0 && num > 10) {
            specialCount++;
        }
    }
    return specialCount;
}

let numbers = [3, 8, 15, 20, 7];
let result = countSpecialNumbers(numbers);
let expected = 1;

if (result === expected) {
    console.log("Test 1: PASS");
} else {
    console.log("Test 1: FAIL");
}

let numbers2 = [2, 4, 12, 14];
let result2 =
countSpecialNumbers(numbers2);
let expected2 = 2;
if (result2 === expected2) {
    console.log("Test 2: PASS");
} else {
    console.log("Test 2: FAIL");
}
