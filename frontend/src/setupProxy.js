const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.TARGET_URL || "http://localhost:9123",
      changeOrigin: true,
    })
  );
};
