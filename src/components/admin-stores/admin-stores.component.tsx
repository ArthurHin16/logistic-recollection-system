import { FC, useState, useEffect, useContext} from 'react'
import { Grid, Toolbar, Typography, Button } from '@mui/material';
import { useHistory } from "react-router-dom";
import './admin-stores.styles.css';
import { CardStore } from '../cards/card-store.component';
import { IStore } from '../../models/store.model'
import axios from "axios";
import { useSnackbar } from 'notistack';
import './admin.styles.css';
import { HeaderComponent } from '../header/header.component';
import { AuthContext } from '../../auth-context';

export const AdminStoresComponent: FC = (): JSX.Element => {
  let history = useHistory();

  function handleClick1() {
    history.push("/admin-newstore");
  }

  //REST API GET
  const [store, setStore] = useState<IStore[]>([]);

  //const ***** BUSCADOR
  const fetchStores = async(params: any) => {
    const queryParams = {
      ...params,
    }

    let queryString = Object.keys(queryParams).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key])
    }).join('&')

    const res = await fetch(`http://localhost:5000/admin/ver-tiendas?${queryString}`);
    const items = await res.json();
    const arr: IStore[] = [];
    for (let item of items.data) {
      arr.push(item);
    }
    console.log(arr)
    setStore(arr);
  }
  //useEffect para el aspecto de seguridad
  const context = useContext(AuthContext); //SE IMPORTA CONTEXT

   useEffect(() => {
     if(context.userState){
        fetchStores('');
     } else {
        history.push('/');
     }
    
  },[])

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

  // BUSCADOR *****
  const [search, setSearch] = useState('');
  function handleSearch(event: any) {
    event.preventDefault();
    fetchStores({
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
                  TIENDAS
                </Typography>
              </Grid>
                    <Button
                        variant = "contained"
                        onClick = { handleClick1 }
                        style = {{ backgroundColor: "#FF9300" }}
                        >
                        NUEVA TIENDA
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