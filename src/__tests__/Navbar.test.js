import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

test('renders Navbar correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>,
  );

  expect(container).toMatchSnapshot();
});
