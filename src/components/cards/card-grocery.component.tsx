import { FC, useState } from 'react';
import { Grid, Typography, Button, Card, CardMedia} from '@mui/material';
import Grocery from '../assets/almacen.png';
import { ModalGrocery } from '../modals/modal-grocery.component';

export const CardGrocery: FC<any> = ({ groceries, deleteGrocery }): JSX.Element => { 
    //Modal
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal); 

    const {nombre} = groceries;

    return (
        <Card>
            <Grid
                container 
                direction="column" 
                justifyContent="center"
                alignItems="center">
                <CardMedia
                    component="img"
                    image= { Grocery }
                    alt="almacen"
                    style = {{width: '100px', height: '100px'}}
                />
                <Typography variant="h6" component="div" color='black' align='center'>
                    {nombre}
                </Typography>
                <Button 
                variant="text"
                style = {{color: '#FF9300'}}
                onClick = { toggle }>
                visualizar
                </Button>
            </Grid>
            <ModalGrocery 
                open = { modal } 
                toggle = { toggle }
                grocery = {groceries}
                deleteGrocery = { deleteGrocery }
            />
        </Card> 
    );
}