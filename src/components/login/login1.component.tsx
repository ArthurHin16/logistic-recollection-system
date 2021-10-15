import { FC, useState } from 'react';
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@mui/material';
import { LockOutlined as  LockOutLinedIcon} from '@mui/icons-material';
import { useStyles } from './login.styles';
import axios from 'axios';
import { ILogin } from '../../models/login.model';
import { useHistory } from "react-router-dom";
import { useSnackbar } from 'notistack';
import { useContext } from 'react';
import { AuthContext } from '../../auth-context';

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

    //Funcion del Hook
    const userContext = useContext(AuthContext);

   const login1 = () =>  {
    axios.post('http://localhost:5000/admin/login', login)
    .then((response) => {
        console.log('res from server: ', response);
        if (response){
            userContext.login(); //Validar que exista o que no exista
            history.push(`/admin`);
            enqueueSnackbar('Bienvenido!', { 
            variant: 'success',
            resumeHideDuration: 2000,
                anchorOrigin:
                    { horizontal: 'right', vertical: 'bottom' }
            });  
        }
    })
    .catch(err => {
        console.log(err);
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