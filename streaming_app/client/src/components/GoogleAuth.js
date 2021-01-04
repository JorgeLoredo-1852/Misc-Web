import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:"743190205416-ruuddvg77bg5lcmnbvng4t0q7tmkj6bu.apps.googleusercontent.com",
                scope:"email"
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.authOnChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.authOnChange);
            })
        })
    }

    authOnChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    renderAuth() {
        if(this.props.isSignedIn === null){
            return <div></div>;
        } else if(this.props.isSignedIn){
            return (
            <div>
                <button onClick={this.auth.signOut} type="button" className="btn btn-info">
                    <i className="bi bi-google"></i>
                    Sign Out
                </button>
            </div>);
        } else {
            return (<div>
                <button onClick={this.auth.signIn} type="button" className="btn btn-info">
                    <i className="bi bi-google"></i>
                    Sign In
                </button>
            </div>);
        }
    }

    render(){
        return(
            <div>
                {this.renderAuth()}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return ({isSignedIn : state.auth.isSignedIn});
};

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);