import { FC } from 'react';
import { Grid, Paper, Button,AppBar,Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import './admin-home.styles.css'
import Users from '../assets/users.png'
import Logo from '../images/bamx-oficial.png';
import Tienda from '../assets/tienda.png'
import Almacen from '../assets/almacen.png'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
//useHistory: para colocar los links
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies();

export const AdminHomeComponent: FC = (): JSX.Element => {
    //Función del Hook useHistory
    let history = useHistory();

    function handleClick() {
        history.push("/admin");
    }

    function handleClick2() {
        history.push("/admin-user");
    }

    function handleClick3() {
        history.push("/admin-stores");
    }

    function handleClick4() {
        history.push("/admin-grocery");
    }

    //LOGOUT
    const cerrarSesion = () => {
        console.log('username: '+cookies.get('username'))
        cookies.remove('username', {path: "/"});
        if(!cookies.get('username')){
            history.push("/")
            console.log('ADIOS username: '+cookies.get('username'))
        }
    }
    console.log('username: '+cookies.get('username'));

    return(
        <Grid container>
            <AppBar position="static" style={{background: '#F9F6FB', height: '25vh'} }>
                <Toolbar>
                  <Grid container xs={3} sm={3} md = {3} lg = {2}>
                    <Button onClick={handleClick}><img src = {Logo} alt="logo" width='100%'/></Button>
                  </Grid>      
                  <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} color='#FF9300' align='center'>
                    Administrador
                  </Typography>
                  <Button style = {{color: "#FF9300"}} size="medium" onClick={cerrarSesion}>Cerrar sesión <ExitToAppIcon/></Button>
                </Toolbar> 
            </AppBar>
            
            <Grid container className = "down">
                <Button
                    type="button" 
                    onClick={handleClick2}>
                    <Paper elevation= {3} className= "card" >
                        <img src = {Users} alt = "Users" className="imagecard"/>
                        <p className="cardText">Usuarios</p>
                    </Paper>
                </Button>
                <Button
                    type="button" 
                    onClick={handleClick3}>
                    <Paper elevation= {3} className= "card">
                        <img src = {Tienda} alt = "Tienda" className="imagecard"/>
                        <p className="cardText">Tiendas</p>
                    </Paper>
                </Button>
                <Button
                    type="button" 
                    onClick={handleClick4}>
                    <Paper elevation= {3} className= "card">
                        <img src = {Almacen} alt = "Almacen" className="imagecard"/>
                        <p className="cardText">Bodegas</p>
                    </Paper>
                </Button>
            </Grid>
        </Grid>
    )
}