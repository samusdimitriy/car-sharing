export const formatingCommasToNumber = (stringNumbers) => {
  const stringWithoutCommas = stringNumbers.replace(/,/g, "");

  if (stringWithoutCommas.length > 3) {
    const parts = [];

    for (let i = stringWithoutCommas.length; i > 0; i -= 3) {
      parts.unshift(stringWithoutCommas.slice(Math.max(i - 3, 0), i));
    }

    return parts.join(",");
  } else {
    return stringWithoutCommas;
  }
};

export const removeCommasFromString = (stringNumbers) => {
  const stringWithoutCommas = stringNumbers.replace(/,/g, "");

  return stringWithoutCommas;
};
