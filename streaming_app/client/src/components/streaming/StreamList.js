import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchStreams();
    }

    renderList(){
        return( this.props.streams.map((stream)=>{
            return (
                <a className="list-group-item list-group-item-action" key={stream.id}>
                    <i class="bi bi-camera-fill"></i>
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{stream.title}</h5>
                    </div>
                    <p className="mb-1">{stream.description}</p>
                </a>
            );
        }));
    }

    render(){
        return (
            <div>
                <Link to="/stream/new">StreamList</Link>
                <br/>
                <h2 style={{textAlign:"center"}}>STREAMS</h2>
                <div className="list-group">
                    {this.renderList()}
                </div>
            </div>
        );
    }
};
const mapStateToProps = (state) =>{
    //Object.value convierte un objeto en un arreglo
    return ({streams : Object.values(state.streams)});
};

export default connect(mapStateToProps, {fetchStreams})(StreamList);