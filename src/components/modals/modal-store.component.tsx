import { FC } from 'react';
import { Grid } from '@mui/material';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { IStore } from '../../models/store.model'
import { useHistory } from "react-router-dom";
import Tienda from '../images/tienda.jpg'


interface IModalStore {
  open: boolean;
  toggle: () => void;
  store: IStore;
  deleteStore: (id: any) => void;
}

export const ModalStore: FC<IModalStore> = ({open, toggle, store, deleteStore}): JSX.Element => {  
  const handleToggle = () => {
    toggle()
  }

  // handleClick with the history to the edit with dynamic path
  let history = useHistory();

  function handleClick() {
    history.push(`/store/${store.id}/edit`);
  }

  return (
    <div>
      <Modal isOpen={open} toggle={handleToggle}>
            <ModalHeader toggle={handleToggle}>
                
            </ModalHeader>
            <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
            <ModalBody>
                <Card>
                    <CardImg top width="100%" src={ Tienda }alt="Tienda" />
                    <CardBody>
                    <CardTitle tag="h5">{store.determinante}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{store.nombre}</CardSubtitle>
                    <CardText>
                        {store.direccion}
                    </CardText>
                    </CardBody>
                </Card>
            </ModalBody>
            <ModalFooter>
                <Button variant="contained" style = {{backgroundColor:"#542463", marginRight: "20px"}} onClick = { () => deleteStore(store.id)}>ELIMINAR</Button>{' '}
                <Button variant="contained" style = {{backgroundColor:"#F3071E"}} onClick={handleClick}>EDITAR</Button>  
            </ModalFooter>
          </Grid>  
      </Modal>
    </div>
  );
}