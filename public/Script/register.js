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
    var buttonproduct = document.getElementById("Product");
    buttonproduct.addEventListener("click",product);
  }
  
  // Função para fazer o redirecionamento da página de login para a página 'Solutions'
  function solutions() {
    var solutionsURL = "http://localhost:3000/register";
    window.location.href = solutionsURL;
    var buttonSolutions = document.getElementById("Solutions");
    buttonSolutions.addEventListener("click", solutions);
  }
  
  // Função para fazer o redirecionamento da página de login para a página 'For You'
  function foryou() {
    var forYouURL = "http://localhost:3000/register";
    window.location.href = forYouURL;
    var buttonForYou = document.getElementById("ForYou");
    buttonForYou.addEventListener("click", foryou);
  }
  
  // Função para fazer o redirecionamento da página de login para a página 'Suport'
  function suport() {
    var suportURL = "http://localhost:3000/register";
    window.location.href = suportURL;
    var buttonSuport = document.getElementById("Suport");
    buttonSuport.addEventListener("click", suport);
  }
  
  //função para sublinhar o botão selecionado 'Product, Solutions, ForYou, Suport'
  function underline(id) {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.textDecoration = "none";
      buttons[i].style.color = "";
    }
    var button = document.getElementById(id);
    button.style.textDecoration = "underline";
    button.style.textDecorationColor = "#be7abb";
    button.style.color = "#be7abb"
  }
  
  //função que faz o redirecionamento da pagina home para a pagina de login.
  function loginbutton() {
    var pagelogin = "http://localhost:3000/login";
      window.location.href = pagelogin;
    var buttonlogin = document.getElementById("Login");
      buttonlogin.addEventListener("click", loginbutton);
  }
  
  //função que faz o redirecionamento da pagina home para a pagina de registar.
  function register() {
    var pageregsiter = "http://localhost:3000/register";
      window.location.href = pageregsiter;
    var buttonregister = document.getElementById("Register");
      buttonregister.addEventListener("click", register);
  }
  
  /*-------------------------- Body -------------------------- */