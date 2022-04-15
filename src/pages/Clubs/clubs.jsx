import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Reminders from '../../components/Misc/Reminders';
import Subscriptions from '../../components/Misc/Subscriptions';

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
            <Subscriptions subscribed={true}/>
            <Subscriptions subscribed={false}/>
            <Subscriptions subscribed={true}/>
            <Subscriptions subscribed={false}/>
            <Subscriptions subscribed={false}/>
            <Subscriptions subscribed={true}/>
            <Subscriptions subscribed={true}/>

            </div>
        </div>
    )
}

export default Clubs