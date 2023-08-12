import countriesnow from '../external_access_layer/countriesnow'

function getRandomArrayIndex(array: Array<{
  name: string;
  capital: string;
  iso2: string;
  iso3: string;
}>) {
  const randomIndex = Math.floor(Math.random()*array.length);

  return randomIndex
}

function randNum(array, excludeIndex) {
  var randNumber = getRandomArrayIndex(array);

  if(array[randNumber] === excludeIndex){
    return randNum(array, excludeIndex);
  }

  return randNumber;
}

export async function getRandomCountryCapitals(): Promise<{
  country: string;
  capitals: Array<string>;
}> {
  const countryCapitalData = await countriesnow.getCountriesCapitals();

  const indexOfCorrectCountry = getRandomArrayIndex(countryCapitalData);

  const incorrectCapitalOne = countryCapitalData[randNum(countryCapitalData, indexOfCorrectCountry)].capital

  const incorrectCapitalTwo = countryCapitalData[randNum(countryCapitalData, indexOfCorrectCountry)].capital

  const suffledCapitals = [
    countryCapitalData[indexOfCorrectCountry].capital,
    incorrectCapitalOne,
    incorrectCapitalTwo
  ].sort(() => Math.random() - 0.5)

  const options = {
    country: countryCapitalData[indexOfCorrectCountry].name,
    capitals: suffledCapitals
  }

  return options
}

export async function validateCountryCapital(countryName: string, capitalName: string): Promise<{
  message: string;
  country: string;
  capital: string;
}> {
  const countryCapitalData = await countriesnow.getCountriesCapitals();

  const foundCountry = countryCapitalData.find(country => country.name === countryName)

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
