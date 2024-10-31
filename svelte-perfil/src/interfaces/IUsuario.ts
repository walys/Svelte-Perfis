import IRespositorio from "./IRespositorio";

export default interface IUsuario {
    login: String;
    avatar_url: String;
    perfil_url: String;
    nome: String;
    repositorios_publicos: Number;
    seguidores: Number;
    repositorios_recentes: IRespositorio[];
}