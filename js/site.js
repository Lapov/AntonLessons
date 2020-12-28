// Write your Javascript code.

function successSend(data, textStatus, jqXHR) {
    if (textStatus === undefined)
        return;

    if (data === "OK") {
        $("#ErrorMessage").hide();
        $("#SendForm").hide(1000, arguments.callee);
        $("#SuccessMessage").show(1000);
    }
    else {
        $("#ErrorMessage").text(data);
        $("#ErrorMessage").show();
    }
};

function failSend(data, textStatus, jqXHR) {
    $("#SendForm").hide(1000, arguments.callee);
    $("#ErrorMessage").show(1000);
};

//$(document).ready(function () { t268_init('14916384'); }); $('.t268').bind('displayChanged', function () { t268_init('14916384'); });