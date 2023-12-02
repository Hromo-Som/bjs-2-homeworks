"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;

	if (d < 0) {
		return arr;
	} else if (d === 0) {
		arr.push(-b / (2 * a));
	} else {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	};

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (typeof(percent) !== 'number' || typeof(contribution) !== 'number' || typeof(amount) !== 'number' || typeof(countMonths) !== 'number') {
		return false;
	};

	let p = percent / 100 / 12;
	let s = amount - contribution;
	let monthlyPayment = s * (p + (p / (((1 + p) ** countMonths) - 1)));
	let totalAmount = monthlyPayment * countMonths;
	return +totalAmount.toFixed(2);
}