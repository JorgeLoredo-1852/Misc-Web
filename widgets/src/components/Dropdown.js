import React,{useState} from 'react';

const Dropdown = ({selection, onSelectChange, options}) => {

    const [openTag, setOpenTag] = useState(false);

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
        <div style={{border: "1px solid black"}}>
            <div type="button" onClick = {()=>setOpenTag(!openTag)}>
                <a class="btn dropdown-toggle float-right"  id="dropdownMenuButton" data-toggle="dropdown"></a>
                <span value = {selection.value} className="dropdown-item-text">{selection.label}</span>
            </div>
            <div className= {openTag ? "" : "collapse"}>
                {renderedColors}
            </div>
        </div>
    );
}

export default Dropdown;