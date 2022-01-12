import React from 'react'
import event from "../assets/event.jpeg"
import swc from "../assets/codingclub.png"

const EventCard = () => {
    return (
        <div className='flex flex-row shadow-md rounded-2xl' style={ {width:734} }>
            <div className='rounded-tl-2xl rounded-bl-2xl' style={ {height:240,width:400} }>
                <img src={event} alt="" className='rounded-tl-2xl rounded-bl-2xl h-60 object-fill' style={ {width:400} }/>
                <img src={swc} alt="" className='rounded-full eventClubLogo cursor-pointer hover:scale-105 duration-300'/>
                <div className="flex flex-col w-14 timeStamp">
                    <div className='border-white rounded-t-lg text-center date1'>
                        Dec</div>
                    <div className='border-white rounded-b-lg text-center font-medium date2'>
                        10</div>
                </div>
            </div>
            <div className='w-80 flex flex-col p-4' style={ {height:240} }>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <div className='text-lg font-medium cursor-pointer hover:scale-105 duration-300'>Headline</div>
                        <div className='text-gray-500'>Subtitle</div>
                    </div>
                    <div className='text-white w-24 h-8 text-sm rounded-full text-center pt-1.5 font-normal self-center cursor-pointer hover:scale-105 duration-300' style={{backgroundColor:'#6750A4'}}>
                        Undo RSVP
                    </div>
                </div>
                <div className='text-sm py-5 textDesc'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem esse ducimus necessitatibus nisi blanditiis incidunt velit nesciunt, inventore ullam quasi architecto rerum praesentium voluptatem.
                </div>
                <div className='text-white w-14 h-8 text-sm rounded-lg text-center pt-1.5 self-end cursor-pointer hover:scale-105 duration-300 font-medium relative bottom-0.5' style={{backgroundColor:'#6FCF97'}}>
                        Pay
                    </div>
            </div>
        </div>
    )
}

export default EventCard
