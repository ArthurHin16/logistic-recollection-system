import { FC, useContext } from 'react';
import { Grid, Paper, Button } from '@mui/material';
import './admin-home.styles.css'
import Users from '../assets/users.png'
import Tienda from '../assets/tienda.png'
import Almacen from '../assets/almacen.png'
//useHistory: para colocar los links
import { useHistory } from "react-router-dom";
//Componente header
import { HeaderComponent } from '../header/header.component';
import { AuthContext } from '../../auth-context';
import { useEffect } from 'react';

export const AdminHomeComponent: FC = (): JSX.Element => {
    //Función del Hook useHistory
    let history = useHistory();

    //Contexto
    const context = useContext(AuthContext);

    function handleClick2() {
        history.push("/admin-user");
    }

    function handleClick3() {
        history.push("/admin-stores");
    }

    function handleClick4() {
        history.push("/admin-grocery");
    }

    console.log(context, context.userState);

    useEffect(() => { //SE CONSUME
        if(!context.userState) {
            history.push('/');     
        } 
     },)

    return(
        <Grid container>
            <Grid>
                <HeaderComponent/>
            </Grid>

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