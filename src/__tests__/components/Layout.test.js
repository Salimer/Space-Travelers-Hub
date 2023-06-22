import renderer from 'react-test-renderer';
import { withRouter } from '../../utils/testUtils';
import Layout from '../../components/Layout';

describe('testing Layout component', () => {
  test('render', () => {
    const tree = renderer.create(withRouter(<Layout />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
