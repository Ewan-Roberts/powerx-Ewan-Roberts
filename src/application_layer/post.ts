import data_access_layer, {Reading} from '../data_access_layer'
import dataValidation from '../domain_layer/dataValidation'

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
