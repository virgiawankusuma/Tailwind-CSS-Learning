import React from 'react';

import { getData } from '../utils/data';

import AppHeader from './AppHeader';
import AppToggle from './AppToggle';
import AppHero from './AppHero';
import ArticleList from './ArticleList';
import AppInput from './AppInput';
import AppBox from './AppAnimate';
import AppAnimate from './AppAnimate';

function App() {
  const articles = getData();
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <AppHeader/>
      <AppHero/>
      <AppToggle/>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 dark:text-gray-100">Articles</h2>
      <ArticleList articles={articles}/>

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 dark:text-gray-100">Input</h2>
      <AppInput/>

      <hr className="my-20"></hr>
      <AppAnimate/>
    </div>
  );
}

export default App;