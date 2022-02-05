import React from 'react';


const Search = (props) => {
    return(
        <input 
        className='rounded-full mt-2'
        type="search"
        onChange={props.handleChange}
         />
    )
}

export default Search