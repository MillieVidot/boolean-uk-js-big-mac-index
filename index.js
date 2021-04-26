/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/

// let bigMacUs = 3.57
// let bigMacUk = 2.29
// let powerParityUk = bigMacUs / bigMacUk
// let exchangeRateUk = 2
// let bigMacIndexUk = ((exchangeRateUk - powerParityUk) / powerParityUk) * 100

// console.log("Big Mac Price in US: $", bigMacUs)
// console.log("Big Mac Index US to UK: ", bigMacIndexUk.toFixed(0), "%")



let poo = 80
if (poo>90){
   time = 'now';
} else {
   time = 'later'
}
console.log('Please flush', time)


let bigMacUs = 5.66
let bigMacUk = 3.19
let powerParityUk = bigMacUs / bigMacUk
let exchangeRateUk = 1.39
let bigMacIndexUk = ((exchangeRateUk - powerParityUk) / powerParityUk) * 100

console.log("Big Mac Price in US: $", bigMacUs)
console.log("Big Mac Index US to UK: ", bigMacIndexUk.toFixed(0), "%")
console.log("Does the Big Mac cost more in the UK?", bigMacIndexUk>0 || bigMacIndexUk===0)

if (bigMacIndexUk>0){
   worth = 'a rip off'
} else {
   worth = 'better value'
}
console.log('Big Macs from here are', worth, '!')



let bigMacSwitz = 6.50
let powerParitySwitz = bigMacUs / bigMacSwitz
let exchangeRateSwitz = 1.09
let bigMacIndexSwitz = ((exchangeRateSwitz - powerParitySwitz) / powerParitySwitz) * 100

console.log("Big Mac Index US to Switzerland: ", bigMacIndexSwitz.toFixed(0), "%")
console.log("Does the Big Mac cost more in Switzerland?", bigMacIndexSwitz>0 || bigMacIndexSwitz===0)

if (bigMacIndexSwitz>0){
   worth = 'a rip off'
} else {
   worth = 'better value'
}
console.log('Big Macs from here are', worth, '!')


let bigMacNor = 54
let powerParityNor = bigMacUs / bigMacNor
let exchangeRateNor = 0.12
let bigMacIndexNor = ((exchangeRateNor - powerParityNor) / powerParityNor) * 100

console.log("Big Mac Index US to Norway: ", bigMacIndexNor.toFixed(0), "%")
console.log("Does the Big Mac cost more in Norway?", bigMacIndexNor>0 || bigMacIndexNor===0)

if (bigMacIndexNor>0){
   worth = 'a rip off'
} else {
   worth = 'better value'
}
console.log('Big Macs from here are', worth, '!')


let bigMacFran = 4.12
let powerParityFran = bigMacUs / bigMacFran
let exchangeRateFran = 1.21
let bigMacIndexFran = ((exchangeRateFran - powerParityFran) / powerParityFran) * 100

console.log("Big Mac Index US to France: ", bigMacIndexFran.toFixed(0), "%")
console.log("Does the Big Mac cost more in France?", bigMacIndexFran>0 || bigMacIndexFran===0)

if (bigMacIndexFran>0){
   worth = 'a rip off'
} else {
   worth = 'better value'
}
console.log('Big Macs from here are', worth, '!')


let bigMacSKor = 4500 
let powerParitySKor = bigMacUs / bigMacSKor
let exchangeRateSKor = 0.00090
let bigMacIndexSKor = ((exchangeRateSKor - powerParitySKor) / powerParitySKor) * 100

console.log("Big Mac Index US to SKorea: ", bigMacIndexSKor.toFixed(0), "%")
console.log("Does the Big Mac cost more in SKorea?", bigMacIndexSKor>0 || bigMacIndexSKor===0)

if (bigMacIndexSKor>0){
   worth = 'a rip off'
} else {
   worth = 'better value'
}
console.log('Big Macs from here are', worth, '!')