import React from 'react';

function ArticleItem({ title, excerpt, author, username }) {
  return (
    <div className="p-4 shadow-yellow-200 shadow-md mb-6 max-w-lg mx-auto bg-white">
      <h2 className="mb-3 font-playfairDisplay text-3xl">{title}</h2>
      <div className="font-poppins">
        <div className="mb-2">
          By <a href={`https://example.com/username/${username}`} className="font-bold text-slate-700 hover:text-slate-400">{author}</a>
        </div>
        <p>{excerpt}</p>
      </div>
    </div>
  );
}

export default ArticleItem;