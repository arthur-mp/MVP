import React from "react";
import './style.css';
import Card from '../Card';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  
function Destaques() { 

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

    return(
        <section className='Destaques'>
            <h1 className="title">Highlights</h1>

              <FormControl sx={{ marginInlineStart: 100, width: 200}} >
                <InputLabel id="demo-multiple-name-label" >Category</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name" 
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Category" />}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
            </FormControl>

            <div className="cards">
                <Card/> <Card/> <Card/> <Card/>
            </div> 

            <div className="button-load-more">
                <Button variant="contained" 
                    color="inherit" 
                    startIcon={<AddIcon />}
                    sx={{ marginInlineStart: 102, width: 200 }}
                >More movies</Button>
            </div>
       </section>
    );
}

export default Destaques;