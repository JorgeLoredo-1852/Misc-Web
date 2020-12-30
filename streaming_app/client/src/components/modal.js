import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = (props) => {
    return ReactDOM.createPortal(
      <div onClick={props.dismiss} class="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div onClick={(e)=>e.stopPropagation()} className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                  </div>
                  <div className="modal-body">
                    {props.body}
                  </div>
                  <div className="modal-footer">
                    {props.action}
                  </div>
              </div>
          </div>
      </div>
     ,
        document.getElementById('modalll')
    );
};

export default Modal;