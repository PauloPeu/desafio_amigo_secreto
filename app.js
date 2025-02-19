//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

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
    // Array com os itens da lista
    let itens = amigos;
  
    // Seleciona a lista no HTML
    let lista = document.getElementById("listaAmigos");

    for (let cont = 0; cont < itens.length; cont++){
        
        // Limpa a lista atual
        lista.innerHTML = "";
        
        // Adiciona cada item do array à lista
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
                console.log(amigos[numeroSorteado], (numeroSorteado));
            }
        }
}
