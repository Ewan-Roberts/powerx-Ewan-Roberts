import axios from 'axios';

var config = {
  method: 'get',
  url: 'https://countriesnow.space/api/v0.1/countries/capital',
  headers: {}
};

export async function getCountriesCapitals() {
  const response = await axios(config)

  const stringifiedResponse = response.data

  return stringifiedResponse.data;
}

export default {
  getCountriesCapitals
}

