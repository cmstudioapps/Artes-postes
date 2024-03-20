var nome = localStorage.getItem("nome")
var email = localStorage.getItem("email")
var dialogo = document.getElementById("login")
var acessando = window.location.href
var ID = localStorage.getItem("ID")
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
      Id: ID
      
      
    })
    
    
  })
}
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

