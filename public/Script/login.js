
function login() {
    var username = document.getElementById("UserLogin").value;
    var password = document.getElementById("PasswordLogin").value;
    
function showAlert(LoginErro){
    var alertDiv = document.getElementById('AlertLog')
    alertDiv.innerText = LoginErro;
    }

    if (username === "junklab" && password === "0000") {
      window.location.href = "/profile"

    } else {
      showAlert("Credenciais inválidas.")     
    }
  }
  
  function redihome() {
    var pagehome = "http://localhost:3000/home";
    window.location.href = pagehome;

    var buttonhome = document.getElementById("HomePage");
    buttonhome.addEventListener("click", redihome);

  }

  function register() {
    var pagehome = "http://localhost:3000/register";
    window.location.href = pagehome;

    var buttonregister = document.getElementById("Register");
    buttonregister.addEventListener("click", register);

  }