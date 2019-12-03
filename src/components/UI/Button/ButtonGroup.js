import React from 'react';
import Button from "./Button";

const ButtonGroup = (props) => {
    return (
       props.buttons.map(btn=>(
           <Button
               key={btn.label}
                className={['btn btn', btn.type].join('-')}
               label={btn.label}
               onClick={btn.clicked}
           >
           </Button>
       ))
    );
};

export default ButtonGroup;