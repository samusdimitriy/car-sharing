export const getFilteredAdverts = (adverts, filters) => {
  return adverts.filter((car) => {
    if (
      filters.brand &&
      car.make !== filters.brand &&
      filters.brand !== "All"
    ) {
      return false;
    }

    if (
      filters.price &&
      Number(car.rentalPrice.replace(/(\$)/, "")) > Number(filters.price)
    ) {
      return false;
    }

    if (filters.mileage.from.trim() || filters.mileage.to.trim()) {
      const { from, to } = filters.mileage;
      const carMileage = Number(car.mileage);

      if (
        (from !== undefined && carMileage < Number(from)) ||
        (to !== undefined && carMileage > Number(to))
      ) {
        return false;
      }
    }

    return true;
  });
};
