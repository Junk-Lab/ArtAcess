
//-------------------------- Header-------------------------- 

//função para redirecionar da tela de login para a tela homepage clicando no incone 
function redihome() {
  var pagehome = "http://localhost:3000/home";
  window.location.href = pagehome;
}
  var buttonhome = document.getElementById("HomePage");
  buttonhome.addEventListener("click", redihome);

//função para fazer o redirecionamento da pagina de login para a pagina de 'produtos'
  function product() {
  var Product = "http://localhost:3000/register";
  window.location.href = Product ;
}
  var buttonproduct = document.getElementById("Product");
  buttonproduct.addEventListener("click",product);

// Função para fazer um underline no 'ID=Product'
function addClickEvent(buttonId) {
  var button = document.getElementById(buttonId);
  button.addEventListener("click", function() {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.textDecoration = "none";
    }
    this.style.textDecoration = "underline";
  });
}
addClickEvent("Product");

// Função para fazer o redirecionamento da página de login para a página 'Solutions'
function solutions() {
  var solutionsURL = "http://localhost:3000/register";
  window.location.href = solutionsURL;
}
  var buttonSolutions = document.getElementById("Solutions");
  buttonSolutions.addEventListener("click", solutions);

// Função para fazer um underline no 'ID=Solutions'
function addClickEvent(buttonId) {
  var button = document.getElementById(buttonId);
  button.addEventListener("click", function() {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.textDecoration = "none";
    }
    this.style.textDecoration = "underline";
  });
}
addClickEvent("Solutions");

// Função para fazer o redirecionamento da página de login para a página 'For You'
function foryou() {
  var forYouURL = "http://localhost:3000/register";
  window.location.href = forYouURL;
}
  var buttonForYou = document.getElementById("ForYou");
  buttonForYou.addEventListener("click", foryou);

// Função para fazer um underline no 'ID=ForYou'
function addClickEvent(buttonId) {
  var button = document.getElementById(buttonId);
  button.addEventListener("click", function() {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.textDecoration = "none";
    }
    this.style.textDecoration = "underline";
  });
}
addClickEvent("ForYou");

// Função para fazer o redirecionamento da página de login para a página 'Suport'
function suport() {
  var suportURL = "http://localhost:3000/register";
  window.location.href = suportURL;
}
  var buttonSuport = document.getElementById("Suport");
  buttonSuport.addEventListener("click", suport);

// Função para fazer um underline no 'ID=Suport'
function addClickEvent(buttonId) {
  var button = document.getElementById(buttonId);
  button.addEventListener("click", function() {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.textDecoration = "none";
    }
    this.style.textDecoration = "underline";
  });
}
addClickEvent("Suport");

//função que faz o redirecionamento da tela de login pra a pagina de se registar.
function register() {
  var pagehome = "http://localhost:3000/register";
  window.location.href = pagehome;
}
  var buttonregister = document.getElementById("Register");
  buttonregister.addEventListener("click", register);
