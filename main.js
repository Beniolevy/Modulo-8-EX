const form = document.getElementById('form-num');
let linhas = '';

form.addEventListener('submit', function(e)
{
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputDddContato = document.getElementById('ddd-contato');
    const inputNumContato = document.getElementById('num-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td> ${inputDddContato.value}</td>`;
    linha += `<td>${inputNumContato.value}</td>`;
    linha += '</tr>'

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputDddContato.value = '';
    inputNumContato.value = '';
})