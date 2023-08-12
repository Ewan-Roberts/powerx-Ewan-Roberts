import countriesnow from '../../src/external_access_layer/countriesnow'
import { expect } from 'chai'

describe('external_access_layer/get', function() {
  it('returns a valid long and lat', async function() {
    const foo = await countriesnow.getCountriesCapitals()

    expect(foo.error).to.equal(false)
  });

  // add test to filter out countries without capitals
});
