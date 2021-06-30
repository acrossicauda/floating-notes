function toogleFloatingNote() {
    $('#float-notes').toggle();
    if(!$('#float-notes').is(':hidden')) {
        $("#txtNotes").val(getNotes(1));
    }
}

function getItens() {
    ;
}
function saveNotes(content, idnote) {
    console.log(content);
    //localStorage.setItem('note_1' + idnote, $content);
    localStorage.setItem('note_' + idnote, $content);
}

function getNotes(idnote = 1) {
    var notesValue = localStorage.getItem('note_' + idnote);
    //var notesValue = localStorage.getItem('note_1');
    return notesValue ? notesValue : '';
}

$(function() {
    window.txtNoteClicked = false;
    $('#txtNotes').click(function() {
        window.txtNoteClicked = true;
    });
    // so ira salvar quando clicar fora do textarea
    $(':not(.textarea)').bind('click', function() {
        window.txtNoteClicked = false;
        if(
            $('#float-notes').is(':hidden') === false
            && ($(this).attr('id') != 'float-notes')
        ) {

            try {
                saveNotes($("#txtNotes").val(), 1);
            } catch (ex) {}
        }
    });
});