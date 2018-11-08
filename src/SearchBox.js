import React from 'react';

const SearchBox = ({searchfield, searchChange}) =>{
    return (
        <div className='pa1'>
           <input className='pad10 ba b--green bg-lightest-blue'
           type='search' placeholder='search robots' onChange={searchChange}/>
        </div>
    );
}
export default SearchBox;