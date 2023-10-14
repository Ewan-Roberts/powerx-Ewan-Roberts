import data_access_layer from '../../src/data_access_layer/index'
import { expect } from 'chai'

describe('data_access_layer/countriesnow', function() {
  beforeEach(async () => {
    await data_access_layer.purgeReading()
  })

  afterEach(async () => {
    await data_access_layer.purgeReading()
  })

  describe('get()', function() {
    it('returns saved response', async function() {
      const testData = {
        time: new Date('2021-05-14T13:10:17.000Z'),
        name: 'Voltage',
        value: '1.35'
      };
      await data_access_layer.postReading('test', testData)

      const actual = await data_access_layer.getReading('test')
      expect(actual).to.deep.equal(testData)
    });
  });

  describe('save()', function() {
    it('returns saved response', async function() {
      const testData = {
        time: new Date('2021-05-14T13:10:17.000Z'),
        name: 'Voltage',
        value: '1.35'
      };
      await data_access_layer.postReading('test', testData)

      const actual = await data_access_layer.getReading('test')
      expect(actual).to.deep.equal(testData)
    });
  });

  describe('purge()', function() {
    it('returns no response', async function() {
      const testData = {
        time: new Date('2021-05-14T13:10:17.000Z'),
        name: 'Voltage',
        value: '1.35'
      };
      await data_access_layer.postReading('test', testData)

      await data_access_layer.purgeReading()
      const actual = await data_access_layer.getReading('test')
      expect(actual).to.equal(undefined)
    });
  });
});
