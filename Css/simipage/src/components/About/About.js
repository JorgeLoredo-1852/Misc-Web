import React from 'react';
import './_About.css';
import Button from '../Button/Button';
import p1 from './simi1.jpg';
import p2 from './simi2.jpg';
import p3 from './simi3.jpg';

const About = () => {
    return(
        <main>
            <section className="about-section">
                <div className= "u-center-content u-margin-bottom-big">
                    <h2 className="about-section-heading">Tú médico de cabecera </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="about-text-heading u-margin-bottom-small">Se similar sin dejar de ser diferente</h3>
                        <p className="about-text"> Página dedicada a llevar luz hasta los más reconditos lugares del universo, de la mano del pragmático y muy feliz personaje el "Dr Simi". Si no tienes familia estás en el lugar correcto. Bienaventurados los que escuchen esta palabra.</p>
                        <h3 className="about-text-heading u-margin-bottom-small">Protejamos al universo juntos</h3>
                        <p className="about-text">Sin duda como he explicado antes existe un mutliverso de doctores simi, sin embargo es nuestro deber protegerlo y alíarnos a la armada del Dr Simi, una de las fuerzas más destructivas del universo conocido.</p>
                        <Button classes="btn-text" title="Más información  &rarr;"/> 
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={p1} alt="Photo1"className="composition__photo composition__photo--p1"/>
                            <img src={p2} alt="Photo2"className="composition__photo composition__photo--p2"/>
                            <img src={p3} alt="Photo3"className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
                
            </section>
        </main>
    )
};

export default About;