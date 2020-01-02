const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    proxy({
      target: 'https://spacelaunchnow.me/api/3.3.0/',
      changeOrigin: true,
    }),
  );
};
