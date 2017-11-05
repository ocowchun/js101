let costs = [20, 45, 33, 41, 55, 92]

// Question 1: try to get the sum of costs using for loop,
// and assign the result to variable `sum`

let sum = 0

for (let i = 0; i < costs.length; i++) {
	sum += costs[i]
}

console.log(sum)


// Question 2: try to add 10% of cost to each elements in `costs`
// and assign the results to variable `cost_with_fee`

let cost_with_fee = []

for (let i = 0; i < costs.length; i++) {
	cost_with_fee.push(costs[i] * 1.1)
}

console.log(cost_with_fee)
