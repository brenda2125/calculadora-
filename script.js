// Função executada quando a janela é carregada
window.onload = function() {
  // Obter referências aos elementos da calculadora, informações sobre e informações de contato
  var calculator = document.getElementById("calculator");
  var aboutInfo = document.getElementById("aboutInfo");
  var contactInfo = document.getElementById("contactInfo");

  // Ocultar a calculadora, informações sobre e informações de contato ao carregar a página
  calculator.style.display = "none";
  aboutInfo.style.display = "none";
  contactInfo.style.display = "none";
};

// Função para alternar a exibição da calculadora
function toggleCalculator() {
  var calculator = document.getElementById("calculator");
  var aboutInfo = document.getElementById("aboutInfo");
  var contactInfo = document.getElementById("contactInfo");

  // Exibir a calculadora e ocultar informações sobre e informações de contato
  calculator.style.display = "block";
  aboutInfo.style.display = "none";
  contactInfo.style.display = "none";
}

// Função para alternar a exibição das informações sobre
function toggleAbout() {
  var calculator = document.getElementById("calculator");
  var aboutInfo = document.getElementById("aboutInfo");
  var contactInfo = document.getElementById("contactInfo");

  // Exibir informações sobre e ocultar a calculadora e informações de contato
  calculator.style.display = "none";
  aboutInfo.style.display = "block";
  contactInfo.style.display = "none";
}

// Função para alternar a exibição das informações de contato
function toggleContact() {
  var calculator = document.getElementById("calculator");
  var aboutInfo = document.getElementById("aboutInfo");
  var contactInfo = document.getElementById("contactInfo");

  // Exibir informações de contato e ocultar a calculadora e informações sobre
  calculator.style.display = "none";
  aboutInfo.style.display = "none";
  contactInfo.style.display = "block";
}

// Função para alternar o estado do menu
function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active"); // Alternar a classe "active" do elemento de menu
}

// Função para acrescentar valor ao campo de exibição da calculadora
function appendToDisplay(value) {
  var display = document.getElementById("display");
  display.value += value; // Acrescentar o valor ao campo de exibição
}

// Função para limpar o campo de exibição da calculadora
function clearDisplay() {
  var display = document.getElementById("display");
  display.value = ""; // Limpar o campo de exibição
}

// Função para realizar o cálculo no campo de exibição da calculadora
function calculate() {
  var display = document.getElementById("display");

  try {
    var result = eval(display.value); // Avaliar a expressão no campo de exibição
    display.value = display.value + " = " + result; // Exibir o resultado no campo de exibição
  } catch (error) {
    display.value = "Erro"; // Exibir "Erro" no campo de exibição em caso de erro na avaliação
  }
}

// Função para ocultar a calculadora
function hideCalculator() {
  var calculator = document.getElementById("calculator");
  calculator.style.display = "none"; // Ocultar a calculadora
}
