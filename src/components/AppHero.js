import React from 'react';
import AppHeroBody from './AppHeroBody';

function AppHero() {
  return (
    <div 
    className="min-h-screen bg-cover bg-bottom bg-no-repeat mb-6 bg-fixed" 
    style={{
      backgroundImage: "url('https://source.unsplash.com/1000x600?mountain')"
      }}>
        <div className="w-full h-full bg-black mix-blend-multiply"></div>
        <AppHeroBody/>
    </div>
  );
}

export default AppHero;