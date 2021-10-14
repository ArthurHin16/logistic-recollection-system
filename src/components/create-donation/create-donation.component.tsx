import * as React from 'react';
import {FC} from 'react';
import './create-donation.styles.css'
import { Grid, Paper, Button,AppBar,Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Logo from '../images/bamx-oficial.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Input, Label, FormGroup, Col } from 'reactstrap';   
import { IDeliveryRequest } from '../../models/delivery-request.model';
import { IStore } from '../../models/store.model';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { IUser } from '../../models/user.model';
import { ISpontaneousDonation } from '../../models/spontaneous-donation.model';



export const CreateDonationComponent: FC = (): JSX.Element => {


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("hola", e.target.value)
        setDonativoespontaneo({
            ...donativoespontaneo, //Mantener todo lo que ya esta en la constante body
            [e.target.name]: e.target.value
        })
    };



    
const [donativoespontaneo, setDonativoespontaneo] = useState<ISpontaneousDonation>({
    id: '', 
    kg_frutas_verduras: '', 
    kg_abarrotes: '',
    kg_pan: '',
    kg_no_comestibles: '', 
    folio: '', 
    estatus: 'Pendiente',
    fecha: '',
    responsable: '',
    idOperador: '',
    idTienda: '',
});

const baseUrl = "http://localhost:5000/coordinator/donacion-espontanea"


const   { enqueueSnackbar }  = useSnackbar();

    const crearDonativo = () => {
        axios.post(baseUrl, donativoespontaneo)
            .then(response => {
                console.log('res from server: ', response)
                enqueueSnackbar('Donativo espontaneo Creado!', { 
                    variant: 'success',
                    resumeHideDuration: 2000,
                    anchorOrigin:
                        { horizontal: 'right', vertical: 'bottom' }
            });
            })
            .catch(err => {
                console.log('Hola', err);
                enqueueSnackbar('Error!', { 
                    variant: 'error',
                    resumeHideDuration: 2000,
                    anchorOrigin:
                        { horizontal: 'right', vertical: 'bottom' }
            });
            })
    }

  let history = useHistory();

  function handleClick() {
    history.push("/coordinator");
}

function handleClick1() {
    history.push("/routes");
}

const [usuarios, setUsuarios] = useState<IUser[]>([]);

  const fetchPersonal = async () => {
    const res = await fetch("http://localhost:5000/coordinator/operadores");
    const items = await res.json();
    const arr: IUser[] = [];
    for (let item of items.data) {
      arr.push(item);
    }
    setUsuarios(arr);
    console.log(arr);
  };

  useEffect(() => {
    fetchPersonal();
  }, [usuarios]);

  const [tiendas, setTiendas] = useState<IStore[]>([]);

  const fetchTiendas = async () => {
    const res = await fetch("http://localhost:5000/coordinator/tiendas");
    const items = await res.json();
    const arr: IStore[] = [];
    for (let item of items.data) {
      arr.push(item);
    }
    setTiendas(arr);
    console.log(arr);
  };

  useEffect(() => {
    fetchTiendas();
  }, [tiendas]);



    return(
        <Grid container>
           <AppBar position="static" style={{background: '#F9F6FB', height: '25vh'} }>
                <Toolbar>
                  <Grid container xs={3} sm={3} md = {3} lg = {2}>
                    <Button onClick={handleClick}><img src = {Logo} alt="logo" width='100%'/></Button>
                  </Grid>      
                  <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} color='#FF9300' align='center'>
                    Coordinador
                  </Typography>
                  <Button size="medium" style = {{ color: "#FF9300" }} >Cerrar sesión <ExitToAppIcon/></Button>
                </Toolbar> 
            </AppBar>
            <Grid container className='SelectsBodegaOperador' >
                <Grid container style={{margin: 20}}>
                    <Typography style={{margin: 10}}>Selecciona un operador</Typography>
                    <Grid container>
                    <Col xs ={2}>
                        <Input type="select" name= "idOperador" onChange = {handleChange} >
                            <option>Seleccionar operador</option>
                            {usuarios && usuarios.map((usuarios: any) => (
                                            <option key = {usuarios.id} value = {usuarios.id}>
                                                {usuarios.nombre}
                                            </option>
                            ))
                            } 
                        </Input>
                    </Col>
                    </Grid>
                    
                </Grid>
                <Grid container style={{margin: 15}}>
                <Typography style={{margin: 10}}>Selecciona una tienda</Typography>
                <Grid container>
                    <Col xs ={2}>
                    <Input type="select" onChange = {handleChange} name="idTienda">
                        <option>Seleccionar tienda</option>
                            {tiendas && tiendas.map((tiendas: any) => (
                                            <option key = {tiendas.id} value = {tiendas.id}>
                                                {tiendas.nombre}
                                            </option>
                            ))
                            } 
                    </Input>
                    </Col>
                </Grid>
                </Grid>
            </Grid>
            <Grid container className='botonesFinal'>
                <Button onClick={handleClick1} variant='contained' style={{background: '#542463'}} className='separaBoton'>
                    Cancelar
                </Button>
                <Button variant='contained' style={{background: '#F3071E'}} onClick = {crearDonativo}>
                    Guardar
                </Button>
            </Grid>
       </Grid>
    )
}