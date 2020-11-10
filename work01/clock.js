function PrintTime() {

    var today = new Date();

    var hh = today.getHours();

    var mi = today.getMinutes();

    var ss = today.getSeconds();

    document.getElementById("result").innerHTML = hh + ":" + mi + ":" + ss;

}



var timeId = null;


function StartClock() {
    PrintTime();

    if(timeId!=null){
        console.log(timeId);
    StopClock();
    }
    timeId = setInterval(PrintTime, 1000);
}


function StopClock(){
    if(timeId!=null){
        console.log(timeId);
    clearInterval(timeId);
    timeId = null;

    }
}