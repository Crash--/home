/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"intents": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NZW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KonnectorInstall", function() { return KonnectorInstall; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/MKj");
/* harmony import */ var cozy_harvest_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iDCe");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("buk/");
/* harmony import */ var components_KonnectorSuccess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5Xzc");
/* harmony import */ var ducks_konnectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("uZd2");
/* harmony import */ var styles_konnectorInstall__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("K4zY");
/* harmony import */ var styles_konnectorInstall__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_konnectorInstall__WEBPACK_IMPORTED_MODULE_6__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var KonnectorInstall =
/*#__PURE__*/
function (_Component) {
  _inherits(KonnectorInstall, _Component);

  function KonnectorInstall(props) {
    var _this;

    _classCallCheck(this, KonnectorInstall);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KonnectorInstall).call(this, props));
    _this.state = {
      trigger: null,
      success: false
    };
    _this.handleLoginSuccess = _this.handleLoginSuccess.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSuccess = _this.handleSuccess.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(KonnectorInstall, [{
    key: "handleLoginSuccess",
    value: function handleLoginSuccess(trigger) {
      console.log('tigger login success', trigger);
      this.setState({
        trigger: trigger,
        success: true
      });
      this.props.onLoginSuccess(trigger);
    }
  }, {
    key: "handleSuccess",
    value: function handleSuccess(trigger) {
      console.log('handleSuccess', trigger);
      this.setState({
        trigger: trigger,
        success: true
      });
      this.props.onSuccess(trigger);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          account = _this$props.account,
          konnector = _this$props.konnector,
          legacySuccess = _this$props.legacySuccess,
          onDone = _this$props.onDone,
          successMessage = _this$props.successMessage,
          successMessages = _this$props.successMessages,
          successButtonLabel = _this$props.successButtonLabel,
          t = _this$props.t;
      var _this$state = this.state,
          trigger = _this$state.trigger,
          success = _this$state.success;

      if (success || legacySuccess) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_KonnectorSuccess__WEBPACK_IMPORTED_MODULE_4__["default"], {
          account: account,
          connector: konnector,
          folderId: trigger && trigger.message.folder_to_save,
          onDone: onDone,
          title: successMessage,
          trigger: trigger,
          messages: successMessages,
          successButtonLabel: successButtonLabel
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: styles_konnectorInstall__WEBPACK_IMPORTED_MODULE_6___default.a['col-account-connection-content']
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: styles_konnectorInstall__WEBPACK_IMPORTED_MODULE_6___default.a['col-account-connection-form']
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "u-ta-center"
      }, t('account.config.title', {
        name: konnector.name
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_harvest_lib__WEBPACK_IMPORTED_MODULE_2__["TriggerManager"], {
        account: account,
        konnector: konnector,
        onLoginSuccess: this.handleLoginSuccess,
        onSuccess: this.handleSuccess
      })));
    }
  }]);

  return KonnectorInstall;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    konnector: Object(ducks_konnectors__WEBPACK_IMPORTED_MODULE_5__["getKonnector"])(state.cozy, ownProps.connector.slug)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_3__["translate"])()(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(KonnectorInstall)));

/***/ }),

/***/ "+Zor":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-refund_f34b0da2dd256e4bb78d5bb3f44c31c8",
  "use": "icon-refund_f34b0da2dd256e4bb78d5bb3f44c31c8-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-refund_f34b0da2dd256e4bb78d5bb3f44c31c8\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#FF9126\" d=\"M9.001 27.002h-8a1 1 0 0 0-1 1v15c0 .55.448 1 1 1h8c.55 0 1-.45 1-1v-15c0-.552-.45-1-1-1\" /><path fill=\"#FFE2A1\" d=\"M47.708 35.293c-2.348-2.346-4.374-3-7.024-2.24l-6.016 1.996c.054.314.082.632.082.952 0 1.28-.416 2.486-1.168 3.39-.878 1.052-2.116 1.61-3.582 1.61H20a1 1 0 0 1 0-2h10c.864 0 1.552-.3 2.044-.89.45-.538.706-1.306.706-2.11 0-1.114-.58-3-2.75-3h-6a.998.998 0 0 1-.706-.292c-.918-.918-3.708-3.708-8.294-3.708h-3a1 1 0 0 0-1 1v11c0 .43.276.814.684.948a274.217 274.217 0 0 1 7.522 2.642c3.856 1.402 6.014 2.16 7.938 2.16 2.294 0 4.256-1.078 8.354-3.418 2.712-1.552 6.424-3.674 11.95-6.436.288-.146.488-.418.54-.736.05-.316-.054-.64-.28-.868\" /><path fill=\"#FF9126\" d=\"M34.001 15.002c-3.86 0-7-3.14-7-7 0-3.862 3.14-7 7-7s7 3.138 7 7c0 3.86-3.14 7-7 7zm-9 14c-3.86 0-7-3.14-7-7 0-3.862 3.14-7 7-7s7 3.138 7 7c0 3.86-3.14 7-7 7z\" /><path fill=\"#FFE2A1\" d=\"M33.001 6.002a1 1 0 0 1 2 0v4c0 .55-.45 1-1 1-.552 0-1-.45-1-1v-4zm-9 14a1 1 0 0 1 2 0v4c0 .55-.45 1-1 1-.552 0-1-.45-1-1v-4z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "+tca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataAccessFacade; });
/* harmony import */ var _adapters_CozyStackAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2hsQ");
/* harmony import */ var _adapters_PouchdbAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jPoV");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global cozy, PouchDB */

 // const isOnline = () =>
//   typeof navigator !== 'undefined' ? navigator.onLine : true

class DataAccessFacade {
  constructor() {
    this.stackAdapter = new _adapters_CozyStackAdapter__WEBPACK_IMPORTED_MODULE_0__["default"]();

    if (typeof PouchDB !== 'undefined') {
      this.pouchAdapter = new _adapters_PouchdbAdapter__WEBPACK_IMPORTED_MODULE_1__["default"](); // TODO: strategy injection

      this.strategy = new PouchFirstStrategy();
    } else {
      this.strategy = new StackOnlyStrategy();
    }
  }

  setup(cozyUrl, options) {
    const config = _objectSpread({
      cozyURL: cozyUrl
    }, options);

    cozy.client.init(config); // TODO: For now we let cozy-client-js creates PouchDB instances

    this.stackAdapter.init(config);

    if (config.offline) {
      this.pouchAdapter.registerDoctypes(config.offline.doctypes);
    }
  }

  getAdapter(doctype) {
    return this.strategy.getAdapter(doctype, this.stackAdapter, this.pouchAdapter);
  }

  startSync(dispatch) {
    return this.pouchAdapter.sync(dispatch, _adapters_PouchdbAdapter__WEBPACK_IMPORTED_MODULE_1__["SYNC_BIDIRECTIONAL"]);
  }

  startReplicationTo(dispatch) {
    return this.pouchAdapter.sync(dispatch, _adapters_PouchdbAdapter__WEBPACK_IMPORTED_MODULE_1__["SYNC_TO"]);
  }

  startReplicationFrom(dispatch) {
    return this.pouchAdapter.sync(dispatch, _adapters_PouchdbAdapter__WEBPACK_IMPORTED_MODULE_1__["SYNC_FROM"]);
  }

}

class PouchFirstStrategy {
  getAdapter(doctype, stackAdapter, pouchAdapter) {
    if (pouchAdapter.getDatabase(doctype) === undefined) {
      return stackAdapter;
    }

    return pouchAdapter;
  }

}

class StackOnlyStrategy {
  getAdapter(doctype, stackAdapter) {
    return stackAdapter;
  }

}

/***/ }),

/***/ "/HEB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-family_5da200a6dbf62edf72ec6651555f33c8",
  "use": "icon-family_5da200a6dbf62edf72ec6651555f33c8-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"icon-family_5da200a6dbf62edf72ec6651555f33c8\"><defs><path id=\"icon-family_5da200a6dbf62edf72ec6651555f33c8_a\" d=\"M46 23c0 12.704-10.298 23-23 23C10.296 46 0 35.704 0 23 0 10.3 10.296 0 23 0c12.702 0 23 10.3 23 23z\" /></defs><g transform=\"translate(1 1)\" fill=\"none\" fill-rule=\"evenodd\"><mask id=\"icon-family_5da200a6dbf62edf72ec6651555f33c8_b\" fill=\"#fff\"><use xlink:href=\"#icon-family_5da200a6dbf62edf72ec6651555f33c8_a\" /></mask><use fill=\"#C2F0D1\" xlink:href=\"#icon-family_5da200a6dbf62edf72ec6651555f33c8_a\" /><path fill=\"#35CE68\" d=\"M9 25a6 6 0 0 1 6 6v16H3V31a6 6 0 0 1 6-6zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm28 0a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-14 8a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm14-6a6 6 0 0 1 6 6v16H31V31a6 6 0 0 1 6-6zm-14 8a6 6 0 0 1 6 6v8H17v-8a6 6 0 0 1 6-6z\" mask=\"url(#icon-family_5da200a6dbf62edf72ec6651555f33c8_b)\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "/n/j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveApps", function() { return receiveApps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApp", function() { return getApp; });
const RECEIVE_APPS = 'RECEIVE_APPS';

const reducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_APPS:
      return action.apps || state;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer); // Action creators

const receiveApps = apps => ({
  type: RECEIVE_APPS,
  apps
}); // Selectors

const getApp = (state = [], slug) => state.find(app => app.slug === slug);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("201c");
__webpack_require__("7NIr");
module.exports = __webpack_require__("d/w2");


/***/ }),

/***/ "09Bf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNTS_DOCTYPE", function() { return ACCOUNTS_DOCTYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "probableLoginFieldNames", function() { return probableLoginFieldNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeAll", function() { return subscribeAll; });
/* harmony import */ var _realtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BI92");
/* accounts lib ready to be added to cozy-client-js */

const ACCOUNTS_DOCTYPE = 'io.cozy.accounts'; // Order matters

const probableLoginFieldNames = ['login', 'identifier', 'new_identifier', 'email'];
function subscribeAll(cozy) {
  return _realtime__WEBPACK_IMPORTED_MODULE_0__["subscribeAll"](cozy, ACCOUNTS_DOCTYPE);
}

/***/ }),

/***/ "2Hrj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-travelDate_49d177af87d880d3d3592ca50e38d60e",
  "use": "icon-travelDate_49d177af87d880d3d3592ca50e38d60e-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-travelDate_49d177af87d880d3d3592ca50e38d60e\"><g stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" fill-rule=\"evenodd\"><path d=\"M39 11v32m-6-32v32M15 11v32M9 11v32\" stroke=\"currentColor\" /><path d=\"M47 15c0-3.3-.7-4-4-4H5c-3.3 0-4 .7-4 4v24c0 3.3.7 4 4 4h38c3.3 0 4-.7 4-4V15zm-30-4V7c0-2.2 1.8-4 4-4h6c2.2 0 4 1.8 4 4v4\" stroke=\"#95999D\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "2Uj3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-certificate_5a91ce553d849f048cefe614ca7e3fce",
  "use": "icon-certificate_5a91ce553d849f048cefe614ca7e3fce-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"icon-certificate_5a91ce553d849f048cefe614ca7e3fce\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#B2D3FF\" d=\"M3 2.002C3 .896 3.89 0 4.997 0H22l7 7v22.996A2 2 0 0 1 27.003 32H4.997A1.995 1.995 0 0 1 3 29.998V2.002z\" /><path fill=\"#197BFF\" d=\"M21.5 0c-.276 0-.5.23-.5.5V8h7.5c.276 0 .5-.232.5-.5V7l-7-7h-.5zM9 11h14v2H9v-2zm0 4h12v2H9v-2zm0 4h14v2H9v-2zm0 4h10v2H9v-2z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "2Yr2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-bankTransactions_0d0ca64da8d7e0e8bff594738075cf11",
  "use": "icon-bankTransactions_0d0ca64da8d7e0e8bff594738075cf11-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-bankTransactions_0d0ca64da8d7e0e8bff594738075cf11\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#C2F0D1\" d=\"M9 47c-1.105 0-2-.898-2-2.006V3.006C7 1.898 7.89 1 8.991 1H29l12 12v32c0 1.105-.892 2-2 2H9z\" /><path fill=\"#35CE68\" d=\"M29 1v9.991A2.01 2.01 0 0 0 31.009 13H41L29 1z\" /><path stroke=\"#35CE68\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M35 41H13V17h22zM13 22h22m-22 6h22m-22 6h22M20 17v24\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "2hsQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARED_BY_LINK", function() { return SHARED_BY_LINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARED_WITH_ME", function() { return SHARED_WITH_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARED_WITH_OTHERS", function() { return SHARED_WITH_OTHERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CozyStackAdapter; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global cozy */
const FILES_DOCTYPE = 'io.cozy.files';
const FETCH_LIMIT = 50;
const SHARED_BY_LINK = 'sharedByLink';
const SHARED_WITH_ME = 'sharedWithMe';
const SHARED_WITH_OTHERS = 'sharedWithOthers';
class CozyStackAdapter {
  async fetchApps(skip = 0) {
    const {
      data,
      meta
    } = await cozy.client.fetchJSON('GET', '/apps/', null, {
      processJSONAPI: false
    });
    return {
      data: data || [],
      meta: meta,
      skip,
      next: !!meta && meta.count > skip + FETCH_LIMIT
    };
  }

  async fetchDocuments(doctype) {
    // WARN: cozy-client-js lacks a cozy.data.findAll method that uses this route
    try {
      // WARN: if no document of this doctype exist, this route will return a 404,
      // so we need to try/catch and return an empty response object in case of a 404
      const resp = await cozy.client.fetchJSON('GET', `/data/${doctype}/_all_docs?include_docs=true`); // WARN: the JSON response from the stack is not homogenous with other routes (offset? rows? total_rows?)
      // see https://github.com/cozy/cozy-stack/blob/master/docs/data-system.md#list-all-the-documents
      // WARN: looks like this route returns something looking like a couchDB design doc, we need to filter it:

      const rows = resp.rows.filter(row => !row.doc.hasOwnProperty('views')); // we normalize the data (note that we add _type so that cozy.client.data.listReferencedFiles works...)

      const docs = rows.map(row => Object.assign({}, row.doc, {
        id: row.id,
        _type: doctype
      })); // we forge a correct JSONAPI response:

      return {
        data: docs,
        meta: {
          count: resp.total_rows
        },
        skip: resp.offset,
        next: false
      };
    } catch (error) {
      if (error.message.match(/not_found/)) {
        return {
          data: [],
          meta: {
            count: 0
          },
          skip: 0,
          next: false
        };
      }

      throw error;
    }
  }

  async queryDocuments(doctype, index, options) {
    const fields = options.fields;
    const skip = options.skip || 0; // Mango wants an array of single-property-objects...

    const sort = options.sort ? index.fields.map(f => ({
      [f]: options.sort[f] || 'desc'
    })) : undefined;

    const queryOptions = _objectSpread({
      limit: FETCH_LIMIT,
      wholeResponse: true
    }, options, {
      // TODO: type and class should not be necessary, it's just a temp fix for a stack bug
      fields: [...fields, '_id', '_type', 'class'],
      skip,
      sort // abstract away the format differences between query replies on the VFS versus the data API

    });

    let data, meta, next;

    if (doctype === FILES_DOCTYPE) {
      const response = await cozy.client.files.query(index, queryOptions);
      data = response.data.map(doc => Object.assign({
        _id: doc.id,
        _type: doctype
      }, doc, doc.attributes));
      meta = response.meta;
      next = meta.count > skip + FETCH_LIMIT;
    } else {
      const response = await cozy.client.data.query(index, queryOptions);
      data = response.docs.map(doc => Object.assign({
        id: doc._id,
        _type: doctype
      }, doc));
      meta = {};
      next = response.next;
    } // we forge a correct JSONAPI response:


    return {
      data,
      meta,
      next
    };
  }

  async fetchDocument(doctype, id) {
    const doc = await cozy.client.data.find(doctype, id); // we normalize again...

    const normalized = _objectSpread({}, doc, {
      id: doc._id,
      _type: doc._type
    });

    return {
      data: [normalized]
    };
  }

  init(config) {
    this.config = _objectSpread({}, config);
  }

  async createDocument(doctype, doc) {
    const created = await cozy.client.data.create(doctype, doc); // we forge a standard response with a 'data' property

    const normalized = _objectSpread({}, created, {
      id: created._id,
      _type: doctype
    });

    return {
      data: [normalized]
    };
  }

  async createTrigger(doc) {
    const created = await cozy.client.fetchJSON('POST', '/jobs/triggers', {
      data: doc
    });

    const normalized = _objectSpread({}, created, created.attributes, {
      id: created._id
    });

    return {
      data: [normalized]
    };
  }

  async launchTrigger(doc) {
    const job = await cozy.client.fetchJSON('POST', `/jobs/triggers/${doc._id}/launch`);

    const normalized = _objectSpread({}, job, job.attributes, {
      id: job._id
    });

    return {
      data: [normalized]
    };
  }

  async updateDocument(doc) {
    const updated = await cozy.client.data.updateAttributes(doc._type, doc.id, doc); // we forge a standard response with a 'data' property

    return {
      data: [_objectSpread({}, doc, {
        _rev: updated._rev
      })]
    };
  }

  async deleteDocument(doc) {
    /* const deleted = */
    await cozy.client.data.delete(doc._type, doc); // we forge a standard response with a 'data' property

    return {
      data: [doc]
    };
  }

  async deleteTrigger(doc) {
    await cozy.client.fetchJSON('DELETE', `/jobs/triggers/${doc._id}`);
    return {
      data: [doc]
    };
  }

  createIndex(doctype, fields) {
    return cozy.client.data.defineIndex(doctype, fields);
  }

  async fetchFileByPath(path) {
    try {
      const file = await cozy.client.files.statByPath(path); // we forge a standard response with a 'data' property

      return {
        data: [normalizeFile(file)]
      };
    } catch (err) {
      return null;
    }
  }

  async createFile(file, dirID) {
    const created = await cozy.client.files.create(file, {
      dirID
    }); // we forge a standard response with a 'data' property

    return {
      data: [normalizeFile(created)]
    };
  }

  async trashFile(file) {
    /* const trashed = */
    cozy.client.files.trashById(file.id); // we forge a standard response with a 'data' property

    return {
      data: [file]
    };
  }

  async fetchReferencedFiles(doc, skip = 0) {
    // WARN: _type and _id are needed by cozy.client.data.fetchReferencedFiles
    const normalized = _objectSpread({}, doc, {
      _id: doc.id // WARN: the stack API is probably not ideal here: referencedFiles are in the 'included' property
      // (that should be used when fetching an entity AND its relations) and the 'data' property
      // only contains uplets { id, type }

    });

    const {
      included,
      meta
    } = await cozy.client.data.fetchReferencedFiles(normalized, {
      skip,
      limit: FETCH_LIMIT
    }); // we forge a standard response with a 'data' property

    return {
      data: !included ? [] : included.map(file => _objectSpread({}, file, file.attributes, {
        _type: 'io.cozy.files'
      })),
      meta,
      next: meta.count > skip + FETCH_LIMIT,
      skip
    };
  }

  async fetchKonnectors(skip = 0) {
    const {
      data,
      meta
    } = await cozy.client.fetchJSON('GET', `/konnectors/`, null, {
      processJSONAPI: false
    });
    return {
      data: data ? data.map(konnector => _objectSpread({}, konnector, konnector.attributes, {
        _type: 'io.cozy.konnectors'
      })) : [],
      meta: meta,
      skip,
      next: !!meta && meta.count > skip + FETCH_LIMIT
    };
  }

  async fetchTriggers(worker, skip = 0) {
    const {
      data,
      meta
    } = await cozy.client.fetchJSON('GET', `/jobs/triggers?Worker=${worker}`, null, {
      processJSONAPI: false
    });
    return {
      data: data ? data.map(trigger => _objectSpread({}, trigger, trigger.attributes, {
        _type: 'io.cozy.triggers'
      })) : [],
      meta: meta,
      skip,
      next: !!meta && meta.count > skip + FETCH_LIMIT
    };
  }

  async addReferencedFiles(doc, ids) {
    await cozy.client.data.addReferencedFiles(doc, ids);
    return ids;
  }

  async removeReferencedFiles(doc, ids) {
    // WARN: _type and _id are needed by cozy.client.data.removeReferencedFiles
    const normalized = _objectSpread({}, doc, {
      _id: doc.id
    });

    await cozy.client.data.removeReferencedFiles(normalized, ids);
    return ids;
  }

  async fetchSharingPermissions(doctype) {
    const fetchPermissions = (doctype, sharingType) => cozy.client.fetchJSON('GET', `/permissions/doctype/${doctype}/${sharingType}`);

    const byMe = await fetchPermissions(doctype, SHARED_WITH_OTHERS);
    const byLink = await fetchPermissions(doctype, SHARED_BY_LINK);
    const withMe = await fetchPermissions(doctype, SHARED_WITH_ME);
    return {
      byMe,
      byLink,
      withMe
    };
  }

  fetchSharing(id) {
    return cozy.client.fetchJSON('GET', `/sharings/${id}`);
  }

  createSharing(permissions, contactIds, sharingType, description) {
    return cozy.client.fetchJSON('POST', '/sharings/', {
      desc: description,
      permissions,
      recipients: contactIds.map(contactId => ({
        recipient: {
          id: contactId,
          type: 'io.cozy.contacts'
        }
      })),
      sharing_type: sharingType
    });
  }

  revokeSharing(sharingId) {
    return cozy.client.fetchJSON('DELETE', `/sharings/${sharingId}`);
  }

  revokeSharingForClient(sharingId, clientId) {
    return cozy.client.fetchJSON('DELETE', `/sharings/${sharingId}/recipient/${clientId}`);
  }

  createSharingLink(permissions) {
    return cozy.client.fetchJSON('POST', `/permissions?codes=email`, {
      data: {
        type: 'io.cozy.permissions',
        attributes: {
          permissions
        }
      }
    });
  }

  revokeSharingLink(permission) {
    return cozy.client.fetchJSON('DELETE', `/permissions/${permission._id}`);
  }

}

const normalizeFile = file => _objectSpread({}, file, file.attributes, {
  id: file._id
});

/***/ }),

/***/ "2sw9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-files-pen_495d6e327d300d33bef68340e9910ee2",
  "use": "icon-files-pen_495d6e327d300d33bef68340e9910ee2-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-files-pen_495d6e327d300d33bef68340e9910ee2\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#A9CBF9\" d=\"M3.002 43A2.001 2.001 0 0 1 1 41.003V2.997C1 1.894 1.89 1 2.991 1H23l10 10v32H3.002z\" /><path fill=\"#297EF2\" d=\"M23 1l10 10h-8c-1.113 0-2-.895-2-2V1zm3.931 45.452c-1.066.305-1.686-.306-1.38-1.38L27 40.005l13.59-13.592a2 2 0 0 1 2.831.007l2.162 2.162c.784.784.784 2.054.008 2.83L32 45.005l-5.069 1.448zM16 38h10v2H16v-2z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "30Td":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-arrow-left_831093f501afb552bbdf239bd269621f",
  "use": "icon-arrow-left_831093f501afb552bbdf239bd269621f-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"icon-arrow-left_831093f501afb552bbdf239bd269621f\"><path fill=\"#95999D\" d=\"M3.57 13l10.106 9.263a1 1 0 1 1-1.352 1.474L.327 12.74a.997.997 0 0 1 0-1.48L12.324.263a1 1 0 1 1 1.352 1.474L3.57 11H23a1 1 0 1 1 0 2H3.57z\" /></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "3Oar":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-sync_84421808587b95331517b1bfc6f013ab",
  "use": "icon-sync_84421808587b95331517b1bfc6f013ab-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" id=\"icon-sync_84421808587b95331517b1bfc6f013ab\"><path d=\"M16 7.2V3c0-.6-.4-1-1-1-.5 0-.8.3-.9.7C12.6 1 10.4 0 8 0 4.9 0 2 1.8.7 4.6c-.2.5 0 1.1.5 1.3s1.1 0 1.3-.5C3.5 3.4 5.6 2 8 2c1.5 0 3 .6 4 1.5-.3 0-.6.1-.8.3-.4.4-.3 1.1.1 1.4l3 2.5h.1c.1.1.2.1.3.1h.4c.1 0 .2-.1.3-.1h.1c.1-.1.2-.1.2-.2.2 0 .2-.1.3-.3 0 .1 0 0 0 0zM14.8 10.1c-.5-.2-1.1 0-1.3.5-1 2.1-3.1 3.4-5.5 3.4-1.5 0-2.9-.6-4-1.5.3 0 .5-.1.7-.4.4-.4.3-1.1-.1-1.4l-3-2.5h-.1L1.3 8h-.1c-.2 0-.5 0-.7.1H.4c-.1.1-.1.2-.2.3-.1.1-.1.2-.2.3V13c0 .6.4 1 1 1 .5 0 .9-.3 1-.8C3.5 14.9 5.6 16 8 16c3.1 0 5.9-1.8 7.3-4.5.2-.5 0-1.1-.5-1.4z\" /></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "3dAU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCTYPE", function() { return DOCTYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAccounts", function() { return fetchAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccount", function() { return getAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIds", function() { return getIds; });
/* harmony import */ var redux_cozy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("m+TH");

const DOCTYPE = 'io.cozy.accounts';
const accountCollectionKey = 'accounts';
const fetchAccounts = () => Object(redux_cozy_client__WEBPACK_IMPORTED_MODULE_0__["fetchCollection"])(accountCollectionKey, DOCTYPE); // selectors

const getAccount = (state, id) => {
  if (!state.documents || !state.documents[DOCTYPE]) {
    return null;
  }

  return state.documents[DOCTYPE][id];
};
const getIds = state => // state.collection is bugged, it does not update correctly id list on
// RECEIVE_DATA
// (state.collections &&
//   state.collections[accountCollectionKey] &&
//   state.collections[accountCollectionKey].ids) ||
// []
state.documents && state.documents[DOCTYPE] && Object.keys(state.documents[DOCTYPE]) || [];

/***/ }),

/***/ "4DAK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactMarkdownRendererOptions", function() { return reactMarkdownRendererOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactMarkdownWrapper", function() { return ReactMarkdownWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6x+I");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);


var reactMarkdownRendererOptions = {
  // eslint-disable-next-line react/display-name
  Link: function Link(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: props.href,
      rel: "noopener noreferrer",
      target: "_blank"
    }, props.children);
  }
};
var ReactMarkdownWrapper = function ReactMarkdownWrapper(_ref) {
  var source = _ref.source;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    source: source,
    renderers: reactMarkdownRendererOptions
  });
};
/* harmony default export */ __webpack_exports__["default"] = (ReactMarkdownWrapper);

/***/ }),

/***/ "4P+e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"coz-form-controls":"coz-form-controls--1gEYB","coz-form-controls-success":"coz-form-controls-success--1NQyf","coz-btn":"coz-btn--233oo","col-btn--regular":"col-btn--regular--2N744","col-account-form-success-buttons":"col-account-form-success-buttons--1J36i","account-form-login":"account-form-login--_w3tO","col-account-form-advanced-button":"col-account-form-advanced-button--niE6T","account-form-fieldset":"account-form-fieldset--3WD-X","col-account-success":"col-account-success--1NEI1","col-account-success-links":"col-account-success-links--15Ii5","col-account-success-link":"col-account-success-link--18QVL","col-account-success-illu":"col-account-success-illu--RvZfy"};

/***/ }),

/***/ "4YEU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENQUEUE_CONNECTION", function() { return ENQUEUE_CONNECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAUNCH_TRIGGER", function() { return LAUNCH_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PURGE_QUEUE", function() { return PURGE_QUEUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_DATA", function() { return RECEIVE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_NEW_DOCUMENT", function() { return RECEIVE_NEW_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_DELETED_DOCUMENT", function() { return RECEIVE_DELETED_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CONNECTION_RUNNING_STATUS", function() { return UPDATE_CONNECTION_RUNNING_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CONNECTION_ERROR", function() { return UPDATE_CONNECTION_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_CONNECTION_CREATION", function() { return START_CONNECTION_CREATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_CONNECTION_CREATION", function() { return END_CONNECTION_CREATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enqueueConnection", function() { return enqueueConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purgeQueue", function() { return purgeQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateConnectionError", function() { return updateConnectionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startConnectionCreation", function() { return startConnectionCreation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endConnectionCreation", function() { return endConnectionCreation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConnectionsByKonnector", function() { return getConnectionsByKonnector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstError", function() { return getFirstError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstUserError", function() { return getFirstUserError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastSyncDate", function() { return getLastSyncDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueue", function() { return getQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConnectionError", function() { return getConnectionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCreatedAccount", function() { return getCreatedAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTriggerIdByKonnectorAndAccount", function() { return getTriggerIdByKonnectorAndAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTriggerLastSuccess", function() { return getTriggerLastSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCreatingConnection", function() { return isCreatingConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isConnectionConnected", function() { return isConnectionConnected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isConnectionEnqueued", function() { return isConnectionEnqueued; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isConnectionRunning", function() { return isConnectionRunning; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fvjX");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Puqe");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_konnectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8CvS");
/* harmony import */ var ducks_jobs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sR/t");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // constant

const ACCOUNT_DOCTYPE = 'io.cozy.accounts';
const TRIGGERS_DOCTYPE = 'io.cozy.triggers';
const JOBS_DOCTYPE = 'io.cozy.jobs';
const ENQUEUE_CONNECTION = 'ENQUEUE_CONNECTION';
const LAUNCH_TRIGGER = 'LAUNCH_TRIGGER';
const PURGE_QUEUE = 'PURGE_QUEUE';
const RECEIVE_DATA = 'RECEIVE_DATA';
const RECEIVE_NEW_DOCUMENT = 'RECEIVE_NEW_DOCUMENT';
const RECEIVE_DELETED_DOCUMENT = 'RECEIVE_DELETED_DOCUMENT';
const UPDATE_CONNECTION_RUNNING_STATUS = 'UPDATE_CONNECTION_RUNNING_STATUS';
const UPDATE_CONNECTION_ERROR = 'UPDATE_CONNECTION_ERROR';
const START_CONNECTION_CREATION = 'START_CONNECTION_CREATION';
const END_CONNECTION_CREATION = 'END_CONNECTION_CREATION'; // Helpers

const getTriggerKonnectorSlug = trigger => trigger && trigger.message && trigger.message.konnector || null;

const isKonnectorTrigger = doc => doc._type === TRIGGERS_DOCTYPE && !!doc.message && !!doc.message.konnector;

const isKonnectorJob = doc => doc._type === JOBS_DOCTYPE && doc.worker === 'konnector'; // reducers


const reducer = (state = {}, action) => {
  switch (action.type) {
    case ENQUEUE_CONNECTION:
    case UPDATE_CONNECTION_ERROR:
    case UPDATE_CONNECTION_RUNNING_STATUS:
    case LAUNCH_TRIGGER:
      // Trigger is launched, connection should be running.
      if (!action.trigger || !action.trigger._id) throw new Error('Missing trigger id');
      if (!action.trigger.message || !action.trigger.message.konnector) throw new Error('Malformed trigger message');
      return _objectSpread({}, state, {
        [getTriggerKonnectorSlug(action.trigger)]: konnectorReducer(state[getTriggerKonnectorSlug(action.trigger)], action)
      });

    case RECEIVE_DATA:
    case RECEIVE_NEW_DOCUMENT:
      if (!action.response || !action.response.data || !action.response.data.length) {
        return state;
      }

      return action.response.data.reduce((newState, doc) => {
        const isTrigger = isKonnectorTrigger(doc);
        const isJob = isKonnectorJob(doc); // Ignore non triggers or non jobs

        if (!isTrigger && !isJob) return newState;
        const konnectorSlug = doc.message.konnector;
        const triggerId = isTrigger && doc._id || isJob && doc.trigger_id;
        if (!triggerId) return newState;
        const account = isTrigger && !!doc.message && doc.message.account;
        const currentStatus = isTrigger && doc.current_state && doc.current_state.status || isJob && doc.state;
        const error = isTrigger && !!doc.current_state && doc.current_state.status !== 'done' && !!doc.current_state.last_error && Object(lib_konnectors__WEBPACK_IMPORTED_MODULE_3__["buildKonnectorError"])(doc.current_state.last_error) || isJob && !!doc.error && Object(lib_konnectors__WEBPACK_IMPORTED_MODULE_3__["buildKonnectorError"])(doc.error) || null;
        const lastSyncDate = isTrigger && !!doc.current_state && doc.current_state.last_execution || isJob && doc.queued_at;
        return _objectSpread({}, newState, {
          [konnectorSlug]: {
            triggers: _objectSpread({}, newState[konnectorSlug] && newState[konnectorSlug].triggers || {}, {
              [triggerId]: _objectSpread({}, newState[konnectorSlug] && newState[konnectorSlug].triggers && newState[konnectorSlug].triggers[triggerId] || {}, {
                account: account || newState[konnectorSlug] && newState[konnectorSlug].triggers && newState[konnectorSlug].triggers[triggerId] && newState[konnectorSlug].triggers[triggerId].account,
                error,
                hasError: !!error || currentStatus === 'errored',
                isRunning: ['queued', 'running'].includes(currentStatus),
                isConnected: !error && currentStatus === 'done',
                lastSyncDate: lastSyncDate
              })
            })
          }
        });
      }, state);

    case PURGE_QUEUE:
    case RECEIVE_DELETED_DOCUMENT:
      return Object.keys(state).reduce((konnectors, slug) => {
        return _objectSpread({}, konnectors, {
          [slug]: konnectorReducer(state[slug], action)
        });
      }, state);

    default:
      return state;
  }
};

const creation = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
    case RECEIVE_NEW_DOCUMENT:
      {
        if (!state) return null;

        if (!action.response || !action.response.data || action.response.data.length !== 1) {
          return state;
        }

        const doc = action.response.data[0];
        const isAccount = doc._type === ACCOUNT_DOCTYPE;
        if (isAccount) return _objectSpread({}, state, {
          account: doc._id
        });
        const isTrigger = isKonnectorTrigger(doc);
        if (isTrigger) return _objectSpread({}, state, {
          trigger: doc._id
        });
        return state;
      }

    case START_CONNECTION_CREATION:
      // Store all data related to the creation of a new connection in then
      // property `creation`
      // While a new connection is being configured, new trigger and account
      // are store here
      return {};

    case END_CONNECTION_CREATION:
      return null;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  creation,
  konnectors: reducer
})); // sub(?) reducers

const konnectorReducer = (state = {}, action) => {
  switch (action.type) {
    case ENQUEUE_CONNECTION:
    case LAUNCH_TRIGGER:
    case RECEIVE_DATA:
    case RECEIVE_NEW_DOCUMENT:
    case RECEIVE_DELETED_DOCUMENT:
    case PURGE_QUEUE:
      // We assume that document being a trigger has already been validated.
      return _objectSpread({}, state, {
        triggers: triggersReducer(state.triggers, action)
      });

    default:
      return state;
  }
};

const triggersReducer = (state = {}, action) => {
  switch (action.type) {
    case ENQUEUE_CONNECTION:
      return _objectSpread({}, state, {
        [action.trigger._id]: _objectSpread({}, state[action.trigger._id], {
          isEnqueued: true
        })
      });

    case LAUNCH_TRIGGER:
      return _objectSpread({}, state, {
        [action.trigger._id]: _objectSpread({}, state[action.trigger._id], {
          account: action.trigger.message.account,
          isRunning: true
        })
      });

    case PURGE_QUEUE:
      return state ? Object.keys(state).reduce((newState, triggerId) => {
        return _objectSpread({}, newState, {
          [triggerId]: _objectSpread({}, newState[triggerId], {
            isEnqueued: false
          })
        });
      }, state) : state;

    case RECEIVE_DELETED_DOCUMENT:
      {
        const {
          data
        } = action.response;
        const {
          _id,
          _type
        } = data[0];

        if (_type === TRIGGERS_DOCTYPE) {
          return lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(state, _id);
        } else return state;
      }

    default:
      return state;
  }
}; // action creators sync


const enqueueConnection = trigger => ({
  type: ENQUEUE_CONNECTION,
  trigger
});
const purgeQueue = () => ({
  type: PURGE_QUEUE
});
const updateConnectionError = (konnector, account, error) => ({
  type: UPDATE_CONNECTION_ERROR,
  konnector,
  account,
  error
});
const startConnectionCreation = konnector => ({
  type: START_CONNECTION_CREATION,
  konnector
});
const endConnectionCreation = () => ({
  type: END_CONNECTION_CREATION
}); // selectors

const getConnectionsByKonnector = (state, konnectorSlug, validAccounts = [], validKonnectors = []) => {
  const konnectorIsValid = !validKonnectors.length || validKonnectors.includes(konnectorSlug);
  const konnectorHasConnections = state.konnectors[konnectorSlug] && Object.keys(state.konnectors[konnectorSlug].triggers).length;
  if (!konnectorIsValid || !konnectorHasConnections) return [];
  return Object.values(state.konnectors[konnectorSlug].triggers).filter(trigger => validAccounts.includes(trigger.account));
};
const getFirstError = (state, konnectorSlug) => {
  const firstTriggerHavingError = !!state.konnectors && !!state.konnectors[konnectorSlug] && !!state.konnectors[konnectorSlug].triggers && Object.values(state.konnectors[konnectorSlug].triggers).find(trigger => !!trigger.error);
  return !!firstTriggerHavingError && firstTriggerHavingError.error;
};
const getFirstUserError = (state, konnectorSlug) => {
  const firstTriggerHavingUserError = !!state.konnectors && !!state.konnectors[konnectorSlug] && !!state.konnectors[konnectorSlug].triggers && Object.values(state.konnectors[konnectorSlug].triggers).find(trigger => Object(lib_konnectors__WEBPACK_IMPORTED_MODULE_3__["isKonnectorUserError"])(trigger.error));
  return firstTriggerHavingUserError && firstTriggerHavingUserError.error;
};
const getLastSyncDate = (state, konnectorSlug) => {
  const lastExecutions = !!state.konnectors && !!state.konnectors[konnectorSlug] && !!state.konnectors[konnectorSlug].triggers && Object.values(state.konnectors[konnectorSlug].triggers).map(trigger => trigger.lastSyncDate).sort((dateA, dateB) => {
    const momentA = moment__WEBPACK_IMPORTED_MODULE_1___default.a.utc(dateA);
    const momentB = moment__WEBPACK_IMPORTED_MODULE_1___default.a.utc(dateB);
    return momentA.isAfter(momentB) ? -1 : momentA.isBefore(momentB) ? 1 : 0;
  });
  return lastExecutions.length && lastExecutions[0];
}; // Map the trigger status to a status compatible with queue

const getTriggerQueueStatus = trigger => {
  if (trigger.isRunning) return 'ongoing';
  if (trigger.hasError) return 'error';
  if (trigger.isConnected) return 'done';
  return 'pending';
};

const getQueue = (state, konnectors) => // state is state.connections
state.konnectors ? Object.keys(state.konnectors).reduce((queuedConnections, konnectorSlug) => {
  const triggers = state.konnectors[konnectorSlug].triggers;
  if (!triggers) return queuedConnections;
  const konnector = konnectors[konnectorSlug];
  return queuedConnections.concat(Object.keys(triggers).reduce((queuedTriggers, triggerId) => {
    if (triggers[triggerId].isEnqueued) {
      const label = konnector.name;
      const status = getTriggerQueueStatus(triggers[triggerId]);
      return queuedTriggers.concat({
        konnector,
        label,
        status,
        triggerId
      });
    }

    return queuedTriggers;
  }, []));
}, []) : [];
const getConnectionError = (state, trigger) => getTriggerState(state, trigger).error;
const getCreatedAccount = state => !!state.creation && state.creation.account;
const getTriggerIdByKonnectorAndAccount = (state, konnector, account, validAccounts = []) => !!konnector && !!account && validAccounts.includes(account._id) && !!state.konnectors[konnector.slug] && Object.keys(state.konnectors[konnector.slug].triggers).find(triggerId => state.konnectors[konnector.slug].triggers[triggerId].account === account._id);
const getTriggerLastSuccess = (state, trigger) => {
  const lastJob = Object(ducks_jobs__WEBPACK_IMPORTED_MODULE_4__["getTriggerLastJob"])(state, trigger);
  const lastJobIsSuccess = lastJob && lastJob.state === 'done';
  if (lastJobIsSuccess) return lastJob.started_at;
  return !!trigger && !!trigger.current_state && trigger.current_state.last_success;
}; // get trigger from state, in state.konnectors[konnectorSlug].triggers[triggerId]

const getTriggerState = (state, trigger) => {
  const konnectorSlug = getTriggerKonnectorSlug(trigger);
  if (!konnectorSlug || !state.konnectors || !state.konnectors[konnectorSlug]) return false;
  const triggers = state.konnectors[konnectorSlug].triggers;
  if (!triggers) return false;
  return !!triggers && !!triggers[trigger._id] && triggers[trigger._id] || {};
};

const isCreatingConnection = state => !!state.creation;
const isConnectionConnected = (state, trigger) => getTriggerState(state, trigger).isConnected;
const isConnectionEnqueued = (state, trigger) => getTriggerState(state, trigger).isEnqueued;
const isConnectionRunning = (state, trigger) => getTriggerState(state, trigger).isRunning;

/***/ }),

/***/ "4zVC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-bloodPressure_53c53cf949a54f72143c918de3f01797",
  "use": "icon-bloodPressure_53c53cf949a54f72143c918de3f01797-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-bloodPressure_53c53cf949a54f72143c918de3f01797\"><g stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" fill-rule=\"evenodd\"><g stroke=\"currentColor\"><path d=\"M1 19h8l4-6.004 4 6 4-9 6 19 5-24L36 19h11M9 41v2m12-2v2m12-2v2m-18-6v6m12-6v6m12-6v6\" /></g><path stroke=\"#95999D\" d=\"M47 43c0 2.2-1.8 4-4 4H5c-2.202 0-4-1.8-4-4V5c0-2.202 1.798-4 4-4h38c2.2 0 4 1.798 4 4v38h0z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "5Xzc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KonnectorSuccess", function() { return KonnectorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessImage", function() { return SuccessImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessLinks", function() { return SuccessLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriveLink", function() { return DriveLink; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OFL0");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xweI");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("KXWi");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("buk/");
/* harmony import */ var styles_konnectorSuccess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4P+e");
/* harmony import */ var styles_konnectorSuccess__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_konnectorSuccess__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_DescriptionContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("CB1n");
/* harmony import */ var components_TriggerFolderLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("8MA2");
/* harmony import */ var components_BanksLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("u5EB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BanksLink", function() { return components_BanksLink__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var assets_images_connecting_data_in_progress_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("vL8P");
/* harmony import */ var assets_images_connecting_data_in_progress_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_images_connecting_data_in_progress_svg__WEBPACK_IMPORTED_MODULE_11__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var SuccessImage = function SuccessImage() {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: styles_konnectorSuccess__WEBPACK_IMPORTED_MODULE_7___default.a['col-account-success-illu-wrapper']
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: assets_images_connecting_data_in_progress_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
    className: styles_konnectorSuccess__WEBPACK_IMPORTED_MODULE_7___default.a['col-account-success-illu']
  }));
};

var SuccessLinks = function SuccessLinks(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(styles_konnectorSuccess__WEBPACK_IMPORTED_MODULE_7___default.a['col-account-success-links'], 'u-mv-half')
  }, children);
};

var DriveLink = Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_6__["translate"])()(function (_ref2) {
  var folderId = _ref2.folderId,
      t = _ref2.t;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_TriggerFolderLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
    folderId: folderId,
    label: t('account.success.driveLinkText')
  });
});
var SuccessFooter = Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_6__["translate"])()(function (_ref3) {
  var children = _ref3.children;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: styles_konnectorSuccess__WEBPACK_IMPORTED_MODULE_7___default.a['coz-form-controls-success']
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: styles_konnectorSuccess__WEBPACK_IMPORTED_MODULE_7___default.a['col-account-form-success-buttons']
  }, children));
});
var KonnectorSuccess =
/*#__PURE__*/
function (_Component) {
  _inherits(KonnectorSuccess, _Component);

  function KonnectorSuccess() {
    _classCallCheck(this, KonnectorSuccess);

    return _possibleConstructorReturn(this, _getPrototypeOf(KonnectorSuccess).apply(this, arguments));
  }

  _createClass(KonnectorSuccess, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof this.props.handleConnectionSuccess === 'function') {
        this.props.handleConnectionSuccess();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          account = _this$props.account,
          error = _this$props.error,
          title = _this$props.title,
          messages = _this$props.messages;
      var relatedApps = lodash_sortBy__WEBPACK_IMPORTED_MODULE_2___default()(Object.values(KonnectorSuccess.apps).filter(function (app) {
        return app.predicate(_this.props);
      }), function (app) {
        return -app.priority;
      });
      var hasLinks = relatedApps.length > 0;
      return account && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styles_konnectorSuccess__WEBPACK_IMPORTED_MODULE_7___default.a['col-account-success']
      }, !error && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SuccessImage, null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_DescriptionContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: !error && title,
        messages: !error && messages
      }, hasLinks && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SuccessLinks, null, relatedApps.map(function (app, i) {
        return (// Should always pass context, since it's used for customisation
          app.successLink(_this.props, _this.context, i)
        );
      }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SuccessFooter, null, relatedApps.length > 0 ? // Should always pass context, since it's used for customisation
      relatedApps[0].footerLink(this.props, this.context) : null));
    }
  }]);

  return KonnectorSuccess;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);
KonnectorSuccess.apps = {
  drive: {
    priority: 1,
    // eslint-disable-next-line react/display-name
    predicate: function predicate(props) {
      var trigger = props.trigger;
      var res = lodash_has__WEBPACK_IMPORTED_MODULE_1___default()(trigger, 'message.folder_to_save');
      return res;
    },
    // eslint-disable-next-line react/display-name
    successLink: function successLink(props, context, i) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(DriveLink, {
        key: i,
        folderId: props.trigger.message.folder_to_save
      });
    },
    // eslint-disable-next-line react/display-name
    footerLink: function footerLink(props) {
      var t = props.t,
          onDone = props.onDone,
          account = props.account,
          successButtonLabel = props.successButtonLabel;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: successButtonLabel || t('account.success.button'),
        onClick: function onClick(event) {
          event.preventDefault();
          onDone(account);
        }
      });
    }
  },
  banks: {
    priority: 0,
    // eslint-disable-next-line react/display-name
    predicate: function predicate(props) {
      var connector = props.connector;
      return Array.isArray(connector.data_types) && connector.data_types.includes('bankAccounts');
    },
    // eslint-disable-next-line react/display-name
    successLink: function successLink(props, context, i) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_BanksLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: i,
        banksUrl: context.store.banksUrl
      });
    },
    footerLink: function footerLink() {
      return null;
    }
  }
};
KonnectorSuccess.contextTypes = {
  store: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};
KonnectorSuccess.propTypes = {
  account: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  error: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  messages: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string),
  onDone: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  successButtonLabel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  trigger: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_6__["translate"])()(KonnectorSuccess));

/***/ }),

/***/ "7J9o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-profile_3c5a6968d4229721c285043623e2f80e",
  "use": "icon-profile_3c5a6968d4229721c285043623e2f80e-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"icon-profile_3c5a6968d4229721c285043623e2f80e\"><defs><path id=\"icon-profile_3c5a6968d4229721c285043623e2f80e_a\" d=\"M46 23c0 12.704-10.298 23-23 23C10.296 46 0 35.704 0 23 0 10.3 10.296 0 23 0c12.702 0 23 10.3 23 23z\" /></defs><g transform=\"translate(1 1)\" fill=\"none\" fill-rule=\"evenodd\"><mask id=\"icon-profile_3c5a6968d4229721c285043623e2f80e_b\" fill=\"#fff\"><use xlink:href=\"#icon-profile_3c5a6968d4229721c285043623e2f80e_a\" /></mask><use fill=\"#CEBEF7\" xlink:href=\"#icon-profile_3c5a6968d4229721c285043623e2f80e_a\" /><path fill=\"#855CEA\" d=\"M23 27c-5.523 0-10-4.701-10-10.5S17.477 6 23 6s10 4.701 10 10.5S28.523 27 23 27zm0 38c-9.941 0-18-8.059-18-18s8.059-18 18-18 18 8.059 18 18-8.059 18-18 18z\" mask=\"url(#icon-profile_3c5a6968d4229721c285043623e2f80e_b)\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "7dT6":
/***/ (function(module) {

module.exports = {"app":{"logo":{"alt":"%{name} logo"}},"date":{"format":"MM/DD/YYYY","placeholder":"mm/dd/yyyy"},"manifest":{"name":"Home","short_description":"Cozy Collect is the application that help you gather all your personal data inside Cozy.","long_description":"With Cozy Collect, you can easily:\n * Downloads documents from all your suppliers\n * Set how often Cozy will collect your bills\n * Access directly to the documents gathered by your Cozy","changes":"You haven't missed it, the Store arrived in your Cozy!\nWe took advantage of it to improve Collect:\n * Store adaptation.\n * Tile merge: when you have several accounts for a single supplier, the former are now merged under the supplier tile.\n * Improvement of some Connectors pages."},"add_service":"Add","account":{"config":{"default_folder":"/Administrative/%{name}","optional":"(Optional)","title":"Connect your %{name} account","data":{"title":"Collected data:","service":{"description":"Service description:"}},"tabs":{"sync":"synchronization","account":"account","data":"collected data"}},"disconnect":{"title":"Disconnection","description":"Your will be disconnected from this account, but imported data will be kept"},"form":{"title":"Account","label":{"firstname":"Firstname","lastname":"Lastname","login":"Login","consumerKey":"Consumer Key","consumerSecret":"Consumer Secret","appKey":"Application Key","appSecret":"Application Secret","tricountUrl":"Tricount URL","cardNumber":"Card Number","dob":"Date of birth","password":"Password","email":"Email","bank_identifier":"Bank identifier (optional)","profileName":"Profile Name","identifier":"Identifier","new_identifier":"Identifier","secret":"Password","answer":"Secret Answer","access_token":"Access token","accessTokenSecret":"Access token secret","apikey":"Api key","phoneNumber":"Phone number","folderPath":"Folder path","namePath":"Folder name","authCode":"Auth code","accountName":"Account name","loginUrl":"Login URL","token":"Token","agreement":"I agree","refreshToken":"Refresh Token","timeout":"Delay (ms)","branchName":"Branch","code":"Confidential code"},"placeholder":{"password":"The password you use to connect to the service","update_password":"Update the password","accountName":"Example: Personal account","namePath":"Example: Camille bills. Default name path is your login."},"button":{"connect":"Connect","cancel":"Cancel","save":"Save","disconnect":"Disconnect this account","delete":"Delete this account","advanced":"Advanced options","synchronize":"Synchronize now"}},"folder":{"title":"Related folder settings","withoutSettings":{"title":"Related folder"},"link":"Open the folder in Cozy Drive","changePath":"change the path","error":"Oops, something went wrong. Don't panic, your files are still there, please try again later","close":"close","warning":"You're changing your folder path","oldFiles":"All your olds bills will be moved in your new path.","newFiles":"Your news bills will be downloaded in your new path.","newPath":"Everything went well, the new path for your %{name} account is:","placeholder":{"administrative":"Administrative","photos":"Photos"}},"success":{"title":{"connect":"Successful configuration!","update":"Your %{name} account is updated!"},"banksLinkText":"See my accounts in %{appName}","driveLinkText":"Open the folder in Cozy Drive","button":"Close"},"message":{"folder":{"title":"Folder","link":"Open folder on cozy drive"},"success":{"connect":"Your data will be available in your Cozy in a few minutes and the next ones will follow automatically.","update":"Your %{name} account has been updated successfully.","delete":"Account removed succesfully."},"syncing":{"bill":"Your bills are syncing and will be available in the following path:"},"synced":{"title":"Your data synchronization","cron":"Synchronization frequency: %{frequency}","cron_hourly":"each hour","cron_daily":"once a day","cron_weekly":"once a week","cron_monthly":"once a month","cron_undefined":"manually","syncing":"running…","unknown":"unknown","last_sync":"Last synchronization: **%{date}**","date_format":"MMMM D[,] YYYY [at] HH[:]mm","bill":"Find your datas in the Drive app at this location:"},"error":{"server":"Apologies, our server had an hiccup, do you mind starting again?","bad_credentials":"Sorry, you entered an incorrect login or password.","delete":"Apologies, our server had an hiccup, do you mind starting again?"}},"forceConnection":"Run again now","editor_detail":"Service developed by %{editor}"},"account_picker":{"add_account_button":{"label":"Add an account"}},"apps":{"title":"My apps"},"connection":{"CTA":{"twofa_failed":"Run again now"},"error":{"default":{"title":"An error occured","description":"Unfortunately, something went wrong when trying to connect to %{name}. Please check again your account informations, visit our online help or contact us at contact@cozycloud.cc."},"DISK_QUOTA_EXCEEDED":{"title":"Cozy Storage full","description":"This service cannot fetch your documents now. Please remove some files or go to **Settings > Storage** to get more free space."},"CHALLENGE_ASKED":{"title":"Challenge required","description":"It seems that the website requires a second authentification factor that we don’t support yet. You may try to settle the issue on the [%{name}](%{link}) website before a retry."},"LOGIN_FAILED":{"title":"Bad credentials","description":"Bad credentials. Check the konnector fields and run the connection again."},"LOGIN_FAILED.NEEDS_SECRET":{"title":"Needs secret","description":"An additional field must be filled in before checking your credentials."},"LOGIN_FAILED.TOO_MANY_ATTEMPTS":{"title":"Temporarily blocked","description":"Too many attempts occured. Please update your credentials on [%{name}](%{link}) website and update the konnector later on."},"MAINTENANCE":{"title":"Unavailable website","description":"It seems that the [%{name}](%{link}) website is unavailable or the konnector must be updated. Please rerun the connector later or visit our online help."},"NOT_EXISTING_DIRECTORY":{"title":"Missing destination folder","description":"It seems that this account's destination folder has been deleted. Please restore it by disconnecting this account and then reconnect again."},"UNKNOWN_ERROR":{"title":"Connection error","description":"An unknown error has occurred."},"USER_ACTION_NEEDED":{"title":"Action needed on the provider","description":"It seems that the [%{name}](%{link}) website requires you to log in and to do a specific action. Please rerun the connector once you have settled the issue on the website."},"USER_ACTION_NEEDED.OAUTH_OUTDATED":{"title":"Access refresh required","description":"The [%{name}](%{link}) service requires you to allow your access again. Please disconnect and reconnect your account %{name} to this application. No data will be lost."},"USER_ACTION_NEEDED.ACCOUNT_REMOVED":{"title":"Unavailable account","description":"It seems that your account is no longer active. Please check your account on [%{name}](%{link}) before retry."},"USER_ACTION_NEEDED.CHANGE_PASSWORD":{"title":"Password update required","description":"It seems that the [%{name}](%{link}) website requires you to log in and update your password. Please rerun the connector once you have settled the issue on the website."},"USER_ACTION_NEEDED.PERMISSIONS_CHANGED":{"title":"New permissions validation needed","description":"You connector was updated and the permissions changed. Please validate them before launching the connector again."},"USER_ACTION_NEEDED.TWOFA_EXPIRED":{"title":"Relaunch the connexion to the service to fetch your data","description":"The last connexion to the service failed; please launch it again. You may have to provide a validation code."},"USER_ACTION_NEEDED.WRONG_TWOFA_CODE":{"title":"Wrong two-factore code provided","description":"The two-factor code provided is wrong, please start again."},"VENDOR_DOWN":{"title":"Unavailable service","description":"It seems that the [%{name}](%{link}) service is unavailable at the moment. Please rerun the connector later."},"VENDOR_DOWN.BANK_DOWN":{"title":"Unavailable website","description":"It seems that the [%{name}](%{link}) website is unavailable at the moment. Please rerun the connector later."},"VENDOR_DOWN.LINXO_DOWN":{"title":"Unavailable service","description":"It seems that we are experiencing overload with our bank konnectors at the moment. Please rerun the connector later."}}},"intent":{"konnector":{"install":{"error":{"message":"The konnector cannot be installed"}}},"service":{"return":"Back to connectors list","success":{"button":{"label":"Close"}},"error":{"initialization":"Service failed to initialize. Sorry for the inconvenience.","creation":"Unable to create account, an error occurred.","cause":"Cause: %{error}"},"cancel":"Cancel","terminate":"Terminate"}},"field":{"password":{"visibility":{"hide":"Hide","show":"Show","title":{"hide":"Hide password","show":"Show password"}}}},"nav":{"services":"My services"},"category":{"all":"All","banking":"Banks","health":"Health","insurance":"Insurance","transport":"Transportation","social":"Social","isp":"ISP","telecom":"Telecom","energy":"Energy","host_provider":"Host","productivity":"Productivity","shopping":"Shopping","public_service":"Public Services","other":"Others"},"dataType":{"none":"%{name} won't access any data in your Cozy","activity":"Your activities","appointment":"Your appointments","bankTransactions":"Your bank transactions","bankAccounts":"Your bank accounts","bill":"Your bills","bloodPressure":"Your blood pressure","calendar":"Your calendars","certificate":"Your certificates","commit":"Your commits","consumption":"Your consumption","contact":"Your contacts","contract":"Your contracts","courseMaterial":"Your course materials","document":"Your documents","event":"Your events","family":"Your family informations","geopoint":"Your geolocations","heartbeat":"Your heartbeats","home":"Your home informations","phonecommunicationlog":"Your phone communications log","picture":"Your pictures","podcast":"Your podcasts","profile":"Your client profile","refund":"Your refunds","sinister":"Your sinisters","sleepTime":"Your sleep time","stepsNumber":"Your number of steps","temperature":"Your temperature data","travelDate":"Your travel dates","tweet":"Your tweets","videostream":"Your videos","weight":"Your weights"},"loading":{"initial":"Loading accounts...","working":"Loading"},"validation":{"exact_length":"It's must be made up of %{length} characters exactly.","max_length":"The length maximum is %{length} characters.","min_length":"It should contain at least %{length} characters.","pattern":"The value must match a specific pattern: %{pattern}"},"update":{"title":"An update is available for this service.","regular":"Perform this update to keep fetching your data and to have the latest features","blocking":"Update it to keep fetching your data","CTA":"Update"},"error":{"initial":"Something went wrong when fetching your connectors and informations. Please refresh the page.","LOGIN_FAILED":"Bad credentials. Check the konnector fields and run the connection again.","UNKNOWN_ERROR":"Something unexpected happened while running the connector","JOB_TIMEOUT":"The connector execution was too long","button":{"reload":"Refresh now"}},"tutorial":{"cozy_collect":{"title":"Automate your data gathering","text":"They will be stored in your Cozy, you won't have to look for them anymore.","button":"Next"},"home":{"apps":{"button":"Next","text":"Easily manage your digital life (files, pictures, bank accounts, ...)","title":"Access to all your Cozy applications"},"services":{"button":"Let's configure my accounts","text":"They will be stored in your Cozy, you won't have to look for them anymore.","title":"Automate your data gathering"}},"menu_apps":{"title":"Your Cozy is so much more than a simple data aggregator","text":"Open the Applications menu to discover all the features your Cozy has to offer.","button":"Discover my Apps"}},"maintenance":{"icon":"This connector is under maintenance","service":"Service interrupted","problem":"%{konnectorName} doesn't allow your Cozy to access your data","title":"What is going on ?"},"connector":{"debug":{"successMessage":"This konnector is for debug purpose only, this is an additionnal custom success message."},"empty":"No connectors configured","noAccount":"No account","add":"Add a service","update":"Update available","no-connectors-connected":"You have no account connected yet","get-info":"Get automatically all your informations in your Cozy","connect-account":"Connect my accounts","logo":{"alt":"%{name} logo"},"enedis":{"description":{"service":"Recover your Linky data by connecting your Enedis account. You must have a Linky meter and have first created your Enedis account (on the [Enedis website](https://espace-client-connexion.enedis.fr/auth/UI/Login?realm=particuliers). This connector is provided by Fing for the MesInfos project. It retrieves the data from your electricity contract and downloads your electricity consumption the day before. This connector is running on your Cozy and the Fing will have no access to this data."}},"orange":{"message":{"delay":"Once connected, a demand to extract your data will be sent to Orange information system. These data will be available within 15 days. You data will be updated automatically, every 15 days."}},"orangemobile":{"description":{"connector":"In the context of 'MesInfos', Orange allows you to localize your phone regularly.\n\n**Data collection needs your express agreement**\n\nThis agreement may be revoked at any time by this data connector.\n\nBy clicking on \"Agree\", you give your consent to collect your phone's position, every 30 minutes. Information gathered will on be : \n<ul><li>Date and time of this location.</li><li>Location data of the closest radio antenna at the time of collect.</li></ul>Collected data by Orange after you agreement will be available only in your Cozy that you have been assigned in context of  « Mes Infos ». They will be added to location data already stored in call logs.","service":"This connector will download data from your Orange account on your Cozy. It will automatically download the call logs from your phone. Thus call logs include your phone number, your corresponding's phone number, date and time of this call and location data of the closest radio antenna at the time of collect.\n\nYou will be able to use these data in different apps in your Cozy, for example \"Mapping My Life\" (available soon on the Cozy Store).","field":{"agreement":"Do you agree that Orange localizes regularly your phone in context of  « Mes Infos » ?"}}},"orangevideos":{"description":{"service":"This connector will download data from your Orange account on your Cozy. It will automatically download the list of movies you downloaded in free (TV Replay) or paid VOD from 01/01/2015 (adult contents are not included).\n\nYou will be able to use these data in different apps in your Cozy, for example \"My Movies Music\" (available soon on the Cozy Store)."}},"axabanque102":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"banquepopulaire":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"barclays136":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"bforbank97":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"bnpparibas82":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"boursorama83":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"bred":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"caatlantica3":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"caissedepargne1":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"carrefour159":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"casden173":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"cdngroup109":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"cdngroup88":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"cic45":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"cic63":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"comptenickel168":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"creditcooperatif148":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"creditmaritime":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"fortuneo84":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"hellobank145":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"hsbc119":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo).","connector":"The secret answer is [asked by HSBC](https://www.hsbc.fr/1/2/hsbc-france/particuliers/connexion) when you connect without double authentication. Example: what is the name of your pet?"}},"ingdirect95":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"labanquepostale44":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"lcl143":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"lcl144":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"lcl146":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"monabanq96":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"societegenerale":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}}},"Queue":{"header":"Syncing accounts:","header_mobile":"%{done} of %{total}","header_done":"Synced %{done} out of %{total}","item":{"pending":"Pending"},"close":"Close"},"services":{"title":"My services"},"status":{"interrupted":"INTERRUPTED SERVICE","edf":{"maintenance":"EDF's information system has changed and the related data access doesn't work anymore. This konnector is not currently able to get back your data from EDF. We are trying to restore the situation and we will notice you when it will be fixed. [Learn more](%{supportLink})","support_link":"https://support.cozy.io/article/123-le-connecteur-edf-ne-fonctionne-pas"}},"tile":{"konnector":{"lastSyncDate":{"format":"MMM DD"}}}};

/***/ }),

/***/ "7iWW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-bill_0d0ca64da8d7e0e8bff594738075cf11",
  "use": "icon-bill_0d0ca64da8d7e0e8bff594738075cf11-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-bill_0d0ca64da8d7e0e8bff594738075cf11\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#C2F0D1\" d=\"M9 47c-1.105 0-2-.898-2-2.006V3.006C7 1.898 7.89 1 8.991 1H29l12 12v32c0 1.105-.892 2-2 2H9z\" /><path fill=\"#35CE68\" d=\"M29 1v9.991A2.01 2.01 0 0 0 31.009 13H41L29 1z\" /><path stroke=\"#35CE68\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M35 41H13V17h22zM13 22h22m-22 6h22m-22 6h22M20 17v24\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "8CvS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_TYPES", function() { return ERROR_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_NEEDED_ERRORS_TYPES", function() { return UPDATE_NEEDED_ERRORS_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO_FA_ERRORS", function() { return TWO_FA_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KONNECTORS_DOCTYPE", function() { return KONNECTORS_DOCTYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeAll", function() { return subscribeAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFolderPermission", function() { return addFolderPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKonnectorLoginError", function() { return isKonnectorLoginError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKonnectorTwoFAError", function() { return isKonnectorTwoFAError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKonnectorUserError", function() { return isKonnectorUserError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKonnectorKnownError", function() { return isKonnectorKnownError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKonnectorUpdateNeededError", function() { return isKonnectorUpdateNeededError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildKonnectorError", function() { return buildKonnectorError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPendingUpdate", function() { return hasPendingUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMostAccurateErrorKey", function() { return getMostAccurateErrorKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorTitle", function() { return getErrorTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKonnectorMessage", function() { return getKonnectorMessage; });
/* harmony import */ var lib_realtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BI92");
/* konnector lib ready to be added to cozy-client-js */

const ERROR_TYPES = {
  CHALLENGE_ASKED: 'CHALLENGE_ASKED',
  LOGIN_FAILED: 'LOGIN_FAILED',
  MAINTENANCE: 'MAINTENANCE',
  NOT_EXISTING_DIRECTORY: 'NOT_EXISTING_DIRECTORY',
  USER_ACTION_NEEDED: 'USER_ACTION_NEEDED',
  VENDOR_DOWN: 'VENDOR_DOWN',
  DISK_QUOTA_EXCEEDED: 'DISK_QUOTA_EXCEEDED'
};
const UPDATE_NEEDED_ERRORS_TYPES = {
  TERMS_VERSION_MISMATCH: 'TERMS_VERSION_MISMATCH'
};
const TWO_FA_ERRORS = ['USER_ACTION_NEEDED.TWOFA_EXPIRED', 'USER_ACTION_NEEDED.WRONG_TWOFA_CODE'];
const KONNECTORS_DOCTYPE = 'io.cozy.konnectors';
function subscribeAll(cozy) {
  return lib_realtime__WEBPACK_IMPORTED_MODULE_0__["subscribeAll"](cozy, KONNECTORS_DOCTYPE);
}

function patchFolderPermission(cozy, konnector, folderId = null) {
  const slug = konnector.attributes ? konnector.attributes.slug : konnector.slug;
  const saveFolder = folderId ? {
    type: 'io.cozy.files',
    values: [folderId]
  } : {};
  return cozy.fetchJSON('PATCH', `/permissions/konnectors/${encodeURIComponent(slug)}`, {
    data: {
      attributes: {
        permissions: {
          saveFolder: saveFolder
        }
      }
    }
  });
}

function addFolderPermission(cozy, konnector, folderId) {
  return patchFolderPermission(cozy, konnector, folderId);
}
function isKonnectorLoginError(error) {
  return error && error.type && error.type === ERROR_TYPES.LOGIN_FAILED;
}
function isKonnectorTwoFAError(error) {
  return error && error.type && TWO_FA_ERRORS.includes(error.code);
}
function isKonnectorUserError(error) {
  return error && error.type && [ERROR_TYPES.CHALLENGE_ASKED, ERROR_TYPES.DISK_QUOTA_EXCEEDED, ERROR_TYPES.LOGIN_FAILED, ERROR_TYPES.NOT_EXISTING_DIRECTORY, ERROR_TYPES.USER_ACTION_NEEDED].includes(error.type);
}
function isKonnectorKnownError(error) {
  return error && error.type && Object.keys(ERROR_TYPES).includes(error.type);
}
function isKonnectorUpdateNeededError(error) {
  return error && error.type && Object.keys(UPDATE_NEEDED_ERRORS_TYPES).includes(error.type);
}
function buildKonnectorError(message) {
  var error = new Error(message);
  error.type = message.split('.')[0];
  error.code = message;
  return error;
}

const checkLocale = (t, key) => {
  return t(key) !== key;
};

const hasPendingUpdate = konnector => {
  return !!konnector.available_version;
};
const getMostAccurateErrorKey = (t, error, getKey = key => key) => {
  // Legacy. Kind of.
  if (!error.code) return error.message;
  const errorSegments = error.code.split('.');
  let tested = errorSegments;
  let fullKey = getKey(tested.join('.'));

  while (tested.length && !checkLocale(t, fullKey)) {
    tested = tested.slice(0, tested.length - 1);
    fullKey = getKey(tested.join('.'));
  }

  return tested.length ? fullKey : getKey('UNKNOWN_ERROR');
};
const legacyMessages = {
  terms: 'connector'
};
const getErrorTitle = (t, error, getLocaleFn) => t(getMostAccurateErrorKey(t, error, getLocaleFn));
const getKonnectorMessage = (t, konnector, message) => {
  const {
    messages,
    hasDescriptions
  } = konnector;
  const providesMessage = messages && messages.length && messages.includes(message);
  if (providesMessage) return t(`${konnector.slug}.messages.${message}`);
  const providesLegacyMessage = hasDescriptions && hasDescriptions[legacyMessages[message] || message];
  if (providesLegacyMessage) return t(`connector.${konnector.slug}.description.${legacyMessages[message] || message}`);
  return null;
};

/***/ }),

/***/ "8EAv":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"spin":"spin--1tM1P","shake":"shake--2XjZi"};

/***/ }),

/***/ "8MA2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriggerFolderLink", function() { return TriggerFolderLink; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/MKj");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("SH7X");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("y6ex");
/* harmony import */ var ducks_apps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("/n/j");
/* harmony import */ var styles_triggerFolderLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ONtV");
/* harmony import */ var styles_triggerFolderLink__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_triggerFolderLink__WEBPACK_IMPORTED_MODULE_7__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








/**
 * Renders a link only if href prop is provided
 */

var MaybeLink =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MaybeLink, _PureComponent);

  function MaybeLink() {
    _classCallCheck(this, MaybeLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaybeLink).apply(this, arguments));
  }

  _createClass(MaybeLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          href = _this$props.href;
      return href ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: className,
        href: href,
        target: "_parent"
      }, this.props.children) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: className
      }, this.props.children);
    }
  }]);

  return MaybeLink;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

var TriggerFolderLink =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(TriggerFolderLink, _PureComponent2);

  function TriggerFolderLink() {
    _classCallCheck(this, TriggerFolderLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(TriggerFolderLink).apply(this, arguments));
  }

  _createClass(TriggerFolderLink, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this$props2, client, driveApp, receiveApps, _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props2 = this.props, client = _this$props2.client, driveApp = _this$props2.driveApp, receiveApps = _this$props2.receiveApps;

                if (driveApp) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return client.query(client.all('io.cozy.apps'));

              case 4:
                _ref = _context.sent;
                data = _ref.data;
                receiveApps(data);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          driveApp = _this$props3.driveApp,
          label = _this$props3.label,
          folderId = _this$props3.folderId;
      var disabled = !driveApp;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MaybeLink, {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(styles_triggerFolderLink__WEBPACK_IMPORTED_MODULE_7___default.a['col-trigger-folder-link'], {
          'u-silver': disabled,
          'u-c-not-allowed': disabled
        }),
        href: driveApp && "".concat(driveApp.links.related, "#/files/").concat(folderId)
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "u-mr-half",
        icon: "openwith"
      }), label);
    }
  }]);

  return TriggerFolderLink;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    driveApp: Object(ducks_apps__WEBPACK_IMPORTED_MODULE_6__["getApp"])(state.apps, 'drive')
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    receiveApps: function receiveApps(apps) {
      return dispatch(Object(ducks_apps__WEBPACK_IMPORTED_MODULE_6__["receiveApps"])(apps));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(cozy_client__WEBPACK_IMPORTED_MODULE_4__["withClient"])(TriggerFolderLink)));

/***/ }),

/***/ "91CF":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"maintenance-intro":"maintenance-intro--1-SbJ","maintenance-service":"maintenance-service--1ZZfz","maintenance-icon":"maintenance-icon--2QHy-"};

/***/ }),

/***/ "9pOX":
/***/ (function(module) {

module.exports = {"app":{"logo":{"alt":"Logo de %{name}"}},"date":{"format":"DD/MM/YYYY","placeholder":"dd/mm/yyyy"},"manifest":{"name":"Accueil","short_description":"Cozy Collect est l'application de récupération de vos données personnelles disponible sur Cozy.","long_description":"Avec Cozy Collect, vous pouvez facilement :\n\n * Télécharger les documents de tous vos fournisseurs\n * Configurer la fréquence à laquelle Cozy va récupérer vos factures\n * Accéder directement aux documents récupérés par votre Cozy","changes":"Cela ne vous aura pas échappé, le Store est arrivé dans Cozy !\nNous en avons profité pour améliorer Collect :\n\n * Adaptation au Store.\n * Fusion des tuiles : lorsque vous avez plusieurs comptes pour un même fournisseur ces derniers sont désormais réunis sous la tuile de ce fournisseur.\n * Amélioration des pages des connecteurs."},"add_service":"Ajouter","account":{"config":{"default_folder":"/Administratif/%{name}","optional":"(Optionnel)","title":"Connectez votre compte %{name}","data":{"title":"Données collectées :","service":{"description":"Description du service :"}},"tabs":{"sync":"Synchronisation","account":"Compte","data":"Données collectées"}},"disconnect":{"title":"Déconnexion","description":"Vous serez déconnecté de ce compte, mais les données importées seront conservées"},"form":{"title":"Compte","label":{"firstname":"Prénom","lastname":"Nom","login":"Identifiant","consumerKey":"Clé client","consumerSecret":"Secret client","appKey":"Clé de l'application","appSecret":"Secret de l'application","tricountUrl":"URL Tricount","cardNumber":"Numéro de carte","dob":"Date de naissance","password":"Mot de passe","email":"Mail","bank_identifier":"Identifiant bancaire (optionnel)","profileName":"Nom de Profil","identifier":"Identifiant","new_identifier":"Identifiant","secret":"Mot de passe","answer":"Réponse secrète","access_token":"Jeton d'accès","accessTokenSecret":"Secret du jeton d'accès","apikey":"Clé d'API","phoneNumber":"Numéro de téléphone","folderPath":"Emplacement du dossier","namePath":"Nom du dossier","authCode":"Code d'authentification","accountName":"Nom du compte","loginUrl":"URL d'authentification","token":"Jeton","agreement":"J'accepte","refreshToken":"Mettre à jour le jeton","timeout":"Délai (ms)","branchName":"Agence","code":"Code confidentiel"},"placeholder":{"password":"Le mot de passe utilisé pour vous connecter au service","update_password":"Mettre à jour le mot de passe","accountName":"Exemple: Compte personnel","namePath":"Example : Factures de Camille. Le dossier par défaut sera votre identifiant."},"button":{"connect":"Se connecter","cancel":"Annuler","save":"Sauvegarder","disconnect":"Déconnecter ce compte","delete":"Supprimer ce compte","advanced":"Configuration avancée","synchronize":"Mettre à jour maintenant"}},"folder":{"title":"Paramètres du dossier associé","withoutSettings":{"title":"Dossier associé"},"link":"Ouvrir le dossier dans Cozy Drive","changePath":"Changer le dossier","error":"Mince, quelque chose c'est mal passé. Ne vous inquiétez pas, vos fichiers sont toujours là.","close":"fermer","warning":"Vous êtes en train de modifier le dossier de votre connecteur","oldFiles":"Toutes vos anciennes factures seront déplacées dans votre nouveau dossier.","newFiles":"Toutes vos nouvelles factures seront téléchargées dans votre nouveau dossier.","newPath":"Tout s'est bien passé, le nouveau dossier de votre compte %{name} est :","placeholder":{"administrative":"Administratif","photos":"Photos"}},"success":{"title":{"connect":"Configuration réussie !","update":"Votre compte %{name} est mis à jour !"},"banksLinkText":"Voir mes comptes dans %{appName}","driveLinkText":"Ouvrir le dossier dans Cozy Drive","button":"Fermer"},"message":{"folder":{"title":"Dossier","link":"Ouvrir le dossier dans Cozy Drive"},"success":{"connect":"Vos données existantes seront disponibles dans votre Cozy dans quelques minutes et les prochaines suivront automatiquement.","update":"Votre compte %{name} a été mis à jour avec succès.","delete":"Compte supprimé avec succès."},"syncing":{"bill":"Vos factures sont en cours de synchronisation et seront disponibles au chemin suivant :"},"synced":{"title":"Mise à jour de vos données","cron":"Fréquence de mise à jour : %{frequency}","cron_hourly":"une fois par heure","cron_daily":"une fois par jour","cron_weekly":"hebdomadaire","cron_monthly":"une fois par mois","cron_undefined":"manuellement","syncing":"en cours…","unknown":"indéterminée","last_sync":"Dernière mise à jour : **%{date}**","date_format":"Le D MMMM YYYY [à] HH[:]mm","bill":"Retrouvez vos données dans l'application Cozy Drive à l'emplacement :"},"error":{"server":"Une erreur est survenue, vos identifiants n'ont pas pu être enregistrés. Pouvez-vous recommencer ?","bad_credentials":"Votre identifiant et/ou mot de passe ne sont pas corrects.","delete":"Une erreur est survenue, vos identifiants n'ont pas pu être enregistrés. Pouvez-vous recommencer ?"}},"forceConnection":"Relancer maintenant","editor_detail":"Service développé par %{editor}"},"account_picker":{"add_account_button":{"label":"Ajouter un compte"}},"apps":{"title":"Mes applications"},"connection":{"CTA":{"twofa_failed":"Relancer maintenant"},"error":{"default":{"title":"Une erreur est survenue","description":"Un problème semble s'être produit pendant la tentative de connexion à %{name}. Merci de revérifier vos informations de compte, de consulter notre aide en ligne ou de nous contacter à contact@cozycloud.cc"},"DISK_QUOTA_EXCEEDED":{"title":"Espace Cozy plein","description":"Actuellement, le service ne peut plus récupérer vos documents.\nLibérez de l'espace en supprimant des fichiers ou rendez-vous dans **Paramètres > Stockage** pour augmenter l'espace de stockage de votre Cozy"},"CHALLENGE_ASKED":{"title":"Second facteur d’authentification demandé","description":"Un second facteur d’authentification que nous ne gérons pas encore est demandé. Vous pouvez essayer de vous connecter directement sur le site [%{name}](%{link}) avant de réessayer."},"LOGIN_FAILED":{"title":"Mauvais identifiants","description":"Données de connexion incorrectes. Vérifiez les données de connexion dans le connecteur et relancez la connexion."},"LOGIN_FAILED.NEEDS_SECRET":{"title":"Informations requise","description":"Un champ additionnel doit être rempli pour vérifier vos identifiants."},"LOGIN_FAILED.TOO_MANY_ATTEMPTS":{"title":"Temporairement bloqué","description":"Trop de tentatives erronées ont eu lieu. Merci de modifier votre mot de passe sur le site [%{name}](%{link}) et de mettre à jour le connecteur ensuite."},"MAINTENANCE":{"title":"Site non disponible","description":"Il semble que le site [%{name}](%{link}) soit indisponible. Merci de relancer ultérieurement ou de consulter notre aide en ligne."},"NOT_EXISTING_DIRECTORY":{"title":"Dossier de destination manquant","description":"Il semble que le dossier de destination pour ce compte ait été supprimé. Merci de le restaurer en déconnectant ce compte puis en le reconnectant à nouveau."},"UNKNOWN_ERROR":{"title":"Erreur de Connexion","description":"Une erreur inconnue est survenue"},"USER_ACTION_NEEDED":{"title":"Action nécessaire chez le fournisseur","description":"Il semble que le site [%{name}](%{link}) ait besoin que vous vous y authentifiiez pour faire une action spécifique. Merci de relancer le connecteur une fois cette action effectuée."},"USER_ACTION_NEEDED.OAUTH_OUTDATED":{"title":"Actualisation de l'accès requis","description":"Il semble que le site [%{name}](%{link}) demande d'autoriser à nouveau le connecteur. Merci de déconnecter puis reconnecter votre compte %{name}. Aucune donnée ne sera perdue."},"USER_ACTION_NEEDED.ACCOUNT_REMOVED":{"title":"Compte client non accessible","description":"Il semble que votre compte ne soit plus actif. Merci de vérifier son statut sur le site [%{name}](%{link}) avant de réessayer."},"USER_ACTION_NEEDED.CHANGE_PASSWORD":{"title":"Renouvellement de mot de passe demandé","description":"Il semble que le site [%{name}](%{link}) ait besoin que vous vous y authentifiiez pour renouveler votre mot de passe. Merci de relancer le connecteur une fois cette action effectuée."},"USER_ACTION_NEEDED.PERMISSIONS_CHANGED":{"title":"Validation des nouvelles permissions nécessaire","description":"Votre connecteur a été mis à jour et les permissions nécessaires ont changé. Merci de valider les nouvelles permissions avant de relancer le connecteur."},"USER_ACTION_NEEDED.TWOFA_EXPIRED":{"title":"Relancez la connexion au service pour récupérer vos données.","description":"La dernière connexion au service a échoué; merci de la relancer.\nIl vous faudra peut-être renseigner un code de validation."},"USER_ACTION_NEEDED.WRONG_TWOFA_CODE":{"title":"Le code fournis ne semble pas correct","description":"Le code de deux facteurs est incorrect, veuillez recommencer."},"VENDOR_DOWN":{"title":"Service non disponible","description":"Il semble que le service [%{name}](%{link}) ne nous réponde pas dans les temps actuellement. Merci de relancer ultérieurement."},"VENDOR_DOWN.BANK_DOWN":{"title":"Site non disponible","description":"Site non disponible"},"VENDOR_DOWN.LINXO_DOWN":{"title":"Service non disponible","description":"Il semble que le site [%{name}](%{link}) ne nous réponde pas dans les temps actuellement. Merci de relancer ultérieurement."}}},"intent":{"konnector":{"install":{"error":{"message":"Le connecteur ne peut pas être installé"}}},"service":{"return":"Revenir à la liste des connecteurs","success":{"button":{"label":"Fermer"}},"error":{"initialization":"L'initialisation du service a échoué.","creation":"Impossible de créer le compte, il y a eu une erreur.","cause":"Raison : %{error}"},"cancel":"Annuler","terminate":"Terminer"}},"field":{"password":{"visibility":{"hide":"Masquer","show":"Afficher","title":{"hide":"Masquer le mot de passe","show":"Afficher le mot de passe"}}}},"nav":{"services":"Services installés"},"category":{"all":"Tous","banking":"Banques","health":"Santé","insurance":"Assurance","transport":"Voyage et transport","social":"Social","isp":"Internet","telecom":"Mobile","energy":"Énergie","host_provider":"Hébergeur","productivity":"Productivité","shopping":"Shopping","public_service":"Services publics","other":"Autres"},"dataType":{"none":"%{name} n'accèdera à aucune donnée de votre Cozy","activity":"Vos activités","appointment":"Vos rendez-vous","bankTransactions":"Vos mouvements bancaires","bankAccounts":"Vos comptes bancaires","bill":"Vos factures","bloodPressure":"Votre pression artérielle","calendar":"Vos calendriers","certificate":"Vos attestations","commit":"Vos commits","consumption":"Votre consommation","contact":"Vos contacts","contract":"Vos contrats","courseMaterial":"Vos supports de cours","document":"Vos documents","event":"Vos évènements","family":"Informations sur votre foyer","geopoint":"Vos géolocalisations","heartbeat":"Votre rythme cardiaque","home":"Informations sur votre domicile","phonecommunicationlog":"Votre journal d'appels","picture":"Vos images","podcast":"Vos podcasts","profile":"Votre profil client","refund":"Vos remboursements","sinister":"Vos sinistres","sleepTime":"Votre temps de sommeil","stepsNumber":"Vos nombres de pas","temperature":"Vos données de température","travelDate":"Vos séjours et voyages","tweet":"Vos tweets","videostream":"Vos vidéos","weight":"Votre poids"},"loading":{"initial":"Chargement des comptes…","working":"Chargement"},"validation":{"exact_length":"La valeur doit faire exactement %{length} caractères.","max_length":"La longueur maximum est de %{length} caractères.","min_length":"La valeur doit contenir au moins %{length} caractères.","pattern":"La valeur doit respecter un format spécifique : %{pattern}"},"update":{"title":"Une mise à jour est disponible pour ce service.","regular":"Effectuez la mise à jour pour continuer à récupérer vos données et profiter des dernières fonctionnalités","blocking":"Mettez-le à jour pour continuer à récupérer vos données","CTA":"Mettre à jour"},"error":{"initial":"Quelque chose s’est mal passé pendant la récupération de vos connecteurs et de vos informations. Merci de recharger la page.","LOGIN_FAILED":"Données de connexion incorrectes. Vérifiez les données de connexion dans le connecteur et relancez la connexion.","UNKNOWN_ERROR":"Quelque-chose d’inattendu s‘est produit pendant l’exécution du connecteur","JOB_TIMEOUT":"L’exécution du connecteur a pris trop de temps","button":{"reload":"Rechargez la page maintenant"}},"tutorial":{"cozy_collect":{"title":"Automatisez la récupération de vos données","text":"Elles seront conservées dans votre Cozy pour que vous n'ayez plus à les chercher.","button":"Suivant"},"home":{"apps":{"button":"Suivant","text":"Gérez facilement toute votre vie numérique (photos, fichiers, compte bancaires, …)","title":"Retrouvez toutes les applications de votre Cozy"},"services":{"button":"Je connecte mes comptes","text":"Elles seront conservées dans votre Cozy pour que vous n'ayez plus à les chercher.","title":"Automatisez la récupération de vos données"}},"menu_apps":{"title":"Votre Cozy est bien plus qu’un simple agrégateur de données","text":"Ouvrez le menu Applications pour découvrir toutes les possibilités offertes par votre Cozy.","button":"Je découvre mes Applications"}},"maintenance":{"icon":"Ce connecteur est en cours de maintenance","service":"Service interrompu","problem":"%{konnectorName} ne permet pas à votre Cozy d'accéder à vos données","title":"Que se passe-t-il ?"},"connector":{"debug":{"successMessage":"Ce konnecteur est utilisé uniquement pour déboguer l'application, ceci est un message de succès additionnel."},"empty":"Pas de connecteur configuré","noAccount":"Aucun compte","add":"Ajouter un service","update":"Mise à jour dispo.","no-connectors-connected":"Vous n'avez pas encore de compte connecté !","get-info":"Récupérez automatiquement toutes vos informations dans votre Cozy.","connect-account":"Connecter mes comptes","logo":{"alt":"Logo de %{name}"},"enedis":{"description":{"service":"Retrouvez vos données Linky en connectant votre compte Enedis. Vous devez avoir un compteur Linky et avoir préalablement créé votre compte Enedis (sur [Enedis website](https://espace-client-connexion.enedis.fr/auth/UI/Login?realm=particuliers). Ce connecteur est proposé par Fing pour le projet MesInfos. Il récupère les données de votre contrat d'électricité et télécharge vos consommations électriques de la veille. Ce connecteur fonctionne sur votre Cozy et Fing n'aura aucun accès à vos données."}},"orange":{"message":{"delay":"Une demande d’extraction de vos données a été émise vers le système d’information d’Orange. Ces données seront disponibles sous 7 jours. Par la suite, vos données seront mises à jour automatiquement dans votre espace Cozy Cloud, à intervalles de 7 jours."}},"orangemobile":{"description":{"connector":"**De manière optionnelle et dans le cadre du pilote « Mes Infos »**, Orange vous offre aussi la possibilité de localiser votre téléphone mobile de manière régulière.\n\n**Le recueil de ces données nécessite votre accord explicite.**\n\nCet accord pourra être révoqué à tout moment via ce même connecteur de données.\n\nEn cliquant sur « Accepter », vous donnerez votre accord pour qu’une localisation de votre téléphone mobile soit effectuée à compter de ce jour, deux fois par heure. Les informations recueillies contiendront uniquement :\n<ul><li>La date et l’heure de cette localisation.</li><li>Les coordonnées géographiques de l’antenne radio à laquelle le mobile est rattaché au moment de la localisation.</li></ul>Les données récoltées par Orange  seront accessibles, après votre accord, uniquement dans le Cozy Cloud qui vous a été attribué dans le cadre du pilote « Mes Infos ». Elles viendront compléter les informations de localisation déjà présentes dans les comptes rendus d’appels.","service":"Les données mises à disposition par Orange via ce connecteur contiennent les comptes rendus des appels émis et reçus depuis votre mobile à partir du 01/07/2016. Ces comptes rendus incluent votre numéro, celui de votre correspondant, l’heure et la durée de l’appel, ainsi que la localisation géographique de l’antenne radio à laquelle le mobile était rattaché au moment de l’appel.\n\nVous pourrez utiliser ces données dans différentes applications de votre Cozy Cloud, par exemple « Mapping My Life » (disponibilité prochaine sur le Cozy Store)","field":{"agreement":"Acceptez-vous qu’Orange localise régulièrement votre téléphone mobile dans le cadre du pilote « Mes Infos » ?"}}},"orangevideos":{"description":{"service":"Les données mises à disposition par Orange via ce connecteur contiennent la liste des films que vous avez visionnés à partir du 01/01/2015 en VOD payante ou gratuite (Replay TV) à partir de votre Livebox (à l’exception des contenus « adulte »). \n\nVous pourrez utiliser ces données dans différentes applications de votre Cozy, par exemple « La Musique de mes Films » (disponibilité prochaine sur le Cozy Store) "}},"axabanque102":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"banquepopulaire":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"barclays136":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo). "}},"bforbank97":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"bnpparibas82":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"boursorama83":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"bred":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"caatlantica3":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"caissedepargne1":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"carrefour159":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"casden173":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"cdngroup109":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"cdngroup88":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"cic45":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"cic63":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"comptenickel168":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"creditcooperatif148":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"creditmaritime":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"fortuneo84":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"hellobank145":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"hsbc119":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo).","connector":"La réponse secrète est [demandée par HSBC](https://www.hsbc.fr/1/2/hsbc-france/particuliers/connexion) lors d'une connexion sans double authentification. Exemple: quel est le nom de votre animal de compagnie? "}},"ingdirect95":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"labanquepostale44":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"lcl143":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"lcl144":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"lcl146":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"monabanq96":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}},"societegenerale":{"description":{"service":"La connexion à votre banque est opérée et sécurisée par notre partenaire Linxo. [En savoir plus](https://support.cozy.io/article/147-linxo)."}}},"Queue":{"header":"Synchronisation :","header_mobile":"%{done} sur %{total}","header_done":"Synchronisé %{done} sur %{total}","item":{"pending":"En cours"},"close":"Fermer"},"services":{"title":"Mes services"},"status":{"interrupted":"SERVICE INTERROMPU","edf":{"maintenance":"EDF a modifié son système d'information et son accès à vos données ne fonctionne plus. Ce connecteur n'est donc pas actuellement en mesure de récupérer vos données personnelles détenues par EDF. Nous tentons de rétablir la situation et vous informerons dès que le service sera rétabli. [En savoir plus](%{supportLink})","support_link":"https://support.cozy.io/article/123-le-connecteur-edf-ne-fonctionne-pas"}},"tile":{"konnector":{"lastSyncDate":{"format":"DD MMM"}}}};

/***/ }),

/***/ "AEoj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticateWithCordova", function() { return authenticateWithCordova; });
/* global prompt */
const hasCordovaPlugin = () => {
  return window.cordova !== undefined && window.cordova.InAppBrowser !== undefined;
};

const REGISTRATION_ABORT = 'REGISTRATION_ABORT';
const authenticateWithCordova = url => {
  if (hasCordovaPlugin()) {
    return new Promise((resolve, reject) => {
      const target = '_blank';
      const options = 'clearcache=yes,zoom=no';
      const inAppBrowser = window.cordova.InAppBrowser.open(url, target, options);

      const removeListener = () => {
        inAppBrowser.removeEventListener('loadstart', onLoadStart);
        inAppBrowser.removeEventListener('exit', onExit);
      };

      const onLoadStart = ({
        url
      }) => {
        const accessCode = /\?access_code=(.+)$/.test(url);
        const state = /\?state=(.+)$/.test(url);

        if (accessCode || state) {
          resolve(url);
          removeListener();
          inAppBrowser.close();
        }
      };

      const onExit = () => {
        reject(new Error(REGISTRATION_ABORT));
        removeListener();
        inAppBrowser.close();
      };

      inAppBrowser.addEventListener('loadstart', onLoadStart);
      inAppBrowser.addEventListener('exit', onExit);
    });
  } else {
    /**
     * for dev purpose:
     * In oauth workflow, the server displays an authorization page
     * User must accept to give permission then the server gives an url
     * with query parameters used by cozy-client-js to initialize itself.
     *
     * This hack let developers open the authorization page in a new tab
     * then get the "access_code" url and paste it in the prompt to let the
     * application initialize and redirect to other pages.
     */
    return new Promise(resolve => {
      setTimeout(() => {
        const token = prompt('Paste the url here:');
        resolve(token);
      }, 10000);
    });
  }
};

/***/ }),

/***/ "Acww":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-warning_899c24925e40cf23e557551cb783337f",
  "use": "icon-warning_899c24925e40cf23e557551cb783337f-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" id=\"icon-warning_899c24925e40cf23e557551cb783337f\"><path fill=\"#f42d2c\" d=\"M7.022 1.736c.543-.959 1.428-.95 1.966 0l6.532 11.529c.543.958.094 1.735-1.016 1.735h-13C.399 15-.051 14.215.487 13.265l6.535-11.53zM7.004 13c0 .556.447 1 1 1 .556 0 1-.447 1-1 0-.556-.448-1-1-1-.557 0-1 .448-1 1zm0-7.997v4.994a.994.994 0 0 0 1 1.003c.556 0 1-.449 1-1.003V5.003a.994.994 0 0 0-1-1.003c-.557 0-1 .45-1 1.003z\" fill-rule=\"evenodd\" /></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "Al7w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CozyProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var CozyProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(CozyProvider, _Component);

  function CozyProvider() {
    _classCallCheck(this, CozyProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(CozyProvider).apply(this, arguments));
  }

  _createClass(CozyProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        domain: this.props.domain,
        secure: this.props.secure,
        store: this.props.store || this.context.store,
        client: this.props.client
      };
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children || null;
    }
  }]);

  return CozyProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(CozyProvider, "propTypes", {
  domain: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  secure: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    subscribe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    getState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }),
  client: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired
});

_defineProperty(CozyProvider, "childContextTypes", {
  domain: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  secure: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  client: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
});

_defineProperty(CozyProvider, "contextTypes", {
  store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
});



/***/ }),

/***/ "BI92":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeAll", function() { return subscribeAll; });
/* global WebSocket */
// Custom object wrapping logic to websocket and exposing a subscription
// interface
let cozySocket; // Important, must match the spec,
// see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket

const WEBSOCKET_STATE = {
  OPEN: 1
};
const KEEPALIVE = {
  INTERVAL: 30000,
  METHOD_NAME: 'ping'
};
const NUM_RETRIES = 3;
const RETRY_BASE_DELAY = 1000; // Send a subscribe message for the given doctype trough the given websocket, but
// only if it is in a ready state. If not, retry a few milliseconds later.

function subscribeWhenReady(doctype, socket) {
  if (socket.readyState === WEBSOCKET_STATE.OPEN) {
    try {
      socket.send(JSON.stringify({
        method: 'SUBSCRIBE',
        payload: {
          type: doctype
        }
      }));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(`Cannot subscribe to doctype ${doctype}: ${error.message}`);
      throw error;
    }
  } else {
    setTimeout(() => {
      subscribeWhenReady(doctype, socket);
    }, 10);
  }
}

function getWebsocketProtocol() {
  return window.location.protocol === 'http:' ? 'ws' : 'wss';
}

function keepAlive(socket, interval, message) {
  const keepAliveInterval = setInterval(() => {
    if (socket.readyState === WEBSOCKET_STATE.OPEN) {
      socket.send(message);
    } else {
      clearInterval(keepAliveInterval);
    }
  }, interval);
  return socket;
}

async function connectWebSocket(cozy, onmessage, onclose, numRetries, retryDelay) {
  return new Promise((resolve, reject) => {
    const protocol = getWebsocketProtocol();
    const socket = new WebSocket(`${protocol}:${cozy._url}/realtime/`, 'io.cozy.websocket');

    socket.onopen = () => {
      try {
        socket.send(JSON.stringify({
          method: 'AUTH',
          payload: cozy._token.token
        }));
      } catch (error) {
        return reject(error);
      }

      const windowUnloadHandler = () => socket.close();

      window.addEventListener('beforeunload', windowUnloadHandler);
      socket.onmessage = onmessage;

      socket.onclose = event => {
        window.removeEventListener('beforeunload', windowUnloadHandler);
        if (typeof onclose === 'function') onclose(event, numRetries, retryDelay);
      };

      socket.onerror = error => // eslint-disable-next-line no-console
      console.error(`WebSocket error: ${error.message}`);

      resolve(keepAlive(socket, KEEPALIVE.INTERVAL, `{"method":"${KEEPALIVE.METHOD_NAME}"}`));
    };
  });
}

function getCozySocket(cozy) {
  return new Promise(async (resolve, reject) => {
    if (cozySocket) return resolve(cozySocket);
    const listeners = {};
    let socket;

    const onSocketMessage = event => {
      const data = JSON.parse(event.data);
      const eventType = data.event.toLowerCase();
      const payload = data.payload;

      if (eventType === 'error') {
        const isPingError = data.payload && data.payload.source && data.payload.source.method === KEEPALIVE.METHOD_NAME;
        if (isPingError) return;
        const realtimeError = new Error(payload.title);
        const errorFields = ['status', 'code', 'source'];
        errorFields.forEach(property => {
          realtimeError[property] = payload[property];
        });
        throw realtimeError;
      }

      if (listeners[payload.type] && listeners[payload.type][eventType]) {
        listeners[payload.type][eventType].forEach(listener => {
          listener(payload.doc);
        });
      }
    };

    const onSocketClose = async (event, numRetries, retryDelay) => {
      if (!event.wasClean) {
        // eslint-disable-next-line no-console
        console.warn(`WebSocket closed unexpectedly with code ${event.code} and ${event.reason ? `reason: '${event.reason}'` : 'no reason'}.`);

        if (numRetries) {
          // eslint-disable-next-line no-console
          console.warn(`Reconnecting ... ${numRetries} tries left.`);
          setTimeout(async () => {
            try {
              socket = await connectWebSocket(cozy, onSocketMessage, onSocketClose, --numRetries, retryDelay + 1000);
            } catch (error) {
              // eslint-disable-next-line no-console
              console.error(`Unable to reconnect to realtime. Error: ${error.message}`);
            }
          }, retryDelay);
        }
      }
    };

    try {
      socket = await connectWebSocket(cozy, onSocketMessage, onSocketClose, NUM_RETRIES, RETRY_BASE_DELAY);
    } catch (error) {
      reject(error);
    }

    cozySocket = {
      subscribe: (doctype, event, listener) => {
        if (typeof listener !== 'function') throw new Error('Realtime event listener must be a function');

        if (!listeners[doctype]) {
          listeners[doctype] = {};
          subscribeWhenReady(doctype, socket);
        }

        listeners[doctype][event] = (listeners[doctype][event] || []).concat([listener]);
      },
      unsubscribe: (doctype, event, listener) => {
        if (listeners[doctype] && listeners[doctype][event] && listeners[doctype][event].includes(listener)) {
          listeners[doctype][event] = listeners[doctype][event].filter(l => l !== listener);
        }
      }
    };
    resolve(cozySocket);
  });
} // Returns the Promise of a subscription to a given doctype and document


function subscribe(cozy, doctype, doc, parse = doc => doc) {
  return subscribeAll(cozy, doctype, parse).then(subscription => {
    // We will call the listener only for the given document, so let's curry it
    const docListenerCurried = listener => {
      return syncedDoc => {
        if (syncedDoc._id === doc._id) {
          listener(syncedDoc);
        }
      };
    };

    return {
      onCreate: listener => subscription.onCreate(docListenerCurried(listener)),
      onUpdate: listener => subscription.onUpdate(docListenerCurried(listener)),
      onDelete: listener => subscription.onDelete(docListenerCurried(listener)),
      unsubscribe: () => subscription.unsubscribe()
    };
  });
} // Returns the Promise of a subscription to a given doctype (all documents)

function subscribeAll(cozy, doctype, parse = doc => doc) {
  return getCozySocket(cozy).then(cozySocket => {
    // Some document need to have specific parsing, for example, decoding
    // base64 encoded properties
    const parseCurried = listener => {
      return doc => {
        listener(parse(doc));
      };
    };

    let createListener, updateListener, deleteListener;
    const subscription = {
      onCreate: listener => {
        createListener = parseCurried(listener);
        cozySocket.subscribe(doctype, 'created', createListener);
        return subscription;
      },
      onUpdate: listener => {
        updateListener = parseCurried(listener);
        cozySocket.subscribe(doctype, 'updated', updateListener);
        return subscription;
      },
      onDelete: listener => {
        deleteListener = parseCurried(listener);
        cozySocket.subscribe(doctype, 'deleted', deleteListener);
        return subscription;
      },
      unsubscribe: () => {
        cozySocket.unsubscribe(doctype, 'created', createListener);
        cozySocket.unsubscribe(doctype, 'updated', updateListener);
        cozySocket.unsubscribe(doctype, 'deleted', deleteListener);
      }
    };
    return subscription;
  });
}

/***/ }),

/***/ "CB1n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionContent", function() { return DescriptionContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_ReactMarkdownWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4DAK");
/* harmony import */ var styles_descriptionContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("N0Cd");
/* harmony import */ var styles_descriptionContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_descriptionContent__WEBPACK_IMPORTED_MODULE_3__);




var DescriptionContent = function DescriptionContent(_ref) {
  var cssClassesObject = _ref.cssClassesObject,
      title = _ref.title,
      messages = _ref.messages,
      children = _ref.children,
      hasError = _ref.hasError,
      centerTitle = _ref.centerTitle;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(cssClassesObject)
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: centerTitle ? styles_descriptionContent__WEBPACK_IMPORTED_MODULE_3___default.a['col-account-description-title-centered'] : styles_descriptionContent__WEBPACK_IMPORTED_MODULE_3___default.a['col-account-description-title']
  }, title), messages && messages.length > 0 && messages.map(function (m, i) {
    return m ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(styles_descriptionContent__WEBPACK_IMPORTED_MODULE_3___default.a['col-account-description-message'], hasError && 'errors')
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ReactMarkdownWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      source: m
    })) : null;
  }), children);
};
/* harmony default export */ __webpack_exports__["default"] = (DescriptionContent);

/***/ }),

/***/ "CpzW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-call-log_4cf33585623afb4f23724bc7a06f5746",
  "use": "icon-call-log_4cf33585623afb4f23724bc7a06f5746-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-call-log_4cf33585623afb4f23724bc7a06f5746\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#A9CBF9\" d=\"M9 2C7.344 2 6 3.346 6 5s1.345 3 3 3h32.992c1.107 0 2.007.894 2.007 1.997v36.006A2 2 0 0 1 41.992 48H8.999c-2.756 0-5-2.244-5-5V6c0-.108.018-.208.048-.306A5.007 5.007 0 0 1 9 0h34a1 1 0 1 1 0 2H9zm0 2h32a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z\" /><path fill=\"#297EF1\" d=\"M21.818 22.32a2.52 2.52 0 0 0 .002-3.566l-2.676-2.678a2.528 2.528 0 0 0-3.57 0l-1.47 1.468a3.781 3.781 0 0 0-.474 4.762 58.547 58.547 0 0 0 16.4 16.398 3.784 3.784 0 0 0 4.762-.474l1.468-1.468a2.522 2.522 0 0 0 0-3.568l-2.676-2.676a2.518 2.518 0 0 0-3.568 0l-.892.89a60.016 60.016 0 0 1-8.198-8.196l.892-.892z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "Dred":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-tweet_199e3823600e73bc8a072d3bc33f5f36",
  "use": "icon-tweet_199e3823600e73bc8a072d3bc33f5f36-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-tweet_199e3823600e73bc8a072d3bc33f5f36\"><g stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" fill-rule=\"evenodd\"><path d=\"M35.75 19.157c-1.387 0-2.715-.203-3.941-.573l-4.51 1.04.576-3.063c-2.083-1.646-3.375-3.943-3.375-6.482C24.5 5.065 29.536 1 35.75 1S47 5.065 47 10.079c0 5.013-5.036 9.078-11.25 9.078zM31.5 7.5H38m-6.5 3H41m-9.5 3H41\" stroke=\"currentColor\" /><path stroke=\"#95999D\" d=\"M32.824 24.054c-1.189.527-2.45.872-3.741 1.025a6.538 6.538 0 0 0 2.862-3.603 13.042 13.042 0 0 1-4.136 1.58A6.497 6.497 0 0 0 23.056 21a6.514 6.514 0 0 0-6.344 7.996 18.49 18.49 0 0 1-13.424-6.804 6.473 6.473 0 0 0-.881 3.274 6.51 6.51 0 0 0 2.896 5.42 6.472 6.472 0 0 1-2.95-.815v.083a6.519 6.519 0 0 0 5.223 6.386 6.55 6.55 0 0 1-2.94.112 6.525 6.525 0 0 0 6.083 4.524 13.083 13.083 0 0 1-8.088 2.787c-.52 0-1.038-.031-1.553-.091a18.443 18.443 0 0 0 9.984 2.926c11.98 0 18.53-9.924 18.53-18.531 0-.282 0-.563-.02-.843a13.287 13.287 0 0 0 3.25-3.37h.002z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "GTEx":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"col-account-connection-data":"col-account-connection-data--1mMdI","col-account-connection-data-access":"col-account-connection-data-access--3ORS6"};

/***/ }),

/***/ "GbhZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_DOCUMENT", function() { return CREATE_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchApps", function() { return fetchApps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCollection", function() { return fetchCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDocument", function() { return fetchDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchReferencedFiles", function() { return fetchReferencedFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTriggers", function() { return fetchTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchKonnectors", function() { return fetchKonnectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDocument", function() { return createDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTrigger", function() { return createTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "launchTrigger", function() { return launchTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDocument", function() { return updateDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDocument", function() { return deleteDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTrigger", function() { return deleteTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFile", function() { return createFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trashFile", function() { return trashFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addReferencedFiles", function() { return addReferencedFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeReferencedFiles", function() { return removeReferencedFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeActionCreator", function() { return makeActionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeFetchMoreAction", function() { return makeFetchMoreAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applySelectorForAction", function() { return applySelectorForAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enhancePropsForActions", function() { return enhancePropsForActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollection", function() { return getCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return getDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCollectionFetched", function() { return isCollectionFetched; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fvjX");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oMPT");
/* harmony import */ var _slices_sharings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("og8P");
/* harmony import */ var _slices_synchronization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("skrj");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const APPS_DOCTYPE = 'io.cozy.apps';
const FETCH_DOCUMENT = 'FETCH_DOCUMENT';
const FETCH_COLLECTION = 'FETCH_COLLECTION';
const LAUNCH_TRIGGER = 'LAUNCH_TRIGGER';
const RECEIVE_DATA = 'RECEIVE_DATA';
const RECEIVE_ERROR = 'RECEIVE_ERROR';
const CREATE_DOCUMENT = 'CREATE_DOCUMENT';
const UPDATE_DOCUMENT = 'UPDATE_DOCUMENT';
const DELETE_DOCUMENT = 'DELETE_DOCUMENT';
const RECEIVE_APP = 'RECEIVE_APP';
const RECEIVE_NEW_DOCUMENT = 'RECEIVE_NEW_DOCUMENT';
const RECEIVE_UPDATED_DOCUMENT = 'RECEIVE_UPDATED_DOCUMENT';
const RECEIVE_DELETED_DOCUMENT = 'RECEIVE_DELETED_DOCUMENT';
const FETCH_REFERENCED_FILES = 'FETCH_REFERENCED_FILES';
const ADD_REFERENCED_FILES = 'ADD_REFERENCED_FILES';
const REMOVE_REFERENCED_FILES = 'REMOVE_REFERENCED_FILES';

const documents = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_APP:
      {
        const apps = action.response && action.response.data;
        if (apps.length === 0) return state;
        return _objectSpread({}, state, {
          [APPS_DOCTYPE]: _objectSpread({}, state[APPS_DOCTYPE], objectifyDocumentsArray(apps))
        });
      }

    case RECEIVE_DATA:
      {
        const {
          data
        } = action.response;
        if (data.length === 0) return state;
        const dataDoctype = getArrayDoctype(data);
        return _objectSpread({}, state, {
          [dataDoctype]: _objectSpread({}, state[dataDoctype], objectifyDocumentsArray(data))
        });
      }

    case RECEIVE_NEW_DOCUMENT:
    case RECEIVE_UPDATED_DOCUMENT:
      {
        const doc = action.response.data[0];
        return _objectSpread({}, state, {
          [doc._type]: _objectSpread({}, state[doc._type], {
            [doc.id]: doc
          })
        });
      }

    case RECEIVE_DELETED_DOCUMENT:
      {
        const deleted = action.response.data[0];
        return _objectSpread({}, state, {
          [deleted._type]: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["removeObjectProperty"])(state[deleted._type], deleted.id)
        });
      }

    case ADD_REFERENCED_FILES:
      return _objectSpread({}, state, {
        'io.cozy.files': _objectSpread({}, state['io.cozy.files'], updateFilesReferences(state['io.cozy.files'], action.ids, action.document))
      });

    case REMOVE_REFERENCED_FILES:
      return _objectSpread({}, state, {
        'io.cozy.files': _objectSpread({}, state['io.cozy.files'], removeFilesReferences(state['io.cozy.files'], action.ids, action.document))
      });

    default:
      return state;
  }
};

const objectifyDocumentsArray = documents => documents.reduce((obj, doc) => _objectSpread({}, obj, {
  [doc.id]: doc
}), {});

const updateFileReference = (
/* eslint-disable-next-line casecamelcase */
_ref, doc) => {
  let {
    relationships: {
      referenced_by
    }
  } = _ref,
      relationships = _objectWithoutProperties(_ref.relationships, ["referenced_by"]),
      file = _objectWithoutProperties(_ref, ["relationships"]);

  return _objectSpread({}, file, {
    relationships: _objectSpread({}, relationships, {
      /* eslint-disable-next-line casecamelcase */
      [referenced_by.data]:
      /* eslint-disable-next-line casecamelcase */
      referenced_by.data === null ? [{
        id: doc.id,
        type: doc.type
      }] :
      /* eslint-disable-next-line casecamelcase */
      [...referenced_by.data, {
        id: doc.id,
        type: doc.type
      }]
    })
  });
};

const updateFilesReferences = (files, newlyReferencedIds, doc) => newlyReferencedIds.reduce((updated, id) => _objectSpread({}, updated, {
  [id]: updateFileReference(files[id], doc)
}), {});

const removeFileReferences = (
/* eslint-disable-next-line casecamelcase */
_ref2, doc) => {
  let {
    relationships: {
      referenced_by
    }
  } = _ref2,
      relationships = _objectWithoutProperties(_ref2.relationships, ["referenced_by"]),
      file = _objectWithoutProperties(_ref2, ["relationships"]);

  return _objectSpread({}, file, {
    relationships: _objectSpread({}, relationships, {
      /* eslint-disable-next-line casecamelcase */
      [referenced_by.data]: referenced_by.data.filter(rel => rel.type !== doc.type && rel.id !== doc.id)
    })
  });
};

const removeFilesReferences = (files, removedIds, doc) => removedIds.reduce((updated, id) => _objectSpread({}, updated, {
  [id]: removeFileReferences(files[id], doc)
}), {});

const getDoctype = ({
  _type: doctype
}) => {
  // TODO: don't know why the stack returns 'file' here..
  if (doctype === 'file') {
    return 'io.cozy.files';
  }

  return doctype;
};

const getArrayDoctype = documents => getDoctype(documents[0]); // collection reducers


const collectionInitialState = {
  type: null,
  options: {},
  fetchStatus: 'pending',
  lastFetch: null,
  hasMore: false,
  count: 0,
  ids: []
};

const collection = (state = collectionInitialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTION:
    case FETCH_REFERENCED_FILES:
      return _objectSpread({}, state, {
        type: action.doctype || 'io.cozy.files',
        options: action.options,
        fetchStatus: action.skip > 0 ? 'loadingMore' : 'loading'
      });

    case RECEIVE_APP:
    case RECEIVE_DATA:
      {
        const response = action.response;
        return _objectSpread({}, state, {
          fetchStatus: 'loaded',
          lastFetch: Date.now(),
          hasMore: response.next !== undefined ? response.next : state.hasMore,
          count: response.meta && response.meta.count ? response.meta.count : response.data.length,
          ids: !action.skip ? response.data.map(doc => doc.id) : [...state.ids, ...response.data.map(doc => doc.id)]
        });
      }

    case ADD_REFERENCED_FILES:
      return _objectSpread({}, state, {
        type: 'io.cozy.files',
        count: state.count + action.ids.length,
        ids: [...state.ids, ...action.ids]
      });

    case REMOVE_REFERENCED_FILES:
      return _objectSpread({}, state, {
        count: state.count - action.ids.length,
        ids: state.ids.filter(id => action.ids.indexOf(id) === -1)
      });

    case RECEIVE_ERROR:
      return _objectSpread({}, state, {
        fetchStatus: 'failed'
      });

    case RECEIVE_NEW_DOCUMENT:
      return _objectSpread({}, state, {
        ids: [...state.ids, action.response.data[0].id]
      });

    case RECEIVE_DELETED_DOCUMENT:
      return _objectSpread({}, state, {
        ids: state.ids.filter(id => id !== action.response.data[0].id)
      });

    default:
      return state;
  }
};

const collections = (state = {}, action) => {
  const applyUpdate = (collections, updateAction) => updateAction.updateCollections.reduce((updated, name) => _objectSpread({}, updated, {
    [name]: collection(collections[name], action)
  }), {});

  switch (action.type) {
    case FETCH_COLLECTION:
    case FETCH_REFERENCED_FILES:
    case ADD_REFERENCED_FILES:
    case REMOVE_REFERENCED_FILES:
    case RECEIVE_APP:
    case RECEIVE_DATA:
    case RECEIVE_ERROR:
      if (!action.collection) {
        return state;
      }

      return _objectSpread({}, state, {
        [action.collection]: collection(state[action.collection], action)
      });

    case RECEIVE_NEW_DOCUMENT:
    case RECEIVE_DELETED_DOCUMENT:
      if (!action.updateCollections) {
        return state;
      }

      return _objectSpread({}, state, applyUpdate(state, action));

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  collections,
  documents,
  sharings: _slices_sharings__WEBPACK_IMPORTED_MODULE_2__["default"],
  synchronization: _slices_synchronization__WEBPACK_IMPORTED_MODULE_3__["default"]
}));
const fetchApps = (name, options = {}, skip = 0) => ({
  types: [FETCH_COLLECTION, RECEIVE_APP, RECEIVE_ERROR],
  collection: name,
  doctype: 'io.cozy.apps',
  options,
  skip,
  promise: client => client.fetchApps(name, options, skip)
});
const fetchCollection = (name, doctype, options = {}, skip = 0) => ({
  types: [FETCH_COLLECTION, RECEIVE_DATA, RECEIVE_ERROR],
  collection: name,
  doctype,
  options,
  skip,
  promise: client => client.fetchCollection(name, doctype, options, skip)
});
const fetchDocument = (doctype, id, options = {}) => ({
  types: [FETCH_DOCUMENT, RECEIVE_DATA, RECEIVE_ERROR],
  doctype,
  id,
  options,
  promise: client => client.fetchDocument(doctype, id)
});
const fetchReferencedFiles = (doc, skip = 0) => ({
  types: [FETCH_REFERENCED_FILES, RECEIVE_DATA, RECEIVE_ERROR],
  collection: `${doc._type}/${doc.id}#files`,
  document: doc,
  options: {},
  skip,
  promise: client => client.fetchReferencedFiles(doc, skip)
});
const fetchTriggers = (name, worker, options = {}, skip = 0) => ({
  types: [FETCH_COLLECTION, RECEIVE_DATA, RECEIVE_ERROR],
  collection: name,
  doctype: 'io.cozy.triggers',
  options,
  skip,
  promise: client => client.fetchTriggers(name, worker, options, skip)
});
const fetchKonnectors = (name, options = {}, skip = 0) => ({
  types: [FETCH_COLLECTION, RECEIVE_DATA, RECEIVE_ERROR],
  collection: name,
  doctype: 'io.cozy.konnectors',
  options,
  skip,
  promise: client => client.fetchKonnectors(name, options, skip)
});
const createDocument = (doctype, doc, actionOptions = {}) => _objectSpread({
  types: [CREATE_DOCUMENT, RECEIVE_NEW_DOCUMENT, RECEIVE_ERROR],
  doctype,
  document: doc,
  promise: client => client.createDocument(doctype, doc)
}, actionOptions);
const createTrigger = (doc, actionOptions = {}) => _objectSpread({
  types: [CREATE_DOCUMENT, RECEIVE_NEW_DOCUMENT, RECEIVE_ERROR],
  document: doc,
  promise: client => client.createTrigger(doc)
}, actionOptions);
const launchTrigger = (trigger, actionOptions = {}) => _objectSpread({
  types: [LAUNCH_TRIGGER, RECEIVE_NEW_DOCUMENT, RECEIVE_ERROR],
  trigger: trigger,
  promise: client => client.launchTrigger(trigger)
}, actionOptions);
const updateDocument = (doc, actionOptions = {}) => _objectSpread({
  types: [UPDATE_DOCUMENT, RECEIVE_UPDATED_DOCUMENT, RECEIVE_ERROR],
  document: doc,
  promise: client => client.updateDocument(doc)
}, actionOptions);
const deleteDocument = (doc, actionOptions = {}) => _objectSpread({
  types: [DELETE_DOCUMENT, RECEIVE_DELETED_DOCUMENT, RECEIVE_ERROR],
  document: doc,
  promise: client => client.deleteDocument(doc)
}, actionOptions);
const deleteTrigger = (doc, actionOptions = {}) => _objectSpread({
  types: [DELETE_DOCUMENT, RECEIVE_DELETED_DOCUMENT, RECEIVE_ERROR],
  document: doc,
  promise: client => client.deleteTrigger(doc)
}, actionOptions);
const createFile = (file, dirID, actionOptions = {}) => _objectSpread({
  types: [CREATE_DOCUMENT, RECEIVE_NEW_DOCUMENT, RECEIVE_ERROR],
  doctype: 'io.cozy.files',
  promise: client => client.createFile(file, dirID)
}, actionOptions);
const trashFile = (file, actionOptions = {}) => _objectSpread({
  types: [DELETE_DOCUMENT, RECEIVE_DELETED_DOCUMENT, RECEIVE_ERROR],
  document: file,
  promise: client => client.trashFile(file)
}, actionOptions);
const addReferencedFiles = (doc, ids) => ({
  type: ADD_REFERENCED_FILES,
  collection: `${doc._type}/${doc._id}#files`,
  document: doc,
  ids,
  promise: client => client.addReferencedFiles(doc, ids)
});
const removeReferencedFiles = (doc, ids) => ({
  type: REMOVE_REFERENCED_FILES,
  collection: `${doc._type}/${doc._id}#files`,
  document: doc,
  ids,
  promise: client => client.removeReferencedFiles(doc, ids)
});
const makeActionCreator = promise => ({
  promise
});
const makeFetchMoreAction = ({
  types,
  collection,
  document,
  doctype,
  options
}, skip) => types[0] === FETCH_REFERENCED_FILES ? fetchReferencedFiles(document, skip) : fetchCollection(collection, doctype, options, skip);
const applySelectorForAction = (state, action) => {
  switch (action.types[0]) {
    case FETCH_COLLECTION:
    case FETCH_REFERENCED_FILES:
      return getCollection(state, action.collection);

    case FETCH_DOCUMENT:
      return getDocument(state, action.doctype, action.id);

    case _slices_sharings__WEBPACK_IMPORTED_MODULE_2__["FETCH_SHARINGS"]:
      return action.id ? Object(_slices_sharings__WEBPACK_IMPORTED_MODULE_2__["getSharingDetails"])(state, action.doctype, action.id, action.options) : Object(_slices_sharings__WEBPACK_IMPORTED_MODULE_2__["getSharings"])(state, action.doctype, action.options);

    default:
      return null;
  }
};
const enhancePropsForActions = (props, fetchActions, dispatch) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__["mapValues"])(fetchActions, (action, propName) => {
  const dataObject = props[propName];

  switch (action.types[0]) {
    case FETCH_COLLECTION:
    case FETCH_REFERENCED_FILES:
      return _objectSpread({}, dataObject, {
        fetchMore: dataObject.hasMore ? () => dispatch(makeFetchMoreAction(action, dataObject.data.length)) : null
      });

    default:
      return dataObject;
  }
}); // selectors

const mapDocumentsToIds = (documents, doctype, ids) => ids.map(id => documents[doctype][id]);

const getCollection = (state, name) => {
  const collection = state.cozy.collections[name];

  if (!collection) {
    return _objectSpread({}, collectionInitialState, {
      data: null
    });
  }

  return _objectSpread({}, collection, {
    data: mapDocumentsToIds(state.cozy.documents, collection.type, collection.ids)
  });
};
const getDocument = (state, doctype, id) => {
  const documents = state.cozy.documents[doctype];

  if (!documents) {
    return null;
  }

  return documents[id];
};
const isCollectionFetched = (state, name) => state.cozy.collections[name] && state.cozy.collections[name].fetchStatus === 'loaded';

/***/ }),

/***/ "GfxC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadArchive", function() { return downloadArchive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* global cozy */
const slugify = text => text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
.replace(/[^\w-]+/g, '') // Remove all non-word chars
.replace(/--+/g, '-') // Replace multiple - with single -
.replace(/^-+/, '') // Trim - from start of text
.replace(/-+$/, ''); // Trim - from end of text


const forceFileDownload = (href, filename) => {
  const element = document.createElement('a');
  element.setAttribute('href', href);
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}; // async helpers: they interact with the stack but not with the store


const downloadArchive = async (notSecureFilename, fileIds) => {
  const filename = slugify(notSecureFilename);
  const href = await cozy.client.files.getArchiveLinkByIds(fileIds, filename);
  const fullpath = await cozy.client.fullpath(href);
  forceFileDownload(fullpath, filename + '.zip');
};
const downloadFile = async file => {
  const response = await cozy.client.files.downloadById(file.id);
  const blob = await response.blob();
  forceFileDownload(window.URL.createObjectURL(blob), file.name);
};

/***/ }),

/***/ "Go3M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/MKj");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("buk/");
/* harmony import */ var containers_AccountConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wiYS");
/* harmony import */ var ducks_connections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4YEU");
/* harmony import */ var reducers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cokx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var CreateAccountService =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CreateAccountService, _React$Component);

  function CreateAccountService(props, context) {
    var _this;

    _classCallCheck(this, CreateAccountService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreateAccountService).call(this, props, context));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSuccess", function (account) {
      _this.props.endCreation();

      _this.props.onSuccess(account);
    });

    _this.props.startCreation(_this.props.konnector);

    return _this;
  }

  _createClass(CreateAccountService, [{
    key: "render",
    value: function render() {
      var t = this.props.t;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "coz-service-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(containers_AccountConnection__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
        onDone: this.onSuccess,
        successButtonLabel: t('intent.service.success.button.label')
      }, this.props)));
    }
  }]);

  return CreateAccountService;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  // infos from route parameters
  var konnector = ownProps.konnector;
  var createdAccount = Object(reducers_index__WEBPACK_IMPORTED_MODULE_5__["getCreatedConnectionAccount"])(state);
  var trigger = Object(reducers_index__WEBPACK_IMPORTED_MODULE_5__["getTriggerByKonnectorAndAccount"])(state, konnector, createdAccount);
  return {
    createdAccount: createdAccount,
    isCreating: Object(ducks_connections__WEBPACK_IMPORTED_MODULE_4__["isCreatingConnection"])(state.connections),
    isRunning: Object(ducks_connections__WEBPACK_IMPORTED_MODULE_4__["isConnectionRunning"])(state.connections, trigger),
    trigger: trigger
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    startCreation: function startCreation() {
      return dispatch(Object(ducks_connections__WEBPACK_IMPORTED_MODULE_4__["startConnectionCreation"])(ownProps.konnector));
    },
    endCreation: function endCreation() {
      return dispatch(Object(ducks_connections__WEBPACK_IMPORTED_MODULE_4__["endConnectionCreation"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__["translate"])()(CreateAccountService)));

/***/ }),

/***/ "GqSd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-appointment_309fbdd60363a2990bc5d8a4200c2bf8",
  "use": "icon-appointment_309fbdd60363a2990bc5d8a4200c2bf8-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-appointment_309fbdd60363a2990bc5d8a4200c2bf8\"><g stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" fill-rule=\"evenodd\"><g stroke=\"#95999D\"><path d=\"M9 5H1v42h46V5h-8\" /><path d=\"M15 9H9V1h6zM39 9h-6V1h6zM15 5h18M1 15h46\" /></g><g stroke=\"currentColor\"><path d=\"M19 39V23l-4 4M15 39h8M28 39l6-16H24v2M27 31h6\" /></g></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "H1Xl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("buk/");
/* harmony import */ var lib_konnectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8CvS");
/* harmony import */ var cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KXWi");
/* harmony import */ var cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("y6ex");
/* harmony import */ var cozy_ui_react_Infos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("M2p0");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cozy_harvest_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("iDCe");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var ErrorMessage =
/*#__PURE__*/
function (_Component) {
  _inherits(ErrorMessage, _Component);

  function ErrorMessage(props) {
    var _this;

    _classCallCheck(this, ErrorMessage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorMessage).call(this, props));
    _this.renderButton = _this.renderButton.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getErrorTitle = _this.getErrorTitle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getErrorDescription = _this.getErrorDescription.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ErrorMessage, [{
    key: "renderButton",
    value: function renderButton(error) {
      var _this$props = this.props,
          t = _this$props.t,
          isKonnectorRunning = _this$props.isKonnectorRunning,
          trigger = _this$props.trigger;

      if (Object(lib_konnectors__WEBPACK_IMPORTED_MODULE_2__["isKonnectorTwoFAError"])(error)) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_harvest_lib__WEBPACK_IMPORTED_MODULE_7__["TriggerLauncher"], {
          trigger: trigger,
          submitting: isKonnectorRunning
        }, function (_ref) {
          var launch = _ref.launch,
              running = _ref.running;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: t('connection.CTA.twofa_failed'),
            icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
              focusable: "false",
              icon: "sync",
              spin: running
            }),
            theme: "secondary",
            className: "u-m-0",
            disabled: running,
            onClick: launch
          });
        });
      } else {
        return null;
      }
    }
  }, {
    key: "getErrorTitle",
    value: function getErrorTitle() {
      var _this$props2 = this.props,
          t = _this$props2.t,
          error = _this$props2.error;
      return t(Object(lib_konnectors__WEBPACK_IMPORTED_MODULE_2__["getMostAccurateErrorKey"])(t, error, function (key) {
        return "connection.error.".concat(key, ".title");
      }));
    }
  }, {
    key: "getErrorDescription",
    value: function getErrorDescription() {
      var _this$props3 = this.props,
          t = _this$props3.t,
          konnector = _this$props3.konnector,
          error = _this$props3.error;
      return t(Object(lib_konnectors__WEBPACK_IMPORTED_MODULE_2__["getMostAccurateErrorKey"])(t, error, function (key) {
        return "connection.error.".concat(key, ".description");
      }), {
        name: konnector.name,
        link: konnector.vendor_link
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          t = _this$props4.t,
          konnector = _this$props4.konnector,
          error = _this$props4.error;

      if (!Object(lib_konnectors__WEBPACK_IMPORTED_MODULE_2__["isKonnectorKnownError"])(error)) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Infos__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "u-maw-none",
          text: t('connection.error.default.description', {
            name: konnector.name
          }),
          title: t('connection.error.default.title'),
          isImportant: true
        });
      } // FIXME temporarily, only for EDF


      if (konnector.slug === 'edf') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Infos__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "u-maw-none",
          text: t('status.edf.maintenance', {
            supportLink: t('status.edf.support_link')
          }),
          title: t('status.interrupted'),
          isImportant: true
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Infos__WEBPACK_IMPORTED_MODULE_5__["default"], {
        actionButton: this.renderButton(error),
        className: "u-maw-none",
        text: this.getErrorDescription(error),
        isImportant: true,
        title: this.getErrorTitle(error)
      });
    }
  }]);

  return ErrorMessage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
ErrorMessage.propTypes = {
  isKonnectorRunning: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  error: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  konnector: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  t: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,

  /**
   * The trigger to launch
   */
  trigger: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__["translate"])()(ErrorMessage));

/***/ }),

/***/ "H3Dg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataItem", function() { return DataItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("buk/");
/* harmony import */ var cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("y6ex");
/* harmony import */ var styles_dataItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Qwgv");
/* harmony import */ var styles_dataItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_dataItem__WEBPACK_IMPORTED_MODULE_3__);




var DataItem = function DataItem(_ref) {
  var t = _ref.t,
      dataType = _ref.dataType;
  var icon;

  try {
    icon = __webpack_require__("iwqY")("./icon-".concat(dataType, ".svg")).default;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Unable to load the icon ../assets/sprites/icon-".concat(dataType, ".svg : ").concat(error.message));
  }

  if (!icon) {
    try {
      icon = __webpack_require__("f8QR").default;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Default icon icon-fallback.svg cannot be loaded');
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: styles_dataItem__WEBPACK_IMPORTED_MODULE_3___default.a['col-data-item']
  }, icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: styles_dataItem__WEBPACK_IMPORTED_MODULE_3___default.a['col-data-item-icon'],
    icon: icon,
    width: "32px",
    height: "32px"
  }), t("dataType.".concat(dataType)));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__["translate"])()(DataItem));

/***/ }),

/***/ "HGt1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-pin-active_85c94b69ac63dfedefa240f8d3d8961c",
  "use": "icon-pin-active_85c94b69ac63dfedefa240f8d3d8961c-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" id=\"icon-pin-active_85c94b69ac63dfedefa240f8d3d8961c\"><path fill=\"#297EF2\" d=\"M4 1c0-.552.453-1 .997-1h6.006c.55 0 .997.444.997 1 0 .552-.453 1-.997 1H11v4l2 2v2H9v6H7v-6H3V8l2-2V2c-.552 0-1-.444-1-1z\" fill-rule=\"evenodd\" /></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "J+7E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-new_3e13d5d94da20a11c7569e3ff2cb4968",
  "use": "icon-new_3e13d5d94da20a11c7569e3ff2cb4968-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 16 16\" id=\"icon-new_3e13d5d94da20a11c7569e3ff2cb4968\"><defs><path id=\"icon-new_3e13d5d94da20a11c7569e3ff2cb4968_a\" d=\"M2.032 9.205a.48.48 0 0 1-.48-.476c-.002-.176-.064-1.045-1.04-1.045a.479.479 0 0 1 0-.958c.17-.003 1.042-.065 1.042-1.042a.479.479 0 1 1 .958 0c.002.171.065 1.042 1.042 1.042a.479.479 0 1 1 0 .958c-.172.002-1.042.065-1.042 1.042a.479.479 0 0 1-.48.479zm12 2a.479.479 0 0 1-.48-.477c-.003-.175-.066-1.044-1.041-1.044a.479.479 0 1 1 0-.958c.17-.003 1.042-.065 1.042-1.042a.479.479 0 1 1 .957 0c.003.171.066 1.042 1.042 1.042a.479.479 0 0 1 0 .958c-.17.003-1.042.065-1.042 1.042a.48.48 0 0 1-.479.479zM7.031 6a.531.531 0 0 1-.531-.531A1.94 1.94 0 0 0 4.563 3.53a.531.531 0 0 1 0-1.062A1.94 1.94 0 0 0 6.501.53a.531.531 0 0 1 1.062 0A1.94 1.94 0 0 0 9.5 2.47a.532.532 0 0 1 0 1.062A1.94 1.94 0 0 0 7.563 5.47a.531.531 0 0 1-.531.53zM6 3c.39.27.73.61 1 1 .27-.39.61-.73 1-1a3.96 3.96 0 0 1-1-1c-.27.39-.61.73-1 1zm3 13a.531.531 0 0 1-.532-.53 1.94 1.94 0 0 0-1.937-1.938.531.531 0 1 1 0-1.063 1.939 1.939 0 0 0 1.937-1.937.532.532 0 1 1 1.063 0 1.94 1.94 0 0 0 1.938 1.937.531.531 0 0 1 0 1.063A1.94 1.94 0 0 0 9.53 15.47.532.532 0 0 1 9 16zm-1-3c.39.27.73.61 1 1 .27-.39.61-.73 1-1a3.96 3.96 0 0 1-1-1c-.27.39-.61.73-1 1z\" /></defs><g fill=\"none\" fill-rule=\"evenodd\"><mask id=\"icon-new_3e13d5d94da20a11c7569e3ff2cb4968_b\" fill=\"#fff\"><use xlink:href=\"#icon-new_3e13d5d94da20a11c7569e3ff2cb4968_a\" /></mask><use fill=\"#297EF1\" fill-rule=\"nonzero\" xlink:href=\"#icon-new_3e13d5d94da20a11c7569e3ff2cb4968_a\" /><g mask=\"url(#icon-new_3e13d5d94da20a11c7569e3ff2cb4968_b)\"><path d=\"M0 0h16v16H0z\" /></g></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "K2+G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-picture_144a590e5d26927945f869f9b3df6955",
  "use": "icon-picture_144a590e5d26927945f869f9b3df6955-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"icon-picture_144a590e5d26927945f869f9b3df6955\"><defs><path d=\"M13 0h13v17a3 3 0 0 1-3 3H0V0h32v26H0V0h13z\" id=\"icon-picture_144a590e5d26927945f869f9b3df6955_a\" /><path d=\"M13 0h13v17a3 3 0 0 1-3 3H0V0h32v26H0V0h13z\" id=\"icon-picture_144a590e5d26927945f869f9b3df6955_c\" /></defs><g fill=\"none\" fill-rule=\"evenodd\"><g transform=\"translate(8 11)\"><mask id=\"icon-picture_144a590e5d26927945f869f9b3df6955_b\" fill=\"#fff\"><use xlink:href=\"#icon-picture_144a590e5d26927945f869f9b3df6955_a\" /></mask><rect fill=\"#8EE39B\" mask=\"url(#icon-picture_144a590e5d26927945f869f9b3df6955_b)\" width=\"32\" height=\"26\" rx=\"2\" /><path d=\"M0 20l6.29-6.29a.999.999 0 0 1 1.416-.004L11 17l8.294-8.294a1.003 1.003 0 0 1 1.412 0L32 20v4.002C32 25.106 31.11 26 29.998 26H2.002A2.002 2.002 0 0 1 0 24.002V20z\" fill=\"#1EC737\" mask=\"url(#icon-picture_144a590e5d26927945f869f9b3df6955_b)\" /></g><g transform=\"translate(16 19)\"><mask id=\"icon-picture_144a590e5d26927945f869f9b3df6955_d\" fill=\"#fff\"><use xlink:href=\"#icon-picture_144a590e5d26927945f869f9b3df6955_c\" /></mask><rect fill=\"#8EE39B\" mask=\"url(#icon-picture_144a590e5d26927945f869f9b3df6955_d)\" width=\"32\" height=\"26\" rx=\"2\" /><path d=\"M0 20l6.29-6.29a.999.999 0 0 1 1.416-.004L11 17l8.294-8.294a1.003 1.003 0 0 1 1.412 0L32 20v4.002C32 25.106 31.11 26 29.998 26H2.002A2.002 2.002 0 0 1 0 24.002V20z\" fill=\"#1EC737\" mask=\"url(#icon-picture_144a590e5d26927945f869f9b3df6955_d)\" /></g><g transform=\"translate(0 3)\"><rect fill=\"#8EE39B\" width=\"32\" height=\"26\" rx=\"2\" /><path d=\"M0 20l6.29-6.29a.999.999 0 0 1 1.416-.004L11 17l8.294-8.294a1.003 1.003 0 0 1 1.412 0L32 20v4.002C32 25.106 31.11 26 29.998 26H2.002A2.002 2.002 0 0 1 0 24.002V20z\" fill=\"#1EC737\" /><circle fill=\"#FFF\" cx=\"8\" cy=\"7\" r=\"3\" /><path d=\"M11 16l-5.5 5.5L11 16z\" stroke=\"#8EE39B\" stroke-linecap=\"round\" stroke-linejoin=\"round\" /></g></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "K4zY":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"col-account-connection-content":"col-account-connection-content--Jta1z","col-account-connection-fetching":"col-account-connection-fetching--3rtXV","col-account-connection-security":"col-account-connection-security--1I2Yb","col-account-connection-editor":"col-account-connection-editor--1sA6J"};

/***/ }),

/***/ "KAKi":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en": "7dT6",
	"./en.json": "7dT6",
	"./es": "oway",
	"./es.json": "oway",
	"./fr": "9pOX",
	"./fr.json": "9pOX"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "KAKi";

/***/ }),

/***/ "KWOR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-contact_5faab06a87fda2312defa5e3fb266c26",
  "use": "icon-contact_5faab06a87fda2312defa5e3fb266c26-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"icon-contact_5faab06a87fda2312defa5e3fb266c26\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#FFD799\" d=\"M32 25.995A1.997 1.997 0 0 1 30.002 28H24v-2.5c0-.828-.666-1.5-1.5-1.5-.828 0-1.5.679-1.5 1.5V28H11v-2.5c0-.828-.666-1.5-1.5-1.5-.828 0-1.5.679-1.5 1.5V28H1.998A2.001 2.001 0 0 1 0 25.995V6.005C0 4.898.89 4 2.002 4h27.996C31.104 4 32 4.897 32 6.005v19.99z\" /><path fill=\"#FF9300\" d=\"M17 9h6v1h-6V9zm0 3h11v1H17v-1zm0 3h11v1H17v-1zm0 3h11v1H17v-1zm-8-3.25c-1.657 0-3-1.511-3-3.375S7.343 8 9 8s3 1.511 3 3.375-1.343 3.375-3 3.375zM3 18.5c0-.75 1.5-3 3-3s.75.75 3 .75 1.5-.75 3-.75 3 2.25 3 3 0 1.5-.75 1.5H3.75C3 20 3 19.25 3 18.5z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "KxmK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-sleepTime_6fbfbb66834f8407aa5eb1285250fe05",
  "use": "icon-sleepTime_6fbfbb66834f8407aa5eb1285250fe05-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-sleepTime_6fbfbb66834f8407aa5eb1285250fe05\"><g stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" fill-rule=\"evenodd\"><path d=\"M37 38v-9c0-5.406-3.304-10.04-8-12 0-2.762-2.242-5-5-5-2.766 0-5 2.238-5 5-4.702 1.96-8 6.594-8 12v9a4 4 0 0 1-4 4h34c-2.21 0-4-1.79-4-4h0zm-9 4a4 4 0 0 1-8 0\" stroke=\"#95999D\" /><g stroke=\"currentColor\"><path d=\"M1 12h6l-6 6h6M19 2h4l-4 4h4M39 6h8l-8 8h8\" /></g></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "LB1v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountLogout", function() { return AccountLogout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("buk/");
/* harmony import */ var cozy_harvest_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iDCe");
/* harmony import */ var styles_accountLogout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("LySI");
/* harmony import */ var styles_accountLogout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_accountLogout__WEBPACK_IMPORTED_MODULE_3__);




var AccountLogout = function AccountLogout(_ref) {
  var t = _ref.t,
      account = _ref.account,
      onError = _ref.onError,
      onSuccess = _ref.onSuccess;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles_accountLogout__WEBPACK_IMPORTED_MODULE_3___default.a['col-account-form-delete']
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, t('account.disconnect.title')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, t('account.disconnect.description')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_harvest_lib__WEBPACK_IMPORTED_MODULE_2__["DeleteAccountButton"], {
    account: account,
    onSuccess: onSuccess,
    onError: onError,
    extension: "full"
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__["translate"])()(AccountLogout));

/***/ }),

/***/ "LIMy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-stepsNumber_2e0bcaf606b335dbd5873dd7a3cc8143",
  "use": "icon-stepsNumber_2e0bcaf606b335dbd5873dd7a3cc8143-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-stepsNumber_2e0bcaf606b335dbd5873dd7a3cc8143\"><g stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" fill-rule=\"evenodd\"><g stroke=\"#95999D\"><path d=\"M19 26l26.672 9.528A1.998 1.998 0 0 1 47 37.41V42H1V28a2 2 0 0 1 2-2h2c0 1.658 3.512 3 7 3 4.418 0 7-1.342 7-3h0zM1 38h46M24.15 27.84L22 30m5.84-.842L26 31\" /><path d=\"M35 31.715C35 32.82 34.104 34 33 34h-6c-1.658 0-3 1.342-3 3v1M7 38c0-3.312-2.688-6-6-6\" /></g><g stroke=\"currentColor\"><path d=\"M29 22L2.326 12.472A1.993 1.993 0 0 1 1 10.592V6h46v14a2 2 0 0 1-2 2h-2c0-1.656-3.516-3-7-3-4.42 0-7 1.344-7 3h0zm18-12H1m22.848 10.16L26 18m-5.844.842L22 17\" /><path d=\"M13 16.285c0-1.104.894-2.286 2-2.286h6a3 3 0 0 0 3-3v-1M41 10c0 3.314 2.684 6 6 6\" /></g></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "Lf2i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONNECTION_STATUS", function() { return CONNECTION_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CollectStore; });
/* harmony import */ var lib_accounts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("09Bf");
/* harmony import */ var lib_jobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("kLNr");
/* harmony import */ var lib_triggers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WWPq");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global cozy */



const CONNECTION_STATUS = {
  ERRORED: 'errored',
  RUNNING: 'running',
  CONNECTED: 'connected'
};

const normalize = (dbObject, doctype) => {
  return _objectSpread({}, dbObject, dbObject.attributes, {
    id: dbObject._id,
    _type: doctype || dbObject._type
  });
};

class CollectStore {
  constructor(context, options = {}) {
    this.listener = null;
    this.options = options;
    this.categories = __webpack_require__("QxZi");
    this.banksUrl = null;
    this.initializeRealtime();
  }

  async initializeRealtime() {
    lib_jobs__WEBPACK_IMPORTED_MODULE_1__["subscribeAll"](cozy.client).then(subscription => {
      subscription.onCreate(job => this.updateUnfinishedJob(job)).onUpdate(job => this.updateUnfinishedJob(job));
    }).catch(error => {
      // eslint-disable-next-line no-console
      console.warn(`Cannot initialize realtime for jobs: ${error.message}`);
    }); // Not really consistent code style but we try to use only async/await now.

    const realtimeAccounts = await lib_accounts__WEBPACK_IMPORTED_MODULE_0__["subscribeAll"](cozy.client);
    realtimeAccounts.onCreate(account => this.onAccountCreated(account));
    realtimeAccounts.onUpdate(account => this.onAccountUpdated(account));
    realtimeAccounts.onDelete(trigger => this.onAccountDeleted(trigger));
    const realtimeTriggers = await lib_triggers__WEBPACK_IMPORTED_MODULE_2__["subscribeAll"](cozy.client);
    realtimeTriggers.onCreate(trigger => this.onTriggerCreated(trigger));
    realtimeTriggers.onDelete(trigger => this.deleteTrigger(trigger));
  }

  async onAccountCreated(account) {
    this.dispatch({
      type: 'RECEIVE_NEW_DOCUMENT',
      response: {
        data: [normalize(account, 'io.cozy.accounts')]
      },
      updateCollections: ['accounts']
    });
  }

  async onAccountUpdated(account) {
    this.dispatch({
      type: 'RECEIVE_UPDATED_DOCUMENT',
      response: {
        data: [normalize(account, 'io.cozy.accounts')]
      },
      updateCollections: ['accounts']
    });
  }

  async onAccountDeleted(account) {
    this.dispatch({
      type: 'RECEIVE_DELETED_DOCUMENT',
      response: {
        data: [normalize(account, 'io.cozy.accounts')]
      },
      updateCollections: ['accounts']
    });
  }

  async onTriggerCreated(trigger) {
    this.dispatch({
      type: 'RECEIVE_NEW_DOCUMENT',
      response: {
        data: [normalize(trigger, 'io.cozy.triggers')]
      },
      updateCollections: ['triggers']
    });
  }

  async onTriggerUpdated(trigger) {
    this.dispatch({
      type: 'RECEIVE_UPDATED_DOCUMENT',
      response: {
        data: [normalize(trigger, 'io.cozy.triggers')]
      },
      updateCollections: ['triggers']
    });
  }

  async deleteTrigger(trigger) {
    this.dispatch({
      type: 'RECEIVE_DELETED_DOCUMENT',
      response: {
        data: [normalize(trigger, 'io.cozy.triggers')]
      },
      updateCollections: ['triggers']
    });
  }

  async updateUnfinishedJob(job) {
    const normalizedJob = normalize(job, 'io.cozy.jobs'); // TODO Filter by worker on the WebSocket when it will be available in the
    // stack

    const isKonnectorJob = normalizedJob.worker === 'konnector';
    const isDeletedAccountHookJob = !!normalizedJob.account_deleted;

    if (!isKonnectorJob || isDeletedAccountHookJob) {
      return;
    }

    this.dispatch({
      type: 'RECEIVE_NEW_DOCUMENT',
      response: {
        data: [normalizedJob]
      },
      updateCollections: ['jobs']
    });
    const trigger = await lib_triggers__WEBPACK_IMPORTED_MODULE_2__["fetch"](cozy.client, normalizedJob.trigger_id);
    this.onTriggerUpdated(trigger);
  } // Get the drive and banks application url using the list of application


  fetchUrls() {
    return cozy.client.fetchJSON('GET', '/apps/').then(body => {
      body.forEach(item => {
        if (!item.attributes || !item.attributes.slug || !item.links) return;

        switch (item.attributes.slug) {
          case 'banks':
            this.banksUrl = `${item.links.related}`;
            break;

          default:
            break;
        }
      });
    }).catch(err => {
      // eslint-disable-next-line no-console
      console.warn(err.message);
      return false;
    });
  }

  createIntentService(intent, window) {
    return cozy.client.intents.createService(intent, window);
  }

}

/***/ }),

/***/ "Lo76":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("buk/");
/* harmony import */ var components_ReactMarkdownWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4DAK");
/* harmony import */ var styles_konnectorMaintenance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("91CF");
/* harmony import */ var styles_konnectorMaintenance__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_konnectorMaintenance__WEBPACK_IMPORTED_MODULE_3__);





var KonnectorMaintenance = function KonnectorMaintenance(_ref) {
  var t = _ref.t,
      maintenance = _ref.maintenance,
      lang = _ref.lang,
      konnectorName = _ref.konnectorName;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles_konnectorMaintenance__WEBPACK_IMPORTED_MODULE_3___default.a['maintenance']
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles_konnectorMaintenance__WEBPACK_IMPORTED_MODULE_3___default.a['maintenance-intro']
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles_konnectorMaintenance__WEBPACK_IMPORTED_MODULE_3___default.a['maintenance-icon']
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: styles_konnectorMaintenance__WEBPACK_IMPORTED_MODULE_3___default.a['maintenance-service']
  }, t('maintenance.service')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: styles_konnectorMaintenance__WEBPACK_IMPORTED_MODULE_3___default.a['maintenance-problem']
  }, t('maintenance.problem', {
    konnectorName: konnectorName
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: styles_konnectorMaintenance__WEBPACK_IMPORTED_MODULE_3___default.a['maintenance-title']
  }, t('maintenance.title')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ReactMarkdownWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: styles_konnectorMaintenance__WEBPACK_IMPORTED_MODULE_3___default.a['maintenance-message'],
    source: maintenance.message[lang] || maintenance.message['en']
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__["translate"])()(KonnectorMaintenance));

/***/ }),

/***/ "LySI":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"col-account-form-delete":"col-account-form-delete--3lmv-","coz-btn":"coz-btn--3hk7Y"};

/***/ }),

/***/ "Lz4C":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"col-account-edit-content":"col-account-edit-content--2Kupc","item-status-icon":"item-status-icon--39_CH","col-account-edit-tabs":"col-account-edit-tabs--35Xdl","col-account-edit-tabpanel":"col-account-edit-tabpanel--38qU4","col-account-edit-tab":"col-account-edit-tab--1mPGu","col-account-connection-editor":"col-account-connection-editor--1wGM3"};

/***/ }),

/***/ "N0Cd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"col-account-description-title":"col-account-description-title--vVTHU","col-account-description-title-centered":"col-account-description-title-centered--32S1O","col-account-description-message":"col-account-description-message--ZyZtK"};

/***/ }),

/***/ "NYQX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-check_c894f598bf1dbc10b016bc00ea94b42c",
  "use": "icon-check_c894f598bf1dbc10b016bc00ea94b42c-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"icon-check_c894f598bf1dbc10b016bc00ea94b42c\"><path d=\"M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM6.707 12.293a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l7.5-7.5a1 1 0 0 0-1.414-1.414L9.5 15.086l-2.793-2.793z\" fill=\"#2bba40\" fill-rule=\"evenodd\" /></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "NkDc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-temperature_b60f624917b82335bd83107030530492",
  "use": "icon-temperature_b60f624917b82335bd83107030530492-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-temperature_b60f624917b82335bd83107030530492\"><g stroke-width=\"2\" transform=\"translate(17 1)\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" fill-rule=\"evenodd\"><path stroke=\"#95999D\" d=\"M10 35.528V4a4 4 0 1 0-8 0v31.528a6 6 0 1 0 8 0z\" /><circle cx=\"6\" cy=\"40\" r=\"2\" stroke=\"currentColor\" /><path stroke=\"currentColor\" d=\"M6 41V23\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "ONtV":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"col-trigger-folder":"col-trigger-folder--3s1fX","col-trigger-folder-link":"col-trigger-folder-link--2Fkdb"};

/***/ }),

/***/ "OgEr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-event_a9d7dcf1171e167fdc5b1544ec0e0758",
  "use": "icon-event_a9d7dcf1171e167fdc5b1544ec0e0758-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-event_a9d7dcf1171e167fdc5b1544ec0e0758\"><g stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" fill-rule=\"evenodd\"><g stroke=\"#95999D\"><path d=\"M9 5H1v42h46V5h-8\" /><path d=\"M15 9H9V1h6zM39 9h-6V1h6zM15 5h18M1 15h46\" /></g><path stroke=\"currentColor\" d=\"M13 31l7 7 16-16\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "OiML":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CozyClient; });
/* harmony import */ var _DataAccessFacade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+tca");
/* harmony import */ var _authentication_mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("AEoj");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* global cozy */


const APPS_DOCTYPE = 'io.cozy.apps';
const FILES_DOCTYPE = 'io.cozy.files';
const TRIGGERS_DOCTYPE = 'io.cozy.triggers';
const KONNECTORS_DOCTYPE = 'io.cozy.konnectors';
const SHARINGS_DOCTYPE = 'io.cozy.sharings';
class CozyClient {
  constructor(config) {
    const {
      cozyURL
    } = config,
          options = _objectWithoutProperties(config, ["cozyURL"]);

    this.options = options;
    this.indexes = {};
    this.specialDirectories = {};
    this.facade = new _DataAccessFacade__WEBPACK_IMPORTED_MODULE_0__["default"]();

    if (cozyURL) {
      this.facade.setup(cozyURL, options);
    }
  }

  register(cozyUrl) {
    this.facade.setup(cozyUrl, _objectSpread({}, this.options, {
      oauth: _objectSpread({}, this.options.oauth, {
        onRegistered: (client, url) => Object(_authentication_mobile__WEBPACK_IMPORTED_MODULE_1__["authenticateWithCordova"])(url)
      })
    }));
    return cozy.client.authorize(true);
  }

  async isRegistered(clientInfos) {
    if (!clientInfos) return false;

    try {
      await cozy.client.auth.getClient(clientInfos);
      return true;
    } catch (err) {
      // this is the error sent if we are offline
      if (err.message === 'Failed to fetch') {
        return true;
      } else {
        console.warn(err); // eslint-disable-line no-console

        return false;
      }
    }
  }

  startSync(dispatch) {
    return this.facade.startSync(dispatch);
  }

  startReplicationTo(dispatch) {
    return this.facade.startReplicationTo(dispatch);
  }

  startReplicationFrom(dispatch) {
    return this.facade.startReplicationFrom(dispatch);
  }

  getAdapter(doctype) {
    return this.facade.getAdapter(doctype);
  }

  async fetchApps() {
    return this.getAdapter(APPS_DOCTYPE).fetchApps();
  }

  async fetchCollection(name, doctype, options = {}, skip = 0) {
    if (options.selector) {
      const index = await this.getCollectionIndex(name, doctype, options);
      return this.getAdapter(doctype).queryDocuments(doctype, index, _objectSpread({}, options, {
        skip
      }));
    }

    return this.getAdapter(doctype).fetchDocuments(doctype);
  }

  fetchDocument(doctype, id) {
    return this.getAdapter(doctype).fetchDocument(doctype, id);
  }

  fetchFile(id) {
    return this.getAdapter(FILES_DOCTYPE).fetchFile(id);
  }

  fetchReferencedFiles(doc, skip = 0) {
    return this.getAdapter(doc._type).fetchReferencedFiles(doc, skip);
  }

  fetchTriggers(name, worker) {
    return this.getAdapter(TRIGGERS_DOCTYPE).fetchTriggers(worker);
  }

  fetchKonnectors() {
    return this.getAdapter(KONNECTORS_DOCTYPE).fetchKonnectors();
  }

  addReferencedFiles(doc, ids) {
    return this.getAdapter(doc._type).addReferencedFiles(doc, ids);
  }

  removeReferencedFiles(doc, ids) {
    return this.getAdapter(doc._type).removeReferencedFiles(doc, ids);
  }

  createDocument(doctype, doc) {
    return this.getAdapter(doctype).createDocument(doctype, doc);
  }

  createTrigger(doc) {
    return this.getAdapter(doc._type).createTrigger(doc);
  }

  launchTrigger(doc) {
    return this.getAdapter(doc._type).launchTrigger(doc);
  }

  updateDocument(doc) {
    return this.getAdapter(doc._type).updateDocument(doc);
  }

  deleteDocument(doc) {
    return this.getAdapter(doc._type).deleteDocument(doc);
  }

  deleteTrigger(doc) {
    return this.getAdapter(doc._type).deleteTrigger(doc);
  }

  async fetchSharings(doctype) {
    const permissions = await this.getAdapter(doctype).fetchSharingPermissions(doctype);
    const sharingIds = [...permissions.byMe.map(p => p.attributes.source_id), ...permissions.withMe.map(p => p.attributes.source_id)];
    const sharings = await Promise.all(sharingIds.map(id => this.getAdapter(SHARINGS_DOCTYPE).fetchSharing(id)));
    return {
      permissions,
      sharings
    };
  }

  createSharing(permissions, contactIds, sharingType, description) {
    return this.getAdapter(SHARINGS_DOCTYPE).createSharing(permissions, contactIds, sharingType, description);
  }

  revokeSharing(sharingId) {
    return this.getAdapter(SHARINGS_DOCTYPE).revokeSharing(sharingId);
  }

  revokeSharingForClient(sharingId, clientId) {
    return this.getAdapter(SHARINGS_DOCTYPE).revokeSharingForClient(sharingId, clientId);
  }

  createSharingLink(permissions) {
    return this.getAdapter(SHARINGS_DOCTYPE).createSharingLink(permissions);
  }

  revokeSharingLink(permission) {
    return this.getAdapter(SHARINGS_DOCTYPE).revokeSharingLink(permission);
  }

  createFile(file, dirID) {
    return this.getAdapter(FILES_DOCTYPE).createFile(file, dirID);
  }

  trashFile(file) {
    return this.getAdapter(FILES_DOCTYPE).trashFile(file);
  }

  async ensureDirectoryExists(path) {
    if (!this.specialDirectories[path]) {
      const dir = await cozy.client.files.createDirectoryByPath(path);
      this.specialDirectories[path] = dir._id;
    }

    return this.specialDirectories[path];
  }

  async checkUniquenessOf(doctype, property, value) {
    const index = await this.getUniqueIndex(doctype, property);
    const existingDocs = await cozy.client.data.query(index, {
      selector: {
        [property]: value
      },
      fields: ['_id']
    });
    return existingDocs.length === 0;
  }

  async getCollectionIndex(name, doctype, options) {
    if (!this.indexes[name]) {
      this.indexes[name] = await this.getAdapter(doctype).createIndex(doctype, this.getIndexFields(options));
    }

    return this.indexes[name];
  }

  async getUniqueIndex(doctype, property) {
    const name = `${doctype}/${property}`;

    if (!this.indexes[name]) {
      this.indexes[name] = await this.getAdapter(doctype).createIndex(doctype, [property]);
    }

    return this.indexes[name];
  }

  getIndexFields(options) {
    const {
      selector,
      sort
    } = options;

    if (sort) {
      // We filter possible duplicated fields
      return [...Object.keys(selector), ...Object.keys(sort)].filter((f, i, arr) => arr.indexOf(f) === i);
    }

    return Object.keys(selector);
  }

}

/***/ }),

/***/ "PUsB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-forbidden_6a8efaa7f965d313db2d2874f7189441",
  "use": "icon-forbidden_6a8efaa7f965d313db2d2874f7189441-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"icon-forbidden_6a8efaa7f965d313db2d2874f7189441\"><defs><path d=\"M3.13 4.494a6 6 0 0 0 8.376 8.376L3.131 4.493zM4.495 3.13l8.375 8.375A6 6 0 0 0 4.493 3.13zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z\" id=\"icon-forbidden_6a8efaa7f965d313db2d2874f7189441_a\" /></defs><use fill-rule=\"nonzero\" xlink:href=\"#icon-forbidden_6a8efaa7f965d313db2d2874f7189441_a\" /></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "PXPp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-contract_495d6e327d300d33bef68340e9910ee2",
  "use": "icon-contract_495d6e327d300d33bef68340e9910ee2-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-contract_495d6e327d300d33bef68340e9910ee2\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#A9CBF9\" d=\"M3.002 43A2.001 2.001 0 0 1 1 41.003V2.997C1 1.894 1.89 1 2.991 1H23l10 10v32H3.002z\" /><path fill=\"#297EF2\" d=\"M23 1l10 10h-8c-1.113 0-2-.895-2-2V1zm3.931 45.452c-1.066.305-1.686-.306-1.38-1.38L27 40.005l13.59-13.592a2 2 0 0 1 2.831.007l2.162 2.162c.784.784.784 2.054.008 2.83L32 45.005l-5.069 1.448zM16 38h10v2H16v-2z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "Qwgv":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"u-shake":"u-shake--2V1gZ","shake":"shake--1JapN","u-o-100":"u-o-100--2Y5t4","u-o-90":"u-o-90--NMble","u-o-80":"u-o-80--hEMq5","u-o-70":"u-o-70--c3V49","u-o-60":"u-o-60--2_ny5","u-o-50":"u-o-50--1kjh8","u-o-40":"u-o-40--2QdZG","u-o-30":"u-o-30--19gHJ","u-o-20":"u-o-20--1JM5k","u-o-10":"u-o-10--2qxQr","u-o-05":"u-o-05--2VHmw","u-o-025":"u-o-025--qZ5C2","u-o-0":"u-o-0--EFmBj","col-data-item":"col-data-item--dM_PJ","col-data-item-icon":"col-data-item-icon--9VMIn","spin":"spin--AkLmQ"};

/***/ }),

/***/ "QxZi":
/***/ (function(module) {

module.exports = ["energy","insurance","isp","shopping","telecom","transport","banking","public_service"];

/***/ }),

/***/ "REJr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-courseMaterial_61e4e9650aa3ba5b634bfc6c1ae3ac4e",
  "use": "icon-courseMaterial_61e4e9650aa3ba5b634bfc6c1ae3ac4e-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-courseMaterial_61e4e9650aa3ba5b634bfc6c1ae3ac4e\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#CEBEF7\" d=\"M24 41c8.837 0 16-4.925 16-11v-5H8v5c0 6.075 7.163 11 16 11z\" /><path fill=\"#855CEA\" d=\"M8 25.605V34.143c-.212.054-.42.128-.618.214l-.058.032c-.17.078-.336.168-.492.268-.046.03-.086.064-.13.096a4.036 4.036 0 0 0-.36.28c-.052.046-.098.094-.146.144-.096.094-.19.19-.276.294a4.476 4.476 0 0 0-.348.494c-.044.076-.088.152-.128.23-.054.104-.1.212-.144.32-.034.084-.068.166-.096.25a3.95 3.95 0 0 0-.098.374c-.018.076-.038.15-.052.228a4.124 4.124 0 0 0-.054.632c0 .828.252 1.598.684 2.236.288.426.656.794 1.082 1.082A3.972 3.972 0 0 0 9 41.999a3.979 3.979 0 0 0 3.316-1.764A3.975 3.975 0 0 0 13 37.999c0-.158-.022-.31-.04-.462a3.972 3.972 0 0 0-2.36-3.188l-.6-.262v-7.438l14 7.305L47.466 21.71a.998.998 0 0 0 0-1.768L24.462 7.94c-.29-.15-.634-.15-.924 0L.534 19.942a1 1 0 0 0 0 1.768L8 25.605z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "S7vQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-pin_47062b648ad94dc756d7955abfec073a",
  "use": "icon-pin_47062b648ad94dc756d7955abfec073a-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" id=\"icon-pin_47062b648ad94dc756d7955abfec073a\"><path fill=\"#95999D\" d=\"M4 1c0-.552.453-1 .997-1h6.006c.55 0 .997.444.997 1 0 .552-.453 1-.997 1H11v4l2 2v2H9v6H7v-6H3V8l2-2V2c-.552 0-1-.444-1-1z\" fill-rule=\"evenodd\" /></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "Souy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-home_4f2087c056d710b74935df82cb4217d4",
  "use": "icon-home_4f2087c056d710b74935df82cb4217d4-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-home_4f2087c056d710b74935df82cb4217d4\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#FF9126\" d=\"M6.001 21v26h36V21l4.292 4.293a1 1 0 0 0 1.414 0l.086-.086a1 1 0 0 0 0-1.414L38 14V4a1 1 0 0 0-1-1H32a1 1 0 0 0-1 1v3L24.707.707a1 1 0 0 0-1.414 0L.207 23.793a1 1 0 0 0 0 1.414l.087.086a1 1 0 0 0 1.414 0L6 21z\" /><path fill=\"#FFE2A1\" d=\"M14 33h8v14h-8z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "TxWu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-bankAccounts_0d0ca64da8d7e0e8bff594738075cf11",
  "use": "icon-bankAccounts_0d0ca64da8d7e0e8bff594738075cf11-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-bankAccounts_0d0ca64da8d7e0e8bff594738075cf11\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#C2F0D1\" d=\"M9 47c-1.105 0-2-.898-2-2.006V3.006C7 1.898 7.89 1 8.991 1H29l12 12v32c0 1.105-.892 2-2 2H9z\" /><path fill=\"#35CE68\" d=\"M29 1v9.991A2.01 2.01 0 0 0 31.009 13H41L29 1z\" /><path stroke=\"#35CE68\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M35 41H13V17h22zM13 22h22m-22 6h22m-22 6h22M20 17v24\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "UJB8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("buk/");
/* harmony import */ var components_ReactMarkdownWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4DAK");
/* harmony import */ var components_DataItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H3Dg");
/* harmony import */ var lib_konnectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8CvS");
/* harmony import */ var styles_accountConnectionData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("GTEx");
/* harmony import */ var styles_accountConnectionData__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_accountConnectionData__WEBPACK_IMPORTED_MODULE_6__);








var AccountConnectionData = function AccountConnectionData(_ref) {
  var t = _ref.t,
      connector = _ref.connector;
  var hasDataTypes = !!(connector.data_types && connector.data_types.length);
  var serviceMessage = Object(lib_konnectors__WEBPACK_IMPORTED_MODULE_5__["getKonnectorMessage"])(t, connector, 'service');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(styles_accountConnectionData__WEBPACK_IMPORTED_MODULE_6___default.a['col-account-connection-data'])
  }, serviceMessage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, t('account.config.data.service.description')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ReactMarkdownWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: serviceMessage
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, t('account.config.data.title')), hasDataTypes && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: styles_accountConnectionData__WEBPACK_IMPORTED_MODULE_6___default.a['col-account-connection-data-access']
  }, connector.data_types.map(function (data, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_DataItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      dataType: data,
      key: index
    });
  })), !hasDataTypes && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, t('dataType.none', {
    name: connector.name
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__["translate"])()(AccountConnectionData));

/***/ }),

/***/ "UufI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "konnectorsI18nMiddleware", function() { return konnectorsI18nMiddleware; });
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("buk/");

const KONNECTORS_DOCTYPE = 'io.cozy.konnectors';

const extendI18nWithKonnector = lang => konnector => {
  const {
    langs,
    locales
  } = konnector;
  const hasLangs = langs && langs.length;

  if (!hasLangs) {
    // eslint-disable-next-line no-console
    console.warn(`Konnector ${konnector.name} does not specify any lang`);
    return konnector;
  }

  const providesLang = hasLangs && langs.includes(lang);
  const actualLang = providesLang ? lang : langs[0];
  const localeKeys = locales && Object.keys(locales);
  const providesLocales = localeKeys && localeKeys.length && localeKeys.includes(actualLang);

  if (!providesLocales) {
    // eslint-disable-next-line no-console
    console.warn(`Konnector ${konnector.name} does not specify any locale for lang ${actualLang}`);
    return konnector;
  }

  Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_0__["extend"])({
    [konnector.slug]: locales[actualLang]
  });
  return konnector;
};

const konnectorsI18nMiddleware = lang => () => next => action => {
  const {
    response
  } = action;

  switch (action.type) {
    case 'RECEIVE_DATA':
    case 'RECEIVE_NEW_DOCUMENT':
      if (response && action.doctype === KONNECTORS_DOCTYPE) {
        const konnectors = response.data;
        konnectors && konnectors.length && konnectors.forEach(extendI18nWithKonnector(lang));
      }

      break;
  }

  return next(action);
};
/* harmony default export */ __webpack_exports__["default"] = (konnectorsI18nMiddleware);

/***/ }),

/***/ "VhrW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-document_5a91ce553d849f048cefe614ca7e3fce",
  "use": "icon-document_5a91ce553d849f048cefe614ca7e3fce-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"icon-document_5a91ce553d849f048cefe614ca7e3fce\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#B2D3FF\" d=\"M3 2.002C3 .896 3.89 0 4.997 0H22l7 7v22.996A2 2 0 0 1 27.003 32H4.997A1.995 1.995 0 0 1 3 29.998V2.002z\" /><path fill=\"#197BFF\" d=\"M21.5 0c-.276 0-.5.23-.5.5V8h7.5c.276 0 .5-.232.5-.5V7l-7-7h-.5zM9 11h14v2H9v-2zm0 4h12v2H9v-2zm0 4h14v2H9v-2zm0 4h10v2H9v-2z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "Vwsq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-geolocation_aaa0388bb7a67d5d2c81eb2b667a390a",
  "use": "icon-geolocation_aaa0388bb7a67d5d2c81eb2b667a390a-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-geolocation_aaa0388bb7a67d5d2c81eb2b667a390a\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#FCBFBF\" d=\"M47 24c0 12.704-10.298 23-23 23C11.296 47 1 36.704 1 24 1 11.3 11.296 1 24 1c12.702 0 23 10.3 23 23z\" /><path fill=\"#F62C2C\" d=\"M21 39V27H9l25-13z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "WWPq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeAll", function() { return subscribeAll; });
/* harmony import */ var lib_realtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BI92");
/* triggers lib ready to be added to cozy-client-js */

const TRIGGERS_DOCTYPE = 'io.cozy.triggers';
async function fetch(cozy, triggerId) {
  return cozy.fetchJSON('GET', `/jobs/triggers/${triggerId}`);
}
function subscribeAll(cozy) {
  return lib_realtime__WEBPACK_IMPORTED_MODULE_0__["subscribeAll"](cozy, TRIGGERS_DOCTYPE);
}

/***/ }),

/***/ "XSRU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/MKj");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("buk/");
/* harmony import */ var components_intents_CreateAccountIntent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zlKK");
/* harmony import */ var ducks_konnectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("uZd2");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var IntentService =
/*#__PURE__*/
function (_Component) {
  _inherits(IntentService, _Component);

  function IntentService(props) {
    var _this;

    _classCallCheck(this, IntentService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IntentService).call(this, props));
    _this.state = {
      error: null
    };
    return _this;
  }

  _createClass(IntentService, [{
    key: "handleInstallationSuccess",
    value: function handleInstallationSuccess(konnector) {
      this.props.receiveKonnector(konnector);
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this$props, data, konnector, receiveKonnector, service, installedKonnector;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, data = _this$props.data, konnector = _this$props.konnector, receiveKonnector = _this$props.receiveKonnector, service = _this$props.service;

                if (!(service && !konnector)) {
                  _context.next = 8;
                  break;
                }

                _context.next = 4;
                return service.compose('INSTALL', 'io.cozy.apps', data);

              case 4:
                installedKonnector = _context.sent;

                if (installedKonnector) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", service.cancel());

              case 7:
                receiveKonnector(installedKonnector);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "onError",
    value: function onError(error) {
      this.setState({
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          appData = _this$props2.appData,
          konnector = _this$props2.konnector,
          onCancel = _this$props2.onCancel,
          service = _this$props2.service,
          t = _this$props2.t;
      var error = this.state.error;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "coz-service"
      }, error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "coz-error coz-service-error"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, t(error.message)), error.reason && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, t('intent.service.error.cause', {
        error: error.reason
      }))), !error && konnector && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_intents_CreateAccountIntent__WEBPACK_IMPORTED_MODULE_4__["default"], {
        appData: appData,
        konnector: konnector,
        onCancel: onCancel,
        onTerminate: service.terminate
      }));
    }
  }]);

  return IntentService;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    receiveKonnector: function receiveKonnector(konnector) {
      return dispatch(Object(ducks_konnectors__WEBPACK_IMPORTED_MODULE_5__["receiveInstalledKonnector"])(konnector));
    }
  };
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var data = ownProps.data;
  var slug = data.slug;
  return {
    konnector: slug && Object(ducks_konnectors__WEBPACK_IMPORTED_MODULE_5__["getKonnector"])(state.cozy, slug)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_3__["translate"])()(IntentService)));

/***/ }),

/***/ "YAxW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/MKj");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("m+TH");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oMPT");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var connect = function connect(mapDocumentsToProps) {
  var mapActionsToProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return function (WrappedComponent) {
    var Wrapper =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Wrapper, _Component);

      function Wrapper() {
        _classCallCheck(this, Wrapper);

        return _possibleConstructorReturn(this, _getPrototypeOf(Wrapper).apply(this, arguments));
      }

      _createClass(Wrapper, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var fetchActions = this.props.fetchActions;
          var dispatch = this.context.store.dispatch;

          for (var propName in fetchActions) {
            dispatch(fetchActions[propName]);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var store = this.context.store;
          var fetchActions = this.props.fetchActions;

          var props = _objectSpread({}, this.props, Object(___WEBPACK_IMPORTED_MODULE_3__["enhancePropsForActions"])(this.props, fetchActions, store.dispatch));

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, props);
        }
      }]);

      return Wrapper;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    _defineProperty(Wrapper, "contextTypes", {
      store: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
    });

    var makeMapStateToProps = function makeMapStateToProps(initialState, initialOwnProps) {
      var initialProps = mapDocumentsToProps(initialOwnProps);

      var isAction = function isAction(action) {
        return action && action.types && action.promise;
      };

      var fetchActions = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["filterValues"])(initialProps, function (prop) {
        return isAction(prop);
      });
      var otherProps = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["filterValues"])(initialProps, function (prop) {
        return !isAction(prop);
      });

      var mapStateToProps = function mapStateToProps(state) {
        return _objectSpread({}, Object(_utils__WEBPACK_IMPORTED_MODULE_4__["mapValues"])(fetchActions, function (action) {
          return isAction(action) ? Object(___WEBPACK_IMPORTED_MODULE_3__["applySelectorForAction"])(state, action) : action;
        }), {
          fetchActions: fetchActions
        }, otherProps);
      };

      return mapStateToProps;
    };

    return Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(makeMapStateToProps, mapActionsToProps)(Wrapper);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect);

/***/ }),

/***/ "YhzV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-graduated_61e4e9650aa3ba5b634bfc6c1ae3ac4e",
  "use": "icon-graduated_61e4e9650aa3ba5b634bfc6c1ae3ac4e-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-graduated_61e4e9650aa3ba5b634bfc6c1ae3ac4e\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#CEBEF7\" d=\"M24 41c8.837 0 16-4.925 16-11v-5H8v5c0 6.075 7.163 11 16 11z\" /><path fill=\"#855CEA\" d=\"M8 25.605V34.143c-.212.054-.42.128-.618.214l-.058.032c-.17.078-.336.168-.492.268-.046.03-.086.064-.13.096a4.036 4.036 0 0 0-.36.28c-.052.046-.098.094-.146.144-.096.094-.19.19-.276.294a4.476 4.476 0 0 0-.348.494c-.044.076-.088.152-.128.23-.054.104-.1.212-.144.32-.034.084-.068.166-.096.25a3.95 3.95 0 0 0-.098.374c-.018.076-.038.15-.052.228a4.124 4.124 0 0 0-.054.632c0 .828.252 1.598.684 2.236.288.426.656.794 1.082 1.082A3.972 3.972 0 0 0 9 41.999a3.979 3.979 0 0 0 3.316-1.764A3.975 3.975 0 0 0 13 37.999c0-.158-.022-.31-.04-.462a3.972 3.972 0 0 0-2.36-3.188l-.6-.262v-7.438l14 7.305L47.466 21.71a.998.998 0 0 0 0-1.768L24.462 7.94c-.29-.15-.634-.15-.924 0L.534 19.942a1 1 0 0 0 0 1.768L8 25.605z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "Zu44":
/***/ (function(module) {

module.exports = {"blablacar":{"longTerm":true,"message":{"fr":"Blablacar a ajouté un mécanisme bloquant l'accès à vos données par votre Cozy. Le connecteur n'est donc pas actuellement en mesure de récupérer votre historique de trajets détenu par Blablacar.<br/>Nous tentons de rétablir le service et vous informerons si la situation évolue.","en":"BlaBlacar added a protection system that blocks your Cozy's access to your data. As a result the connector is not able to get your journey history back from Blablacar.<br/>We are trying to clear the situation and you will be noticed when it is fixed."}},"bookingdotcom":{"longTerm":true,"message":{"fr":"Booking a modifié son système d'information et la récupération de vos données ne fonctionne plus. Nous tentons de rétablir la situation au plus vite.","en":"Booking has modified his website and the related data access doesn't work anymore. We are trying to restore the situation."}},"cultura":{"longTerm":true,"message":{"fr":"Cultura a modifié son système d'information et la récupération de vos données ne fonctionne plus. Nous tentons de rétablir la situation au plus vite.","en":"Cultura has modified his website and the related data access doesn't work anymore. We are trying to restore the situation."}},"darty":{"longTerm":true,"message":{"fr":"Darty a ajouté un mécanisme bloquant l'accès à vos données par votre Cozy. Le connecteur n'est donc pas actuellement en mesure de récupérer vos factures détenues par Darty.<br/>Nous tentons de rétablir le service et vous informerons si la situation évolue.","en":"Darty added a protection system that blocks your Cozy's access to your data. As a result the connector is not able to get your bills back from Darty.<br/>We are trying to clear the situation and you will be noticed when it is fixed."}},"deezer":{"longTerm":true,"message":{"fr":"Deezer a ajouté un mécanisme bloquant l'accès à vos données par votre Cozy. Le connecteur n'est donc pas actuellement en mesure de récupérer votre historique de factures détenu par Deezer.<br/>Nous tentons de rétablir le service et vous informerons si la situation évolue.","en":"Deezer added a protection system that blocks your Cozy's access to your data. As a result the connector is not able to get your bill history back from Deezer.<br/>We are trying to clear the situation and you will be noticed when it is fixed."}},"deliveroo":{"longTerm":true,"message":{"fr":"Deliveroo a modifié son système d'information et la récupération de vos données ne fonctionne plus. Nous tentons de rétablir la situation au plus vite.","en":"Deliveroo has modified his website and the related data access doesn't work anymore. We are trying to restore the situation."}},"easyjet":{"longTerm":true,"message":{"fr":"EasyJet a ajouté un mécanisme bloquant l'accès à vos données par votre Cozy. Le connecteur n'est donc pas actuellement en mesure de récupérer votre historique de factures détenu par EasyJet.<br/>Nous tentons de rétablir le service et vous informerons si la situation évolue.","en":"EasyJet added a protection system that blocks your Cozy's access to your data. As a result the connector is not able to get your bill history back from EasyJet.<br/>We are trying to clear the situation and you will be noticed when it is fixed."}},"enedis":{"longTerm":true,"message":{"fr":"Enedis a ajouté un mécanisme bloquant l'accès à vos données par votre Cozy. Le connecteur n'est donc pas actuellement en mesure de récupérer votre historique de factures détenu par Enedis.<br/>Nous tentons de rétablir le service et vous informerons si la situation évolue.","en":"Enedis added a protection system that blocks your Cozy's access to your data. As a result the connector is not able to get your bill history back from Enedis.<br/>We are trying to clear the situation and you will be noticed when it is fixed."}},"engie":{"longTerm":true,"message":{"fr":"Engie a ajouté un mécanisme bloquant l'accès à vos données par votre Cozy. Le connecteur n'est donc pas actuellement en mesure de récupérer votre historique de factures détenu par Engie.<br/>Nous tentons de rétablir le service dès que possible.","en":"Engie added a protection system that blocks your Cozy's access to your data. As a result the connector is not able to get your bill history back from Engie.<br/>We are trying to clear the situation as soon as possible."}},"electricitestrasbourg":{"longTerm":true,"message":{"fr":"Électricité de Strasbourg a modifié son système d'information et la récupération de vos données ne fonctionne plus. Nous tentons de rétablir la situation au plus vite.","en":"Électricité de Strasbourg has modified his website and the related data access doesn't work anymore. We are trying to restore the situation."}},"helloasso":{"longTerm":true,"message":{"fr":"Helloasso a modifié son système d'information et la récupération de vos données ne fonctionne plus. Nous tentons de rétablir la situation au plus vite.","en":"Helloasso has modified his website and the related data access doesn't work anymore. We are trying to restore the situation."}},"foncia":{"longTerm":true,"message":{"fr":"Foncia a modifié son système d'information et la récupération de vos données ne fonctionne plus. Nous tentons de rétablir la situation au plus vite.","en":"Foncia has modified his website and the related data access doesn't work anymore. We are trying to restore the situation."}},"ldlc":{"longTerm":true,"message":{"fr":"LDLC a ajouté un mécanisme bloquant l'accès à vos données par votre Cozy. Le connecteur n'est donc pas actuellement en mesure de récupérer votre historique de factures détenu par LDLC.com.<br/>Nous tentons de rétablir le service et vous informerons si la situation évolue.","en":"LDLC added a protection system that blocks your Cozy's access to your data. As a result the connector is not able to get your bill history back from LDLC.com.<br/>We are trying to clear the situation and you will be noticed when it is fixed."}},"leclercdrive":{"longTerm":true,"message":{"fr":"Leclerc Drive a ajouté un mécanisme bloquant l'accès à vos données par votre Cozy. Le connecteur n'est donc pas actuellement en mesure de récupérer vos données.<br/>Nous tentons de rétablir le service et vous informerons si la situation évolue.","en":"Leclerc Drive added a protection system that blocks your Cozy's access to your data. As a result the connector is not able to get your data.<br/>We are trying to clear the situation and you will be noticed when it is fixed."}},"macif":{"longTerm":true,"message":{"fr":"Macif a ajouté un mécanisme bloquant l'accès à vos données par votre Cozy. Le connecteur n'est donc pas actuellement en mesure de récupérer votre historique de factures détenu par Macif.<br/>Nous tentons de rétablir le service et vous informerons si la situation évolue.","en":"Macif added a protection system that blocks your Cozy's access to your data. As a result the connector is not able to get your bill history back from Macif.<br/>We are trying to clear the situation and you will be noticed when it is fixed."}},"redbox":{"longTerm":true,"message":{"fr":"SFR RED box a modifié son système d'information et son accès à vos données ne fonctionne plus. Ce connecteur n'est donc pas actuellement en mesure de récupérer vos données personnelles détenues par SFR RED box. Nous tentons de rétablir la situation et vous informerons dès que le service sera rétabli. [En savoir plus](https://support.cozy.io/article/176-pourquoi-les-connecteurs-sfr-et-red-ne-fonctionnent-plus)","en":"SFR RED Box's information system has changed and the related data access doesn't work anymore. This konnector is not currently able to get back your data from SFR RED Box.<br/>We are trying to restore the situation and we will notice you when it will be fixed. [Learn more](https://support.cozy.io/article/176-pourquoi-les-connecteurs-sfr-et-red-ne-fonctionnent-plus)"}},"redmobile":{"longTerm":true,"message":{"fr":"SFR RED mobile a modifié son système d'information et son accès à vos données ne fonctionne plus. Ce connecteur n'est donc pas actuellement en mesure de récupérer vos données personnelles détenues par SFR RED mobile. Nous tentons de rétablir la situation et vous informerons dès que le service sera rétabli. [En savoir plus](https://support.cozy.io/article/176-pourquoi-les-connecteurs-sfr-et-red-ne-fonctionnent-plus)","en":"SFR RED mobile's information system has changed and the related data access doesn't work anymore. This konnector is not currently able to get back your data from SFR RED mobile.<br/>We are trying to restore the situation and we will notice you when it will be fixed. [Learn more](https://support.cozy.io/article/176-pourquoi-les-connecteurs-sfr-et-red-ne-fonctionnent-plus)"}},"sfrbox":{"longTerm":true,"message":{"fr":"SFR Box a modifié son système d'information et son accès à vos données ne fonctionne plus. Ce connecteur n'est donc pas actuellement en mesure de récupérer vos données personnelles détenues par SFR Box. Nous tentons de rétablir la situation et vous informerons dès que le service sera rétabli. [En savoir plus](https://support.cozy.io/article/176-pourquoi-les-connecteurs-sfr-et-red-ne-fonctionnent-plus)","en":"SFR Box's information system has changed and the related data access doesn't work anymore. This konnector is not currently able to get back your data from SFR Box.<br/>We are trying to restore the situation and we will notice you when it will be fixed. [Learn more](https://support.cozy.io/article/176-pourquoi-les-connecteurs-sfr-et-red-ne-fonctionnent-plus)"}},"sfrmobile":{"longTerm":true,"message":{"fr":"SFR Mobile a modifié son système d'information et son accès à vos données ne fonctionne plus. Ce connecteur n'est donc pas actuellement en mesure de récupérer vos données personnelles détenues par SFR Mobile. Nous tentons de rétablir la situation et vous informerons dès que le service sera rétabli. [En savoir plus](https://support.cozy.io/article/176-pourquoi-les-connecteurs-sfr-et-red-ne-fonctionnent-plus)","en":"SFR Mobile's information system has changed and the related data access doesn't work anymore. This konnector is not currently able to get back your data from SFR Mobile.<br/>We are trying to restore the situation and we will notice you when it will be fixed. [Learn more](https://support.cozy.io/article/176-pourquoi-les-connecteurs-sfr-et-red-ne-fonctionnent-plus)"}},"zalando":{"longTerm":true,"message":{"fr":"Zalando a modifié son système d'information et son accès à vos données ne fonctionne plus. Ce connecteur n'est donc pas actuellement en mesure de récupérer vos données personnelles détenues par Zalando. Nous tentons de rétablir la situation dès que possible.","en":"Zalando's information system has changed and the related data access doesn't work anymore. This konnector is not currently able to get back your data from Zalando.<br/>We are trying to restore the situation as soon as possible."}}};

/***/ }),

/***/ "arv2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-dashboard_15efa9de81a9102e08257575dc312316",
  "use": "icon-dashboard_15efa9de81a9102e08257575dc312316-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-dashboard_15efa9de81a9102e08257575dc312316\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#FFE2A1\" d=\"M24 47C11.297 47 1 36.703 1 24S11.297 1 24 1s23 10.297 23 23-10.297 23-23 23zm19-23h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm-1.83-8.194l-3.696 1.53a1 1 0 0 0 .765 1.848l3.696-1.53a1 1 0 0 0-.765-1.848zM30.346 6.063l-1.53 3.696a1 1 0 0 0 1.848.765l1.53-3.696a1 1 0 0 0-1.848-.765zM23 5v4a1 1 0 0 0 2 0V5a1 1 0 0 0-2 0zm-7.194 1.828l1.53 3.696a1 1 0 0 0 1.848-.765l-1.53-3.696a1 1 0 1 0-1.848.765zm-5.948 4.44l2.824 2.833a1 1 0 1 0 1.417-1.413l-2.824-2.832a1 1 0 1 0-1.417 1.413zm-3.793 6.386l3.694 1.53a1 1 0 1 0 .765-1.847l-3.694-1.53a1 1 0 1 0-.765 1.847zM5 26h4a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z\" /><path stroke=\"#FF9125\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M22 33h4v8h-4zM30 33h4v8h-4zM14 33h4v8h-4zM27 24a3.001 3.001 0 0 1-6 0 3.001 3.001 0 0 1 6 0h0zm-.879-2.121l9.9-9.898\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "bECI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMessage", function() { return UpdateMessage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("buk/");
/* harmony import */ var cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KXWi");
/* harmony import */ var cozy_ui_react_Infos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("M2p0");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* global cozy */





var UpdateMessage =
/*#__PURE__*/
function (_Component) {
  _inherits(UpdateMessage, _Component);

  function UpdateMessage(props) {
    var _this;

    _classCallCheck(this, UpdateMessage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UpdateMessage).call(this, props));
    _this.state = {
      isRedirecting: false
    };
    _this.redirectToStore = _this.redirectToStore.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(UpdateMessage, [{
    key: "redirectToStore",
    value: function () {
      var _redirectToStore = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var konnector;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  isRedirecting: true
                });
                konnector = this.props.konnector;
                _context.prev = 2;
                _context.next = 5;
                return cozy.client.intents.redirect('io.cozy.apps', {
                  slug: konnector.slug,
                  step: 'update'
                });

              case 5:
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](2);

                /* eslint-disable-next-line no-console */
                console.error(_context.t0);
                this.setState({
                  isRedirecting: false
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 7]]);
      }));

      return function redirectToStore() {
        return _redirectToStore.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          t = _this$props.t,
          isBlocking = _this$props.isBlocking;
      var isRedirecting = this.state.isRedirecting;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Infos__WEBPACK_IMPORTED_MODULE_4__["default"], {
        actionButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: t('update.CTA'),
          theme: "danger",
          className: "u-m-0",
          onClick: this.redirectToStore,
          disabled: isRedirecting
        }),
        className: "u-maw-none",
        text: isBlocking ? t('update.blocking') : t('update.regular'),
        isImportant: isBlocking,
        title: t('update.title')
      });
    }
  }]);

  return UpdateMessage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
UpdateMessage.propTypes = {
  konnector: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  isBlocking: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  t: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__["translate"])()(UpdateMessage));

/***/ }),

/***/ "bqY2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-movies_cd88c27057187cc36fedc4ff3b1a25cd",
  "use": "icon-movies_cd88c27057187cc36fedc4ff3b1a25cd-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-movies_cd88c27057187cc36fedc4ff3b1a25cd\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#F52D2D\" d=\"M7 36c-1.654 0-3-1.346-3-3 0-1.655 1.346-3 3-3h13.068c1.43 1.204 2.285-2.3.906-3.882-1.474-1.69-5.217-1.47-4.37-.119H7c-3.86 0-7 3.14-7 7s3.14 7 7 7h34c1.102 0 2 .899 2 2 0 1.105-.898 2-2 2H21A2 2 0 0 0 21 48h20c3.308 0 6-2.692 6-6s-2.692-6-6-6H7z\" /><path fill=\"#FCBFBF\" d=\"M31 34c-9.389 0-17-7.612-17-17.001 0-9.39 7.611-17 17-17s17 7.61 17 17-7.611 17-17 17zm0-21.001c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z\" /><path fill=\"#F52D2D\" d=\"M19.057 12.078a1 1 0 0 1 .524-.574.987.987 0 0 1 .776-.028l5 1.91c.278.108.492.33.59.61a.997.997 0 0 1-.09.842c-.98 1.624-.626 3.322-.154 4.458.102.248.1.526-.004.774-.104.246-.304.44-.552.54l-4.724 1.864a.968.968 0 0 1-.424.118h-.042c-.462 0-.872-.314-.984-.762-1.468-3.686-.768-7.33.084-9.752zm7.132-7.12c.014-.002.028-.006.042-.006 2.9-1.136 6.292-1.092 9.69.104a1.002 1.002 0 0 1 .592 1.33L34.6 10.962a1 1 0 0 1-1.458.462 5.987 5.987 0 0 0-4.44.044.999.999 0 0 1-1.306-.54L25.533 6.44a.98.98 0 0 1-.124-.438l-.002-.022c-.02-.486.31-.916.782-1.022zm15.38 6.572a.962.962 0 0 1 .43-.12c.476-.038.912.296 1.026.758 1.47 3.69.772 7.334-.082 9.754a.994.994 0 0 1-.944.67.993.993 0 0 1-.356-.066l-5-1.912a1.005 1.005 0 0 1-.5-1.452c.982-1.624.626-3.32.156-4.458a.994.994 0 0 1 .556-1.312l4.714-1.862zm-5.74 17.496c-1.418.566-2.948.85-4.552.85-1.692 0-3.442-.314-5.2-.932a.994.994 0 0 1-.574-.524.983.983 0 0 1-.026-.778l1.91-5a.997.997 0 0 1 1.45-.498c1.28.772 2.852.818 4.458.154.248-.102.526-.1.772.002.248.106.442.306.54.556l1.868 4.724c.068.126.11.272.116.42.02.478-.3.912-.762 1.026z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "c8Vx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-sinister_bfc0d81f26efdcd815a5feb43d7a23c7",
  "use": "icon-sinister_bfc0d81f26efdcd815a5feb43d7a23c7-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-sinister_bfc0d81f26efdcd815a5feb43d7a23c7\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#FCBFBF\" d=\"M46.813 45.349L24.895 1.508c-.34-.678-1.45-.678-1.788 0l-22 44A1 1 0 0 0 2 46.956h44.02c.55 0 1-.449 1-1 0-.23-.078-.44-.208-.608z\" /><path fill=\"#F52D2D\" d=\"M24 41.172a1.912 1.912 0 1 1-.003-3.824 1.912 1.912 0 0 1 .004 3.825zm-1-23.911a1 1 0 0 1 2 0v15.303a1 1 0 0 1-2 0V17.26z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "cXEB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fvjX");
/* harmony import */ var redux_cozy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("m+TH");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1mXj");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_middlewares_konnectorsI18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UufI");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sINF");
/* harmony import */ var lib_CollectStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Lf2i");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cokx");








const configureStore = (client, context, options = {}) => {
  // Enable Redux dev tools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
  const reduxStore = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(reducers__WEBPACK_IMPORTED_MODULE_6__["default"])(), composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(undefined, [Object(redux_cozy_client__WEBPACK_IMPORTED_MODULE_1__["cozyMiddleware"])(client), Object(lib_middlewares_konnectorsI18n__WEBPACK_IMPORTED_MODULE_3__["default"])(options.lang), redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"], Object(redux_logger__WEBPACK_IMPORTED_MODULE_2__["createLogger"])()])));
  return Object.assign(new lib_CollectStore__WEBPACK_IMPORTED_MODULE_5__["default"](context, options), reduxStore);
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "cokx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstalledKonnectors", function() { return getInstalledKonnectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConnectionsByKonnector", function() { return getConnectionsByKonnector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConnectionsQueue", function() { return getConnectionsQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCreatedConnectionAccount", function() { return getCreatedConnectionAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKonnectorTriggersCount", function() { return getKonnectorTriggersCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKonnectorsInMaintenance", function() { return getKonnectorsInMaintenance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTriggerByKonnectorAndAccount", function() { return getTriggerByKonnectorAndAccount; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fvjX");
/* harmony import */ var redux_cozy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("m+TH");
/* harmony import */ var ducks_apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/n/j");
/* harmony import */ var ducks_accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3dAU");
/* harmony import */ var ducks_konnectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uZd2");
/* harmony import */ var ducks_triggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("rGvZ");
/* harmony import */ var ducks_connections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4YEU");







/* harmony default export */ __webpack_exports__["default"] = (() => Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  apps: ducks_apps__WEBPACK_IMPORTED_MODULE_2__["default"],
  connections: ducks_connections__WEBPACK_IMPORTED_MODULE_6__["default"],
  cozy: redux_cozy_client__WEBPACK_IMPORTED_MODULE_1__["reducer"]
})); // selectors

const getInstalledKonnectors = state => ducks_konnectors__WEBPACK_IMPORTED_MODULE_4__["getInstalledKonnectors"](state.cozy);
const getConnectionsByKonnector = (state, konnectorSlug) => ducks_connections__WEBPACK_IMPORTED_MODULE_6__["getConnectionsByKonnector"](state.connections, konnectorSlug, ducks_accounts__WEBPACK_IMPORTED_MODULE_3__["getIds"](state.cozy), ducks_konnectors__WEBPACK_IMPORTED_MODULE_4__["getSlugs"](state.cozy));
const getConnectionsQueue = state => ducks_connections__WEBPACK_IMPORTED_MODULE_6__["getQueue"](state.connections, ducks_konnectors__WEBPACK_IMPORTED_MODULE_4__["getIndexedKonnectors"](state.cozy));
const getCreatedConnectionAccount = state => ducks_accounts__WEBPACK_IMPORTED_MODULE_3__["getAccount"](state.cozy, ducks_connections__WEBPACK_IMPORTED_MODULE_6__["getCreatedAccount"](state.connections));
const getKonnectorTriggersCount = (state, konnector) => ducks_triggers__WEBPACK_IMPORTED_MODULE_5__["getKonnectorTriggers"](state.cozy, konnector, ducks_accounts__WEBPACK_IMPORTED_MODULE_3__["getIds"](state.cozy)).length;
const getKonnectorsInMaintenance = () => ducks_konnectors__WEBPACK_IMPORTED_MODULE_4__["fetchKonnectorsInMaintenance"]();
const getTriggerByKonnectorAndAccount = (state, konnector, account) => {
  const triggerId = ducks_connections__WEBPACK_IMPORTED_MODULE_6__["getTriggerIdByKonnectorAndAccount"](state.connections, konnector, account, ducks_accounts__WEBPACK_IMPORTED_MODULE_3__["getIds"](state.cozy));
  return ducks_triggers__WEBPACK_IMPORTED_MODULE_5__["getTrigger"](state.cozy, triggerId);
};

/***/ }),

/***/ "d/w2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("eO8H");
/* harmony import */ var cozy_ui_transpiled_react_stylesheet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/8/d");
/* harmony import */ var cozy_ui_transpiled_react_stylesheet_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cozy_ui_transpiled_react_stylesheet_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("SH7X");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("buk/");
/* harmony import */ var store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cXEB");
/* harmony import */ var redux_cozy_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("m+TH");
/* harmony import */ var cozy_doctypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Le8U");
/* harmony import */ var cozy_doctypes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cozy_doctypes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var containers_IntentHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("jpY6");
/* harmony import */ var styles_intents_styl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("8EAv");
/* harmony import */ var styles_intents_styl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styles_intents_styl__WEBPACK_IMPORTED_MODULE_10__);
/* global __DEVELOPMENT__ */











var lang = document.documentElement.getAttribute('lang') || 'en';
var context = window.context || 'cozy';
var ACCOUNTS_DOCTYPE = 'io.cozy.accounts';
document.addEventListener('DOMContentLoaded', function () {
  var root = document.querySelector('[role=application]');
  var appData = root.dataset;
  var client = new redux_cozy_client__WEBPACK_IMPORTED_MODULE_7__["CozyClient"]({
    cozyURL: "//".concat(appData.cozyDomain),
    token: appData.cozyToken
  }); // New improvements must be done with CozyClient

  var cozyClient = new cozy_client__WEBPACK_IMPORTED_MODULE_4___default.a({
    uri: "".concat(window.location.protocol, "//").concat(appData.cozyDomain),
    schema: {
      app: cozy_doctypes__WEBPACK_IMPORTED_MODULE_8__["Application"].schema,
      accounts: {
        doctype: ACCOUNTS_DOCTYPE,
        attributes: {},
        relationships: {
          master: {
            type: 'has-one',
            doctype: ACCOUNTS_DOCTYPE
          }
        }
      },
      permissions: {
        doctype: 'io.cozy.permissions',
        attributes: {}
      }
    },
    token: appData.cozyToken
  }); // store

  var store = Object(store_configureStore__WEBPACK_IMPORTED_MODULE_6__["default"])(client, context, {
    lang: lang
  });
  Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_client__WEBPACK_IMPORTED_MODULE_4__["CozyProvider"], {
    client: cozyClient
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_cozy_client__WEBPACK_IMPORTED_MODULE_7__["CozyProvider"], {
    domain: appData.cozyDomain,
    store: store,
    client: cozyClient,
    secure: !true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_5__["I18n"], {
    lang: lang,
    dictRequire: function dictRequire(lang) {
      return __webpack_require__("KAKi")("./".concat(lang));
    },
    context: context
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["HashRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(containers_IntentHandler__WEBPACK_IMPORTED_MODULE_9__["default"], {
    appData: appData
  }))))), document.querySelector('[role=application]'));
});

/***/ }),

/***/ "f8QR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-fallback_7fe9e4c862fc70a9f832e54b97207a5f",
  "use": "icon-fallback_7fe9e4c862fc70a9f832e54b97207a5f-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-fallback_7fe9e4c862fc70a9f832e54b97207a5f\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#D1D5DB\" d=\"M8 0h25.086a1 1 0 0 1 .707.293l9.914 9.914a1 1 0 0 1 .293.707V45a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3z\" /><path fill=\"#A3ACB8\" d=\"M32 0v12h12v-1.086a1 1 0 0 0-.293-.707L33.793.293A1 1 0 0 0 33.086 0H32z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "ffmE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-activity_3e6d178730c00d69992691bc1d060133",
  "use": "icon-activity_3e6d178730c00d69992691bc1d060133-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-activity_3e6d178730c00d69992691bc1d060133\"><g stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" fill-rule=\"evenodd\"><g stroke=\"#95999D\"><path d=\"M1.025 47h46M9.026 37h-6v10h6zM21.026 27h-6v20h6zM33.026 31h-6v16h6zM45.026 17h-6v30h6z\" /></g><path d=\"M8.025 23a2 2 0 1 1-3.998.001A2 2 0 0 1 8.025 23h0zm12-10a2 2 0 1 1-3.998.001A2 2 0 0 1 20.025 13h0zm12 4a2 2 0 1 1-3.998.001A2 2 0 0 1 32.025 17h0zm12-14a2 2 0 1 1-3.998.001A2 2 0 0 1 44.025 3h0zM7.563 21.72l8.928-7.441m3.425-.65l8.27 2.757M40.725 4.518L31.327 15.48\" stroke=\"currentColor\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "fi0+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-consumption_15efa9de81a9102e08257575dc312316",
  "use": "icon-consumption_15efa9de81a9102e08257575dc312316-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-consumption_15efa9de81a9102e08257575dc312316\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#FFE2A1\" d=\"M24 47C11.297 47 1 36.703 1 24S11.297 1 24 1s23 10.297 23 23-10.297 23-23 23zm19-23h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm-1.83-8.194l-3.696 1.53a1 1 0 0 0 .765 1.848l3.696-1.53a1 1 0 0 0-.765-1.848zM30.346 6.063l-1.53 3.696a1 1 0 0 0 1.848.765l1.53-3.696a1 1 0 0 0-1.848-.765zM23 5v4a1 1 0 0 0 2 0V5a1 1 0 0 0-2 0zm-7.194 1.828l1.53 3.696a1 1 0 0 0 1.848-.765l-1.53-3.696a1 1 0 1 0-1.848.765zm-5.948 4.44l2.824 2.833a1 1 0 1 0 1.417-1.413l-2.824-2.832a1 1 0 1 0-1.417 1.413zm-3.793 6.386l3.694 1.53a1 1 0 1 0 .765-1.847l-3.694-1.53a1 1 0 1 0-.765 1.847zM5 26h4a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z\" /><path stroke=\"#FF9125\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M22 33h4v8h-4zM30 33h4v8h-4zM14 33h4v8h-4zM27 24a3.001 3.001 0 0 1-6 0 3.001 3.001 0 0 1 6 0h0zm-.879-2.121l9.9-9.898\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "gAos":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KonnectorHeaderIcon", function() { return KonnectorHeaderIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_AppIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rvOC");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("buk/");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styles_konnectorHeaderIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("gpME");
/* harmony import */ var styles_konnectorHeaderIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_konnectorHeaderIcon__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var KonnectorHeaderIcon =
/*#__PURE__*/
function (_Component) {
  _inherits(KonnectorHeaderIcon, _Component);

  function KonnectorHeaderIcon() {
    _classCallCheck(this, KonnectorHeaderIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(KonnectorHeaderIcon).apply(this, arguments));
  }

  _createClass(KonnectorHeaderIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          center = _this$props.center,
          konnector = _this$props.konnector,
          t = _this$props.t;
      var _this$context = this.context,
          domain = _this$context.domain,
          secure = _this$context.secure;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: styles_konnectorHeaderIcon__WEBPACK_IMPORTED_MODULE_4___default.a["col-konnector-header-icon-wrapper".concat(center ? '--center' : '')]
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_AppIcon__WEBPACK_IMPORTED_MODULE_1__["AppIcon"], {
        alt: t('app.logo.alt', {
          name: konnector.name
        }),
        app: konnector,
        domain: domain,
        className: styles_konnectorHeaderIcon__WEBPACK_IMPORTED_MODULE_4___default.a["col-konnector-header-icon".concat(center ? '--center' : '')],
        secure: secure
      }));
    }
  }]);

  return KonnectorHeaderIcon;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
KonnectorHeaderIcon.contextTypes = {
  domain: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  secure: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__["translate"])()(KonnectorHeaderIcon));

/***/ }),

/***/ "gGE0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-waves_42e4b77ad71166af14a3146ea83184b5",
  "use": "icon-waves_42e4b77ad71166af14a3146ea83184b5-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-waves_42e4b77ad71166af14a3146ea83184b5\"><g stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" fill-rule=\"evenodd\"><path stroke=\"#9AE6B3\" d=\"M40.613 39.898A22.924 22.924 0 0 0 47 24C47 11.296 36.703 1 24 1 11.297 1 1 11.296 1 24c0 6.166 2.434 11.766 6.388 15.898\" /><path stroke=\"#9AE6B3\" d=\"M11.816 32.727A14.91 14.91 0 0 1 9 24c0-8.284 6.714-15 15-15 8.282 0 15 6.716 15 15 0 3.258-1.052 6.266-2.816 8.726\" /><path stroke=\"#9AE6B3\" d=\"M17.016 24.307C17.012 24.203 17 24.1 17 24c0-3.916 3.2-7 7-7 3.808 0 7 3.09 7 7 0 .1-.012.202-.016.306\" /><path fill=\"#35CE68\" stroke=\"#35CE68\" d=\"M14 47h20L24 27z\" /><path stroke=\"#35CE68\" d=\"M24 27v-4\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "gpME":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"col-konnector-header-icon-wrapper":"col-konnector-header-icon-wrapper--1oMyA","col-konnector-header-icon-wrapper--center":"col-konnector-header-icon-wrapper--center--3aLBw","col-konnector-header-icon":"col-konnector-header-icon--2Yxl_","col-konnector-header-icon--center":"col-konnector-header-icon--center--3rGkD"};

/***/ }),

/***/ "gwpp":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"col-account-connection":"col-account-connection--3AgeF"};

/***/ }),

/***/ "iEAv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-videostream_cd88c27057187cc36fedc4ff3b1a25cd",
  "use": "icon-videostream_cd88c27057187cc36fedc4ff3b1a25cd-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-videostream_cd88c27057187cc36fedc4ff3b1a25cd\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#F52D2D\" d=\"M7 36c-1.654 0-3-1.346-3-3 0-1.655 1.346-3 3-3h13.068c1.43 1.204 2.285-2.3.906-3.882-1.474-1.69-5.217-1.47-4.37-.119H7c-3.86 0-7 3.14-7 7s3.14 7 7 7h34c1.102 0 2 .899 2 2 0 1.105-.898 2-2 2H21A2 2 0 0 0 21 48h20c3.308 0 6-2.692 6-6s-2.692-6-6-6H7z\" /><path fill=\"#FCBFBF\" d=\"M31 34c-9.389 0-17-7.612-17-17.001 0-9.39 7.611-17 17-17s17 7.61 17 17-7.611 17-17 17zm0-21.001c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z\" /><path fill=\"#F52D2D\" d=\"M19.057 12.078a1 1 0 0 1 .524-.574.987.987 0 0 1 .776-.028l5 1.91c.278.108.492.33.59.61a.997.997 0 0 1-.09.842c-.98 1.624-.626 3.322-.154 4.458.102.248.1.526-.004.774-.104.246-.304.44-.552.54l-4.724 1.864a.968.968 0 0 1-.424.118h-.042c-.462 0-.872-.314-.984-.762-1.468-3.686-.768-7.33.084-9.752zm7.132-7.12c.014-.002.028-.006.042-.006 2.9-1.136 6.292-1.092 9.69.104a1.002 1.002 0 0 1 .592 1.33L34.6 10.962a1 1 0 0 1-1.458.462 5.987 5.987 0 0 0-4.44.044.999.999 0 0 1-1.306-.54L25.533 6.44a.98.98 0 0 1-.124-.438l-.002-.022c-.02-.486.31-.916.782-1.022zm15.38 6.572a.962.962 0 0 1 .43-.12c.476-.038.912.296 1.026.758 1.47 3.69.772 7.334-.082 9.754a.994.994 0 0 1-.944.67.993.993 0 0 1-.356-.066l-5-1.912a1.005 1.005 0 0 1-.5-1.452c.982-1.624.626-3.32.156-4.458a.994.994 0 0 1 .556-1.312l4.714-1.862zm-5.74 17.496c-1.418.566-2.948.85-4.552.85-1.692 0-3.442-.314-5.2-.932a.994.994 0 0 1-.574-.524.983.983 0 0 1-.026-.778l1.91-5a.997.997 0 0 1 1.45-.498c1.28.772 2.852.818 4.458.154.248-.102.526-.1.772.002.248.106.442.306.54.556l1.868 4.724c.068.126.11.272.116.42.02.478-.3.912-.762 1.026z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "iUaz":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en-SG": "zavE",
	"./en-SG.js": "zavE",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "iUaz";

/***/ }),

/***/ "ie9e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-weight_9601acf6c9e9695e5d8c406b71217ed7",
  "use": "icon-weight_9601acf6c9e9695e5d8c406b71217ed7-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-weight_9601acf6c9e9695e5d8c406b71217ed7\"><g stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" fill-rule=\"evenodd\"><path stroke=\"#95999D\" d=\"M43 45H5c-2.202 0-4-1.643-4-3.652V6.652C1 4.642 2.798 3 5 3h38c2.2 0 4 1.642 4 3.652v34.696C47 43.357 45.2 45 43 45z\" /><g stroke=\"currentColor\" transform=\"translate(16 9)\"><circle cx=\"8\" cy=\"8\" r=\"8\" /><path d=\"M1 12h14M7 32h2M8 12l3-7\" /></g></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "iwqY":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./icon-activity.svg": "ffmE",
	"./icon-appointment.svg": "GqSd",
	"./icon-arrow-left.svg": "30Td",
	"./icon-bankAccounts.svg": "TxWu",
	"./icon-bankTransactions.svg": "2Yr2",
	"./icon-bill.svg": "7iWW",
	"./icon-bloodPressure.svg": "4zVC",
	"./icon-calendar.svg": "y1LY",
	"./icon-call-log.svg": "CpzW",
	"./icon-categories-active.svg": "nPAt",
	"./icon-categories.svg": "kqSk",
	"./icon-certificate.svg": "2Uj3",
	"./icon-check.svg": "NYQX",
	"./icon-commit.svg": "pcU9",
	"./icon-consumption.svg": "fi0+",
	"./icon-contact.svg": "KWOR",
	"./icon-contract.svg": "PXPp",
	"./icon-courseMaterial.svg": "REJr",
	"./icon-dashboard.svg": "arv2",
	"./icon-document.svg": "VhrW",
	"./icon-event.svg": "OgEr",
	"./icon-fallback.svg": "f8QR",
	"./icon-family.svg": "/HEB",
	"./icon-files-pen.svg": "2sw9",
	"./icon-forbidden.svg": "PUsB",
	"./icon-geolocation.svg": "Vwsq",
	"./icon-geopoint.svg": "tEly",
	"./icon-graduated.svg": "YhzV",
	"./icon-heartbeat.svg": "uE6Y",
	"./icon-home.svg": "Souy",
	"./icon-money.svg": "vjPt",
	"./icon-movies.svg": "bqY2",
	"./icon-new.svg": "J+7E",
	"./icon-phonecommunicationlog.svg": "ksYY",
	"./icon-picture.svg": "K2+G",
	"./icon-pin-active.svg": "HGt1",
	"./icon-pin.svg": "S7vQ",
	"./icon-podcast.svg": "tLC1",
	"./icon-profile.svg": "7J9o",
	"./icon-refund.svg": "+Zor",
	"./icon-sinister.svg": "c8Vx",
	"./icon-sleepTime.svg": "KxmK",
	"./icon-stepsNumber.svg": "LIMy",
	"./icon-sync.svg": "3Oar",
	"./icon-temperature.svg": "NkDc",
	"./icon-travelDate.svg": "2Hrj",
	"./icon-tweet.svg": "Dred",
	"./icon-videostream.svg": "iEAv",
	"./icon-warning.svg": "Acww",
	"./icon-waves.svg": "gGE0",
	"./icon-weight.svg": "ie9e"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "iwqY";

/***/ }),

/***/ "jPoV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNC_BIDIRECTIONAL", function() { return SYNC_BIDIRECTIONAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNC_TO", function() { return SYNC_TO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNC_FROM", function() { return SYNC_FROM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PouchdbAdapter; });
/* harmony import */ var _slices_synchronization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("skrj");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global cozy, PouchDB, pouchdbFind */

const REPLICATION_INTERVAL = 30000;
const SYNC_BIDIRECTIONAL = 'SYNC_BIDIRECTIONAL';
const SYNC_TO = 'SYNC_TO';
const SYNC_FROM = 'SYNC_FROM';
class PouchdbAdapter {
  constructor() {
    PouchDB.plugin(pouchdbFind);
    this.instances = {};
    this.doctypes = [];
  }

  registerDoctypes(doctypes) {
    this.doctypes = doctypes;
  }

  getDatabase(doctype) {
    return cozy.client.offline.getDatabase(doctype); // For now we let cozy-client-js creates PouchDB instances
  }

  getReplicationBaseUrl() {
    return cozy.client.authorize().then(credentials => {
      const basic = credentials.token.toBasicAuth();
      return `${cozy.client._url}/data/`.replace('//', `//${basic}`);
    });
  }

  getSeqNumber(doctype) {
    return this.getDatabase(doctype).info().then(result => result.update_seq);
  }

  async sync(dispatch, direction = SYNC_BIDIRECTIONAL) {
    const baseUrl = await this.getReplicationBaseUrl();

    for (let doctype of this.doctypes) {
      const seqNumber = await this.getSeqNumber(doctype);
      await dispatch(Object(_slices_synchronization__WEBPACK_IMPORTED_MODULE_0__["startDoctypeSync"])(doctype, seqNumber));
      this.syncDoctype(doctype, `${baseUrl}${doctype}`, dispatch, direction);
    }
  }

  syncDoctype(doctype, replicationUrl, dispatch, direction = SYNC_BIDIRECTIONAL) {
    return new Promise((resolve, reject) => {
      const db = this.getDatabase(doctype);
      let syncHandler;
      if (direction === SYNC_TO) syncHandler = db.replicate.to(replicationUrl);else if (direction === SYNC_FROM) syncHandler = db.replicate.from(replicationUrl);else syncHandler = db.sync(replicationUrl);
      syncHandler.on('complete', info => {
        dispatch(Object(_slices_synchronization__WEBPACK_IMPORTED_MODULE_0__["syncDoctypeOk"])(doctype, info));
        this.scheduleNextSync(doctype, replicationUrl, dispatch, direction);
        resolve(info);
      }).on('error', err => {
        if (err.error === 'code=400, message=Expired token') {
          return cozy.client.authorize().then(({
            client,
            token
          }) => {
            cozy.client.auth.refreshToken(cozy, client, token).then(newToken => cozy.client.saveCredentials(client, newToken)).then(() => this.syncDoctype(doctype, replicationUrl));
          });
        } else if (err.status !== 404) {
          // A 404 error on some doctypes is perfectly normal when there is no data
          dispatch(Object(_slices_synchronization__WEBPACK_IMPORTED_MODULE_0__["syncDoctypeError"])(doctype, err));
          this.scheduleNextSync(doctype, replicationUrl, dispatch);
          reject(err);
        }
      });
    });
  }

  scheduleNextSync(doctype, replicationUrl, dispatch, direction) {
    setTimeout(() => {
      this.syncDoctype(doctype, replicationUrl, dispatch, direction);
    }, REPLICATION_INTERVAL);
  }

  async fetchDocuments(doctype) {
    const resp = await this.getDatabase(doctype).allDocs({
      include_docs: true
    });
    return {
      data: resp.rows.filter(row => !row.doc.hasOwnProperty('views')).map(row => _objectSpread({}, row.doc, {
        id: row.id,
        _type: doctype
      })),
      meta: {
        count: resp.total_rows
      },
      skip: resp.offset,
      next: false
    };
  }

  async queryDocuments(doctype, index, options) {
    const queryOptions = _objectSpread({}, options, {
      fields: [...options.fields, '_id'],
      sort: options.sort ? Object.keys(options.sort).map(k => ({
        [k]: options.sort[k]
      })) : undefined
    });

    const resp = await this.getDatabase(doctype).find(queryOptions);
    return {
      data: resp.docs.map(doc => _objectSpread({}, doc, {
        id: doc._id,
        _type: doctype
      })),
      meta: {
        count: resp.docs.length
      },
      skip: 0,
      next: false
    };
  }

  async fetchDocument(doctype, id) {
    const resp = await this.getDatabase(doctype).get(id, {
      revs_info: true
    }); // We need the revs_info option to get the _rev property

    return {
      data: [_objectSpread({}, resp, {
        id: resp.id,
        _id: resp.id,
        _type: doctype
      })]
    };
  }

  async createDocument(doctype, doc) {
    const resp = await this.getDatabase(doctype).post(doc);
    return {
      data: [_objectSpread({}, doc, {
        id: resp.id,
        _id: resp.id,
        _type: doctype,
        _rev: resp.rev
      })]
    };
  }

  async updateDocument(doc) {
    // TODO: _* properties are reserved by CouchDB, so we can't send the doc with its _type property...
    const {
      _type
    } = doc,
          safeDoc = _objectWithoutProperties(doc, ["_type"]);

    const resp = await this.getDatabase(_type).put(safeDoc);
    return {
      data: [_objectSpread({}, doc, {
        _rev: resp.rev
      })]
    };
  }

  async deleteDocument(doc) {
    await this.getDatabase(doc._type).remove(doc);
    return {
      data: [doc]
    };
  }

  createIndex(doctype, fields) {
    return this.getDatabase(doctype).createIndex({
      index: {
        fields
      }
    });
  }

  fetchFileByPath() {
    throw new Error('Not implemented');
  }

  createFile() {
    throw new Error('Not implemented');
  }

  trashFile() {
    throw new Error('Not implemented');
  }

  fetchReferencedFiles() {
    throw new Error('Not implemented');
  }

  addReferencedFiles() {
    throw new Error('Not implemented');
  }

  removeReferencedFiles() {
    throw new Error('Not implemented');
  }

}

/***/ }),

/***/ "jpY6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("buk/");
/* harmony import */ var cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("y6ex");
/* harmony import */ var cozy_ui_react_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("V2U0");
/* harmony import */ var components_appEntryPoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("mD6Q");
/* harmony import */ var containers_IntentService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("XSRU");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var IntentHandler =
/*#__PURE__*/
function (_Component) {
  _inherits(IntentHandler, _Component);

  function IntentHandler(props, context) {
    var _this;

    _classCallCheck(this, IntentHandler);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IntentHandler).call(this, props, context));
    _this.store = context.store;
    _this.state = {
      isInitializing: true
    };

    _this.store.createIntentService().then(function (service) {
      _this.setState({
        isInitializing: false,
        service: service
      });
    }).catch(function (error) {
      _this.setState({
        isInitializing: false,
        error: {
          message: 'intent.service.error.initialization',
          reason: error.message
        }
      });
    });

    return _this;
  }

  _createClass(IntentHandler, [{
    key: "terminate",
    value: function terminate(account) {
      var service = this.state.service;
      service.terminate(account);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      var service = this.state.service;
      service.cancel();
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      this.setState({
        error: {
          message: 'intent.service.error.creation',
          reason: error.message
        }
      });
      throw error;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // const { data } = this.props
      var _this$props = this.props,
          appData = _this$props.appData,
          accounts = _this$props.accounts,
          konnectors = _this$props.konnectors,
          triggers = _this$props.triggers,
          t = _this$props.t;
      var _this$state = this.state,
          error = _this$state.error,
          service = _this$state.service;
      var isInitializing = this.state.isInitializing;
      isInitializing = isInitializing || [accounts, konnectors, triggers].find(function (collection) {
        return ['pending', 'loading'].includes(collection.fetchStatus);
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "coz-service"
      }, isInitializing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "coz-service-loading"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "xxlarge"
      })), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "coz-error coz-service-error"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, t(error.message)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, t('intent.service.error.cause', {
        error: error.reason
      }))), !isInitializing && !error && // Here we should render a component based on the intent action.
      // For now, our action is only CREATE on io.cozy.accounts. So here
      // we should render a component named CreateAccountService.
      // IntentService is just here for legacy reason and should
      // disappear.
      // In the future we may test the intent action and render a
      // specific component for every action.
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(containers_IntentService__WEBPACK_IMPORTED_MODULE_6__["default"], {
        appData: appData,
        data: service.getData(),
        onTerminate: function onTerminate(account) {
          return _this2.terminate(account);
        },
        onCancel: function onCancel() {
          return _this2.cancel();
        },
        service: service
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_3__["Sprite"], null));
    }
  }]);

  return IntentHandler;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

IntentHandler.contextTypes = {
  store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(components_appEntryPoint__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__["translate"])()(IntentHandler)));

/***/ }),

/***/ "kGy0":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en.json": "8WAw",
	"./fr.json": "H488"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "kGy0";

/***/ }),

/***/ "kLNr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeAll", function() { return subscribeAll; });
/* harmony import */ var lib_realtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BI92");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jobs lib ready to be added to cozy-client-js */

const JOBS_DOCTYPE = 'io.cozy.jobs';

function decode(job) {
  // Retrieve message properties directly into job
  return _objectSpread({}, job, job.message);
}

function subscribe(cozy, job) {
  return lib_realtime__WEBPACK_IMPORTED_MODULE_0__["subscribe"](cozy, JOBS_DOCTYPE, job, decode);
}
function subscribeAll(cozy) {
  return lib_realtime__WEBPACK_IMPORTED_MODULE_0__["subscribeAll"](cozy, JOBS_DOCTYPE, decode);
}

/***/ }),

/***/ "kqSk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-categories_4d4e4e7a64d020feafa38f772bdd107c",
  "use": "icon-categories_4d4e4e7a64d020feafa38f772bdd107c-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-categories_4d4e4e7a64d020feafa38f772bdd107c\"><path d=\"M3.243 6.034L.671 4.842a.779.779 0 0 1-.396-.397c-.197-.496 0-.894.396-1.093L7.792.075c.198-.1.395-.1.594 0l7.12 3.277a.746.746 0 0 1 .494.696.746.746 0 0 1-.494.695l-2.67 1.291-.594.298-3.856 1.887a.694.694 0 0 1-.693 0c-.198-.105-3.857-1.887-3.857-1.887l-.593-.298zm12.03 4.807c.78.4.675 1.345-.086 1.756L8.421 15.9a.985.985 0 0 1-.864 0L.572 12.49a.779.779 0 0 1-.396-.397c-.197-.497 0-.894.396-1.093l.89-.397 2.472 1.192 3.627 1.73a.984.984 0 0 0 .857-.005l3.725-1.825 2.373-1.19.756.336zm.53-3.218c.197.397 0 .894-.594 1.192l-2.274 1.092-.594.3-4.058 2.036a.98.98 0 0 1-.883 0l-4.058-2.037-.594-.299L.474 8.815a.777.777 0 0 1-.396-.398c-.198-.496 0-.894.396-1.092l1.285-.596 2.176.993 3.626 1.73a.986.986 0 0 0 .858-.005l4.12-2.023 1.582-.794 1.286.596a.771.771 0 0 1 .396.397z\" fill=\"#95999D\" fill-rule=\"evenodd\" /></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "ksYY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-phonecommunicationlog_4cf33585623afb4f23724bc7a06f5746",
  "use": "icon-phonecommunicationlog_4cf33585623afb4f23724bc7a06f5746-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-phonecommunicationlog_4cf33585623afb4f23724bc7a06f5746\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#A9CBF9\" d=\"M9 2C7.344 2 6 3.346 6 5s1.345 3 3 3h32.992c1.107 0 2.007.894 2.007 1.997v36.006A2 2 0 0 1 41.992 48H8.999c-2.756 0-5-2.244-5-5V6c0-.108.018-.208.048-.306A5.007 5.007 0 0 1 9 0h34a1 1 0 1 1 0 2H9zm0 2h32a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z\" /><path fill=\"#297EF1\" d=\"M21.818 22.32a2.52 2.52 0 0 0 .002-3.566l-2.676-2.678a2.528 2.528 0 0 0-3.57 0l-1.47 1.468a3.781 3.781 0 0 0-.474 4.762 58.547 58.547 0 0 0 16.4 16.398 3.784 3.784 0 0 0 4.762-.474l1.468-1.468a2.522 2.522 0 0 0 0-3.568l-2.676-2.676a2.518 2.518 0 0 0-3.568 0l-.892.89a60.016 60.016 0 0 1-8.198-8.196l.892-.892z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "m+TH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CozyProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Al7w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CozyProvider", function() { return _CozyProvider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _CozyClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OiML");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CozyClient", function() { return _CozyClient__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YAxW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cozyConnect", function() { return _connect__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vwW3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cozyMiddleware", function() { return _middleware__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("GbhZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeActionCreator", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["makeActionCreator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchApps", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["fetchApps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchCollection", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["fetchCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchDocument", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["fetchDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchReferencedFiles", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["fetchReferencedFiles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchKonnectors", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["fetchKonnectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchTriggers", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["fetchTriggers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addReferencedFiles", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["addReferencedFiles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeReferencedFiles", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["removeReferencedFiles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applySelectorForAction", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["applySelectorForAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enhancePropsForActions", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["enhancePropsForActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCollection", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["getCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["getDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDocument", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["createDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTrigger", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["createTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "launchTrigger", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["launchTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateDocument", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["updateDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteDocument", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["deleteDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteTrigger", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["deleteTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFile", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["createFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trashFile", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["trashFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_DOCUMENT", function() { return _reducer__WEBPACK_IMPORTED_MODULE_4__["CREATE_DOCUMENT"]; });

/* harmony import */ var _slices_sharings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("og8P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSharings", function() { return _slices_sharings__WEBPACK_IMPORTED_MODULE_5__["fetchSharings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchContacts", function() { return _slices_sharings__WEBPACK_IMPORTED_MODULE_5__["fetchContacts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSharingDetails", function() { return _slices_sharings__WEBPACK_IMPORTED_MODULE_5__["getSharingDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "share", function() { return _slices_sharings__WEBPACK_IMPORTED_MODULE_5__["share"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unshare", function() { return _slices_sharings__WEBPACK_IMPORTED_MODULE_5__["unshare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leave", function() { return _slices_sharings__WEBPACK_IMPORTED_MODULE_5__["leave"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shareByLink", function() { return _slices_sharings__WEBPACK_IMPORTED_MODULE_5__["shareByLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revokeLink", function() { return _slices_sharings__WEBPACK_IMPORTED_MODULE_5__["revokeLink"]; });

/* harmony import */ var _slices_synchronization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("skrj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startSync", function() { return _slices_synchronization__WEBPACK_IMPORTED_MODULE_6__["startSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFirstSync", function() { return _slices_synchronization__WEBPACK_IMPORTED_MODULE_6__["isFirstSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSynced", function() { return _slices_synchronization__WEBPACK_IMPORTED_MODULE_6__["isSynced"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("GfxC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadArchive", function() { return _helpers__WEBPACK_IMPORTED_MODULE_7__["downloadArchive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return _helpers__WEBPACK_IMPORTED_MODULE_7__["downloadFile"]; });










/***/ }),

/***/ "mBgC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KonnectorEdit", function() { return KonnectorEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OFL0");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_harvest_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iDCe");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("buk/");
/* harmony import */ var cozy_ui_react_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rMqp");
/* harmony import */ var assets_sprites_icon_warning_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Acww");
/* harmony import */ var components_AccountConnectionData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("UJB8");
/* harmony import */ var components_AccountLogout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("LB1v");
/* harmony import */ var components_DescriptionContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("CB1n");
/* harmony import */ var components_Banners_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("H1Xl");
/* harmony import */ var components_KonnectorMaintenance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Lo76");
/* harmony import */ var components_KonnectorSync__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("s8SE");
/* harmony import */ var components_TriggerFolderLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("8MA2");
/* harmony import */ var styles_konnectorEdit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("Lz4C");
/* harmony import */ var styles_konnectorEdit__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(styles_konnectorEdit__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lib_konnectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("8CvS");















var KonnectorEdit = function KonnectorEdit(props) {
  var t = props.t,
      account = props.account,
      connector = props.connector,
      error = props.error,
      lastSuccess = props.lastSuccess,
      onDeleteError = props.onDeleteError,
      onDeleteSuccess = props.onDeleteSuccess,
      submitting = props.submitting,
      trigger = props.trigger,
      maintenance = props.maintenance,
      lang = props.lang;
  var warningIcon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: styles_konnectorEdit__WEBPACK_IMPORTED_MODULE_13___default.a['item-status-icon']
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: "#".concat(assets_sprites_icon_warning_svg__WEBPACK_IMPORTED_MODULE_5__["default"].id)
  }));
  var hasLoginError = Object(lib_konnectors__WEBPACK_IMPORTED_MODULE_14__["isKonnectorLoginError"])(error);
  var hasErrorExceptLogin = !!error && !hasLoginError;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles_konnectorEdit__WEBPACK_IMPORTED_MODULE_13___default.a['col-account-edit-content']
  }, !maintenance && trigger && !!error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Banners_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__["default"], {
    konnector: connector,
    error: error,
    isKonnectorRunning: submitting,
    trigger: trigger
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Tabs__WEBPACK_IMPORTED_MODULE_4__["Tabs"], {
    initialActiveTab: hasLoginError ? 'account' : 'sync',
    className: styles_konnectorEdit__WEBPACK_IMPORTED_MODULE_13___default.a['col-account-edit-tabs']
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Tabs__WEBPACK_IMPORTED_MODULE_4__["TabList"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Tabs__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    name: "sync",
    className: styles_konnectorEdit__WEBPACK_IMPORTED_MODULE_13___default.a['col-account-edit-tab']
  }, t('account.config.tabs.sync'), hasErrorExceptLogin && warningIcon), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Tabs__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    name: "account",
    className: styles_konnectorEdit__WEBPACK_IMPORTED_MODULE_13___default.a['col-account-edit-tab']
  }, t('account.config.tabs.account'), hasLoginError && warningIcon), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Tabs__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    name: "data",
    className: styles_konnectorEdit__WEBPACK_IMPORTED_MODULE_13___default.a['col-account-edit-tab']
  }, t('account.config.tabs.data'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Tabs__WEBPACK_IMPORTED_MODULE_4__["TabPanels"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Tabs__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], {
    name: "sync",
    className: styles_konnectorEdit__WEBPACK_IMPORTED_MODULE_13___default.a['col-account-edit-tabpanel']
  }, maintenance && maintenance.longTerm && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_KonnectorMaintenance__WEBPACK_IMPORTED_MODULE_10__["default"], {
    maintenance: maintenance,
    lang: lang,
    konnectorName: connector.name
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_KonnectorSync__WEBPACK_IMPORTED_MODULE_11__["default"], {
    frequency: connector.frequency || 'weekly',
    lastSuccessDate: lastSuccess,
    maintenance: maintenance,
    submitting: submitting,
    trigger: trigger
  }), lodash_has__WEBPACK_IMPORTED_MODULE_1___default()(trigger, 'message.folder_to_save') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_DescriptionContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: t('account.folder.withoutSettings.title')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "u-mv-half"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TriggerFolderLink__WEBPACK_IMPORTED_MODULE_12__["default"], {
    folderId: trigger.message.folder_to_save,
    label: t('account.folder.link')
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Tabs__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], {
    name: "account",
    className: styles_konnectorEdit__WEBPACK_IMPORTED_MODULE_13___default.a['col-account-edit-tabpanel']
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_DescriptionContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    messages: [Object(lib_konnectors__WEBPACK_IMPORTED_MODULE_14__["getKonnectorMessage"])(t, connector, 'terms')]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_harvest_lib__WEBPACK_IMPORTED_MODULE_2__["TriggerManager"], {
    account: account,
    konnector: connector,
    showError: false,
    trigger: trigger,
    running: submitting
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_AccountLogout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    account: account,
    onError: onDeleteError,
    onSuccess: onDeleteSuccess
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Tabs__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], {
    name: "data",
    className: styles_konnectorEdit__WEBPACK_IMPORTED_MODULE_13___default.a['col-account-edit-tabpanel']
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_AccountConnectionData__WEBPACK_IMPORTED_MODULE_6__["default"], {
    connector: connector
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_3__["translate"])()(KonnectorEdit));

/***/ }),

/***/ "mD6Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_cozy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("m+TH");
/* harmony import */ var ducks_accounts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3dAU");
/* harmony import */ var ducks_konnectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uZd2");
/* harmony import */ var ducks_jobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sR/t");
/* harmony import */ var ducks_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rGvZ");






var mapDocumentsToProps = function mapDocumentsToProps() {
  return {
    accounts: Object(ducks_accounts__WEBPACK_IMPORTED_MODULE_1__["fetchAccounts"])(),
    jobs: Object(ducks_jobs__WEBPACK_IMPORTED_MODULE_3__["fetchKonnectorJobs"])(),
    konnectors: Object(ducks_konnectors__WEBPACK_IMPORTED_MODULE_2__["fetchKonnectors"])(),
    triggers: Object(ducks_triggers__WEBPACK_IMPORTED_MODULE_4__["fetchTriggers"])() // TODO: fetch registry
    // registry: fetchRegistry()

  };
};

var appEntryPoint = function appEntryPoint(WrappedComponent, selectData) {
  return Object(redux_cozy_client__WEBPACK_IMPORTED_MODULE_0__["cozyConnect"])(mapDocumentsToProps)(WrappedComponent, selectData);
};

/* harmony default export */ __webpack_exports__["default"] = (appEntryPoint);

/***/ }),

/***/ "nPAt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-categories-active_e77456dca4b6770e95049d75174e5548",
  "use": "icon-categories-active_e77456dca4b6770e95049d75174e5548-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-categories-active_e77456dca4b6770e95049d75174e5548\"><path d=\"M3.243 6.034L.671 4.842a.779.779 0 0 1-.396-.397c-.197-.496 0-.894.396-1.093L7.792.075c.198-.1.395-.1.594 0l7.12 3.277a.746.746 0 0 1 .494.696.746.746 0 0 1-.494.695l-2.67 1.291-.594.298-3.856 1.887a.694.694 0 0 1-.693 0c-.198-.105-3.857-1.887-3.857-1.887l-.593-.298zm12.03 4.807c.78.4.675 1.345-.086 1.756L8.421 15.9a.985.985 0 0 1-.864 0L.572 12.49a.779.779 0 0 1-.396-.397c-.197-.497 0-.894.396-1.093l.89-.397 2.472 1.192 3.627 1.73a.984.984 0 0 0 .857-.005l3.725-1.825 2.373-1.19.756.336zm.53-3.218c.197.397 0 .894-.594 1.192l-2.274 1.092-.594.3-4.058 2.036a.98.98 0 0 1-.883 0l-4.058-2.037-.594-.299L.474 8.815a.777.777 0 0 1-.396-.398c-.198-.496 0-.894.396-1.092l1.285-.596 2.176.993 3.626 1.73a.986.986 0 0 0 .858-.005l4.12-2.023 1.582-.794 1.286.596a.771.771 0 0 1 .396.397z\" fill=\"#297EF2\" fill-rule=\"evenodd\" /></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "oMPT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapValues", function() { return mapValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterValues", function() { return filterValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeObjectProperty", function() { return removeObjectProperty; });
const mapValues = (object, transform) => {
  let result = {};

  for (const key in object) {
    result[key] = transform(object[key], key);
  }

  return result;
};
const filterValues = (object, filter) => {
  let result = {};

  for (const key in object) {
    if (filter(object[key], key)) {
      result[key] = object[key];
    }
  }

  return result;
};
const removeObjectProperty = (obj, prop) => {
  return Object.keys(obj).reduce((result, key) => {
    if (key !== prop) {
      result[key] = obj[key];
    }

    return result;
  }, {});
};

/***/ }),

/***/ "og8P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SHARINGS", function() { return FETCH_SHARINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSharings", function() { return fetchSharings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "share", function() { return share; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unshare", function() { return unshare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leave", function() { return leave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shareByLink", function() { return shareByLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revokeLink", function() { return revokeLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchContacts", function() { return fetchContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharings", function() { return getSharings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharingStatus", function() { return getSharingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharingDetails", function() { return getSharingDetails; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fvjX");
/* harmony import */ var cozy_ui_react_helpers_tracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4kcP");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("GbhZ");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const FETCH_SHARINGS = 'FETCH_SHARINGS';
const RECEIVE_SHARINGS_DATA = 'RECEIVE_SHARINGS_DATA';
const RECEIVE_FETCH_SHARINGS_ERROR = 'RECEIVE_FETCH_SHARINGS_ERROR';
const CREATE_SHARING = 'CREATE_SHARING';
const RECEIVE_NEW_SHARING = 'RECEIVE_NEW_SHARING';
const CREATE_SHARING_LINK = 'CREATE_SHARING_LINK';
const RECEIVE_NEW_SHARING_LINK = 'RECEIVE_NEW_SHARING_LINK';
const REVOKE_SHARING_LINK = 'REVOKE_SHARING_LINK';
const RECEIVE_SHARING_LINK_REVOKE = 'RECEIVE_SHARING_LINK_REVOKE';
const REVOKE_SHARING = 'REVOKE_SHARING';
const RECEIVE_SHARING_REVOKE = 'RECEIVE_SHARING_REVOKE';
const RECEIVE_ERROR = 'RECEIVE_ERROR';

const removeRecipient = (recipients, recipientId) => {
  const idx = recipients.findIndex(r => r.recipient.id === recipientId);
  return [...recipients.slice(0, idx), ...recipients.slice(idx + 1)];
};

const documents = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SHARINGS_DATA:
      return action.response.sharings;

    case RECEIVE_NEW_SHARING:
      return [...state, action.response];

    case RECEIVE_SHARING_REVOKE:
      {
        const idx = state.findIndex(s => s.attributes.sharing_id === action.sharingId);
        if (idx === -1) return state;
        const sharing = state[idx];
        const loneRecipient = sharing.attributes.recipients === undefined || // for recipient-side revocation
        sharing.attributes.recipients.length === 1;
        const newState = loneRecipient ? _objectSpread({}, sharing, {
          attributes: _objectSpread({}, sharing.attributes, {
            revoked: true
          })
        }) : _objectSpread({}, sharing, {
          attributes: _objectSpread({}, sharing.attributes, {
            recipients: removeRecipient(sharing.attributes.recipients, action.recipientId)
          })
        });
        return [...state.slice(0, idx), newState, ...state.slice(idx + 1)];
      }

    default:
      return state;
  }
};

const doctypePermsetInitialState = {
  fetchStatus: 'loading',
  byMe: [],
  byLink: [],
  withMe: []
};

const permissions = (state = {}, action) => {
  let idx;

  switch (action.type) {
    case FETCH_SHARINGS:
      if (state[action.doctype]) {
        return _objectSpread({}, state, {
          [action.doctype]: _objectSpread({}, state[action.doctype], {
            fetchStatus: 'loading'
          })
        });
      }

      return _objectSpread({}, state, {
        [action.doctype]: doctypePermsetInitialState
      });

    case RECEIVE_SHARINGS_DATA:
      return _objectSpread({}, state, {
        [action.doctype]: _objectSpread({
          fetchStatus: 'loaded'
        }, action.response.permissions)
      });

    case RECEIVE_FETCH_SHARINGS_ERROR:
      return _objectSpread({}, state, {
        [action.doctype]: {
          fetchStatus: 'error'
        }
      });

    case RECEIVE_NEW_SHARING:
      return _objectSpread({}, state, {
        [action.doctype]: _objectSpread({}, state[action.doctype], {
          byMe: [...state[action.doctype].byMe, {
            attributes: {
              permissions: {
                rule0: {
                  type: action.doctype,
                  values: [action.id]
                }
              },
              source_id: action.response.attributes.sharing_id,
              type: 'io.cozy.sharings'
            }
          }]
        })
      });

    case RECEIVE_NEW_SHARING_LINK:
      return _objectSpread({}, state, {
        [action.doctype]: _objectSpread({}, state[action.doctype], {
          byLink: [...state[action.doctype].byLink, action.response]
        })
      });

    case REVOKE_SHARING_LINK:
      idx = state[action.doctype].byLink.findIndex(p => action.permission._id === p._id);
      if (idx === -1) return state;
      return _objectSpread({}, state, {
        [action.doctype]: _objectSpread({}, state[action.doctype], {
          byLink: [...state[action.doctype].byLink.slice(0, idx), ...state[action.doctype].byLink.slice(idx + 1)]
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  documents,
  permissions
})); // actions

const fetchSharings = (doctype, id = null, options = {}) => ({
  types: [FETCH_SHARINGS, RECEIVE_SHARINGS_DATA, RECEIVE_FETCH_SHARINGS_ERROR],
  doctype,
  id,
  options,
  promise: client => client.fetchSharings(doctype)
});
const share = (document, recipients, sharingType, sharingDesc) => async dispatch => {
  const recipientIds = await Promise.all(recipients.map(recipient => recipient.id || dispatch(createContact(recipient)).then(c => c.data[0].id)));
  trackSharingByEmail(document);
  return dispatch(createSharing(document, recipientIds, sharingType, sharingDesc));
};
const unshare = (document, recipient) => async (dispatch, getState) => {
  const sharing = getSharingForRecipient(getState(), document, recipient);
  const loneRecipient = sharing.attributes.recipients.length === 1;
  return dispatch({
    types: [REVOKE_SHARING, RECEIVE_SHARING_REVOKE, RECEIVE_ERROR],
    doctype: document._type,
    id: document._id,
    sharingId: sharing.attributes.sharing_id,
    recipientId: recipient._id,
    promise: client => loneRecipient ? client.revokeSharing(sharing.attributes.sharing_id) : client.revokeSharingForClient(sharing.attributes.sharing_id, sharing.attributes.recipients.find(r => r.recipient.id === recipient._id).Client.client_id)
  });
};
const leave = document => async (dispatch, getState) => {
  const sharings = getDocumentActiveSharings(getState(), document._type, document._id);
  const sharing = sharings.find(s => s.attributes.owner === false);
  return dispatch({
    types: [REVOKE_SHARING, RECEIVE_SHARING_REVOKE, RECEIVE_ERROR],
    doctype: document._type,
    id: document._id,
    sharingId: sharing.attributes.sharing_id,
    promise: client => client.revokeSharing(sharing.attributes.sharing_id)
  });
};
const shareByLink = document => {
  trackSharingByLink(document);
  return createSharingLink(document);
};
const revokeLink = document => async (dispatch, getState) => {
  const perm = getSharingLinkPermission(getState(), document._type, document._id);
  return dispatch({
    types: [REVOKE_SHARING_LINK, RECEIVE_SHARING_LINK_REVOKE, RECEIVE_ERROR],
    doctype: document._type,
    id: document._id,
    permission: perm,
    promise: client => client.revokeSharingLink(perm)
  });
};

const createSharing = (document, contactIds, sharingType = 'master-slave', description = '') => ({
  types: [CREATE_SHARING, RECEIVE_NEW_SHARING, RECEIVE_ERROR],
  doctype: document._type,
  id: document._id,
  promise: client => client.createSharing(getPermissionsFor(document), contactIds, sharingType, description)
});

const createSharingLink = document => ({
  types: [CREATE_SHARING_LINK, RECEIVE_NEW_SHARING_LINK, RECEIVE_ERROR],
  doctype: document._type,
  id: document._id,
  promise: client => client.createSharingLink(getPermissionsFor(document, true))
}); // TODO: this is a poor man's migration in order to normalize contacts
// and should be removed after a few weeks in prod
// Note for future-self: If you have no idea of what it means, please, erase this code.
// Note for time-travelers: please travel a little more back in time in order to advise us
// to get contacts right the first time


const fetchContacts = () => {
  const action = Object(_reducer__WEBPACK_IMPORTED_MODULE_2__["fetchCollection"])('contacts', 'io.cozy.contacts');

  action.promise = async client => {
    const response = await client.fetchCollection('contacts', 'io.cozy.contacts');
    const data = await Promise.all(response.data.map(contact => {
      return typeof contact.email !== 'string' ? contact : client.updateDocument(_objectSpread({}, contact, {
        email: [{
          address: contact.email,
          primary: true
        }]
      })).then(resp => resp.data[0]);
    }));
    return _objectSpread({}, response, {
      data
    });
  };

  return action;
};

const createContact = ({
  email
}) => Object(_reducer__WEBPACK_IMPORTED_MODULE_2__["createDocument"])('io.cozy.contacts', {
  email: [{
    address: email,
    primary: true
  }]
});

const getPermissionsFor = (document, publicLink = false) => {
  const {
    _id,
    _type
  } = document;
  const verbs = publicLink ? ['GET'] : ['ALL']; // TODO: this works for albums, but it needs to be generalized and integrated
  // with cozy-client ; some sort of doctype "schema" will be needed here

  return isFile(document) ? {
    files: {
      type: 'io.cozy.files',
      verbs,
      values: [_id]
    }
  } : {
    collection: {
      type: _type,
      verbs,
      values: [_id]
    },
    files: {
      type: 'io.cozy.files',
      verbs,
      values: [`${_type}/${_id}`],
      selector: 'referenced_by'
    }
  };
}; // selectors


const getSharing = (state, id) => state.cozy.sharings.documents.find(s => s.attributes.sharing_id === id);

const getContact = (state, id) => Object(_reducer__WEBPACK_IMPORTED_MODULE_2__["getDocument"])(state, 'io.cozy.contacts', id);

const getDoctypePermissions = (state, doctype) => {
  if (state.cozy.sharings.permissions[doctype]) {
    return state.cozy.sharings.permissions[doctype];
  }

  return doctypePermsetInitialState;
};

const getSharingLink = (state, doctype, id) => {
  const perm = getSharingLinkPermission(state, doctype, id);
  return perm ? buildSharingLink(id, doctype, perm.attributes.codes.email) : null;
};

const getSharingLinkPermission = (state, doctype, id) => {
  const perms = getDoctypePermissions(state, doctype);
  const type = isFile({
    _type: doctype
  }) ? 'files' : 'collection';
  return perms.byLink.find(p => p.attributes.permissions[type].values.indexOf(id) !== -1);
};

const getSharingForRecipient = (state, document, recipient) => {
  const sharings = getDocumentActiveSharings(state, document._type, document._id);
  return sharings.find(s => s.attributes.recipients.find(r => r.recipient.id === recipient._id));
};

const getDocumentActiveSharings = (state, doctype, id) => {
  const perms = getDoctypePermissions(state, doctype);
  return [...perms.byMe.filter(perm => perm.attributes.permissions['rule0'].values.indexOf(id) !== -1), ...perms.withMe.filter(perm => perm.attributes.permissions['rule0'].values.indexOf(id) !== -1)].map(p => getSharing(state, p.attributes.source_id)).filter(s => !s.attributes.revoked);
};

const getSharings = (state, doctype) => {
  const perms = getDoctypePermissions(state, doctype);
  const type = doctype === 'io.cozy.files' ? 'files' : 'collection';
  return {
    byMe: perms.byMe.map(p => p.attributes.permissions['rule0'].values[0]),
    withMe: perms.withMe.map(p => p.attributes.permissions['rule0'].values[0]),
    byLink: perms.byLink.map(p => p.attributes.permissions[type].values[0])
  };
};
const getSharingStatus = (state, doctype, id) => {
  const sharings = getDocumentActiveSharings(state, doctype, id);
  return {
    shared: sharings.length !== 0,
    owner: sharings.length === 0 || sharings.some(s => s.attributes.owner === true),
    sharingType: sharings.some(s => s.attributes.sharing_type === 'master-master') ? 'master-master' : 'master-slave',
    sharings
  };
};
const getSharingDetails = (state, doctype, id) => {
  const {
    shared,
    owner,
    sharingType,
    sharings
  } = getSharingStatus(state, doctype, id);
  const sharingLink = getSharingLink(state, doctype, id);
  return {
    shared,
    owner,
    sharingType,
    sharingLink,
    sharer: shared && !owner ? {
      name: 'John Doe',
      url: sharings[0].attributes.sharer.url
    } : null,
    readOnly: !owner && sharingType === 'master-slave',
    recipients: shared && owner ? getSharingRecipients(state, sharings) : [],
    byMe: shared && owner === true,
    withMe: shared && !owner,
    byLink: !!sharingLink
  };
};

const getSharingRecipients = (state, sharings) => sharings.filter(sharing => sharing.attributes.recipients).map(sharing => sharing.attributes.recipients.map(info => ({
  contact: getContact(state, info.recipient.id),
  status: info.status,
  type: sharing.attributes.sharing_type
}))).reduce((a, b) => a.concat(b), []);

const buildSharingLink = (id, doctype, sharecode) => `${window.location.origin}/public?sharecode=${sharecode}&id=${id}${doctype === 'file' ? '&directdownload' : ''}`; // helpers


const isFile = ({
  _type,
  type
}) => _type === 'io.cozy.files' || type === 'directory' || type === 'file';

const track = (document, action) => {
  const tracker = Object(cozy_ui_react_helpers_tracker__WEBPACK_IMPORTED_MODULE_1__["getTracker"])();

  if (!tracker) {
    return;
  }

  tracker.push(['trackEvent', isFile(document) ? 'Drive' : 'Photos', action, `${action}${isFile(document) ? 'File' : 'Album'}`]);
};

const trackSharingByLink = document => track(document, 'shareByLink');

const trackSharingByEmail = document => track(document, 'shareByEmail');

/***/ }),

/***/ "oway":
/***/ (function(module) {

module.exports = {"app":{"logo":{"alt":"%{name} logo"}},"date":{"format":"DD/MM/YYYY","placeholder":"dd/mm/yyyy"},"manifest":{"name":"Inicio","short_description":"Cozy Collect es la aplicación que le ayuda a recopilar todos sus datos personales que están en Cozy.","long_description":"Con Cozy Collect, usted puede facilmente:\n* Descargar documentos de todos sus proveedores\n* Establecer la frecuencia con la que Cozy recopilará sus facturas\n* Acceder directoamente a los documentos recopilados por su Cozy","changes":"Seguro ya se ha dado cuenta, el Store ha llegado a su Cozy\nAprovechamos para mejorar Collect:\n*Adaptación a Store.\n*Fusión de fichas: cuando se tienen diversas cuentas en un proveedor, la primera se fusiona baja la ficha del proveedor.\n*Mejora de algunas páginas de Conectores."},"add_service":"Añadir","account":{"config":{"default_folder":"/Administrative/%{name}","optional":"(Opcional)","title":"Conecte su cuenta %{name} ","data":{"title":"Datos recopilados:","service":{"description":"Descripción del servicio:"}},"tabs":{"sync":"sincronización","account":"cuenta","data":"datos recopilados"}},"disconnect":{"title":"Desconexión","description":"Usted se desconectará de esta cuenta, pero se guardarán los datos importados"},"form":{"title":"Cuenta","label":{"firstname":"Nombre","lastname":"Apellido","login":"Login","consumerKey":"Clave del usuario","consumerSecret":"Secreto del usuario","appKey":"Clave de la aplicación","appSecret":"Secreto de la aplicación","tricountUrl":"URL Tricount","cardNumber":"Número de tarjeta","dob":"Fecha de nacimiento","password":"Contraseña","email":"Email","bank_identifier":"Identificante bancario (opcional)","profileName":"Nombre del perfil","identifier":"Identificador","new_identifier":"Identificador","secret":"Contraseña","answer":"Respuesta secreta","access_token":"Token de acceso","accessTokenSecret":"Token de acceso secreto","apikey":"Clave Api","phoneNumber":"Número de teléfono","folderPath":"Ruta de la carpeta","namePath":"Nombre de la carpeta","authCode":"Código de autorización","accountName":"Nombre de la cuenta","loginUrl":"URL de acceso","token":"Token","agreement":"Acepto","refreshToken":"Recargar el token","timeout":"Retardo (ms)","branchName":"Oficina","code":"Código confidencial"},"placeholder":{"password":"La contraseña que usted usa para acceder al servicio","update_password":"Actualizar la contraseña","accountName":"Ejemplo: Cuenta personal","namePath":"Ejemplo: Facturas de Camille. La ruta de nombre predeterminado es su login."},"button":{"connect":"Conectar","cancel":"Cancelar","save":"Guardar","disconnect":"Desconectar esta cuenta","delete":"Borrar esta cuenta","advanced":"Opciones avanzadas","synchronize":"Sincronizar ahora"}},"folder":{"title":"Configuración de carpetas relacionadas","withoutSettings":{"title":"Carpeta relacionada"},"link":"Abrir la carpeta en Cozy Drive","changePath":"cambiar la ruta de acceso","error":"Oops, algo salió mal. No se asuste, sus archivos siguen ahí, por favor vuelva a intentarlo más tarde.","close":"cerrar","warning":"Usted cambia su ruta de acceso","oldFiles":"Todas sus facturas serán trasladadas a su nueva ruta de acceso","newFiles":"Sus nuevas facturas serán descargadas a su nueva ruta de acceso","newPath":"Todo salió bien, el nuevo camino de acceso para su cuenta %{name} es:","placeholder":{"administrative":"Administrativa","photos":"Fotos"}},"success":{"title":{"connect":"Configuración correcta!","update":"¡Su cuenta %{name} ha sido actualizada!"},"banksLinkText":"Ver mis cuentas en %{appName}","driveLinkText":"Abrir la carpeta en Cozy Drive","button":"Cerrar"},"message":{"folder":{"title":"Carpeta","link":"Abrir la carpeta en Cozy Drive"},"success":{"connect":"Sus datos estarán disponibles en su Cozy en pocos minutos y a partir de ese momento, los siguientes lo estarán automáticamente.","update":"¡Su cuenta %{name} ha sido actualizada exitosamente.","delete":"Cuenta suprimida exitosamente."},"syncing":{"bill":"Sus facturas están sincronizándose y estarán disponibles en la siguiente dirección:"},"synced":{"title":"Sincronización de sus datos","cron":"Frecuencia de sincronización: %{frequency}","cron_hourly":"cada hora","cron_daily":"una vez por día","cron_weekly":"una vez por semana","cron_monthly":"una vez por mes","cron_undefined":"manualmente","syncing":"ejecutándose...","unknown":"desconocido","last_sync":"Última sincronización: **%{date}**","date_format":"MMMM D[,] YYYY [a las] HH[:]mm","bill":"Encuentre sus datos en la aplicación Drive en este sitio:"},"error":{"server":"Discúlpenos, nuestro servidor tuvo un contratiempo, le importaría arrancar de nuevo?","bad_credentials":"Lo siento, uste ha escrito un login o una contraseña incorrectos.","delete":"Discúlpenos, nuestro servidor tuvo un contratiempo, le importaría arrancar de nuevo?"}},"forceConnection":"Vuelva a ejecutar","editor_detail":"Servicio desarrolado por %{editor}"},"account_picker":{"add_account_button":{"label":"Añadir una cuenta"}},"apps":{"title":"Mis apps"},"connection":{"CTA":{"twofa_failed":"Vuelva a ejecutar"},"error":{"default":{"title":"Ha ocurrido un error","description":"Desafortunadamente, algo salió mal al intentar conectar con %{name}. Por favor, controle otra vez la información de su cuenta, visite nuestra ayuda en línea o contáctenos en contact@cozycloud.cc."},"DISK_QUOTA_EXCEEDED":{"title":"El amacenamiento de Cozy está lleno","description":"Este servicio no puede recuperar sus documentos ahora. Por favor, borre algunos archivos o vaya a \"Ajustes > Almacenamiento** para obtener más espacio libre."},"CHALLENGE_ASKED":{"title":"Se requiere Challenge","description":"Parece que el sitio web requiere un segundo factor de autenticación que aún no está disponible. Puede intentar resolver el problema en el sitio web[%{name}](%{link}) antes de volver a intentarlo."},"LOGIN_FAILED":{"title":"Malas credenciales","description":"Malas credenciales. Controle los campos de su conector y vuelva a ejecutarlo."},"LOGIN_FAILED.NEEDS_SECRET":{"title":"Secreto exigido","description":"Se debe llenar un campo adicional antes de controlar sus credenciales."},"LOGIN_FAILED.TOO_MANY_ATTEMPTS":{"title":"Bloqueado temporalmente","description":"Se hicieron demasiados intentos. Por favor, actualice sus credenciales en el sitio web[%{name}](%{link}) y actualice el conector más tarde."},"MAINTENANCE":{"title":"Sitio web no disponible","description":"Parece que el sitio web [%{name}](%{link}) no está disponible o que el konnector debe actualizarse. Vuelva a ejecutar el conector más tarde o visite nuestra ayuda en línea."},"NOT_EXISTING_DIRECTORY":{"title":"Falta la carpeta de destino","description":"Parece que la carpeta de destino de esta cuenta ha sido borrada. Por favor desconéctese de la cuenta, restáurela y vuelva a conectarse."},"UNKNOWN_ERROR":{"title":"Error de conexión","description":"Ha ocurrido un error no identificado."},"USER_ACTION_NEEDED":{"title":"Acción necesaria con el proveedor","description":"Parece que el sitio web[%{name}](%{link}) requiere que inicie sesión y realice una acción específica. Vuelva a ejecutar el conector una vez que haya resuelto el problema en la página web."},"USER_ACTION_NEEDED.OAUTH_OUTDATED":{"title":"Se requiere volver a acceder","description":"El servicio [%{name}](%{link}) requiere que usted vuelva a acceder. Por favor desconecte y reconecte su cuenta %{name} a esta aplicación. No se perderá ningún dato."},"USER_ACTION_NEEDED.ACCOUNT_REMOVED":{"title":"Cuenta no disponible","description":"Parece que su cuenta no está activa. Compruebe su cuenta en[%{name}](%{link}) antes de volver a intentarlo."},"USER_ACTION_NEEDED.CHANGE_PASSWORD":{"title":"Se requiere actualizar la contraseña","description":"Parece que el sitio web[%{name}](%{link}) requiere que inicie sesión y actualice su contraseña. Por favor, vuelva a ejecutar el conector una vez que haya resuelto el problema en la página web."},"USER_ACTION_NEEDED.PERMISSIONS_CHANGED":{"title":"Se necesitan nuevos permisos de validación","description":"Su conector fue actualizado y los permisos cambiados. Por favor, valídelos antes de volver a lanzar el conector."},"USER_ACTION_NEEDED.TWOFA_EXPIRED":{"title":"Relanzar la conexión al servicio para recuperar sus datos","description":"La última conexión al servicio ha fallado; por favor, láncela de nuevo. Es posible que tenga que proporcionar un código de validación."},"USER_ACTION_NEEDED.WRONG_TWOFA_CODE":{"title":"Código suministrado para dos factores es equivocado","description":"El código para dos factores suministrado esta errado, ensaye de nuevo por favor."},"VENDOR_DOWN":{"title":"Servicio no disponible","description":"Parece que el servicio[%{name}](%{link}) no está disponible en este momento. Por favor, vuelva a ejecutar el conector más tarde."},"VENDOR_DOWN.BANK_DOWN":{"title":"Sitio web no disponible","description":"Parece que el sitio web [%{name}](%{link}) no está disponible en este momento. Por favor, vuelva a ejecutar el conector más tarde."},"VENDOR_DOWN.LINXO_DOWN":{"title":"Servicio no disponible","description":"Parece que en este momento estamos experimentando una sobrecarga con nuestros conectores bancarios. Por favor, vuelva a ejecutar el conector más tarde."}}},"intent":{"konnector":{"install":{"error":{"message":"Este conector no se puede instalar"}}},"service":{"return":"Volver a la lista de conectores","success":{"button":{"label":"Cerrar"}},"error":{"initialization":"El servicio ha fallado al inicializarse. Sentimos los inconvenientes.","creation":"Imposible crear una cuenta, ha ocurrido un error.","cause":"Causa: %{error}"},"cancel":"Cancelar","terminate":"Terminar"}},"field":{"password":{"visibility":{"hide":"Ocultar","show":"Mostrar","title":{"hide":"Ocultar la contraseña","show":"Mostrar la contraseña"}}}},"nav":{"services":"Servicios instalados"},"category":{"all":"Todo","banking":"Bancos","health":"Salud","insurance":"Seguros","transport":"Transporte","social":"Social","isp":"PSI","telecom":"Telecom","energy":"Energía","host_provider":"Huesped","productivity":"Productividad","shopping":"Compras","public_service":"Servicios Públicos","other":"Otros"},"dataType":{"none":"%{name} no puede acceder a ningún dato en su Cozy","activity":"Sus actividades","appointment":"Sus citas","bankTransactions":"Sus transacciones bancarias","bankAccounts":"Sus cuentas bancarias","bill":"Sus facturas","bloodPressure":"Su presión sanguínea","calendar":"Sus agendas","certificate":"Sus certificados","commit":"Sus compromisos","consumption":"Su consumo","contact":"Sus contactos","contract":"Sus contratos","courseMaterial":"Sus materiales de estudio","document":"Sus documentos","event":"Sus eventos","family":"Sus informaciones familiares","geopoint":"Sus geolocalizaciones","heartbeat":"Sus latidos del corazón","home":"Información de su casa","phonecommunicationlog":"Su log de las comunicaciones telefónicas","picture":"Sus imágenes","podcast":"Sus podcasts","profile":"Su perfil cliente","refund":"Sus reembolsos","sinister":"Sus sinistros","sleepTime":"Su tiempo de sueño","stepsNumber":"Su número de pasos","temperature":"Sus datos de temperatura","travelDate":"Sus fechas de viajes","tweet":"Sus tweets","videostream":"Sus vídeos ","weight":"Su peso"},"loading":{"initial":"Cargando cuentas...","working":"Cargando"},"validation":{"exact_length":"Debe estar compuesto de %{length} caracteres exactamente.","max_length":"La longitud máxima es de %{length}  caracteres.","min_length":"Debe contener al menos %{length} caracteres.","pattern":"El valor debe coincidir con un patrón específico: %{pattern}.\n"},"update":{"title":"Está disponible una actualización de este servicio.","regular":"Actualice esta versión para seguir obteniendo sus datos y disponer de las últimas mejoras.","blocking":"Actualícela para seguir obteniendo sus datos","CTA":"Actualizar"},"error":{"initial":"Algo ocurrió al recolectar sus colectores y sus datos. por favor, vuelva a cargar la página.","LOGIN_FAILED":"Malas credenciales. Controle los campos de su conector y vuelva a ejecutarlo.","UNKNOWN_ERROR":"Algo inesperado ha ocurrido al ejecutar el conector","JOB_TIMEOUT":"La ejecución del conector ha tardado mucho","button":{"reload":"Volver a cargar la página ahora"}},"tutorial":{"cozy_collect":{"title":"Automatice la recolección de sus datos","text":"Ellos serán almacenados en su Cozy, usted no tendrá que buscarlos en parte alguna.","button":"Siguiente"},"home":{"apps":{"button":"Siguiente","text":"Organice facilmente su vida numérica (archivos, imágenes, cuentas de banco, ...)","title":"Acceda a todas sus aplicaciones Cozy"},"services":{"button":"Configurar mis cuentas","text":"Ellos serán almacenados en su Cozy, usted no tendrá que buscarlos en parte alguna.","title":"Automatice la recolección de sus datos"}},"menu_apps":{"title":"Su Cozy es mucho más que un simple agregador de datos","text":"Abra el menú de Aplicaciones para descubrir las características que Cozy puede ofrecerle.","button":"Descubrir mis aplicaciones"}},"maintenance":{"icon":"Este conector está en mantenimiento","service":"Servicio interrumpido","problem":"%{konnectorName} no permite que su Cozy acceda a sus datos","title":"¿Qué sucede?"},"connector":{"debug":{"successMessage":"Este konnector es sólo para fines de debug, este es un mensaje habitual adicional de éxito."},"empty":"No hay conectores configurados","noAccount":"Cuenta inexistente","add":"Añadir un servicio","update":"Actualización disponible","no-connectors-connected":"Todavía usted no tiene una cuenta conectada","get-info":"Obtenga automáticamente todas sus informaciones en su Cozy\n","connect-account":"Conectarse a mis cuentas","logo":{"alt":"%{name} logo\n"},"enedis":{"description":{"service":"Recupere sus datos de Linky conectandose a su cuenta de Enedis. Debe tener un medidor Linky y haber creado antes su cuenta de Enedis [en el sitio web de Enedis] (https://espace-client-connexion.enedis.fr/auth/UI/Login?realm=particuliers). Fing proporciona este conector para el proyecto MesInfos. Recupera los datos de su contrato de electricidad y descarga su consumo de electricidad del día anterior. Este conector se ejecuta en su Cozy y Fing no tendrá acceso a estos datos."}},"orange":{"message":{"delay":"Una vez conectado, se envía al sistema de información de Orange una solicitud para extraer sus datos. Estos datos son válidos durante 15 días. Sus datos se actualizan automáticamente cada quince días."}},"orangemobile":{"description":{"connector":"En el contexto de 'MesInfos', Orange le permite localizar permanentemente su teléfono.\n\n**La recopilación de datos exige su acuerdo previo**\n\nHaciendo clic en \"Apruebo\", usted consiente que se recopile la posición de su teléfono, cada 30 minutos. La información recopilada será la siguiente:\nFecha y hora de la ubicación.\nDatos de la ubicación de la antena más cercana en el momento de la recopimación.\nLos datos recopilados por Orange después de su aceptación estarán disponibles sólo en el Cozy que usted ha asignado en el contexto de 'MesInfos'. Se añadirán a sus datos de ubicación almacenados en su registro de llamadas.","service":"Este conector carga datos de su cuenta Orange a su Cozy. Carga automáticamente los registros de llamadas de su teléfono. Estos registros de llamadas incluyen su número de teléfono, el número de teléfono de su corresponsal, fecha, duración de la llamada  y datos sobre la localización de la antena radio más cercana en el momento de la recopilación.\n\nUsted podrá utilizar esos datos en diferentes aplicaciones de su Cozy, por ejemplo \"Mapeando Mi Vida\" (pronto disponible en el Cozy Store).","field":{"agreement":"¿En el contexto de \"Mes infos\", aprueba usted que Orange localice regularmente su teléfono ?"}}},"orangevideos":{"description":{"service":"Este conector carga datos de su cuenta Orange a su Cozy. Carga automáticamente la lista de las películas que usted ha descargado gratis (TV Replay) o pagando VOD desde em 01/01/2015 (no se incluyen películos con contenido para adultos°.\\n\\nUsted podrá utilizar esos datos en diferentes aplicaciones de su Cozy, por ejemplo \"My Movies Music\" (pronto disponible en el Cozy Store)."}},"axabanque102":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"banquepopulaire":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"barclays136":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"bforbank97":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"bnpparibas82":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"boursorama83":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"bred":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"caatlantica3":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"caissedepargne1":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"carrefour159":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"casden173":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"cdngroup109":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"cdngroup88":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"cic45":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"cic63":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"comptenickel168":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"creditcooperatif148":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"creditmaritime":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"fortuneo84":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"hellobank145":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"hsbc119":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo).","connector":"La respuesta secreta es [pregunta por HSBC](https://www.hsbc.fr/1/2/hsbc-france/particuliers/connexion) cuando usted se conecta sin doble autenticación. Ejemplo: ¿Cómo se llama su mascota?"}},"ingdirect95":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"labanquepostale44":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"lcl143":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"lcl144":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"lcl146":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"monabanq96":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}},"societegenerale":{"description":{"service":"La conexión con su banco la opera y asegura nuestro asociado: Linxo. [Más información en] (https://support.cozy.io/article/147-linxo)."}}},"Queue":{"header":"Sincronizando cuentas","header_mobile":"%{done} de %{total}","header_done":"Sincronizado %{done}  de %{total}","item":{"pending":"Pendiente"},"close":"Cerrar"},"services":{"title":"Servicios instalados"},"status":{"interrupted":"SEVICIO INTERRUMPIDO","edf":{"maintenance":"El sistema de información de EDF ha cambiado y el acceso a los datos relacionados no funciona. Este konnector no puede recuperar actualmente sus datos de EDF. Estamos tratando de restaurar la situación y le notificaremos cuando se arregle. [Más información en](%{supportLink})","support_link":"https://support.cozy.io/article/123-le-connecteur-edf-ne-fonctionne-pas"}},"tile":{"konnector":{"lastSyncDate":{"format":"DD MMM"}}}};

/***/ }),

/***/ "pcU9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-commit_7fba8f35b75e62961d8560d96a90842b",
  "use": "icon-commit_7fba8f35b75e62961d8560d96a90842b-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-commit_7fba8f35b75e62961d8560d96a90842b\"><g stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" fill-rule=\"evenodd\"><g stroke=\"#95999D\"><path d=\"M29.025 10a1 1 0 1 1-1.998.002A1 1 0 0 1 29.025 10h0zm6 0a1 1 0 1 1-1.998.002A1 1 0 0 1 35.025 10h0zm6 0a1 1 0 1 1-1.998.002A1 1 0 0 1 41.025 10h0z\" /><path d=\"M47.026 43h-46V5h46zM1.025 15h46\" /></g><g stroke=\"currentColor\"><path d=\"M13.025 21l5 5-5 5M25.025 27h8\" /></g></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "rGvZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCTYPE", function() { return DOCTYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTriggers", function() { return fetchTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKonnectorTriggers", function() { return getKonnectorTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrigger", function() { return getTrigger; });
/* harmony import */ var redux_cozy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("m+TH");

const DOCTYPE = 'io.cozy.triggers';
const triggersCollectionKey = 'triggers'; // CRUD action creators

const fetchTriggers = () => redux_cozy_client__WEBPACK_IMPORTED_MODULE_0__["fetchTriggers"](triggersCollectionKey, 'konnector'); // selectors

const getKonnectorTriggers = (state, konnector, existingAccountIds = []) => {
  return !!state.documents[DOCTYPE] && Object.values(state.documents[DOCTYPE]).filter(trigger => {
    return trigger.worker === 'konnector' && trigger.message && trigger.message.konnector === konnector.slug && trigger.message.account && existingAccountIds.includes(trigger.message.account);
  }) || [];
};
const getTrigger = (state, id) => !!state.documents && !!state.documents[DOCTYPE] && state.documents[DOCTYPE][id];

/***/ }),

/***/ "s8SE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KonnectorSync", function() { return KonnectorSync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("NAv5");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KXWi");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("buk/");
/* harmony import */ var cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("y6ex");
/* harmony import */ var cozy_harvest_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("iDCe");
/* harmony import */ var components_DescriptionContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("CB1n");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function getDateLabel(_ref) {
  var date = _ref.date,
      t = _ref.t,
      f = _ref.f;
  return f(date_fns__WEBPACK_IMPORTED_MODULE_1___default.a.parse(date), t('account.message.synced.date_format'));
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var dows = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

var humanCron = function humanCron(cronSpec) {
  try {
    var _cronSpec$split = cronSpec.split(' '),
        _cronSpec$split2 = _slicedToArray(_cronSpec$split, 6),
        minute = _cronSpec$split2[1],
        hour = _cronSpec$split2[2],
        month = _cronSpec$split2[4],
        dayOfWeek = _cronSpec$split2[5];

    var timePart = hour !== '*' && minute !== '*' ? "at ".concat(hour, ":").concat(minute) : hour !== '*' ? "".concat(hour, "h") : "Any hour on ".concat(minute, "minute");
    var monthPart = month !== '*' ? "during ".concat(months[month]) : '';
    var dowPart = dayOfWeek !== '*' ? "on ".concat(dows[dayOfWeek]) : '';
    return [timePart, monthPart, dowPart].join(' ');
  } catch (e) {
    return JSON.stringify(e);
  }
};

var KonnectorSync = function KonnectorSync(_ref2) {
  var t = _ref2.t,
      f = _ref2.f,
      frequency = _ref2.frequency,
      lastSuccessDate = _ref2.lastSuccessDate,
      maintenance = _ref2.maintenance,
      submitting = _ref2.submitting,
      trigger = _ref2.trigger;
  var lastSyncMessage = submitting && t('account.message.synced.syncing') || !lastSuccessDate && t('account.message.synced.unknown') || lastSuccessDate && getDateLabel({
    date: lastSuccessDate,
    t: t,
    f: f
  }) || null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    title: "Scheduled execution : ".concat(humanCron(trigger.arguments))
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_DescriptionContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: t('account.message.synced.title'),
    messages: [lastSyncMessage ? t('account.message.synced.last_sync', {
      date: lastSyncMessage
    }) : '', t('account.message.synced.cron', {
      frequency: t("account.message.synced.cron_".concat(frequency))
    })]
  }), !maintenance && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_harvest_lib__WEBPACK_IMPORTED_MODULE_5__["TriggerLauncher"], {
    trigger: trigger,
    submitting: submitting
  }, function (_ref3) {
    var launch = _ref3.launch,
        running = _ref3.running;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: t('account.forceConnection'),
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        focusable: "false",
        icon: "sync",
        spin: running
      }),
      className: "u-mv-half u-mh-0",
      disabled: running,
      onClick: launch,
      subtle: true
    });
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_3__["translate"])()(KonnectorSync));

/***/ }),

/***/ "sR/t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchKonnectorJobs", function() { return fetchKonnectorJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTriggerLastJob", function() { return getTriggerLastJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJobRunning", function() { return isJobRunning; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("NAv5");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);

const DOCTYPE = 'io.cozy.jobs'; // CRUD

const fetchKonnectorJobs = () => {}; // selectors

const getTriggerLastJob = (state, trigger) => {
  // state is state.cozy
  if (!state.documents || !state.documents[DOCTYPE] || !trigger) return null;
  return Object.values(state.documents[DOCTYPE]).reduce((lastestJob, currentJob) => {
    if (currentJob.trigger_id !== trigger._id) return lastestJob;
    if (!lastestJob) return currentJob;
    return date_fns__WEBPACK_IMPORTED_MODULE_0___default.a.isAfter(currentJob.started_at, lastestJob.started_at) ? currentJob : lastestJob;
  }, null);
};
const isJobRunning = (state, job) => !!job && ['queued', 'running'].includes(job.state);

/***/ }),

/***/ "skrj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startSync", function() { return startSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startDoctypeSync", function() { return startDoctypeSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncDoctypeOk", function() { return syncDoctypeOk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncDoctypeError", function() { return syncDoctypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirstSync", function() { return isFirstSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSynced", function() { return isSynced; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const START_SYNC = 'START_SYNC';
const START_DOCTYPE_SYNC = 'START_DOCTYPE_SYNC';
const SYNC_DOCTYPE_OK = 'SYNC_DOCTYPE_OK';
const SYNC_DOCTYPE_ERROR = 'SYNC_DOCTYPE_ERROR';
const doctypeSyncInitialState = {
  syncStatus: 'pending',
  lastSync: null,
  seqNumber: 0
};

const doctypeSync = (state = doctypeSyncInitialState, action) => {
  switch (action.type) {
    case START_DOCTYPE_SYNC:
      return _objectSpread({}, state, {
        syncStatus: 'syncing',
        seqNumber: action.seqNumber
      });

    case SYNC_DOCTYPE_OK:
      return _objectSpread({}, state, {
        syncStatus: 'done',
        lastSync: Date.now()
      });

    case SYNC_DOCTYPE_ERROR:
      return _objectSpread({}, state, {
        syncStatus: 'error',
        lastSync: Date.now()
      });

    default:
      return state;
  }
};

const synchronization = (state = {}, action) => {
  switch (action.type) {
    case START_DOCTYPE_SYNC:
    case SYNC_DOCTYPE_OK:
    case SYNC_DOCTYPE_ERROR:
      return _objectSpread({}, state, {
        [action.doctype]: doctypeSync(state[action.doctype], action)
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (synchronization);
const startSync = () => async dispatch => {
  return dispatch({
    type: START_SYNC,
    promise: client => client.startSync(dispatch)
  });
};
const startDoctypeSync = (doctype, seqNumber = 0) => ({
  type: START_DOCTYPE_SYNC,
  doctype,
  seqNumber
});
const syncDoctypeOk = (doctype, infos) => ({
  type: SYNC_DOCTYPE_OK,
  doctype,
  infos
});
const syncDoctypeError = (doctype, error) => ({
  type: SYNC_DOCTYPE_ERROR,
  doctype,
  error
});
const isFirstSync = state => {
  const seqNumbers = Object.keys(state.cozy.synchronization).map(doctype => state.cozy.synchronization[doctype].seqNumber);
  return seqNumbers.every(number => number === 0);
};
const isSynced = state => {
  const timestamps = Object.keys(state.cozy.synchronization).map(doctype => state.cozy.synchronization[doctype].lastSync);
  return timestamps.every(ts => ts !== null);
};

/***/ }),

/***/ "tEly":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-geopoint_aaa0388bb7a67d5d2c81eb2b667a390a",
  "use": "icon-geopoint_aaa0388bb7a67d5d2c81eb2b667a390a-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-geopoint_aaa0388bb7a67d5d2c81eb2b667a390a\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#FCBFBF\" d=\"M47 24c0 12.704-10.298 23-23 23C11.296 47 1 36.704 1 24 1 11.3 11.296 1 24 1c12.702 0 23 10.3 23 23z\" /><path fill=\"#F62C2C\" d=\"M21 39V27H9l25-13z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "tLC1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-podcast_42e4b77ad71166af14a3146ea83184b5",
  "use": "icon-podcast_42e4b77ad71166af14a3146ea83184b5-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-podcast_42e4b77ad71166af14a3146ea83184b5\"><g stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" fill-rule=\"evenodd\"><path stroke=\"#9AE6B3\" d=\"M40.613 39.898A22.924 22.924 0 0 0 47 24C47 11.296 36.703 1 24 1 11.297 1 1 11.296 1 24c0 6.166 2.434 11.766 6.388 15.898\" /><path stroke=\"#9AE6B3\" d=\"M11.816 32.727A14.91 14.91 0 0 1 9 24c0-8.284 6.714-15 15-15 8.282 0 15 6.716 15 15 0 3.258-1.052 6.266-2.816 8.726\" /><path stroke=\"#9AE6B3\" d=\"M17.016 24.307C17.012 24.203 17 24.1 17 24c0-3.916 3.2-7 7-7 3.808 0 7 3.09 7 7 0 .1-.012.202-.016.306\" /><path fill=\"#35CE68\" stroke=\"#35CE68\" d=\"M14 47h20L24 27z\" /><path stroke=\"#35CE68\" d=\"M24 27v-4\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "u5EB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_AppLinker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sCMN");
/* harmony import */ var cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("y6ex");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("buk/");
/* harmony import */ var styles_konnectorSuccess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4P+e");
/* harmony import */ var styles_konnectorSuccess__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_konnectorSuccess__WEBPACK_IMPORTED_MODULE_4__);
/* global cozy */





var BanksLink = Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_3__["translate"])()(function (_ref) {
  var banksUrl = _ref.banksUrl,
      t = _ref.t;
  return banksUrl ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_AppLinker__WEBPACK_IMPORTED_MODULE_1__["default"], {
    slug: "banks",
    href: banksUrl
  }, function (_ref2) {
    var href = _ref2.href,
        onClick = _ref2.onClick,
        name = _ref2.name;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: styles_konnectorSuccess__WEBPACK_IMPORTED_MODULE_4___default.a['col-account-success-link'],
      href: href,
      target: "_top",
      onClick: onClick
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "u-mr-half",
      icon: "openwith"
    }), t('account.success.banksLinkText', {
      appName: name
    }));
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: styles_konnectorSuccess__WEBPACK_IMPORTED_MODULE_4___default.a['col-account-success-link'],
    onClick: function onClick() {
      return cozy.client.intents.redirect('io.cozy.apps', {
        slug: 'banks'
      }, function (url) {
        window.top.location.href = url;
      });
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "u-mr-half",
    icon: "openwith"
  }), t('account.success.banksLinkText'));
});
/* harmony default export */ __webpack_exports__["default"] = (BanksLink);

/***/ }),

/***/ "uE6Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-heartbeat_919cbfac9de135f0cb1c113e23016005",
  "use": "icon-heartbeat_919cbfac9de135f0cb1c113e23016005-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-heartbeat_919cbfac9de135f0cb1c113e23016005\"><g stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" fill-rule=\"evenodd\"><path stroke=\"currentColor\" d=\"M1 28h12l3-4 4 5.996 5-10L29 34l3-6h15\" /><path d=\"M42.51 23.996C44.03 20.788 45 17.45 45 14.148c0-15.386-18.632-16.57-21-1.184C21.634-2.422 3-1.238 3 15.33c0 3 .696 5.91 1.822 8.666m4.639 8c6.172 8.25 14.54 13.792 14.54 13.792s7.512-5.822 13.552-13.792\" stroke=\"#95999D\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "uZd2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCTYPE", function() { return DOCTYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchKonnectors", function() { return fetchKonnectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchKonnectorsInMaintenance", function() { return fetchKonnectorsInMaintenance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInMaintenance", function() { return isInMaintenance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveInstalledKonnector", function() { return receiveInstalledKonnector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKonnector", function() { return getKonnector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstalledKonnectors", function() { return getInstalledKonnectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndexedKonnectors", function() { return getIndexedKonnectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlugs", function() { return getSlugs; });
/* harmony import */ var redux_cozy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("m+TH");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const DOCTYPE = 'io.cozy.konnectors';
const konnectorsCollectionKey = 'konnectors'; // CRUD

const fetchKonnectors = () => redux_cozy_client__WEBPACK_IMPORTED_MODULE_0__["fetchKonnectors"](konnectorsCollectionKey); // TODO: Fetch the registry

const fetchKonnectorsInMaintenance = () => __webpack_require__("Zu44");
const isInMaintenance = slug => fetchKonnectorsInMaintenance().hasOwnProperty(slug); // Action creators

const receiveInstalledKonnector = konnector => {
  const normalized = _objectSpread({}, konnector, konnector.attributes, {
    id: `${DOCTYPE}/${konnector.slug}`,
    _type: DOCTYPE
  });

  return {
    doctype: DOCTYPE,
    type: 'RECEIVE_NEW_DOCUMENT',
    response: {
      data: [normalized]
    },
    updateCollections: ['konnectors']
  };
}; // Selectors

const getKonnector = (state, slug) => !!state.documents && !!state.documents[DOCTYPE] && state.documents[DOCTYPE][`${DOCTYPE}/${slug}`];
const getInstalledKonnectors = state => !!state.documents && !!state.documents[DOCTYPE] && Object.values(state.documents[DOCTYPE]);
const getIndexedKonnectors = state => !!state.documents && !!state.documents[DOCTYPE] && Object.keys(state.documents[DOCTYPE]).reduce((indexed, key) => {
  const konnector = state.documents[DOCTYPE][key];
  indexed[konnector.slug] = konnector;
  return indexed;
}, {});
const getSlugs = state => !!state && !!state.documents && !!state.documents[DOCTYPE] && Object.values(state.documents[DOCTYPE]).map(konnector => konnector.slug);

/***/ }),

/***/ "vL8P":
/***/ (function(module, exports) {

module.exports = "/img/connecting-data-in-progress.svg";

/***/ }),

/***/ "vjPt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-money_f34b0da2dd256e4bb78d5bb3f44c31c8",
  "use": "icon-money_f34b0da2dd256e4bb78d5bb3f44c31c8-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-money_f34b0da2dd256e4bb78d5bb3f44c31c8\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#FF9126\" d=\"M9.001 27.002h-8a1 1 0 0 0-1 1v15c0 .55.448 1 1 1h8c.55 0 1-.45 1-1v-15c0-.552-.45-1-1-1\" /><path fill=\"#FFE2A1\" d=\"M47.708 35.293c-2.348-2.346-4.374-3-7.024-2.24l-6.016 1.996c.054.314.082.632.082.952 0 1.28-.416 2.486-1.168 3.39-.878 1.052-2.116 1.61-3.582 1.61H20a1 1 0 0 1 0-2h10c.864 0 1.552-.3 2.044-.89.45-.538.706-1.306.706-2.11 0-1.114-.58-3-2.75-3h-6a.998.998 0 0 1-.706-.292c-.918-.918-3.708-3.708-8.294-3.708h-3a1 1 0 0 0-1 1v11c0 .43.276.814.684.948a274.217 274.217 0 0 1 7.522 2.642c3.856 1.402 6.014 2.16 7.938 2.16 2.294 0 4.256-1.078 8.354-3.418 2.712-1.552 6.424-3.674 11.95-6.436.288-.146.488-.418.54-.736.05-.316-.054-.64-.28-.868\" /><path fill=\"#FF9126\" d=\"M34.001 15.002c-3.86 0-7-3.14-7-7 0-3.862 3.14-7 7-7s7 3.138 7 7c0 3.86-3.14 7-7 7zm-9 14c-3.86 0-7-3.14-7-7 0-3.862 3.14-7 7-7s7 3.138 7 7c0 3.86-3.14 7-7 7z\" /><path fill=\"#FFE2A1\" d=\"M33.001 6.002a1 1 0 0 1 2 0v4c0 .55-.45 1-1 1-.552 0-1-.45-1-1v-4zm-9 14a1 1 0 0 1 2 0v4c0 .55-.45 1-1 1-.552 0-1-.45-1-1v-4z\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "vwW3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const cozyMiddleware = client => ({
  dispatch
}) => {
  return next => action => {
    const {
      promise,
      type,
      types
    } = action,
          rest = _objectWithoutProperties(action, ["promise", "type", "types"]);

    if (!promise) {
      return next(action);
    }

    if (!type && !types) {
      return promise(client).then(action => dispatch(action));
    }

    if (type) {
      return promise(client).then(response => {
        next(_objectSpread({}, rest, {
          response,
          type
        }));
        return response;
      });
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    next(_objectSpread({}, rest, {
      type: REQUEST
    }));
    return promise(client).then(response => {
      next(_objectSpread({}, rest, {
        response,
        type: SUCCESS
      }));
      return response;
    }, error => {
      console.log(error); // eslint-disable-line no-console

      next(_objectSpread({}, rest, {
        error,
        type: FAILURE
      }));
    }).catch(error => {
      console.error('MIDDLEWARE ERROR:', error); // eslint-disable-line no-console

      next(_objectSpread({}, rest, {
        error,
        type: FAILURE
      }));
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (cozyMiddleware);

/***/ }),

/***/ "wiYS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/MKj");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("eO8H");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("buk/");
/* harmony import */ var components_KonnectorInstall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("+NZW");
/* harmony import */ var components_KonnectorMaintenance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Lo76");
/* harmony import */ var components_Banners_UpdateMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("bECI");
/* harmony import */ var components_KonnectorEdit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("mBgC");
/* harmony import */ var ducks_connections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4YEU");
/* harmony import */ var lib_konnectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("8CvS");
/* harmony import */ var styles_accountConnection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("gwpp");
/* harmony import */ var styles_accountConnection__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styles_accountConnection__WEBPACK_IMPORTED_MODULE_11__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }














var AccountConnection =
/*#__PURE__*/
function (_Component) {
  _inherits(AccountConnection, _Component);

  function AccountConnection(props, context) {
    var _this;

    _classCallCheck(this, AccountConnection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AccountConnection).call(this, props, context));
    _this.store = context.store;
    _this.state = {
      account: props.existingAccount,
      editing: !!props.existingAccount,
      isFetching: false,
      maintenance: props.maintenance && props.maintenance[props.konnector.slug]
    };
    _this.handleLoginSuccess = _this.handleLoginSuccess.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleError = _this.handleError.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleDeleteSuccess = _this.handleDeleteSuccess.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(AccountConnection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.error) this.handleError({
        message: this.props.error
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          success = _this$props.success,
          queued = _this$props.queued;
      var connectionError = this.state.connectionError;
      var succeed = !prevProps.success && success;
      var loginSucceed = !prevProps.queued && queued;

      if (succeed || loginSucceed) {
        // we reset the error in case of persisted errors
        if (succeed && connectionError) this.setState({
          connectionError: null
        });
        this.props.handleConnectionSuccess();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.UNSAFE_componentWillReceiveProps(props);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var existingAccount = nextProps.existingAccount;
      var accountHasJustBeenCreated = !this.props.existingAccount && !!existingAccount;

      if (accountHasJustBeenCreated) {
        this.setState({
          account: existingAccount
        });
      }
    }
  }, {
    key: "handleLoginSuccess",
    value: function handleLoginSuccess(trigger) {
      var _this$props2 = this.props,
          enqueueConnection = _this$props2.enqueueConnection,
          handleConnectionSuccess = _this$props2.handleConnectionSuccess;
      handleConnectionSuccess();
      enqueueConnection(trigger);
    }
  }, {
    key: "handleDeleteSuccess",
    value: function handleDeleteSuccess() {
      this.setState({
        submitting: false
      });
      this.props.handleDeleteSuccess();
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      // eslint-disable-next-line no-console
      console.error(error);
      this.setState({
        submitting: false,
        connectionError: error.message
      });
    }
  }, {
    key: "buildSuccessMessages",
    value: function buildSuccessMessages(konnector) {
      var t = this.props.t;
      var messages = [t('account.message.success.connect', {
        name: konnector.name
      })];

      if (konnector.additionnalSuccessMessage && konnector.additionnalSuccessMessage.message) {
        messages.push(t(konnector.additionnalSuccessMessage.message));
      }

      return messages;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          createdAccount = _this$props3.createdAccount,
          handleConnectionSuccess = _this$props3.handleConnectionSuccess,
          editing = _this$props3.editing,
          konnector = _this$props3.konnector,
          lastSuccess = _this$props3.lastSuccess,
          error = _this$props3.error,
          isRunning = _this$props3.isRunning,
          onDone = _this$props3.onDone,
          queued = _this$props3.queued,
          t = _this$props3.t,
          lang = _this$props3.lang,
          trigger = _this$props3.trigger,
          success = _this$props3.success,
          successButtonLabel = _this$props3.successButtonLabel;
      var _this$state = this.state,
          account = _this$state.account,
          connectionError = _this$state.connectionError,
          oAuthError = _this$state.oAuthError,
          submitting = _this$state.submitting,
          maintenance = _this$state.maintenance;
      var successMessages = success || queued ? this.buildSuccessMessages(konnector) : [];
      var konnectorError = error || oAuthError || connectionError; // If this is an update needed error AND the service has an update
      // available, we just display the blocking update banner
      // so we don't propagate the error to KonnectorEdit/KonnectorInstall

      var propagateError = Object(lib_konnectors__WEBPACK_IMPORTED_MODULE_10__["isKonnectorUpdateNeededError"])(konnectorError) && !!konnector.available_version ? false : true;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: styles_accountConnection__WEBPACK_IMPORTED_MODULE_11___default.a['col-account-connection']
      }, !!konnector.available_version && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Banners_UpdateMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
        konnector: konnector,
        error: konnectorError,
        isBlocking: Object(lib_konnectors__WEBPACK_IMPORTED_MODULE_10__["isKonnectorUpdateNeededError"])(konnectorError)
      }), editing ? // Properly load the edit view or the initial config view
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_KonnectorEdit__WEBPACK_IMPORTED_MODULE_8__["default"], {
        account: account,
        connector: konnector,
        error: propagateError && konnectorError,
        lastSuccess: lastSuccess,
        onDeleteSuccess: this.handleDeleteSuccess,
        onDeleteError: this.handleError,
        submitting: submitting || isRunning,
        trigger: trigger,
        maintenance: maintenance,
        lang: lang
      }) : maintenance ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_KonnectorMaintenance__WEBPACK_IMPORTED_MODULE_6__["default"], {
        maintenance: maintenance,
        lang: lang,
        konnectorName: konnector.name
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_KonnectorInstall__WEBPACK_IMPORTED_MODULE_5__["default"], {
        account: createdAccount,
        connector: konnector,
        onDone: onDone,
        onLoginSuccess: this.handleLoginSuccess,
        onSuccess: handleConnectionSuccess,
        legacySuccess: success || queued,
        successMessage: t('account.success.title.connect'),
        successButtonLabel: successButtonLabel,
        successMessages: successMessages
      }));
    }
  }]);

  return AccountConnection;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AccountConnection.contextTypes = {
  store: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    success: Object(ducks_connections__WEBPACK_IMPORTED_MODULE_9__["isConnectionConnected"])(state.connections, ownProps.trigger),
    error: Object(ducks_connections__WEBPACK_IMPORTED_MODULE_9__["getConnectionError"])(state.connections, ownProps.trigger),
    queued: Object(ducks_connections__WEBPACK_IMPORTED_MODULE_9__["isConnectionEnqueued"])(state.connections, ownProps.trigger)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    enqueueConnection: function enqueueConnection(trigger) {
      return dispatch(Object(ducks_connections__WEBPACK_IMPORTED_MODULE_9__["enqueueConnection"])(trigger));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_4__["translate"])()(AccountConnection))));

/***/ }),

/***/ "y1LY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-calendar_3f4104a6d0c92a698e16aa88623a3b1d",
  "use": "icon-calendar_3f4104a6d0c92a698e16aa88623a3b1d-usage",
  "viewBox": "0 0 48 48",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" id=\"icon-calendar_3f4104a6d0c92a698e16aa88623a3b1d\"><g stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" fill-rule=\"evenodd\"><g stroke=\"#95999D\"><path d=\"M9 5H1v42h46V5h-8\" /><path d=\"M15 9H9V1h6zM39 9h-6V1h6zM15 5h18M1 15h46\" /></g><path d=\"M13 19v24m10-24v24m10-24v24M5 23h38M5 31h38M5 39h38\" stroke=\"currentColor\" /></g></symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "yMTE":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en": "Us+F",
	"./en/": "Us+F",
	"./en/build_distance_in_words_locale": "LZbM",
	"./en/build_distance_in_words_locale/": "LZbM",
	"./en/build_distance_in_words_locale/index": "LZbM",
	"./en/build_distance_in_words_locale/index.js": "LZbM",
	"./en/build_format_locale": "6DAA",
	"./en/build_format_locale/": "6DAA",
	"./en/build_format_locale/index": "6DAA",
	"./en/build_format_locale/index.js": "6DAA",
	"./en/index": "Us+F",
	"./en/index.d.ts": "DYsx",
	"./en/index.js": "Us+F",
	"./en/package": "EJIZ",
	"./en/package.json": "EJIZ",
	"./es": "/S0t",
	"./es/": "/S0t",
	"./es/build_distance_in_words_locale": "GEfZ",
	"./es/build_distance_in_words_locale/": "GEfZ",
	"./es/build_distance_in_words_locale/index": "GEfZ",
	"./es/build_distance_in_words_locale/index.js": "GEfZ",
	"./es/build_format_locale": "O+zC",
	"./es/build_format_locale/": "O+zC",
	"./es/build_format_locale/index": "O+zC",
	"./es/build_format_locale/index.js": "O+zC",
	"./es/index": "/S0t",
	"./es/index.d.ts": "gbHe",
	"./es/index.js": "/S0t",
	"./es/package": "Vizl",
	"./es/package.json": "Vizl",
	"./fr": "LKA2",
	"./fr/": "LKA2",
	"./fr/build_distance_in_words_locale": "IzMR",
	"./fr/build_distance_in_words_locale/": "IzMR",
	"./fr/build_distance_in_words_locale/index": "IzMR",
	"./fr/build_distance_in_words_locale/index.js": "IzMR",
	"./fr/build_format_locale": "I3Zg",
	"./fr/build_format_locale/": "I3Zg",
	"./fr/build_format_locale/index": "I3Zg",
	"./fr/build_format_locale/index.js": "I3Zg",
	"./fr/index": "LKA2",
	"./fr/index.d.ts": "hE7Q",
	"./fr/index.js": "LKA2",
	"./fr/package": "herc",
	"./fr/package.json": "herc"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "yMTE";

/***/ }),

/***/ "zlKK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_services_CreateAccountService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Go3M");
/* harmony import */ var components_KonnectorHeaderIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("gAos");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var CreateAccountIntent =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateAccountIntent, _Component);

  function CreateAccountIntent(props, context) {
    var _this;

    _classCallCheck(this, CreateAccountIntent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreateAccountIntent).call(this, props, context));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleConnectionSuccess", function () {
      _this.setState({
        isSuccess: true
      });
    });

    _this.store = context.store;
    _this.state = {
      isSuccess: false
    };

    _this.store.fetchUrls();

    return _this;
  }

  _createClass(CreateAccountIntent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          konnector = _this$props.konnector,
          _onCancel = _this$props.onCancel,
          onTerminate = _this$props.onTerminate;
      var isSuccess = this.state.isSuccess;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-create-account-intent"
      }, !isSuccess && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_KonnectorHeaderIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        konnector: konnector,
        center: true
      }), konnector && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_services_CreateAccountService__WEBPACK_IMPORTED_MODULE_2__["default"], {
        konnector: konnector,
        onCancel: function onCancel() {
          return _onCancel();
        },
        onSuccess: onTerminate,
        handleConnectionSuccess: this.handleConnectionSuccess
      }));
    }
  }]);

  return CreateAccountIntent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

CreateAccountIntent.contextTypes = {
  store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (CreateAccountIntent);

/***/ })

/******/ });
//# sourceMappingURL=home.js.map