import React from 'react';
import review from '../../../source/icons_assets/review.png';
import "./Main.css";
const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2 className='review'>Customers Review</h2>
            <article>
                <h3>Alex Xaevier</h3>
                <img src={review} alt='picture1' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam dolorem, reprehenderit tempora facilis rem saepe sapiente, accusamus temporibus incidunt,
                </p>
            </article>
            <article>
                <h3>Micheal David</h3>
                <img src={review} alt='picture1' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam dolorem, reprehenderit tempora facilis rem saepe sapiente, accusamus temporibus incidunt,
                </p>
            </article>
            <article>
                <h3>Kevin Dbrune</h3>
                <img src={review} alt='picture1' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam dolorem, reprehenderit tempora facilis rem saepe sapiente, accusamus temporibus incidunt,
                </p>
            </article>

        </section>
    );
};

export default Testimonials;