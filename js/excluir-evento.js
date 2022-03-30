let editarNome = document.querySelector("#nome");
let editarBanner = document.querySelector("#banner");
let editarAtracoes = document.querySelector("#atracoes");
let editarDescricao = document.querySelector("#descricao");
let editarData = document.querySelector("#data");
let editarLotacao = document.querySelector("#lotacao");

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const form = document.querySelector("form"); // passar para evento onclick, quando acionado o botão enviar

// function pegaId(){
//     const url = new URL(window.location.href)
//     const id = url.searchParams.get('_id')
//     return id
// }

const parametrosURL = new URLSearchParams(window.location.search);
const parametrosID = parametrosURL.get("id");

const mostrarEvento = async () => {
    const resposta = await fetch(`${BASE_URL}/events/${parametrosID}`, {method: "GET"});
    const respostaAPI = await resposta.json();      

editarNome.value = respostaAPI.name;
editarAtracoes.value = respostaAPI.attractions;
editarDescricao.value = respostaAPI.description;
editarData.value = respostaAPI.scheduled;
editarLotacao.value = respostaAPI.number_tickets;
};

mostrarEvento();


form.onsubmit = async (evento) =>{
    evento.preventDefault();
  await fetch(`${BASE_URL}/events/${parametrosID}`, {method: "DELETE"});

 alert ("Deu bom! porra!!!")
window.location.href = ("admin.html")
}
//    const resposta = await fetch(`${BASE_URL}/events${parametrosID}}`, options);
//    const conteudoResposta = await resposta.json();
//    console.log(conteudoResposta)

