document.getElementById("theme-btn").addEventListener("click",function(event){
    event.preventDefault();
    const body = document.getElementById("body");
    if(body.classList.length !== 0) {
        body.classList.remove("white-bg");
    }
    const newColor= createHexColor();
    console.log(newColor);
    document.getElementById("body").style.backgroundColor = newColor;

})
