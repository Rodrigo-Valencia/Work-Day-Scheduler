moment(Date);
$("#currentDay").text(moment().format('LLLL'));

var currentTime = moment();
currentTime = currentTime.startOf("hour");

var beforeTime = moment().startOf('day').add(9, "hours");

// Time blocks
// 9am
var time1 = beforeTime.add(0, "h");
time1 = time1.format('hh:mm A');
$(".block1").text(time1);

// 10am
var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh:mm A');
$(".block2").text(time2);

// 11am
var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh:mm A');
$(".block3").text(time3);

// 12am
var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh:mm A');
$(".block4").text(time4);

// 1pm
var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh:mm A');
$(".block5").text(time5);

// 2pm
var time6 = beforeTime.add(1, "h");
time6 = time6.format('hh:mm A');
$(".block6").text(time6);

// 3pm
var time7 = beforeTime.add(1, "h");
time7 = time7.format('hh:mm A');
$(".block7").text(time7);

// 4pm
var time8 = beforeTime.add(1, "h");
time8 = time8.format('hh:mm A');
$(".block8").text(time8);

// 5pm
var time9 = beforeTime.add(1, "h");
time9 = time9.format('hh:mm A');
$(".block9").text(time9);

function timeBlocks() {
    time1 = moment().startOf('day').add(9, "hours");
    currentTime = currentTime.startOf("hour");

    if (currentTime.isAfter(time1)) {
        $(".time-9").addClass("past");
    } 
    else if (currentTime.isBefore(time1)) {
        $(".time-9").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".time-9").addClass("present");
    };

    time2 = moment().startOf('day').add(10, "hours");

    if (currentTime.isAfter(time2)) {
        $(".time-10").addClass("past");
    } 
    else if (currentTime.isBefore(time2)) {
        $(".time-10").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".time-10").addClass("present");
    };

    time3 = moment().startOf('day').add(11, "hours");

    if (currentTime.isAfter(time3)) {
        $(".time-11").addClass("past");
    } 
    else if (currentTime.isBefore(time3)) {
        $(".time-11").addClass("future");
    }
    else if (currentTime.isSame(time3)) {
        $(".time-11").addClass("present");
    };

    time4 = moment().startOf('day').add(12, "hours");

    if (currentTime.isAfter(time4)) {
        $(".time-12").addClass("past");
    } 
    else if (currentTime.isBefore(time2)) {
        $(".time-12").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".time-12").addClass("present");
    };

    time5 = moment().startOf('day').add(13, "hours");

    if (currentTime.isAfter(time5)) {
        $(".time-1").addClass("past");
    } 
    else if (currentTime.isBefore(time5)) {
        $(".time-1").addClass("future");
    }
    else if (currentTime.isSame(time5)) {
        $(".time-1").addClass("present");
    };

    time6 = moment().startOf('day').add(14, "hours");

    if (currentTime.isAfter(time6)) {
        $(".time-2").addClass("past");
    } 
    else if (currentTime.isBefore(time6)) {
        $(".time-2").addClass("future");
    }
    else if (currentTime.isSame(time6)) {
        $(".time-2").addClass("present");
    };

    time7 = moment().startOf('day').add(15, "hours");

    if (currentTime.isAfter(time7)) {
        $(".time-3").addClass("past");
    } 
    else if (currentTime.isBefore(time7)) {
        $(".time-3").addClass("future");
    }
    else if (currentTime.isSame(time7)) {
        $(".time-3").addClass("present");
    };

    time8 = moment().startOf('day').add(16, "hours");

    if (currentTime.isAfter(time8)) {
        $(".time-4").addClass("past");
    } 
    else if (currentTime.isBefore(time8)) {
        $(".time-4").addClass("future");
    }
    else if (currentTime.isSame(time8)) {
        $(".time-4").addClass("present");
    };

    time9 = moment().startOf('day').add(17, "hours");

    if (currentTime.isAfter(time9)) {
        $(".time-5").addClass("past");
    } 
    else if (currentTime.isBefore(time9)) {
        $(".time-5").addClass("future");
    }
    else if (currentTime.isSame(time9)) {
        $(".time-5").addClass("present");
    };
}

timeBlocks();
var time = [9, 10, 11, 12, 1, 2, 3, 4, 5];
for(var i = 0; i < time.length; i++) {
    var dataHour = localStorage.getItem(time[i]);
    $(".time-" + time[i]).val(dataHour);
}

$(".saveBtn").click(function (event) {
    event.preventDefault();
    var formValue = $(this).siblings(".block-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});