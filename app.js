const day = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

const dateElem = document.getElementById("date");
const timeElem = document.getElementById("time");

setInterval(() => {
	const date = new Date();

	// Update time
	let hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();

	if (hour < 10) {
		hour = "0" + hour;
	}

	if (min < 10) {
		min = "0" + min;
	}

	if (sec < 10) {
		sec = "0" + sec;
	}

	timeElem.innerHTML = hour + ":" + min + ":" + sec;

	// Update date
	let dateNum = date.getDate();
	let monthNum = date.getMonth() + 1;

	if (dateNum < 10) {
		dateNum = "0" + dateNum;
	}

	if (monthNum < 10) {
		monthNum = "0" + monthNum;
	}

	dateElem.innerHTML =
		day[date.getDay() - 1] +
		"  " +
		dateNum +
		"." +
		monthNum +
		"." +
		date.getFullYear();
});

let black = false;

timeElem.onclick = () => {
	if (black) {
		document.documentElement.style.setProperty("--background", "var(--bg-dark)");
	} else {
		document.documentElement.style.setProperty("--background", "var(--bg-black)");
	}

	black = !black;
};
