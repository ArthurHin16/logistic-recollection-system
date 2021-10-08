import {FC} from 'react';
import './assign-warehouse.styles.css'
import { Grid, Paper, Button,AppBar,Toolbar} from '@mui/material';
import Typography from '@mui/material/Typography';
import Logo from '../images/bamx-oficial.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Label} from 'reactstrap';

export const AssignWarehouseComponent: FC = (): JSX.Element => {

    return(
        <Grid container>
            <AppBar position="static" style={{background: '#F9F6FB', height: '30vh'} }>
                <Toolbar>
                    <Grid container xs={3} sm={3} md = {3} lg = {2}>
                        <img src = {Logo} width='100%'/> 
                    </Grid>

                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} color='#FF9300' align='center'>
                        Coordinador
                    </Typography>
                    <Button style = {{color: '#542463'}} size="medium">Cerrar sesión <ExitToAppIcon/></Button>
                </Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='#000' align='center' id='title'>
                        SOLICITUDES DE ENTREGA
                </Typography>
            </AppBar>
            <Grid container className = "contenedorNombres">
                <Grid container style={{display: 'flex'}} className='nombreEmpleado'>
                    <Grid container>
                        <Label className = "datosEmpleado">ID empleado:</Label>
                    </Grid>
                    <Grid container>
                        <Label className = "datosEmpleado">Nombre empleado:</Label>
                    </Grid>
                    <Grid container>
                        <Label className = "datosEmpleado">ID ruta:</Label>
                    </Grid>
                </Grid>
                <Button style={{background: '#FF9300', color: '#ffffff'}} className = 'btnVerUbicacion'>Ver ubicacion</Button>
            </Grid>

            <Grid container>
                
            </Grid>

            <Grid container className='botonesFinal'>
                <Button variant='contained' style={{background: '#542463'}} className='separaBoton'>
                    Cancelar
                </Button>
                <Button variant='contained' style={{background: '#F3071E'}}>
                    Guardar
                </Button>
            </Grid>
            
        </Grid>
    )
}