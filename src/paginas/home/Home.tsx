import React, {useEffect} from "react"; //Passo obrigatório: Importar  a biblioteca react
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from "@mui/material";
import "./Home.css"; //Importar o arquivo css que acabei de criar para dentro do componente
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import {toast} from 'react-toastify';

function Home() { //Função home que vai retornar o conteúdo html que precisa ser renderizado na tela
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
                toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
        });
            navigate("/login")

        }
    }, [token])

    return (//Para retornar mais de um elemento devemos usar a div ou as tags de abertura e fechamento (<> </>)
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Crie a sua jornada de desenvolvimento!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to='/postagens' className='text-decorator-none'>
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.postimg.cc/15VvTkVK/Untitled-2.png" alt="" width="600px" height="450px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}


export default Home; //É necessário exportar o componente para que seja acessível em outro arquivo