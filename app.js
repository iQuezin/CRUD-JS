document.getElementById('btnAddJogo').addEventListener('click', function () {

    //Criando Constantes com os IDs dos elementos
    const cadastraJogo = document.getElementById('cadastraJogo'); // Atribuindo elemento
    const listaJogos = document.getElementById('listaJogos'); // Atribuindo elemento
    const jogo = cadastraJogo.value; // buscando o valor do input

    if (jogo.trim() !== "") { //verifica se a string está vazia
        const li = document.createElement('li'); // cria um li
        li.textContent = jogo;
        listaJogos.appendChild(li); // Adiciona o elemento no DOM
        // Salvar no local storage (implementar ainda)
        salvaJogos();
        cadastraJogo.value = ""; // Limpar o conteúdo do input

    }

    function salvaJogos() { // Salvar jogos
        const listaJogos = document.getElementById('listaJogos');
        let jogos = []; // Criando um vetor de jogos

        for(let i; i < listaJogos.children.length; i++) { // Percorrendo o vetor
            jogos.push(listaJogos.children[i].textContent);
        }
        localStorage.setItem('jogos', JSON.stringify(jogos)); //Adicionando ao local storage
    }

});