import React, { useState , useEffect, useRef } from 'react';

const Dropdown = ({selection, onSelectChange, options, label}) => {

    const [openTag, setOpenTag] = useState(false);
    const ref = useRef();

    useEffect(()=>{

        const onBodyClick = (event) =>{
            if(ref.current && ref.current.contains(event.target)){
                return;
            }
            setOpenTag(false);
        }

        document.body.addEventListener('click', onBodyClick);

        return (()=>{
            document.body.removeEventListener('click',onBodyClick);
        });
    },[]);

    const renderedColors = options.map((color) =>{

        if(selection.value === color.value){
            return null;
        }
        return (<a 
                    onClick = {()=>{onSelectChange(color);setOpenTag(!openTag);}} 
                    className= "dropdown-item" 
                    key={color.value}
                >{color.label}</a>);
    });

    return (
        <div>{label}
            <div ref={ref} style={{border: "1px solid black"}}>
                <div type="button" onClick = {()=>setOpenTag(!openTag)}>
                    <a class="btn dropdown-toggle float-right"  id="dropdownMenuButton" data-toggle="dropdown"></a>
                    <span value = {selection.value} className="dropdown-item-text">{selection.label}</span>
                </div>
                <div className= {openTag ? "" : "collapse"}>
                    {renderedColors}
                </div>
            </div>
        </div>
    );
}

export default Dropdown;