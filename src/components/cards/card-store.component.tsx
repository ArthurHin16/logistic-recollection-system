import { FC, useState } from 'react';
import { Grid, Typography, Button, Card, CardMedia} from '@mui/material';
import { ModalStore } from '../modals/modal-store.component';
import Store from '../assets/tienda.png';

export const CardStore: FC<any> = ( {stores, deleteStore} ): JSX.Element => { 
    //Modal
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal); 

    const {determinante, nombre} = stores;

    return (
                <Card>
                    <Grid
                        container 
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <CardMedia
                            component="img"
                            image= { Store }
                            alt="tienda"
                            style = {{width: '100px', height: '100px'}}
                        />
                        <Typography variant="h6" component="div" color='black' align='center'>
                           {`Determinante: ${determinante}`}  <br></br>
                            {nombre}
                        </Typography>
                        <Button 
                        variant="text"
                        style = {{color: '#FF9300'}}
                        onClick = { toggle }
                        >
                        visualizar
                        </Button>
                    </Grid>
                    <ModalStore 
                        open = { modal } 
                        toggle = { toggle }
                        store = { stores }
                        deleteStore = { deleteStore }
                        />
                </Card> 
    );
}