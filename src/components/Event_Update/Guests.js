import React from 'react'
import { Typography } from "@mui/material";
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
const Guests = () => {
    const blue = {
        50: '#F0F7FF',
        100: '#C2E0FF',
        200: '#80BFFF',
        300: '#66B2FF',
        400: '#3399FF',
        500: '#3D55BE',
        600: '#0072E5',
        700: '#0059B2',
        800: '#004C99',
        900: '#003A75',
      };
      const Tab = styled(TabUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    color: white;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: transparent;
    width: 100%;
    padding: 8px 8px;
    margin: 4px 4px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: ${blue[400]};
    }

    &:focus {
        color: #fff;
        border-radius: 3px;
        outline: 2px solid ${blue[200]};
        outline-offset: 2px;
    }

    &.${tabUnstyledClasses.selected} {
        background-color: ${blue[50]};
        color: ${blue[600]};
    }

    &.${buttonUnstyledClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
    }
    `;

    const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    `;

    const TabsList = styled(TabsListUnstyled)`
    min-width: 320px;
    background-color: ${blue[500]};
    border-radius: 8px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    `;

    return(
        <div className='flex flex-col'>
            <div className='flex flex-col'>
                <Typography variant='h4'sx={{color:'#425466'}}>Guests</Typography>
            </div>
            <div className='flex flex-rol rounded-xl shadow-lg align-middle'>
                <div className='flex flex-row'>
                <Typography variant='subtitle1'sx={{color:'#425466'}}>Invite Guests via Email ID </Typography>
                </div>
                <div>
                <TabsUnstyled defaultValue={0}>
                    <TabsList>
                        <Tab>One</Tab>
                        <Tab>Two</Tab>
                        <Tab>Three</Tab>
                    </TabsList>
                    <TabPanel value={0}>First content</TabPanel>
                    <TabPanel value={1}>Second content</TabPanel>
                    <TabPanel value={2}>Third content</TabPanel>
                </TabsUnstyled>
                </div>
            </div>
        </div>
    );
}

export default Guests;