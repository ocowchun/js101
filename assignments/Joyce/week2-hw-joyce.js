let numbers = [20, 45, 33, 41, 55, 92, 60, 71]

// Question 1: given variable `numbers`, try to get all numbers that is divisible by 2
// and assign the result to variable `answer1`

let answer1 = []

for (let i = 0; i < numbers.length; i++){
	if (numbers[i] % 2 === 0){
		answer1.push(numbers[i])
	}
}

// ---
// Question 2: given variable `numbers`, try to get all numbers that is divisible by 5 and less than 60
// and assign the result to variable `answer2`

let answer2 = []

for (let i = 0; i < numbers.length; i++){
	if ((numbers[i] % 5 === 0) && (numbers[i] < 60)){
		answer2.push(numbers[i])
	}
}

// ---
// Question 3: find all prime number less than 100
// and assign the result to variable `answer3`

// my original answer

let answer3 = []

for (let i = 0; i < numbers.length; i++){
	let temp = 0
	for (let j = 2; j < numbers[i]; j++){
		if (numbers[i] % j === 0){
			temp += 1
		}
	}

	if (temp === 0){
		answer3.push(numbers[i])
	}
}

// I thought the solution wasn't great, so I went and asked my dad XD
// updated solution below

let answer4 = []

for (let i = 0; i < numbers.length; i++){
	let  prime = true

	if (numbers[i] % 2 === 0){
		prime = false
	}

	for (let j = 3; j < numbers.length; j += 2){
		if (numbers[i] % j === 0){
			prime = false
		}
	}

	if (prime === true){
		answer4.push(numbers[i])
	}

}