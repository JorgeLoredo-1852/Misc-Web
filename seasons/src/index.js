import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDetails from './SeasonDetails';

class App extends React.Component{
    render(){
        window.navigator.geolocation.getCurrentPosition(
            function (position) {
                console.log(position);
            },
            function (err){
                console.log(err);
            }
        );
        return <div>Latitude : </div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));