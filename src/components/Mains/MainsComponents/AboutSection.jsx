import React from 'react';
import res1 from '../../../source/icons_assets/res1.jpg';
import res2 from '../../../source/icons_assets/res2.jpg';
import './Main.css';
const AboutSection = () => {
  return (
    <section className="about">
      <article className="about-header">
        <h1 className='display-title'>Little Lemon</h1>
        <h3 className='subtitle'>Chicago</h3>
      </article>

      <article className="about-content">
        <p className='paragraph-text'>Amet minim mollit non deserunt ullamco est sit .
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eveniet deserunt libero magnam autem harum sed fugiat obcaecati,
          dolores minima nulla sapiente quod qui laudantium cupiditate similique .
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        </p>

        <div className='about-image'>
          <img src={res1} alt='about_picture_1' />
          <img src={res2} alt='about_picture_2' />
        </div>
      </article>
    </section>
  );
};

export default AboutSection;