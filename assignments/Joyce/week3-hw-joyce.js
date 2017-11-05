// Question 1: use for loop to manipulate a tree like below:
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
//      *

//first solution

// let level = 7
// for (let i = 0; i < level; i++){
// 	let tree = '*'
// 	if (i === 0 || i === level - 1){
// 		for (let k = 0; k < level - 2; k++){
// 			tree = ' ' + tree
// 		}
// 	}
// 	else{
// 		for (let j = i; j < level - 2; j++){
// 			tree = ' ' + tree
// 		}
// 		for (let h = 0; h < i*2; h++){
// 			tree = tree + '*'
// 		}
// 	}
// 	console.log(tree)
// }

//second solution

let level = 7

for (let i = 0; i < level - 1; i++){
	let tree = '*'
	for (let j = i; j < level - 2; j++){
		tree = ' ' + tree
	}
	for (let h = 0; h < i*2; h++){
		tree = tree + '*'
	}
	console.log(tree)
}

let lastLevel = '*'

for (let k = 0; k < level - 2; k++){
	lastLevel = ' ' + lastLevel
}

console.log(lastLevel)

// Question 2: given a string str1 = ` how do  you turn this    on`
// format it to `How do you turn this on` and assign the result the variable `answer2`

let str1 = ' how do  you turn this    on '
let answer2 = ''

for (let i = 1; i < str1.length; i++){
	let previousChar = str1[i - 1]
	if (!(str1[i] === ' ')){
		answer2 = answer2 + str1[i]
	}
	else if (!(i === 0) && previousChar !== ' '){
		answer2 = answer2 + str1[i]
	}
}

answer2 = answer2[0].toUpperCase() + answer2.slice(1)

console.log(answer2)