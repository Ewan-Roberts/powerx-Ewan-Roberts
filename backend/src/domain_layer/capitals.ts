import countriesnow from '../external_access_layer/countriesnow'

function getRandomArrayIndex(array: Array<{
  name: string;
  capital: string;
  iso2: string;
  iso3: string;
}>) {
  const randomIndex = Math.floor(Math.random()*array.length);

  return randomIndex;
}

function getRandomArrayIndexExcludingOne(array, excludeIndex) {
  const randomIndex = getRandomArrayIndex(array);

  if(array[randomIndex] === excludeIndex){
    return getRandomArrayIndexExcludingOne(array, excludeIndex);
  }

  return randomIndex;
}

export async function getRandomCountryCapitals(): Promise<{
  country: string;
  capitals: Array<string>;
}> {
  const countries = await countriesnow.getCountriesCapitals();

  const indexOfCorrectCountry = getRandomArrayIndex(countries);
  const seletedCountry = countries[indexOfCorrectCountry].name;
  const correctCapital = countries[indexOfCorrectCountry].capital;

  const indexOfIncorrectCountry = getRandomArrayIndexExcludingOne(countries, indexOfCorrectCountry);
  const incorrectCapitalOne = countries[indexOfIncorrectCountry].capital

  const indexOfIncorrectCountryTwo = getRandomArrayIndexExcludingOne(countries, indexOfCorrectCountry);
  const incorrectCapitalTwo = countries[indexOfIncorrectCountryTwo].capital

  // Basic order shuffling, not perfectly random
  const suffledCapitals = [
    correctCapital,
    incorrectCapitalOne,
    incorrectCapitalTwo
  ].sort(() => Math.random() - 0.5);

  const options = {
    country: seletedCountry,
    capitals: suffledCapitals
  };

  return options;
}

export async function validateCountryCapital(countryName: string, capitalName: string): Promise<{
  message: string;
  country: string;
  capital: string;
}> {
  const countries = await countriesnow.getCountriesCapitals();

  const foundCountry = countries.find(country => country.name === countryName);

  if(!foundCountry) {
    throw new Error('Country not found')
  }

  if(foundCountry.capital === capitalName) {
    return {
      message: 'Success',
      country: countryName,
      capital: capitalName
    }
  }

  if(foundCountry.capital !== capitalName) {
    return {
      message: 'Failure',
      country: countryName,
      capital: foundCountry.capital
    }
  }
}

export default {
  getRandomCountryCapitals,
  validateCountryCapital
}
