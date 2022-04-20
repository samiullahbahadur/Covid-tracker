import httpCommon from "../httpCommon";
import covidActionTypes from "./covideActionTypes";

export const fetchCovidDataStart = () => ({
  type: covidActionTypes.FETCH_COVID_DATA_START,
});

export const addCovidData = (payload) => ({
  type: covidActionTypes.ADD_COVID_DATA,
  payload,
});

export const covidDataError = (payload) => ({
  type: covidActionTypes.COVID_DATA_ERROR,
  payload,
});

export const addCovidDataAsync = () => (dispatch) => {
  dispatch(fetchCovidDataStart());
  httpCommon
    .get("/summary")
    .then(({ data }) => {
      const { Countries: countries, Global: global } = data;
      dispatch(addCovidData({ countries, global }));
    })
    .catch((err) => {
      dispatch(covidDataError(err.message));
    });
};
