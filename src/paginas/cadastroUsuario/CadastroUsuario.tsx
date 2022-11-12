import React, {useState, useEffect, ChangeEvent} from "react";
import './CadastroUsuario.css';
import {Box} from '@mui/material';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario} from "../../services/Service";
import {Grid, Typography, TextField, Button} from "@material-ui/core";
import { toast } from "react-toastify";


function CadastroUsuario(){
    
    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
        id: 0,
        nome:'',
        usuario:'',
        foto:'',
        senha:'',
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome:'',
            usuario:'',
            foto:'',
            senha:'',
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha == user.senha){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuario cadastrado com sucesso', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
    });
        }else{
                toast.error('Dados inconsistentes. Por favor verifique as informações de cadastro.', {
                position: "top-right",                        
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
        });
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center' >
            <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='textos2'>Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="Usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id="confirmarSenha" label="confirmarSenha" variant="outlined" name="confirmarSenhaha" margin="normal" type="password" fullWidth/>
                        <Box marginTop={2} textAlign="center">
                            <Link to="/login" className="text-decorator-none">
                                <Button variant="contained" style={{ color: "white", borderColor: "white", backgroundColor: "#FF0000"}} className='btnCancelar'>
                                    Cancelar 
                                </Button>
                            </Link>
                            <Button type='submit' variant="contained" style={{ color: "white", borderColor: "white", backgroundColor: "#FF731D" }}>
                                    Cadastrar 
                            </Button>
                        </Box>
                    </form> 
            </Box>
            </Grid>

        </Grid>
    );
}

export default CadastroUsuario;