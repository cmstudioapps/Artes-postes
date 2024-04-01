//verifica se o e-mail do usuário ja foi verificado.
var verificado = localStorage.getItem("verificado")
var nome = localStorage.getItem("nome")
if (!verificado && nome) {
  
  window.location.href = "verificar.html"
  
}