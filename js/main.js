var texto = "Nome do Jogo";
var atraso = 200;
var textoElemento = document.querySelector(".titulo-principal");
var contadorDeLetras = 0;

document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll(".cabecalho__menu__link");
  var urlAtual = window.location.pathname;

  links.forEach(function(link) {
    var href = link.getAttribute("href");
    if (urlAtual.includes(href)) {
      link.style.textDecoration = "underline";
      link.style.textDecorationColor = "var(--cor-terciaria)";
    }
  });
});

function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }else {
    setTimeout(apagarTexto, 1000);
  }
}

function apagarTexto() {
  if (contadorDeLetras > 0) {
    textoElemento.textContent = texto.slice(0, contadorDeLetras - 1);
    contadorDeLetras--;
    setTimeout(apagarTexto, atraso);
  }else {
    setTimeout(escreverTexto, 1000);
  }
}


escreverTexto();

