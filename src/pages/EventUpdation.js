import React, { useState, useEffect } from 'react'
import swc from "../assets/swc.png"
import { useSelector } from "react-redux";
import ClubNavbar from '../components/Event_Update/ClubNavbar'
import FullWidthTabs from '../components/Event_Update/Tabs'
import { useDispatch } from 'react-redux';
import { refresh_token } from '../redux/actions';
import client from "../axios"
import { base_event } from "../redux/reducers/eventDetailReducer";
import { useLocation } from 'react-router-dom';
const EventUpdation = (props) => {
    function copyText(path) {
        let link = window.location.href;
        navigator.clipboard.writeText(link);
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copied"
      }
    function outFunc() {
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy to clipboard";
    }
    const [event, setEvent] = useState(base_event);
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.accessToken);
    const location = useLocation()
    const abs_path = location.pathname.substring(1)
    let arr = abs_path.split('/');
    const task_id = arr[arr.length - 1];
    console.log(task_id);
    let len = 0;
    useEffect(() => {
        client.get(`/api/task/${task_id}`,{
            headers : {
              'Authorization':token
            }
        })
        .then(res => {
            if(res.headers['jwt']) {dispatch(refresh_token(res.headers['jwt']));}
            setEvent(res.data);
            console.log(res.data)
        })
        .catch(err=>console.log(err))
      },[]);
    return(
        <>
        <div style={{backgroundImage:'linear-gradient(0deg, rgba(61, 85, 190, 0.05), rgba(61, 85, 190, 0.05))'}}>
        <div className='mx-auto justify-center py-2 lg:w-9/12 lg:px-0 w-full px-2' >
            <ClubNavbar event={event}/>
            <div className='flex flex-col' style={{marginTop:'28px'}}>
                <div className='flex flex-row items-center'>
                    <div style={{fontSize: '64px',marginRight:'32px'}}>{event.title}</div>
                    <div className="tooltip"><button className='copylink' onClick={copyText} onMouseOut={outFunc}>
                        <span className="tooltiptext" id="myTooltip">Copy link to clipboard</span>
                        Copy Link
                        </button>
                    </div>
                </div>
                <div style={{fontSize: '28px',color:'#0C0564'}}>{event.date} {event.time_from.slice(0, 5)}</div>
                <div style={{fontSize: '28px',color:'#0C0564'}}>Location</div>
            </div>
            
        </div>
        </div>
        <FullWidthTabs variant="fullWidth" event={event}/>
        </>
    )
}
export default EventUpdation