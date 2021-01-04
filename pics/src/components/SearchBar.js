import React from 'react';

class SearchBar extends React.Component {
    state = {term:''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <form onSubmit = {this.onFormSubmit} className= 'col align-self-center' style ={{border:'1px solid black', borderRadius: '5px'}}>
                <div className="form-group">
                    <label >Image Search</label>
                    <input 
                        value = {this.state.term} 
                        onChange = {(e) => {this.setState({term : e.target.value.toLowerCase()})}} 
                        className="form-control"
                    />
                </div>
            </form>
        );
    }
}

export default SearchBar;