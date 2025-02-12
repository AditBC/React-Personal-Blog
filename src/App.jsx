import React, { useState } from 'react';
    import {
      BrowserRouter as Router,
      Routes,
      Route,
      Link,
    } from 'react-router-dom';
    import HomePage from './components/HomePage';
    import ArticleDetail from './components/ArticleDetail';
    import articles from './data/articles.json';
    import './App.css';

    function App() {
      const [searchQuery, setSearchQuery] = useState('');
      const [isSearchOpen, setIsSearchOpen] = useState(false);
      const [selectedCategory, setSelectedCategory] = useState(null);

      const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };

      const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
      };

      const handleCategoryClick = (category) => {
        setSelectedCategory(category);
      };

      const filteredArticles = articles.filter((article) => {
        const titleMatch = article.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const tagsMatch = article.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return titleMatch || tagsMatch;
      });

      return (
        <Router>
          <div className="container">
            <header className="header">
              <div className="logo">
                <Link to="/">Untitled Blog</Link>
              </div>
              <nav>
                <ul className="nav-links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="dropdown">
                    <Link to="/" className="dropbtn">
                      Reviews
                    </Link>
                    <div className="dropdown-content">
                      <div className="dropdown-item">
                        <span>Keyboards</span>
                        <div className="sub-dropdown-content">
                          <Link to="/">60%</Link>
                          <Link to="/">65%</Link>
                          <Link to="/">75%</Link>
                          <Link to="/">TKL</Link>
                          <Link to="/">100%</Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/">About</Link>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                  <li>
                    <Link to="/">FAQ</Link>
                  </li>
                </ul>
              </nav>
              <div className="search-container">
                <button className="search-icon" onClick={toggleSearch}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className={`search-input ${isSearchOpen ? 'open' : ''}`}
                />
              </div>
            </header>
            <Routes>
              <Route
                path="/"
                element={<HomePage articles={filteredArticles} onCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />}
              />
              <Route
                path="/article/:id"
                element={<ArticleDetail articles={filteredArticles} />}
              />
            </Routes>
          </div>
        </Router>
      );
    }

    export default App;
