import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ProfileRockets from '../../components/ProfileRockets';
import rocketsReducer from '../../redux/rockets/rocketsSlice';

const store = configureStore({
    reducer: {
      rockets: rocketsReducer, 
    },
  });

test('renders ProfileRockets correctly', () => {
    const rockets = [
        {
          id: 1,
          rocket_name: 'Falcon 9',
          description: 'A two-stage rocket designed and manufactured by SpaceX.',
          image: 'falcon9.jpg',
          reserved: false,
        },
        {
            id: 2,
            rocket_name: 'Falcon 10',
            description: 'A two-stage rocket designed and manufactured by SpaceX.',
            image: 'falcon10.jpg',
            reserved: true,
          },
      ];

    const { container } = render (
        <Provider store={store}>
            <ProfileRockets rockets={rockets}/>
        </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(screen.getByText('My rockets')).toBeInTheDocument();
})