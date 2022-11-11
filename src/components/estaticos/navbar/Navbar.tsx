import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, alpha, Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom"
import "./Navbar.css"
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

function Navbar() {

  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  //Função que vai efetivar o logout. Passa um valor vazio para o token, se houver algum valor armazenado no token ele apaga esse token
  function goLogout() {
    setToken('')
    alert('Usuário desconectado')
    navigate('/login')
  }

  const classes = useStyles(); // Isso é da MUI - Personalização da navbar

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className='cursor' style={{ backgroundColor: "#000000" }}>

          <Typography className={classes.title} variant="h6" noWrap>
            JORNADA DEV
          </Typography>


          <Box display="flex" justifyContent="end" className={classes.title}>
            <Link to="/home" className="text-decorator-none">
              <Box mx={1} className='cursor' style={{ paddingRight: "1rem" }}>
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>
            </Link>
            <Link to="/postagens" className="text-decorator-none">
              <Box mx={1} className='cursor' style={{ paddingRight: "1rem" }}>
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Box>
            </Link>
            <Link to="/temas" className="text-decorator-none">
              <Box mx={1} className='cursor' style={{ paddingRight: "1rem" }}>
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Box>
            </Link>
            <Link to="/formularioTema" className="text-decorator-none">
              <Box mx={1} className='cursor' style={{ paddingRight: "1rem" }}>
                <Typography variant="h6" color="inherit">
                  Cadastrar Tema
                </Typography>
              </Box>
            </Link>
            <Box mx={1} className='cursor' onClick={goLogout} style={{ paddingRight: "1rem" }}>
              <Typography variant="h6" color="inherit">
                Sair
              </Typography>
            </Box>
          </Box>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;