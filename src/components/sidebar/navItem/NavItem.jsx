import React from 'react';
import { NavLink } from 'react-router-dom';

import NavItemHeader from './NavItemHeader';


const NavItem = props => {
  const { label, to, children } = props.item;

  if (children) {
    return <NavItemHeader  item={props.item} />;
  }

  return (
    <NavLink
      exact
      to={to}
      className='flex flex-col mx-4 my-2 px-8 py-4 rounded-full hover:bg-[#DFE1FA]'
    >
      
      <span className='flex flex-col ' >{label}</span>
    </NavLink>
  );
};

export default NavItem;