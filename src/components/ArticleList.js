import React from 'react';

import ArticleItem from './ArticleItem';

function ArticleList({ articles }) {
  return (
    <section className="container mx-auto lg:columns-3 gap-4">
      {
        articles.map((article) => (
          <ArticleItem key={article.id} {...article} />
        ))
      }
    </section>
  );
}

export default ArticleList;