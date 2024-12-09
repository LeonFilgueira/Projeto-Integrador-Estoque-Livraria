$(document).ready(function () {

    $(".formulario").hide();
    
    $('#fechar').click(function () {
        $(".formulario").hide();
    })

    $("#add").click(function(){
        $(".formulario").show();
        $("#unid").val('0');
    })

    $("#buscar").click(function(){
        event.preventDefault();
    })

    /*$("#btncadastrar").click(function(){
        event.preventDefault();
    })*/

});