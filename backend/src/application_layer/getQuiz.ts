import captials from '../domain_layer/capitals'

export async function get(event: any) {
  const countryCaptialData = await captials.getRandomCountryCapitals();

  return JSON.stringify({
    statusCode: 200,
    data: countryCaptialData
  });
}
