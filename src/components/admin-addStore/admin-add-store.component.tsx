import { FC } from 'react';
import { Grid, AppBar, Typography, Toolbar, Button } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Logo from '../images/bamx-oficial.png';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { useHistory } from "react-router-dom";

export const AdminAddStoreComponent: FC = (): JSX.Element => {

    let history = useHistory();

    function handleClick() {
        history.push("/admin");
    }

    function handleClick1() {
        history.push("/admin-stores");
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
                        Ingrese los datos de la nueva tienda:
                    </Typography>
                    <Form xs={12} md={12} lg={12}>
                        <Row>
                            <Col xs = { 6 } md = { 6 } lg = { 6 }>
                                <FormGroup>
                                    <Label for="s_determinante">Determinante</Label>
                                    <Input type="text" name="s_determinante" id="determinante"/>
                                </FormGroup>
                            </Col>
                            <Col xs = { 6 } md = { 6 } lg = { 6 }>
                                <FormGroup>
                                    <Label for="s_cadena">Cadena</Label>
                                    <Input type="text" name="s_cadena" id="cadena"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs = { 12 } md = { 12 } lg = { 12 }>
                                <FormGroup>
                                    <Label for="s_sucursal">Sucursal</Label>
                                    <Input type="text" name="s_sucursal" id="sucursal"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs = { 6 } md = { 6 } lg = { 6 }>
                                <FormGroup>
                                    <Label for="s_direccion">Dirección</Label>
                                    <Input type="text" name="s_direccion" id="direccion"/>
                                </FormGroup>
                            </Col>
                            <Col xs = { 6 } md = { 6 } lg = { 6 }>
                                <FormGroup>
                                    <Label for="s_municipio">Municipio</Label>
                                    <Input type="text" name="s_municipio" id="municipio"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs = { 6 } md = { 6 } lg = { 6 }>
                                <FormGroup>
                                    <Label for="s_tel">Teléfono</Label>
                                    <Input type="tel" name="s_tel" id="telefono"/>
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
                                <Button variant="contained" style = {{backgroundColor:"#F3071E"}}>Guardar</Button>
                        </Grid>       
                    </Form>
                </Grid>
            </Grid>
       </Grid>
    );
}