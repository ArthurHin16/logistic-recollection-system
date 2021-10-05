import { FC, useState } from 'react';
import { Typography } from '@mui/material';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


interface IModalUser {
  open: boolean;
  toggle: () => void;
  //Agregar otra propiedad que sea USER: any Crear una interfaz a el usario para que le pase la información
}

export const ModalUser: FC<IModalUser> = ({open, toggle}): JSX.Element => {  
  const handleToggle = () => {
    toggle()
  }

  return (
    <div>
      <Modal isOpen={open} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>
      
        </ModalHeader>
        <ModalBody>
            ID Usuario: AL12 <br></br> {/*user.id*/}
            Nombre completo: Arturo Hinojosa Reyna <br></br>
            Rol: Almacenista
            <Typography
                variant="body1" 
                component="div" 
                color='#A0A0A0' 
                align='left'>
                Unidad/Almacén: TLAHUAPAN <br></br>
                Télefono celular: 771 209 4638 <br></br>
                Teléfono casa: 395 345 3821 <br></br>
                Correo: example@itesm.mx <br></br>
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

