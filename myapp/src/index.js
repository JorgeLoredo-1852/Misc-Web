import React from 'react';
import ReactDOM from 'react-dom';

const App = function (){
    return (
        <div>
            <label class = "label" for = "name">Enter name: </label>
            <input id = "name" type = "text" style = {{border : "1px solid red"}} />
            <button style = {{backgroundColor : 'blue', color : 'white' }}>Submit</button>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.getElementById("root")

);