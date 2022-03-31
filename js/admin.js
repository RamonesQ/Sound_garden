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
