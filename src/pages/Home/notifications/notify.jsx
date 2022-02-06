import React from 'react'
import Notification from '../../../components/Notification/Notification'
import cross from "../../../assets/cross.svg";

const Notify = (props) => {
    return(
        <div className='m-3 p-2 shadow-xl border-2 rounded-lg'>
            <div className="flex flex-row justify-between mb-2">
                <div className='text-4xl'>Notification</div>
                <img src={cross} className="rounded-full hover:cursor-pointer hover:shadow-inner self-center p-1.5" onClick={props.noti}/>
            </div>
            <div className='w-full'>
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
            </div>
        </div>
    )
}

export default Notify