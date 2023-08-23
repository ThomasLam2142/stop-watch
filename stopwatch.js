let appState = "off";
let currentTime = 0;
const spanElement = document.getElementById("displayTime");




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
    spanElement.textContent = currentTime.toString();
}


// Define your function
function clockUpdate() {
    console.log('This function will be called every 3 seconds.');
    if (appState == "on"){
        console.log("appState is on");
        currentTime += 1;
    }else{
        console.log("appState is off");
    }

    console.log(currentTime);
    spanElement.textContent = currentTime.toString();

}
  
// Call the function every 1000 milli
setInterval(clockUpdate, 1000);
  