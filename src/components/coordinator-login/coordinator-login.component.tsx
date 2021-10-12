import { FC } from 'react';
import { Grid, Container, Paper, Avatar, Typography, TextField, Button } from '@mui/material';
import { LockOutlined as  LockOutLinedIcon} from '@mui/icons-material';
import { useStyles } from './coordinator-login.styles';


export const CoordinatorLoginComponent: FC = (): JSX.Element => {
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
                    <Typography component = 'h1' variant='h5'>
                        Coordinador
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
                                    style = {{ backgroundColor: '#FF9300'}}
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