import React from 'react';
import './Tours.css';

const Card1 = {
    color:"both",
    title: "TEXTO"
};

const Card2 = {
    color:"red",
    title: "TEXTO"
};

const Card3 = {
    color:"blue",
    title: "TEXTO"
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
                <div className= {"card__picture card__picture-" + card.color}>
                    
                </div>
                <div className="card__heading">

                </div>
                <div className="card__text">

                </div>
            </div>
            <div className={"card__side card__side--back card__side--back-" + card.color}>
                back
            </div>
        </div>
    );
};
