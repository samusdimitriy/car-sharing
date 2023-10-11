export const getOnlyFirstUpperLetter = (word) => {
  if (typeof word !== "string") return;

  const capFirstLetter = word[0].toUpperCase();
  const restOfWordLower = word.slice(1).toLowerCase();

  const result = capFirstLetter + restOfWordLower;
  return result;
};
