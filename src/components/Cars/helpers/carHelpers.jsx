export const reduceFunctionalitiesArr = functionalities => {
  if (Array.isArray(functionalities) && functionalities.length > 0) {
    let firstFunctionality = functionalities[0];
    if (firstFunctionality.length > 9) {
      firstFunctionality = firstFunctionality.slice(0, 9) + '...';
    }
    return firstFunctionality;
  } else {
    return null;
  }
};

export function createAddressObject(addressString) {
  const addressArray = addressString.split(',').map(item => item.trim());
  if (addressArray.length >= 3) {
    const [street, city, country] = addressArray;
    return {
      street,
      city,
      country,
    };
  } else {
    return null;
  }
}
export function accessoriesAndFunctionalities(arr1, arr2) {
  const res = [...arr1, ...arr2];
  return res;
}

export const rentalConditionsArr = (rentalConditions, rentalPrice, mileage) => {
  if (typeof rentalConditions !== 'string') {
    return [];
  }
  const priceArr = rentalPrice.split('$');
  const price = priceArr[1] + '$';
  const conditionsArray = rentalConditions.split('\n');
  const res = conditionsArray.map(condition => {
    const [key, value] = condition.split(': ');
    if (value) {
      return (
        <>
          <span className="condition-key">{key}</span>:{' '}
          <span className="condition-value">{value}</span>
        </>
      );
    } else {
      return (
        <>
          <span className="condition-key">{condition}</span>
        </>
      );
    }
  });
  res.push(
    <>
      <span className="condition-key">Mileage</span>:{' '}
      <span className="condition-value">
        {new Intl.NumberFormat('en-US').format(mileage)}
      </span>
    </>
  );
  res.push(
    <>
      <span className="condition-key">Price</span>:{' '}
      <span className="condition-value">{price}</span>
    </>
  );
  return res;
};
