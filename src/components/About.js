import React from 'react';
import ProfilePicture from '../images/ProfilePicture.png';
import CV from '../images/Christopher_Debray_développeur_web.pdf';
import './About.css';

const About = () => {
    return <AboutContent 
        situation={
            {current: "En recherche d'alternance début septembre 2021", type: "rythme 3 semaines entreprise / 1 semaine formation"}
        }
        hobbies={
            [
                "J'aime lire, notamment les livres fantastiques tel qu'Elric des Dragons ( Michael Moorcock ) ou bien les œuvres de science-fiction tel que Metro 2033 ( Dmitri gloukhovski )",
                "Par ailleurs je fais aussi du sport, en l'occurrence du renforcement musculaire."
            ]
        }
        languages={
            [
                "Français langue maternelle",
                "Anglais niveau B2"
            ]
        }
    />;
    
}

const AboutContent = (props) => {
    let hobbies = [];
    props.hobbies.forEach(element => {
        hobbies.push(<li>{element}</li>);
    });
    let languages = [];
    props.languages.forEach(element => {
        languages.push(<li>{element}</li>);
    });
    return (
        <section className="aboutMe Limelight" id="aboutMe">
            <h2 className="neon__title neon__title--red Limelight" >À PROPOS DE MOI</h2>
            <div className="aboutMe__container">
                <div className="aboutMe__infos revealsTop">
                    <div className="aboutMe__infos__picture">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <img src={ProfilePicture} alt="" />
                    </div>
                    <div className="aboutMe__infos__block">
                        <h4><i className="fa fa-address-card aboutMe__infos__icon" aria-hidden="true"></i> Nom :</h4><span> Christopher Debray</span>
                    </div>
                    <div className="aboutMe__infos__block">
                        <h4><i className="fa fa-birthday-cake aboutMe__infos__icon" aria-hidden="true"></i> Date de naissance : </h4><span>14 octobre 1998</span>
                    </div>
                </div>
                <div className="aboutMe__text revealsTop">
                        <h4>{props.situation.current},<br/>{props.situation.type} </h4>
                        <p>
                            Bonjour ! Je m’appelle Christopher Debray, je suis actuellement en formation 
                            à la Web@cadémie by EPITECH, une école pas comme les autres ! 
                            Avec une pédagogie par projet, privilégiant l’aspect de découverte et d’autonomie dans une formation intensive!
                            Le but de cette formation étant de développer mes compétences en informatique, ceci n'est cependant pas mon seul intérêt,
                            puisque mon objectif professionnel ( sur le long terme ) serait de devenir développeur indépendant.
                        </p>
                        <div className="aboutMe__text__button">
                            <a className="neonButton" href={CV} download>
                                CV en PDF
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>
                </div>
                <div className="aboutMe__other revealsTop">
                    <ul>
                        <li><h4>Hobbies</h4></li>
                        {hobbies}
                    </ul>
                    <ul>
                        <li><h4>Langues</h4></li>
                        {languages}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;