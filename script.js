document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var nombre = document.getElementById("name").value;
    var correo = document.getElementById("email").value;
    var numero = document.getElementById("number").value;
  
    if (nombre === "Nicolas" && correo === "n.llancaqueo01@ufromail.cl" && numero === '968749266') {
      window.location.href = "login.html";
    } else {
      document.getElementById("error-message").innerText = "error, usuario no encontrado";
    }
  });