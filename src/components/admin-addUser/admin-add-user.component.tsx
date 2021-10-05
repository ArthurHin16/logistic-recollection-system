import { FC } from 'react';
import { Grid, AppBar, Typography, Toolbar, Button } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Logo from '../images/bamx-oficial.png';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { useHistory } from "react-router-dom";


export const AdminAddUserComponent: FC = (): JSX.Element => {
    let history = useHistory();

    function handleClick() {
        history.push("/admin");
    }

    function handleClick1() {
        history.push("/admin-user");
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
                        Ingrese los datos del nuevo usuario:
                    </Typography>
                    <Form xs={12} md={12} lg={12}>
                        <Row>
                            <Col xs = { 4 } md = { 4 } lg = { 4 }>
                                <Label for="id_input">ID Empleado</Label>
                                <Input type="text" name="id_input" id="id"/>
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
                                    <Input type="select" name="select" id="exampleSelect">
                                    <option>Operador</option>
                                    <option>Almacenista</option>
                                    <option>Coordinador</option>
                                    <option>Administrador</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col xs = { 4 } md = { 4 } lg = { 4 }>
                                <FormGroup>
                                    <Label for="auto_unidad">Unidad que maneja</Label>
                                    <Input type="text" name="auto_unidad" id="unidad" placeholder="Placas de unidad"/>
                                </FormGroup>
                            </Col>
                            <Col xs = { 4 } md = { 4 } lg = { 4 }>
                                <FormGroup>
                                    <Label for="almacen_user">Almacen</Label>
                                    <Input type="text" name="almacen_user" id="almacen">
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
    );
}