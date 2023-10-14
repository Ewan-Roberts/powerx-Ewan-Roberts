import dataAccessLayer, { Reading } from '../dataAccessLayer'
import dataValidation from '../domainLayer/dataValidation'

export function post(bodyString: string): {
  success: boolean
} {
  let parsedBody;
  try {
    dataValidation.parseSave(bodyString);

    return {
      success: true
    }
  } catch (err) {
    console.log(err)
    return {
      success: false
    }
  }
}
