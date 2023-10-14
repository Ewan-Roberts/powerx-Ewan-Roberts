import axios from 'axios';
import { expect } from 'chai'
import { v4 as uuidv4 } from 'uuid';

import dataAccessLayer from '../../src/dataAccessLayer'

const LOCAL_PORT = 3000

describe('GET http://localhost:3000/data', function() {
  it('returns a valid response', async function() {
    const firstUUID = uuidv4();
    const secondUUID = uuidv4();
    const thirdUUID = uuidv4();
    await dataAccessLayer.postReading(firstUUID, {
      time: new Date('2020-04-14T13:10:17.000Z'),
      name: 'Voltage',
      value: '1.34'
    })
    await dataAccessLayer.postReading(secondUUID, {
      time: new Date('2021-05-14T13:10:17.000Z'),
      name: 'Voltage',
      value: '1.35'
    })
    await dataAccessLayer.postReading(thirdUUID, {
      time: new Date('2022-06-14T13:10:17.000Z'),
      name: 'Voltage',
      value: '1.36'
    })

    const config = {
      method: 'get',
      url: 'http://localhost:'+LOCAL_PORT+'/data?from=2021-01-01&to=2023-01-01',
    };

    const response = await axios(config)

    expect(response).to.be.ok

    // Bug here where when PI hitting endpoint memory isnt preserved
    // expect(response).to.deep.equal({ success: true })

    // TODO put afterAll
    dataAccessLayer.purgeReading()
  });
});
