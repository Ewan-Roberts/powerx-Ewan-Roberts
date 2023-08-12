import axios from 'axios';

const config = {
  method: 'get',
  url: 'https://countriesnow.space/api/v0.1/countries/capital'
};

export async function getCountriesCapitals() {
  const response = await axios(config)

  const { data } = response.data

  // Lets filter out any countries without capitals
  const filteredCountries = data.filter(country => country.capital)

  return filteredCountries;
}

export default {
  getCountriesCapitals
}

