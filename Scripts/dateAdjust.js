const date = new Date();
const d_arr = date.toString().split(" ");
const day = d_arr[0];
const full_date = `${d_arr[1]} ${d_arr[2]} ${d_arr[3]}`;

document.getElementById("day-disp").innerText = day;
document.getElementById("date-disp").innerText = full_date;
const dateDisplays = document.getElementsByClassName("date-display");
for(let i = 0; i < dateDisplays.length; i++) {
    dateDisplays[i].innerText = full_date;
}
