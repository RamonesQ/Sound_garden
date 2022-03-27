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
       poster: "link da imagem",
       attractions: inputAtracoes.value.split(","),
       description: inputDescricao.value,
       scheduled: new Date (inputData.value).toISOString(),
       number_tickets: parseInt(inputLotacao.value) 
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(novoEvento),
        headers: {
            "Content-Type": "application/json",
          },
    };

    await fetch(`${BASE_URL}/events`, options);

    alert("Deu bom")
}

