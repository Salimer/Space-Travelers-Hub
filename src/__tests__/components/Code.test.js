import renderer from 'react-test-renderer';
import Code from '../../components/Code';

describe('testing Code component', () => {
  test('render', () => {
    const tree = renderer.create(<Code>{JSON.stringify({ data: { key: 'value' } })}</Code>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
