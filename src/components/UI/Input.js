import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef ((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input 
                ref={ref}
                {...props.input}
                // type={props.type}
                // min={props.min}
                // max={props.max}
                // placeholder={props.placeholder}
                // value={props.value}
                // onChange={props.onChange}
            />
        </div>
    )
});

export default Input;