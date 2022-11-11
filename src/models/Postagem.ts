import Tema from './Tema'

/*
Ao cadastrar uma postagem, a mesma precisará ter tudo que está dentro das chaves
O tema será pego da model Tema, a model postagem cadastra as postagens 
*/

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema?:Tema|null
}

export default Postagem;