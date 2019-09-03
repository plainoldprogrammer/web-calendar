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
		document.getElementById("month-name").innerHTML = Object.keys(months)[currentMonth];

		updateCalendar(months[Object.keys(months)[currentMonth]]);
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
		document.getElementById("month-name").innerHTML = Object.keys(months)[currentMonth];

		updateCalendar(months[Object.keys(months)[currentMonth]]);
	}
}

function updateCalendar(days)
{
	console.log("Update to: " + days);

	if (days === 28)
	{
		var elements = document.getElementsByClassName("rTableRow");
		elements[4].getElementsByClassName("rTableCell")[2].innerHTML = "";
		elements[4].getElementsByClassName("rTableCell")[1].innerHTML = "";
		elements[4].getElementsByClassName("rTableCell")[0].innerHTML = "";
		elements[4].style.height = "109.33px";
	}
	else if (days === 31)
	{
		var elements = document.getElementsByClassName("rTableRow");
		elements[4].getElementsByClassName("rTableCell")[0].innerHTML = "29";
		elements[4].getElementsByClassName("rTableCell")[1].innerHTML = "30";
		elements[4].getElementsByClassName("rTableCell")[2].innerHTML = "31";
	}
	else if (days === 30)
	{
		var elements = document.getElementsByClassName("rTableRow");
		elements[4].getElementsByClassName("rTableCell")[0].innerHTML = "29";
		elements[4].getElementsByClassName("rTAbleCell")[1].innerHTML = "30";
		elements[4].getElementsByClassName("rTableCell")[2].innerHTML = "";
	}
}

