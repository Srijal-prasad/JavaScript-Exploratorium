function primeFactors(n) {
    const factors = [];
    let divisor = 2;
    while (n >= divisor) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n /= divisor;
        } else 
            divisor++;
    }
    return factors;
}
function print(n) {
    const factors = primeFactors(n);
    const uniqueFactors = new Set(factors);
    let message = "";
    const hasOne = uniqueFactors.has(1);
    const hasThree = uniqueFactors.has(3);
    const hasSeven = uniqueFactors.has(7);
    if (hasOne) message += "pling ";
    if (hasThree) message += "plang ";
    if (hasSeven) message += "plong ";

    if (hasOne && hasThree && hasSeven) {
        message = "pling plang plong";
    } else if (message === "")
        message = n.toString();
    return message.trim();}

// Example usage
const number = 105;
console.log(plingPlangPlong(number)); // Output: plang plong
