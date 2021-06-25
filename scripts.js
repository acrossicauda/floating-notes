function toogleFloatingNote() {
    $('#float-notes').toggle();
}

function getItens() {
    ;
}
function saveNotes(content) {
    //alert('saveNotes');
    console.log(content);
}

$(function() {
    // so ira salvar quando clicar fora do textarea
    $(document).on('mouseup', '*:not(.textarea)', function() {
        if(
            ($('#float-notes').is(':hidden') === false)
            && ($("#txtNotes").attr('id') != 'txtNotes')
        ) {
            try {
                saveNotes($("#txtNotes").text());
            } catch (ex) {}
        }
    });
});