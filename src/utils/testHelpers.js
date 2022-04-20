import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';

const renderWthRedux = (Component) => ({
  ...render(
    <Provider store={store}>
      <BrowserRouter>
        {Component}
      </BrowserRouter>
    </Provider>,
  ),
  store,
});

export default renderWthRedux;
