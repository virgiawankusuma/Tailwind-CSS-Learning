import React from 'react';

import { getData } from '../utils/data';

import AppHero from './AppHero';
import ArticleList from './ArticleList';
import AppInput from './AppInput';

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
      {/* H2 Title */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Articles
      </h2>
      <ArticleList articles={articles}/>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Input
      </h2>
      <AppInput/>
    </div>
  );
}

export default App;