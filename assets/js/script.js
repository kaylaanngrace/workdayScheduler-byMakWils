var currentDayEl = document.querySelector("#currentDay");
var hourEl = document.querySelector("#hour");
var detailsEl = document.querySelector("#details");
var saveButtonEl = document.querySelector("#saveBtn");

$(document).ready(function(){
    var DateTime = luxon.DateTime;
    var today;

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
        hour8 = {hour: '8' + 'am'},
        hour9 = {hour: '9' + 'am'},
        hour10 = {hour: '10' + 'am'},
        hour11 = {hour: '11' + 'am'},
        hour12 = {hour: '12' + 'pm'},
        hour13 = {hour: '13' + 'pm'}, 
        hour14 = {hour: '14' + 'pm'}, 
        hour15 = {hour: '15' + 'pm'}, 
        hour16 = {hour: '16' + 'pm'}, 
        hour17 = {hour: '17' + 'pm'},
        hour18 = {hour: '18' + 'pm'}, 
        hour19 = {hour: '19' + 'pm'},  

    ];

    currentHourIndex = 0


    var textboxes = [
        textarea8 = JSON.parse(window.localStorage.getItem('hour8')) || [],
        textarea9 = JSON.parse(window.localStorage.getItem('hour9')) || [],
        textarea10 = JSON.parse(window.localStorage.getItem('hour10')) || [],
        textarea11 = JSON.parse(window.localStorage.getItem('hour11')) || [],
        textarea12 = JSON.parse(window.localStorage.getItem('hour12')) || [],
        textarea13 = JSON.parse(window.localStorage.getItem('hour13')) || [],
        textarea14 = JSON.parse(window.localStorage.getItem('hour14')) || [],
        textarea15 = JSON.parse(window.localStorage.getItem('hour15')) || [],
        textarea16 = JSON.parse(window.localStorage.getItem('hour16')) || [],
        textarea17 = JSON.parse(window.localStorage.getItem('hour17')) || [],
        textarea18 = JSON.parse(window.localStorage.getItem('hour18')) || [],
        textarea19 = JSON.parse(window.localStorage.getItem('hour19')) || [],
    ];
    


    $.each(hours, function(index, value) {
        $(".container").append("<div class='time-block row d-flex flex-wrap'> <div class='hour col-1 d-flex align-items-center justify-content-end' id='hour" + value.hour + "'><span>" + value.hour +  "</span></div><textarea id='details" + value.hour +"' class='col-10' type='text' placeholder='Enter Your Event Details Here'" + index + "'>" + textboxes[index] + "</textarea>"+ "<button id='saveBtn' type='submit' class='saveBtn col-1'><i class='far fa-save'></i></button></div>")

            // saveBtn click listener 
        $(".saveBtn").on("click", function () {
            
            var text = $(this).siblings("#details").val().trim();
            var time = $(this).siblings(".hour").text().trim();

            // Save text in local storage
            window.localStorage.setItem(JSON.stringify(time), text);
        })

        $("#details" + value.hour).each(function () {
            var timeAudit = parseInt(value.hour) ;
            var currentTime = parseInt(today.hour);
            console.log(timeAudit);
            console.log(currentTime)

            if (timeAudit < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeAudit === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
    
            }
        });
    });

    $(".container").append("<div class='m-2 d-flex flex-column'><button class='deleteBtn'><i class='fas fa-trash'></i>CLEAR ALL</button></div>")

    $(".deleteBtn").on("click", function(){
        location.reload()
        localStorage.clear();
    });
});


