const inputName = document.querySelector("#input-name");
const culpritName = document.querySelector("#culprit");
const culpritButton = document.querySelector("#enter-button");
const toHide = document.querySelector(".to-hide");
const newButton = document.querySelector("#new-button");

//function to read the input in the Enter name  box
function nameEntered(){
    let textEntered = inputName.value;
    culpritName.innerHTML = textEntered; //puts entered text at front of counter string
    setTimeout(hideEntry,100); //delays the function call by half a second
}

//hide the entry line, change the class to a hidden class.
function hideEntry(){
    toHide.classList.remove("to-hide");
    toHide.classList.add("hidden");
}
function showEntry(){
    toHide.classList.add("to-hide");
    toHide.classList.remove("hidden");
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; //scrolls to the top of the page
}

//add event listner for clicking the culprit button (and the new entry button)
culpritButton.addEventListener('click',nameEntered,false);
newButton.addEventListener('click',showEntry,false);