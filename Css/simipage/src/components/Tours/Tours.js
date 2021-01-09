import React from 'react';
import './Tours.css';
import Button from '../Button/Button';

const Card1 = {
    color:"both",
    title: "Galán",
    comment1: "Camarada",
    comment2:"Tiene dos corazones",
    comment3: "Está bien guapo",
    costo: "$ 297"
};

const Card2 = {
    color:"red",
    title: "Santa Claus",
    comment1: "Te regala cosas",
    comment2: "Es tú papá",
    comment3: "Huele rico",
    costo:"$ 597"
};

const Card3 = {
    color:"blue",
    title: "Tropical",
    comment1: "Le gusta la parranda",
    comment2: "Tiene sombrero",
    comment3: "Se ligó a mamá lucha",
    costo:"$ 347"
};

export const Tours = () =>{
    return(
        <section className="tours">
            <div className= "u-center-content u-margin-bottom-small">
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

                <Button classes="btn btn-blue" title="Cónocelos a todos"/>
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
                        <li>{card.comment1}</li>
                        <li>{card.comment2}</li>
                        <li>{card.comment3}</li>
                    </ul>
                </div>
            </div>
            <div className={"card__side card__side--back card__side--back-" + card.color}>
                <div className="card__cta">
                    <div className = "card__cta-price">
                        <p className="only_price">Costo:</p>
                        <p className="actual_price">{card.costo}</p>
                    </div>
                    <Button classes="btn btn-white" title="Llama Ya!"/>
                </div>
            </div>
        </div>
    );
};
