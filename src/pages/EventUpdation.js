import React from 'react'
import swc from "../assets/swc.png"

import ClubNavbar from '../components/Event_Update/ClubNavbar'
import FullWidthTabs from '../components/Event_Update/Tabs'
const EventUpdation = () => {
    return(
        <>
        <div style={{backgroundImage:'linear-gradient(0deg, rgba(61, 85, 190, 0.05), rgba(61, 85, 190, 0.05))'}}>
        <div className='mx-auto justify-center py-2 lg:w-9/12 lg:px-0 w-full px-2' >
            <ClubNavbar />
            <div className='flex flex-col' style={{marginTop:'28px'}}>
                <div className='flex flex-row items-center'>
                    <div style={{fontSize: '64px',marginRight:'32px'}}>Event Name</div>
                    <div><button className='copylink'>Copy Link</button></div>
                </div>
                <div style={{fontSize: '28px',color:'#0C0564'}}>Date time</div>
                <div style={{fontSize: '28px',color:'#0C0564'}}>Location</div>
            </div>
            
        </div>
        </div>
        <FullWidthTabs variant="fullWidth"/>
        </>
    )
}
export default EventUpdation