import * as React from 'react';
import {FC} from 'react';
import './routes.styles.css'
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
import { useSnackbar } from 'notistack';
import { useState, useEffect } from 'react';
import {IDeliveryRequest} from "../../models/delivery-request.model";
import { Input, Label, FormGroup, Col } from 'reactstrap';  
import { useHistory } from "react-router-dom";
import { IRoute1 } from '../../models/routes1.model';
import axios from 'axios';
import { ModalRoute } from '../modals/modal-route.component';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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



export const RoutesComponent: FC = (): JSX.Element => {

  const [modal, setModal] = useState(false);
  
  const toggle = () => setModal(!modal);

  const   { enqueueSnackbar }  = useSnackbar();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("hola", e.target.value)
    setEruta({
      ...eruta, //Mantener todo lo que ya esta en la constante body
      [e.target.name]: e.target.value
  })
    
  };



const [eruta, setEruta] = useState ({
      id: "",
      dia: "",
      idOperador: "",
})

function editar (id: any){
  const baseUrl = `http://localhost:5000/coordinator/asignar-operador/${id}}`
    axios.patch(baseUrl, eruta)
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


    
  let history = useHistory();

  function handleClick() {
    history.push("/coordinator");
}

function handleClick1() {
    history.push("/create-donation");
}

const [users, setUsers] = useState<IDeliveryRequest[]>([]);

  const fetchPersonal = async () => {
    const res = await fetch("http://localhost:5000/coordinator/operadores");
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



  const [rutas, setRutas] = useState<IRoute1[]>([])
  const fetchRuta = async () => {
    const res = await fetch("http://localhost:5000/coordinator/ruta-operador");
    const items = await res.json();
    const arr: IRoute1[] = [];
    for (let item of items.data) {
      arr.push(item);
    }
    setRutas(arr);
    console.log(arr);
  };

  useEffect(() => {
    fetchRuta();
  }, [rutas]);


  const inf = {info: ''}

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
                    <Button style = {{color: '#FF9300'}} size="medium">Cerrar sesión <ExitToAppIcon/></Button>
                </Toolbar>
                <Grid container xs ={3} position='relative' className='Gridbajo'>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='#000' align='center' id='title'>
                        RUTAS
                </Typography>
                <Button onClick={handleClick1} variant="contained" className='botonespontaneo' style={{background: '#FF9300'}}>Agregar donativo espontáneo</Button>
                </Grid>
            </AppBar>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow >
                            <StyledTableCell id='encabezado' align="center">ID RUTA</StyledTableCell>
                            <StyledTableCell align="center" id='encabezado'>Descripción</StyledTableCell>
                            <StyledTableCell align="center" id='encabezado' ></StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rutas.map((ruta) => (
                            <StyledTableRow key={ruta.id} >
                            <StyledTableCell component="th" scope="row" align="center">
                                {ruta.id}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <Button variant="contained" style={{background: "#FF9300"}}  onClick= {toggle}>Ver detalle</Button>
                              <ModalRoute  /*users*/
                            open = { modal } 
                            toggle = { toggle } 
                              inf = { ruta.id }
                            />

                            </StyledTableCell>
                            <StyledTableCell align="center">
                            <Col xs ={12}>
                              <Input type="select" name= "idOperador" onChange = {handleChange} >
                            <option>{ruta.nombre}</option>
                            {users && users.map((users: any) => (
                                            <option key = {users.id} value = {users.id}>
                                                {users.nombre}
                                            </option>
                            ))
                            } 
                        </Input>
                        <Button variant = "contained" color= "error" onClick={editar}>Cambiar</Button>
                        </Col>
                            </StyledTableCell>
                            </StyledTableRow>
                            
                            ))}
                            
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}