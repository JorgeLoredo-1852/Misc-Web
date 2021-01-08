import React from 'react';
import './Tours.css';

const Card1 = {
    color:"both",
    title: "Galán"
};

const Card2 = {
    color:"red",
    title: "Santa Claus"
};

const Card3 = {
    color:"blue",
    title: "Tropical"
};

export const Tours = () =>{
    return(
        <section className="tours">
            <div className= "u-center-content u-margin-bottom-big">
                <h2 className="about-section-heading">Personalidades múltiples</h2>
                <div className="row">
                    <div className="col-1-of-3">
                        <CardHover card={Card1}/>
                    </div>
                    <div className="col-1-of-3">
                        <CardHover card={Card2}/>
                    </div>
                    <div className="col-1-of-3">
                        <CardHover card={Card3}/>
                    </div>
                </div>
            </div>
        </section>
    );
};


export const CardHover = ({card}) =>{
    return(
        <div className="card">
            <div className={"card__side card__side--front card__side--front-" + card.color}>
                <div className= {"card__picture card__picture-" + card.color}></div>
                    <h4 className={"card__heading card__heading-" + card.color}>
                        <span className={"card__headingwrap card__headingwrap-" + card.color}>
                            {card.title}
                        </span>
                    </h4>
                <div className="card__text">
                    <ul>
                        <li>Camarada</li>
                        <li>Tiene dos corazones</li>
                        <li>Está bien guapo</li>
                    </ul>
                </div>
            </div>
            <div className={"card__side card__side--back card__side--back-" + card.color}>
                back
            </div>
        </div>
    );
};
