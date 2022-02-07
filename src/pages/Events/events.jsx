import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import client from "../../axios"
import { useDispatch } from 'react-redux';
import { refresh_token } from '../../redux/actions';
import EventCard from '../../components/Event/EventCard';
import { useLocation } from 'react-router-dom';

function Events(props) {
    const [events, setEvents] = useState([]);
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.accessToken);

    const location = useLocation()
    const abs_path = location.pathname.substring(1)
    let arr = abs_path.split('/');
    const path = arr[arr.length - 1];
    let len = 0;

    useEffect(() => {
      client.get("/api/task/all",{
          headers : {
            'Authorization':token
          }
      })
      .then(res => {
          if(res.headers['jwt']) {dispatch(refresh_token(res.headers['jwt']));}
          setEvents(res.data);
      })
      .catch(err=>console.log(err))
    },[]);
    
    return(
        <div className='w-[44rem]'>            
            <div className='text-4xl m-2'>{path[0].toUpperCase()}{path.substring(1)}</div>
            <div className='ml-2'>
                {events.map(item => {
                    let club = item.club_name.toLowerCase();
                    var b = club.includes(path.toLowerCase())
                    if(path === 'events' || b) {
                        len++;
                        return (
                            <EventCard key={item.id} item={item}/>
                            )
                    }
                    })}
                    {len==0 && <div className='text-center text-xl'>
                        No events to display for {path[0].toUpperCase()}{path.substring(1)} club
                    </div> }
            </div>
        </div>

    );
}

export default Events;


