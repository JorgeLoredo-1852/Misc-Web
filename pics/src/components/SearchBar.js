import React from 'react';

class SearchBar extends React.Component {
    onInputChange(event){
        console.log(event.target.value);
    }


    render(){
        return(
            <form className= 'col align-self-center' style ={{border:'1px solid black', borderRadius: '5px'}}>
                <div className="form-group">
                    <label >Image Search</label>
                    <input onChange = {this.onInputChange} className="form-control"/>
                </div>
            </form>
        );
    }
}

export default SearchBar;