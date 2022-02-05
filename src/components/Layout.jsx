import React, { useState } from 'react';
import Sidebar from './sidebar/sidebar';
import {  useLocation } from 'react-router-dom';
import Login from '../pages/Login';
import { useSelector } from "react-redux";
import EventDetail from '../pages/EventDetail';

const Layout = props => {
    const { children } = props;
    const location = useLocation();
    const [path, setPath] = useState(location.pathname );
    const auth = useSelector(state => state.user.islogged);
    if(path === "/eventdetail"){
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

          <div>{children}
          </div></main>
        <footer ></footer>
      </div> : <Login/>
    );
  };
  
  export default Layout;