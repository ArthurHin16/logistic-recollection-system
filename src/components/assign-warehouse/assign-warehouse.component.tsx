import {FC, useState, useEffect, useContext} from 'react';
import './assign-warehouse.styles.css'
import { Grid, Paper, Button,AppBar,Toolbar} from '@mui/material';
import Typography from '@mui/material/Typography';
import Logo from '../images/bamx-oficial.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Label, Input, Form, Row, Col} from 'reactstrap';
import { useHistory, useParams } from "react-router-dom";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { IAssignWarehouse1 } from '../../models/assign-warehouse1.model';
import { IGrocery } from '../../models/grocery.model';
import { IDelivery } from '../../models/delivery.model';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { AuthContext } from '../../auth-context';

export const AssignWarehouseComponent: FC = (): JSX.Element => {

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

    const baseUrl = "http://localhost:5000/coordinator/asignar-bodega"

    const   { enqueueSnackbar }  = useSnackbar();

    function asignarBodega(){
        if(show === false){
            axios.post(baseUrl, delivery)
            .then(response => {
                console.log('res from server: ', response)
                enqueueSnackbar('Asignacion de bodega creada', { 
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
            const baseUrl2 = `http://localhost:5000/coordinator/editar-estatus/${Parametros.id}}`
                axios.patch(baseUrl2, estatusdonativo)
                .then(response => {
                    console.log('res from server: ', response)
                    enqueueSnackbar('Donativo actualizado', { 
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
        else if(show === true){
            axios.post(baseUrl, delivery)
            .then(response => {
                console.log('res from server: ', response)
                enqueueSnackbar('Asignacion de bodega creada', { 
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
            axios.post(baseUrl, delivery2)
            .then(response => {
                console.log('res from server: ', response)
                enqueueSnackbar('Asignacion de bodega creada', { 
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
            const baseUrl2 = `http://localhost:5000/coordinator/editar-estatus/${Parametros.id}}`
                axios.patch(baseUrl2, estatusdonativo)
                .then(response => {
                    console.log('res from server: ', response)
                    enqueueSnackbar('Donativo actualizado', { 
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
    }

    const Parametros: any=useParams();
    const [show, setShow] = useState<boolean>(false)
    let history = useHistory();

    function handleClick() {
        history.push("/coordinator");
    }

    function handleClick1(operador: any) {
        history.push(`/coordinator-map/${operador}`);
    }

    function handleClick2() {
        history.push("/delivery-requests");
    }


    const [estatusdonativo, setEstatusdonativo] = useState({
        id: Parametros.id,
        estatus: 'Completado'
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("hola", e.target.value)
        setDelivery({
          ...delivery, //Mantener todo lo que ya esta en la constante body
          [e.target.name]: e.target.value
      })
        
      };

      const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("hola", e.target.value)
        setDelivery2({
          ...delivery2, //Mantener todo lo que ya esta en la constante body
          [e.target.name]: e.target.value
      })
        
      };

    const [donation, setDonation] = useState<IAssignWarehouse1>({
        id: '',
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        kg_frutas_verduras: '',
        kg_pan: '',
        kg_abarrotes: '',
        kg_no_comestibles: ''
    });

  const fetchDonacion = async () => {
    const res = await fetch(`http://localhost:5000/coordinator/detalles-entrega/${Parametros.id}`);
    const item = await res.json();    
    setDonation(item.data[0]);
    console.log(item.data[0]);
  };

  useEffect(() => {
    fetchDonacion();
  }, []);

  const [bodegas, setBodegas] = useState<IGrocery[]>([]);

  const fetchBodegas = async () => {
    const res = await fetch("http://localhost:5000/coordinator/bodegas");
    const items = await res.json();
    const arr: IGrocery[] = [];
    for (let item of items.data) {
      arr.push(item);
    }
    setBodegas(arr);
    console.log(arr);
  };

  useEffect(() => {
    fetchBodegas();
  }, [bodegas]);

  const [delivery, setDelivery] = useState<IDelivery>({
    idDonativo: Parametros.id, 
    idBodega: '',
    kg_frutas_verduras: '', 
    kg_abarrotes: '',
    kg_pan: '',
    kg_no_comestibles: '', 
    estatus: 'Pendiente',
    fecha: '',
});

const [delivery2, setDelivery2] = useState<IDelivery>({
    idDonativo: Parametros.id, 
    idBodega: '',
    kg_frutas_verduras: '', 
    kg_abarrotes: '',
    kg_pan: '',
    kg_no_comestibles: '', 
    estatus: 'Pendiente',
    fecha: '',
});

    return(
        <Grid container>
            <AppBar position="static" style={{background: '#F9F6FB', height: '30vh'} }>
                <Toolbar>
                    <Grid container xs={3} sm={3} md = {3} lg = {2}>
                        <Button onClick={handleClick} ><img src = {Logo} width='100%' onClick={handleClick}/> </Button>
                    </Grid>

                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} color='#FF9300' align='center'>
                        Coordinador
                    </Typography>
                    <Button style = {{color: '#FF9300'}} size="medium" onClick={cerrarSesion}>Cerrar sesión <ExitToAppIcon/></Button>
                </Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='#000' align='center' id='title'>
                        SOLICITUDES DE ENTREGA
                </Typography>
            </AppBar>
            <Grid container className = "contenedorNombres">
                <Grid container style={{display: 'flex'}} className='nombreEmpleado'>
                    <Grid container>
                        <Label className = "datosEmpleado">ID empleado: {donation.id}</Label>
                    </Grid>
                    <Grid container>
                        <Label className = "datosEmpleado">Nombre empleado: {donation.nombre} {donation.apellidoPaterno}</Label>
                    </Grid>
                </Grid>
                <Button onClick={()=>handleClick1(donation.id)} style={{background: '#FF9300', color: '#ffffff'}} className = 'btnVerUbicacion'>Ver ubicacion</Button>
            </Grid>

            <Grid container className="labelsYBotones">
                <Grid container className="tipografiaTotalValores">
                    <Typography  variant="h6" component="div" sx={{ flexGrow: 0.35 }} color='#FF9300' align='center'>
                        Total valores
                    </Typography>
                </Grid>
               <Grid container className="valoresCantidad">
                   <Grid container >
                        <Typography className="labels" variant='h6' >Abarrote</Typography>
                        <Input className= "inputs" value={donation.kg_abarrotes} disabled/> 
                   </Grid>
                    <Grid container>
                        <Typography className="labels" variant='h6'>Frutas y verduras</Typography>
                        <Input className= "inputs" value={donation.kg_frutas_verduras} disabled/>  
                    </Grid>
                    
                    <Grid container>
                        <Typography className="labels" variant='h6'>Pan</Typography>
                        <Input className= "inputs" value={donation.kg_pan} disabled/> 
                    </Grid>
                    <Grid container >
                        <Typography className="labels" variant='h6'>No comestibles</Typography>
                        <Input className= "inputs" value={donation.kg_no_comestibles} disabled/> 
                    </Grid>
                   
                    <Button className= "BotonAgregaBodega" style = {{background: '#FF9300', color: '#ffffff'}} 
                    onClick={()=>setShow(true)}>Agregar Bodega</Button>  
               </Grid>
            </Grid>

            <Grid container className="ContenedorForm">

                <Col xs={2}>
                    <Input type="select" name = "idBodega" onChange ={handleChange}>
                        <option>Seleccionar bodega</option>
                        {bodegas && bodegas.map((bodega: any) =>(
                            <option key = {bodega.id} value = {bodega.id}>
                                {bodega.nombre}
                                </option>
                        ))}
                    </Input>
                    <Grid container> 
                    <Form>
                        <Input className="Formasignar" type="text" placeholder = "Abarrotes" name="kg_abarrotes" onChange = {handleChange}/>
                        <Input className="Formasignar" type="text" placeholder = "Fruta y verdura" name="kg_frutas_verduras" onChange = {handleChange} />
                        <Input className="Formasignar" type="text" placeholder = "Pan" name="kg_pan" onChange = {handleChange}/>
                        <Input className="Formasignar" type="text" placeholder = "No comestibles" name="kg_no_comestibles" onChange = {handleChange}/>
                    </Form>
                    </Grid>
                </Col>
                
                {show &&(
                    <React.Fragment>                
                    
                    <Grid container className="ContenedorForm2">
                        <Col xs ={2}>
                            <Input type= "select" name = "idBodega" onChange ={handleChange2}>
                                <option>Seleccionar bodega</option>
                                {bodegas && bodegas.map((bodega: any) =>(
                            <option key = {bodega.id} value = {bodega.id}>
                                {bodega.nombre}
                                </option>
                                ))}
                            </Input>
                        </Col>
                        <Form className="acomodoForm">
                            <Input className="Formasignar" type="text" placeholder = "Abarrotes" name="kg_abarrotes" onChange = {handleChange2}/>
                            <Input className="Formasignar" type="text" placeholder = "Fruta y verdura" name="kg_frutas_verduras" onChange = {handleChange2} />
                            <Input className="Formasignar" type="text" placeholder = "Pan" name="kg_pan" onChange = {handleChange2}/>
                            <Input className="Formasignar" type="text" placeholder = "No comestibles" name="kg_no_comestibles" onChange = {handleChange2}/>
                        </Form>
                     </Grid>
                     </React.Fragment>
                )}
            </Grid>

            <Grid container className='botonesFinal'>
                <Button onClick={handleClick2} variant='contained' style={{background: '#542463'}} className='separaBoton'>
                    Cancelar
                </Button>
                <Button variant='contained' style={{background: '#F3071E'}} onClick = {asignarBodega}>
                    Guardar
                </Button>
            </Grid>
            
        </Grid>
    )
}