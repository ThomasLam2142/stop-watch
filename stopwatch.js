let appState = "off";
let currentTime = 0;
let currentMillisec = 0;
const spanElement = document.getElementById("displayTime");
const milliSec = document.getElementById("displayMilli");




function startClick(){
    console.log("start button clicked");
    appState = "on";

}

function stopClick(){
    console.log("stop button clicked");
    appState = "off";
}

function resetClick(){
    console.log("reset button clicked");
    currentTime = 0;
    currentMillisec = 0;
    spanElement.textContent = currentTime.toString();
    milliSec.textContent = currentMillisec.toString();
}


// Define your function
function clockUpdate() {
    console.log('This function will be called every 1 seconds.');
    if (appState == "on"){
        console.log("appState is on");
        currentTime += 1;
    }else{
        console.log("appState is off");
    }

    console.log(currentTime);
    spanElement.textContent = currentTime.toString();
    
}


function clockUpdateMilli() {
    console.log('This function will be called every 3 seconds.');
    if (appState == "on"){
        console.log("appState is on");
        currentMillisec += 1;
    }else{
        console.log("appState is off");
    }

    if (currentMillisec>99){
        currentMillisec = 0;
    }

    console.log(currentMillisec);
    milliSec.textContent = currentMillisec.toString();

}
  
// Call the function every 1000 milli
setInterval(clockUpdate, 1000);
setInterval(clockUpdateMilli, 10);