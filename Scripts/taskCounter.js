// let active_buttons = document.getElementsByClassName("btn-active");
// let p = active_buttons[1].parentNode.parentNode;
// let c = p.getElementsByTagName("h1")[0].innerText;
// console.log(c);

let t_count = getIntegerFromTextByID("tasks-count");
let n_count = getIntegerFromTextByID("nav-count");

document.getElementById("cards-container").addEventListener("click", event => {
    
    if(event.target.matches(".btn-active")) {
        let p = event.target.parentNode.parentNode;
        let c = p.getElementsByTagName("h1")[0].innerText;
        if(t_count > 0) {
            t_count--;
        }
        n_count++;
        updateTextByID("tasks-count", t_count);
        updateTextByID("nav-count", n_count);
        event.target.classList.remove("bg-blue-700");
        event.target.classList.add("bg-gray-300");
        event.target.disabled = true;

        document.getElementById("sidebar").innerHTML += `
        <p>You have completed The task ${c} at ${new Date().toLocaleTimeString()}</p>
        `;

        alert("Board Updated Successfully");

    }

    if(t_count === 0) {
        alert("Congratulations! You have completed all the tasks!");
    }

})