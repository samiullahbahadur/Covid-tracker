import covidActionTypes from './covideActionTypes';

const INITIAL_STATE = {
  global: null,
  countries: [],
  loading: true,
  error: false,
};

const covidDataReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case covidActionTypes.FETCH_COVID_DATA_START:
      return { ...state, loading: true };
    case covidActionTypes.ADD_COVID_DATA:
      return {
        ...state,
        global: payload.global,
        countries: payload.countries,
        loading: false,
        error: false,
      };
    case covidActionTypes.COVID_DATA_ERROR:
      return {
        ...state, loading: false, error: payload,
      };
    default:
      return state;
  }
};

export default covidDataReducer;
