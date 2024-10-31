function buscaUsuario(nomeDeUsuario: String){
    return fetch(
        `https://api.github.com/users/${nomeDeUsuario}`
    );
}

function buscaRespositorios(nomeDeUsuario: String){
    return fetch(
        `https://api.github.com/users/${nomeDeUsuario}/repos?sort=created&per_page=5`
    );
}

export {buscaUsuario, buscaRespositorios};