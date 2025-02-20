//Jogo do Amigo Secreto

let amigos = [];
function adicionarAmigo() {
    if (document.querySelector('input').value == "") {
        alert('Você Precisa digitar um nome!!');    
    }else{
        let nomes = document.querySelector('input').value;
        amigos.push(nomes);
    }
    limparCampo();
    exibirNomes();
}
function limparCampo() {
    let limparNome = document.querySelector('input');
    limparNome.value = '';
}
function exibirNomes() {
    let itens = amigos;
    let lista = document.getElementById("listaAmigos");
    for (let cont = 0; cont < itens.length; cont++){
        lista.innerHTML = "";
        itens.forEach(function(item) {
            let li = document.createElement("li");
            li.textContent = item;
            lista.appendChild(li);
        });
    }
}
function sortearAmigo() {
    let tamanhoLista = amigos.length;
    sorteador(tamanhoLista); 
    function sorteador() {
        if (amigos == "") {
            let resultado = document.getElementById("resultado");
            resultado.innerHTML = (`VOCÊ NÃO DIGITOU NENHUM NOME!!`);
        }else{
            let numeroSorteado = (Math.floor(Math.random() * (tamanhoLista - 0)));
            resultado.innerHTML = (`Nome Sorteado: ${amigos[numeroSorteado]}`);
            }
        }
}
