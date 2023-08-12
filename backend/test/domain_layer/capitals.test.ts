import captials from '../../src/domain_layer/capitals'
import { expect } from 'chai'

describe('domain_layer/capitals', function() {
  describe('getRandomCountryCapitals()', function() {
    it('returns a value', async function() {
      // Normally I would mock the api response to get a clearer test result
      const response = await captials.getRandomCountryCapitals()

      expect(response).to.be.ok
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
      try {
        await captials.validateCountryCapital(country, capital)
      } catch(error) {
        expect(error.message).to.equal('Country not found')
      }
    });

    it('returns fail message and correct answer', async function() {
      const country = 'United Kingdom'
      const capital = 'Hyrule Castle'
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
