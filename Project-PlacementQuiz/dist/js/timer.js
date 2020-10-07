let dt=new Date(new Date().setTime(0))
let time=dt.getTime();
let seconds=Math.floor((time % ( 100 * 60 )) / 1000);
let minutes = Math.floor((time % ( 100*60))/(1000*60));
let timex=0;
let mytime= setInterval(function(){
    seconds++;
    if(seconds==60){
        minutes+=1;
        seconds=0;
    }
    let formatted_seconds= seconds<10 ? `0${seconds}` : `${seconds}`;
    let formatted_minutes= minutes<10 ? `0${minutes}` : `${minutes}`;
    document.querySelector(".time").innerHTML=`${formatted_minutes}:${formatted_seconds}`;
    
},1000)