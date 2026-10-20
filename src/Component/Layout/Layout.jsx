import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';

function Layout() {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;