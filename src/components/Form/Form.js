import React, { useState } from 'react';

import './Form.css';

const Form = (props) => {
  const [value, setValue] = useState('');

  return (
    <div className='form__group field'>
      <input
        type='input'
        value={value}
        className='form__field'
        placeholder='Name'
        name='city'
        id='name'
        required
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.charCode === 13) {
            props.search(value);
            setValue('');
          }
        }}
      />
      <label htmlFor='name' className='form__label'>
        City
      </label>
    </div>
  );
};

export default Form;
