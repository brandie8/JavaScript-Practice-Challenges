function addDigits(num) {
    while (num > 10) {
        num = num.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
}
const num = 353;
const result = addDigits(num);
console.log(result); 