"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$resource$data$co = _ref.resource.data.code,
      code = _ref$resource$data$co === undefined ? {} : _ref$resource$data$co;

  return _react2.default.createElement(
    "div",
    { className: "peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-codefiles" },
    (0, _keys2.default)(code).map(function (fileName) {
      return _react2.default.createElement(
        "div",
        { key: fileName, className: "file-display" },
        (0, _keys2.default)(code).length > 1 && _react2.default.createElement(
          "h2",
          null,
          fileName
        ),
        _react2.default.createElement(
          "pre",
          null,
          _react2.default.createElement(
            "code",
            null,
            code[fileName] && code[fileName].split('\n').map(function (line, index) {
              return _react2.default.createElement(
                "span",
                { className: "code-line", key: index },
                line
              );
            })
          )
        )
      );
    })
  );
};