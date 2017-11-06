// common Math methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// sqrt
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
let num1 = Math.sqrt(4)
console.log(num1)

// abs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
let num2 = Math.abs(-4)
console.log(num2)

// random
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
let num3 = Math.random()
console.log(num3)

// round
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
let num4 = Math.round(3.6)
console.log(num4)

// log
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log
let num5 = Math.log(2)
console.log(num5)


// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function
function greeting(name) {
  console.log(`Hi ${name}`)
}

greeting('ben')

function sum(a, b) {
  return a + b
}

let s = sum(1, 2)
console.log(s)

let foo = function(){
  return 'bar'
}

console.log(foo())

function hello(name = 'ben'){
  console.log(`Hello ${name}`)
}

hello()
