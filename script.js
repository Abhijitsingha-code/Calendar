//Month
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthEl = document.querySelector(".date h1");
const month = new Date().getMonth();
monthEl.innerHTML = months[month];

//Day&Date
const dateEl = document.querySelector(".date p");
dateEl.innerHTML = new Date().toDateString();

//Date
const firstDate = new Date(new Date().getFullYear(), month, 0).getDay()+1;
console.log(firstDate)
const lastDate = new Date(new Date().getFullYear(), month + 1, 0).getDate();
const dateDivEl = document.querySelector(".days");
const today = new Date().getDate();
let day="";

if(firstDate!=7){
    for(let i = firstDate;  i>0 ;i--){
        day+=`<div class="empty"></div>`
    }
}
for (let i = 1; i <= lastDate; i++) {
  if (i == today) {
    day += `<div class="today">${i}</div>`;
  } else {
    day += `<div>${i}</div>`;
  }
}
dateDivEl.innerHTML = day;
