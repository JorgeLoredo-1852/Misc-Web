import React from 'react';

const AprovalCard= function (props) {
    console.log(props.children);
    return(
        <div className = "col-lg-6">
            <div class="card">
                {props.children}
                <div>
                    <button type="button" class="btn btn-outline-success btn-lg col-md-6">Approve</button>
                    <button type="button" class="btn btn-outline-danger btn-lg col-md-6">Reject</button>
                </div>
            </div>
        </div>
    );
}

export default AprovalCard;