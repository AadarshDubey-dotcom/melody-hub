import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside className={`sidebar${open ? ' open' : ''}`}>
      <button
        className="menu-icon"
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="sidebar-navigation"
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="profile">
        <h1>Adarsh</h1>
      </div>
      <nav id="sidebar-navigation" aria-label="Main navigation">
        <ul className="nav-link">
          <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/library" onClick={() => setOpen(false)}>Library</NavLink></li>
          <li><NavLink to="/favorites" onClick={() => setOpen(false)}>Favorites</NavLink></li>
        </ul>
      </nav>
      <div className="extras">
        <button type="button">Settings</button>
        <button type="button">Dark Mode</button>
      </div>
    </aside>
  );
}

export default Sidebar;
