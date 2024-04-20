var nome = localStorage.getItem("nome")
var email = localStorage.getItem("email")
var dialogo = document.getElementById("login")
var acessando = window.location.href
var ID = localStorage.getItem("ID")
var latitude;
var longitude;
var url;

navigator.geolocation.getCurrentPosition(localizado)

function localizado(geolocation) {
  latitude = geolocation.coords.latitude;
   longitude = geolocation.coords.longitude;
  url = 'https://www.google.com/maps/search/?api=1&query=' + latitude + ',' + longitude;
  
}




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
.then(response => response.json())
.then(data => {})
.cath(error => alert("Ocorreu um erro de informações"))







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

