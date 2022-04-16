const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/**", {
      target: "https://salty-crag-11243.herokuapp.com/",
    })
  );
  app.use(
    createProxyMiddleware("/otherApi/**", {
      target: "https://salty-crag-11243.herokuapp.com/",
    })
  );
};
