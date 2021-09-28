import { FC } from 'react';
import { Grid, Container, Paper, Avatar, Typography, TextField, Button } from '@mui/material';
import { LockOutlined as  LockOutLinedIcon} from '@mui/icons-material'; 
import './coordinator.styles.css'
import Logo from '../images/bamx-oficial.png';
import Logout from '../assets/log-out.png';
import Ruta from '../assets/ruta.png';
import Camion from '../assets/camion-de-reparto.png';

export const CoordinatorComponent: FC = (): JSX.Element => {
    return(
        <Grid container>
 
            <Grid container className= "top">
                <img src = {Logo} id = 'logoMorelos'/>
                <p id = 'letra_coordinador'>Coordinador</p>
                <Grid item id = 'apartadoLogout'>
                    <p id = 'letra_cerrarSesion'>Cerrar sesion</p>
                    <img src = {Logout} id = 'logoLogout'/>
                </Grid>
            </Grid>

            <Grid container className = "down">
                <Paper elevation= {3} className= "card" >
                    <img src = {Ruta} className="imagecard"/>
                    <p className="cardText">Rutas</p>
                </Paper>
                <Paper elevation= {3} className= "card">
                    <img src = {Camion} className="imagecard"/>
                    <p className="cardText">Solicitudes de entrega</p>
                </Paper>
            </Grid>
        </Grid>
    )
}