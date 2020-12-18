import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () =>{
    const [term, setTerm] = useState('');

    useEffect(()=>{
        const search = async () => {
            await axios.get('https://en.wikipedia.org/w/api.php',{
                params: {
                    action : 'query',
                    list : 'search',
                    origin : '*',
                    format : 'json',
                    srsearch : term
                }
            })
        };
        search();
    });

    return(
        <div class="form-group">
            <label>Search a term</label>
            <input
                value = {term} 
                onChange = {(event) => {setTerm(event.target.value)}} 
                class="form-control"/>
        </div>
    );
}

export default Search;