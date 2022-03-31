const reservaNome = document.querySelector("#nome");
const reservaEmail = document.querySelector("#e-mail");
const reservaLotacao = document.querySelector("#lotacao");

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com/";

const form = document.querySelector("form");

form.onsubmit = async (evento) => {
    evento.preventDefault();
    try {
        const novaReserva = {
            owner_name: reservaNome.value,
            owner_email: reservaEmail.value,
            number_tickets: parseInt(reservaLotacao.value),
        };

        const options = {
            method: "POST",
            body: JSON.stringify(novaReserva),
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
        };

        const resposta = await fetch(`${BASE_URL}/bookings`, options);
        const conteudoResposta = await resposta.json();

        console.log(conteudoResposta);
        alert("Deu bom");
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
        alert("Deu ruim");
    }
};
