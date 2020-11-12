function Timer(consoleUI) {   
    // properties
    this.consoleUI = consoleUI;
    this.timerId = null;

    // methods
    this.update = function () {
        var today = new Date(); 
    
        var hh = today.getHours();
        var mi = today.getMinutes();
        var ss = today.getSeconds();

        console.log(this.consoleUI)
        this.consoleUI.innerHTML = hh + ":" + mi + ":" + ss;
    }

    this.start = function() {
        
        if (this.timerId) {
            this.stop();    
        }
        
        this.timerId = setInterval(this.update.bind(this), 1000)
        
    }

    this.stop = function() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
}

var htmlElement = document.getElementById("result");
var htmlElement2 = document.getElementById("result2");

var stopwatch = new Timer(htmlElement);   
var stopwatch2 = new Timer(htmlElement2);   

function StartClock(){
    stopwatch.start();
    stopwatch2.start();
}


function StopClock(){
    stopwatch.stop();
    stopwatch2.stop();
}
