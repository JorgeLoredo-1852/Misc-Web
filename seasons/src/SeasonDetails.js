import './styles.css';
import React from 'react';


const getSeason  = (lat,month) =>{
console.log(lat);
console.log(month);

    if(month >2 && month <9){
        if(lat>0){
            return 'Summer';
        }
        else{
            return 'Winter';
        }
    }
    else{
        if(lat>0){
            return 'Winter';
        }
        else{
            return 'Summer';
        }
    }
}

const SeasonDetails = (props) =>{
    const season = getSeason(props.lat, new Date().getMonth());

    if(season.localeCompare('Summer')==0){
        return(
            <Jumbo 
                imagen = "Images/Sun.png" 
                titulo = "SUMMER!" 
                mensaje = "Visita balnearios, parques y cualquier cosa que te haga feliz"
                colorImg = "imagenSummer"
            />
        );
    }
    else{
        return(
            <Jumbo 
                imagen = "Images/snow.png" 
                titulo = "WINTER!" 
                mensaje = "Ten cuidado Jimbo, hace mucho frío para salir"
                colorImg = "imagenWinter"
            />
        );
    }
    
}

const Jumbo = (props) =>{
    return(
        <div className="jumbotron jumbotron-fluid" id = {props.colorImg}>
                <div className="container">
                    <div className = "row">
                        <img src={props.imagen} className="col-md-3" alt=""/>
                        <div className="Title col-md-6">{props.titulo}
                            <h2>{props.mensaje}</h2>
                        </div>
                        <img src={props.imagen} className="col-md-3" alt=""/>
                    </div>
                </div>
            </div>
    );
}


export default SeasonDetails;