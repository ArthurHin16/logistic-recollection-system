import { FC, useState, useEffect, useContext } from 'react';
import { Grid, Typography, Button } from '@mui/material'
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { useHistory, useParams } from "react-router-dom";
import { useSnackbar } from 'notistack';
import { IStore } from '../../models/store.model';
import axios from 'axios';
import { HeaderComponent } from '../header/header.component';
import { AuthContext } from '../../auth-context';


export const AdminStoreEditComponent: FC = (): JSX.Element => {

    const Parametros: any = useParams();

    let history = useHistory();

    function handleClick1() {
        history.push("/admin-stores");
    }

    //Implementación del API
    const [store, setStore] = useState<IStore>({
        id: "",
        determinante: "",
	    cadena: "",
	    nombre: "",
	    direccion: "",
	    municipio: "",
	    telefono: "",
    });

    const baseUrl = `http://localhost:5000/admin/editar-tienda/${store.id}`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setStore({
            ...store, //Mantener todo lo que ya esta en la constante body
            [e.target.name]: e.target.value
        })
    };

    // Variable for show alerts
    const   { enqueueSnackbar }  = useSnackbar();

    //API GET for ONE store
    const fetchGrocery = async () => {
        const res = await fetch(`http://localhost:5000/admin/ver-tienda/${Parametros.id}`);
        const item = await res.json();
        setStore(item.data[0]);
        console.log(item.data[0]);
        console.log(store);
    };
    
    //useEffect para el aspecto de seguridad
    const context = useContext(AuthContext); //SE IMPORTA CONTEXT

    useEffect(() => {
        if(context.userState){
            fetchGrocery();
        } else {
            history.push('/');
        }
        
    },[]);

    const editData = () => {
        console.log(store);
        axios.patch(baseUrl, store)
            .then(response => {
                console.log('res from server: ', response)
                enqueueSnackbar('Tienda Modificada!', { 
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
                        Ingrese los datos de la nueva tienda:
                    </Typography>
                    <Form xs={12} md={12} lg={12}>
                        <Row>
                            <Col xs = { 6 } md = { 6 } lg = { 6 }>
                                <FormGroup>
                                    <Label for="s_determinante">Determinante</Label>
                                    <Input type="text" name="determinante" id="determinante" onChange = { handleChange } defaultValue = {store.determinante as any}/>
                                </FormGroup>
                            </Col>
                            <Col xs = { 6 } md = { 6 } lg = { 6 }>
                                <FormGroup>
                                    <Label for="s_cadena">Cadena</Label>
                                    <Input type="text" name="cadena" id="cadena" onChange = { handleChange } defaultValue = {store.cadena as any}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs = { 12 } md = { 12 } lg = { 12 }>
                                <FormGroup>
                                    <Label for="s_sucursal">Sucursal</Label>
                                    <Input type="text" name="nombre" id="sucursal" onChange = { handleChange } defaultValue = {store.nombre as any}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs = { 6 } md = { 6 } lg = { 6 }>
                                <FormGroup>
                                    <Label for="s_direccion">Dirección</Label>
                                    <Input type="text" name="direccion" id="direccion" onChange = { handleChange } defaultValue = {store.direccion as any}/>
                                </FormGroup>
                            </Col>
                            <Col xs = { 6 } md = { 6 } lg = { 6 }>
                                <FormGroup>
                                    <Label for="s_municipio">Municipio</Label>
                                    <Input type="text" name="municipio" id="municipio" onChange = { handleChange } defaultValue = {store.municipio as any}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs = { 6 } md = { 6 } lg = { 6 }>
                                <FormGroup>
                                    <Label for="s_tel">Teléfono</Label>
                                    <Input type="tel" name="telefono" id="telefono" onChange = { handleChange } defaultValue = {store.telefono as any}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs = { 12 } md = { 12 } lg = { 12 }>
                                <FormGroup>
                                    <Label for="s_Logo">Logo</Label>
                                    <Col>
                                        <Input type="file" name="s_Logo" id="logo" />
                                    </Col>
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