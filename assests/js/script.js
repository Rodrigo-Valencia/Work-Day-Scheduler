var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

function timeBlock() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    });
};

$(".saveBtn").click(function(event) {
    console.log(event.target.value);
    // event.preventDefault();
    const inputId = this.value;
    const txtArea = document.getElementById(inputId);
    console.log($(this).siblings(".txt").val());
    var time = $(this).siblings(".hour").text();
    console.log(time);
    var plan = $(this).siblings(".txt").val();

    localStorage.setItem(time, plan);
});

function usePlanner () {
    $(".hour").each(function() {
        var currHour = $(this).text();

        var currPlan = localStorage.getItem(currHour);
        console.log(currHour);
        console.log(currPlan);
        if(currPlan !== null) {
            $(this).siblings(".txt").val(currPlan);
        }
    });
}



timeBlock();
usePlanner();