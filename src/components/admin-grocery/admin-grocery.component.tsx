import { FC, useState, useEffect, useContext } from 'react'
import { Grid, Toolbar, Typography, Button } from '@mui/material';
import { useHistory } from "react-router-dom";
import { CardGrocery } from '../cards/card-grocery.component';
import { IGrocery } from '../../models/grocery.model'
import axios from "axios";
import { useSnackbar } from 'notistack';
import './grocery.style.css'
import { HeaderComponent } from '../header/header.component';
import { AuthContext } from '../../auth-context';

export const AdminGroceryComponent: FC = (): JSX.Element => {
  let history = useHistory();

  function handleClick1() {
    history.push("/admin-newgrocery");
  }

  //REST API GET
  const [groceries, setGroceries] = useState<IGrocery[]>([]);

  const fetchGrocery = async(params: any) => {
    const queryParams = {
      ...params,
    }

    let queryString = Object.keys(queryParams).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key])
    }).join('&')

    const res = await fetch(`http://localhost:5000/admin/ver-bodegas?${queryString}`);
    const items = await res.json();
    const arr: IGrocery[] = [];
    for (let item of items.data) {
      arr.push(item);
    }
    setGroceries(arr);
  }

  //useEffect para el aspecto de seguridad
  const context = useContext(AuthContext); //SE IMPORTA CONTEXT
  
   useEffect(() => { //SE CONSUME
     if(context.userState) {
       fetchGrocery('');        
     } else {
       history.push('/');
     }
  },[])

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

  // BUSCADOR *****
  const [search, setSearch] = useState('');
  function handleSearch(event: any) {
    event.preventDefault();
    fetchGrocery({
        query: search
    })
  } 


    return(
        <Grid container>
            <Grid>
              <HeaderComponent/>
            </Grid>

            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
            >
              <Grid container direction="column" alignItems="center">
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  color="black"
                  >
                  BODEGAS
                </Typography>
              </Grid>
                    <Button
                        variant="contained"
                        onClick={ handleClick1 }
                        style = {{ backgroundColor: "#FF9300" }}
                        >
                        Agregar Bodega
                    </Button>
                    <Toolbar>   
                      <form onSubmit={handleSearch}>
                        <input 
                          type="text"
                          placeholder="Introduce tu búsqueda"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                          <button id= "btnLog">Buscar</button>
                      </form>
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