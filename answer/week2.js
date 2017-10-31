// review last week

let number1 = 1
let costs = [10, 20, 30]

let sum = 0
for (let i = 0, max = costs.length; i < max; i++) {
  sum += costs[i]
}

console.log(sum)

// this week
// github, clone, fork and PR
// if else
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/if...else

let a = 5
if (!(a > 3)){ //can include expressions in the condition
  console.log('a > 3') //block
}

if (a > 3){
  console.log('a > 3')
}
else{
  console.log('a <= 3')
}


if (a > 3){
  console.log('a > 3')
}
else if( a === 3){
  console.log('a = 3')
}
else{
  console.log('a <= 3')
}

// different between == and ===
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
console.log('1' == 1) // return true
console.log('1' === 1) // return false

let result = (1 > 3) &&  (4 > 2)
(false || true) && false // AND
!!1
false || true // OR
console.log(result)

// object
let obj = { foo: 1 }

obj.foo = 'bar'
let key = 'name'
obj[key] = 'ben'
console.log(obj)