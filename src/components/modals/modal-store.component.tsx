import { FC, useState } from 'react';
import { Grid } from '@mui/material';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Tienda from '../images/tienda.jpg'

interface IModalStore {
  open: boolean;
  toggle: () => void;
  //Agregar otra propiedad que sea Store: any Crear una interfaz a el usario para que le pase la información
}

export const ModalStore: FC<IModalStore> = ({open, toggle}): JSX.Element => {  
  const handleToggle = () => {
    toggle()
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
                    <CardTitle tag="h5">4544</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Superama Ávila Camacho</CardSubtitle>
                    <CardText>
                        Manuel Ávila Camacho #606 C.P 62170, Col. La Pradera, Cuernavaca
                    </CardText>
                    </CardBody>
                </Card>
            </ModalBody>
            <ModalFooter>
                <Button variant="contained" style = {{backgroundColor:"#542463", marginRight: "20px"}} onClick={handleToggle}>ELIMINAR</Button>{' '}
                <Button variant="contained" style = {{backgroundColor:"#F3071E"}} onClick={handleToggle}>EDITAR</Button>  
            </ModalFooter>
          </Grid>  
      </Modal>
    </div>
  );
}