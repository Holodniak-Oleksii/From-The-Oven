export const transformObj = (pizzas) => {
  return pizzas.map((item) => {
    return {
      name: item.name,
      size: item.size,
      count: item.count,
    };
  });
};
