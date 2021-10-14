import { FC, useState } from 'react';
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@mui/material';
import { LockOutlined as  LockOutLinedIcon} from '@mui/icons-material';
import { useStyles } from './login.styles';
import axios from 'axios';
import { ILogin } from '../../models/login.model';
import { useHistory } from "react-router-dom";
import { useSnackbar } from 'notistack';


export const LoginComponent1: FC = (): JSX.Element => {
    //Variable para los estilos
    const classes = useStyles();
    //Funcion para guardar las cosas
    const [login, setLogin] = useState<ILogin>({
        username: '',
        contrasena: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = event.currentTarget;
        setLogin({
          ...login,
          [name]: value
        });

    }

    let history = useHistory();
    const   { enqueueSnackbar }  = useSnackbar();

   const login1 = () =>  {
    axios.post('http://localhost:5000/admin/login', login)
    .then(response => {
        console.log('res from server: ', response);
        if (response){
            history.push(`/admin`);
            enqueueSnackbar('Bienvenido!', { 
                variant: 'success',
                resumeHideDuration: 2000,
                anchorOrigin:
                    { horizontal: 'right', vertical: 'bottom' }
            });
    }})
    .catch(err => {
        console.log(err);
    })
    }
    
    /*Login
    const baseUrl = "http://localhost:5000/admin/personal";
    
    let history = useHistory();
    const   { enqueueSnackbar }  = useSnackbar();

    const iniciarSesion = async() => {

        await axios.get(baseUrl, {params: {username: login.username, contrasena: login.contrasena}})
        .then (response => {
            const arr :any = response.data
            const user = arr.data.find((e: any) => e.username === login.username && e.contrasena === login.contrasena) 
            //console.log(user)
            if (user){
                history.push(`/admin`);
                enqueueSnackbar('Bienvenido!', { 
                    variant: 'success',
                    resumeHideDuration: 2000,
                    anchorOrigin:
                        { horizontal: 'right', vertical: 'bottom' }
                });
            }
        })
        .catch(error => {
            console.log(error);
        })
    }*/

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
                            name = 'username'
                            onChange = { handleChange }
                        />
                        <TextField
                            fullWidth
                            type = 'password'
                            color = 'primary'
                            margin = 'normal'
                            variant = 'outlined'
                            label = 'Contraseña'
                            name = 'contrasena'
                            onChange = { handleChange }

                        />
                        <Grid container justifyContent="flex-end">
                                <Button
                                    className = {classes.button}
                                    fullWidth
                                    variant = 'contained'
                                    style = {{ backgroundColor: '#FF9300'}}
                                    onClick = {()=>login1()}
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