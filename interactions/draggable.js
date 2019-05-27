$(function() {
    $("#draggable").draggable( { handle: "p" });
    $("#draggable2").draggable( { cancel: "p.ui-widget-header" });
});