import React from 'react';
import HeroSection from './MainsComponents/HeroSection';
import HighlightSection from './MainsComponents/HighlightsSection';
import Testimonials from './MainsComponents/Testimonials';
import AboutSection from './MainsComponents/AboutSection';


function Main() {
  return (
    <section>
      <HeroSection />
      <HighlightSection />
      <Testimonials />
      <AboutSection />
    </section>
  )
}

export default Main