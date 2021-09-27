import { FC } from 'react';
import { Grid, Container, Paper, Avatar, Typography, TextField, Button } from '@mui/material';
import { LockOutlined as  LockOutLinedIcon} from '@mui/icons-material';
import { useStyles } from './login.styles';


export const LoginComponent: FC = (): JSX.Element => {
    //Variable para los estilos
    const classes = useStyles();

    return (
       <Grid container component = "main" className = {classes.root}>
           <Container component = { Paper } elevation = { 5 } maxWidth = 'xs' className = {classes.container}>
               <div className = {classes.div}>
                    <Avatar className = {classes.avatar}>
                        <LockOutLinedIcon/>
                    </Avatar>
                    <Typography component = 'h1' variant='h5'>
                        ¡Bienvenido! 
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
                        />
                        <TextField
                            fullWidth
                            type = 'password'
                            color = 'primary'
                            margin = 'normal'
                            variant = 'outlined'
                            label = 'Contraseña'
                        />
                        <Grid container justifyContent="flex-end">
                                <Button
                                    className = {classes.button}
                                    fullWidth
                                    variant = 'contained'
                                    color = 'primary'
                                >
                                    Iniciar sesión
                                </Button>
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <Button 
                                className = {classes.button}
                                fullWidth
                                variant = 'text'
                                color = 'primary'
                            >
                                ¿Olvidaste tu contraseña?
                            </Button>
                        </Grid>
                    </form>
               </div>
           </Container>
       </Grid>
    )
}