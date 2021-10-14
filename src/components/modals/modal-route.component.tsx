import { FC, useState, useEffect } from 'react';
import { Typography} from '@mui/material';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { IUser } from '../../models/user.model'
import { useHistory } from "react-router-dom";
import { IRoute1 } from '../../models/routes1.model';

//Interface with the function deleteUser
interface IR {
  open: boolean;
  toggle: () => void;
  inf: string;
}


export const ModalRoute: FC<IR> = ({ open, toggle, inf}): JSX.Element => {  

  const [rutas, setRutas] = useState({
    id: '',
    nombre: ''
  })


  const fetchRuta = async () => {
    const res = await fetch(`http://localhost:5000/coordinator/detalles-ruta2/${inf}`);
    const item = await res.json();
    setRutas(item.data[0]);
    console.log(item.data[0]);
  };

  useEffect(() => {
    fetchRuta();
  }, []);


  const handleToggle = () => {
    toggle()
  }


  return (
    <div>
      <Modal isOpen={open} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>
      
        </ModalHeader>
        {/*<ModalBody>
        {`ID: ${rutas.id}`} <br></br> 
        {`Nombre: ${rutas.nombre} `} <br></br>
            <Typography
                variant="body1" 
                component="div" 
                color='#A0A0A0' 
                align='left'>
                {`Teléfono Celular: ${user.telefonoCelular}`}<br></br>
                {`Teléfono Casa: ${user.telefonoCasa}`}<br></br>
                {`Correo: ${user.correo}`}<br></br>
            </Typography>
        </ModalBody>*/}
      </Modal>
    </div>
  );

}
