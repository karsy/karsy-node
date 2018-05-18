module.exports = (isSuccess, data, other) => {
  return {
    isSuccess,
    retValue: data,
    ...other
  };
};
