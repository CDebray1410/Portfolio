import React, { useState } from 'react';
import './Contact.css';

const Skills = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [object, setObject] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const checkEmail = () => {
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z._-]+\.[a-zA-Z]{2,4}$/; 
        if ( email.match(regex)) {
            return true;
        } else {
            document.querySelector('.form-message').innerHTML = "Votre email doit être valide !";
            return false;
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(message);

        if (name == "" || email == "" || message == "") {
            document.querySelector('.form-message').innerHTML = "Vous devez remplir correctement les champs requis";
        } else if (!checkEmail()) {
            document.querySelector('.form-message').innerHTML = "Votre email n'est pas valide";
        } else if(name && checkEmail() && message) {
            sendFeedback("template_o3poa3n", {
                name,
                company,
                object,
                email,
                phone,
                message,
            });
            document.querySelector('.form-message').innerHTML = "";
        } 
    };

    const sendFeedback = (templateId, variables) => {
        window.emailjs
            .send("service_95rci0u", templateId, variables)
            .then((res) => {
                alert("Email envoyé !");
                console.log("Email envoyé !");
                setName('');
                setCompany('');
                setObject('');
                setEmail('');
                setPhone('');
                setMessage('');
            })
            .catch((err) => {
                console.log(err);
                document.querySelector('.form-message').innerHTML = "Une erreur s'est produite, veuillez réessayer.";
            })
    }

    return (
    <section className="contact Limelight" id="contact">
        <h2 className="neon__title neon__title--red Limelight" >CONTACT</h2>
        <div className="contact__container">
            <form action="" className="contact__container__form" method="POST">
                <p><em>* = champs requis</em></p><br/>
                <div className="contact__container__form__input">
                    <label htmlFor="name"> Écrivez votre Nom & prénom *</label>
                    <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="contact__container__form__input">
                    <label htmlFor="company"> Écrivez le nom de votre entreprise</label>
                    <input type="text" id="company" onChange={(e) => setCompany(e.target.value)} />
                </div>
                <div className="contact__container__form__input">
                    <label htmlFor="object"> Écrivez l'objet de votre email </label> 
                    <input type="text" id="object" onChange={(e) => setObject(e.target.value)} />
                </div>
                <div className="contact__container__form__input">
                    <label htmlFor="phone"> Écrivez votre numéro de téléphone</label> 
                    <input type="tel" id="phone" pattern="0[0-9]{9}" onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="contact__container__form__input">
                    <label htmlFor="email"> Écrivez votre adresse mail *</label> 
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="contact__container__form__input">
                    <label htmlFor="message"> Écrivez votre message *</label> 
                    <textarea className="contact__container__form__message" rows="3" id="message" onChange={(e) => setMessage(e.target.value)} defaultValue="Votre message">
                    </textarea>
                </div>
                <div className="contact__container__form__input contact__container__form__submit">
                    <button className="neonButton neonButton--blue" onClick={handleSubmit}>
                            Envoyer
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                    </button>
                </div>
                <div className="form-message"></div>
            </form>

            <div className="contact__infos">
                <div className="contact__infos__block">
                    <a href="mailto:christopherdebray1@gmail.com" title="Mon adresse mail">
                        <span>
                            <i className="fa fa-envelope contact__infos__icon" aria-hidden="true"></i> Email : 
                        </span>
                        <span>christopherdebray1@gmail.com </span>
                    </a>
                </div>
                <div className="contact__infos__block" title="Mon numéro de téléphone">
                    <span>
                        <i className="fa fa-phone contact__infos__icon" aria-hidden="true"></i> Téléphone : 
                    </span>
                    <span>06.22.97.74.92</span>
                </div>
                <div className="contact__infos__block">
                    <a href="https://fr.linkedin.com/in/christopher-debray" title="Mon linkedin">
                        <span>
                            <i className="fa fa-linkedin-square contact__infos__icon" aria-hidden="true"></i> Linkedin : 
                        </span>
                        <span>christopher-debray</span>
                    </a>
                </div>
            </div>
        </div>
        <footer>
            © Christopher Debray <br/>
            Tous droits réservés
        </footer>
    </section>
    );
}

export default Skills;