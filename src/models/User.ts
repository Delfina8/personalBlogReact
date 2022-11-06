// Nesse arquivo preciso informar os campos que existem no meu banco de dados
//No User.ts farei o cadastro

//Abrir o swagger do back-end do projeto e copiar as informações do usuario login e colar aqui, essa seção deve estar igual ao back-end
interface User {
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
}

export default User;