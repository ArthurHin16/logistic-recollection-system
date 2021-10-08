import { FC, useState } from 'react';
import { Typography } from '@mui/material';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

interface IModalGrocery {
  open: boolean;
  toggle: () => void;
  //Agregar otra propiedad que sea Grocery: any Crear una interfaz a el usario para que le pase la información
}


export const ModalGrocery: FC<IModalGrocery> = ({open, toggle}): JSX.Element => {  
  const handleToggle = () => {
    toggle()
  }

  return (
    <div>
      <Modal isOpen={ open } toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>
            
        </ModalHeader>
        <ModalBody>
            ID: <br></br>
            Bodega: <br></br>
            Dirección: <br></br>
            Municipio: <br></br>
            <Typography
                variant="body1" 
                component="div" 
                color='#A0A0A0' 
                align='left'>
                Teléfono: <br></br>
                Encargado: <br></br>
            </Typography>
        </ModalBody>
        <ModalFooter>
            <Button variant="contained" style = {{backgroundColor:"#542463", marginRight: "20px"}} onClick={handleToggle}>ELIMINAR</Button>{' '}
            <Button variant="contained" style = {{backgroundColor:"#F3071E"}} onClick={handleToggle}>EDITAR</Button>  
        </ModalFooter>
      </Modal>
    </div>
  );
}
