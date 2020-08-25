export default Object.freeze({
  name: 'production',
  prod: true,
  api: {
    baseURL: 'http://localhost:5000/api',
    cdn: 'http://localhost:5000/api',
    'X-Client-Id': '',
    'X-Client-Secret': '',
  },
});
