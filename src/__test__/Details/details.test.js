import renderWthRedux from '../../utils/testHelpers';
import Details from '../../components/Details/Details';

describe('Details components should render without crashing', () => {
  it('should Details component render ', () => {
    renderWthRedux(<Details />);
  });
});
