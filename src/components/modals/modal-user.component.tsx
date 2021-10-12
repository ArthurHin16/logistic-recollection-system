import { FC } from 'react';
import { Typography} from '@mui/material';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { IUser } from '../../models/user.model'
import { useHistory } from "react-router-dom";

//Interface with the function deleteUser
interface IModalUser {
  open: boolean;
  toggle: () => void;
  user: IUser;
  deleteUser: (id: any) => void;
}


export const ModalUser: FC<IModalUser> = ({ open, toggle, user, deleteUser}): JSX.Element => {  
  const handleToggle = () => {
    toggle()
  }

  let history = useHistory();

  // handleClick with the history to the edit with dynamic path
  function handleClick() {
    history.push(`/user/${user.id}/edit`);
  }

  return (
    <div>
      <Modal isOpen={open} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>
      
        </ModalHeader>
        <ModalBody>
        {`ID: ${user.id}`} <br></br> 
        {`Nombre: ${user.nombre} ${user.apellidoPaterno} ${user.apellidoMaterno}`} <br></br>
        {`Rol: ${user.puesto}`} 
            <Typography
                variant="body1" 
                component="div" 
                color='#A0A0A0' 
                align='left'>
                {`Teléfono Celular: ${user.telefonoCelular}`}<br></br>
                {`Teléfono Casa: ${user.telefonoCasa}`}<br></br>
                {`Correo: ${user.correo}`}<br></br>
            </Typography>
        </ModalBody>
        <ModalFooter>
            <Button variant="contained" style = {{backgroundColor:"#542463", marginRight: "20px"}} onClick={()=> deleteUser(user.id)} >ELIMINAR</Button>{' '}
            <Button variant="contained" style = {{backgroundColor:"#F3071E"}} onClick={handleClick}>EDITAR</Button>  
        </ModalFooter>
      </Modal>
    </div>
  );
}

