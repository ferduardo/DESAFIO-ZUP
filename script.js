const main = document.querySelector('main');

gerarPersonagemAleatorio = () => {
return  Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    for(var i = 0; i < 4; i++) {
        let aleatorio = gerarPersonagemAleatorio();
    fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`, {
        method: 'GET',
        headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        let personagem = document.createElement('div')
        let imagem = document.createElement('img')
        let nome = document.createElement('p')

        nome.innerHTML = data.name;
        imagem.src = data.image;
        imagem.alt = data.name;
        personagem.appendChild(nome);
        personagem.appendChild(imagem);
        main.appendChild(personagem);
    })
    } 
}
pegarPersonagem();

