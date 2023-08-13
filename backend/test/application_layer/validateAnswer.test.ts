import axios from 'axios';
import { expect } from 'chai'

describe('POST http://localhost:9090', function() {
  it('returns a success response', async function() {
    const expected = {
      country: "United Kingdom",
      capital: "London"
    }

    const config = {
      method: 'post',
      url: 'http://localhost:9090',
      data: JSON.stringify(expected)
    };

    const response = await axios(config)

    expect(response).to.be.ok
    expect(response.data.statusCode).to.equal(200)
    expect(response.data.message).to.equal('Success')
    expect(response.data.country).to.equal(expected.country)
    expect(response.data.capital).to.equal(expected.capital)
  });

  it('returns a fail response', async function() {
    const expected = {
      country: "United Kingdom",
      capital: "London"
    }

    const testData = {
      country: "United Kingdom",
      capital: "NOT CORRECT"
    }

    const config = {
      method: 'post',
      url: 'http://localhost:9090',
      data: JSON.stringify(testData)
    };

    const response = await axios(config)

    expect(response).to.be.ok
    expect(response.data.statusCode).to.equal(200)
    expect(response.data.message).to.equal('Failure')
    expect(response.data.country).to.equal(expected.country)
    expect(response.data.capital).to.equal(expected.capital)
  });

  it('returns an error response', async function() {
    const testData = {
      country: "NOT A COUNTRY",
      capital: "NOT CORRECT"
    }

    const config = {
      method: 'post',
      url: 'http://localhost:9090',
      data: JSON.stringify(testData)
    };

    const response = await axios(config)

    expect(response).to.be.ok
    expect(response.data.statusCode).to.equal(500)
    expect(response.data.message).to.equal('Country not found')
  });

});
