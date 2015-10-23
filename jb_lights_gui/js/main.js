$(document).ready(function () {

    setEvents();

    function setEvents() {
        $("#btnOnOff").click(toggleOnOff);
        $("#selColor").change(colorChange);
    }

    function toggleOnOff() {
        if ($("#btnOnOff").text() === "Turn On") {
            $("#btnOnOff").text("Turn Off");
            callWebService_ON();
        } else {
            $("#btnOnOff").text("Turn On");
            callWebService_OFF();
        }
    }

    function colorChange(event) {
        var color = $("#selColor").val();
        callWebService_COLOR(color);
    }

    function callWebService_OFF() {
        var url = "web_service.php?command=TURN_OFF" ;

        var settings = {
            dataType: "json",
            success: function (response) {
                alert("SUCCESS");
                console.log(response);
            },
            error: function (response) {
                alert("ERROR");
                console.log(response);
            }
        };

        $.ajax(url, settings);
    }

    function callWebService_ON() {
        var url = "web_service.php?command=TURN_ON" ;

        var settings = {
            dataType: "json",
            success: function (response) {
                alert("SUCCESS");
                console.log(response);
            },
            error: function (response) {
                alert("ERROR");
                console.log(response);
            }
        };

        $.ajax(url, settings);
    }
    function callWebService_COLOR(color) {
        color = color.replace("#", "");

        var url = "web_service.php?command=SET_COLOR&color=" + color;

        var settings = {
            dataType: "json",
            success: function (response) {
                alert("SUCCESS");
                console.log(response);
            },
            error: function (response) {
                alert("ERROR");
                console.log(response);
            }
        };

        $.ajax(url, settings);
    }
});