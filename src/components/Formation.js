import React from 'react';
import './Formation.css';

const Formation = () => {
    
    return (
        <section className="formation Limelight" id="formation">
            <h2 className="neon__title neon__title--red Limelight" >FORMATION</h2>

            <div className="formation__container revealsTop">
                <i className="fa fa-laptop bigIcons" aria-hidden="true"></i>
                <div>
                    <div className="formation__infos reveals">
                        <div className="formation__infos__block">
                            <span><i className="fa fa-building-o formation__infos__icon" aria-hidden="true"></i> EPITECH</span>
                            <span><i className="fa fa-calendar-check-o formation__infos__icon" aria-hidden="true"></i> DEPUIS NOVEMBRE 2020 </span>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="formation__text reveals">
                        <h3 className="formation__text__title"> Titre</h3>
                            <ul>
                                <li>Titre de développeur - intégrateur web, Titre Niveau 5 RNCP - BAC +2</li>
                            </ul>
                    </div>
                </div>
            </div>
            
            <div className="formation__container revealsTop">
                <i className="fa fa-graduation-cap bigIcons" aria-hidden="true"></i>
                <div>
                    <div className="formation__infos reveals">
                        <div className="formation__infos__block">
                            <span><i className="fa fa-building-o formation__infos__icon" aria-hidden="true"></i> Lycée Paul Langevin à Suresnes</span>
                            <span><i className="fa fa-calendar-check-o formation__infos__icon" aria-hidden="true"></i> 2016 </span>
                        </div>
                    </div>
                </div>
            <div>
                <div className="formation__text reveals">
                    <h3 className="formation__text__title"> Niveau</h3>
                        <ul>
                            <li>1ère Générale</li>
                        </ul>
                </div>
            </div>
            </div>
            <div className="formation__container revealsTop">
                <i className="fa fa-graduation-cap bigIcons" aria-hidden="true" style={{visibility: "hidden"}}></i>
                <div>
                    <div className="formation__infos reveals">
                        <div className="formation__infos__block">
                            <span><i className="fa fa-building-o formation__infos__icon" aria-hidden="true"></i> Collège Émile-Zola à Suresnes</span>
                            <span><i className="fa fa-calendar-check-o formation__infos__icon" aria-hidden="true"></i> 2014 </span>
                        </div>
                    </div>
                </div>
                <div className="formation__text reveals">
                    <h3 className="formation__text__title"> Titre</h3>
                        <ul>
                            <li>Brevet des collèges</li>
                        </ul>
                </div>
            </div>
        </section>
    );
}

export default Formation;