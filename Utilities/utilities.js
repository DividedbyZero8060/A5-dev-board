
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