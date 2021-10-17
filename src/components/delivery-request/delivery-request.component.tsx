import * as React from 'react';
import {FC, useContext} from 'react';
import './delivery-request.styles.css'
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
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios'; // Importar axios
import { IDeliveryRequest } from "../../models/delivery-request.model";
import { AuthContext } from '../../auth-context';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ffffff",
    color: theme.palette.common.white,
    width: 300,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#ffffff",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export const DeliveryRequestComponent: FC = (): JSX.Element => {

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

  let history = useHistory();
  
  function handleClick() {
    history.push("/coordinator");
}

function handleClick1(operadores: any) {
    history.push(`/assign-warehouse/${operadores}`);
}

function handleClick2(valor: any) {
  history.push(`/assign-spontaneous-warehouse/${valor}`);
}

const [users, setUsers] = useState<IDeliveryRequest[]>([]);

  const fetchPersonal = async () => {
    const res = await fetch("http://localhost:5000/coordinator/donativos");
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


  const [espontaneo, setEspontaneo] = useState<IDeliveryRequest[]>([]);

  const fetchEspontaneo = async () => {
    const res = await fetch("http://localhost:5000/coordinator/donativos-espontaneos");
    const items = await res.json();
    const arr: IDeliveryRequest[] = [];
    for (let item of items.data) {
      arr.push(item);
    }
    setEspontaneo(arr);
    console.log(arr);
  };

  useEffect(() => {
    fetchEspontaneo();
  }, [espontaneo]);
  


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
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='#000' align='center' id='title'>
                        SOLICITUDES DE ENTREGA
                </Typography>
            </AppBar>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow >
                            <StyledTableCell id='encabezado2' align="center">Donativo</StyledTableCell>
                            <StyledTableCell align="center" id='encabezado2'>Tienda</StyledTableCell>
                            <StyledTableCell align="center" id='encabezado2' ></StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {users.map((operadores) => (
                            <StyledTableRow key={operadores.id} >
                            <StyledTableCell component="th" scope="row" align="center">
                                {operadores.id}
                            </StyledTableCell>
                            <StyledTableCell align="center">{operadores.nombre}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Button onClick = {()=>handleClick1(operadores.id)} variant = "contained" color = "error" className="botonasignarbodega" >Asignar bodega</Button>
                            </StyledTableCell>
                            </StyledTableRow>
                            ))}

                        {espontaneo.map((espontaneo) => (
                            <StyledTableRow key={espontaneo.id} >
                            <StyledTableCell component="th" scope="row" align="center">
                                {espontaneo.id}
                            </StyledTableCell>
                            <StyledTableCell align="center">{espontaneo.nombre}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Button onClick = {()=>handleClick2(espontaneo.id)}variant = "contained" color = "error" className="botonasignarbodega" >Asignar bodega</Button>
                            </StyledTableCell>
                            </StyledTableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}