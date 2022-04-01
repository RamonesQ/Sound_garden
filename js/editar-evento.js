let editarNome = document.querySelector("#nome");
let editarBanner = document.querySelector("#poster");
let editarAtracoes = document.querySelector("#atracoes");
let editarDescricao = document.querySelector("#descricao");
let editarData = document.querySelector("#data");
let editarLotacao = document.querySelector("#lotacao");

const inputNome = document.querySelector("#nome");
const inputBanner = document.querySelector("#poster");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const form = document.querySelector("form");

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
    try {
        const editarEvento = {
            name: inputNome.value,
            poster: "link da imagem",
            attractions: inputAtracoes.value.split(","),
            description: inputDescricao.value,
            scheduled: new Date(inputData.value).toISOString(),
            number_tickets: parseInt(inputLotacao.value),
        };

        const options = {
            method: "PUT",
            body: JSON.stringify(editarEvento),
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
        };

        const resposta = await fetch(
            `${BASE_URL}/events/${parametrosID}`,
            options
        );
        const conteudoResposta = await resposta.json();
        console.log(conteudoResposta);

        alert("Evento editado com sucesso!");
        window.location.href = "admin.html";
    } catch (error) {
        console.log(error);
        alert("Deu ruim");
    }
};
