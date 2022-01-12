import React from 'react'
import swc from "../assets/swc.png"
import event from "../assets/event.jpeg"
import location from "../assets/location.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/twitter.svg"

const EventDetail = () => {
    return (
        <div className='mx-auto py-2' style={{width:1080}}>
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
            <div className='rounded w-full mt-4' style={{height:500}}>
                <img src={event} alt="" className='rounded-2xl eventDetailImg shadow-xl'/>
                <div className="flex flex-col timeStamp2">
                    <div className='border-white rounded-t-xl text-center date11'>
                        Dec</div>
                    <div className='border-white rounded-b-xl text-center font-medium date22'>
                        10</div>
                </div>
                <div className="flex flex-col nameStamp">
                    <div className="font-medium text-6xl text-white">Event Name</div>
                    <div className="text-3xl pt-1 font-medium text-white" style={{color:'#F7D9FF'}}>Subtitle</div>
                    <div className="text-3xl pt-1 font-medium text-white" style={{color:'#F7D9FF'}}>Location</div>
                </div>
            </div>
            {/* <====================== Event details =====================> */}
            <div className='flex flex-row justify-between px-10 mt-6 pb-20'>
                <div className='w-1/2 px-6 border-r-4'>
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
                    <div className='rounded flex flex-row py-2 px-3 justify-between mt-5 w-11/12' style={{backgroundColor:'#F2F2F9'}}>
                        <div className='flex flex-row justify-start'>
                            <img src={swc} alt="" className='rounded-full w-16 mr-3'/>
                            <div className="flex flex-col self-center">
                                <div className="text-2xl font-medium">Anurag Ravi</div>
                                <div className="mr-2">anurag.ravi@iitg.ac.in</div>
                            </div>
                        </div>
                        <div className='text-white w-24 h-8 text-sm rounded-full text-center pt-1.5 font-normal self-center cursor-pointer hover:scale-105 duration-300' style={{backgroundColor:'#6750A4'}}>
                            Register
                        </div>
                    </div>
                    <hr className='mt-5 w-11/12 '/>
                    <div className='text-3xl font-semibold mt-4'>Recources</div>
                    <div className='rounded flex flex-row py-2 px-3 justify-between mt-5 w-11/12' style={{backgroundColor:'#F2F2F9'}}>
                        <div className='flex flex-row justify-start'>
                            <div className="flex flex-col self-center">
                                <div className="text-xl font-medium">Header</div>
                                <div className="mr-2">this is subtitle</div>
                            </div>
                        </div>
                        <div className='text-white w-24 h-8 text-sm rounded-full text-center pt-1.5 font-normal self-center cursor-pointer hover:scale-105 duration-300' style={{backgroundColor:'#6750A4'}}>
                            Download
                        </div>
                    </div>
                    <div className='rounded flex flex-row py-2 px-3 justify-between mt-5 w-11/12' style={{backgroundColor:'#F2F2F9'}}>
                        <div className='flex flex-row justify-start'>
                            <div className="flex flex-col self-center">
                                <div className="text-xl font-medium">Header</div>
                                <div className="mr-2">this is subtitle</div>
                            </div>
                        </div>
                        <div className='text-white w-24 h-8 text-sm rounded-full text-center pt-1.5 font-normal self-center cursor-pointer hover:scale-105 duration-300' style={{backgroundColor:'#6750A4'}}>
                            Open Link
                        </div>
                    </div>
                </div>
                <div className='w-1/2 px-6 '>
                    <div className='rounded flex flex-row py-2 px-3 justify-between mt-5 w-11/12' style={{backgroundColor:'#F2F2F9'}}>
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
                    <hr className='mt-5 w-11/12 '/>
                    <div className='text-3xl font-semibold mt-4 mb-2'>Location</div>
                    <img src={location} alt="" />
                    <hr className='mt-5 w-11/12 '/>
                    <div className="flex flex-row justify-between mt-4 mb-2 w-11/12">
                        <div className='text-3xl font-semibold'>Share</div>
                        <div className="rounded-md self-center border-2 border-gray-400 px-5 text-gray-400 hover:bg-gray-100 cursor-pointer">Copy Link</div>
                    </div>
                    <div className="flex flex-row justify-between mt-4 w-11/12">
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

export default EventDetail
