import dataValidation from '../domain_layer/dataValidation'
import data_access_layer, {Reading} from '../data_access_layer'

export function get(from: string, to: string): Reading[] | {
  success: boolean
} {
  try {
    const result = dataValidation.getBetweenDateRanges(from, to)
    return result;
  } catch (err) {
    console.log(err)
    return {
      success: false
    }
  }
}
