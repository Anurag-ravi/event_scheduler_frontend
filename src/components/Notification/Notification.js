import React from 'react'
import event from "../assets/event.jpeg"


const Notification = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 shadow-lg rounded-2xl w-12/12  h-30'>
            <div className='rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none'>
                 <img src={event} alt="" className='rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-b2-2x1 w-4/12 h-30 object-fill'/> 
            </div>
            <div className='flex flex-col px-4 py-2 sm:py-4 relative -top-28 rounded-b-2xl shadow-lg sm:shadow-none sm:top-0'>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <div className='text-lg font-medium cursor-pointer'>Subtitle</div>
                        <div className='text-gray-500'>Secondary Text</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Notification