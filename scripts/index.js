let botaoAdicionarPerfil = document.querySelector(".profile__button-add")
let dadosPessoais = document.querySelector(".perfils")
let botaoSalvar = document.querySelector(".profile__button-edit")
let fecharDadosPessoais = document.querySelector(".perfils__img")
let perfils = document.querySelector(".perfils__perfil")
let nome = document.querySelector(".profile__name")
let adjetivo = document.querySelector(".profile__adjetivo")

function trocavisibilidade(x) {
  dadosPessoais.style.display = x
}

botaoSalvar.addEventListener("click", function () {
  trocavisibilidade("flex")
})


fecharDadosPessoais.addEventListener("click", () => {
  trocavisibilidade("none")
})

perfils.addEventListener("submit", (e) => {
  console.log("submit")
  // pegar o valor do input de nome
  let perfilsName = document.querySelector(".perfils__name").value
  // pegar o valor do input de qualidade 
  let quality = document.querySelector(".perfils__qualidade").value
  // trocar o valor de profile__name para o valor de perfilsName.
  nome.textContent = perfilsName
  // trocar o valor de profile__adjetivo para o valor de quality.
  adjetivo.textContent = quality
  //fechar a janela de editar perfil.
  trocavisibilidade("none")
  e.preventDefault()
})

