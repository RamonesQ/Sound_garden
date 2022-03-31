let editarNome = document.querySelector("#nome");
let editarEmail = document.querySelector("#e-mail");
let editarLotacao = document.querySelector("#lotacao");

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const form = document.querySelector("form"); 

const parametrosURL = new URLSearchParams(window.location.search);
const parametrosID = parametrosURL.get("id");

const mostrarReserva = async () => {
    const resposta = await fetch(`${BASE_URL}/bookings/${parametrosID}`, {method: "GET"});
    const respostaAPI = await resposta.json();      

editarNome.value = respostaAPI.owner_name;
editarEmail.value = respostaAPI.owner_email;
editarLotacao.value = respostaAPI.number_tickets;
};

mostrarReserva();


form.onsubmit = async (evento) =>{
    evento.preventDefault();
  await fetch(`${BASE_URL}/events/${parametrosID}`, {method: "DELETE"});

 alert ("Deu bom! porra!!!")
window.location.href = ("reservas.html")
}


