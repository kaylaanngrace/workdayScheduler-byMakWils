var currentDayEl = document.querySelector("#currentDay");
var hourEl = document.querySelector("#hour");
var detailsEl = document.querySelector("#details");
var saveButtonEl = document.querySelector("#saveBtn");

var DateTime = luxon.DateTime;
function updateDateTime() {
    
    today = DateTime.local();
    currentDayEl.textContent = today.toLocaleString(DateTime.DATE_HUGE);

    var currentTimeEl = document.createElement("p");
    currentTimeEl.textContent = today.toLocaleString(DateTime.TIME_WITH_SECONDS);
    currentTimeEl.setAttribute("style", "padding-top:10px;")
    currentDayEl.appendChild(currentTimeEl);

    setTimeout(updateDateTime,1000);
}
updateDateTime();

// hours
var hours = [
    hour8 = {hour: '8'},
    hour9 = {hour: '9'},
    hour10 = {hour: '10'},
    hour11 = {hour: '11'},
    hour12 = {hour: '12'},
    hour13 = {hour: '13'}, 
    hour14 = {hour: '14'}, 
    hour15 = {hour: '15'}, 
    hour16 = {hour: '16'}, 
    hour17 = {hour: '17'},
    hour18 = {hour: '18'}, 
    hour19 = {hour: '19'}, 
    hour20 = {hour: '20'}, 
];






