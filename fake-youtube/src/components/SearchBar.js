import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''};
    
    onInputChange = (event) =>{
        this.setState({term : event.target.value});
    }

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSearchTerm(this.state.term);
    }

    render(){
        return(
        <div className = 'row' style = {{margin: '20px'}}>
            <form className="form-floating col-12" onSubmit = {this.onFormSubmit}>
                <label for="exampleFormControlInput1" className="form-label-lg">Video Search</label>
                <input 
                    onChange = {this.onInputChange} 
                    className="form-control form-control-lg" 
                    type="text"/>
            </form>
        </div>   
        );
    }
}

export default SearchBar;