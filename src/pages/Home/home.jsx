import React, { useState } from 'react';
import face from '../../assets/XL.png'
import Reminders from '../../components/Misc/Reminders';
import { useSelector } from "react-redux";
import Notify from './notifications/notify';
import noti1 from "../../assets/noti1.svg";
import noti2 from "../../assets/noti2.svg";







function Home(props) {
    
    const [Notific, setNotific] = useState(false);

    const Notification = e => {
        e.preventDefault();

    setNotific(Notific => !Notific);
    }
    let time = new Date().getHours();

    const profile = useSelector(state => state.profile);

    return (
        <div className='mt-4 h-max'>
            <div className=''>
            <hr />
            <div className='flex flex-row justify-between w-[44rem]'>
                <div className='flex flex-col justify-around pl-3'>
                    <div className='text-2xl'>
                        {
                            time >= 6 && time < 12 ? 'Good Morning'
                            : time >= 12 && time < 17 ? 'Good Afternoon'
                            : time >= 17 && time < 21 ? 'Good Evening'
                            : 'Good Night'
                        }
                    </div>
                    <div className='text-2xl font-medium'>{profile.name}</div>
                </div>
                <div className='flex flex-row'>
                   <img src={Notific ? noti2 : noti1} className="rounded-full shadow-xl hover:cursor-pointer hover:shadow-inner self-center p-1.5" onClick={Notification}/>
                   <img src={face} alt="" />
                </div>

            </div>
            <hr />
            </div>

            {!Notific && (
                <div className='flex flex-col pl-4'>
                <div>
                    <div className='text-4xl'>Reminders</div>
                </div>
                <div className='py-4'>
                    <Reminders />
                    <Reminders />
                    <Reminders />
                    <Reminders />
                    <Reminders />
                    <Reminders />
                    <Reminders />
                    <Reminders />
                    <Reminders />
                </div>
                
           </div>
            )}
            {console.log(Notific)}
            {Notific && (
                <div>
                <Notify noti={Notification}/>
            </div>
            ) }

            

        </div>

    );
}

export default Home;