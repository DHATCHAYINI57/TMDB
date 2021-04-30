"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _genreRouter = _interopRequireDefault(require("./routes/genreRouter"));

var _popularityRouter = _interopRequireDefault(require("./routes/popularityRouter"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = _interopRequireDefault(require("../swagger/swagger.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use("/api-docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
app.use('/genre', _genreRouter["default"]);
app.use('/popularity', _popularityRouter["default"]);
var _default = app;
exports["default"] = _default;