import { FC, useState, useEffect } from 'react'
import { Grid, AppBar, Toolbar, Typography, Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Logo from '../images/bamx-oficial.png';
import SearchIcon from '@mui/icons-material/Search';
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useHistory } from "react-router-dom";
import './admin-stores.styles.css';
import { CardStore } from '../cards/card-store.component';
import { IStore } from '../../models/store.model'
import axios from "axios";
import { useSnackbar } from 'notistack';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#FF9300',
  '&:hover': {
    backgroundColor: '#FF9300',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export const AdminStoresComponent: FC = (): JSX.Element => {
  let history = useHistory();

  function handleClick() {
    history.push("/admin");
  }

  function handleClick1() {
    history.push("/admin-newstore");
  }

  //REST API GET
  const [store, setStore] = useState<IStore[]>([]);

  const fetchStores = async() => {
    const res = await fetch("http://localhost:5000/admin/ver-tiendas");
    const items = await res.json();
    const arr: IStore[] = [];
    for (let item of items.data) {
      arr.push(item);
    }
    setStore(arr);
  }

   useEffect(() => {
    fetchStores();       
         
  },[store])

  //REST API DELETE
  const   { enqueueSnackbar }  = useSnackbar();

  const deleteStore = (id: any) => {
    axios
      .delete(`http://localhost:5000/admin/eliminar-tienda/${id}`)
      .then((response) => {
        console.log("res from server: ", response);
        enqueueSnackbar('Tienda Eliminada!', { 
          variant: 'success',
          resumeHideDuration: 2000,
          anchorOrigin:
              { horizontal: 'right', vertical: 'bottom' }
  });
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar('Error!', { 
          variant: 'error',
          resumeHideDuration: 2000,
          anchorOrigin:
              { horizontal: 'right', vertical: 'bottom' }
  });
      });
  };


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
                  <Button size="medium" style = {{color: "#FF9300"}} >Cerrar sesión <ExitToAppIcon/></Button>
                </Toolbar> 

                <Grid
                container
                direction="column"
                alignItems="center">
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} color='black'>
                    TIENDAS
                    </Typography>
                    
                </Grid>
            </AppBar>

            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
            >
                    <Button
                        variant = "contained"
                        onClick = { handleClick1 }
                        style = {{ backgroundColor: "#FF9300" }}
                        >
                        NUEVA TIENDA
                    </Button>
                    <Toolbar>   
                        <Search>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Buscar"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Toolbar> 
            </Grid>
           
            <Grid 
                container 
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                xs = {12} sm = {12} md = {12}>
                  {/*Componente CARD*/}
                {
                  store && store.map((store: any) => (
                    <div>
                        <CardStore
                        stores = { store }
                        deleteStore = { deleteStore }
                        />  
                    </div>
                      
                  ))
                }
            </Grid>
           
           
        </Grid>
    );
}