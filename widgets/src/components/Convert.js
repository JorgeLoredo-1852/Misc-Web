import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({language, text}) => {
    const [translation, setTranslation] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);


    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebouncedText(text);
        },500)
        return (()=>{clearTimeout(timerId)}); 
    });

    useEffect(()=>{
        const textTranslation = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                params:{
                    q:debouncedText,
                    target:language.value,
                    key:"AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                }
            })
            setTranslation(data.data.translations[0].translatedText);
        }
        textTranslation();
    },[debouncedText,language]);

    return(
        <div>
            <h2>Output</h2>
            <h3>{translation}</h3>
        </div>
    );
}

export default Convert;