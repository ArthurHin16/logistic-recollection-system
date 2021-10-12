import { FC } from 'react';
import { Grid, Paper, Button,AppBar,Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import './coordinator.styles.css'
import Logo from '../images/bamx-oficial.png';
import Ruta from '../assets/ruta.png';
import Camion from '../assets/camion-de-reparto.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useHistory } from "react-router-dom";


export const CoordinatorComponent: FC = (): JSX.Element => {
    let history = useHistory();

    function handleClick() {
        history.push("/routes");
    }

    function handleClick2() {
        history.push("/delivery-requests");
    }

    return(
        <Grid container>
                <AppBar position="static" style={{background: '#F9F6FB', height: '25vh'} }>
                    <Toolbar>
                        <Grid container xs={3} sm={3} md = {3} lg = {2}>
                            <img src = {Logo} alt = "Logo" width='100%'/> 
                        </Grid>


                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} color='#FF9300' align='center'>
                        Coordinador
                </Typography>
                <Button style = {{color: '#542463'}} size="medium">Cerrar sesión <ExitToAppIcon/></Button>
                </Toolbar>
                
                
            </AppBar>
            
            <Grid container className = "down">
                <Button onClick={handleClick}>
                    <Paper elevation= {3} className= "card" >
                        <img src = {Ruta} alt = "Ruta" className="imagecard"/>
                        <p className="cardText">Rutas</p>
                    </Paper>
                </Button>
                <Button onClick={handleClick2}>
                    <Paper elevation= {3} className= "card">
                        <img src = {Camion} alt = "Camion" className="imagecard"/>
                        <p className="cardText">Solicitudes de entrega</p>
                    </Paper>
                </Button>
            </Grid>
        </Grid>
    )
}
