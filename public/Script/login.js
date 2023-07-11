
//-------------------------- Header-------------------------- 

  //função para redirecionar da tela de login para a tela homepage clicando no incone 
    function redihome() {
    var pagehome = "http://localhost:3000/home";
    window.location.href = pagehome;

    var buttonhome = document.getElementById("HomePage");
    buttonhome.addEventListener("click", redihome);
  }

  //função para fazer o redirecionamento da pagina de login para a pagina de 'produtos'
    function product() {
      var Product = "http://localhost:3000/register";
      window.location.href = Product ;
  
      var buttonproduct = document.getElementById("Prodoct");
      buttonproduct.addEventListener("click",product);
  }

  //função para fazer o redirecionamento da pagina de login para a pagina de 'soluções'
    
    function solutions() {
      var Solutions = "http://localhost:3000/register";
      window.location.href = Solutions;

      var buttonsolutions = documente.getElementById("Solutions");
      buttonsolutions.addEventListener("click", solutions);
  }
  
  //função para fazer o redirecioanento da pagina de longin para a pagina 'para você'
    function foryou() {
      var Foryou = "http://localhost:3000/register";
      window.location.href = Foryou;

      var buttonforyou = document.getElementById("Foryou");
      buttonforyou.addEventListener("click", foryou)
  }

  //função para fazer o redirecionamento da pagina de login para a pagina 'suporte'
    function suport() {
      var Suport = "http://localhost:3000/register"
      window.location.href = Suport;

      var buttonforyou = document.getElementById("Suport");
      buttonforyou.addEventListener("click", suport);
  }

  //função que faz o redirecionamento da tela de login pra a pagina de se registar.
    function register() {
      var pagehome = "http://localhost:3000/register";
      window.location.href = pagehome;

      var buttonregister = document.getElementById("Register");
      buttonregister.addEventListener("click", register);
  }

  //-------------------------- Login -------------------------- 

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

    function forgotpass () {
      var ForgotPass = "http://localhost:3000/register";
      window.location.href = ForgotPass;
  
      var buttonforgotpass = document.getElementById("ForgotPass");
      buttonforgotpass.addEventListener("click", forgotpass);
  }

  //-------------------------- Footer Link Politicos Advertising -------------------------- 

function advertising () {
  var Advertising = "http://localhost:3000/register";
  window.location.href = Advertising;

  var buttonAdvertising = document.getElementById("Advertising");
  buttonAdvertising.addEventListener("click", advertising);
}

function cookeis () {
  var Cookeis = "http://localhost:3000/register";
  window.location.href = Cookeis;

  var buttoncookies = document.getElementById("Cookies");
  buttoncookies.addEventListener("click", cookeis);
}
 
function privacy () {
  var Privacy = "http://localhost:3000/register";
  window.location.href = Privacy;

  var buttonprivacy = document.getElementById("Privacy");
  buttonprivacy.addEventListener("click", privacy);
}
 
function terms () {
  var Terms = "http://localhost:3000/register";
  window.location.href = Terms;

  var buttonterms = document.getElementById("Terms");
  buttonterms.addEventListener("click", terms);
}

//-------------------------- Footer Social Midia -------------------------- 

  //função que faz ir da pagina 'login' para a pagina do 'YouTube'
    function sm0 () {
      var youtube = "http://localhost:3000/register";
      window.location.href = youtube;

      var buttonSM0 = document.getElementById("SM0");
      buttonSM0.addEventListener("click", sm0);
  }

    //função que faz ir da pagina login para a pagina do 'YouTube'
    function sm1 () {
      var facebook  = "http://localhost:3000/register";
      window.location.href = facebook;

      var buttonSM0 = document.getElementById("SM1");
      buttonSM0.addEventListener("click", sm1);
  }
  
    //função que faz ir da pagina login para a pagina do 'YouTube'
    function sm2 () {
      var linkedin = "http://localhost:3000/register";
      window.location.href = linkedin;
  
      var buttonSM0 = document.getElementById("SM2");
      buttonSM0.addEventListener("click", sm2);
  }

    //função que faz ir da pagina login para a pagina do 'YouTube'
    function sm3 () {
      var reddit = "http://localhost:3000/register";
      window.location.href = reddit;

      var buttonSM0 = document.getElementById("SM3");
      buttonSM0.addEventListener("click", sm3);
  }
