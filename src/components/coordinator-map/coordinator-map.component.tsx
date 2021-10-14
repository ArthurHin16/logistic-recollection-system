import {FC, useState, useEffect} from 'react';
import './coordinator-map.styles.css';
import { Grid, Paper, Button,AppBar,Toolbar} from '@mui/material';
import Typography from '@mui/material/Typography';
import Logo from '../images/bamx-oficial.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Label, Input} from 'reactstrap';
import { useHistory, useParams } from 'react-router-dom';
import { IUserMap } from '../../models/user-map.model';

export const CoordinatorMap: FC = (): JSX.Element => {
    let history = useHistory();

    function handleClick() {
      history.push("/coordinator");
  }
  const Parametros: any=useParams();
  const [usuario, setUsuario] = useState<IUserMap>({
    id: '',
    nombre: '',
    apellidoPaterno: '',
    latitud: '',
    longitud: '',
});

const fetchUsuario = async () => {
const res = await fetch(`http://localhost:5000/coordinator/maps/${Parametros.id}`);
const item = await res.json();    
setUsuario(item.data[0]);
console.log(item.data[0]);
};

useEffect(() => {
fetchUsuario();
}, []);

const mapUrl = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyC1vMtPp4xYDewFYPZv0AZMQHpgsTLV3-I"

    return(
        <Grid container>
            <AppBar position="static" style={{background: '#F9F6FB', height: '30vh'} }>
                <Toolbar>
                    <Grid container xs={3} sm={3} md = {3} lg = {2}>
                        <Button onClick={handleClick}><img src = {Logo} width='100%'/> </Button>
                    </Grid>

                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} color='#FF9300' align='center'>
                        Coordinador
                    </Typography>
                    <Button style = {{color: '#FF9300'}} size="medium">Cerrar sesión <ExitToAppIcon/></Button>
                </Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='#000' align='center' id='title'>
                        SOLICITUDES DE ENTREGA
                </Typography>
            </AppBar>
            <Grid container className = "contenedorNombres">
                <Grid container style={{display: 'flex'}} className='nombreEmpleado'>
                    <Grid container>
                        <Label className = "datosEmpleado">ID empleado: {usuario.id}</Label>
                    </Grid>
                    <Grid container>
                        <Label className = "datosEmpleado">Nombre empleado: {usuario.nombre} {usuario.apellidoPaterno}</Label>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container className="coordenadasTipografia">
                <Typography variant = "h4">Coordenadas: {usuario.latitud}, {usuario.longitud} </Typography>
            </Grid>
            
        </Grid>
    )
}