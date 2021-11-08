const inputRange = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

inputRange.addEventListener("input", setOutput);

function setOutput() {
    span.style.fontSize = inputRange.value + "px"; 
}


