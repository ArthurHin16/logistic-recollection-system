import { FC, useState, useEffect } from "react";
import { Grid, AppBar, Toolbar, Typography, Button } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Logo from "../images/bamx-oficial.png";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useHistory } from "react-router-dom";
import "./admin-users.styles.css";
import { CardEmployee } from "../cards/card-user.component";
import { IUser } from "../../models/user.model";
import axios from "axios";
import { useSnackbar } from 'notistack';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#FF9300",
  "&:hover": {
    backgroundColor: "#FF9300",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const AdminUserComponent: FC = (): JSX.Element => {

  //Variables for useHistory
  let history = useHistory();

  function handleClick() {
    history.push("/admin");
  }

  function handleClick1() {
    history.push("/admin-newuser");
  }

  //REST API GET
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchPersonal = async () => {
    const res = await fetch("http://localhost:5000/admin/personal");
    const items = await res.json();
    const arr: IUser[] = [];
    for (let item of items.data) {
      arr.push(item);
    }
    setUsers(arr);
  };

  useEffect(() => {
    fetchPersonal();
  }, [users]);

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

  return (
    <Grid container>
      <AppBar
        position="static"
        style={{ background: "#F9F6FB", height: "25vh" }}
      >
        <Toolbar>
          <Grid container xs={3} sm={3} md={3} lg={2}>
            <Button onClick={handleClick}>
              <img src={Logo} alt="logo" width="100%" />
            </Button>
          </Grid>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
            color="#FF9300"
            align="center"
          >
            Administrador
          </Typography>
          <Button size="medium" style={{ color: "#FF9300" }}>
            Cerrar sesión <ExitToAppIcon />
          </Button>
        </Toolbar>
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
      </AppBar>

      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Button
          variant="contained"
          onClick={handleClick1}
          style={{ backgroundColor: "#FF9300" }}
        >
          NUEVO USUARIO
        </Button>
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
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
