let editarNome = document.querySelector("#nome");
let editarBanner = document.querySelector("#banner");
let editarAtracoes = document.querySelector("#atracoes");
let editarDescricao = document.querySelector("#descricao");
let editarData = document.querySelector("#data");
let editarLotacao = document.querySelector("#lotacao");

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const form = document.querySelector("form"); // passar para evento onclick, quando acionado o botão enviar

function pegaId(){
    const url = new URL(window.location.href)
    const id = url.searchParams.get('_id')
    return id
}

// const parametrosURL = new URLSearchParams(window.location.search);
// const parametrosID = parametrosURL.get("id");

const mostrarEvento = async () => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
      
    const resposta = await fetch(`${BASE_URL}/events/${pegaId}`, options);
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
       
    editarEvento = {
       name: editarNome.value,
       poster: "link da imagem",
       attractions: editarAtracoes.value.split(","),
       description: editarDescricao.value,
       scheduled: new Date (editarData.value),
       number_tickets: parseInt(editarLotacao.value) 
    };

    const options = {
        method: 'PUT',
        body: JSON.stringify(editarEvento),
        headers: {
            "Content-Type": "application/json",
          },
    };

   const resposta = await fetch(`${BASE_URL}/events${id}`, options);
//    const conteudoResposta = await resposta.json();
   console.log(conteudoResposta)
    alert("Deu bom")

} catch (error) {
    console.log(error)
       alert("Deu ruim")
}
}
