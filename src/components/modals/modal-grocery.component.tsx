import { FC } from 'react';
import { Typography } from '@mui/material';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { IGrocery } from '../../models/grocery.model'
import { useHistory } from "react-router-dom";

interface IModalGrocery {
  open: boolean;
  toggle: () => void;
  grocery: IGrocery;
  deleteGrocery: (id: any) => void;
}


export const ModalGrocery: FC<IModalGrocery> = ({open, toggle, grocery, deleteGrocery}): JSX.Element => {  
  const handleToggle = () => {
    toggle()
  }

  // handleClick with the history to the edit with dynamic path
  let history = useHistory();

  function handleClick() {
    history.push(`/grocery/${grocery.id}/edit`);
  }


  return (
    <div>
      <Modal isOpen={ open } toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>
            
        </ModalHeader>
        <ModalBody>
          {`ID: ${grocery.id}`}<br></br>
          {`Nombre: ${grocery.nombre}`}<br></br>
          {`Dirección: ${grocery.direccion}`} <br></br>
          {`Municipio: ${grocery.municipio}`} <br></br>
            <Typography
                variant="body1" 
                component="div" 
                color='#A0A0A0' 
                align='left'>
                {`Teléfono: ${grocery.telefono}`} <br></br>
            </Typography>
        </ModalBody>
        <ModalFooter>
            <Button variant="contained" style = {{backgroundColor:"#542463", marginRight: "20px"}} onClick={() => deleteGrocery(grocery.id)}>ELIMINAR</Button>{' '}
            <Button variant="contained" style = {{backgroundColor:"#F3071E"}} onClick={handleClick}>EDITAR</Button>  
        </ModalFooter>
      </Modal>
    </div>
  );
}
