


function login() {
    var username = document.getElementById("UserLogin").value;
    var password = document.getElementById("PasswordLogin").value;
  

    if (username === "junklab" && password === "0000") {
      alert("Login bem-sucedido!");
        window.location.href = "/profile"

    } else {
      alert("Nome de usuário ou senha incorretos. Tente novamente.");
    }
  }
  