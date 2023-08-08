module.exports = function reverse (n) {
    let reverse = 0, num, negative = n;
    while (n !== 0) {
        num = n % 10;
        reverse = reverse * 10 + num;
        n = parseInt(n / 10);
      }
    if (negative < 0) return reverse * (-1);
    return reverse;  
}
