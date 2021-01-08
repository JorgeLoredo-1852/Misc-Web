import React from 'react';
import './Feature.css'

export const Feature = () => {
    return(
        <div className="section_features">
            <div className="row">
                <Card 
                    fonticon="icon-basic-world" 
                    title="Explora el mundo" 
                    description="Acompaña al dr Simi a través de todo el universo conocido y desconocido. No tengas miedo extraño viajero."/>
                <Card 
                     fonticon="icon-basic-world" 
                     title="Explora el mundo" 
                     description="Acompaña al dr Simi a través de todo el universo conocido y desconocido. No tengas miedo extraño viajero."/>
                <Card 
                    fonticon="icon-basic-world" 
                    title="Explora el mundo" 
                    description="Acompaña al dr Simi a través de todo el universo conocido y desconocido. No tengas miedo extraño viajero."/>
                <Card 
                     fonticon="icon-basic-world" 
                     title="Explora el mundo" 
                     description="Acompaña al dr Simi a través de todo el universo conocido y desconocido. No tengas miedo extraño viajero."/>        
            </div>
        </div>
    );
};

export const Card = (props) => {
    return( 
        <div className= "col-1-of-4">
            <div className="feature-box u-margin-bottom-small">
                <i className={"icon-style " + props.fonticon}></i>
                <h3 className="about-text-heading">{props.title}</h3>
                <p className="about-text">{props.description}</p>
            </div>
        </div>);
};