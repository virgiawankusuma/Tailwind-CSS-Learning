import React from 'react';
import AppHeroBody from './AppHeroBody';

function AppHero() {
  return (
    <div 
    className="min-h-screen bg-cover bg-center bg-no-repeat mb-6 bg-fixed bg-gray-400 bg-blend-multiply" 
    style={{
      backgroundImage: `url('https://source.unsplash.com/1000x600?mountain')`
      }}>
        <AppHeroBody/>
    </div>
  );  
}

export default AppHero;