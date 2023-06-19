import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      path: '/',
      name: 'rockets',
    },
    {
      path: 'missions',
      name: 'missions',
    },
    {
      path: 'my-profile',
      name: 'my profile',
    },
  ];
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={1}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
