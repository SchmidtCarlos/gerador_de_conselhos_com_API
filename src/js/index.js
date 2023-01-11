// // FORMA QUE EU FIZ PRIMEIRO -- SEM SABER ENCURTAR O CÓDIGO

// async function criarNovoConselho(){
//   const url = "https://api.adviceslip.com/advice"
//   const resposta = await fetch(url)
//   return await resposta.json()
// }

// async function pegarUmConselho(slip_id){
//   const url = `https://api.adviceslip.com/advice/${slip_id}`
//   const resposta = await fetch(url)
//   return await resposta.json()
// }

// async function gerarNovoConselho(){
//   const conselho = await criarNovoConselho()
//   const frase = await pegarUmConselho(conselho.slip.id)
//   const novoConselho = frase.slip.advice
//   document.querySelector('.text').innerHTML = `<p>"${novoConselho}"</p>`
//   document.querySelector('.number').innerHTML = frase.slip.id
// }

// document.getElementById('gerador').addEventListener('click', gerarNovoConselho)
// gerarNovoConselho()

// FORMA ENCURTADA 

const botaoDeGerador = document.querySelector("#gerador");
const adviceNumber = document.querySelector(".number");
const adviceDescription = document.querySelector(".text");

async function gerarNovoConselho() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const adviceId = `${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    adviceNumber.innerHTML = adviceId;
    adviceDescription.innerHTML = adviceText;
}

botaoDeGerador.addEventListener("click", gerarNovoConselho);

gerarNovoConselho();