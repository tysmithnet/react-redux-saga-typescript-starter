const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../config/webpack.config.js');
const compiler = webpack(config);

const app = express();

app.use(webpackDevMiddleware(compiler, {publicPath: config.output.publicPath}));

app.listen(8080, () => {
    console.log("Listening on http://localhost:8080/");
});