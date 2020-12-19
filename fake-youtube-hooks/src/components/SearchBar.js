import React,{useState} from 'react';

const SearchBar = ({onSearchTerm}) => {
    const [term, setTerm] = useState('');
    const onInputChange = (event) =>{
        setTerm(event.target.value);
    }
    const onFormSubmit = (event) =>{
        event.preventDefault();
        onSearchTerm(term);
    }

    return(
        <div className = 'row' style = {{margin: '20px'}}>
            <form className="form-floating col-12" onSubmit = {onFormSubmit}>
                <label for="exampleFormControlInput1" className="form-label-lg">Video Search</label>
                <input 
                    onChange = {onInputChange} 
                    className="form-control form-control-lg" 
                    type="text"/>
            </form>
        </div>   
        );

};

export default SearchBar;