import axios from 'axios';
import { expect } from 'chai'

import dataAccessLayer from '../../src/dataAccessLayer'

const LOCAL_PORT = 3000

describe('POST http://localhost:3000/data', function() {
  it('returns a valid response', async function() {
    const response = await axios.post(
      'http://localhost:3000/data',
      '1649941817 Voltage 1.34 1649941818 Voltage 1.35 1649941817 Current 12.0 1649941818 Current 14.0',
      {
        headers: {
          'Content-Type': 'text/plain'
        }
      }
    );

    expect(response.data).to.deep.equal({ success: true })

    // TODO put afterAll
    dataAccessLayer.purgeReading()
  });
});
