import axios from "axios"; //O axer vai interceptar todas as requisições, por isso iremos importar ele

/*Criar um objeto api que vai ser exportado depois, esse objeto vai receber o axios e recebe todas as 
funcionalidades que o axios possui. 
O create permite armazenar dentro do axios o endereço da API
A propriedade baseURL armazena o endereço da API
*/
export const api =axios.create({
    baseURL:'https://personalblog-vs57.onrender.com'
})

/*Criação do método que vai fazer a requisição na API
Sobre os parâmetros dentro do async(): 
url = Vai concatenar a baseURL com a URL de login (/usuarios/logar), ex: https://personalblog-vs57.onrender.com/usuarios/logar
dados = Esse parâmetro contém os dados que serão enviados para a API (os dados de usuário e senha)
seDado = Recebe a resposta da API, recebe um objeto Json que contém os dados do usuário e um token (esse token será usado para autenticar o usuário)
Com esse método consigo autenticar o usuário
*/
export const login = async (url: any, dados:any, setDado:any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}

//Para o cadastro
export const cadastroUsuario = async (url: any, dados:any, setDado:any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

/* Requisição para buscar/listar as postagens ou temas
Esse método faz um get na API para poder retornar os dados e esses dados serão atribuídos ao front-end
*/
export const busca = async(url: any, setDado: any, header: any) => { 
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

/* Requisição para buscar/listar as postagens ou temas por ID
*/
export const buscaId = async(url: any, setDado: any, header: any) => { 
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

/* Requisição para cadastrar as postagens ou temas
*/
export const post = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.post(url,dados,header)
    setDado(resposta.data)
}

/* Requisição para atualizar as postagens ou temas
*/
export const put = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.put(url,dados,header)
    setDado(resposta.data)
}

/* Requisição para deletar as postagens ou temas por ID
*/
export const deleteId = async(url: any,header: any) => { 
    await api.delete(url,header)
}