const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const options = {
    method: "GET",
}

const parametrosURL = new URLSearchParams(window.location.search);
const parametrosID = parametrosURL.get("id");

const listaEvento = async(e) => {
    e.preventDefault();
      
    const resposta = await fetch(`${BASE_URL}/events/${parametrosID}`, {
          // redirect: "follow"
    });

    const respostaAPI = await resposta.json();    
    console.log(respostaAPI)

inputNome.value = respostaAPI.name;
inputAtracoes.value = respostaAPI.attractions;
inputData.value = respostaAPI.scheduled;
}
const Admin = 
<tr>
    <th scope="row">1</th>
    <td>`${inputData}`</td>
    <td>`${inputNome}`</td>
    <td>`${inputAtracoes}`</td>
    <td>
    <a href="reservas.html?id=${item._id}" class="btn btn-dark">ver reservas</a>
    <a href="editar-evento.html?id=${item._id}" class="btn btn-secondary">editar</a>
    <a href="excluir-evento.html?id=${item._id}" class="btn btn-danger">excluir</a>
    </td>
</tr>