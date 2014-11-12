//This is current time task js file//

var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
if (min < 10){
	console.log(hour + ":" + "0" + min);
} else {
	console.log(hour + ":" + min);
}
