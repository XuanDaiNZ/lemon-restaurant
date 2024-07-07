import React from 'react';
import restauranfood from '../../../source/icons_assets/restauranfood.jpg';
import './Main.css';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <section className="hero">
      <article className="hero-content">
        <div className='hero-header'>    
          <h1 className='display-title'>Little Lemon</h1>
          <h3 className='subtitle'>Chicago</h3>   
        </div>
        <p className='paragraph-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quam dolorem, reprehenderit tempora facilis rem saepe sapiente, accusamus temporibus incidunt, 
          quae sequi! Minima ratione, 
          repellat aliquid similique consectetur consequatur qui esse.
        </p>
        <button><Link to="/booking">Reserve a Table</Link></button>
      </article>
      <article className="hero-image">
        <img src={restauranfood} alt='picture1'/>
      </article>
    </section>
  );
};

export default HeroSection;