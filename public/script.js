

//document.getElementById("text").innerText = daysUntilChristmas

function daysUntilChristmas(){
	const currentDate = new Date();
	console.log(currentDate);
	const christmasTimeStamp = Date.parse("2022-12-25");
	const christmas = new Date(christmasTimeStamp);
	const msUntilChristmas = christmas - currentDate;
	
	const daysUntilChristmas = msUntilChristmas / 24 / 60 / 60 / 1000;
	const roundedDaysUntilChristmas = Math.floor(daysUntilChristmas);

	const hoursUntilChristmas = (daysUntilChristmas - roundedDaysUntilChristmas) * 24;
	const roundedHoursUntilChristmas = Math.floor(hoursUntilChristmas);

	const minutesUntilChristmas = (hoursUntilChristmas - roundedHoursUntilChristmas) * 60;
	const roundedMinutesUntilChristmas = Math.floor(minutesUntilChristmas);

	const secondsUntilChristmas = (minutesUntilChristmas - roundedMinutesUntilChristmas) * 60;
	const roundedSecondsUntilChristmas = Math.floor(secondsUntilChristmas);




	//const hoursUntilChristmas = Math.floor(daysUntilChristmas / 24/ 60 / 60);
	console.log(roundedDaysUntilChristmas + " days");
	console.log(roundedHoursUntilChristmas + " hours");
	console.log(roundedMinutesUntilChristmas + " minutes");
	console.log(roundedSecondsUntilChristmas + " seconds left until CHRISTMAS!");

	//const jorah = document.getElementById("days"); //hey html, get me the element with the id text, 
	//jorah.innerText = daysUntilChristmas  // all the information about the element p is saved to the variable paragraph (*variable could be called anything doesn't have to be paragraph)	

	document.getElementById("days").innerText = roundedDaysUntilChristmas + " days";
	document.getElementById("hours").innerText = roundedHoursUntilChristmas + " hours";
	document.getElementById("minutes").innerText = roundedMinutesUntilChristmas + " minutes";
	document.getElementById("seconds").innerText = roundedSecondsUntilChristmas + " seconds until CHRISTMAS!!!";
	 //does the same thing as the above commented out lines

}




setInterval(daysUntilChristmas,1000)








/* code for later*/
/*
function getDaysInMonth(year, month) {
  const dateWithTheLastDayOfThisMonth = new Date(year, month, 0);
  const daysThisMonth = dateWithTheLastDayOfThisMonth.getDate();		// 31
  return daysThisMonth;
}



const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getYear() + 1900;



getDaysInMonth(currentYear, currentMonth);


if(currentDay <25){
	console.log("It's before the 25!");
} else {
	console.log("It might be the 25...or it might be later");
}*/