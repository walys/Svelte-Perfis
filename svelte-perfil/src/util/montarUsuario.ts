import IRespositorio from "../interfaces/IRespositorio";
import type IUsuario from "../interfaces/IUsuario";

export default function montarUsuario(dadosUsuario: any, dadosRespositorios: any): IUsuario{
    const repositorios_recentes = dadosRespositorios.map((respositorio) => {
        return {
            nome: respositorio.name,
            url: respositorio.url 
        } as IRespositorio
    });
    return {
        login: dadosUsuario.login,
        avatar_url: dadosUsuario.avatar_url,
        perfil_url: dadosUsuario.url,
        nome: dadosUsuario.nome,
        repositorios_publicos: dadosUsuario.public_repos,
        seguidores: dadosUsuario.followers,
        repositorios_recentes,
    }
}