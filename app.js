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

let date = new Date();

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

setInterval(() => {
	date = new Date();

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
});
