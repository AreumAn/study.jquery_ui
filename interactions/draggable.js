$(function() {
    $( "#draggable").draggable({
        snap: true
    });
    $( "#draggable2" ).draggable({
        snap: ".ui-widget-header"
    });
    $( "#draggable2" ).draggable({
        snap: ".ui-widget-header",
        snapMode: "outer"
    });
    $( "#draggable4" ).draggable({
        grid: [ 20, 20 ]
    });
    $( "#draggable5" ).draggable({
        grid: [ 80, 80 ]
    });
});