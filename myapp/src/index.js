import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails';

const App = function () {
    return (
        <div className = "container-fluid">
            <div className = "row">
                <CommentDetails author="Alejandro Valencia" mensaje = "No sabes cuantas ganas tengo de poder ganar una batalla de Freestyle" hora = "Hoy a las 8:00PM" imagen = "img/Valencia.jpg"/>
                <CommentDetails author="Jorge Loredo" mensaje = "Sin duda la Red Bull 2020 se la lleva skone poque le ganó a todos los de España" hora = "Ayer a las 6:00PM" imagen = "img/Jorge.jpg"/>
                <CommentDetails author= "Cesar Acarrea" mensaje = "Yo sigo ardido porque Gazir y MP perdieron cuando les hicieron tongo" hora= "Hoy a las 7:00PM" imagen = './img/Cesar.jpg'/>
                <CommentDetails author= "Julio Reyes" mensaje = "Amo Sacbe más que a mi hermana, aunque mi hermana esté en Sacbé" hora = "Ayer a las 6:00PM" imagen = "img/Julio.jpg"/>
                <CommentDetails author= "Portilla Ramírez" mensaje = "Estoy completamente mamadísimo soy una arma en carne y hueso" hora = "Hoy ahorita en corto" imagen = "img/Portilla.jpg"/>
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