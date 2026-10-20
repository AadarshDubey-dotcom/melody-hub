import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Hero from '../../Component/Hero/Hero.jsx';
import MusicPlayer from '../../Component/MusicPlayer/MusicPlayer.jsx';

function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();
    navigate('/search');
  }

  return (
    <div className="home-page">
      <header className="home-header">
        <div className="home-greeting">
          <span className="home-eyebrow">WELCOME BACK</span>
          <h1>Good music, good mood.</h1>
        </div>
        <form className="home-search" onSubmit={handleSearch} role="search">
          <label className="visually-hidden" htmlFor="home-search-input">
            Search songs and artists
          </label>
          <span className="home-search-icon" aria-hidden="true">⌕</span>
          <input
            id="home-search-input"
            type="search"
            placeholder="Search songs, artists..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <div className="home-profile" aria-label="Signed in as Harsh">H</div>
      </header>

      <main className="home-main">
        <Hero />
        <MusicPlayer />
      </main>
    </div>
  );
}

export default Home;
