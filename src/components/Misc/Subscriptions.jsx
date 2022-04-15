import React, { useState } from 'react'

const Subscriptions = (props) => {
    const [subscribed, setsubscribed] = useState(props.subscribed)
    const subscribe = ()=>{
        setsubscribed(true);
    }
    const unsubscribe = ()=>{
        setsubscribed(false);
    }
  return (
    <div className='flex flex-row rounded-lg border-2 mb-2 px-2 py-4 justify-between'>
        <div className='flex flex-row'>
            <div className='rounded-full bg-[#3D54BF] h-12 w-12 text-center text-white py-3 mr-5'>
                <div className="">A</div>
            </div>
            <div>
                <div className="font-medium">Header</div>
                <p>This is a Placeholder</p>
            </div>
        </div>
        <div className='flex flex-row h-10 rounded-full border-[#a3a3a9] bg-[#f5f3fd] self-center p-0.5 gap-2 transition ease-in-out delay-150' style={{borderWidth:"1px"}}>
            <div onClick={subscribe} className={`rounded-full ${subscribed ? "bg-[#3c54be] text-white":"text-[#a2a3aa] font-semibold"} px-5 py-1 cursor-pointer`}>Subscribe</div>
            <div onClick={unsubscribe} className={`rounded-full ${!subscribed ? "bg-[#3c54be] text-white":"text-[#a2a3aa] font-semibold"}  px-5 py-1 cursor-pointer`}>Unsubscribe</div>
        </div>
        </div>
  )
}

export default Subscriptions