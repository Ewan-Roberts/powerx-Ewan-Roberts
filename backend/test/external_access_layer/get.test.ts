import { hello } from '../../src/external_access_layer/get'

describe('external_access_layer/get', function() {
  it('returns a valid long and lat', async function() {
    console.log('hi')
    console.log(hello('hi'))
  });
});
