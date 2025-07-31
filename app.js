let amigo = document.getElementById("amigo")
let listaAmigos = document.getElementById("listaAmigos")
let resultado = document.getElementById("resultado")

arreyAmigos = []

function adicionarAmigo() {
    if (!isNaN(Number(amigo.value)) || amigo.value == '') {
        alert("-ERRO- Por favor, insira um nome.")

    } else {
        arreyAmigos.push(amigo.value);
        console.log(arreyAmigos);
        listaAmigos.innerHTML += amigo.value + "<br>"

        resultado.innerHTML = ''
    }
    amigo.value = ''
}

function sortearAmigo() {
    if (arreyAmigos.length === 0 || arreyAmigos.length == 1) {
        alert("A lista deve ter 2 ou mais amigos");
    }
    else {
        let num = Math.floor(Math.random() * arreyAmigos.length) + 0;
        resultado.innerHTML = `O seu amigo secreto é: ${arreyAmigos[num]}`
        listaAmigos.innerHTML = ''
        arreyAmigos = []
    }
}





