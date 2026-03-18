function countSpecialNumbers(numbers) {
    let specialCount = 0;
    for (let i =0; i < numbers.length; i++) {
        let num = numbers[i];
        if (num % 2 === 0 && num > 10) {
            specialCount++
        }
    }
    return specialCount;
}
module.exports = { countSpecialNumbers };
