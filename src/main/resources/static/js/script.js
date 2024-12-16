$(document).ready(function () {

    $(".formulario").prop("disabled", true);

    $(".formulario").hide();

    $('#fechar').click(function () {
        $(".formulario").prop("disabled", true);
        console.log("teste");
        $(".formulario").hide();

    })

    $("#add").click(function () {
        $(".formulario").show();
        $(".formulario").prop("disabled", false);
        $("#unid").val('0');
    })

    $("#buscar").click(function () {
        event.preventDefault();
        let selecionado = $("input[name='opcoes']:checked").val();

        if (selecionado === "TITULO") {
            buscarLivroPorTitulo($("#pesquisa").val());
        } else if (selecionado === "AUTOR") {
            buscarLivroPorAutor($("#pesquisa").val());
        } else {
            alert("Por favor selecione a opção pela qual você deseja buscar o livro")
        }
    })


    function carregarLivros() {
        $.ajax({
            url: 'http://localhost:8080/livro/listar',
            method: 'GET',
            success: function (data) {
                //alert("deu certo");
                console.log(data);
                $('#tabela tbody').empty();
                ;


                for (let i = 0; i < data.length; i++) {
                    let livro = data[i];



                    let botaoDeletar = $('<button>')
                        .text('Excluir')
                        .click(function () {
                            //alert("clicou em excluir")
                            if (confirm("Tem certeza de que deseja excluir esse registro?")) {
                                deletarLivro($(this).parent().parent().attr('data-id'));
                            } else {
                                
                            }



                        });

                    let botaoDetalhes = $('<button>')
                        .text('Detalhes')
                        .click(function () {
                            //alert("clicou em detalhes")
                            window.location.href = '/exibir?id=' + livro.id;
                        });


                    let id = $('<td>').text(livro.id);
                    let titulo = $('<td>').text(livro.titulo);
                    let genero = $('<td>').text(livro.genero);
                    let autor = $('<td>').text(livro.autor);
                    let ano = $('<td>').text(livro.ano);
                    let botoesOperacoes = $('<td>')
                        .append(botaoDeletar)
                        .append(" ")
                        .append(botaoDetalhes)

                    let tr = $('<tr>')
                        .attr('data-id', livro.id)
                        .append(id)
                        .append(titulo)
                        .append(genero)
                        .append(autor)
                        .append(ano)
                        .append(botoesOperacoes);

                    $('#tabela tbody').append(tr);
                    $('#id').val('');
                    $('#titulo').val('');
                    $('#genero').val('');
                    $('#sinopse').val('');
                    $('#ano').val('');



                }
            },
            error: function () {
                alert('Não foi possível carregar os dados da API');
            }
        });
    }

    carregarLivros();

    function buscarLivroPorTitulo (buscaTitulo){
        $.ajax({
            url: 'http://localhost:8080/livro/buscar?busca='+ buscaTitulo,
            method: 'GET',
            success: function (data) {
                //alert("deu certo");
                console.log(data);
                $('#tabela tbody').empty();
                ;


                for (let i = 0; i < data.length; i++) {
                    let livro = data[i];



                    let botaoDeletar = $('<button>')
                        .text('Excluir')
                        .click(function () {
                            //alert("clicou em excluir")
                            if (confirm("Tem certeza de que deseja excluir esse registro?")) {
                                deletarLivro($(this).parent().parent().attr('data-id'));
                            } else {
                                txt = "You pressed Cancel!";
                            }



                        });

                    let botaoDetalhes = $('<button>')
                        .text('Detalhes')
                        .click(function () {
                            //alert("clicou em detalhes")
                            window.location.href = '/exibir?id=' + livro.id;
                        });


                    let id = $('<td>').text(livro.id);
                    let titulo = $('<td>').text(livro.titulo);
                    let genero = $('<td>').text(livro.genero);
                    let autor = $('<td>').text(livro.autor);
                    let ano = $('<td>').text(livro.ano);
                    let botoesOperacoes = $('<td>')
                        .append(botaoDeletar)
                        .append(" ")
                        .append(botaoDetalhes)

                    let tr = $('<tr>')
                        .attr('data-id', livro.id)
                        .append(id)
                        .append(titulo)
                        .append(genero)
                        .append(autor)
                        .append(ano)
                        .append(botoesOperacoes);

                    $('#tabela tbody').append(tr);
                    $('#id').val('');
                    $('#titulo').val('');
                    $('#genero').val('');
                    $('#sinopse').val('');
                    $('#ano').val('');



                }
            },
            error: function () {
                alert('Não foi possível carregar os dados da API');
            }
        });

    }

    function buscarLivroPorAutor (buscaAutor){
        $.ajax({
            url: 'http://localhost:8080/livro/buscar-por-autor?busca='+ buscaAutor,
            method: 'GET',
            success: function (data) {
                //alert("deu certo");
                console.log(data);
                $('#tabela tbody').empty();
                ;


                for (let i = 0; i < data.length; i++) {
                    let livro = data[i];



                    let botaoDeletar = $('<button>')
                        .text('Excluir')
                        .click(function () {
                            //alert("clicou em excluir")
                            if (confirm("Tem certeza de que deseja excluir esse registro?")) {
                                deletarLivro($(this).parent().parent().attr('data-id'));
                            } else {
                                txt = "You pressed Cancel!";
                            }



                        });

                    let botaoDetalhes = $('<button>')
                        .text('Detalhes')
                        .click(function () {
                            //alert("clicou em detalhes")
                            window.location.href = '/exibir?id=' + livro.id;
                        });


                    let id = $('<td>').text(livro.id);
                    let titulo = $('<td>').text(livro.titulo);
                    let genero = $('<td>').text(livro.genero);
                    let autor = $('<td>').text(livro.autor);
                    let ano = $('<td>').text(livro.ano);
                    let botoesOperacoes = $('<td>')
                        .append(botaoDeletar)
                        .append(" ")
                        .append(botaoDetalhes)

                    let tr = $('<tr>')
                        .attr('data-id', livro.id)
                        .append(id)
                        .append(titulo)
                        .append(genero)
                        .append(autor)
                        .append(ano)
                        .append(botoesOperacoes);

                    $('#tabela tbody').append(tr);
                    $('#id').val('');
                    $('#titulo').val('');
                    $('#genero').val('');
                    $('#sinopse').val('');
                    $('#ano').val('');



                }
            },
            error: function () {
                alert('Não foi possível carregar os dados da API');
            }
        });

    }


    function criarLivro(livro) {
        $.ajax({
            url: 'http://localhost:8080/livro/adicionar',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(livro),
            success: function (data) {
                alert('Livro criado com sucesso.');
            },
            error: function () {
                alert('Não foi possível criar os dados da API');
            }
        });
    }
    ;

    function deletarLivro(id) {
        $.ajax({
            url: 'http://localhost:8080/livro/deletar/' + id,
            method: 'DELETE',
            success: function (data) {
                alert('Livro deletado com sucesso.');
                carregarLivros();
            },
            error: function () {
                alert('Não foi possível deletar os dados.');
            }
        });
    }

    $("#formLivro").submit(function (e) {
        e.preventDefault();

        let titulo = $("#titulo").val();
        let autor = $("#autor").val();
        let ano = $("#ano").val();
        let unidades = $("#unid").val();
        let genero = $("#genero").val();
        let descricao = $("#desc").val();

        let livro = {
            titulo: titulo,
            genero: genero,
            autor: autor,
            descricao: descricao,
            unidades: unidades,
            ano: ano

        }





        if ($(this).valid()) {

            criarLivro(livro);

            $("#titulo").val("");
            $("#autor").val("");
            $("#ano").val("");
            $("#genero").val("");
            $("#desc").val("");

            setTimeout(function () {
                carregarLivros();

            }, 500);

        }

    });

});