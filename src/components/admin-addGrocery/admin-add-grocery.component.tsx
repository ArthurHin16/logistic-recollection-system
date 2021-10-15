import { FC, useState, useEffect } from 'react';
import { Grid, Typography, Button } from '@mui/material'
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { HeaderComponent } from '../header/header.component';
//***Importación de las librerías para el aspecto de seguridad
import { AuthContext } from '../../auth-context';
import { useContext } from 'react';

export const AdminAddGroceryComponent: FC = (): JSX.Element => {
    

    //***Se importa el contexto para el aspecto de seguridad
    const context = useContext(AuthContext);

    useEffect(() => { //SE CONSUME
        if(!context.userState) {
            history.push('/');     
        } 
     },)
    
    //Funcion de login
    let history = useHistory();
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
            <Grid>
                <HeaderComponent/>
            </Grid>
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