// Function to get currentTime and Day
setInterval(showTime,1000);
function showTime(){
	let time= new Date();
	let hour=time.getHours();
	let min=time.getMinutes();
	let sec=time.getSeconds();
	let weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	let day = weekday[time.getDay()];
	let day_night="AM";

	if(hour>12)
	{
		hour=hour-12;
		day_night="PM";
	}
	if(hour==0)
	{
		hour=12;
		day_night="AM";
	}

	if(hour<10)
	{
		hour="0"+hour;
	}
	if(min<10)
	{
		min="0"+min;
	}
	if(sec<10)
	{
		sec="0"+sec;
	}

	let currentTime= hour+":"+min+":"+sec+ day_night;
	document.getElementById("time").innerHTML=currentTime;
	document.getElementById("day").innerHTML=day;
}
showTime();

// Function to set New Alarm
document.getElementById("save-changes").addEventListener('click', function(){
	let div=document.createElement("DIV");
	let newTime=document.getElementById("default-picker").value;
	let t=document.createTextNode(newTime);
	div.appendChild(t);
	let newList=document.getElementById("list");
	// list.insertBefore(div,list.childNodes[0]);
	newList.innerHTML=`<div id="alarm01" class="set-alarm">
	  			<span id="new-alarm" onClick="newAlarm('${newTime}')"> ${newTime}</span>
	  			<div id="settings">
		  			<div>
		  			   <input type="checkbox" id="switch${newList.length+1}"class="checkbox slider" onClick= "onToggle('${newTime}')" />
        			   <label for="switch${newList.length+1}" class="toggle" id="circle">
				   	</div>
					<div id="delete" onClick="del('${newTime}')"> <i class="fas fa-minus-square"></i></div>
				</div>
	  		</div>`+newList.innerHTML
})

// Function to delete the alarm
function del(text){
	let alarms=document.querySelectorAll("#alarm01");
	for(let i=0;i<alarms.length;i++)
	{
		if(alarms[i].innerText.includes(text))
		{
			alarms[i].remove();
		}
	}
}

// Function to Play Alarm	
setInterval(playAlarm,1000);
function playAlarm(alarmHour,alarmMins)
{
	let time=new Date();
	let currentHour=time.getHours();
	let currentMins=time.getMinutes();
	console.log("currentHour="+currentHour);
	console.log("currentMins="+currentMins);
	var alarmTime=document.querySelectorAll("#alarm01");
	console.log("alarmTime",alarmTime.length)
	for(let i=0;i<alarmTime.length;i++)
	{
		let getTime=alarmTime[i].innerText;
		let on_off=document.querySelectorAll("#alarm01")[i].querySelector("input").checked;
		console.log("getTime=",getTime,on_off);
		let res=getTime.split(":");
		console.log("res="+res);
		alarmHour=res[0];
		alarmMins=res[1];
		// console.log("getTime="+getTime);
		console.log("alarmHour="+alarmHour);
		console.log("alarmMins="+alarmMins);

		if(currentHour==alarmHour && currentMins==alarmMins && on_off)
		{
			alert("Hi!! It's time");
		}
	}
}

// Toggle Button 
var toggled=false;
function onToggle(text){
	console.log("text=",text)
	let circle = document.querySelectorAll(".slider");
	console.log(circle);
	let alarms=document.querySelectorAll("#alarm01");
	console.log(alarms);
	for(let i=0;i<alarms.length;i++){
		if(alarms[i].innerText.includes(text))
		{
			if(!toggled) {
				console.log(alarms);
				circle[i].checked=true;
        		// circle[i].style.marginLeft = "20px";
        		circle[i].style.backgroundColor="green";
         		toggled = true;
		    }
		    else {
		        // circle[i].style.marginLeft = "0px";
		        circle[i].checked=false;
		        circle[i].style.backgroundColor="white";
		        toggled = false;    
		    }
		}
	}
}


