$(function() {
    $("#draggable").draggable({
        axis: "y",
        cursorAt: {top:0}
    });
    $("#draggable2").draggable({
        axis: "x",
        cursorAt: {left:0}
    });
    $("#draggable3").draggable({
        containment: "#containment-wrapper",
        cursor: "move"
    });
    $("#draggable4").draggable({
        containment: "parent",
        cursor: "crosshair"
    });
});