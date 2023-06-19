import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
    <Nav>
      <ul>
        {links.map((link) => (
          <li key={1}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
.active {
  color: black;
  text-decoration: underline;
}
`;
