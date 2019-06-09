$(function() {
    $( "#draggable").draggable({
        revert: true
    });
    $("#draggable2").draggable({
        revert: true,
        helper: "clone"
    });
});