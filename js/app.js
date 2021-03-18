
$(function(){
    
});


$(".th1").click(function(){
    var audio = document.getElementById('workit');
    audio.play();
});

$(".th2").click(function(){
    var audio = document.getElementById('makeit');
    audio.play();
});

$(".th3").click(function(){
    var audio = document.getElementById('doit');
    audio.play();
});

$(".th4").click(function(){
    var audio = document.getElementById('makesus');
    audio.play();
});


$(".th5").click(function(){
    var audio = document.getElementById('harder');
    audio.play();
});

$(".th6").click(function(){
    var audio = document.getElementById('better');
    audio.play();
});

$(".th7").click(function(){
    var audio = document.getElementById('faster');
    audio.play();
});

$(".th8").click(function(){
    var audio = document.getElementById('stronger');
    audio.play();
});
/*

function atualizaFrase(){
    var frase = $(".frase").text();
    var numPalavras  = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-da-frase");
    tamanhoFrase.text(numPalavras);
}
function inicializaContadores(){
    campo.on("input",function(){
        var conteudo = campo.val();
        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);
    
        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}



function inicializaCronometro(){
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function(){
        var cronometroID = setInterval(function(){
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if(tempoRestante < 1){
                clearInterval(cronometroID);
                finalizaJogo();
            }
        },1000);
    });
}

function finalizaJogo(){
    campo.attr("disabled", true);
    campo.addClass("campo-desativado");
    inserePlacar();
}


var frase = $(".frase").text();

function inicializaMarcadores(){
    campo.on("input", function(){
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);
        console.log("Digitado: " + digitado);
        console.log("Frase Comp: " + comparavel);
        if(digitado == comparavel){
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        }else{
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}

function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Gabriel";
    var numeroDePalavras = $("#contador-palavras").text();
    var botaoRemover = "<a href='#' class='botao-remover'><i class='material-icons dp48'>delete</i>";


    var linha = "<tr>"+
        "<td>"+ usuario + "</td>"+
        "<td>"+ numeroDePalavras + "</td>"+
        "<td>"+ botaoRemover + "</td>"+
    "</tr>";
    
    corpoTabela.append(linha);
    
}

$(".botao-remover").click(function(event){
    event.preventDefault();
    $(this).parent().parent().remove();
});

function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");  
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.removeClass("campo-desativado");
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");

}


$("#reiniciar").click(reiniciaJogo);*/