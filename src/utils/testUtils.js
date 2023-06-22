import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

const withRouter = (component) => (
  <BrowserRouter>
    {component}
  </BrowserRouter>
);

const withProvider = (component) => (
  <Provider store={store}>
    {component}
  </Provider>
);

export { withProvider, withRouter };
