import React from 'react';
import renderer from 'react-test-renderer';
import RocketsPage from '../../components/RocketsPage';
import { withProvider } from '../../utils/testUtils';

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

  const tree = renderer.create(
    withProvider(
      <RocketsPage rockets={rockets} />,
    ),
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
