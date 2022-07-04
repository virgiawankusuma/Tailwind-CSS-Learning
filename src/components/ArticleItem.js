import React from 'react';

function ArticleItem({ title, excerpt, author, username }) {
  return (
    <div className="px-6 py-4 rounded-lg border shadow-orange-200 shadow mb-6 max-w-lg mx-auto bg-white hover:shadow-lg hover:shadow-orange-200 hover:bg-orange-500 group">
      <h3 className="mb-3 font-playfairDisplay text-3xl group-hover:text-white">{title}</h3>
      <div className="font-poppins group-hover:text-white">
        <div className="mb-2">
          By <a href={`https://example.com/username/${username}`} className="font-bold text-slate-700 hover:text-slate-400 group-hover:text-slate-300">{author}</a>
        </div>
        <p className="group-hover:text-white first-letter:text-5xl first-letter:font-playfairDisplay first-letter:float-left first-letter:mr-2 first-letter:-mt-2">{excerpt}</p>
      </div>
    </div>
  );
}

export default ArticleItem;