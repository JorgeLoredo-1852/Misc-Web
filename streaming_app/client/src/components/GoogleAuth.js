import React from 'react';

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:"743190205416-ruuddvg77bg5lcmnbvng4t0q7tmkj6bu.apps.googleusercontent.com",
                scope:"email"
            })
        })
    }

    render(){
        return(
            <div>
                GoogleAuth
            </div>
        );
    }
};

export default GoogleAuth;