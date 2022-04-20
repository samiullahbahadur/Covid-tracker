import { useEffect, useState } from 'react';

const useCountryData = (id, countries) => {
  const [country, setCountry] = useState(null);
  useEffect(() => {
    const country = countries.find((c) => c.ID === id);
    if (country) { setCountry({ ...country, flag: `https://countryflagsapi.com/png/${country.CountryCode}` }); }
  }, [countries]);
  return country;
};

export default useCountryData;
