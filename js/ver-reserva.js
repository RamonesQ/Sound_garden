const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const mostrarReservas = async() => { 
    const lista = document.querySelector('tbody');
const Options = {
    method :'GET',
    redirect :'follow',
};
    const request = await fetch (`${BASE_URL}/bookings`, Options)
    const conteudoResposta = await request.json();

    let Admin = '';

    for(let index = 0; index < conteudoResposta.length; index++){
        Admin += `<tr>
        <th scope="row">${index}</th>
        <td>${conteudoResposta[index].owner_name}</td>
        <td>${conteudoResposta[index].owner_email}</td>
        <td>${conteudoResposta[index].number_tickets}</td>
        <td>
            <a href="excluir-reserva.html?id=${conteudoResposta[index]._id}" class="btn btn-danger">excluir</a>
        </td>
    </tr>`
    }
    lista.innerHTML = Admin
};    

mostrarReservas()