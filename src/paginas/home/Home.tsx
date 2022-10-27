import React from "react"; //Passo obrigatório: Importar  a biblioteca react
import "./Home.css"; //Importar o arquivo css que acabei de criar para dentro do componente

function Home(){ //Função home que vai retornar o conteúdo html que precisa ser renderizado na tela
    return (//Para retornar mais de um elemento devemos usar a div ou as tags de abertura e fechamento (<> </>)
        <>
            <h1 className="titulo">Home</h1>
            <img src="https://i.imgur.com/H88yIo2.png" alt="Imagem aleatória pessoas para a tela inicial" className="img" />
        </>
    );
}


export default Home; //É necessário exportar o componente para que seja acessível em outro arquivo