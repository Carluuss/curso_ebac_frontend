$(document).ready(function () {

    $('form').on('submit', function (e) {
        e.preventDefault();
        const tarefa = $('input').val();
        const novaTarefa = $('<li></li>');

        $(`<div id='lista'><p id="paragrafo">${tarefa}</p><button id='remover'>Remover</button</div>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('input', this).val('');
    });

    $('ul').on('click', '#paragrafo', function () {
        $(this).toggleClass('linha');

    });
    $('ul').on('dblclick', '#paragrafo', function () {
        $(this).removeClass('linha');
    });
    $('ul').on('click', '#remover', function () {
        $(this).closest('li').remove();
    });


});