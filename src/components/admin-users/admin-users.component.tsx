import { FC, useState } from 'react'
import { Grid, AppBar, Toolbar, Typography, Button, Card, CardMedia} from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Logo from '../images/bamx-oficial.png';
import SearchIcon from '@mui/icons-material/Search';
import User from '../assets/user.png';
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useHistory } from "react-router-dom";
import './admin-users.styles.css';

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

export const AdminUserComponent: FC = (): JSX.Element => {
  let history = useHistory();
  
  function handleClick() {
    history.push("/admin");
  }

  function handleClick1() {
    history.push("/admin-newuser");
  }

  //Modal
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
                <Grid
                  container
                  direction="column"
                  alignItems="center">
                      <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} color ="black">
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
                        style = {{ backgroundColor: "#FF9300" }}
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
                <Card>
                    <Grid
                        container 
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <CardMedia
                            component="img"
                            image= { User }
                            alt="usuario"
                            style = {{width: '100px', height: '100px'}}
                        />
                        <Typography variant="h6" component="div" color='black' align='center'>
                            AH01
                        </Typography>
                        <Button 
                        variant="text"
                        style = {{color: '#FF9300'}}
                        >
                        visualizar
                        </Button>
                    </Grid>
                </Card>  

                <Card>
                    <Grid
                        container 
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <CardMedia
                            component="img"
                            image= { User }
                            alt="usuario"
                            style = {{width: '100px', height: '100px'}}
                        />
                        <Typography variant="h6" component="div" color='black' align='center'>
                            AH01
                        </Typography>
                        <Button 
                        variant="text"
                        style = {{color: '#FF9300'}}>
                        visualizar
                        </Button>
                    </Grid>
                </Card> 

                <Card>
                    <Grid
                        container 
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <CardMedia
                            component="img"
                            image= { User }
                            alt="usuario"
                            style = {{width: '100px', height: '100px'}}
                        />
                        <Typography variant="h6" component="div" color='black' align='center'>
                            AH01
                        </Typography>
                        <Button 
                        variant="text"
                        style = {{color: '#FF9300'}}>
                        visualizar
                        </Button>
                    </Grid>
                </Card> 
                
            </Grid>

        </Grid>
    );
}