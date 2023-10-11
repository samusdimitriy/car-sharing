export const createArrayWithStep = (start, end, step) => {
  return Array.from(
    { length: Math.floor((end - start) / step) + 1 },
    (_, index) => start + index * step
  );
};
