import { FC, useState } from 'react';
import { Typography } from '@mui/material';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const ModalGrocery: FC = (): JSX.Element => {  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="#FF9300" onClick={toggle}>Revisar</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
            
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
            <Button variant="contained" style = {{backgroundColor:"#542463", marginRight: "20px"}} onClick={toggle}>ELIMINAR</Button>{' '}
            <Button variant="contained" style = {{backgroundColor:"#F3071E"}} onClick={toggle}>EDITAR</Button>  
        </ModalFooter>
      </Modal>
    </div>
  );
}
