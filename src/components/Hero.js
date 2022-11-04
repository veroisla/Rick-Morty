import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Hero.scss';
import names from '../images/namesHero.png';
import characters from '../images/characters.png';

function Hero() {
  return (
    <section className="hero">
      {' '}
      <img src={names} alt="" className="hero__names" />
      <img src={characters} alt="" className="hero__characters" />
      <Link to={'/characterList'}>
        <button className="hero__enterBtn">Enter</button>
      </Link>
    </section>
  );
}

export default Hero;
