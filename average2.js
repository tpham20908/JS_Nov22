var totalGrade = 0;
var grade, count, avg;
var totalStudent = 5;

for (count = 1; count <= totalStudent; count++) {
	grade = window.prompt("Enter grade of student #" + count);
	totalGrade += parseInt(grade);
	document.writeln(grade);
	document.writeln();
}

avg = totalGrade / totalStudent;

document.writeln("Total Grade: " + totalGrade);
document.writeln();
document.writeln("Total Student: " + totalStudent);
document.writeln();
document.writeln("Average grade: " + avg.toFixed(2));