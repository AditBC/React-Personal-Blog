import React from 'react';
    import { Link } from 'react-router-dom';

    function HomePage({ articles, onCategoryClick, selectedCategory }) {
      const filteredArticles = selectedCategory
        ? articles.filter((article) => article.category === selectedCategory)
        : articles;

      const latestArticle = filteredArticles[0];
      const otherArticles = filteredArticles.slice(1);

      return (
        <div>
          <section className="categories">
            <Link
              to="/"
              className={`category-link ${selectedCategory === null ? 'active-category' : ''}`}
              onClick={() => onCategoryClick(null)}
            >
              View all
            </Link>
            <Link
              to="/"
              className={`category-link ${selectedCategory === 'Keyboards' ? 'active-category' : ''}`}
              onClick={() => onCategoryClick('Keyboards')}
            >
              Keyboards
            </Link>
            <Link
              to="/"
              className={`category-link ${selectedCategory === 'Switches' ? 'active-category' : ''}`}
              onClick={() => onCategoryClick('Switches')}
            >
              Switches
            </Link>
            <Link
              to="/"
              className={`category-link ${selectedCategory === 'Stabilizers' ? 'active-category' : ''}`}
              onClick={() => onCategoryClick('Stabilizers')}
            >
              Stabilizers
            </Link>
            <Link
              to="/"
              className={`category-link ${selectedCategory === 'Accessories' ? 'active-category' : ''}`}
              onClick={() => onCategoryClick('Accessories')}
            >
              Accessories
            </Link>
          </section>

          {latestArticle && (
            <div className="latest-article-container">
              <div className="article-preview">
                <div className="image-container">
                  <img
                    src={latestArticle.image}
                    alt={latestArticle.title}
                    className="article-image latest-article-image"
                  />
                  <span className="article-category">{latestArticle.category}</span>
                </div>

                <div className="article-info">
                  <h2>
                    <Link to={`/article/${latestArticle.id}`} className="read-post-link">
                      {latestArticle.title}
                    </Link>
                  </h2>
                  <p>{latestArticle.content.substring(0, 500)}...</p>
                  <div className="article-meta">
                    <span>
                      {latestArticle.author} - {latestArticle.date}
                    </span>
                  </div>
                  <div className="article-tags">
                    {latestArticle.tags.map((tag) => (
                      <span key={tag} className="article-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="articles-container">
            {otherArticles.map((article) => (
              <div key={article.id} className="article-preview">
                <div className="image-container">
                  <img src={article.image} alt={article.title} className="article-image" />
                  <span className="article-category">{article.category}</span>
                </div>
                <div className="article-info">
                  <h2>
                    <Link to={`/article/${article.id}`} className="read-post-link">
                      {article.title}
                    </Link>
                  </h2>
                  <p>{article.content.substring(0, 200)}...</p>
                  <div className="article-meta">
                    <span>
                      {article.author} - {article.date}
                    </span>
                  </div>
                  <div className="article-tags">
                    {article.tags.map((tag) => (
                      <span key={tag} className="article-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <section className="subscribe-section">
            <h2>Subscribe to our Newsletter</h2>
            <form className="subscribe-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="subscribe-input"
              />
              <button type="submit" className="subscribe-button">
                Subscribe
              </button>
            </form>
          </section>
        </div>
      );
    }

    export default HomePage;
