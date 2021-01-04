import React from 'react';
import { connect } from 'react-redux';

import UserHeader from './UserHeader';
import { fecthPosts, fetchPostsAndUsers } from '../actions';


class PostLists extends React.Component{
    componentDidMount(){
        this.props.fetchPostsAndUsers();
    }

    renderList(){
        const renderedList = this.props.posts.map((post)=>{
            return(
                    <li className="list-group-item" key = {post.id}>
                        <img style = {{width:"120px"}} className="float-left" src="./1200px-User_font_awesome.svg.png"/>
                        <div className="content" style={{padding:"10px"}}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <UserHeader userId = {post.userId} />
                        </div>
                    </li>
            );
        })
        return renderedList;
    }

    render(){
        return (
            <ul className = "list-group" style={{margin:"10px"}}>
                {this.renderList()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return ({posts:state.posts});
}

export default connect (mapStateToProps, { fecthPosts , fetchPostsAndUsers} )(PostLists);