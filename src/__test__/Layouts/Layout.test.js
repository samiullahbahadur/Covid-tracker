import { render } from '@testing-library/react';
import BasicLayoutContainer from '../../components/Layouts/BasicLayout';
import LandingImage from '../../components/Layouts/LandingImage';
import Spinner from '../../components/Layouts/Spinner';
import renderWthRedux from '../../utils/testHelpers';

describe('Basic components should render without crashing', () => {
  it('should basic layout component render ', () => {
    renderWthRedux(
      <BasicLayoutContainer loading={false} error={false}>
        <h1>Hello World</h1>
      </BasicLayoutContainer>,
    );
  });
  it('should render the spinner ', () => {
    render(<Spinner />);
  });
  it('The landing image should render properly', () => {
    renderWthRedux(
      <BasicLayoutContainer>
        <LandingImage />
      </BasicLayoutContainer>,
    );
  });
});
