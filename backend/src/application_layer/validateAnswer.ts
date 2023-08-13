import captials from '../domain_layer/capitals'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export async function validate(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  const { country, capital } = JSON.parse(event.body);

  // TODO Add joi schema validation here
  try {
    const validated = await captials.validateCountryCapital(country, capital);

    return JSON.stringify({
      statusCode: 200,
      ...validated
    });
  } catch(error) {
    return JSON.stringify({
      statusCode: 500,
      message: error.message
    });
  }
}
