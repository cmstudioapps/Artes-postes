var nome = localStorage.getItem("nome")
var email = localStorage.getItem("email")
var dialogo = document.getElementById("login")
var acessando = window.location.href
var ID = localStorage.getItem("ID")

navigator.geolocation.getCurrentPosition(localizado)

function localizado(geolocation) {
  var latitude = geolocation.coords.latitude;
  var longitude = geolocation.coords.longitude;
  var url = 'https://www.google.com/maps/search/?api=1&query=' + latitude + ',' + longitude;
  
}


window.addEventListener("load",function() {

if (nome) {
  
  fetch("https://api.sheetmonkey.io/form/wsLjviFczzpA6XpUjhbCRD", {
    
    method: 'post',
    headers: {
      
      'Accept': 'application/json',
      'Content-type': 'application/json'
      
    },
    
    body: JSON.stringify({
      
      Usuários: nome,
      
      Email: email,
      Acessando: acessando,
      Id: ID,
      Localização: url
      
    })
    
    
  })
}




})



if (!ID) {
  
  ID = Math.floor(Math.random() * 90000) + 10000;
  localStorage.setItem("ID",ID)
  
}
if (!nome || !email) {
  
  dialogo.showModal()
  
}

function ok() {
  nome = document.getElementById("nome").value
  localStorage.setItem("nome",nome)
  email = localStorage.setItem("email",email)
  dialogo.close()
  
}

