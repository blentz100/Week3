// 1a. and 1b.
let ages = [3, 9, 23, 64, 2, 8, 28, 100];
let lastMinusFirst = (ages[ages.length -1] - ages[0]);
console.log("1a.&1b. lastMinusFirst is: " + lastMinusFirst); 

// 1c.
let total = 0;
let averageAge = 0;
for (age of ages){
	total += age;}
averageAge = total / ages.length;
console.log ("1c. Average of all ages in the ages array is: " + (averageAge));

// 2a. Find Average Num of Letters per Name
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let nameLength = 0;
let averageLength = 0;
for (name of names){
	nameLength += name.length;
	averageLength = nameLength / names.length;
}
console.log("2a. Average Number of Letters per name is: " + averageLength);

// 2b. Concat all names together with spaces
namesList = "";
for (name of names){
	namesList += (name + " ");
}
console.log("2b. List of Names is: " + namesList);

// 5. 
let nameLengths = [];
for (x = 0; x < names.length; x++){
	nameLengths[x] = names[x].length;
}
console.log("5. nameLengths array is: " + nameLengths);

// 6.
let sumOfLengths = 0;
for (lengths of nameLengths){
	sumOfLengths += lengths; 
}
console.log("6. sumOfLengths is: " + sumOfLengths);

// 7.
function concatWord(word, n){
	let answer = "";
	while (n > 0){
		answer += word;
		n--;
	}
	return answer;
}
console.log("7. Concat n times and output: " + concatWord("Beetlejuice", 3));

// 8.
function fullNameMaker(firstName, lastName){
	return (firstName + " " + lastName);
}
console.log("8. Full Name is: " + fullNameMaker("Brendan", "Eich"));

// 9. 
function sumMoreThanOneHundred(numbersArray){
	let total = 0;
	for (x of numbersArray){
		total += x;
	}
	if (total > 100){
		return true;
	}
	else{ 
		return false;
	}
}
console.log("9. More than 100?: " + sumMoreThanOneHundred([25,25,25,26]));


// 10. 
function averageOfElements(numbersArray){
	let total = 0;
	for (x of numbersArray){
		total += x;
	}
	return (total / numbersArray.length);
}
console.log("10. averageofElements: " + averageOfElements([50,100,223,3313,30]));

// 11.
function firstAvgMoreThanSecond(numbersArrayOne, numbersArrayTwo){
	let totalOne = 0;
	for (x of numbersArrayOne){
		totalOne += x;
	}
	let averageOne = totalOne / numbersArrayOne.length;

	let totalTwo = 0;
	for (x of numbersArrayTwo){
		totalTwo += x;
	}
	let averageTwo = totalTwo / numbersArrayTwo.length;

	if (averageOne > averageTwo){
		return true;
	}
}
console.log("11. averageOne is greater than averageTwo? " + firstAvgMoreThanSecond([1,3,5],[0,3,5]));

//12.
function willBuyDrink(isHotOutside, moneyInPocket){
	if (isHotOutside && (moneyInPocket > 10.50)){
		return true;}
}
console.log("12. willBuyDrink? " + willBuyDrink(true,100));

//13. My own function. SquareSum takes an array of numbers as input.
// It then squares each number, then sums all the results togeter.
// I wrote this to demonstrate how functions work, and how to work
// with arrays and loops.

function SquareSum(arrayofNumbers){
	let subTotal = 0;
	let answer = 0;
	for (x of arrayofNumbers){
		subTotal = x*x;
		answer +=subTotal;
	}
	return answer;
}
console.log("13. Square all nums in array, then sum them up: " + SquareSum([2,4,8]));
