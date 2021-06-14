import React from 'react';
import { Link } from 'react-scroll'
import './Menu.css';

const Menu = () => {
    
    return (
        <section>
            <nav className="neon__presentation">
                <div className="neon neon--top">
                    <div className="neon__bar neon__bar--top animation" id="bar_pres"></div>
                    <MenuList links={
                        [
                            {link: "home", text: "acceuil"},
                            {link: "aboutMe", text: "à propos de moi"},
                            {link: "skillsAnchor", text: "compétences"},
                            {link: "projectsAnchor", text: "projets"},
                            {link: "experiences", text: "expériences"},
                            {link: "formation", text: "formation"},
                            {link: "contact", text: "contact"}
                        ]
                    }
                    />
                </div>
            </nav>
        </section>
    );
}

const MenuList = (props) => {
    let content = [];
    props.links.forEach(element => {
        content.push(<h2><Link className="neon__title nav Anton" to={element.link} smooth={true} duration={1000}> {element.text} </Link></h2>)
    });
    return content;
}


export default Menu;