"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CodeFilesPlayer = function (_Component) {
  (0, _inherits3.default)(CodeFilesPlayer, _Component);

  function CodeFilesPlayer(props) {
    (0, _classCallCheck3.default)(this, CodeFilesPlayer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CodeFilesPlayer.__proto__ || (0, _getPrototypeOf2.default)(CodeFilesPlayer)).call(this, props));

    _this.render = function () {
      var code = _this.props.resource.data.code,
          selected = _this.state.selected;

      return _react2.default.createElement(
        "figure",
        { className: "peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-codefiles" },
        (0, _keys2.default)(code).length > 1 && _react2.default.createElement(
          "ul",
          { className: "files-list" },
          (0, _keys2.default)(code).map(function (fileName) {
            var onSelect = function onSelect() {
              return _this.setState({ selected: fileName });
            };
            return _react2.default.createElement(
              "li",
              {
                key: fileName,
                className: fileName + (fileName === selected ? ' active' : ''),
                onClick: onSelect
              },
              fileName
            );
          })
        ),
        selected && _react2.default.createElement(
          "pre",
          { className: "file-content" },
          _react2.default.createElement(
            "code",
            null,
            code[selected] && code[selected].split('\n').map(function (line, index) {
              return _react2.default.createElement(
                "span",
                { className: "code-line", key: index },
                line
              );
            })
          )
        )
      );
    };

    _this.state = {
      selected: props.resource && props.resource.data && props.resource.data.code && (0, _keys2.default)(props.resource.data.code)[0]
    };
    return _this;
  }

  (0, _createClass3.default)(CodeFilesPlayer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ((!this.state.selected || this.props.resource !== nextProps.resource) && nextProps.resource && nextProps.resource.data && nextProps.resource.data.code && (0, _keys2.default)(nextProps.resource.data.code)[0]) {
        this.setState({
          selected: (0, _keys2.default)(nextProps.resource.data.code)[0]
        });
      }
    }
  }]);
  return CodeFilesPlayer;
}(_react.Component);

exports.default = CodeFilesPlayer;
;