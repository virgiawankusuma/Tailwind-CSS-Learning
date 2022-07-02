import React from 'react';

import { getData } from '../utils/data';

import AppHero from './AppHero';
import ArticleList from './ArticleList';

function App() {
  const articles = getData();
  
  return (
    <div className="bg-gray-50">
      <header className="min-w-full text-center bg-white shadow-lg py-5">
        <h1 className="text-5xl font-bold underline text-transparent bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text">
          Hello world!
        </h1>
      </header>
      <AppHero/>
      <ArticleList articles={articles}/>
    </div>
  );
}

export default App;