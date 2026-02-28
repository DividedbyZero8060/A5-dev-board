const date = new Date();
console.log(date);
function createHexColor() {
    let hex = "#";
    const hexChars = "0123456789ABCDEF";
    for(let i =0; i < 6; i++) {
        let myColors = Math.floor(Math.random() * hexChars.length);
        hex += hexChars[myColors];
    }
    return hex;
}