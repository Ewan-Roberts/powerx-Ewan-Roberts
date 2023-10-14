import dataValidation from '../../src/domain_layer/data_validation'
import { expect } from 'chai'
import { v4 as uuidv4 } from 'uuid';
import data_access_layer from '../../src/data_access_layer'

describe('domain_layer/dataValidation', function() {
  describe('parseSave()', function() {
    it('returns a correct value', async function() {
      // Normally I would mock the api response to get a clearer test result
      const inputString = '1649941817 Voltage 1.34 1649941818 Voltage 1.35 1649941817 Current 12.0 1649941818 Current 14.0'

      const response = await dataValidation.parseSave(inputString)

      expect(response).to.deep.equal([{
          time: new Date('2022-04-14T13:10:17.000Z'),
          name: 'Voltage',
          value: '1.34'
        },
        {
          time: new Date('2022-04-14T13:10:18.000Z'),
          name: 'Voltage',
          value: '1.35'
        },
        {
          time: new Date('2022-04-14T13:10:17.000Z'),
          name: 'Current',
          value: '12.0'
        },
        {
          time: new Date('2022-04-14T13:10:18.000Z'),
          name: 'Current',
          value: '14.0'
        }
      ])
      data_access_layer.purgeReading()
    });
  });

  describe('getBetweenDateRanges()', function() {
    it('returns a correct value', async function() {

      const firstUUID = uuidv4();
      const secondUUID = uuidv4();
      const thirdUUID = uuidv4();
      // Normally I would mock the api response to get a clearer test result
      await data_access_layer.postReading(firstUUID, {
        time: new Date('2020-04-14T13:10:17.000Z'),
        name: 'Voltage',
        value: '1.34'
      })
      await data_access_layer.postReading(secondUUID, {
        time: new Date('2021-05-14T13:10:17.000Z'),
        name: 'Voltage',
        value: '1.35'
      })
      await data_access_layer.postReading(thirdUUID, {
        time: new Date('2022-06-14T13:10:17.000Z'),
        name: 'Voltage',
        value: '1.35'
      })

      const from = '2021-01-01'
      const to = '2023-01-01'

      const response = await dataValidation.getBetweenDateRanges(from, to);

      expect(response).to.deep.equal([{
          time: new Date('2021-05-14T13:10:17.000Z'),
          name: 'Voltage',
          value: '1.35'
        },
          {
          time: new Date('2022-06-14T13:10:17.000Z'),
          name: 'Voltage',
          value: '1.35'
        }
      ])
      data_access_layer.purgeReading()
    });
  });
});
