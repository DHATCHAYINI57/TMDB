"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _movieService = _interopRequireDefault(require("../services/movieService"));

var _Circuitbreaker = _interopRequireDefault(require("../circuitbreaker/Circuitbreaker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', function (req, res) {
  try {
    new _Circuitbreaker["default"](_movieService["default"]).fire().then(function (response) {
      var movies = response.data;
      var popularity = req.headers.popularity;
      var rating = movies.results.filter(function (movie) {
        return movie.popularity > popularity;
      });
      res.send(rating.sort());
    })["catch"](function (err) {
      return res.sendStatus(500);
    });
  } catch (err) {
    res.sendStatus(500).res.send(err);
  }
});
var _default = router;
exports["default"] = _default;