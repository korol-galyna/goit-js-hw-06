
const textInput = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");


textInput.addEventListener("input", () => {
    
    const fontSize = textInput.value;
    
    textSize.style.fontSize = fontSize + "px";

  });