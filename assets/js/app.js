let cl=console.log;



// =======================
// BASIC ARITHMETIC
// =======================

// 1. Subtract b from a. → Example: subtract(10, 4) → 6

     function  subtract (a,b){
       return a-b;
	 }
cl(subtract(10,4))	 




// 2. Multiply two numbers. → Example: multiply(3, 5) → 15
function multiply(a,b){
	return a*b;
}
cl(multiply(3,5))
        
// 3. Divide a by b. → Example: divide(20, 4) → 5
   function divide(a,b){
	   return a/b;
   }
   cl(divide(20,4))

// 4. Find the remainder of a divided by b. → Example: modulus(10, 3) → 1
function modulus(a,b){
	return a%b;
}
cl(modulus(10,3))

// 5. Return the square of a number. → Example: square(5) → 25
function square(a){
	return a*a;
}
cl(square(5))


// 6. Return the cube of a number. → Example: cube(3) → 27
function cube(a){
	return a*a*a;
}
cl(cube(3))


// 7. Calculate the average of two numbers. → Example: average(6, 8) → 7
function average(a,b){
	return (a+b)/2;
}
cl(average(6,8))


// 8. Increase a number by 10%. → Example: increaseByTenPercent(100) → 110
function increaseByTenPercent(a){
	return a+(a*10/100);
}
cl(increaseByTenPercent(100))
	

// 9. Convert hours to minutes. → Example: hoursToMinutes(2) → 120
function hoursToMinutes(hours){
	return hours*60;
}
cl(hoursToMinutes(2))

// 10. Convert minutes to seconds. → Example: minutesToSeconds(3) → 180
function minutesToSeconds(minutes){
	return minutes*60;
}
cl(minutesToSeconds(3))





// =======================
// STRING OPERATIONS
// =======================

// 11. Join two strings with a space. → Example: concatWithSpace("Hello", "World") → "Hello World"
function concatWithSpace(a,b){
	return a+" " +b;
}
cl(concatWithSpace("Hello"," World"))

// 12. Return the first letter of a string. → Example: firstLetter("Apple") → "A"
function firstLetter(a){
	return a[0];
}
cl(firstLetter("Apple"))

// 13. Return the last letter of a string. → Example: lastLetter("Banana") → "a"
function lastLetter(str){
	return (str[str.length -1]);
}
cl(lastLetter("Banana"))


// 14. Return the length of a string. → Example: stringLength("Hello") → 5
function stringLength(str)
{
	return str.length;
}
cl(stringLength("Hello"))	
	
	
	
	
// 15. Convert a string to uppercase. → Example: toUpperCase("hello") → "HELLO"
function toUpperCase(str){
	return str.toUpperCase();
}
cl(toUpperCase("hello"))



// 16. Convert a string to lowercase. → Example: toLowerCase("HELLO") → "hello"
function toLowerCase(str){
	return str.toLowerCase();
}
cl(toLowerCase("HELLO"))


// 17. Reverse a string. → Example: reverseString("cat") → "tac"

// 18. Repeat a string three times. → Example: repeatThreeTimes("Hi") → "HiHiHi"
function  repeatThreeTimes(str){
	return str.repeat(3);
}
cl( repeatThreeTimes("Hi"))
	

// 19. Check if a string contains "JS". → Example: containsJS("I love JS") → true

// 20. Remove the first character from a string. → Example: removeFirstChar("Hello") → "ello"
function removeFirstChar(str){
	return str.slice(1);
}
cl(removeFirstChar("Hello"))




// =======================
// LOGICAL TASKS
// =======================


// 21. Check if a number is even. → Example: isEven(4) → true
function isEven(num){
	return num%2==0;
}
cl(isEven(4))

// 22. Check if a number is odd. → Example: isOdd(7) → true
function isOdd(num){
	return num%2!==0;
}
cl(isOdd(7))

// 23. Check if a number is positive. → Example: isPositive(3) → true
function  isPositive(num){
	return num>0;
}
cl( isPositive(3))

// 24. Check if a number is negative. → Example: isNegative(-5) → true
function isNegative(num){
	return num<0;
}
cl(isNegative(-5))


// 25. Check if two numbers are equal. → Example: isEqual(5, 5) → true
function  isEqual(a,b){
	return a==b;
}
cl( isEqual(5,5))

// 26. Check if one number is greater than another. → Example: isGreater(10, 5) → true
function isGreater(a,b){
	return a>b;
}
cl(isGreater(10,5))

// 27. Return true if both values are true. → Example: bothTrue(true, true) → true
function bothTrue(a,b){
	return a&&b;
}
cl(bothTrue(true,true))

// 28. Return true if at least one value is true. → Example: eitherTrue(true, false) → true
function eitherTrue(a,b){
	return a||b;
}
cl(eitherTrue(true,false))

// 29. Return the larger of two numbers. → Example: max(5, 12) → 12
function max(a,b){
	return a>b? a:b;
}
cl(max(5,12))

// 30. Return the smaller of two numbers. → Example: min(8, 4) → 4
function min(a,b){
	return a<b? a:b;
}
cl(min(8,4))




// =======================
// ARRAY OPERATIONS
// =======================


// 31. Return the first element of an array. → Example: firstElement([10, 20, 30]) → 10
function firstElement(arr){
	return arr[0];
}
cl(firstElement([10,20,30]))


