import axios from 'axios';
import { expect } from 'chai'

describe('GET http://localhost:9090', function() {
  it('returns a valid response', async function() {
    const config = {
      method: 'get',
      url: 'http://localhost:9090',
    };

    const response = await axios(config)

    expect(response).to.be.ok
    expect(response.data.statusCode).to.equal(200)
    expect(response.data.country).to.exist
    expect(response.data.capitals).to.exist
  });
});
