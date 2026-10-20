import { Link } from 'react-router-dom';
import heroImage from '../../assets/DJ.png.png';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img
        src={heroImage}
        alt="A crowd enjoying a live music performance"
        className="hero-image"
      />
      <div className="hero-overlay">
        <span className="hero-kicker">MUSIC FOR EVERY MOMENT</span>
        <h2 id="hero-title">Feel the music.<br />Find your next favorite.</h2>
        <p>Discover sounds that move you, from the latest releases to all-time favorites.</p>
        <div className="hero-buttons">
          <Link className="cta-play" to="/search">Explore music <span aria-hidden="true">→</span></Link>
          <Link className="cta-explore" to="/library">Open your library</Link>
        </div>
      </div>
      <div className="hero-caption" aria-hidden="true">
        <span className="hero-caption-dot" />
        Turn up the moment
      </div>
    </section>
  );
}

export default Hero;
