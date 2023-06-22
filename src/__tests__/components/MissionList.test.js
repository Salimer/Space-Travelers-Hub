import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { withProvider } from '../../utils/testUtils';
import MissionList from '../../components/MissionList';

const mockStore = configureStore([]);

describe('testing MissionList component', () => {
  test('render', () => {
    const missions = [
      {
        mission_id: '1',
        mission_name: 'mission 1',
        description: 'mission 1 description',
        reserved: false,
      },
      {
        mission_id: '2',
        mission_name: 'mission 2',
        description: 'mission 2 description',
        reserved: true,
      },
    ];
    const store = mockStore({ missions });

    const tree = renderer.create(withProvider(<MissionList missions={missions} />, store));
    expect(tree).toMatchSnapshot();
  });
});
