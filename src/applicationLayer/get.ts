import dataAccessLayer, { Reading } from '../dataAccessLayer'
import dataValidation from '../domainLayer/dataValidation'

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
