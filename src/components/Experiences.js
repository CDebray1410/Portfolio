import React from 'react';
import './Experiences.css';

const Experiences = () => {
    
    return (
        <section className="experiences Limelight reveals" id="experiences">
            <h2 className="neon__title neon__title--red Limelight" >EXPÉRIENCES</h2>
            <div className="experiences__container">
                <div className="experiences__infos reveals">
                    <div className="experiences__infos__block">
                        <h4><i className="fa fa-bookmark-o experiences__infos__icon" aria-hidden="true"></i> Domaine :</h4>
                        <span> Enfance </span>
                    </div>
                    <div className="experiences__infos__block">
                        <h4><i className="fa fa-calendar-check-o experiences__infos__icon" aria-hidden="true"></i> Date / durée de l'emploi : </h4>
                        <span>2016 - 2020 </span>
                    </div>
                </div>
                <div className="experiences__text reveals">
                    <h4 className="experiences__text__title"><i className="fa fa-list" aria-hidden="true"></i> Missions en <br/> indépendant</h4>
                        <ul>
                            <li>Aide aux devoirs (primaire ,collège)</li>
                            <li>Baby-sitting (3 à 8 ans)</li>
                        </ul>
                </div>
            </div>
            <div className="experiences__container">
                <div className="experiences__infos reveals">
                    <div className="experiences__infos__block">
                        <h4><i className="fa fa-bookmark-o experiences__infos__icon" aria-hidden="true"></i> Domaine :</h4>
                        <span> Informatique</span>
                    </div>
                    <div className="experiences__infos__block">
                        <h4><i className="fa fa-calendar-check-o experiences__infos__icon" aria-hidden="true"></i> Date / durée de l'emploi : </h4>
                        <span>2013 , stage d'une semaine </span>
                    </div>
                </div>
                <div className="experiences__text reveals">
                    <h4 className="experiences__text__title"><i className="fa fa-list" aria-hidden="true"></i> Missions à <br/> Coyote System</h4>
                        <ul>
                            <li>Stockage et tri de matériel informatique</li>
                            <li>Réparation de matériel informatique</li>
                        </ul>
                </div>
            </div>
        </section>
    );
}

export default Experiences;