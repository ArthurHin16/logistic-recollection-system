import * as React from 'react';
import {FC, useContext} from 'react';
import { Grid, Paper, Button,AppBar,Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Logo from '../images/bamx-oficial.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSnackbar } from 'notistack';
import { useState, useEffect } from 'react';
import {IDeliveryRequest} from "../../models/delivery-request.model";
import { Input, Label, FormGroup, Col } from 'reactstrap';  
import { useHistory, useParams } from "react-router-dom";
import { IRoute1 } from '../../models/routes1.model';
import axios from 'axios';
import { IfStatement } from 'typescript';
import { IStore } from '../../models/store.model';
import { AnySrvRecord } from 'dns';
import { IUser } from '../../models/user.model';
import './edit-ruta.styles.css'
import { AuthContext } from '../../auth-context';


export const EditRouteComponent: FC = (): JSX.Element => {

  const context = useContext(AuthContext);
  useEffect(() => {
      if(context.userState){
      } else {
        history.push('/coordinator-login');
      }
    },[]);

  function cerrarSesion(){
      context.logout();
      history.push("/coordinator-login");
  }


  const   { enqueueSnackbar }  = useSnackbar();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("hola", e.target.value)
    setEruta({
      ...eruta, //Mantener todo lo que ya esta en la constante body
      [e.target.name]: e.target.value
  })
    
  };

  const Parametro: any = useParams();


const [eruta, setEruta] = useState ({
      id: Parametro.id,
      idOperador: "",
})

function editar (){
  const baseUrl = `http://localhost:5000/coordinator/asignar-operador/${Parametro.id}}`
    axios.patch(baseUrl, eruta)
      .then(response => {
          console.log('res from server: ', response)
          enqueueSnackbar('Ruta Modificado!', { 
              variant: 'success',
              resumeHideDuration: 2000,
              anchorOrigin:
                  { horizontal: 'right', vertical: 'bottom' }
      });
      })
      .catch(err => {
          console.log(err);
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

function handleClick2() {
  history.push("/routes");
}


interface prueba{
  id: any;
  nombre: any
}


const [users, setUsers] = useState<IDeliveryRequest[]>([]);

  const fetchPersonal = async () => {
    const res = await fetch("http://localhost:5000/coordinator/operadores");
    const items = await res.json();
    const arr: IDeliveryRequest[] = [];
    for (let item of items.data) {
      arr.push(item);
    }
    setUsers(arr);
    console.log(arr);
  };

  useEffect(() => {
    fetchPersonal();
  }, [users]);


  const [tiendas, setTiendas] = useState<prueba[]>([]);

  const fetchTiendas = async () => {
    const res = await fetch(`http://localhost:5000/coordinator/ruta-tiendas/${Parametro.id}`);
    const items = await res.json();
    const arr: prueba[] = [];
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
            <AppBar position="static" style={{background: '#F9F6FB', height: '30vh'} }>
                <Toolbar>
                    <Grid container xs={3} sm={3} md = {3} lg = {2}>
                        <Button onClick={handleClick}><img src = {Logo} width='100%'/> </Button>
                    </Grid>

                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} color='#FF9300' align='center'>
                        Coordinador
                    </Typography>
                    <Button style = {{color: '#FF9300'}} size="medium" onClick = {cerrarSesion}>Cerrar sesión <ExitToAppIcon/></Button>
                </Toolbar>
                <Grid container xs ={3} position='relative' className='Gridbajo'>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='#000' align='center' id='title'>
                        RUTAS
                </Typography>
                </Grid>
            </AppBar>
          <Grid container className ="PrincipalContender">
              <Grid container>
              <Label className="titulos">ID Ruta: {Parametro.id} </Label>
              </Grid>
              <Grid container>
              <Label className="titulos">Tiendas: </Label>
              </Grid>
              <Grid container className="contenedorTiendas">
                  {tiendas.map((tienda: any)=>(
                      <Grid container>
                        <Typography className="subs">{tienda.nombre}</Typography>
                      </Grid>
                  ))}
              </Grid>
                <Grid container style={{margin: 20}}>
                  <Col xs={2}>
                  <Input type= "select" name = "idOperador" onChange= {handleChange}>
                      <option>
                        Seleccionar operador
                      </option>
                      {users && users.map((users: any) => (
                                            <option key = {users.id} value = {users.id}>
                                                {users.nombre}
                                            </option>
                            ))
                            }
                  </Input>
                  </Col>
                </Grid>
          </Grid>
          <Grid container className='botonesFinal'>
                <Button onClick={handleClick2} variant='contained' style={{background: '#542463'}} className='separaBoton'>
                    Cancelar
                </Button>
                <Button variant='contained' style={{background: '#F3071E'}} onClick = {editar}>
                    Guardar
                </Button>
            </Grid>
        </Grid>
    )
}