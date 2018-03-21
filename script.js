var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.font ='40px Windows';
ctx.fillStyle = '#FFF';
ctx.lineCap = 'round';

dx = 266;
dy = 240;

function getTime(){

	hours = new Date().getHours();
	minutes = new Date().getMinutes();
	seconds = new Date().getSeconds();
	milliseconds = new Date().getMilliseconds();

	hours = (hours < 10) ? hours = "0" + hours : hours;
	minutes = (minutes < 10) ? minutes = "0" + minutes : minutes;
	seconds = (seconds < 10) ? seconds = "0" + seconds : seconds;
	milliseconds = (milliseconds < 10) ? milliseconds  = "0" + milliseconds : milliseconds;
	milliseconds = (milliseconds < 100) ? milliseconds = "0" + milliseconds : milliseconds;

	T = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;

	return T
}

function clear(){
	ctx.clearRect(0,0,canvas.width, canvas.height);
}

function drawText(){
	ctx.fillStyle = '#FFF';
	ctx.fillText(getTime(), dx,dy);
}

function drawClock(){

	cx = canvas.width/2;
	cy = canvas.height/2;

	ctx.beginPath();
	ctx.arc(cx, cy, 40, 0, Math.PI * 2);
	ctx.fillStyle = '#282828';
	ctx.fill();
	ctx.closePath();

	// HOURS
	xHours = cx + Math.sin(Math.PI+(new Date().getHours() / 12) * 2 * Math.PI * -1)*100;
	yHours = cy + Math.cos(Math.PI+(new Date().getHours() / 12) * 2 * Math.PI * -1)*100;

	ctx.beginPath();
	ctx.strokeStyle = '#4AF';
	ctx.lineWidth = 12;
	ctx.moveTo(cx,cy);
	ctx.lineTo(xHours, yHours);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(cx, cy, 4, 0, Math.PI * 2);
	ctx.fillStyle = '#333';
	ctx.fill();
	ctx.closePath();

	// MINUTES
	xMinutes = xHours + Math.sin(Math.PI+(new Date().getMinutes() / 60) * 2 * Math.PI * -1)*80;
	yMinutes = yHours + Math.cos(Math.PI+(new Date().getMinutes() / 60) * 2 * Math.PI * -1)*80;

	ctx.beginPath();
	ctx.strokeStyle = '#af2';
	ctx.lineWidth = 10;
	ctx.moveTo(xHours,yHours);
	ctx.lineTo(xMinutes, yMinutes);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(xHours, yHours, 3, 0, Math.PI * 2);
	ctx.fillStyle = '#333';
	ctx.fill();
	ctx.closePath();

	// SECONDS
	xSeconds = xMinutes + Math.sin(Math.PI+(new Date().getSeconds() / 60 + new Date().getMilliseconds() / 60000) * 2 * Math.PI * -1)*60;
	ySeconds = yMinutes + Math.cos(Math.PI+(new Date().getSeconds() / 60 + new Date().getMilliseconds() / 60000) * 2 * Math.PI * -1)*60;

	ctx.beginPath();
	ctx.strokeStyle = '#fa1';
	ctx.lineWidth = 8;
	ctx.moveTo(xMinutes, yMinutes);
	ctx.lineTo(xSeconds, ySeconds);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(xMinutes, yMinutes, 2, 0, Math.PI * 2);
	ctx.fillStyle = '#333';
	ctx.fill();
	ctx.closePath();

	// MILLISECONDS
	xMiliseconds = xSeconds + Math.sin(Math.PI+(new Date().getMilliseconds() / 1000) * 2 * Math.PI * -1)*40;
	yMiliseconds = ySeconds + Math.cos(Math.PI+(new Date().getMilliseconds() / 1000) * 2 * Math.PI * -1)*40;

	ctx.beginPath();
	ctx.strokeStyle = '#f44';
	ctx.lineWidth = 6;
	ctx.moveTo(xSeconds, ySeconds);
	ctx.lineTo(xMiliseconds, yMiliseconds);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(xSeconds, ySeconds, 1, 0, Math.PI * 2);
	ctx.fillStyle = '#333';
	ctx.fill();
	ctx.closePath();
}

setInterval(function(){
	if((new Date().getHours() > 3 && new Date().getHours() < 9) || (new Date().getHours() > 15 && new Date().getHours() < 21)){
		dy = 240;
	}else{
		dy = 400;
	}
	clear();
	drawText();
	drawClock();
},1);
