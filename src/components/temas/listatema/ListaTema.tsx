import React, {useState, useEffect} from 'react'
import { Link, Navigate } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from "@mui/material";
import './ListaTema.css';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';

function ListaTema() {

        const [temas, setTemas] = useState<Tema[]>([])  // constante para armazenar os temas do back-end
        const [token, setToken] = useLocalStorage('token') // constante que vai acessar o token
        let navigate = useNavigate(); // faz o redirecionamento de páginas

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])


    async function getTema() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }


    useEffect(() => {
        getTema()
    }, [temas.length])


    return (
        <>
        {
            temas.map(tema => (
            <Box m={2} >
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Tema
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {tema.descricao}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5} >

                            <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                <Box mx={1} >
                                    <Button variant="contained" className="marginLeft botao" size='small' >
                                        Atualizar
                                    </Button>
                                </Box>
                            </Link>
                            <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" size='small' color="secondary" >
                                        Deletar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
            ))
            }
        </>
    );
}


export default ListaTema;