import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Reminders from '../../components/Misc/Reminders';

const Clubs = () => {

    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };



    return(
        <div>
            <div className='flex flex-row'>
                <h1>Fests and Clubs</h1>
                <div>
                <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                className='ml-96 h-10 mt-14 '
            >
                <ToggleButton value="web">Board</ToggleButton>
                <ToggleButton value="android">Club</ToggleButton>
                <ToggleButton value="Fest">Fest</ToggleButton>
                
            </ToggleButtonGroup>
                </div>
            </div>
            <div>
            <Reminders />
            <Reminders />
            <Reminders />
            <Reminders />
            <Reminders />
            <Reminders />
            <Reminders />
            <Reminders />

            </div>
        </div>
    )
}

export default Clubs