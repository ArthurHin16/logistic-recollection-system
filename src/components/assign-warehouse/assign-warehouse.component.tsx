import {FC, useState} from 'react';
import './assign-warehouse.styles.css'
import { Grid, Paper, Button,AppBar,Toolbar} from '@mui/material';
import Typography from '@mui/material/Typography';
import Logo from '../images/bamx-oficial.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Label, Input, Form, Row, Col} from 'reactstrap';
import { FormAssignWarehouse } from './form-assign-warehouse.component';
import { useHistory } from "react-router-dom";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


export const AssignWarehouseComponent: FC = (): JSX.Element => {

    const [show, setShow] = useState<boolean>(false)
    let history = useHistory();

    function handleClick() {
        history.push("/coordinator");
    }

    function handleClick1() {
        history.push("/coordinator-map");
    }

    function handleClick2() {
        history.push("/delivery-requests");
    }

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
    };

    function cambiarShow(){
        /*<Grid container>
            <FormAssignWarehouse />
        </Grid>*/
        setShow(false)
    }

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
                        <Label className = "datosEmpleado">ID empleado:</Label>
                    </Grid>
                    <Grid container>
                        <Label className = "datosEmpleado">Nombre empleado:</Label>
                    </Grid>
                    <Grid container>
                        <Label className = "datosEmpleado">ID ruta:</Label>
                    </Grid>
                </Grid>
                <Button onClick={handleClick1} style={{background: '#FF9300', color: '#ffffff'}} className = 'btnVerUbicacion'>Ver ubicacion</Button>
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
                        <Input className= "inputs" value={30} disabled/> 
                   </Grid>
                    <Grid container>
                        <Typography className="labels" variant='h6'>Frutas y verduras</Typography>
                        <Input className= "inputs" value={30} disabled/>  
                    </Grid>
                    
                    <Grid container>
                        <Typography className="labels" variant='h6'>Pan</Typography>
                        <Input className= "inputs" value={30} disabled/> 
                    </Grid>
                    <Grid container >
                        <Typography className="labels" variant='h6'>No comestibles</Typography>
                        <Input className= "inputs" value={30} disabled/> 
                    </Grid>
                   
                    <Button className= "BotonAgregaBodega" style = {{background: '#FF9300', color: '#ffffff'}} 
                    onClick={()=>setShow(true)}>Agregar Bodega</Button>  
                    {()=>cambiarShow()}
               </Grid>
            </Grid>




            <Grid container className="ContenedorForm">
                <Grid container>
                    <FormAssignWarehouse />
                </Grid>
                
                {show &&(
                    <Grid container className="ContenedorForm">
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