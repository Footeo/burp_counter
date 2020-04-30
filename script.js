const inputName = document.querySelector("#input-name");
const culpritName = document.querySelector("#culprit");
const culpritButton = document.querySelector("#enter-button");
const toHide = document.querySelector(".to-hide");

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


//add event listner for clicking the culprit button
culpritButton.addEventListener('click',nameEntered,false);