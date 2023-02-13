const palavras = [
  "macaco", "elefante", "baleia", "cachorro", "ganso", "gato", "girafa", "zebra", "leão", "tigre", "mamute", "guepardo", "jacaré", "urso", "porco", "coelho"
];

const input = document.querySelector('#ipPalavraResposta');

const spPalavraSecreta = document.querySelector('#spPalavraSecreta');
let palavra = '';

const btnNovaPalavra = document.querySelector('#btnNovaPalavra');
btnNovaPalavra.addEventListener('click', novaPalavra);

const btnVerificarPalavra = document.querySelector('#btnVerificarPalavra');

const spSituacao = document.querySelector('#spSituacao');

const spQuantTentativas = document.querySelector('#spQuantTentativas');
let nTentativa = 3;

const spPlacar = document.querySelector('#spPlacar');
let pontos = 0;

// Código refatorado com 6 sentenças
function embaralha(palavra) {
  nTentativa = 3;
  btnVerificarPalavra.addEventListener('click', verifica);
  let arr = palavra.split('');
  spPlacar.textContent = pontos;
  return arr.sort().join(' - ');
}

// Código refatorado com 6 sentenças
function trava() {
  btnVerificarPalavra.setAttribute('disabled', 'true');
  input.setAttribute('disabled', 'true');
  if(spSituacao.textContent === 'Errou') {
      spSituacao.textContent = `Acabou - Resposta: ${palavra}`;
      pontos = 0;
  }
}

// Código refatorado com 6 sentenças
function destrava() {
  btnVerificarPalavra.removeAttribute('disabled');
  input.removeAttribute('disabled');
  spSituacao.textContent = '';
  input.value = null;
}

// Código refatorado com 6 sentenças
function tentativas() {
  if(spSituacao.textContent === 'Errou') {
      nTentativa -= 1;
      spQuantTentativas.textContent = `${nTentativa}`;
  }
  nTentativa === 0 ? trava() : null;
}

// Código refatorado com 6 sentenças
function novaPalavra() {
  input.getAttribute('disabled') ? destrava() : null;
  input.focus();
  palavra = palavras[Math.ceil(Math.random() * palavras.length -1)];
  spPalavraSecreta.textContent = embaralha(palavra);
  spQuantTentativas.textContent = `${nTentativa}`;
}

// Código refatorado com 6 sentenças
function pontuacao() {
  nTentativa === 0 ? spPlacar.textContent = 0 : pontos += nTentativa;
  spPlacar.textContent = pontos;
}

// Código refatorado com 6 sentenças
function acertou() {
  spSituacao.textContent = 'Acertou';
  pontuacao();
  trava();
}

// Código refatorado com 6 sentenças
function errou() {
  input.focus();
  spSituacao.textContent = 'Errou';
  tentativas(); // decremento da quantidade de tentativas e a atualização da interface com a nova quantidade do contador
}

// Código refatorado com 6 sentenças
function verifica() {
  input.value.toLowerCase() === palavra ? acertou() : errou();
}