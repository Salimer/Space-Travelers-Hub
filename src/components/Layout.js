import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => (
  <>
    <NavBar />
    <div className="container">
      <Outlet />
    </div>
  </>
);

export default Layout;
