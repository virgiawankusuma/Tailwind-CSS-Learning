import React from 'react';

import { getData } from '../utils/data';

import AppHeader from './AppHeader';
import AppToggle from './AppToggle';
import AppHero from './AppHero';
import ArticleList from './ArticleList';
import AppInput from './AppInput';
import AppAnimate from './AppAnimate';
import AppSidebar from './AppSidebar';
import AppTop from './AppTop';

function App() {
  const articles = getData();
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <AppHeader/>
      <AppHero/>
      <AppToggle/>

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 dark:text-gray-100">Articles</h2>
      <div className="container mx-auto">
        <div className="flex gap-10">
          <ArticleList articles={articles}/>
          <AppSidebar/>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 dark:text-gray-100">Input</h2>
        <AppInput/>

        <hr className="my-20"></hr>
        <AppAnimate/>

        <AppTop/>
      </div>
    </div>
  );
}

export default App;