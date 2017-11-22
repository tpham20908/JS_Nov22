var totalGrade = 0;
var grade, count, avg;

for (count = 1; count <= 10; count++) {
	grade = window.prompt("Enter grade: ");
	totalGrade += parseInt(grade);
}

avg = totalGrade / (count - 1);

document.writeln(totalGrade);
document.writeln(count);
document.writeln(avg);