import React,{useState} from 'react';

const OnlineEvent = (props) => {
    return (
        <div className='flex flex-col mt-4'>
            <div className='flex flex-col rounded-sm shadow-xl w-full' style={{border:'4px solid white',borderRadius: '6px',boxShadow:'black 0px 1px 5px' ,marginBottom:'20px'}}>
            <div  style={{color:'#3D55BE',fontSize:'18px',fontWeight:'600'}} >
                    Event URL
            </div>
            <div>
                <input type="text" className='rounded-sm w-full' placeholder='Enter Event URL' style={{height:'30px',outline:'none'}} />
            </div>
            </div>
            <div className='flex flex-col rounded-sm shadow-xl w-full' style={{border:'4px solid white',borderRadius: '6px',boxShadow:'black 0px 1px 5px',marginBottom:'20px'}}>
            <div  style={{color:'#3D55BE',fontSize:'18px',fontWeight:'600'}} >
                Room ID (If Required)
            </div>
            <div>
                <input type="text" className='rounded-sm w-full' placeholder='Room ID' style={{height:'30px',outline:'none'}} />
            </div>
            </div>
            <div className='flex flex-col rounded-sm shadow-xl w-full' style={{border:'4px solid white',borderRadius: '6px',boxShadow:'black 0px 1px 5px',marginBottom:'20px'}}>
            <div  style={{color:'#3D55BE',fontSize:'18px',fontWeight:'600'}} >
                    Password (If Required)
            </div>
            <div>
                <input type="text" className='rounded-sm w-full' placeholder='Password' style={{height:'30px',outline:'none'}} />
            </div>
            </div>
        </div>
    )

}
export default OnlineEvent;