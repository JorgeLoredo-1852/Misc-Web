import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () =>{
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);
    

    useEffect(()=>{
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params: {
                    action : 'query',
                    list : 'search',
                    origin : '*',
                    format : 'json',
                    srsearch : term
                }
            })
            setResults(data.query.search);
        };

        if(term && !results.length){
            search();
        }
        else{
            const timeId = setTimeout(()=>{
                if(term){
                    search();
                }
            }, 1000);

            return (
                () => { clearTimeout(timeId) }
            );
        }
    },[term]);
    
    const renderedResults = results.map( (result) => {
        return(
            <div style={{padding:"10px"}}>
                <div key = {result.pageid} className= "row" style={{margin:"10px",border:"1px solid black"}}>
                    <div style={{padding:"10px"}}>
                        <a href= {"https://en.wikipedia.org?curid=" + result.pageid} type="button" class="btn-lg btn-outline-dark float-right">Go</a>
                        <div className="title" style={{fontSize:"1.3em",fontWeight:"bolder"}}>{result.title}</div>
                        <div className="content" style={{paddingRight:"100px"}}>{result.snippet}</div>
                    </div>
                </div>
            </div>
        );
    });

    return(
        <React.Fragment>
            <div className="form-group">
                <label>Search a term</label>
                <input
                    value = {term} 
                    onChange = {(event) => {setTerm(event.target.value)}} 
                    className="form-control"/>
            </div>
            <div className= "container-fluid" style={{padding:"0px"}}>
                {renderedResults}
            </div>
        </React.Fragment>
    );
}

export default Search;