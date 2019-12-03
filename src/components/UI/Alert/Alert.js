import React from 'react';

const Alert = (props) => {
    return (
        <div
            className={['alert alert', props.type].join('-')} style={{display: props.show ? 'block' : 'none'}}
            onClick={props.clickDismissible ? props.dismiss : null}>
            {props.children}
            {!props.clickDismissible && props.dismiss && <button type="button" className="close" onClick={props.dismiss}>
                <span aria-hidden="true">&times;</span>
            </button>}
        </div>
    );
};

export default Alert;