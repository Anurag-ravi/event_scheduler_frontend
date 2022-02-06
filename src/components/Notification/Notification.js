import React from 'react'
import event from "../../assets/event.jpeg"
import noti1 from "../../assets/noti1.svg";


const Notification = () => {
    return (
        <div className='flex flex-row justify-between border-b-2 rounded-2xl w-full h-20 my-1'>
            <div className='flex flex-row'>
                <div className='rounded-tl-2xl rounded-bl-2xl'>
                    <img src={event} alt="" className='rounded-tl-2xl rounded-bl-2xl h-full  object-fill'/> 
                </div>
                <div className='flex flex-col px-4 py-4 rounded-b-2xl'>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <div className='text-lg font-medium cursor-pointer'>Subtitle</div>
                            <div className='text-gray-500'>Secondary Text</div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={noti1} className="rounded-full hover:cursor-pointer hover:shadow-inner self-center p-1.5"/>
        </div>
    )
}

export default Notification