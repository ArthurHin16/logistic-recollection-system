import {FC} from 'react';
import './assign-warehouse.styles.css'
import { Grid, Paper, Button,AppBar,Toolbar} from '@mui/material';
import Typography from '@mui/material/Typography';
import Logo from '../images/bamx-oficial.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Label, Input, Form, Row, Col} from 'reactstrap';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
export const FormAssignWarehouse: FC = (): JSX.Element => {
 
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
    };

    return(
        <Grid container>
            <FormControl sx={{width: 220, height:24 }}>
                <InputLabel id="demo-simple-select-label">Seleccione una bodega</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={handleChange}
                                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <Grid container>
                <Form>
                    <Input className="Formasignar" type="text" placeholder = "Abarrotes" name="cant_abarrote" id="abarrote"/>
                    <Input className="Formasignar" type="text" placeholder = "Fruta y verdura" name="cant_fruta" id="fruta"/>
                    <Input className="Formasignar" type="text" placeholder = "Pan" name="cant_pan" id="pan"/>
                    <Input className="Formasignar" type="text" placeholder = "No comestibles" name="cant_noComestible" id="NoComestible"/>
                </Form>
                
            </Grid>
            
        </Grid>
        
        
    )
}