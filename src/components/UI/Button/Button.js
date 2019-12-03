import React from 'react';
import './Button.css';

const Button = (props) => (
    <button
        disabled={props.disabled}
        className={['Button', props.type].join(' ')}
        onClick={props.onclick}>
        {props.children}
    </button>
);

export default Button;