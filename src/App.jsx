import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Component/Layout/Layout.jsx';
import Home from './Page/Home/Home.jsx';
import Library from './Page/Libarary/library.jsx';
import Favorites from './Page/Favorites/favorites.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
