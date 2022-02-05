import React from 'react';
import { sideMenu } from './menu.config';
import NavItem from './navItem/NavItem';
import iitg from '../../assets/iitg.png'


const Sidebar = props => {
    return (
      <nav className='flex flex-col bg-blue-100 w-2/5 pl-16 h-screen'>
        <img className='h-16 w-16 ml-4' src={iitg} alt="iitg" />
        {sideMenu.map((item, index) => {
          return <NavItem className='flex flex-col m-10' key={`${item.label}-${index}`} item={item} />;
        })}
      </nav>
    );
  };
  
  export default Sidebar;