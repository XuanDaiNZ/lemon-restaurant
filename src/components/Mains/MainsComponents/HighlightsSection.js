import React from 'react';
import delivery from '../../../source/icons_assets/delivery.png';
const HeroSection = () => {
    return (
      <section className="highlights">
        <aside className='highlights-header'>
            <h2>This Weeks Specials!</h2>
            <button>Online Menu</button>
        </aside>
        <article className='highlights-contents-1'>
            <img src='https://picsum.photos/200' alt='picture1'/>
            <h3>Greek salad</h3>
            <span>$12.99</span>
            <p className='paragraph-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quam dolorem, reprehenderit tempora facilis rem saepe sapiente, accusamus temporibus incidunt, 
            </p>
            <a href='/dilivery'>
                <span>Oder a delivery</span>
                <img src={delivery} alt='delivery'/>
            </a>    
        </article>
        <article className='highlights-contents-2'>
            <img src='https://picsum.photos/200' alt='picture1'/>
            <h3>Brucheeta</h3>
            <span>$12.99</span>
            <p className='paragraph-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quam dolorem, reprehenderit tempora facilis rem saepe sapiente, accusamus temporibus incidunt, 
            </p>
            <a href='/dilivery'>
                <span>Oder a delivery</span>
                <img src={delivery} alt='delivery'/>
            </a>            
        </article>
        <article className='highlights-contents-3'>
            <img src='https://picsum.photos/200' alt='picture1'/>
            <h3>Lemon Dessert</h3>
            <span>$12.99</span>
            <p className='paragraph-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quam dolorem, reprehenderit tempora facilis rem saepe sapiente, accusamus temporibus incidunt, 
            </p>
            <a href='/dilivery'>
                <span>Oder a delivery</span>
                <img src={delivery} alt='delivery'/>
            </a>            
        </article>
        
      </section>
    );
  };
  
  export default HeroSection;