import React from 'react';

import ArticleItem from './ArticleItem';

function ArticleList({ articles }) {
  return (
    <section>
      {
        articles.map((article) => (
          <ArticleItem key={article.id} {...article} />
        ))
      }
    </section>
  );
}

export default ArticleList;