import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import client from "../../axios"
import { useDispatch } from 'react-redux';
import { refresh_token } from '../../redux/actions';
import EventCard from '../../components/Event/EventCard';

function Events(props) {
    const [events, setEvents] = useState([]);
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.accessToken);
    useEffect(() => {
      client.get("/api/task/all",{
          headers : {
            'Authorization':token
          }
      })
      .then(res => {
          if(res.headers['jwt']) {dispatch(refresh_token(res.headers['jwt']));}
          setEvents(res.data);
          console.log(res.data)
      })
      .catch(err=>console.log(err))
    },[]);
    
    return(
        <div className='w-[44rem]'>            
            <h1>All Events</h1>
            {events.map(item => {
                return (
                    <EventCard key={item.id} item={item}/>
                )
            })}
        </div>

    );
}

export default Events;


