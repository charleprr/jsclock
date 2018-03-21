var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.font ='40px Windows';
ctx.fillStyle = 'white';
ctx.lineCap = 'round';

dx = 266;
dy = 240;

function getTime(){

	Hours   = new Date().getHours();
	Minutes = new Date().getMinutes();
	Seconds = new Date().getSeconds();
	Milliseconds = new Date().getMilliseconds();

	Hours   =  (Hours < 10)  ?  Hours  = "0" + Hours   : Hours;
	Minutes = (Minutes < 10) ? Minutes = "0" + Minutes : Minutes;
	Seconds = (Seconds < 10) ? Seconds = "0" + Seconds : Seconds;
	Milliseconds = (Milliseconds < 10) ? Milliseconds  = "0" + Milliseconds : Milliseconds;
	Milliseconds = (Milliseconds < 100) ? Milliseconds = "0" + Milliseconds : Milliseconds;

	T = Hours + ":" + Minutes + ":" + Seconds + ":" + Milliseconds;

	return T
}

function clear(){
	ctx.clearRect(0,0,canvas.width, canvas.height);
}

function drawText(){
	ctx.fillStyle = 'white';
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
	ctx.strokeStyle = '#4af';
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

	// MILISECONDS
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
