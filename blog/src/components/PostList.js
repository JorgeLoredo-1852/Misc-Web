import React from 'react';
import { connect } from 'react-redux';
import { fecthPosts } from '../actions';


class PostLists extends React.Component{
    componentDidMount(){
        this.props.fecthPosts()
    }

    render(){
        return (
            <div>
                PostLists
            </div>
        );
    }
}

export default connect (null, { fecthPosts } )(PostLists);