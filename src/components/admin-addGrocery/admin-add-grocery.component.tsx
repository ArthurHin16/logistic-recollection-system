import { FC, useState } from 'react';
import { Grid, AppBar, Typography, Toolbar, Button } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Logo from '../images/bamx-oficial.png';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { useSnackbar } from 'notistack';
import axios from 'axios';

export const AdminAddGroceryComponent: FC = (): JSX.Element => {
    let history = useHistory();

    function handleClick() {
        history.push("/admin");
    }

    function handleClick1() {
        history.push("/admin-grocery");
    }

    //Implementación del API
    const [grocery, setGrocery] = useState({
        nombre: "",
	    direccion: "",
	    municipio: "",
	    telefono: ""
    });

    const baseUrl = "http://localhost:5000/admin/crear-bodega";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setGrocery({
            ...grocery, //Mantener todo lo que ya esta en la constante body
            [e.target.name]: e.target.value
        })
    };

    // Variable for show alerts
    const   { enqueueSnackbar }  = useSnackbar();

    const editData = () => {
        console.log(grocery);
        axios.post(baseUrl, grocery)
            .then(response => {
                console.log('res from server: ', response)
                enqueueSnackbar('Almácen Agregado!', { 
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

    return(
        <Grid container>
        <AppBar position="static" style={{background: '#F9F6FB', height: '25vh'} }>
             <Toolbar>
               <Grid container xs={3} sm={3} md = {3} lg = {2}>
                <Button onClick={handleClick}><img src = {Logo} alt="logo" width='100%'/></Button>
               </Grid>      
               <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} color='#FF9300' align='center'>
                 Administrador
               </Typography>
               <Button size="medium" style = {{ color: "#FF9300" }} >Cerrar sesión <ExitToAppIcon/></Button>
             </Toolbar> 
         </AppBar>
         <Grid 
             container
             direction="column"
             justifyContent="center"
             alignItems="center"
             xs = { 12 } md = { 12 } lg = { 12 }>
             <Grid spacing = { 2 }>
                 <br></br>
                 <Typography variant="body1">
                     Ingrese los datos de la nueva bodega:
                 </Typography>
                 <Form xs={12} md={12} lg={12}>
                     <Row>
                         <Col xs = { 6 } md = { 6 } lg = { 6 }>
                             <FormGroup>
                                 <Label for="b_ID">ID</Label>
                                 <Input type="text" name="b_ID" id="ID_bodega" disabled/>
                             </FormGroup>
                         </Col>
                         <Col xs = { 6 } md = { 6 } lg = { 6 }>
                             <FormGroup>
                                 <Label for="b_nombre">Bodega</Label>
                                 <Input type="text" name="nombre" id="bodega" onChange = { handleChange }/>
                             </FormGroup>
                         </Col>
                     </Row>
                     <Row>
                         <Col xs = { 6 } md = { 6 } lg = { 6 }>
                             <FormGroup>
                                 <Label for="b_direccion">Dirección</Label>
                                 <Input type="text" name="direccion" id="direccion" onChange = { handleChange }/>
                             </FormGroup>
                         </Col>
                         <Col xs = { 6 } md = { 6 } lg = { 6 }>
                             <FormGroup>
                                 <Label for="b_municipio">Municipio</Label>
                                 <Input type="text" name="municipio" id="municipio" onChange = { handleChange }/>
                             </FormGroup>
                         </Col>
                     </Row>
                     <Row>
                         <Col xs = { 6 } md = { 6 } lg = { 6 }>
                             <FormGroup>
                                 <Label for="b_tel">Teléfono</Label>
                                 <Input type="tel" name="telefono" id="telefono" onChange = { handleChange }/>
                             </FormGroup>
                         </Col>
                     </Row>
                     <br></br>
                     <Grid 
                     container
                     direction="row"
                     justifyContent="center"
                     alignItems="center">
                         <Button variant="contained" onClick={handleClick1} style = {{backgroundColor:"#542463", marginRight: "20px"}}>Cancelar</Button>
                         <Button variant="contained" style = {{backgroundColor:"#F3071E"}} onClick={editData}>Guardar</Button>
                     </Grid>        
                 </Form>
             </Grid>
         </Grid>
    </Grid>
    );
}