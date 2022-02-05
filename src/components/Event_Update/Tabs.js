import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import eventcreation from "../../assets/eventcreation.png"
import { red } from '@mui/material/colors';

import DetailsTab from './DetailsTab';
const dangerRed = red[400];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div style={{backgroundImage:'linear-gradient(0deg, rgba(61, 85, 190, 0.05), rgba(61, 85, 190, 0.05))'}}>
    <Box sx={{ bgcolor:'background.paper',width: '100%' }}>
      <AppBar elevation={0} position="static" sx={{color:'black',background:'linear-gradient(0deg, rgba(61, 85, 190, 0.05), rgba(61, 85, 190, 0.05))',boxShadow:''}}>
      <div className='mx-auto justify-center lg:w-9/12 lg:px-0 w-full px-2' >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Guests" {...a11yProps(0)} />
          <Tab label="Details" {...a11yProps(1)}/>
          <Tab label="Annoucements" {...a11yProps(2)}/>
          <Tab label="Resources" {...a11yProps(3)} />
          <Tab label="Email" {...a11yProps(2)} />
          <Tab label="Insights" {...a11yProps(2)} />
          <button style={{color:'white',backgroundColor:'#EB5757',width:'81px', borderRadius:'10px 10px 0px 0px', marginLeft:'10px'}}>Cancel</button>
        </Tabs>
        </div>
      </AppBar>
      <div className='mx-auto justify-center lg:w-9/12 lg:px-0 w-full px-2' >
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            < DetailsTab />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
      </div>
    </Box>
    </div>
  );
}
