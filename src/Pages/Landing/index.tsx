import React from 'react';
import Logoimg from '../../assets/images/logo.svg'
import landingimg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css';

function Landing(){
    return (
        <div id="landing-page">
            <div id="landing-page-content" className="container">
                <div className="logo-container">
                    <img src={Logoimg} alt="Logo"/>
                    <h2>Sua plataforma de estudos online</h2>
                    
                    <img 
                    src={landingimg} 
                    alt="Plataform de estudos " 
                    className="hero_image"
                    />

                    <div className="buttons-container">
                        <a href="" className="study">
                            <img src={studyIcon} alt="Estudar"/>
                            Estudar
                        </a>
                        <a href="" className="giveClasses">
                            <img src={giveClassesIcon} alt="Dar Aula"/>
                            Dar aula

                        </a>
                    </div>

                    <span className="total-connections">
                        Total de 200 conexoes ja realizadas <img src={purpleHeartIcon}   alt="Corção roxo"/>
                    </span>


                </div>
            </div>
        </div>
    )
    
}

export default Landing; 