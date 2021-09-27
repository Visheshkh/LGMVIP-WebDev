import React from 'react';


const SearchBox=({searchfeild, searchChange})=>{
    return(
            <div className='pa2'>
                <input 
                className='  modifiedsearch
                '
                 type="search" 
                 placeholder='Search users' 
                 onChange={searchChange}/>
            </div>
        );
}

export default SearchBox;
