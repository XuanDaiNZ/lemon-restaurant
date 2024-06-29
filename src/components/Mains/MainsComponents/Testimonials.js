import React from 'react';
import review from '../../../source/icons_assets/review.png';
import "./Main.css";
const Testimonials = () => {
    return (
      <section className="testimonials">
        <article>
            <img src={review} alt='picture1'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quam dolorem, reprehenderit tempora facilis rem saepe sapiente, accusamus temporibus incidunt, 
            </p>
        </article>
        <article>
            <img src={review} alt='picture1'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quam dolorem, reprehenderit tempora facilis rem saepe sapiente, accusamus temporibus incidunt, 
            </p>
        </article>
        <article>
            <img src={review} alt='picture1'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quam dolorem, reprehenderit tempora facilis rem saepe sapiente, accusamus temporibus incidunt, 
            </p>
        </article>
        
      </section>
    );
  };
  
  export default Testimonials;