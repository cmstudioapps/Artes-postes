//var estilo = document.createElement("style")
//document.body.appendChild(estilo)
var fundo = Math.floor(Math.random()*2)+1

if (fundo < 2) {
  
  estilo.innerHTML = `
  body {
  background-image: url('fundoA.png');
  background-size: cover;
  background-attachment: fixed;
  }`
} else {
  estilo.innerHTML = `
  body {
  background-image: url('fundoB.png');
  background-size: ;
  background-repeat: no-repeat;
  background-attachment: fixed;
  
  }`
}