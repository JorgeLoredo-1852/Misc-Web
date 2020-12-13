import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDetails from './SeasonDetails';


//A diferencia de una función, una clase se encarga de tareas asincrónicas
//Por ejemplo, recuperar la ubicación del usuario o actualizar después de cada evento

class App extends React.Component{

    //El constructor se encarga de inicializar "State"
    //También lo puedo inicializar 
    /*constructor(props){
        super(props);
        this.state = {lat:null, errorMessage :''};
    }*/

    state = {lat:null, errorMessage:''};

    //Cada vez que el componente se actualiza por ejemplo
    //this.setState
    //Buen lugar para Data-Loading cada vez que algo se actualiza
    componentDidUpdate(){

    }


    //Primera vez que el contenido carga
    //Por convención aquí es dónde hay data-loading
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat:position.coords.latitude});
            },
            (err) => {
                this.setState({errorMessage:err.message});
            }
        );
    }

    //Cuando el componente es destruido, se utiliza más para limpieza
    componentWillUnmount(){

    }

    //La función de render es solamente regresar JSX
    render(){
        if(!this.state.lat && this.state.errorMessage){
            return(
                <div>
                    Error: {this.state.errorMessage}
                </div>
            );
        }
        else if(this.state.lat && !this.state.errorMessage){
            return(
                <div>
                    <SeasonDetails lat={this.state.lat}/>
                </div>
            );
        }

        return (
        <div>
            Loading...
        </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));