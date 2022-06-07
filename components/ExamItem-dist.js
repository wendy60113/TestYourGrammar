"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function () {
  'use strict';

  var ExamInfo = /*#__PURE__*/function (_React$Component) {
    _inherits(ExamInfo, _React$Component);

    var _super = _createSuper(ExamInfo);

    function ExamInfo() {
      _classCallCheck(this, ExamInfo);

      return _super.apply(this, arguments);
    }

    _createClass(ExamInfo, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: "exam_title"
        }, /*#__PURE__*/React.createElement("div", {
          className: "titlebg"
        }, /*#__PURE__*/React.createElement("span", {
          className: "titlebg_chword"
        }, /*#__PURE__*/React.createElement("a", null, "01")), /*#__PURE__*/React.createElement("span", {
          className: "titlebg_decword"
        }, /*#__PURE__*/React.createElement("a", null, "Test"))), /*#__PURE__*/React.createElement("div", {
          className: "exam_chapter"
        }, /*#__PURE__*/React.createElement("a", null, "\u7B2C\u4E00\u56DE")));
      }
    }]);

    return ExamInfo;
  }(React.Component);

  var ExamBtn = /*#__PURE__*/function (_React$Component2) {
    _inherits(ExamBtn, _React$Component2);

    var _super2 = _createSuper(ExamBtn);

    function ExamBtn() {
      var _this;

      _classCallCheck(this, ExamBtn);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super2.call.apply(_super2, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
        console.log(e.target.value);
      });

      return _this;
    }

    _createClass(ExamBtn, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", null, "this"), /*#__PURE__*/React.createElement("label", {
          className: "container"
        }, "One", /*#__PURE__*/React.createElement("input", {
          type: "radio",
          name: "type",
          value: "A",
          onChange: this.handleChange
        }), /*#__PURE__*/React.createElement("span", {
          className: "checkmark"
        })), /*#__PURE__*/React.createElement("label", {
          className: "container"
        }, "Two", /*#__PURE__*/React.createElement("input", {
          type: "radio",
          name: "type",
          value: "B",
          onChange: this.handleChange
        }), /*#__PURE__*/React.createElement("span", {
          className: "checkmark"
        })), /*#__PURE__*/React.createElement("label", {
          className: "container"
        }, "Three", /*#__PURE__*/React.createElement("input", {
          type: "radio",
          name: "type",
          value: "C",
          onChange: this.handleChange
        }), /*#__PURE__*/React.createElement("span", {
          className: "checkmark"
        })), /*#__PURE__*/React.createElement("label", {
          className: "container"
        }, "Four", /*#__PURE__*/React.createElement("input", {
          type: "radio",
          name: "type",
          value: "D",
          onChange: this.handleChange
        }), /*#__PURE__*/React.createElement("span", {
          className: "checkmark"
        })));
      }
    }]);

    return ExamBtn;
  }(React.Component);

  ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ExamInfo, null), /*#__PURE__*/React.createElement(ExamBtn, null), /*#__PURE__*/React.createElement(ExamBtn, null)), document.getElementById('ExamItemid'));
})();