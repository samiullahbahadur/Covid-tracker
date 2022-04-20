import numberSeparator from 'number-separator';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BasicLayoutContainer from '../Layouts/BasicLayout';
import LandingImage from '../Layouts/LandingImage';
import ItemsCard from './countryItem';

const Home = () => {
  const [index, setState] = useState('');
  const { countries } = useSelector((state) => state);
  return (
    <BasicLayoutContainer>
      <LandingImage />
      <div className="container">
        <div className="search">
          <h4 className="country-search">Search By Country: </h4>
          <input
            value={index}
            type="text"
            onChange={(e) => setState(e.target.value)}
            placeholder="Type to search by country"
            className="search-input"
          />
        </div>
        <div className="countries display">
          {
             countries.filter((country) => country.Country.match(index)).map((country) => (
               <ItemsCard
                 key={country.ID}
                 id={country.ID}
                 country={country}
                 totallConfirmed={numberSeparator(country.TotalConfirmed, ',')}
               />
             ))
            }

        </div>
      </div>
    </BasicLayoutContainer>
  );
};

export default Home;
