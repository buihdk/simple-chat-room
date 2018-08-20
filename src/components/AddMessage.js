import React from 'react';
import PropTypes from 'prop-types';

const AddMessage = (props) => {
  let input;
  console.log('myprops: ', props);

  return (
    <section id="new-message">
      <input 
        onKeyPress={(e) => { 
          if (e.key === 'Enter') {
            props.dispatch(input.value, 'Me');
            input.value = '';
          }
        }}
        type="text" ref={ (node) => { input = node } }
      />
    </section>
  )
}

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddMessage;