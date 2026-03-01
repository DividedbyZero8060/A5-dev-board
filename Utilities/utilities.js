
function createHexColor() {
    let hex = "#";
    const hexChars = "0123456789ABCDEF";
    for(let i =0; i < 6; i++) {
        let myColors = Math.floor(Math.random() * hexChars.length);
        hex += hexChars[myColors];
    }
    return hex;
}

function getIntegerFromTextByID(id) {
    const text = document.getElementById(id).innerText;
    const num = parseInt(text);
    return num;
}

function updateTextByID(id,newText) {
    document.getElementById(id).innerText = newText;
}

function createElementByID(id, elementType, text) {
    let n = document.createElement(elementType);
    n.innerText = "You have completed the task " + text  + " at " + new Date().toLocaleTimeString();
    document.getElementById(id).appendChild(n);
    let q = document.getElementById(id).lastChild;
    q.style.backgroundColor = "#F4F7FF";
    q.style.padding = "0.5rem";
    q.style.borderRadius = "0.5rem";
    q.style.marginBottom = "1rem";
}
