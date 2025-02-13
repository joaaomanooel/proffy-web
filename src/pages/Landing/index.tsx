import './styles.css';
import React, { useState, useEffect } from 'react';

import logo from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import gitClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import { Link } from 'react-router-dom';
import api from '../../services/api';


export default () => {
  const [connections, setConnections] = useState(0)

  useEffect(() => {
    api.get('/connections')
      .then(({ data }) => setConnections(data.total || 0))
      .catch(e => { console.error(e); setConnections(0); });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" /> Estudar
          </Link>
          <Link to="give-classes" className="give-classes">
            <img src={gitClassesIcon} alt="Dar aulas" /> Dar Aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {connections} conexões já realizadas.
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}
