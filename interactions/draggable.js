$(function() {
    $("#sortable").sortable({
        revert: 1000
    });
    $("#draggable").draggable({
        connectToSortable: "#sortable",
        helper: "clone",
        revert: "invalid"
    });
    $("ul, li").draggableSelection();
});