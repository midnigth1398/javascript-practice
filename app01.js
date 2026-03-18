function runTest(testName, result, expected) {
    if (result === expected) {
        console.log(testName + ": PASS");
    } else {
        console.log(testName + ": FAIL");
    }
}

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

runTest("Test 1", countSpecialNumbers([3, 8, 15, 20, 7]), 1);
runTest("Test 2", countSpecialNumbers([2, 4, 12, 14]), 2);
runTest("Test 3", countSpecialNumbers([11, 13, 15]), 0);

