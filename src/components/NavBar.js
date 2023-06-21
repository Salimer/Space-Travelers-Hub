import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import React from 'react';
import planet from '../assets/planet.png';

const Nav = styled.nav`
  box-shadow: 1px 0 1px black;

  a {
    text-decoration: none;
  }

  .active {
    text-decoration: underline;
  }

  li {
    list-style: none;
  }
`;

const Separator = styled.div`
  height: 1.5rem;
  align-self: center;
  background-color: black;
  opacity: 1;
`;

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
    <Nav className="mb-4 py-3">
      <div className="container">
        <Stack direction="horizontal" className="justify-content-between align-items-center">
          <Stack direction="horizontal" gap={3}>
            <Image src={planet} style={{ width: '3em', height: '3em' }} />
            <h3>Space Traveler&apos;s Hub</h3>
          </Stack>
          <Stack as="ul" direction="horizontal" gap={4} style={{ marginBottom: 0 }}>
            {links.map((link) => (
              <React.Fragment key={link.path}>
                <li key={link.path}>
                  <NavLink to={link.path}>{link.name}</NavLink>
                </li>
                {link.name === 'missions' && <Separator className="vr" />}
              </React.Fragment>
            ))}
          </Stack>
        </Stack>
      </div>
    </Nav>
  );
};

export default NavBar;
