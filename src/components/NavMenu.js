import React from 'react';
import { Link } from 'react-scroll'
import './NavMenu.css';

const NavMenu = () => {
    
    return (
        <section className="navigation">
            <div className="toggle" id="toggle"></div>
            <ul>
                <li>
                    <Link to="home" smooth={true} duration={1000}>
                        <span className="icon">
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </span>
                        <span className="title">Acceuil</span>
                    </Link>
                </li>
                <li>
                    <Link to="aboutMe" smooth={true} duration={1000}>
                        <span className="icon">
                            <i className="fa fa-address-card" aria-hidden="true"></i>
                        </span>
                        <span className="title">Sur moi</span>
                    </Link>
                </li>
                <li>
                    <Link to="skillsAnchor" smooth={true} duration={1000}>
                        <span className="icon">
                            <i className="fa fa-cogs" aria-hidden="true"></i>
                        </span>
                        <span className="title">Compétences</span>
                    </Link>
                </li>
                <li>
                    <Link to="projectsAnchor" smooth={true} duration={1000}>
                        <span className="icon">
                            <i className="fa fa-list" aria-hidden="true"></i>
                        </span>
                        <span className="title">Projets</span>
                    </Link>
                </li>
                <li>
                    <Link to="experiences" smooth={true} duration={1000}>
                        <span className="icon">
                            <i className="fa fa-briefcase" aria-hidden="true"></i>
                        </span>
                        <span className="title">Expériences</span>
                    </Link>
                </li>
                <li>
                    <Link to="formation" smooth={true} duration={1000}>
                        <span className="icon">
                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                        </span>
                        <span className="title">Formation</span>
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={1000}>
                        <span className="icon">
                            <i className="fa fa-comment" aria-hidden="true"></i>
                        </span>
                        <span className="title">Contact</span>
                    </Link>
                </li>
            </ul>
        </section>
    );
}

export default NavMenu;