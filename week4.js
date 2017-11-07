// Common Math methods
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
let num4 = Math.round(3.6) //4
console.log(num4)

let num4 = Math.floor(3.6) //3
let num4 = Math.ceiling(3.6) //4

// log
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log
let num5 = Math.log(2)
console.log(num5)


// Functions
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function
function greeting(greetingWord, name) { //function name(variable)
// function greeting(greetingWord, name = 'Joyce') { //ES6 syntax
	if (name === undefined){
		name = 'there'
	}
	console.log(greetingWord + ' ' + name)
  // console.log(`Hi ${name}`)
}

greeting('Hi', 'Ben')
greeting('Hello', 'Freda')
greeting('Yo') //will print 'Yo undefined'


function sum(a, b) {
  return a + b //回傳 value + ends function, should only appear ONCE in each function
  console.log('hihihi') // won't execute
}

let s = sum(1, 2)
console.log(s)


let foo = function(){
  return 'bar'
}

console.log(foo())


//ES6
function hello(name = 'ben'){
  console.log(`Hello ${name}`)
}

hello()


//function within a function
function sumAndSquare(a, b){ //lower camelCase
  let s = sum(a, b)
  return Math.pow(s, 2)
}
let s2 = sumAndSquare(4,7)
console.log(s2)