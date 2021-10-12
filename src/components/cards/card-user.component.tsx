import { FC, useState } from 'react';
import User from '../assets/user.png';
import { Grid, Typography, Button, Card, CardMedia} from '@mui/material';
import { ModalUser } from '../modals/modal-user.component';

export const CardEmployee: FC<any> = ({ users, deleteUser }): JSX.Element => { 
    //Modal
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal); 

    const {id, nombre} = users;

    return (
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
                          {`ID: ${id}`} <br></br>
                          {`Nombre: ${nombre}`}
                      </Typography>
                      <Button 
                      variant="text"
                      style = {{color: '#FF9300'}}
                      onClick = { toggle }
                      >
                      visualizar
                      </Button>
                  </Grid>
                <ModalUser  /*users*/
                    open = { modal } 
                    toggle = { toggle } 
                    user = { users }
                    deleteUser = { deleteUser }
                    />
              </Card> 
          </Grid>
    )
}