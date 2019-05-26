$(function() {
    $("#draggable").draggable({
        axis: "y"
    });
    $("#draggable2").draggable({
        axis: "x"
    });
    $("#draggable3").draggable({
        containment: "#containment-wrapper",
    });
    $("#draggable4").draggable({
        containment: "parent",
    });
});