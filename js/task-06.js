const textInput = document.querySelector("#validation-input");
const textLength = parseInt(textInput.getAttribute("data-length"));

textInput.addEventListener("blur", () => {

    if (textInput.value.length === textLength) {

        textInput.classList.remove("invalid");
        textInput.classList.add("valid");

    } else { 
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }

});

