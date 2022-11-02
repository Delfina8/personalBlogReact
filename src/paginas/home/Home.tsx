import React from "react"; //Passo obrigatório: Importar  a biblioteca react
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from "@mui/material";
import "./Home.css"; //Importar o arquivo css que acabei de criar para dentro do componente

function Home(){ //Função home que vai retornar o conteúdo html que precisa ser renderizado na tela
    return (//Para retornar mais de um elemento devemos usar a div ou as tags de abertura e fechamento (<> </>)
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Acompanhe essa jornada de desenvolvimento!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.postimg.cc/15VvTkVK/Untitled-2.png" alt="" width="600px" height="450px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );
}


export default Home; //É necessário exportar o componente para que seja acessível em outro arquivo