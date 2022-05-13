
const verificaCampos = () => document.querySelector('#form').reportValidity();
const cont = document.querySelector('#contador');
const validaSenha = (evento) => {
    evento.preventDefault();
    verificaCampos();
    const senha = document.querySelector('#senha').value;
    const nome = document.querySelector('#nome').value;
    if (senha !== '' && nome !== '') {
        if (senha.length >= 6 && senha.match(/[a-z]+/)
            && senha.match(/[A-Z]+/)
            && senha.match(/[!@#$%^&*()-+]+/)
            && senha.match(/[1-9]+/)) {
            cont.innerHTML = "<span style='color: #008000'>Salvo com sucesso!</span>"
        }
        else {
            cont.innerHTML = "<span style='color: rgb(224, 70, 70)'>Senha fora do padrão!</span>"
        }
    }
}
document.querySelector('#button').addEventListener('click', validaSenha);