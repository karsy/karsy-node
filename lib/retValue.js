module.exports = (isSuccess, data, other) => ({
  isSuccess,
  retValue: data,
  ...other
});
