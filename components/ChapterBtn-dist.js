"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

  function handleChange(e) {
    ch_num = e;
    console.log('chapter:' + ch_num);
    $('.examPage_content').show();
    $('.frontPage_content').hide();
  }

  ;

  var ChapterBtns = /*#__PURE__*/function (_React$Component) {
    _inherits(ChapterBtns, _React$Component);

    var _super = _createSuper(ChapterBtns);

    function ChapterBtns() {
      _classCallCheck(this, ChapterBtns);

      return _super.apply(this, arguments);
    }

    _createClass(ChapterBtns, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: "chapterbtn",
          onClick: this.props.cfunction
        }, /*#__PURE__*/React.createElement("svg", {
          className: "bi checkicon"
        }), /*#__PURE__*/React.createElement("a", null, this.props.name));
      }
    }]);

    return ChapterBtns;
  }(React.Component);

  ReactDOM.render( /*#__PURE__*/React.createElement("div", {
    className: "btnbox"
  }, /*#__PURE__*/React.createElement(ChapterBtns, {
    name: '第一回測驗',
    cfunction: function cfunction() {
      return handleChange(1);
    }
  }), /*#__PURE__*/React.createElement(ChapterBtns, {
    name: '第二回測驗',
    cfunction: function cfunction() {
      return handleChange(2);
    }
  }), /*#__PURE__*/React.createElement(ChapterBtns, {
    name: '第三回測驗'
  }), /*#__PURE__*/React.createElement(ChapterBtns, {
    name: '第四回測驗'
  }), /*#__PURE__*/React.createElement(ChapterBtns, {
    name: '第五回測驗'
  }), /*#__PURE__*/React.createElement(ChapterBtns, {
    name: '第六回測驗'
  }), /*#__PURE__*/React.createElement(ChapterBtns, {
    name: '第七回測驗'
  }), /*#__PURE__*/React.createElement(ChapterBtns, {
    name: '第八回測驗'
  }), /*#__PURE__*/React.createElement(ChapterBtns, {
    name: '第九回測驗'
  }), /*#__PURE__*/React.createElement(ChapterBtns, {
    name: '第十回測驗'
  })), document.getElementById('ChapterBtnid'));
})();