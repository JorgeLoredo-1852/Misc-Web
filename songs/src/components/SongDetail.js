import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    if(!props.song){
        return <div>Select a Song</div>;
    }
    return (
        <div>
            <h3>Details: </h3>
            <div>Title : {props.song.title}</div>
            <div>Duration : {props.song.duration}</div>
        </div>);
};

const mapStateToProps = (state) =>{
    return ({song : state.selectedSong});
}

export default connect(mapStateToProps)(SongDetail);