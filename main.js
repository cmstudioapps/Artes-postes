var opc = document.getElementById("opc")

var selecionado = localStorage.getItem("selecionado")

if (selecionado) {
  
  opc.value = selecionado
  
}

opc.addEventListener("change", function() {
    // Armazenando o valor selecionado no armazenamento local
    localStorage.setItem("selecionado", opc.value);
});


window.addEventListener('DOMContentLoaded', function() {
    var navs = document.querySelectorAll('nav');
    var parent = navs[0].parentNode;

    // Cria uma nova ordem aleatória para as tags nav
    var indices = Array.from(Array(navs.length).keys());
    shuffleArray(indices);

    // Reorganiza as tags nav com base na ordem aleatória
    indices.forEach(function(index) {
        parent.appendChild(navs[index]);
    });
});

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//publicar:

function publicar() {
  
  window.location.href = "publicar.html"
  
}
function arte() {
  
  window.location.href = "arte.html"
  
  
}
function arte1() {
  
  window.location.href = "arte1.html"
  
  
}