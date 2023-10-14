import dataAccessLayer from '../../src/dataAccessLayer/index'
import { expect } from 'chai'

describe('dataAccessLayer/index', function() {
  beforeEach(async () => {
    await dataAccessLayer.purgeReading()
  })

  afterEach(async () => {
    await dataAccessLayer.purgeReading()
  })

  describe('get()', function() {
    it('returns saved response', async function() {
      const testData = {
        time: new Date('2021-05-14T13:10:17.000Z'),
        name: 'Voltage',
        value: '1.35'
      };
      await dataAccessLayer.postReading('test', testData)

      const actual = await dataAccessLayer.getReading('test')
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
      await dataAccessLayer.postReading('test', testData)

      const actual = await dataAccessLayer.getReading('test')
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
      await dataAccessLayer.postReading('test', testData)

      await dataAccessLayer.purgeReading()
      const actual = await dataAccessLayer.getReading('test')
      expect(actual).to.equal(undefined)
    });
  });
});
