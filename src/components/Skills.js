import React from 'react';
import './Skills.css';

const Skills = () => {
    
    return (
        <section id="skillsAnchor">
            <h2 className="neon__title neon__title--red Limelight">COMPÉTENCES</h2>
            <div className="skills">
                <div className="revealsSlide skill skillLeft">
                    <span></span>
                        <SkillsList skills={
                            [
                                {image: <i class="fab fa-php"></i>, skill: "PHP", experience: "projet My_twitter"},
                                {image: <i class="fab fa-js"></i>, skill: "Javascript", experience: "projet Puissance 4"},
                                {image: <i class="fab fa-sass"></i>, skill: "Sass", experience: "reproduction de bootsrap"},
                                {skill: "MySQL", experience: "projet My_twitter"},
                                {skill: "JQuery", experience: "projet My_wysiwyg"}
                            ]
                        } />
                    <span></span>
                </div>
                <div className="revealsSlide skill skillRight">
                    <span></span>
                        <SkillsList skills={
                            [
                                {image: <i class="fab fa-laravel"></i>, skill: "Laravel", experience: "projet Free_ads"},
                                {image: <i class="fab fa-react"></i>, skill: "React JS", experience: "projet Rush_Spotify"},
                                {image: <i class="fab fa-symfony"></i>, skill: "Symfony", experience: "projet My_Quiz"},
                                {skill: "Stack MERN", experience: "Piscine MERN"},
                                {skill: "POO", experience: "projet My Meetic"}
                            ]
                        } />
                    <span></span>
                </div>
            </div>

            <div className="skills skills--soft">
                <div className="revealsSlide skill skillLeft">
                    <span></span>
                        <SkillsList skills={
                            [
                                {skill: "Patient", experience: "expérience de garde d'enfants"}, 
                                {skill: "Esprit d'équipe", experience: "travail de groupe à Epitech"}, 
                                {skill: "Pédagogue", experience: "expérience d'aide aux devoirs"}
                            ]
                        } />
                    <span></span>
                </div>
                <div className="revealsSlide skill skillRight">
                    <span></span>
                        <SkillsList skills={
                            [
                                {skill: "Sens de l'organisation", experience: "planning, trello"}, 
                                {skill: "Autonomie", experience: "apprentissage du code en autodidacte"}, 
                                {skill: "Adaptabilité", experience: "expérience de garde d'enfants"}
                            ]
                        } />
                    <span></span>
                </div>
            </div>
        </section>
    );
}

const SkillList = (props) => {
    return (
        <p><strong>{props.skill}</strong> : {props.experience}</p>
    );
}

const SkillsList = (props) => {
    let content = [];
    props.skills.forEach(element => {
        if (element.image) {
            content.push(<p>{element.image} <strong>{element.skill}</strong> : {element.experience}</p>);
        } else {
            content.push(<p> <strong>{element.skill}</strong> : {element.experience}</p>);
        }
    });
    return content;
}

export default Skills;