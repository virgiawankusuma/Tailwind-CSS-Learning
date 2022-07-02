import React from 'react';

import { getData } from '../utils/data';

import ArticleList from './ArticleList';

function App() {
  const articles = getData();
  
  return (
    <div className="bg-gray-50">
      <header className="mb-8 text-center bg-white shadow-lg py-5">
        <h1 className="text-5xl font-bold underline text-transparent bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text">
          Hello world!
        </h1>
      </header>
      <ArticleList articles={articles}/>
    </div>
  );
}

export default App;