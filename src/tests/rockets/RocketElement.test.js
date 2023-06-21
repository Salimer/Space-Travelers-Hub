import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import RocketElement from '../../components/RocketElement';
import rocketsReducer from '../../redux/rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

const rockets = {
  id: 1,
  rocket_id: 'u1',
  rocket_name: 'Falcon 9',
  description: 'A two-stage rocket designed and manufactured by SpaceX.',
  flickr_images: ['falcon9.jpg'],
  reserved: false,
};

test('renders a rocket item correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <RocketElement rocket={rockets} />
    </Provider>,
  );

  expect(container.firstChild).toMatchSnapshot();
  expect(screen.getByText('Falcon 9')).toBeInTheDocument();
  expect(screen.getByText('A two-stage rocket designed and manufactured by SpaceX.')).toBeInTheDocument();
  expect(screen.getByText('Reserve Rocket')).toBeInTheDocument();
});

test('dispatches reserveRocket when Reserve Rocket button is clicked', () => {
  const { container } = render(
    <Provider store={store}>
      <RocketElement rocket={rockets} />
    </Provider>,
  );

  fireEvent.click(screen.getByText('Reserve Rocket'));
  expect(container.firstChild).toMatchSnapshot();
});

test('dispatches cancelReserveRocket when Cancel Reservation button is clicked', () => {
  const rockets2 = {
    id: 1,
    rocket_id: 'u1',
    rocket_name: 'Falcon 9',
    description: 'A two-stage rocket designed and manufactured by SpaceX.',
    flickr_images: ['falcon9.jpg'],
    reserved: true,
  };

  const { container } = render(
    <Provider store={store}>
      <RocketElement rocket={rockets2} />
    </Provider>,
  );

  fireEvent.click(screen.getByText('Cancel Reservation'));
  expect(container.firstChild).toMatchSnapshot();
  expect(screen.getByText('Cancel Reservation')).toBeInTheDocument();
});
