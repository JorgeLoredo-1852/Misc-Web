import React from 'react';
import ReactDOM from 'react-dom';

const App = function () {
    return (
        <div className = "container-fluid">
            <div className = "row">
                <div className = "col-md">
                    <div class="card">
                        <div class="card-horizontal">
                            <div class="img-square-wrapper">
                                <img class="" src="logo192.png" alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Sam Fernandez</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div class= "card-text float-right">Today at 6:00PM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));



















//Button 

/*import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return 'Click on me';
}

const App = function (){
    return (
        <div>
            <label class = "label" for = "name">Enter name: </label>
            <input id = "name" type = "text" style = {{border : "1px solid red"}} />
            <button style = {{backgroundColor : 'blue', color : 'white' }}>
                {getButtonText()}
            </button>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.getElementById("root")

);*/