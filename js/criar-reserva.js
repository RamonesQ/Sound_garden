const reservaNome = document.querySelector("#nome");
const reservaEmail = document.querySelector("#e-mail");
const reservaLotacao = documento.querySelector("#lotacao");


const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const form = document.querySelector("form"); 

const parametrosURL = new URLSearchParams(window.location.search);
const parametrosID = parametrosURL.get("id");

body.onload = async (evento) =>{
    evento.preventDefault();
   try {
       const resposta = await fetch(`${BASE_URL}/bookings/event/${parametrosID}`, {method: "GET"})
       const conteudoResposta = await resposta.json();

        conteudoResposta.forEach((item, index) =>{
           

        })
        




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
    alert("Deu bom")
    window.location.href = ("index.html")
} catch (error) {
    console.log(error)
       alert("Deu ruim")
}
}