import React from 'react';
import EventCard from '../../components/Event/EventCard';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Other(props) {


    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div className=''>
            <div className='flex flex-row'>
            <div className='ml-4 mt-10 mb-10'>
                <h1 className='text-6xl'>Events</h1>
            </div>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                className='ml-96 h-10 mt-14 '
            >
                <ToggleButton value="web">Upcoming</ToggleButton>
                <ToggleButton value="android">Past</ToggleButton>
                
            </ToggleButtonGroup>
            </div>

            <div className='mb-4 ml-16'>
                <EventCard ></EventCard>
            </div>
            <div className='mb-4 ml-16'>
                <EventCard ></EventCard>
            </div>
            <div className='mb-4 ml-16'>
                <EventCard ></EventCard>
            </div>
            <div className='mb-4 ml-16'>
                <EventCard ></EventCard>

            </div>
        </div>

    );
}

export default Other;