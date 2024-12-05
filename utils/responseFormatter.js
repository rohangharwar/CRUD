exports.formatResponse = (data, message = 'Success') => ({
    status: 'success',
    message,
    data,
  });