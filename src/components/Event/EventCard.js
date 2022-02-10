import React, {useState} from 'react'
import event from "../../assets/event.jpeg"
import swc from "../../assets/codingclub.png"
import { useSelector,useDispatch } from "react-redux";
import client from "../../axios"
import { add_event, refresh_token } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

const EventCard = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.user.accessToken);

    const id = useSelector(state => state.profile.profile_id);
    const item = props.item;
    const event_id = item.id;
    const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let date = item.date.toString();
    let arr = date.split('-');
    const [rsvp, setrsvp] = useState(item.rsvp_users.includes(id));

    const eventDetail = () => {
        dispatch(add_event(item));
        navigate(`/eventdetail/${item.id}`)
    }

    const rsvpBtn = () => {
        var url = ""
        if(!rsvp){
            url = "/rsvp/event/" + event_id;
        } else {
            url = "/unsubscribe/event/" + event_id;
        }
        client.get(url,{
            headers : {
              'Authorization':token
            }
        })
        .then(res => {
            if(res.headers['jwt']) {dispatch(refresh_token(res.headers['jwt']));}
            setrsvp(!rsvp);
        })
        .catch(err=>alert(err))
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 shadow-lg rounded-2xl w-11/12 md:w-10/12 lg:w-full h-60 my-2'>
            <div className='rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none'>
                <img src={event} alt="" className='rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none w-full h-60 object-fill'/>
                <img src={swc} alt="" className='rounded-full eventClubLogo cursor-pointer hover:scale-105 duration-300'/>
                <div className="flex flex-col w-14 timeStamp">
                    <div className='border-white rounded-t-lg text-center date1'>
                        {month[parseInt(arr[1])-1]} </div>
                    <div className='border-white rounded-b-lg text-center font-medium date2'>
                        {arr[2]} </div>
                </div>
            </div>
            <div className='flex flex-col px-4 py-2 sm:py-4 relative -top-28 rounded-b-2xl shadow-lg sm:shadow-none sm:top-0'>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <div onClick={eventDetail} className='text-lg font-medium cursor-pointer hover:scale-105 duration-300'>{item.title}</div>
                        <div className='text-gray-500'>By {item.club_name}</div>
                    </div>
                    <div onClick={rsvpBtn} className='text-white w-24 h-8 text-sm rounded-full text-center pt-1.5 font-normal self-center cursor-pointer hover:scale-105 duration-300' style={{backgroundColor:'#6750A4'}}>
                        {rsvp ? 'Undo RSVP':'RSVP'}
                    </div>
                </div>
                <div className='text-sm py-5 textDesc'>
                    {item.description}
                </div>
                <div className='text-white w-14 h-8 text-sm rounded-lg text-center pt-1.5 self-end cursor-pointer hover:scale-105 duration-300 font-medium relative bottom-1' style={{backgroundColor:'#6FCF97'}}>
                        Pay
                    </div>
            </div>
        </div>
    )
}

export default EventCard
