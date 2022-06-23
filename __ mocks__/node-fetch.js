// para comportarse igual/ lo más parecido al fetch original

// cuando si redireciona
/* const nodeFetch = jest.fn((link, callback) => {
  const result = {
    status: 200,
    statusText: 'OK',
  };
  const error = null;
  callback(result, error);
}); */

// eslint-disable-next-line import/prefer-default-export
const fetch = jest.fn(() => Promise.resolve({
  status: 200,
  statusText: 'Ok',
}));

export default fetch;
