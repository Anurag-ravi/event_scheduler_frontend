import React from 'react'
import { Typography } from "@mui/material";
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
const Guests = () => {
    const gray = {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
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
        background-color: ${gray[400]};
    }

    &:focus {
        color: #fff;
        border-radius: 3px;
        outline: 2px solid ${gray[200]};
        outline-offset: 2px;
    }

    &.${tabUnstyledClasses.selected} {
        background-color: ${gray[50]};
        color: ${gray[600]};
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
    min-width: 200px;
    background-color: ${gray[500]};
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
            <div className='flex flex-row rounded-xl shadow-lg align-middle'>
                <div className='flex flex-col'>
                    <div className='flex flex-row mb-4'>
                        <div>
                        <Typography variant='h5'sx={{color:'#425466',height:'20px'}}>Invite Guests via Email ID </Typography>
                        </div>
                        <div>
                        {/* <TabsUnstyled defaultValue={0}>
                            <TabsList>
                                <Tab>One</Tab>
                                <Tab>Two</Tab>
                            </TabsList>
                            <TabPanel value={0}>First content</TabPanel>
                            <TabPanel value={1}>Second content</TabPanel>
                        </TabsUnstyled> */}
                        </div>
                    </div>
                    <div className='w-full'>
                        <input type="text" placeholder='Enter Name of Event'id="" className='rounded-sm w-full' style={{height:'50px',padding:'2px'}} />
                    </div>
                    <div style={{width:'80%'}}>
                        <input type="text" placeholder='Enter Name of Event'id="" style={{height:'50px',padding:'2px'}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guests;