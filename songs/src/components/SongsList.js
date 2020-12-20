import React from 'react';
import { connect } from 'react-redux';

class SongsList extends React.Component{
    render(){
        console.log(this.props);
        return <div>LIST OF SONGS</div>;
    }
}

const mapStateToProps = (state) =>{
    return {state:state.songs};
}

export default connect(mapStateToProps)(SongsList);
