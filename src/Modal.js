import React from 'react';

export function Modal(props) {
    const message = props.message || "";
    if (props.visible) {
      return (
        <div className="modal">
          <div className="modal-content">
            <p className='modal-msg'>{message}</p>
            <button className='modal-btn' onClick={props.onClose}>Ok</button>
          </div>
        </div>
      );
    }
  }
  