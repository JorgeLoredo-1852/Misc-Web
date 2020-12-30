import React from 'react';
import { connect } from 'react-redux';
import Modal from '../modal';
import history from '../../history';
import { fetchStream } from '../../actions';

class StreamDelete extends React.Component{
    
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions(){
        return (
            <React.Fragment>
                <button type="button" className="btn btn-secondary" >Cancel</button>
                <button type="button" className="btn btn-primary">Delete</button>
            </React.Fragment>
        );
    }
    render(){
        if(this.props.stream){
        return (
            <div>
                StreamDelete
                <Modal 
                    title="Delete Stream"
                    body={"Are you sure you want to delete the stream:"+this.props.stream.title}
                    action={this.renderActions()}
                    dismiss= {()=>history.push("/")}
                />
            </div>
        );}
    }
}

const mapStateToProps = (state,ownProps) =>{
    return({stream: state.streams[ownProps.match.params.id]});
};

export default connect(mapStateToProps, { fetchStream })(StreamDelete);