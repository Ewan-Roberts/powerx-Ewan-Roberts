import data_access_layer, { Reading } from '../data_access_layer'
import { v4 as uuidv4 } from 'uuid';

const CONVERSION_TO_MILLISECONDS = 1000;

const NEW_LINE_FOR_DATA_PARSING = 3;

function parseSave(dataString: string) {
  const schema = [];
  const split = dataString.split(' ');
  let newLineForData = 0;

  const arrayLength = split.length / NEW_LINE_FOR_DATA_PARSING

  for(let i = 0; i < arrayLength; i++) {
    const convertStringToUnix = Number(
      Number(split[newLineForData]) * CONVERSION_TO_MILLISECONDS
    )

    const convertUnixToISODate = new Date(convertStringToUnix);

    schema.push({
      time:  convertUnixToISODate,
      name:  split[newLineForData + 1],
      value: split[newLineForData + 2]
    })

    newLineForData += NEW_LINE_FOR_DATA_PARSING
  }

  schema.forEach(async (data) => {
    const uuid = uuidv4();
    await data_access_layer.postReading(uuid, data);
  })

  return schema
}

function getBetweenDateRanges(startDate: string, endDate: string): Array<Reading> {
  const allData = data_access_layer.getAll()

  const startDateTime = new Date(startDate).getTime()
  const endDateTime = new Date(endDate).getTime()

  const result = Object.values(allData).map((data: any)=> {
    const { time } = data;
    const dataTime = new Date(time).getTime();
    if(
      dataTime <= endDateTime &&
      dataTime >= startDateTime
    ){
        return data;
      }
  })
  // Removing undefined
  .filter(data => data);

  return result;
}

export default {
  parseSave,
  getBetweenDateRanges
}

