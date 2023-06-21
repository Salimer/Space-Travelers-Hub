import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import RocketsPage from '../../components/RocketsPage';
import rocketsReducer from '../../redux/rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

test('renders RocketsPage correctly', () => {
  const rockets = [
    {
      id: 1,
      rocket_name: 'Falcon 9',
      description: 'A two-stage rocket designed and manufactured by SpaceX.',
      image: 'falcon9.jpg',
      reserved: false,
    },
  ];

  const { container } = render(
    <Provider store={store}>
      <RocketsPage rockets={rockets} />
    </Provider>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
