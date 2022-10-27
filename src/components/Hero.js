import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Hero.scss';
import Portal from '../images/gif.png';

function Hero() {
  return (
    <section className="hero">
      <Link to={'/characterList'}>
        {' '}
        <img src={Portal} alt="" className="portal" />
      </Link>
    </section>
  );
}

export default Hero;
