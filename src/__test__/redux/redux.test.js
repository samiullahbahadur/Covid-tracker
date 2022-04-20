import covidActionTypes from '../../redux/covid/covideActionTypes';
import covidDataReducer from '../../redux/covid/covidReducer';
import mockStore from './mocc.store';

const state = {
  global: null,
  countries: [],
  loading: true,
  error: false,
};
describe('Redux should work properly', () => {
  it('it should dispatch fetch start action properly ', () => {
    covidDataReducer(state, { type: covidActionTypes.FETCH_COVID_DATA_START });
    expect(state.loading).toBeTruthy();
  });
  it('should dispatch add covid data properly', () => {
    const store = covidDataReducer(state, {
      type: covidActionTypes.ADD_COVID_DATA,
      payload: { countries: mockStore.countries, global: mockStore.global },
    });
    expect(store.loading).toBeFalsy();
    expect(store.global).toBe(mockStore.global);
    expect(store.countries).toBe(mockStore.countries);
    expect(store.error).toBeFalsy();
  });
  it('should dispatch an error while fetching', () => {
    const store = covidDataReducer(state, {
      type: covidActionTypes.COVID_DATA_ERROR,
      payload: '404 server is not responding',
    });
    expect(store.loading).toBeFalsy();
    expect(store.error).toBe('404 server is not responding');
  });
});
