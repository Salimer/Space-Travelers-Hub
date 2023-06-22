import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Table from 'react-bootstrap/Table';
import store from '../redux/store';

const withRouter = (component) => (
  <BrowserRouter>
    {component}
  </BrowserRouter>
);

const withProvider = (component, mockStore = store) => (
  <Provider store={mockStore}>
    {component}
  </Provider>
);

const withTable = (component) => (
  <Table>
    <tbody>
      {component}
    </tbody>
  </Table>
);

export { withProvider, withRouter, withTable };
