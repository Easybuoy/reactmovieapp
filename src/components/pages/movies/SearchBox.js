import React from 'react';
import Input from '@material-ui/core/Input';


const SearchBox = ({searchfield, searchChange}) => {
    return (
      <div className="" style={{display:'flex', justifyContent: 'flex-end', marginTop: '10%', marginBottom: '10%'}}>
        <Input 
          placeholder="Search Movies...."
          inputProps={{
          'aria-label': 'Description',
        }}
          onChange={searchChange}
        />
      
      </div>
    );
}

export default SearchBox;