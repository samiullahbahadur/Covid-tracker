import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../components/Layouts/Navbar';

describe('Home components should render without crashing', () => {
  it('should Home component render ', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
  });
});
