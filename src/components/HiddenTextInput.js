import React from 'react';
import { FormControl } from 'react-bootstrap';
import "./HiddenTextInput.css"

const HiddenTextInput = (props) => {
    const handleChange = (event) => {
      props.handleChange(event.target.value);
    }

    const handleOnFocus = (event) =>{
        event.target.select()
    }

    return ( <FormControl autoFocus onFocus={handleOnFocus} onChange={handleChange} className="transparent-input" type="text" value={props.value} /> );
}
 
export default HiddenTextInput;