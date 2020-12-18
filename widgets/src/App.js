import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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


const App = () =>{
    return(
        <div>
            <Search/>
        </div>
    );
}

export default App;

//<Accordion items = {items}/>