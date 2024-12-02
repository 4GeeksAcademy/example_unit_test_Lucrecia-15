// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
};
// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 156.5 / valueInDollar;
    return valueInYen;
};
// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.87 / valueInYen;
    return valueInPound;
};
const sum = (a,b) => {
   return a + b} 
console.log(sum(7,3))


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};