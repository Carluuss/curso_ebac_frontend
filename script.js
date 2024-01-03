$(document).ready(function () {
    $('#tel').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: '<span class="error">Campo obrigatório*</span>',
            email: '<span class="error">Campo obrigatório*</span>',
            tel: '<span class="error">Campo obrigatório*</span>',
            cpf: '<span class="error">Campo obrigatório*</span>',
            endereco: '<span class="error">Campo obrigatório*</span>',
            cep: '<span class="error">Campo obrigatório*</span>',
        },

        submitHandler: function (form) {
            console.log(form);
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

})