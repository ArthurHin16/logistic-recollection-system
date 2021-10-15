import { FC, useContext } from 'react';
import { Grid, Button,AppBar,Toolbar, Typography } from '@mui/material';
import { useHistory } from "react-router-dom";
import Logo from '../images/bamx-oficial.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { AuthContext } from '../../auth-context';

export const HeaderComponent: FC = (): JSX.Element => {
    let history = useHistory();

    const context = useContext(AuthContext);

    function handleClick() {
        history.push("/admin");
    }

    function handleOut() {
      context.logout();
      history.push("/");
  }

    return (
        <AppBar position="static" style={{background: '#F9F6FB', height: '25vh'} }>
          <Toolbar>
            <Grid container xs={3} sm={3} md = {3} lg = {2}>
              <Button onClick={handleClick}><img src = {Logo} alt="logo" width='100%'/></Button>
            </Grid>      
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} color='#FF9300' align='center'>
              Administrador
            </Typography>
            <Button style = {{color: "#FF9300"}} size="medium" onClick={handleOut}>Cerrar sesión <ExitToAppIcon/></Button>
          </Toolbar> 
        </AppBar>
    )
}