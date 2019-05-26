$(function() {
    $("#draggable").draggable();
    $("#draggable2").draggable({
        scroll: true,
        scrollSensitivity: 1000
    });
    $("#draggable3").draggable({
        scroll: true,
        scrollspeed: 100
    });

});