import React from 'react';
import { sideMenu } from './menu.config';
import NavItem from './navItem/NavItem';
import iitg from '../../assets/iitg.png'
import { useSelector } from "react-redux";


const Sidebar = props => {
  const isClub = useSelector((state) => state.user.isClub);
  const data={
    label: 'Event Update',
    
    to: '/eventupdate',
}
    return (
      <nav className='flex flex-col w-[30rem] pl-16 h-screen bg-[#F4F2FC] fixed overflow-y-scroll no-scrollbar'>
        <img className='h-16 w-16 mx-10 my-5' src={iitg} alt="iitg" />
        {sideMenu.map((item, index) => {
          return <NavItem className='flex flex-col m-10' key={`${item.label}-${index}`} item={item} />;
        })}
        {isClub && <NavItem className='flex flex-col m-10'  item={data} />}
      </nav>
    );
  };
  
  export default Sidebar;