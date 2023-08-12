import axios from 'axios';

const config = {
  method: 'get',
  url: 'https://countriesnow.space/api/v0.1/countries/capital'
};

export async function getCountriesCapitals() {
  const response = await axios(config)

  const { data } = response

  return data;
}

export default {
  getCountriesCapitals
}

