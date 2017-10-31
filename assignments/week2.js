let numbers = [20, 45, 33, 41, 55, 92, 60, 71]

// Question 1: given variable `numbers`, try to get all numbers that is divisible by 2
// and assign the result to variable `answer1`

// Question 2: given variable `numbers`, try to get all numbers that is divisible by 5 and less than 60
// and assign the result to variable `answer2`

// Question 3: find all prime number less than 100
// and assign the result to variable `answer3`

let answer3 = []
for (let i = 0, max = 100; i < max; i++) {
  if (i === 2) {
    answer3.push(2)
  } else if(i > 2) {
    let prime = false
    for (let j = 0, max2 = answer3.length; j < max2; j++) {
      if (i % answer3[j] === 0) {
        prime = true
      }
    }
    if (!prime) {
      answer3.push(i)
    }
  }
}

console.log(answer3)
