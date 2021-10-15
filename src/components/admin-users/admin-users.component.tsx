import { FC, useState, useEffect, useContext } from "react";
import { Grid, Toolbar, Typography, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import "./admin-users.styles.css";
import { CardEmployee } from "../cards/card-user.component";
import { IUser } from "../../models/user.model";
import axios from "axios";
import { useSnackbar } from 'notistack';
import { HeaderComponent } from '../header/header.component';
import { AuthContext } from '../../auth-context';

export const AdminUserComponent: FC = (): JSX.Element => {

  //Variables for useHistory
  let history = useHistory();

  function handleClick1() {
    history.push("/admin-newuser");
  }

  //REST API GET
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchPersonal = async (params: any) => {
    const queryParams = {
      ...params,
    }

    let queryString = Object.keys(queryParams).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key])
    }).join('&')

    const res = await fetch(`http://localhost:5000/admin/personal?${queryString}`);
    const items = await res.json();
    const arr: IUser[] = [];
    for (let item of items.data) {
      arr.push(item);
    }
    setUsers(arr);
  };

  //useEffect para el aspecto de seguridad
  const context = useContext(AuthContext); //SE IMPORTA CONTEXT

  useEffect(() => {
    if(context.userState){
      fetchPersonal('');
    } else {
      history.push('/');
    }
  },[]);

  //REST API DELETE
  // Variable for show alerts
  const   { enqueueSnackbar }  = useSnackbar();

  const deleteUser = (id: any) => {
    axios
      .delete(`http://localhost:5000/admin/eliminar-empleado/${id}`)
      .then((response) => {
        console.log("res from server: ", response);
        enqueueSnackbar('Usuario Eliminado!', { 
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
    fetchPersonal({
        query: search
    })
  } 

  return (
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
            USUARIOS
          </Typography>
        </Grid>
        <Button
          variant="contained"
          onClick={handleClick1}
          style={{ backgroundColor: "#FF9300" }}
        >
          NUEVO USUARIO
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
        xs={12}
        sm={12}
        md={12}
      >
        {/*Componente CARD*/}
        {users &&
          users.map((user: any) => (
            <div>
              <CardEmployee 
                users = { user } 
                deleteUser = { deleteUser } 
              />
            </div>
          ))}
      </Grid>
    </Grid>
  );
};
