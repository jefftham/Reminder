const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  distDir: '../dist',
  cssModules: false,
});