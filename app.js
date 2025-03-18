// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    // Captura o valor do input
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Valida se o campo não está vazio
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Atualiza a exibição da lista de amigos
    exibirListaAmigos();

    // Limpa o campo de entrada
    input.value = '';
}

// Função para exibir os amigos na lista
function exibirListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    amigos.forEach((amigo) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        lista.appendChild(itemLista);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Se já houve um sorteio, reinicia a lista e o array
    if (document.getElementById('resultado').innerHTML !== '') {
        amigos = []; // Zera o array
        document.getElementById('listaAmigos').innerHTML = ''; // Limpa a lista na tela
        document.getElementById('resultado').innerHTML = ''; // Apaga o resultado do sorteio
    }

    amigos.push(nome);
    exibirListaAmigos();
    input.value = '';
}
