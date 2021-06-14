import React from 'react';
import './Projects.css';
import FreeAdds from '../images/FreeAdds.png';
import FreeAdds2 from '../images/FreeAdds2.png';
import FreeAdds3 from '../images/FreeAdds3.png';

import MyQuizz from '../images/MyQuizz.png';
import MyQuizz2 from '../images/MyQuizz2.png';
import MyQuizz3 from '../images/MyQuizz3.png';
import MyQuizz4 from '../images/MyQuizz4.png';

import Spotify from '../images/Spotify.png';
import Spotify2 from '../images/Spotify2.png';
import Spotify3 from '../images/Spotify3.png';
import Spotify4 from '../images/Spotify4.png';

import TWEET from '../images/TWEET.png';
import TWEET2 from '../images/TWEET2.png';
import TWEET3 from '../images/TWEET3.png';
import TWEET4 from '../images/TWEET4.png';
import TWEET5 from '../images/TWEET5.png';

const Projects = () => {
    
    return (
        <section id="projectsAnchor">
            <h2 className="neon__title neon__title--red Limelight">PROJETS</h2>
            <div className="projects" id="projects">
            <ProjectList 
                title="My Spotify"
                link="https://github.com/CDebray1410/My_Spotify"
                images={
                    [
                        {image: {Spotify}, alt: "projet My Spotify"},
                        {image: {Spotify2}, alt: "projet My Spotify"},
                        {image: {Spotify3}, alt: "projet My Spotify"},
                        {image: {Spotify4}, alt: "projet My Spotify"},
                    ]
                }
                infos={
                    {skills:[
                        "React JS",
                        "Création d'API ( PHP )",
                        "Javascript",
                        "MySQL"
                    ],
                    general:[
                        "Durée : 2 jours",
                        "Projet en groupe de 4",
                        "Site de musique"
                    ]}
                }
                description="Projet d'initiation à React JS dont le but était d'utiliser une API ( faite en php ) avec React afin d'afficher ( et de pouvoir écouter ) 
                les différents titres des différents albums stockés dans une base de données fournie pour l'exercice ."
            />

            <ProjectList 
                title="Tweet Academy"
                link="https://github.com/CDebray1410/Mon_twiter"
                images={
                    [
                        {image: {TWEET}, alt: "projet Tweet Academy"},
                        {image: {TWEET2}, alt: "projet Tweet Academy"},
                        {image: {TWEET3}, alt: "projet Tweet Academy"},
                        {image: {TWEET4}, alt: "projet Tweet Academy"},
                        {image: {TWEET5}, alt: "projet Tweet Academy"}
                    ]
                }
                infos={
                    {skills:[
                        "PHP",
                        "CSS",
                        "MySQL"
                    ],
                    general:[
                        "Durée : 1 mois",
                        "Projet en groupe de 4",
                        "Site de réseau social"
                    ]}
                }
                description="Projet de groupe à Epitech dont le but était de reproduire une partie des fonctionnalités de twitter. 
                Chaque groupe avait la même base de données, base de données que nous avons créé en groupe de 10 (dont je faisais partie)."
            />
            
            <ProjectList 
                title="Free Ads"
                link="https://github.com/CDebray1410/Free_Ads"
                images={
                    [
                        {image: {FreeAdds}, alt: "projet Free ads"},
                        {image: {FreeAdds2}, alt: "projet Free ads"},
                        {image: {FreeAdds3}, alt: "projet Free ads"}
                    ]
                }
                infos={
                    {skills:[
                        "PHP",
                        "Laravel",
                        "Boostrap",
                        "MySQL"
                    ],
                    general:[
                        "Durée : 1 semaine",
                        "Projet individuel",
                        "Site d'annonce"
                    ]}
                }
                description="Projet d'initiation à Laravel dont le but était de créer un site d'annonce ."
            />

            <ProjectList 
                title="My Quiz"
                link="https://github.com/CDebray1410/My_quiz"
                images={
                    [
                        {image: {MyQuizz}, alt: "projet My Quiz"},
                        {image: {MyQuizz2}, alt: "projet My Quiz"},
                        {image: {MyQuizz3}, alt: "projet My Quiz"},
                        {image: {MyQuizz4}, alt: "projet My Quiz"}
                    ]
                }
                infos={
                    {skills:[
                        "PHP",
                        "Symfony",
                        "Boostrap",
                        "MySQL"
                    ],
                    general:[
                        "Durée : 2 semaines",
                        "Projet en groupe de 3",
                        "Site de quiz"
                    ]}
                }
                description="Projet de groupe dont le but était de créer un système de quizz en Symfony 5"
            />
            </div>
        </section>

);
}

const ProjectList = (props) => {
    let imagesContent = [];
    props.images.forEach(element => {
        let currentImage = "";
        for (const [key, value] of Object.entries(element.image)) {
            currentImage = value;
        }


        imagesContent.push(
            <div className="slide">
                <img src={currentImage} alt={element.alt} className="project__image" />
            </div>
        );
    });
    let infosSkillsContent = [];
    let infosGeneralContent = [];
    props.infos.skills.forEach(currentSkill => {
        infosSkillsContent.push(
            <p>{currentSkill}</p>
        )
    });
    props.infos.general.forEach(currentGeneral => {
        infosGeneralContent.push(
            <p>{currentGeneral}</p>
        )
    });
    return <section className="revealsSlide project">
        <span></span>
        <h3 className="project__title" title="Tweet Academy"><a href={props.link}> {props.title}</a></h3>
        <div className="project__image__container" >
            <div className="slider">
                <span></span>
                <span></span>

                <div className="slides">
                    {imagesContent}
                </div>
            </div>
        </div>
        <div className="project__infos">
            <div className="project__infos__skills">
                <span></span>
                    <div className="project__infos__text">
                        <h4>Langages :</h4>
                        {infosSkillsContent}
                    </div>
                <span></span>
            </div>
            <div className="project__infos__general">
                <span></span>
                <div className="project__infos__text">
                    <h4>Infos :</h4>
                    {infosGeneralContent}
                </div>
                <span></span>
            </div>
        </div>
        <div className="project__description">
            {props.description} 
        </div>
        <span></span>
    </section>
}
export default Projects;