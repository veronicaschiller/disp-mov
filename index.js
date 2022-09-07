const divLanches = document.querySelector(".lanches")
const spanBadge = document.querySelector("span.position-absolute")

let itensComprados = []

const carregaLanches = async () => {
// servidor devolve o conjuno de informações da requisição
const dados = await axios.get("https://edeciofernando.github.io/moveis/lanches")

// console.log(dados);
// em .dat estão os dados retornados pelo servidor
const lanches = dados.data

let respostas = ""

for(const lanche of lanches){
    // console.log(lanches.nome);
    respostas += `
    <div class="col-6 col-sm-4 col-m-3">
    <div class="card" style="width: 18rem;">
    <img src="${lanche.foto}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${lanche.id} - ${lanche.nome}</h5>
      <p class="card-text">${lanche.ingredientes}</p>
      <p class="card-text">${lanche.preco.toLocaleString("pt-br", {minimumFractionDigits: 2})}</p>
      <button class="btn btn-primary btnAdicionar">Go somewhere</button>
    </div>
    </div>
  </div>`
    
}
divLanches.innerHTML = respostas

itensComprados = localStorage.getItem("lanches") ? 
    localStorage.getItem("lanches").split(";") : []
    spanBadge.innerText = itensComprados.length

}
window.addEventListener("load", carregaLanches)

divLanches.addEventListener("click", e =>{
    // alert("oi")
    if(e.target.classList.contains("btnAdicionar")){
        // alert("oi")
        // captura o elemento pai do botão que foi clicado
        const div = e.target.parentElement
        // console.log(div);
        const tagH5 = div.querySelector("h5")

        const idNome = tagH5.innerText
        // console.log(idNome);
        // separa a string em elementos de vetores pela ocorencia
        const partes = idNome.split("-")
        const id = partes[0]

        itensComprados.push(id)

        spanBadge.innerText = itensComprados.length

        localStorage.setItem("lanches", itensComprados.join(";"))

    }

})

// Desafio pra proxima aula 
// ao clicar sobre o carrinho 
// exibir , em um modal , os lanches adicionados (nome,valor , foto  )
// 