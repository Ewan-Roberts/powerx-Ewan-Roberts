import captials from '../domain_layer/capitals'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export async function handler(): Promise<APIGatewayProxyResult> {
  const countryCaptialData = await captials.getRandomCountryCapitals();

  return JSON.stringify({
    statusCode: 200,
    ...countryCaptialData
  });
}
