import React from 'react'
import swc from "../../images/swc.png"
import event from "../../images/event.jpeg"
import location from "../../images/location.svg"
import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"
import linkedin from "../../images/linkedin.svg"
import twitter from "../../images/twitter.svg"

const EventDetails = () => {
    return (
        <div className='mx-auto justify-center py-2 lg:w-9/12 lg:px-0 w-full px-2'>
            {/* <====================== Navbar =====================> */}
            <div className='flex flex-row justify-between'>
            <img src={swc} alt="" className='rounded-full w-16'/>
            <div className='flex flex-row'>
                <div className="flex flex-col self-center">
                    <div className="text-2xl font-medium">Anurag Ravi</div>
                    <div className="mr-2">anurag.ravi@iitg.ac.in</div>
                </div>
                <img src={swc} alt="" className='rounded-full w-16'/>
            </div>
            </div>
            {/* <====================== Event image =====================> */}
            <div className='rounded w-full mt-4 items-center'>
                <img src={event} alt="" className='rounded-2xl eventDetailImg shadow-xl'/>
                <div className="flex flex-col timeStamp2 sm:timeStamp2sm md:timeStamp2md lg:timeStamp2lg">
                    <div className='border-white rounded-t-xl text-center date11 sm:date11sm md:date11md lg:date11lg'>
                        Dec</div>
                    <div className='border-white rounded-b-xl text-center font-medium date22 sm:date22sm md:date22md lg:date22lg'>
                        10</div>
                </div>
                <div className="flex flex-col nameStamp sm:nameStampsm md:nameStampmd lg:nameStamplg">
                    <div className="font-medium text-2xl md:text-5xl lg:text-6xl text-white">Event Name</div>
                    <div className="text-xl md:text-2xl lg:text-3xl pt-1 font-medium text-white" style={{color:'#F7D9FF'}}>Subtitle</div>
                    <div className="text-xl md:text-2xl lg:text-3xl pt-1 font-medium text-white" style={{color:'#F7D9FF'}}>Location</div>
                </div>
            </div>
            {/* <====================== Event details =====================> */}
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between px-2 mt-6 pb-20 relative -top-40 sm:-top-48 md:-top-56'>
                <div className='px-6 md:border-r-4'>
                    <div>
                        <div className='text-4xl mb-4'>Registration</div>
                        <div>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
                        <div>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
                        <div>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
                        <div>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
                        <div>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
                        <div>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
                        <div>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
                        <div>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
                    </div>
                    <div className='rounded flex flex-row py-2 px-3 justify-between mt-5 w-full ' style={{backgroundColor:'#F2F2F9'}}>
                        <div className='flex flex-row justify-start'>
                            <img src={swc} alt="" className='rounded-full w-16 mr-3'/>
                            <div className="flex flex-col self-center">
                                <div className="text-lg sm:text-2xl font-medium">Anurag Ravi</div>
                                <div className="text-sm sm:text-base mr-2">anurag.ravi@iitg.ac.in</div>
                            </div>
                        </div>
                        <div className='text-white px-2 h-8 text-sm rounded-full text-center pt-1.5 font-normal self-center cursor-pointer hover:scale-105 duration-300' style={{backgroundColor:'#6750A4'}}>
                            Register
                        </div>
                    </div>
                    <hr className='mt-5 w-full  '/>
                    <div className='text-3xl font-semibold mt-4'>Recources</div>
                    <div className='rounded flex flex-row py-2 px-3 justify-between mt-5 w-full ' style={{backgroundColor:'#F2F2F9'}}>
                        <div className='flex flex-row justify-start'>
                            <div className="flex flex-col self-center">
                                <div className="text-lg sm:text-xl font-medium">Header</div>
                                <div className="mr-2">this is subtitle</div>
                            </div>
                        </div>
                        <div className='text-white px-2 h-8 text-sm rounded-full text-center pt-1.5 font-normal self-center cursor-pointer hover:scale-105 duration-300' style={{backgroundColor:'#6750A4'}}>
                            Download
                        </div>
                    </div>
                    <div className='rounded flex flex-row py-2 px-3 justify-between mt-5 w-full ' style={{backgroundColor:'#F2F2F9'}}>
                        <div className='flex flex-row justify-start'>
                            <div className="flex flex-col self-center">
                                <div className="text-lg sm:text-xl font-medium">Header</div>
                                <div className="mr-2">this is subtitle</div>
                            </div>
                        </div>
                        <div className='text-white px-2 h-8 text-sm rounded-full text-center pt-1.5 font-normal self-center cursor-pointer hover:scale-105 duration-300' style={{backgroundColor:'#6750A4'}}>
                            Open Link
                        </div>
                    </div>
                </div>
                <div className='px-6 '>
                    <div className='rounded flex flex-row py-2 px-3 justify-between mt-5 w-full ' style={{backgroundColor:'#F2F2F9'}}>
                        <div className='flex flex-row justify-start'>
                            <img src={swc} alt="" className='rounded-full w-16 mr-3'/>
                            <div className="flex flex-col self-center">
                                <div className="text-2xl font-medium">Anurag Ravi</div>
                                <div className="mr-2">host</div>
                            </div>
                        </div>
                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='self-center'>
                        <path d="M1.62207 10.878L6.62207 5.87796L1.62207 0.87796" stroke="black" stroke-opacity="0.33" stroke-width="2"/>
                        </svg>
                    </div>
                    <hr className='mt-5 w-full  '/>
                    <div className='text-3xl font-semibold mt-4 mb-2'>Location</div>
                    <img src={location} alt="" />
                    <hr className='mt-5 w-full  '/>
                    <div className="flex flex-row justify-between mt-4 mb-2 w-full ">
                        <div className='text-3xl font-semibold'>Share</div>
                        <div className="rounded-md self-center border-2 border-gray-400 px-5 text-gray-400 hover:bg-gray-100 cursor-pointer">Copy Link</div>
                    </div>
                    <div className="flex flex-row justify-between mt-4 w-full ">
                    <img src={instagram} alt="" className='cursor-pointer'/>
                    <img src={twitter} alt="" className='cursor-pointer'/>
                    <img src={linkedin} alt="" className='cursor-pointer'/>
                    <img src={facebook} alt="" className='cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails;