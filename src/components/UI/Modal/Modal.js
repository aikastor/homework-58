import React, {Fragment} from 'react';
import './Modal.css';

const Modal = (props) => (
    <Fragment>
        <div className="modal" style={{display: props.show ? 'inline-block' : 'none'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                        <button type="button" className="close" onClick={props.close}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        {props.buttons}
                    </div>
                </div>
            </div>
        </div>
    </Fragment>

);

export default Modal;