import React from 'react';
import { connect } from 'react-redux';
import { SelectSong } from '../actions';

class SongsList extends React.Component{
    render(){
        const renderedList = this.props.songs.map((song)=>{
            return (
                <div key={song.title}>
                    <li className="list-group-item">
                        {song.title}
                        <button 
                            onClick = {()=>this.props.SelectSong(song)} 
                            type="button" 
                            className="btn btn-dark float-right" 
                            style={{}}
                        >Select</button>
                    </li>
                </div>
            );
        });
        return (
            <ul className="list-group">
                {renderedList}
            </ul>
            );
    }
}

const mapStateToProps = (state) =>{
    return {songs:state.songs};
}

export default connect(mapStateToProps, { SelectSong })(SongsList);
