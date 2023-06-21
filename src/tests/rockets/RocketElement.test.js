import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import RocketElement from '../../components/RocketElement';
import rocketsReducer from '../../redux/rockets/rocketsSlice';

const store = configureStore({
    reducer: {
      rockets: rocketsReducer, 
    },
  });

test('renders a rocket item correctly', () => {
    const rockets = {
        id: 1,
          rocket_id: 'u1',
          rocket_name: 'Falcon 9',
          description: 'A two-stage rocket designed and manufactured by SpaceX.',
          flickr_images: ['falcon9.jpg'],
          reserved: false,
        };

    const { container } = render (
        <Provider store={store}>
            <RocketElement rocket={rockets}/>
        </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(screen.getByText('Falcon 9')).toBeInTheDocument();
    expect(screen.getByText('A two-stage rocket designed and manufactured by SpaceX.')).toBeInTheDocument();
    expect(screen.getByText('Reserve Rocket')).toBeInTheDocument();
})

