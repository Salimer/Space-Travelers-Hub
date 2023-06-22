import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { withProvider } from '../../utils/testUtils';
import ProfileMissions from '../../components/ProfileMissions';
import filterReserved from '../../utils/missionUtils';

const mockStore = configureStore([]);

describe('testing ProfileMissions component', () => {
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
    const filteredMissions = filterReserved(missions);
    const tree = renderer.create(
      withProvider(
        <ProfileMissions
          missions={filteredMissions}
        />,
      ), store,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
