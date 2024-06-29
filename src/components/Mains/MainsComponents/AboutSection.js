import React from 'react';
import mario1 from '../../../source/icons_assets/mario1.jpg';
import mario2 from '../../../source/icons_assets/mario2.jpg';
import './Main.css';
const AboutSection = () => {
  return (
    <section className="about">
      <article className="about-content">
        <div className='about-header'>    
          <h1 className='display-title'>Little Lemon</h1>
          <h3 className='subtitle'>Chicago</h3>   
        </div>
        <p className='paragraph-text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. 
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. 
        </p>
      </article>
      <article className="about-image">
        <img src={mario1} alt='about_picture_1'/>
        <img src={mario2} alt='about_picture_2'/>
      </article>
    </section>
  );
};

export default AboutSection;