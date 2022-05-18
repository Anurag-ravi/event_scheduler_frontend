import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EventLocation from './Map';
import ReactMapGL,{Marker} from "react-map-gl";
import locationmarker from "../../assets/locationmarker.png"
export default function Dropdown() {
  const locations = {
    'Alcher Wall':{'latitude':26.191921992894223,'longitude':91.69572472864502},
    'New SAC': {'latitude':26.192567184206197,'longitude':91.69900087357323},
    'Auditorium': {'latitude':26.1908946556589,'longitude':91.69319844828354},
    'Cricket Ground':{'latitude':26.19049596812097,'longitude':91.69664676854391},
    'Manas Community Hall':{'latitude':26.189222082129966,'longitude':91.69983510906513},
    'Stadium':{'latitude':26.192984090676713,'longitude':91.69801979691303},
    'Swimming Pool':{'latitude':26.191172644334124,'longitude':91.69926717782712}

  }
  const [location, setLocation] = React.useState('');
  const [viewport, setViewport] = useState({
    width: 1000,
    height: 400,
    latitude: 26.192567184206197,
    longitude: 91.69900087357323,
    zoom: 15
  });
  const handleChange = (e) => {
    setLocation(e.target.value);
    setViewport(viewport => ({...viewport, latitude: locations[e.target.value]['latitude'], longitude: locations[e.target.value]['longitude']}));
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
          onChange={e=>handleChange(e)}
        >
            <MenuItem value='Alcher Wall'>Alcher Wall</MenuItem> 
            <MenuItem value='Auditorium'>Auditorium</MenuItem>
            <MenuItem value='Cricket Ground'>Cricket Ground</MenuItem>
            <MenuItem value='Manas Community Hall'>Manas Community Hall</MenuItem>
            <MenuItem value='New SAC'>New SAC</MenuItem>
            <MenuItem value='Stadium'>Stadium</MenuItem>
            <MenuItem value='Swimming Pool'>Swimming Pool</MenuItem> 
        </Select>
      </FormControl>
    </Box>
    <Box sx={{marginTop:'10px'}}>
      <ReactMapGL
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoidmlnaG5lc2gzODAyIiwiYSI6ImNreTZkZnJvNjBpZjUydm5vdWZhZHd1OGsifQ.tE3nwt6R4En89O2IxP2Ulw"
            onViewportChange={viewport => {
                setViewport(viewport)
            }}
          >
          <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
              <img src={locationmarker} alt="" style={{height:'40px',width:'40px'}}/>
          </Marker>
          </ReactMapGL>
    </Box>
    </>
  );
}
