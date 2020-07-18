"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var URL = 'https://jsonplaceholder.typicode.com/posts/1';
axios_1["default"].get(URL)
    .then(function (res) { return res.data; })
    .then(function (data) { return console.log(data); });
