import React from 'react';

const CommentDetails = function (props) {
    return(
        <div className = "col-lg-6">
            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img className="rounded-circle" src={props.imagen} alt="Card image cap"/>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">{props.author}</h4>
                        <p class="card-text">{props.mensaje}</p>
                        <div class= "card-text float-right">{props.hora}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentDetails;