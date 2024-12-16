$(document).ready(function () {
    

    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
      }, "Letters only please"); 

    $('#formLivro').validate({
        rules: {
            titulo: {
                required: true
            },
            autor: {
                required: true,
                lettersonly: true
            },
            ano: {
                required: true
            },
            genero: {
                required: true,
                lettersonly: true
            },
            desc: {
                required: true
            },
            unid: {
                required: true
            }

        },
        messages: {
            titulo: {
                required: "Campo título é obrigatório",
                
            },
            autor: {
                required: "Campo autor é obrigatório",
                lettersonly: "Por favor, insira um nome válido"
            },
            genero: {
                required: "Campo gênero é obrigatório",
                lettersonly: "Por favor, insira um nome válido"
            },
            ano: {
                required: "Por favor, insira o ano de lançamento do livro",
                min: "Por favor insira um ano válido"

            },
            desc: {
                required: "Campo descrição é obrigatório"
            },
            unid: {
                min: "Por favor, insira um valor maior que 0",
                required: "É obrigatório informar as unidades disponíveis no estoque, se não houver nenhuma, insira 0, esse campo pode ser alterado posteriormente"
            }

        }
    })
    
});

