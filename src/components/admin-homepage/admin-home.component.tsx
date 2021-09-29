import { FC } from 'react';
import { Grid, Paper, Button,AppBar,Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import './admin-home.styles.css'
import Users from '../assets/users.png'
import Logo from '../images/bamx-oficial.png';
import Tienda from '../assets/tienda.png'
import Almacen from '../assets/almacen.png'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const AdminHomeComponent: FC = (): JSX.Element => {
    return(
        <Grid container>
              <AppBar position="static" style={{background: '#F9F6FB', height: '25vh'} }>
                <Toolbar>
                  <Grid container xs={3} sm={3} md = {3} lg = {2}>
                    <img src = {Logo} width='100%'/> 
                  </Grid>      
                  <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} color='#FF9300' align='center'>
                    Administrador
                  </Typography>
                  <Button style = {{color: '#542463'}} size="medium">Cerrar sesión <ExitToAppIcon/></Button>
                </Toolbar> 
            </AppBar>
            
            <Grid container className = "down">
                <Button>
                    <Paper elevation= {3} className= "card" >
                        <img src = {Users} className="imagecard"/>
                        <p className="cardText">Usuarios</p>
                    </Paper>
                </Button>
                <Button>
                    <Paper elevation= {3} className= "card">
                        <img src = {Tienda} className="imagecard"/>
                        <p className="cardText">Tiendas</p>
                    </Paper>
                </Button>
                <Button>
                    <Paper elevation= {3} className= "card">
                        <img src = {Almacen} className="imagecard"/>
                        <p className="cardText">Bodegas</p>
                    </Paper>
                </Button>
            </Grid>
        </Grid>
    )
}