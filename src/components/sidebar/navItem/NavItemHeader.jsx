import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Search from './Search';
// import style from './navItem.module.css';

const resolveLinkPath = (childTo, parentTo) => `${parentTo}/${childTo}`;

const NavItemHeader = props => {
  const { item } = props;
  const { label,  to: headerToPath, children } = item;
  const location = useLocation();

  const [expanded, setExpand] = useState(
    location.pathname.includes(headerToPath)
  );
  
  const [style, setStyle] = useState('flex flex-col m-4 px-8 py-4 rounded-full hover:bg-[#DFE1FA]')
  const [searchField, setSearchField] = useState('')
  
  const [filteredData, setFilteredData] = useState(children)

 
  const onExpandChange = e => {
    e.preventDefault();

    setExpand(expanded => !expanded);
  };

  return (
    <><div onClick={onExpandChange}>

      <NavLink
        exact
        to={headerToPath}
        className='flex flex-col mx-4 my-2 px-8 py-4 rounded-full hover:bg-[#DFE1FA]'
        >
        
        <span className='flex flex-col ' >{label}</span>
      </NavLink>
        </div>

      {expanded && (
        
        <div className='flex flex-col px-8 bg-[#DFE1FA] rounded-lg'>
          <Search handleChange = {(e) => { 
            setSearchField(e.target.value)
            var arr = [];
            filteredData.map(el => {
              if(el.label.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1){
                arr.push(el)
                }}
                )
                if(e.target.value === ''){
                  arr = children
                  console.log(arr)
                }

               setFilteredData(arr);
                
           } }/>
          
          {filteredData.map((item) => {
            const key = `${item.label}`;

            const { label,  children } = item;
            

            if (children) {
              return (
                <div key={key}>
                  <NavItemHeader
                    item={{
                      ...item,
                      to: resolveLinkPath(item.to, props.item.to),
                    }}
                  />
                </div>
              );
            }

            return (
              <NavLink
                className='px-4 py-2 ml-4 flex flex-row'
                key={key}
                to={resolveLinkPath(item.to, props.item.to)}
                
                
              >
                
                <span >{label}</span>
                <input className='mt-2 ml-10' type="checkbox" />
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};

export default NavItemHeader;