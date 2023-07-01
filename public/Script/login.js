
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
  