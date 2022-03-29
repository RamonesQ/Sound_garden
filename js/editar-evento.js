const inputNome = document.querySelector("#nome");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const form = document.querySelector("form"); // passar para evento onclick, quando acionado o botão enviar


const parametrosURL = new URLSearchParams(window.location.search);
const parametrosID = parametrosURL.get("id");
const mostraEvento = async (e) => {
    const resposta = await fetch(`${BASE_URL}/events/${parametrosID}`, {
        method: "GET",
        // redirect: "follow"
    });

 const respostaAPI = await resposta.json();    
    console.log(respostaAPI)

inputNome.value = respostaAPI.name;
inputAtracoes.value = respostaAPI.attractions;
inputDescricao.value = respostaAPI.description;
inputData.value = respostaAPI.scheduled;
inputLotacao.value = respostaAPI.number_tickets;
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
       scheduled: new Date (inputData.value).toISOString(),
       number_tickets: parseInt(inputLotacao.value) 
    };

    const options = {
        method: 'PUT',
        body: JSON.stringify(editarEvento),
        headers: {
            "Content-Type": "application/json",
          },
    };

   const resposta = await fetch(`${BASE_URL}/events`, options);
   const conteudoResposta = await resposta.json();
   console.log(conteudoResposta)
    alert("Deu bom")

} catch (error) {
    console.log(error)
       alert("Deu ruim")
}
}
