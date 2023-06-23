import renderer from 'react-test-renderer';
import App from '../App';

describe('testing App component', () => {
  test('render', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
