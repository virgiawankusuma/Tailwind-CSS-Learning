import React from 'react';

function AppHeroBody() {
  return (
    <div className="flex min-h-screen">
      <div className="m-auto max-w-5xl text-white">
        <h1 className="text-6xl font-playfairDisplay">Hello world</h1>
        <p className="font-poppins text-3xl mt-4 tracking-wide leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iure, deserunt veritatis, debitis iusto aut autem, atque porro quo fugiat culpa laudantium ex eaque quas? Est iure quasi optio obcaecati?
        </p>
        <button className="bg-orange-400 rounded-full px-6 py-2 text-2xl mt-5 text-white hover:bg-orange-500 active:bg-orange-600 focus:ring focus:ring-orange-200">Get Started</button>
      </div>
    </div>
  );
}

export default AppHeroBody;