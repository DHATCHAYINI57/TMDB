"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../constants/index"));

var _axios = _interopRequireDefault(require("axios"));

var _https = _interopRequireDefault(require("https"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var agent = new _https["default"].Agent({
  rejectUnauthorized: false
});

var getMovieApi = function getMovieApi() {
  try {
    var resp = _axios["default"].get(_index["default"].GENRE_API, {
      httpsAgent: agent
    });

    return resp;
  } catch (err) {
    console.error(err);
  }
};

var _default = getMovieApi();

exports["default"] = _default;