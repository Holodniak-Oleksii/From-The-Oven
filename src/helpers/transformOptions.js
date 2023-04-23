const transformOptions = (arr) => {
  let result = [{ id: 0, value: "", label: "All" }];
  arr.forEach((el) => {
    result.push({
      id: el.id,
      value: el.name,
      label: el.name,
    });
  });
  return result;
};
export default transformOptions;
