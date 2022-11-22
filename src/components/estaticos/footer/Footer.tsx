import React from "react";
import {Box} from "@mui/material";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography,Grid} from "@material-ui/core";
import './Footer.css';
import { GitHub } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";


function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    var footerComponent;
    if (token != '') {
        footerComponent =   <>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://github.com/Delfina8" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon className='redes' />
                        </a>
                        <a href="https://www.linkedin.com/in/delfinavicente/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className='redes' />
                        </a>
                    </Box>
                </Box>
                <Box className='box2'>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2022 Copyright:</Typography>
                    </Box>
                    <Box  >
                        <a target="_blank" href="" rel="noopener noreferrer" className='text-decorator-none'>
                            <Typography variant="subtitle2" gutterBottom className='textos' align="center">Delfina Vicente</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </>
    }
    return (
        <>
        {footerComponent}
        </>
    )
}

export default Footer;