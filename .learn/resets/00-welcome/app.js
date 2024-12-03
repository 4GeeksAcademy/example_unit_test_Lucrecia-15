// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = (euros)=> {
 return euros * oneEuroIs.USD
};
// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs.USD;  
    const yenes = euros * oneEuroIs.yenes;
    return yenes

};
// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = (yenes) => { 
    const euros = yenes / oneEuroIs.JPY;
    const pounds = euros * oneEuroIs.GBP;
    return pounds
};
const sum = (a,b) => {
   return a + b} 
console.log(sum(7,3))




module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};