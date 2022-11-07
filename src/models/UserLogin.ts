// Nesse arquivo preciso informar os campos que existem no meu banco de dados

//Abrir o swagger do back-end do projeto e copiar as informações do usuario login e colar aqui, essa seção deve estar igual ao back-end
interface UserLogin {
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    token?: string| null //Pode ser string ou (|) nulo, o ponto de interrogação indica que ele é opcional
}

export default UserLogin;