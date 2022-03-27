const inputNome = document.querySelector("#nome");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const form = document.querySelector("form"); // passar para evento onclick, quando acionado o botão enviar

form.onsubmit = async (evento) =>{
    evento.preventDefault();
   
    const novoEvento = {
       name: inputNome.value,
       poster: "",
       attractions: inputAtracoes.value,
       description: inputDescricao.value,
       scheduled: inputData.value,
       number_tickets: inputLotacao.value 
    };

    const options = {
        method: 'POST',
        body: novoEvento,
        headers: {
            "Content-Type": "application/json",
          },
    };

    await fetch(`${BASE_URL}/events`, options);
    console.log(novoEvento)
}