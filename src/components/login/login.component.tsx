import { FC, useState } from 'react';
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@mui/material';
import { LockOutlined as  LockOutLinedIcon} from '@mui/icons-material';
import { useStyles } from './login.styles';
import axios from 'axios';


export const LoginComponent: FC = (): JSX.Element => {
    //Variable para los estilos
    const classes = useStyles();
    //Funcion para guardar las cosas
    const [body, setBody] = useState({ user: '', password: '' });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBody({
            ...body, //Mantener todo lo que ya esta en la constante body
            [e.target.name]: e.target.value
        })
    };

    //Login
    const baseUrl = "http://localhost:5000/admin/personal";

    const iniciarSesion = async() => {
        await axios.get(baseUrl, {params: {correo: body.user, contrasena: body.password}})
        .then (response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
       <Grid container component = "main" className = {classes.root}>
           <CssBaseline/>
           <Container component = { Paper } elevation = { 5 } maxWidth = 'xs' className = {classes.container}>
               <div className = {classes.div}>
                    <Avatar className = {classes.avatar}>
                        <LockOutLinedIcon/>
                    </Avatar>
                    <Typography component = 'h1' variant='h5'>
                        ¡Bienvenido! 
                    </Typography>
                    <Typography component = 'h1' variant='h5'>
                        Administrador
                    </Typography>
                    <form className = {classes.form}>
                        <TextField
                            fullWidth
                            autoFocus
                            color = 'primary'
                            margin = 'normal'
                            variant = 'outlined'
                            label = 'Correo eletrónico'
                            name = 'user'
                            value = { body.user }
                            onChange = { handleChange }
                        />
                        <TextField
                            fullWidth
                            type = 'password'
                            color = 'primary'
                            margin = 'normal'
                            variant = 'outlined'
                            label = 'Contraseña'
                            name = 'password'
                            value = { body.password }
                            onChange = { handleChange }

                        />
                        <Grid container justifyContent="flex-end">
                                <Button
                                    className = {classes.button}
                                    fullWidth
                                    variant = 'contained'
                                    style = {{ backgroundColor: '#FF9300'}}
                                    onClick = {()=>iniciarSesion()}
                                >
                                    Iniciar sesión
                                </Button>
                        </Grid>
                    </form>
               </div>
           </Container>
       </Grid>
    )
}