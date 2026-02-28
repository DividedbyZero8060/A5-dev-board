
document.getElementById("clear-history-btn").addEventListener("click", event => {
    let btn_list = document.getElementsByClassName("btn-active");
    for(let i = 0; i < btn_list.length; i++) {
        btn_list[i].classList.remove("bg-gray-300");
        btn_list[i].classList.add("bg-blue-700");
        btn_list[i].disabled = false;
    }

    let t_count = 6;
    let n_count = 23;
    updateTextByID("tasks-count", t_count);
    updateTextByID("nav-count", n_count);
    document.getElementById("sidebar").innerHTML = "";
    alert("History Cleared and Tasks Reset Successfully");
})