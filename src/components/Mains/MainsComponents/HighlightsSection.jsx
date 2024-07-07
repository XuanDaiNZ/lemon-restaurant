import React from 'react';
import delivery from '../../../source/icons_assets/delivery.png';
import food1 from './../../../source/icons_assets/food1.jpg';
import food2 from './../../../source/icons_assets/food2.jpg';
import food3 from './../../../source/icons_assets/food3.jpg';
import './Main.css';
import { Link } from 'react-router-dom';
const HighlightsSection = () => {
    return (
        <section className="highlights">
            <aside className='highlights-header'>
                <h2>This Weeks Specials!</h2>
                <button><Link to="/menu">Online Menu</Link></button>
            </aside>
            <article className='highlights-contents-1'>
                <img src={food1} alt='menu1' />
                <h3>Greek salad</h3>
                <span>$12.99</span>
                <p className='paragraph-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam dolorem, reprehenderit tempora facilis rem saepe sapiente, accusamus temporibus incidunt,
                </p>
                <a href='/dilivery'>
                    <span>Oder a delivery</span>
                    <img src={delivery} alt='delivery' />
                </a>
            </article>
            <article className='highlights-contents-2'>
                <img src={food2} alt='menu2' />
                <h3>Brucheeta</h3>
                <span>$12.99</span>
                <p className='paragraph-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam dolorem, reprehenderit tempora facilis rem saepe sapiente, accusamus temporibus incidunt,
                </p>
                <a href='/dilivery'>
                    <span>Oder a delivery</span>
                    <img src={delivery} alt='delivery' />
                </a>
            </article>
            <article className='highlights-contents-3'>
                <img src={food3} alt='menu3' />
                <h3>Lemon Dessert</h3>
                <span>$12.99</span>
                <p className='paragraph-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam dolorem, reprehenderit tempora facilis rem saepe sapiente, accusamus temporibus incidunt,
                </p>
                <a href='/dilivery'>
                    <span>Oder a delivery</span>
                    <img src={delivery} alt='delivery' />
                </a>
            </article>

        </section>
    );
};

export default HighlightsSection;