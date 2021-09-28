module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Repeatable.jsx":
/*!****************************!*\
  !*** ./src/Repeatable.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chained_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chained-function */ "chained-function");
/* harmony import */ var chained_function__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chained_function__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["tag", "repeatDelay", "repeatInterval", "repeatCount", "onPress", "onHoldStart", "onHold", "onHoldEnd", "onRelease", "onMouseDown", "onTouchStart", "onTouchCancel", "onTouchEnd"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Repeatable = /*#__PURE__*/function (_React$Component) {
  _inherits(Repeatable, _React$Component);

  var _super = _createSuper(Repeatable);

  function Repeatable() {
    var _this;

    _classCallCheck(this, Repeatable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "repeatDelayTimer", null);

    _defineProperty(_assertThisInitialized(_this), "repeatIntervalTimer", null);

    _defineProperty(_assertThisInitialized(_this), "repeatAmount", 0);

    _defineProperty(_assertThisInitialized(_this), "acquireTimer", function () {
      var repeatDelay = Math.max(Number(_this.props.repeatDelay) || 0, 0);
      var repeatInterval = Math.max(Number(_this.props.repeatInterval) || 0, 0);
      var repeatCount = Math.max(Number(_this.props.repeatCount) || 0, 0);
      _this.repeatAmount = 0;

      _this.releaseTimer();

      _this.repeatDelayTimer = setTimeout(function () {
        if (repeatCount > 0 && _this.repeatAmount >= repeatCount) {
          return;
        }

        _this.repeatAmount += 1;

        if (typeof _this.props.onHoldStart === 'function') {
          _this.props.onHoldStart();
        }

        if (typeof _this.props.onHold === 'function') {
          _this.props.onHold();
        }

        _this.repeatIntervalTimer = setInterval(function () {
          if (repeatCount > 0 && _this.repeatAmount >= repeatCount) {
            return;
          }

          _this.repeatAmount += 1;

          if (typeof _this.props.onHold === 'function') {
            _this.props.onHold();
          }
        }, repeatInterval);
      }, repeatDelay);
    });

    _defineProperty(_assertThisInitialized(_this), "releaseTimer", function () {
      if (_this.repeatDelayTimer) {
        clearTimeout(_this.repeatDelayTimer);
        _this.repeatDelayTimer = null;
      }

      if (_this.repeatIntervalTimer) {
        clearInterval(_this.repeatIntervalTimer);
        _this.repeatIntervalTimer = null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRelease", function (event) {
      if (_this.props.disabled) {
        return;
      }

      if (_this.repeatAmount > 0) {
        if (typeof _this.props.onHoldEnd === 'function') {
          _this.props.onHoldEnd();
        }
      }

      _this.repeatAmount = 0;

      _this.releaseTimer();

      if (typeof _this.props.onRelease === 'function') {
        _this.props.onRelease(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlePress", function (event) {
      if (_this.props.disabled) {
        return;
      }

      event.persist();

      var releaseOnce = function releaseOnce(event) {
        document.documentElement.removeEventListener('mouseup', releaseOnce);

        _this.handleRelease(event);
      };

      document.documentElement.addEventListener('mouseup', releaseOnce);

      if (typeof _this.props.onPress === 'function') {
        _this.props.onPress(event);
      }

      _this.acquireTimer();
    });

    return _this;
  }

  _createClass(Repeatable, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.repeatAmount = 0;
      this.releaseTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Tag = _this$props.tag,
          repeatDelay = _this$props.repeatDelay,
          repeatInterval = _this$props.repeatInterval,
          repeatCount = _this$props.repeatCount,
          onPress = _this$props.onPress,
          onHoldStart = _this$props.onHoldStart,
          onHold = _this$props.onHold,
          onHoldEnd = _this$props.onHoldEnd,
          onRelease = _this$props.onRelease,
          onMouseDown = _this$props.onMouseDown,
          onTouchStart = _this$props.onTouchStart,
          onTouchCancel = _this$props.onTouchCancel,
          onTouchEnd = _this$props.onTouchEnd,
          props = _objectWithoutProperties(_this$props, _excluded);

      var mobileEvents = {
        onTouchStart: chained_function__WEBPACK_IMPORTED_MODULE_0___default()(onTouchStart, this.handlePress),
        onTouchCancel: chained_function__WEBPACK_IMPORTED_MODULE_0___default()(onTouchCancel, this.handleRelease),
        onTouchEnd: chained_function__WEBPACK_IMPORTED_MODULE_0___default()(onTouchEnd, this.handleRelease)
      };
      var mouseEvents = {
        onMouseDown: chained_function__WEBPACK_IMPORTED_MODULE_0___default()(onMouseDown, this.handlePress),
        onMouseUp: chained_function__WEBPACK_IMPORTED_MODULE_0___default()(onTouchCancel, this.handleRelease)
      };
      var eventHandlers = react_device_detect__WEBPACK_IMPORTED_MODULE_3__["isMobile"] ? mobileEvents : mouseEvents;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, _extends({
        role: "presentation"
      }, props, eventHandlers));
    }
  }]);

  return Repeatable;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

Repeatable.defaultProps = {
  tag: 'div',
  disabled: false,
  repeatDelay: 500,
  repeatInterval: 32,
  repeatCount: 0
};
Repeatable.propTypes = {
  // A custom element for this component.
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    $$typeof: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.symbol,
    render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    $$typeof: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.symbol,
    render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  })]))]),
  // Set it to true to disable event actions.
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // The time (in milliseconds) to wait before the first hold action is being triggered.
  repeatDelay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  // The time interval (in milliseconds) on how often to trigger a hold action.
  repeatInterval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  // The number of times the hold action will take place. A zero value will disable the repeat counter.
  repeatCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  // Callback fired when the mousedown or touchstart event is triggered.
  onPress: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // Callback fired once before the first hold action.
  onHoldStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // Callback fired mutiple times while holding down.
  onHold: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // Callback fired once after the last hold action.
  onHoldEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // Callback fired when the mouseup, touchcancel, or touchend event is triggered.
  onRelease: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onTouchStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onTouchCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onTouchEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Repeatable);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repeatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repeatable */ "./src/Repeatable.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_Repeatable__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "chained-function":
/*!***********************************!*\
  !*** external "chained-function" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chained-function");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-device-detect":
/*!**************************************!*\
  !*** external "react-device-detect" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map