const valor = document.getElementById("valor");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const botaoRemover = document.getElementById("botaoRemover");
const botaoResetar = document.getElementById("botaoResetar");

let contador = 0;
let intervalo;

function atualizarContador() {
  valor.textContent = contador;
}

function resetarContador() {
  contador = 0;
  atualizarContador();
}

function adicionarContador() {
  contador += 1;
  atualizarContador();
}

function removerContador() {
  contador -= 1;
  atualizarContador();
}

function adicionarRapidamente() {
  intervalo = setInterval(adicionarContador, 100);
  atualizarContador();
}

function removerRapidamente() {
  intervalo = setInterval(removerContador, 100);
  atualizarContador();
}

function pararContador() {
  clearInterval(intervalo);
  atualizarContador();
}

botaoAdicionar.addEventListener("mousedown", adicionarRapidamente);
botaoAdicionar.addEventListener("mouseup", pararContador);
botaoAdicionar.addEventListener("mouseleave", pararContador);

botaoRemover.addEventListener("mousedown", removerRapidamente);
botaoRemover.addEventListener("mouseup", pararContador);
botaoRemover.addEventListener("mouseleave", pararContador);
