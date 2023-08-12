import captials from '../domain_layer/capitals'

export async function validate(event: any) {
  const { country, capital } = JSON.parse(event.body);

  const countryCaptialData = await captials.validateCountryCapital(country, capital);

  return JSON.stringify(countryCaptialData);
}
