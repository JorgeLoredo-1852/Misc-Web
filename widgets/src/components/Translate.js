import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label:"Afrikaans",
        value: "af"
    },
    {
        label: "French",
        value: "fr"
    },
    {
        label: "Hindi",
        value: "hi"
    },
    {
        label :"Dutch",
        value: "nl"
    },
    {
        label : "Arabic",
        value : "ar"
    }
];


const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");

    return(
        <React.Fragment>
            <div className="container" style={{marginTop:"20px"}}>
                <div>Enter Text: </div>
                    <input value = {text} onChange = {(e)=>{setText(e.target.value)}} className= "form-control" />
                <Dropdown label= "Select a Language"selection= {language} onSelectChange= {setLanguage} options={options}/>
                <hr/>
                <Convert language = {language} text={text}/>
            </div>
        </React.Fragment>
    );
}

export default Translate;