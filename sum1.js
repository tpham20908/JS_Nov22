 //create an addition program that prompts users to enter two numbers, 
 //then returns the sum

 var num, sum = 0;

for (var i = 0; i < 2; i++) {
	num = parseInt(window.prompt("Enter number #" + (i + 1)));
	sum += parseInt(num);
}

//document.writeln("Total of the numbers entered is: " + sum);
alert("Total of the numbers entered is: " + sum);
 
