import { getOnlyFirstUpperLetter } from './getOnlyFirstUpperLetter';

export const getCarDescList = ({
  address,
  rentalCompany,
  typeClass = 'Premium',
  type,
  model,
  id,
  functionalities,
}) => {
  const carAddress = address.split(',');
  const carCity = carAddress[1].trim();
  const carCountry = carAddress[2].trim();
  const carRentalCompany = rentalCompany;
  const carClass = typeClass;
  const carType = `${getOnlyFirstUpperLetter(type)}`.trim();
  const carModel = model;
  const carId = `${id}`.trim();
  const catFunctionality = functionalities[0];

  const result = [
    carCity,
    carCountry,
    carRentalCompany,
    carClass,
    carType,
    carModel,
    carId,
    catFunctionality,
  ];
  return result;
};

export const getCarDetailsDescList = ({
  address,
  id,
  year,
  type,
  fuelConsumption,
  engineSize,
}) => {
  const carAddress = address.split(',');
  const carCity = carAddress[1].trim();
  const carCountry = carAddress[2].trim();
  const carId = `Id: ${id}`.trim();
  const carYear = `Year: ${year}`.trim();
  const carType = `Type: ${getOnlyFirstUpperLetter(type)}`.trim();
  const carFuelConsumption = `Fuel Consumption: ${fuelConsumption}`.trim();
  const carEngineSize = `Engine Size: ${engineSize}`.trim();

  const result = [
    carCity,
    carCountry,
    carId,
    carYear,
    carType,
    carFuelConsumption,
    carEngineSize,
  ];
  return result;
};
