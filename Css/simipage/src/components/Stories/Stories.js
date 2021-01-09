import React from 'react';
import './Stories.css';
import img1 from './Cesar.jpg';
import img2 from './Valencia.jpeg';
import mp4 from './Dancing.mp4';
import webm from './Dancing.webm'
import Button from '../Button/Button';

const story1 = {
    name:"Cesar Alcerreca",
    person: img1,
    title:"El Dr. Simi salvó mi vida y la de mi familia",
    text:"Un día de enero mi casa se comenzó ha incendiar, supongo que fue porque dejé la estufa prendida sin darme cuenta. Cuando nos percatamos del incidente nos fue difícil escapar, hasta que llegó volando el dr. simi y después de besar a mi madre, nos bajó a todos hasta el patio donde nos pudimos reconciliar y agradecerle por su ayuda.",
}

const story2 = {
    name:"El León Valencia",
    person: img2,
    title:"Yo fui botarga y fue el mejor momento de mi vida",
    text:"Es la primera vez en mi vida que gano tanto dinero, pero verdaderamente lo hacia por lo que el uniforme representaba, unos le van al Tigres otros a Rayados pero yo le voy a la vida y por eso sé que debo de ayudar a desarrollar esta comunida, pero mucho más desarrollarme a mi mismo. No es mentira quisiera regresar a esos viejos tiempos.",
}

export const Stories = () =>{
    return (
        <section className="stories u-center-content">

            <div className="bg__video">
                <video className="bg__video-content" autoPlay muted loop>
                    <source src={mp4} type="video/mp4"></source>
                    <source src={webm} type="video/webm"></source>
                    Video not supported
                </video>
            </div>

            <div className="u-margin-bottom-big">
                <h2 className="about-section-heading">Testimonios de la comunidad</h2>
            </div>
            <div className="row">
                <Story story = {story1}/>
                <Story story = {story2}/>
            </div>
            <Button classes="btn-text" title="Conoce más historias &rarr;"/> 
        </section>
    );
};

export const Story = ({story}) =>{
    return(
        <div className="story">
            <figure className="story__shape">
                <img src={story.person} className="story__shape-photo" alt="Person"></img>
                <figcaption className="story__caption">{story.name}</figcaption>
            </figure>
            <div className="story__text">
                <h3 className="about-text-heading u-margin-bottom-small">{story.title}</h3>
                <p className="about-text">{story.text}</p>
            </div>
        </div>
    );
};

