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

  /*document.getElementById("login-form").addEventListener("submit", async function(event) {
  event.preventDefault(); 

  var nombre = document.getElementById("name").value;
  var correo = document.getElementById("email").value;
  var numero = document.getElementById("number").value;

  try {
      // Realiza una solicitud POST a la API REST
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
          nombre: nombre,
          correo: correo,
          numero: numero
      });

      // Verifica la respuesta de la API
      if (response.status === 200) {
          // Si la solicitud fue exitosa, redirige a otra página
          window.location.href = "login.html";
      } else {
          // Si la solicitud no fue exitosa, muestra un mensaje de error
          document.getElementById("error-message").innerText = "Error, usuario no encontrado";
      }
  } catch (error) {
      // Si ocurre un error durante la solicitud, muestra un mensaje de error
      console.error('Error al enviar el formulario:', error);
      document.getElementById("error-message").innerText = "Error al enviar el formulario";
  }
}); */