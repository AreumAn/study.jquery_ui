$(function() {
    $( "#draggable").draggable({
        helper: "original"
    });
    $( "#draggable2").draggable({
        opacity: 0.7,
        helper: "clone"
    });
    $( "#draggable3").draggable({
        cursor: "move",
        cursortAt: { top: -12, left: -20 },
        helper: function( event ) {
            return $("<div class='ui-widget-header'>I'm a custom helper</div>");
        }
    });
    $("#set div").draggable({
        stack: "#set div"
    });
});