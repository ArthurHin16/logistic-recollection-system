import { FC, useState, useEffect } from 'react'
import { Grid, AppBar, Toolbar, Typography, Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Logo from '../images/bamx-oficial.png';
import SearchIcon from '@mui/icons-material/Search';
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useHistory } from "react-router-dom";
import { CardGrocery } from '../cards/card-grocery.component';
import { IGrocery } from '../../models/grocery.model'
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

export const AdminGroceryComponent: FC = (): JSX.Element => {
  let history = useHistory();

  function handleClick() {
    history.push("/admin");
  }

  function handleClick1() {
    history.push("/admin-newgrocery");
  }

  //REST API GET
  const [groceries, setGroceries] = useState<IGrocery[]>([]);

  const fetchGrocery = async() => {
    const res = await fetch("http://localhost:5000/admin/ver-bodegas");
    const items = await res.json();
    const arr: IGrocery[] = [];
    for (let item of items.data) {
      console.log(item);
      arr.push(item);
    }
    setGroceries(arr);
  }

   useEffect(() => {
    fetchGrocery();       
         
  },[groceries])

  //REST API DELETE
  const   { enqueueSnackbar }  = useSnackbar();

  const deleteGrocery = (id: any) => {
    axios
      .delete(`http://localhost:5000/admin//eliminar-bodega/${id}`)
      .then((response) => {
        console.log("res from server: ", response);
        enqueueSnackbar('Bodega Eliminada!', { 
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
                    BODEGAS
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
                        variant="contained"
                        onClick={ handleClick1 }
                        style = {{ backgroundColor: "#FF9300" }}
                        >
                        Agregar Bodega
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
                  groceries && groceries.map((grocery: any) => (
                    <div>
                        <CardGrocery
                        groceries = { grocery }
                        deleteGrocery = { deleteGrocery }
                        />  
                    </div>
                      
                  ))
                }       
            </Grid>
        </Grid>
    );
}