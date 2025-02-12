import React from 'react';
import { useParams } from 'react-router-dom';

function ArticleDetail({ articles }) {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id, 10));

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
}

export default ArticleDetail;
