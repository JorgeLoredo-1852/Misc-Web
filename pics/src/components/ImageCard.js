import React from 'react';

class ImageCard extends React.Component{
    constructor (props){
        super(props);
        this.state = {span: 0};
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({span : spans});
    }


    render(){
        return(
            <div style = {{gridRowEnd : `span ${this.state.span}`}}>
                <img alt = {this.props.image.description} ref={this.imageRef} src = {this.props.image.urls.regular}/>
            </div>
        );
    }
}

export default ImageCard;