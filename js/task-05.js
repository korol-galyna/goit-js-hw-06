const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
    const inputValue = textInput.value;

    if (inputValue === '') {
    textOutput.textContent = 'Anonymous';
} else { 
    textOutput.textContent = inputValue;
}
});

