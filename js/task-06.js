const textInput = document.querySelector("#validation-input");
const validPass = document.querySelector('input[data-length = "6"]');
const passLength = validPass.dataset.length;


textInput.addEventListener("blur", () => {
    if (textInput.value.length === 6) {
        textInput.classList.add('valid');
       
    }
    else {
        textInput.classList.add('invalid');
       
    } 
});
