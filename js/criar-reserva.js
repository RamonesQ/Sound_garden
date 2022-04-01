const reservaNome = document.querySelector("#nome");
const reservaEmail = document.querySelector("#e-mail");
const reservaLotacao = document.querySelector("#lotacao");


const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const form = document.querySelector("form"); 

const parametrosURL = new URLSearchParams(window.location.search);
const parametrosID = parametrosURL.get("id");

async function Lotacao(evento){
    evento.preventDefault();
   try {
       const resposta = await fetch(`${BASE_URL}/event/${parametrosID}`, {method: "GET"})
       const conteudoResposta = await resposta.json();
       reservaNome.innerHTML = conteudoResposta.name;
       reservaLotacao.innerHTML = conteudoResposta.number_tickets;
   }
   catch(e){
    alert("Deu ruim")
    window.location.reload()   
}
}
Lotacao()

form.onsubmit = async (evento) =>{
    evento.preventDefault();
   try {
       
    const novaReserva = {
       owner_name: reservaNome.value,
       owner_email: reservaEmail.value,
       number_tickets: parseInt(reservaLotacao.value) 
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(novoEvento),
        headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow"
    };

   const resposta2 = await fetch(`${BASE_URL}/bookings`, options);
   const conteudoResposta = await resposta2.json();
   
   console.log(conteudoResposta)
    alert("Evento criado com sucesso!")
    window.location.href = ("index.html")
} catch (error) {
    console.log(error)
       alert("Deu ruim")
}
}
