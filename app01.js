const { countSpecialNumbers } = require("./utils");

function runTest(testName, result, expected) {
    if (result === expected) {
        console.log(testName + ": PASS");
    } else {
        console.log(testName + ": FAIL");
    }
}

let tests = [
    { name: "Test 1", input: [3, 8,  15, 20, 7], expected: 1 },
    {name: "Test 2", input: [2, 4, 12, 14], expected: 2 },
    {name: "Test 3", input: [11, 13, 15], expected: 0},
    {name: "Test 4", input: [10, 12, 14], expected: 2}
];

for (let i = 0; i < tests.length; i++) {let test = tests[i];
let result = 
countSpecialNumbers(test.input);
     runTest(test.name, result, test.expected);
}

