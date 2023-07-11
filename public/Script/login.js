

//função que faz a verificação de login ( ainda em desenvolvimento )
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
  
  //função para redirecionar da tela de login para a tela homepage clicando no incone 
    function redihome() {
    var pagehome = "http://localhost:3000/home";
    window.location.href = pagehome;

    var buttonhome = document.getElementById("HomePage");
    buttonhome.addEventListener("click", redihome);

  }

  //função para fazer o redirecionamento da pagina de login para a pagina de produtos
    function product() {
      var Product = "http://localhost:3000/register";
      window.location.href = Product ;
  
      var buttonproduct = document.getElementById("Prodoct");
      buttonproduct.addEventListener("click",product);
    }

  //função que faz o redirecionamento da tela de login pra a pagina de se registar.
    function register() {
      var pagehome = "http://localhost:3000/register";
      window.location.href = pagehome;

      var buttonregister = document.getElementById("Register");
      buttonregister.addEventListener("click", register);

  }

