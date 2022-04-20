import numberSeparator from 'number-separator';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useCountryData from '../../utils/useCountryData';

import BasicLayoutContainer from '../Layouts/BasicLayout';

const Details = () => {
  const { id } = useParams();
  const { countries } = useSelector((state) => state);
  const country = useCountryData(id, countries);
  return (
    <BasicLayoutContainer navtitle={`${country ? country.Country : ''} covid statics`}>
      {
      country
        ? (
          <div className="container">
            <div>
              <section className="info-covid display">
                <div className="flag">
                  <img className="img-world" src={country.flag} alt="world-covid" />
                </div>
                <div className="total-country">
                  <p className="info">{country.Country}</p>
                  <p className="info">
                    Total Cases:
                    {numberSeparator(country.TotalConfirmed, ',')}
                  </p>
                </div>
              </section>
            </div>
            <div className="country-info">
              <p>STATS BY COUNTRY</p>
            </div>
            <ul>
              <li>
                <span className="left">upto Date:</span>
                <div className="right">{new Date(country.Date).toUTCString().slice(0, 16)}</div>
              </li>
              <li>
                <span className="left">Total Confirmed:</span>
                <div className="right">{numberSeparator(country.TotalConfirmed, ',')}</div>
              </li>
              <li>
                <span className="left">New Confirmed:</span>
                <div className="right">{numberSeparator(country.NewConfirmed, ',')}</div>
              </li>
              <li>
                <span className="left">New Recovered:</span>
                <div className="right">{numberSeparator(country.NewRecovered, ',')}</div>
              </li>
              <li>
                <span className="left">Total Deaths:</span>
                <div className="right">{numberSeparator(country.TotalDeaths, ',')}</div>
              </li>
              <li>
                <span className="left">New Deaths:</span>
                <div className="right">{numberSeparator(country.NewDeaths, ',')}</div>
              </li>
            </ul>

          </div>
        )
        : <h4 className="text-center white">sorry, No Country data found  </h4>
    }
    </BasicLayoutContainer>
  );
};

export default Details;
