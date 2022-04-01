const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const mostrarEventos = async() => { 
    const listaDeEventos =  document.querySelector("#eventos")
const Options = {
    method :'GET',
    redirect :'follow',
};
    const request = await fetch (`${BASE_URL}/events`, Options)
    const conteudoResposta = await request.json();

    const eventos = conteudoResposta.slice(0,3);
    eventos.forEach(item => { listaDeEventos.innerHTML +=  `
    <article class="evento card p-5 m-3">
    <h2>${item.name}${item.scheduled}</h2>
    <h4>${item.attractions}</h4>
    <p>${item.description}.</p>
    <a href="#" id="myBtn" class="btn btn-primary">reservar ingresso</a>
    </article>`
    });
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelectorAll("#myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.forEach ( (botao) => 
botao.onclick = function (evento) {
    modal.style.display = "block";
    evento.preventDefault();
})
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
};    
mostrarEventos()