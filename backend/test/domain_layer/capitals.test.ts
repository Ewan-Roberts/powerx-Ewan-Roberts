import captials from '../../src/domain_layer/capitals'
var expect = require('chai').expect

describe('domain_layer/capitals', function() {
  xdescribe('getRandomCountryCapitals()', function() {
    it('returns a valid long and lat', async function() {
      const foo = await captials.getRandomCountryCapitals()

      console.log(foo)
    });
  });

  describe('validateCountryCapital()', function() {
    it('returns success message', async function() {
      const country = 'United Kingdom'
      const capital = 'London'
      const actual = await captials.validateCountryCapital(country, capital)

      const expected = {
        message: 'Success',
        country,
        capital
      }

      expect(actual).to.deep.equal(expected)
    });

    it('returns not found message', async function() {
      const country = 'I DONT EXIST'
      const capital = 'London'
      const actual = await captials.validateCountryCapital(country, capital)

      const expected = {
        message: 'Country not found',
      }

      expect(actual).to.deep.equal(expected)
    });

    it('returns fail message and correct answer', async function() {
      const country = 'United Kingdom'
      const capital = 'CheeseTown'
      const actual = await captials.validateCountryCapital(country, capital)

      const expected = {
        message: 'Failure',
        country,
        capital: 'London'
      }

      expect(actual).to.deep.equal(expected)
    });
  });
});
