import dataAccessLayer, { Reading } from '../dataAccessLayer'
import { v4 as uuidv4 } from 'uuid';

const CONVERSION_TO_MILLISECONDS = 1000;

const NEW_LINE_FOR_DATA_PARSING = 3;

function parseSave(dataString: string): Array<Reading> {
  const returnData = [];

  const splitDataString = dataString.split(' ');
  const arrayLength = splitDataString.length / NEW_LINE_FOR_DATA_PARSING

  let newLineForData = 0;
  for(let i = 0; i < arrayLength; i++) {
    const convertStringToUnix = Number(
      Number(splitDataString[newLineForData]) * CONVERSION_TO_MILLISECONDS
    )

    const convertUnixToISODate = new Date(convertStringToUnix);

    returnData.push({
      time:  convertUnixToISODate,
      name:  splitDataString[newLineForData + 1],
      value: splitDataString[newLineForData + 2]
    })

    newLineForData += NEW_LINE_FOR_DATA_PARSING
  }

  returnData.forEach(data => {
    const uuid = uuidv4();
    dataAccessLayer.postReading(uuid, data);
  })

  return returnData
}

function getBetweenDateRanges(
  startDate: string,
  endDate: string
): Array<Reading> {
  const allData = dataAccessLayer.getAll()

  const startDateTime = new Date(startDate).getTime()
  const endDateTime = new Date(endDate).getTime()

  const returnData = Object.values(allData).map((data: Reading)=> {
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

  return returnData;
}

export default {
  parseSave,
  getBetweenDateRanges
}

