const inputName = document.querySelector("#input-name");
const culpritName = document.querySelector("#culprit");
const culpritButton = document.querySelector("#enter-button");
const toHide = document.querySelector(".to-hide");
const newButton = document.querySelector("#new-button");
const burpButton = document.querySelector("#burp-button");
const counter = document.querySelector("#counter");
const hide = document.querySelector(".hide");
const addText = document.querySelector("#add-text");

//function to clear input field
// function inputClear() {

// }

//function to read the input in the Enter name box
function nameEntered(){
    let textEntered = inputName.value;
    culpritName.innerHTML = textEntered; //puts entered text at front of counter string
    setTimeout(hideEntry,100); //delays the function call by half a second
}

//hide the entry line, change the class to a hidden class. (After hitting enter function)
function hideEntry(){
    toHide.classList.remove("to-hide");
    toHide.classList.add("hidden");
}

//Reset webpage button
function showEntry(){
    toHide.classList.add("to-hide");
    toHide.classList.remove("hidden");
    counter.innerHTML = 0;
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; //scrolls to the top of the page
    inputName.value = ""; //resets the input field
    culpritName.innerHTML = "_____ ";  //resets the name field to underscores
    i=1; //resets counter value

}

//function to count up on clicking the burp button (and release sound)
    let i=1;
function burp(){
    hide.play(); //plays the audio file
    counter.innerHTML = i++;
    if (i>10){
        addText.innerHTML = "Slow down big fella!";
    }
    if (i>20) {
        addText.innerHTML = "Had too many Tacos?";
    }
    if (i>35) {
        addText.innerHTML = "Next thing you know there'll be farts too!";
    }
    if (i>50) {
        addText.innerHTML = "Shattering records!";
    }
    if (i>100) {
        addText.innerHTML = "Now that's just disgusting";
    }
}

//Enter event listener
inputName.addEventListener('keyup', function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      culpritButton.click();
    }
});

//add event listner for clicking the culprit button (and the new entry button)
culpritButton.addEventListener('click',nameEntered,false);
newButton.addEventListener('click',showEntry,false);
burpButton.addEventListener('click',burp,false);