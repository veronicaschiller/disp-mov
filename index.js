const divLanches = document.querySelector(".lanches")

const carregaLanches = async () => {
// servidor devolve o conjuno de informações da requisição
const dados = await axios.get("https://edeciofernando.github.io/moveis/lanches")

// console.log(dados);
// em .dat estão os dados retornados pelo servidor
const lanches = dados.data

let respostas = ""

for(const lanche of lanches){
    // console.log(lanches.nome);
    respostas += "<h3>" + lanche.nome + "<h3>"
}
divLanches.innerHTML = respostas
}
window.addEventListener("load", carregaLanches)