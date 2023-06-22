import renderer from 'react-test-renderer';
import MissionItem from '../../components/MissionItem';
import { withProvider } from '../../utils/testUtils';

describe('testing MissionItem component', () => {
  // Item is just for rendering, user interactions are tested on the mission lists
  test('render', () => {
    const tree = renderer.create(withProvider(<MissionItem id="SH44" name="Misison1" description="Mock description" reserved={false} handleClick={() => {}} />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
