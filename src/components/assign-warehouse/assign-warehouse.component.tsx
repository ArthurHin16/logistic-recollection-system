import {FC, useState, useEffect} from 'react';
import './assign-warehouse.styles.css'
import { Grid, Paper, Button,AppBar,Toolbar} from '@mui/material';
import Typography from '@mui/material/Typography';
import Logo from '../images/bamx-oficial.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Label, Input, Form, Row, Col} from 'reactstrap';
import { FormAssignWarehouse } from './form-assign-warehouse.component';
import { useHistory, useParams } from "react-router-dom";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { IAssignWarehouse1 } from '../../models/assign-warehouse1.model';


export const AssignWarehouseComponent: FC = (): JSX.Element => {

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

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
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
                    <Button style = {{color: '#FF9300'}} size="medium">Cerrar sesión <ExitToAppIcon/></Button>
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

                <Input type="select" >
                    <option>Seleccionar bodega</option>

                </Input>
            <Grid container>
                <Form>
                    <Input className="Formasignar" type="text" placeholder = "Abarrotes" name="cant_abarrote" id="abarrote"/>
                    <Input className="Formasignar" type="text" placeholder = "Fruta y verdura" name="cant_fruta" id="fruta"/>
                    <Input className="Formasignar" type="text" placeholder = "Pan" name="cant_pan" id="pan"/>
                    <Input className="Formasignar" type="text" placeholder = "No comestibles" name="cant_noComestible" id="NoComestible"/>
                </Form>
                
            </Grid>
                
                {show &&(
                    <Grid container className="ContenedorForm2">
                    <FormAssignWarehouse />
                     </Grid>
                )}
            {/*<FormControl sx={{width: 220, height:24 }}>
                <InputLabel id="demo-simple-select-label">Seleccione una bodega</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={handleChange}
                                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </FormControl>*/}
            </Grid>

            <Grid container className='botonesFinal'>
                <Button onClick={handleClick2} variant='contained' style={{background: '#542463'}} className='separaBoton'>
                    Cancelar
                </Button>
                <Button variant='contained' style={{background: '#F3071E'}}>
                    Guardar
                </Button>
            </Grid>
            
        </Grid>
    )
}