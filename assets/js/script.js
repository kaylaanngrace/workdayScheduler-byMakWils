var currentDayEl = document.querySelector("#currentDay");
var hourEl = document.querySelector("#hour");
var detailsEl = document.querySelector("#details");
var saveButtonEl = document.querySelector("#saveBtn");

function updateDateTime() {
    var DateTime = luxon.DateTime;

    today = DateTime.local();
    currentDayEl.textContent = today.toLocaleString(DateTime.DATE_HUGE);

    var currentTimeEl = document.createElement("p");
    currentTimeEl.textContent = today.toLocaleString(DateTime.TIME_WITH_SECONDS);
    currentTimeEl.setAttribute("style", "padding-top:10px;")
    currentDayEl.appendChild(currentTimeEl);

    setTimeout(updateDateTime,1000);
}
updateDateTime();





