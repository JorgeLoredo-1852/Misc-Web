import './styles.css';

import React from 'react';

const LoadingSpinner = (props) => {
    return(
        <div>
        <div class="d-flex justify-content-center">
                <div class="spinner-border m-5" role="status"></div>
        </div>
                        
        <div class="d-flex justify-content-center">
            <span className = "">{props.message}</span>
        </div></div>
    );
}

LoadingSpinner.defaultProps = {
    message : 'Loading...'
}

export default LoadingSpinner;