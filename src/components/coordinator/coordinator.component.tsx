import { FC } from 'react';
import { Grid, Paper, Button,AppBar,Box, Toolbar,Chip, Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import './coordinator.styles.css'
import Logo from '../images/bamx-oficial.png';
import Logout from '../assets/log-out.png';
import Ruta from '../assets/ruta.png';
import Camion from '../assets/camion-de-reparto.png';

export const CoordinatorComponent: FC = (): JSX.Element => {
    return(
        <Grid container>
                <AppBar position="static" style={{background: '#F9F6FB', height: '31.88vh'} }>
                    <Toolbar>
                        <img src = {Logo} id='logoMorelos'/> 
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} color='#FF9300' align='center'>
                        Coordinador
                </Typography>
                <Button style={{ color: '#542463' }}>Cerrar sesion</Button>
                </Toolbar>
            </AppBar>
            
            {/*<Grid container item  className= "top" spacing={3}>
                <Grid item xl={8} md={4} xs ={12} > 
                    <img src = {Logo} id = 'logoMorelos'/>
                </Grid>

                <Grid item xl={8} md={4} xs ={12} >
                <p id = 'letra_coordinador'>Coordinador</p>
                </Grid>
                
                <Grid item id = 'apartadoLogout' xl={8} md={4} xs ={12}>
                    <p id = 'letra_cerrarSesion'>Cerrar sesion</p>
                    <img src = {Logout} id = 'logoLogout'/>
                </Grid>
    </Grid>*/}

            <Grid container className = "down">
                <Button>
                    <Paper elevation= {3} className= "card" >
                        <img src = {Ruta} className="imagecard"/>
                        <p className="cardText">Rutas</p>
                    </Paper>
                </Button>
                <Button>
                    <Paper elevation= {3} className= "card">
                        <img src = {Camion} className="imagecard"/>
                        <p className="cardText">Solicitudes de entrega</p>
                    </Paper>
                </Button>
            </Grid>
        </Grid>
    )
}
/*Preguntas al artur: ¿Tengo que meter el paper en un boton? 
¿Responsividad en la parte superior?*/