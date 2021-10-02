import React from 'react';
import PropTypes from 'prop-types';

import { useState } from 'react/cjs/react.development';

export const AddCategory = ( { setCategories } ) => {

  const [inputValue, setinputValue] = useState('');

  const handleAddInputChange = (e) => {
      setinputValue(e.target.value);
  }

  const handleAddsubmit = (e) => {
      e.preventDefault();
      if( inputValue.trim().length > 2 ){
          setCategories( cats => [ inputValue, ...cats,] );
          setinputValue('');
      }
  }

    return(
        <form onSubmit={ handleAddsubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleAddInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}