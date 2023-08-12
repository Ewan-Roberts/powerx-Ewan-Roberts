import countriesnow from '../../src/external_access_layer/countriesnow'
import { expect } from 'chai'

describe('external_access_layer/get', function() {
  it('returns a response', async function() {
    const actual = await countriesnow.getCountriesCapitals()

    expect(actual).to.be.ok
  });

  it('excludes countries without captials', async function() {
    const actual = await countriesnow.getCountriesCapitals()

    const countryWithoutCapital = actual.find(country => country.name === 'Bouvet Island')

    expect(countryWithoutCapital).to.not.exist
  });
});
