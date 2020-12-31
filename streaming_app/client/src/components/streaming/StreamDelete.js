import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component{
    
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions(){
        const id = this.props.match.params.id;
        return (
            <React.Fragment>
                <button onClick={()=>this.props.deleteStream(id)} type="button" className="btn btn-primary">Delete</button>
                <Link to="/" type="button" className="btn btn-secondary" >Cancel</Link>
            </React.Fragment>
        );
    }
    render(){
        if(this.props.stream){
        return (
            <div>
                <Modal 
                    title="Delete Stream"
                    body={"Are you sure you want to delete the stream: "+this.props.stream.title}
                    action={this.renderActions()}
                    dismiss= {()=>history.push("/")}
                />
            </div>
        );}
        else {
            return(
                <div>
                    Loading...
                </div>
            );
        }

    }
}

const mapStateToProps = (state,ownProps) =>{
    return({stream: state.streams[ownProps.match.params.id]});
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);