let appState = "off";
let currentTime = 0;


function startClick(){
    console.log("start button clicked");
    appState = "on"

}

function stopClick(){
    console.log("stop button clicked")
}

function resetClick(){
    console.log("reset button clicked")
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
  }
  
  // Call the function every 3000 milliseconds (3 seconds)
  setInterval(clockUpdate, 1000);
  