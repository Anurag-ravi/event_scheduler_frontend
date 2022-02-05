import React from 'react'
import eventcreation from "../../assets/eventcreation.png"
import Dropdown from './Dropdown'

const DetailsTab = () => {
    console.log("DetailsTab")
    return(
        <div className='flex flex-col'>
            <div className="flex flex-col">
                <div style={{color:'#425466',fontSize:'32px',fontWeight:'500'}}>
                    Display Image
                </div>
                <div className='rounded w-full mt-4 items-center flex-shrink' >
                    <div style={{border:'4px solid white',borderRadius: '17px',boxShadow:'black 0px 2px 5px'}}>
                        <img src={eventcreation} alt="" className='rounded-2xl eventCreationImg shadow-xl' style={{filter: 'blur(2px)',padding:'2px'}}/>
                    </div>
                    <button className="flex flex-col changeImage sm:changeImagesm md:changeImageStampmd lg:changeImagelg">
                            Change Image
                    </button>
                </div>                
            </div>
            <div className='flex flex-col mt-4'>
                <div style={{color:'#425466',fontSize:'32px',fontWeight:'500'}}>
                    Event Name
                </div>
                <div>
                    <input type="text" className='rounded-sm shadow-xl w-full' placeholder='Enter Event Name' style={{border:'4px solid white',borderRadius: '6px',boxShadow:'black 0px 1px 5px',height:'50px',marginTop:'15px'}}/>
                </div>
            </div>
            <div className='flex flex-col mt-4'>
                <div style={{color:'#425466',fontSize:'32px',fontWeight:'500'}}>
                    Location
                </div>
                <div>
                    <Dropdown />
                </div>
                
            </div>     
        </div>
    )
}
export default DetailsTab