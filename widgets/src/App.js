import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
    {
        title: 'Porque el Dr Simi?',
        content: 'El doctor Simi es símbolo nacional, aparte de guapo y tener un buen tamaño de posaderas'
    },
    {
        title: 'Dr Simi o Vaquita Alpura',
        content: 'Claramente un debate formidable, pero los pasos del dr simi resultan más felxibles en cuanto a género de música'
    },
    {
        title: 'Quien eres',
        content: 'Jorge Loredo mucho gusto por encontrarme contigo, en el underground también me conocen como JG'
    }
];

const colorOptions = [
    {
        label: "This is Red",
        value : "red"
    },
    {
        label: "This is Blue",
        value: "blue"
    },
    {
        label: "This is green",
        value: "green"
    }
];


const App = () =>{

 //   const [selection, setSelection] = useState(colorOptions[0]);
 //  const [visDropdown, setVisDropdown] = useState(true);

    return(
        <React.Fragment>
            <Translate/>
        </React.Fragment>
    );
}

export default App;

//<Accordion items = {items}/>
/*<div style={{padding:"10px"}}>
    <Search/>
</div>*/

/*<div style={{padding:"10px"}}>
            <button style = {{margin:"10px"}} onClick= {() => {setVisDropdown(!visDropdown)}}>Toggle Dropdown</button>
            { visDropdown ? 
            <Dropdown selection = {selection} onSelectChange = {setSelection} options={colorOptions}/>
            : null
            }
        </div>
        <div style={{color : `${selection.value}`}}>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </div>*/