$(document).ready(function () {
    let urlParams = new URLSearchParams(window.location.search);
    let livroId = urlParams.get('id');
    let livro;

    function carregar() {
        $.ajax({
            url: 'http://localhost:8080/livro/pesquisar/' + livroId,
            method: 'GET',
            success: function (data) {

                livro = data;
                console.log(data);
                console.log(livro.titulo)

                $('#titulo').text(livro.titulo);
                $('#genero').text(livro.genero);
                $('#descricao').text(livro.descricao);
                $('#ano').text(livro.ano);
                $("#autor").text(livro.autor);
                $("#estoque").val(livro.unidades);


            },
            error: function () {
                alert('erro')
            }
        })
    }

    if (livroId) {

        carregar();
    }

    function atualizarEstoque(livro) {
        $.ajax({
            url: 'http://localhost:8080/livro/atualizar/' + livroId,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(livro),
            success: function (data) {
                alert('Estoque atualizado com sucesso.');
                carregar();
            },
            error: function () {
                alert('Não foi possível atualizar os dados.');
            }
        });
    }

    $("#atualizar").click(function () {
        livro.unidades = $("#estoque").val()
        atualizarEstoque(livro);
        
    })

});