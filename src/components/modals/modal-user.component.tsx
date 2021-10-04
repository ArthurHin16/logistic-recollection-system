import { FC, useState } from 'react';
import { Typography } from '@mui/material';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const ModalUser: FC = (): JSX.Element => {  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="#FF9300" onClick={toggle}>Revisar</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
      
        </ModalHeader>
        <ModalBody>
            ID Usuario: AL12 <br></br>
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
            <Button variant="contained" style = {{backgroundColor:"#542463", marginRight: "20px"}} onClick={toggle}>ELIMINAR</Button>{' '}
            <Button variant="contained" style = {{backgroundColor:"#F3071E"}} onClick={toggle}>EDITAR</Button>  
        </ModalFooter>
      </Modal>
    </div>
  );
}

