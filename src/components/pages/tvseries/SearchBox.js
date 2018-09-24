import React from 'react';
import Input from '@material-ui/core/Input';


const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="" style={{display:'flex', justifyContent: 'flex-end', marginTop: '10%', marginBottom: '10%'}}>
        <Input 
        placeholder="Search Tv Shows...."
        inputProps={{
          'aria-label': 'Description',
        }} onChange={searchChange}
      />

        {/* <input 
        className="pa3 ba b--green bg-lightest-blue" 
        type="search" 
        placeholder="search robots"
         /> */}
        </div>
    );
}

export default SearchBox;