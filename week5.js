// object

let obj = { 'name': 'Ben', age: 27 }

let freda = {
  gender: 'female',
  lastName: 'chiu'
}

// update value
obj.name = 'baz'
console.log(obj.name)

// add new key and value
obj = {}
obj.weather = 'rainy day'
console.log(obj)
// { weather: 'rainy day' }


// add new key and value with dynamic key
let key
// if(true){
key = 'firstName'
// }
// else{
//   key = 'middleName'
// }

obj[key] = 'ben'
obj.firstName = 'ben'

// obj[key] = 'ben'

console.log(obj[key])

// try to read unknown key
console.log(obj.unknownKey)
// undefined

// nested object
obj.company = { name: 'codementor' }

{ weather: 'rainy day',
  firstName: 'ben',
  company: { name: 'codementor' }
}
console.log(obj)

// primitive value and object
let b = 2
let c = b
c = 3
console.log(`b = ${b}`)
console.log(`c = ${c}`)
// b = 2
// c = 3

let person = { name: 'Ben', age: 27}
let person2 = person
person.name = 'Tom'
console.log(`person.name = ${person.name}`)
console.log(`person2.name = ${person2.name}`)
// person.name = Tom
// person2.name = Tom


// Correct way to cope with clone object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
let copy = Object.assign({}, person)
// equal to below
// let copy ={}
// copy.name = person.name
// copy.age = person.age

copy.name = 'Leo'
console.log(`person.name = ${person.name}`)
console.log(`copy.name = ${copy.name}`)

// Array is object too!
let ary1 = [1,2,3]
let ary2 = ary1
ary2[1] = 7
console.log('ary1 = ', ary1)
console.log('ary2 = ', ary2)
// ary1 =  [ 1, 7, 3 ]
// ary2 =  [ 1, 7, 3 ]

// Correct way to cope with clone array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// let copyAry1 = ary1.slice()
// copyAry1[1] = 9
// console.log('ary1 = ', ary1)
// console.log('copyAry1 = ', copyAry1)
