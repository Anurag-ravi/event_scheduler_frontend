import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EventLocation from './Map';

export default function Dropdown() {
  const [location, setLocation] = React.useState({latitude:'26.192567184206197',longitude:'91.69900087357323'});

  const handleChange = (event) => {
    setLocation(event.target.value);
    console.log(location);
  };


  return (
    <>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Location"
          onChange={handleChange}
        >
            <MenuItem value="{latitude:'26.191921992894223',longitude:'91.69572472864502'}">Alcher Wall</MenuItem> 
            <MenuItem value="{latitude:'26.1908946556589',longitude:'91.69319844828354'}">Auditorium</MenuItem>
            <MenuItem value="{latitude:'26.19049596812097',longitude:'91.69664676854391'}">Cricket Ground</MenuItem>
            <MenuItem value="{latitude:'26.189222082129966',longitude:' 91.69983510906513'}">Manas Community Hall</MenuItem>
            <MenuItem value="{latitude:'26.192567184206197',longitude:'91.69900087357323'}">New SAC</MenuItem>
            <MenuItem value="{latitude:'26.192984090676713',longitude:'91.69801979691303'}">Stadium</MenuItem>
            <MenuItem value="{latitude:'26.191172644334124',longitude:'91.69926717782712'}">Swimming Pool</MenuItem> 
        </Select>
      </FormControl>
    </Box>
    <Box>
        <EventLocation latitude={location.latitude} longitude={location.longitude}/>
    </Box>
    </>
  );
}
