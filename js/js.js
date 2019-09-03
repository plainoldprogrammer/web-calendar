console.log("JavaScript is running");

var months = {
	Jan: 31,
	Feb: 28,
	Mar: 31,
	Apr: 30,
	May: 31,
	Jun: 30,
	Jul: 31,
	Aug: 31,
	Sep: 30,
	Oct: 31,
	Nov: 30,
	Dec: 31
};

var currentMonth = 0;

var nextMonthButton = document.getElementById("next-month");
nextMonthButton.addEventListener("click", getNextMonth);

function getNextMonth()
{
	if (currentMonth >= 0 && currentMonth <= 10)
	{
		currentMonth++;
		console.log(Object.keys(months)[currentMonth] + ": " + months[Object.keys(months)[currentMonth]]);
	}
}

var previousMonthButton = document.getElementById("previous-month");
previousMonthButton.addEventListener("click", getPreviousMonth);

function getPreviousMonth()
{
	if (currentMonth <= 11 && currentMonth >= 1)
	{
		currentMonth--;
		console.log(Object.keys(months)[currentMonth] + ": " + months[Object.keys(months)[currentMonth]]);
	}
}

