var axios = require('axios');

describe('application_layer/get', function() {
  it('returns a valid long and lat', async function() {
    console.log('hi')
    var config = {
      method: 'get',
      url: 'http://localhost:3000',
    };

    const response = await axios(config)
    console.log(response)
  });
});
