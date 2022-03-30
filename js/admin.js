const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const mostrarEventos = async() => { 
    const lista = document.querySelector('tbody');
const Options = {
    method :'GET',
    redirect :'follow',
};
    const request = await fetch (`${BASE_URL}/events`, Options)
    const conteudoResposta = await request.json();

    let Admin = '';

    for(let index = 0; index < conteudoResposta.length; index++){
        Admin += `<tr>
        <th scope="row">${index}</th>
        <td>${conteudoResposta[index].scheduled}</td>
        <td>${conteudoResposta[index].name}</td>
        <td>${conteudoResposta[index].attractions}</td>
        <td>
            <a href="reservas.html?id=${conteudoResposta[index]._id}" class="btn btn-dark">ver reservas</a>
            <a href="editar-evento.html?id=${conteudoResposta[index]._id}" class="btn btn-secondary">editar</a>
            <a href="excluir-evento.html?id=${conteudoResposta[index]._id}" class="btn btn-danger">excluir</a>
        </td>
    </tr>`
    }
    lista.innerHTML = Admin
};    

mostrarEventos()





// O CÓDIGO ESTAVA ASSIM



// const inputNome = document.querySelector("#nome");
// const inputAtracoes = document.querySelector("#atracoes");
// const inputDescricao = document.querySelector("#descricao");
// const inputData = document.querySelector("#data");
// const inputLotacao = document.querySelector("#lotacao");

// const parametrosURL = new URLSearchParams(window.location.search);
// const parametrosID = parametrosURL.get("id");

// const listaEvento = async(e) => {
//     e.preventDefault();
//     const options = {
//         method: "GET",
//         redirect: "follow",
//         headers: {
//             "Content-Type": "application/json"
//           },
//     }
//     const resposta = await fetch(`${BASE_URL}/events/${parametrosID}`, options);

//     const respostaAPI = await resposta.json();    
//     console.log(respostaAPI)

// inputNome.value = respostaAPI.name;
// inputAtracoes.value = respostaAPI.attractions;
// inputData.value = respostaAPI.scheduled;
// }
// listaEvento()

// const Admin = 
//     `<tr>
//     <th scope="row">1</th>
//     <td>${inputData}</td>
//     <td>${inputNome}</td>
//     <td>${inputAtracoes}</td>
//     <td>
//     <a href="reservas.html?id=${parametrosID}" class="btn btn-dark">ver reservas</a>
//     <a href="editar-evento.html?id=${parametrosID}" class="btn btn-secondary">editar</a>
//     <a href="excluir-evento.html?id=${parametrosID}" class="btn btn-danger">excluir</a>
//     </td>
// </tr>
// `
// document.getElementById("divEventos").innerHTML += Admin