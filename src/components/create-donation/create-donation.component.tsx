import * as React from 'react';
import {FC} from 'react';
import './create-donation.styles.css'
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
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';   

export const CreateDonationComponent: FC = (): JSX.Element => {
    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

    
  let history = useHistory();

  function handleClick() {
    history.push("/coordinator");
}

function handleClick1() {
    history.push("/routes");
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
                        Datos del usuario:
                    </Typography>
                    <Form xs={12} md={12} lg={12}>
                        <Row>
                            <Col xs = { 4 } md = { 4 } lg = { 4 }>
                                <Label for="id_input">ID Empleado</Label>
                                <Input type="text" name="id_input" id="id" disabled/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs = { 4 } md = { 4 } lg = { 4 }>
                                <FormGroup>
                                    <Label for="Uname">Nombre</Label>
                                    <Input type="text" name="Uname" id="name"/>
                                </FormGroup>
                            </Col>
                            <Col xs = { 4 } md = { 4 } lg = { 4 }>
                                <FormGroup>
                                    <Label for="paterno">Apellido paterno</Label>
                                    <Input type="text" name="paterno" id="Apaterno"/>
                                </FormGroup>
                            </Col>
                            <Col xs = { 4 } md = { 4 } lg = { 4 }>
                                <FormGroup>
                                    <Label for="materno">Apellido materno</Label>
                                    <Input type="text" name="materno" id="Amaterno"/>
                                </FormGroup>  
                            </Col>
                        </Row>
                        <Row>
                            <Col xs = { 4 } md = { 4 } lg = { 4 }>
                                <FormGroup>
                                    <Label for="user_email">Correo</Label>
                                    <Input type="email" name="user_email" id="email"/>
                                </FormGroup>
                            </Col>
                            <Col xs = { 4 } md = { 4 } lg = { 4 }>
                                <FormGroup>
                                    <Label for="user_tel">Teléfono de casa</Label>
                                    <Input type="tel" name="user_tel" id="telephone"/>
                                </FormGroup>
                            </Col>
                            <Col xs = { 4 } md = { 4 } lg = { 4 }>
                                <FormGroup>
                                    <Label for="user_cellphone">Teléfono celular</Label>
                                    <Input type="tel" name="user_cellphone" id="cellphone"/>
                                </FormGroup>  
                            </Col>
                        </Row>
                        <Row>
                            <Col xs = { 6 } md = { 6 } lg = { 6 }>
                                <FormGroup>
                                    <Label for="user_name">Usuario</Label>
                                    <Input type="text" name="user_name" id="name_user"/>
                                </FormGroup>
                            </Col>
                            <Col xs = { 6 } md = { 6 } lg = { 6 }>
                                <FormGroup>
                                    <Label for="user_password">Contraseña</Label>
                                    <Input type="password" name="user_password" id="password"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs = { 4 } md = { 4 } lg = { 4 }>
                                <FormGroup>
                                    <Label for="exampleSelect">Selecciona Rol</Label>
                                    <Input type="select" name="select" id="rolEmpresa">
                                    <option value="1">Administrador</option>
                                    <option value="2">Operador</option>
                                    <option value="3">Almacenista</option>
                                    <option value="4">Coordinador</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col xs = { 4 } md = { 4 } lg = { 4 }>
                                <FormGroup>
                                    <Label for="auto_unidad">Unidad que maneja</Label>
                                    <Input type="text" name="auto_unidad" id="unidad" placeholder="Placas de unidad" disabled/>
                                </FormGroup>
                            </Col>
                            <Col xs = { 4 } md = { 4 } lg = { 4 }>
                                <FormGroup>
                                    <Label for="almacen_user">Almacen</Label>
                                    <Input type="select" name="almacen_user" id="almacen"  disabled>
                                    <option>Seleccione almacén</option>
                                    <option>Q12</option>
                                    <option>Q13</option>
                                    <option>Q14</option>
                                    <option>Q15</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <br></br>
                        <Grid 
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center">
                            <Button variant="contained" onClick = { handleClick1 } style = {{backgroundColor:"#542463", marginRight: "40px"}}>Cancelar</Button>
                            <Button variant="contained" style = {{backgroundColor:"#F3071E"}}>Guardar</Button>
                        </Grid>        
                    </Form>
                </Grid>
            </Grid>
       </Grid>
    )
}