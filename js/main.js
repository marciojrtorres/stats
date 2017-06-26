console.log('main');
const divNotas = document.querySelector('div.notas');
const divMedia = document.querySelector('div.media');
const divMenor = document.querySelector('div.menor');
const divMaior = document.querySelector('div.maior');
const divAmplitude = document.querySelector('div.amplitude');
const divMediana = document.querySelector('div.mediana');
const divAprovados = document.querySelector('div.aprovados');
const divReprovados = document.querySelector('div.reprovados');

// getter cria uma propriedade calculada!
const Notas = {
  notas: [],
  // duas classes de notas
  get aprovados() {
    // let n = 0;
    // for (let nota of this.notas) if (nota >= 7) n++;
    // return n;
    return this.notas.filter((n) => n >= 7).length;
  },
  get reprovados() {
    return this.notas.length - this.aprovados;
  },
  // fim classes
  get mediana() {
    return mediana(this.notas);
  },
  get amplitude() {
    return this.maior - this.menor;
  },
  get maior() {
    return this.notas[this.notas.length - 1];
  },
  get menor() {
    return min(this.notas);
  },
  get media() { // média aritmética
    let soma = 0;
    for (let nota of this.notas) soma += nota;
    return soma / this.notas.length;
  },
  atualizaView: function () { // apresentar os dados
    let html = "";
    for (let nota of this.notas) { // for each
        html += `<p>${nota}</p>`; // string interpolada (crase)
    }
    divNotas.innerHTML = html;
    divMedia.textContent = this.media;
    divMenor.textContent = this.menor;
    divMaior.textContent = this.maior;
    divAmplitude.textContent = this.amplitude;
    divMediana.textContent = this.mediana;
    divAprovados.textContent = this.aprovados;
    divReprovados.textContent = this.reprovados;

    if (this.aprovados > this.reprovados) {
      divAprovados.style.width = '100%';
      const p = this.reprovados / this.aprovados * 100;
      divReprovados.style.width = `${p}%`;
      // string interpolada
    } else {
      divReprovados.style.width = '100%';
      const p = this.aprovados / this.reprovados * 100;
      divAprovados.style.width = `${p}%`;
    }
  },
  adiciona: function (nota) {
    let n = parseFloat(nota);
    if (!isNaN(n) && n >= 0 && n <= 10) {
      this.notas.push(n);
      this.notas.sort(function (a, b) {
        return a - b
      });
      this.atualizaView();
    }
  }
};

// eventos // callback
const form = document.querySelector('form');
form.addEventListener('submit', function (evento) {
  Notas.adiciona(this.nota.value);
  evento.preventDefault();
});

function min(vetor) {
  var m = vetor[0];
  for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] < m) m = vetor[i];
  }
  return m;
}

var vet = [3, 4, 2, 1, 6, 8, 9, 4, 4, 10];

console.log(min(vet)); // 1
console.log(min([5, 7, 2, 9])); // 2
console.log(min([-8, 7, 2])); // -8
console.log(min([5])); // 5
console.log(min([]));

var vet2 = [2, 4, 5, 6, 9];
console.log(mediana(vet2)); // 5
console.log(mediana([2, 4, 8, 9])); // 6

function mediana(vetor) {
  if (vetor.length % 2 === 1) { // impar
    return vetor[parseInt(vetor.length / 2)];
  } else { // par
    let a = vetor[parseInt(vetor.length / 2)];
    let b = vetor[parseInt(vetor.length / 2) - 1];
    return (a + b) / 2;
  }
}

// funções, revisitando!

// função declarada
function soma(a, b) { return a + b; }
// função como expressão atribuída
let subtrai = function(a, b) { return a - b; };

// função como expressão lambda
let multiplica = (a, b) => a * b;
console.log(multiplica(2, 8));









/* */
