

//document.getElementById("text").innerText = daysUntilChristmas

function daysUntilChristmas(){
	const currentDate = new Date();
	//console.log(currentDate);
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
	// console.log(roundedDaysUntilChristmas + " days");
	// console.log(roundedHoursUntilChristmas + " hours");
	// console.log(roundedMinutesUntilChristmas + " minutes");
	// console.log(roundedSecondsUntilChristmas + " seconds left until CHRISTMAS!");

	//const jorah = document.getElementById("days"); //hey html, get me the element with the id text, 
	//jorah.innerText = daysUntilChristmas  // all the information about the element p is saved to the variable paragraph (*variable could be called anything doesn't have to be paragraph)	

	document.getElementById("days").innerText = roundedDaysUntilChristmas + " days";
	document.getElementById("hours").innerText = roundedHoursUntilChristmas + " hours";
	document.getElementById("minutes").innerText = roundedMinutesUntilChristmas + " minutes";
	document.getElementById("seconds").innerText = roundedSecondsUntilChristmas + " seconds";
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


let snowflakes = [];

// generate snowflake data

for (let i = 0; i < 100; i++) {
	const snowflake = {
		x: Math.random() * window.innerWidth,
		y: 0,
		speed: 3 + Math.random() * 2,
		opacity: 0.2 + Math.random() * 0.8,
		color: "white",
		size: 5 + Math.random() * 5,
	}
	snowflakes.push(snowflake);
};

// create snowflake divs on screen




// update the snowflake divs we created every 50ms

for(let i = 0; i <snowflakes.length; i++){
	const snowflakeDiv = document.createElement("div");
	snowflakeDiv.className = "snowflake";
	snowflakeDiv.id = i;
	snowflakeDiv.style.top = snowflakes[i].y + "px";
	snowflakeDiv.style.left = snowflakes[i].x + "px";
	snowflakeDiv.style.opacity = snowflakes[i].opacity;
	snowflakeDiv.style.height = snowflakes[i].size + "px";
	snowflakeDiv.style.width = snowflakes[i].size + "px";

	document.body.appendChild(snowflakeDiv);
}

// set up a loop



function gameLoop() {
	const babyFlake = document.getElementById("babyFlake");
	
	for(let i = 0; i <snowflakes.length; i++){
		snowflakes[i].y = snowflakes[i].y + snowflakes[i].speed;

		const snowflakeDiv = document.getElementById(i);
		snowflakeDiv.style.top = snowflakes[i].y + "px";
	

		if (snowflakes[i].y>window.innerHeight){
			snowflakes[i].x = Math.random() * window.innerWidth;
			snowflakes[i].y = 0;
		}
	}
	
	// babyFlake.style.top = y + "px";  // 10 + "px" --> "10px" 
	// babyFlake.style.left = x + "px";
}

setInterval(gameLoop, 40);