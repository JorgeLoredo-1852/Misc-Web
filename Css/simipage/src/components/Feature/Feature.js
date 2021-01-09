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
                     fonticon="icon-basic-compass" 
                     title="Encuentra tu camino" 
                     description="Busca tu lugar en el mundo y explota tu habilidades y fortalezas mediante una gran comunidad."/>
                <Card 
                    fonticon="icon-basic-map" 
                    title="Viaja a donde tú quieras" 
                    description="Con una botarga del Dr. Simi como acompañante, no importa de donde vengas sino a donde vas. Teamo."/>
                <Card 
                     fonticon="icon-basic-heart" 
                     title="Encuentra a tu persona especial" 
                     description="Piensa que detrás de cada botarga se encuentra una persona dispuesta a amar, dales la oportunidad de hacerlo."/>        
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