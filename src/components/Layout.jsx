import React, { useState,useEffect } from 'react';
import Sidebar from './sidebar/sidebar';
import {  useLocation } from 'react-router-dom';
import Login from '../pages/Login';
import { useSelector } from "react-redux";
import EventDetail from '../pages/EventDetail';

const Layout = props => {
    const { children } = props;
    const location = useLocation();
    const [path, setPath] = useState(location.pathname.substring(1) );
    const auth = useSelector(state => state.user.islogged);
    useEffect(() => {
      setPath(location.pathname.substring(1))
    }, [location.pathname]);
    if(path.startsWith("eventdetail",0)){
      return(
        <EventDetail />
      )
    }
    
    return (
      auth ? <div >
        <header ></header>
        <aside >
          
        </aside>
        <main className='flex flex-row'>
          {
            
          }
        <Sidebar />

          <div className='ml-[30rem]'>{children}
          </div></main>
        <footer ></footer>
      </div> : <Login/>
    );
  };
  
  export default Layout;