"use weex:vue";
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!**********************************************************!*\
  !*** D:/毕设项目/baf-client/baf/main.js?{"type":"appStyle"} ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************************************************************!*\
  !*** D:/毕设项目/baf-client/baf/App.vue?vue&type=style&index=0&lang=scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/毕设项目/baf-client/baf/App.vue?vue&type=style&index=0&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 12 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 13);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 15);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 16);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 17);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 13 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 14);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 14 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 15 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 16 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 14);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 17 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 18 */,
/* 19 */
/*!***********************************************!*\
  !*** D:/毕设项目/baf-client/baf/utils/request.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 11);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 20));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 21));\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 24));\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 25));\nvar _index = _interopRequireDefault(__webpack_require__(/*! @/config/index.js */ 26));\nvar _index2 = _interopRequireDefault(__webpack_require__(/*! @/store/localStore/index.js */ 27));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar HttpRequest = /*#__PURE__*/function () {\n  function HttpRequest() {\n    (0, _classCallCheck2.default)(this, HttpRequest);\n    this.baseURL = _index.default.BASE_URL;\n    this.timeout = 30000;\n    this.requestQueue = new Map();\n\n    //  认证配置 - 修复了字段名\n    this.authConfig = {\n      enabled: false,\n      // 默认关闭认证\n      tokenField: 'Authorization',\n      // 认证字段名\n      tokenPrefix: 'Bearer ',\n      // token前缀\n      tokenStorageKey: 'auth_token' // 存储key\n    };\n  }\n\n  //  启用认证功能\n  (0, _createClass2.default)(HttpRequest, [{\n    key: \"enableAuth\",\n    value: function enableAuth() {\n      this.authConfig.enabled = true;\n      return this;\n    }\n\n    //  禁用认证功能\n  }, {\n    key: \"disableAuth\",\n    value: function disableAuth() {\n      this.authConfig.enabled = false;\n      return this;\n    }\n\n    //  设置token\n  }, {\n    key: \"setToken\",\n    value: function setToken(token) {\n      uni.setStorageSync(this.authConfig.tokenStorageKey, token);\n      return this;\n    }\n\n    //  获取token\n  }, {\n    key: \"getToken\",\n    value: function getToken() {\n      return uni.getStorageSync(this.authConfig.tokenStorageKey) || '';\n    }\n\n    //判断是否已经登录\n  }, {\n    key: \"hadLogin\",\n    value: function hadLogin() {\n      var token = uni.getStorageSync(this.authConfig.tokenStorageKey);\n      if (token === '' || token === undefined) return false;else return true;\n    }\n\n    //  清除token\n  }, {\n    key: \"clearToken\",\n    value: function clearToken() {\n      uni.removeStorageSync(this.authConfig.tokenStorageKey);\n      return this;\n    }\n\n    //  核心请求方法\n  }, {\n    key: \"request\",\n    value: function request(params) {\n      var _this = this;\n      var requestId = Date.now().toString();\n      return new Promise(function (resolve, reject) {\n        var requestConfig = _this.buildConfig(params);\n        _this.requestQueue.set(requestId, requestConfig);\n        uni.request(_objectSpread(_objectSpread({}, requestConfig), {}, {\n          success: function success(res) {\n            _this.requestQueue.delete(requestId);\n            _this.handleBusinessResponse(res.data, resolve, reject);\n          },\n          fail: function fail(err) {\n            _this.requestQueue.delete(requestId);\n            _this.handleNetworkError(err);\n            reject(err);\n          }\n        }));\n      });\n    }\n\n    //  构建配置\n  }, {\n    key: \"buildConfig\",\n    value: function buildConfig(params) {\n      var baseHeader = _objectSpread({\n        'Content-Type': 'application/json;charset=UTF-8',\n        'Authorization': 'Basic c2FiZXI6c2FiZXJfc2VjcmV0'\n      }, params.header);\n      if (this.getToken()) {\n        var authHeader = this.buildAuthHeader();\n        if (authHeader) {\n          baseHeader[this.authConfig.tokenField] = authHeader;\n        }\n      }\n      //  动态添加认证头\n      if (this.shouldAddAuthHeader(params)) {\n        var _authHeader = this.buildAuthHeader();\n        if (_authHeader) {\n          baseHeader[this.authConfig.tokenField] = _authHeader;\n        }\n      }\n      return {\n        url: this.baseURL + params.url,\n        method: params.method || 'GET',\n        data: params.data,\n        header: baseHeader,\n        timeout: this.timeout\n      };\n    }\n\n    //  判断是否需要添加认证头\n  }, {\n    key: \"shouldAddAuthHeader\",\n    value: function shouldAddAuthHeader(params) {\n      // 公开接口不需要认证\n      if (this.isPublicApi(params.url)) {\n        return false;\n      }\n      return true;\n    }\n\n    //  构建认证头\n  }, {\n    key: \"buildAuthHeader\",\n    value: function buildAuthHeader() {\n      var token = this.getToken();\n      if (!token) {\n        uni.showToast({\n          title: '该操作需要登录',\n          icon: 'none'\n        }), uni.navigateTo({\n          url: '/pages/loginAndRegister/loginAndRegister'\n        });\n      }\n      return this.authConfig.tokenPrefix + token;\n    }\n\n    //  判断是否是公开接口\n  }, {\n    key: \"isPublicApi\",\n    value: function isPublicApi(url) {\n      var publicApis = ['server/system/code', 'server/system/login', 'server/system/modPassword', 'server/system/register', 'server/search/complement', 'server/search/comprehensiveSearch', 'server/search/postQueries', 'server/search/categoryQueries', 'server/search/userQueries', 'server/file/zoneRequest', 'server/blog/postList', 'server/blog/gainPostDetail', 'server/blog/gainPostComment', 'server/user/collectPostList'];\n      return publicApis.some(function (api) {\n        return url.startsWith(api);\n      });\n    }\n\n    //  快捷方法\n  }, {\n    key: \"get\",\n    value: function get(url) {\n      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      return this.request(_objectSpread({\n        url: url,\n        method: 'GET',\n        data: params\n      }, config));\n    }\n  }, {\n    key: \"post\",\n    value: function post(url) {\n      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      return this.request(_objectSpread({\n        url: url,\n        method: 'POST',\n        data: data\n      }, config));\n    }\n  }, {\n    key: \"put\",\n    value: function put(url) {\n      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      return this.request(_objectSpread({\n        url: url,\n        method: 'PUT',\n        data: data\n      }, config));\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete(url) {\n      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      return this.request(_objectSpread({\n        url: url,\n        method: 'DELETE'\n      }, config));\n    }\n\n    //  文件上传 - 支持认证\n  }, {\n    key: \"upload\",\n    value: function upload(url, filePath) {\n      var _this2 = this;\n      var formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      var config = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n      return new Promise(function (resolve, reject) {\n        var headers = _objectSpread({\n          'Content-Type': 'multipart/form-data',\n          'Authorization': 'Basic c2FiZXI6c2FiZXJfc2VjcmV0'\n        }, config.header);\n        var authHeader = _this2.buildAuthHeader();\n        if (authHeader) {\n          headers[_this2.authConfig.tokenField] = authHeader;\n        }\n        uni.uploadFile({\n          url: _this2.baseURL + url,\n          filePath: filePath,\n          name: 'file',\n          formData: formData,\n          header: headers,\n          success: function success(res) {\n            try {\n              var responseData = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;\n              _this2.handleBusinessResponse(responseData, resolve, reject);\n            } catch (error) {\n              resolve(res.data);\n            }\n          },\n          fail: reject\n        });\n      });\n    }\n\n    //  处理业务响应\n  }, {\n    key: \"handleBusinessResponse\",\n    value: function handleBusinessResponse(responseData, resolve, reject) {\n      if (responseData && (0, _typeof2.default)(responseData) === 'object' && 'code' in responseData) {\n        var code = responseData.code,\n          msg = responseData.msg,\n          data = responseData.data;\n        if (code === 200) {\n          resolve(data !== undefined ? data : responseData);\n        } else {\n          this.handleBusinessError(code, msg, responseData);\n          reject(new Error(msg || \"\\u4E1A\\u52A1\\u9519\\u8BEF: \".concat(code)));\n        }\n      } else {\n        resolve(responseData);\n      }\n    }\n\n    //  业务错误处理\n  }, {\n    key: \"handleBusinessError\",\n    value: function handleBusinessError(code, msg, data) {\n      var message = msg || '操作失败';\n      switch (code) {\n        case 400:\n          message = '输入数据有误，请重新输入';\n          break;\n        case 401:\n          message = '登录已过期，请重新登录';\n          this.handleUnauthorized();\n          break;\n        case 404:\n          message = '未找到该资源，请稍后重试';\n          break;\n        case 500:\n          message = '服务奔溃，请稍后重试';\n          break;\n        case 503:\n          message = '服务器繁忙，请稍后重试';\n          break;\n        default:\n          message = msg || \"\\u64CD\\u4F5C\\u5931\\u8D25: \".concat(code);\n      }\n      uni.showToast({\n        title: message,\n        icon: 'none',\n        duration: 2000\n      });\n    }\n\n    //  未授权处理\n  }, {\n    key: \"handleUnauthorized\",\n    value: function handleUnauthorized() {\n      this.clearToken(); // 清除token\n      _index2.default.clearUserInfo();\n      setTimeout(function () {\n        uni.reLaunch({\n          url: '/pages/loginAndRegister/loginAndRegister'\n        });\n      }, 1500);\n    }\n\n    //  HTTP错误处理（仅用于文件下载）\n  }, {\n    key: \"handleHttpError\",\n    value: function handleHttpError(statusCode) {\n      var message = '下载失败';\n      switch (statusCode) {\n        case 404:\n          message = '文件不存在';\n          break;\n        case 500:\n          message = '服务器错误';\n          break;\n        default:\n          message = \"\\u4E0B\\u8F7D\\u5931\\u8D25: \".concat(statusCode);\n      }\n      uni.showToast({\n        title: message,\n        icon: 'none',\n        duration: 2000\n      });\n    }\n\n    //  网络错误处理\n  }, {\n    key: \"handleNetworkError\",\n    value: function handleNetworkError(err) {\n      var message = '网络异常';\n      if (err.errMsg.includes('timeout')) {\n        message = '请求超时';\n      } else if (err.errMsg.includes('fail')) {\n        message = '网络连接失败';\n      }\n      uni.showToast({\n        title: message,\n        icon: 'none',\n        duration: 2000\n      });\n    }\n  }]);\n  return HttpRequest;\n}(); //  创建全局实例\nvar http = new HttpRequest();\nvar _default = http;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJIdHRwUmVxdWVzdCIsImJhc2VVUkwiLCJhcHBDb25maWciLCJCQVNFX1VSTCIsInRpbWVvdXQiLCJyZXF1ZXN0UXVldWUiLCJNYXAiLCJhdXRoQ29uZmlnIiwiZW5hYmxlZCIsInRva2VuRmllbGQiLCJ0b2tlblByZWZpeCIsInRva2VuU3RvcmFnZUtleSIsInRva2VuIiwidW5pIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTdG9yYWdlU3luYyIsInVuZGVmaW5lZCIsInJlbW92ZVN0b3JhZ2VTeW5jIiwicGFyYW1zIiwicmVxdWVzdElkIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0Q29uZmlnIiwiYnVpbGRDb25maWciLCJzZXQiLCJyZXF1ZXN0Iiwic3VjY2VzcyIsInJlcyIsImRlbGV0ZSIsImhhbmRsZUJ1c2luZXNzUmVzcG9uc2UiLCJkYXRhIiwiZmFpbCIsImVyciIsImhhbmRsZU5ldHdvcmtFcnJvciIsImJhc2VIZWFkZXIiLCJoZWFkZXIiLCJnZXRUb2tlbiIsImF1dGhIZWFkZXIiLCJidWlsZEF1dGhIZWFkZXIiLCJzaG91bGRBZGRBdXRoSGVhZGVyIiwidXJsIiwibWV0aG9kIiwiaXNQdWJsaWNBcGkiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJuYXZpZ2F0ZVRvIiwicHVibGljQXBpcyIsInNvbWUiLCJhcGkiLCJzdGFydHNXaXRoIiwiY29uZmlnIiwiZmlsZVBhdGgiLCJmb3JtRGF0YSIsImhlYWRlcnMiLCJ1cGxvYWRGaWxlIiwibmFtZSIsInJlc3BvbnNlRGF0YSIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwiY29kZSIsIm1zZyIsImhhbmRsZUJ1c2luZXNzRXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiLCJoYW5kbGVVbmF1dGhvcml6ZWQiLCJkdXJhdGlvbiIsImNsZWFyVG9rZW4iLCJ1c2VyU3RvcmUiLCJjbGVhclVzZXJJbmZvIiwic2V0VGltZW91dCIsInJlTGF1bmNoIiwic3RhdHVzQ29kZSIsImVyck1zZyIsImluY2x1ZGVzIiwiaHR0cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQW1EO0FBQUE7QUFBQSxJQUU3Q0EsV0FBVztFQUNoQix1QkFBYztJQUFBO0lBQ2IsSUFBSSxDQUFDQyxPQUFPLEdBQUdDLGNBQVMsQ0FBQ0MsUUFBUTtJQUNqQyxJQUFJLENBQUNDLE9BQU8sR0FBRyxLQUFLO0lBQ3BCLElBQUksQ0FBQ0MsWUFBWSxHQUFHLElBQUlDLEdBQUcsRUFBRTs7SUFFN0I7SUFDQSxJQUFJLENBQUNDLFVBQVUsR0FBRztNQUNqQkMsT0FBTyxFQUFFLEtBQUs7TUFBRTtNQUNoQkMsVUFBVSxFQUFFLGVBQWU7TUFBRTtNQUM3QkMsV0FBVyxFQUFFLFNBQVM7TUFBRTtNQUN4QkMsZUFBZSxFQUFFLFlBQVksQ0FBQztJQUMvQixDQUFDO0VBQ0Y7O0VBRUE7RUFBQTtJQUFBO0lBQUEsT0FDQSxzQkFBYTtNQUNaLElBQUksQ0FBQ0osVUFBVSxDQUFDQyxPQUFPLEdBQUcsSUFBSTtNQUM5QixPQUFPLElBQUk7SUFDWjs7SUFFQTtFQUFBO0lBQUE7SUFBQSxPQUNBLHVCQUFjO01BQ2IsSUFBSSxDQUFDRCxVQUFVLENBQUNDLE9BQU8sR0FBRyxLQUFLO01BQy9CLE9BQU8sSUFBSTtJQUNaOztJQUVBO0VBQUE7SUFBQTtJQUFBLE9BQ0Esa0JBQVNJLEtBQUssRUFBRTtNQUNmQyxHQUFHLENBQUNDLGNBQWMsQ0FBQyxJQUFJLENBQUNQLFVBQVUsQ0FBQ0ksZUFBZSxFQUFFQyxLQUFLLENBQUM7TUFDMUQsT0FBTyxJQUFJO0lBQ1o7O0lBRUE7RUFBQTtJQUFBO0lBQUEsT0FDQSxvQkFBVztNQUNWLE9BQU9DLEdBQUcsQ0FBQ0UsY0FBYyxDQUFDLElBQUksQ0FBQ1IsVUFBVSxDQUFDSSxlQUFlLENBQUMsSUFBSSxFQUFFO0lBQ2pFOztJQUVBO0VBQUE7SUFBQTtJQUFBLE9BQ0Es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SUFBSTtBQUFBIiwiZmlsZSI6IjE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcENvbmZpZyBmcm9tICdAL2NvbmZpZy9pbmRleC5qcydcclxuaW1wb3J0IHVzZXJTdG9yZSBmcm9tICdAL3N0b3JlL2xvY2FsU3RvcmUvaW5kZXguanMnXHJcblxyXG5jbGFzcyBIdHRwUmVxdWVzdCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmJhc2VVUkwgPSBhcHBDb25maWcuQkFTRV9VUkxcclxuXHRcdHRoaXMudGltZW91dCA9IDMwMDAwXHJcblx0XHR0aGlzLnJlcXVlc3RRdWV1ZSA9IG5ldyBNYXAoKVxyXG5cclxuXHRcdC8vICDorqTor4HphY3nva4gLSDkv67lpI3kuoblrZfmrrXlkI1cclxuXHRcdHRoaXMuYXV0aENvbmZpZyA9IHtcclxuXHRcdFx0ZW5hYmxlZDogZmFsc2UsIC8vIOm7mOiupOWFs+mXreiupOivgVxyXG5cdFx0XHR0b2tlbkZpZWxkOiAnQXV0aG9yaXphdGlvbicsIC8vIOiupOivgeWtl+auteWQjVxyXG5cdFx0XHR0b2tlblByZWZpeDogJ0JlYXJlciAnLCAvLyB0b2tlbuWJjee8gFxyXG5cdFx0XHR0b2tlblN0b3JhZ2VLZXk6ICdhdXRoX3Rva2VuJyAvLyDlrZjlgqhrZXlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vICDlkK/nlKjorqTor4Hlip/og71cclxuXHRlbmFibGVBdXRoKCkge1xyXG5cdFx0dGhpcy5hdXRoQ29uZmlnLmVuYWJsZWQgPSB0cnVlXHJcblx0XHRyZXR1cm4gdGhpc1xyXG5cdH1cclxuXHJcblx0Ly8gIOemgeeUqOiupOivgeWKn+iDvVxyXG5cdGRpc2FibGVBdXRoKCkge1xyXG5cdFx0dGhpcy5hdXRoQ29uZmlnLmVuYWJsZWQgPSBmYWxzZVxyXG5cdFx0cmV0dXJuIHRoaXNcclxuXHR9XHJcblxyXG5cdC8vICDorr7nva50b2tlblxyXG5cdHNldFRva2VuKHRva2VuKSB7XHJcblx0XHR1bmkuc2V0U3RvcmFnZVN5bmModGhpcy5hdXRoQ29uZmlnLnRva2VuU3RvcmFnZUtleSwgdG9rZW4pXHJcblx0XHRyZXR1cm4gdGhpc1xyXG5cdH1cclxuXHJcblx0Ly8gIOiOt+WPlnRva2VuXHJcblx0Z2V0VG9rZW4oKSB7XHJcblx0XHRyZXR1cm4gdW5pLmdldFN0b3JhZ2VTeW5jKHRoaXMuYXV0aENvbmZpZy50b2tlblN0b3JhZ2VLZXkpIHx8ICcnXHJcblx0fVxyXG5cclxuXHQvL+WIpOaWreaYr+WQpuW3sue7j+eZu+W9lVxyXG5cdGhhZExvZ2luKCkge1xyXG5cdFx0dmFyIHRva2VuID0gdW5pLmdldFN0b3JhZ2VTeW5jKHRoaXMuYXV0aENvbmZpZy50b2tlblN0b3JhZ2VLZXkpXHJcblx0XHRpZiAodG9rZW4gPT09ICcnIHx8IHRva2VuID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcclxuXHRcdGVsc2UgcmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHQvLyAg5riF6ZmkdG9rZW5cclxuXHRjbGVhclRva2VuKCkge1xyXG5cdFx0dW5pLnJlbW92ZVN0b3JhZ2VTeW5jKHRoaXMuYXV0aENvbmZpZy50b2tlblN0b3JhZ2VLZXkpXHJcblx0XHRyZXR1cm4gdGhpc1xyXG5cdH1cclxuXHJcblx0Ly8gIOaguOW/g+ivt+axguaWueazlVxyXG5cdHJlcXVlc3QocGFyYW1zKSB7XHJcblx0XHRjb25zdCByZXF1ZXN0SWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKClcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGNvbnN0IHJlcXVlc3RDb25maWcgPSB0aGlzLmJ1aWxkQ29uZmlnKHBhcmFtcylcclxuXHRcdFx0dGhpcy5yZXF1ZXN0UXVldWUuc2V0KHJlcXVlc3RJZCwgcmVxdWVzdENvbmZpZylcclxuXHJcblx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHQuLi5yZXF1ZXN0Q29uZmlnLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucmVxdWVzdFF1ZXVlLmRlbGV0ZShyZXF1ZXN0SWQpXHJcblx0XHRcdFx0XHR0aGlzLmhhbmRsZUJ1c2luZXNzUmVzcG9uc2UocmVzLmRhdGEsIHJlc29sdmUsIHJlamVjdClcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWw6IChlcnIpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucmVxdWVzdFF1ZXVlLmRlbGV0ZShyZXF1ZXN0SWQpXHJcblx0XHRcdFx0XHR0aGlzLmhhbmRsZU5ldHdvcmtFcnJvcihlcnIpXHJcblx0XHRcdFx0XHRyZWplY3QoZXJyKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQvLyAg5p6E5bu66YWN572uXHJcblx0YnVpbGRDb25maWcocGFyYW1zKSB7XHJcblx0XHRjb25zdCBiYXNlSGVhZGVyID0ge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcsXHJcblx0XHRcdCdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGMyRmlaWEk2YzJGaVpYSmZjMlZqY21WMCcsIC8vIOWfuuehgOiupOivgVxyXG5cdFx0XHQuLi5wYXJhbXMuaGVhZGVyXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuZ2V0VG9rZW4oKSkge1xyXG5cdFx0XHRjb25zdCBhdXRoSGVhZGVyID0gdGhpcy5idWlsZEF1dGhIZWFkZXIoKVxyXG5cdFx0XHRpZiAoYXV0aEhlYWRlcikge1xyXG5cdFx0XHRcdGJhc2VIZWFkZXJbdGhpcy5hdXRoQ29uZmlnLnRva2VuRmllbGRdID0gYXV0aEhlYWRlclxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvLyAg5Yqo5oCB5re75Yqg6K6k6K+B5aS0XHJcblx0XHRpZiAodGhpcy5zaG91bGRBZGRBdXRoSGVhZGVyKHBhcmFtcykpIHtcclxuXHRcdFx0Y29uc3QgYXV0aEhlYWRlciA9IHRoaXMuYnVpbGRBdXRoSGVhZGVyKClcclxuXHRcdFx0aWYgKGF1dGhIZWFkZXIpIHtcclxuXHRcdFx0XHRiYXNlSGVhZGVyW3RoaXMuYXV0aENvbmZpZy50b2tlbkZpZWxkXSA9IGF1dGhIZWFkZXJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dXJsOiB0aGlzLmJhc2VVUkwgKyBwYXJhbXMudXJsLFxyXG5cdFx0XHRtZXRob2Q6IHBhcmFtcy5tZXRob2QgfHwgJ0dFVCcsXHJcblx0XHRcdGRhdGE6IHBhcmFtcy5kYXRhLFxyXG5cdFx0XHRoZWFkZXI6IGJhc2VIZWFkZXIsXHJcblx0XHRcdHRpbWVvdXQ6IHRoaXMudGltZW91dFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gIOWIpOaWreaYr+WQpumcgOimgea3u+WKoOiupOivgeWktFxyXG5cdHNob3VsZEFkZEF1dGhIZWFkZXIocGFyYW1zKSB7XHJcblxyXG5cdFx0Ly8g5YWs5byA5o6l5Y+j5LiN6ZyA6KaB6K6k6K+BXHJcblx0XHRpZiAodGhpcy5pc1B1YmxpY0FwaShwYXJhbXMudXJsKSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlXHJcblx0fVxyXG5cclxuXHQvLyAg5p6E5bu66K6k6K+B5aS0XHJcblx0YnVpbGRBdXRoSGVhZGVyKCkge1xyXG5cdFx0Y29uc3QgdG9rZW4gPSB0aGlzLmdldFRva2VuKClcclxuXHRcdGlmICghdG9rZW4pIHtcclxuXHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+ivpeaTjeS9nOmcgOimgeeZu+W9lScsXHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvbG9naW5BbmRSZWdpc3Rlci9sb2dpbkFuZFJlZ2lzdGVyJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5hdXRoQ29uZmlnLnRva2VuUHJlZml4ICsgdG9rZW5cclxuXHR9XHJcblxyXG5cdC8vICDliKTmlq3mmK/lkKbmmK/lhazlvIDmjqXlj6NcclxuXHRpc1B1YmxpY0FwaSh1cmwpIHtcclxuXHRcdGNvbnN0IHB1YmxpY0FwaXMgPSBbXHJcblx0XHRcdCdzZXJ2ZXIvc3lzdGVtL2NvZGUnLFxyXG5cdFx0XHQnc2VydmVyL3N5c3RlbS9sb2dpbicsXHJcblx0XHRcdCdzZXJ2ZXIvc3lzdGVtL21vZFBhc3N3b3JkJyxcclxuXHRcdFx0J3NlcnZlci9zeXN0ZW0vcmVnaXN0ZXInLFxyXG5cdFx0XHQnc2VydmVyL3NlYXJjaC9jb21wbGVtZW50JyxcclxuXHRcdFx0J3NlcnZlci9zZWFyY2gvY29tcHJlaGVuc2l2ZVNlYXJjaCcsXHJcblx0XHRcdCdzZXJ2ZXIvc2VhcmNoL3Bvc3RRdWVyaWVzJyxcclxuXHRcdFx0J3NlcnZlci9zZWFyY2gvY2F0ZWdvcnlRdWVyaWVzJyxcclxuXHRcdFx0J3NlcnZlci9zZWFyY2gvdXNlclF1ZXJpZXMnLFxyXG5cdFx0XHQnc2VydmVyL2ZpbGUvem9uZVJlcXVlc3QnLFxyXG5cdFx0XHQnc2VydmVyL2Jsb2cvcG9zdExpc3QnLFxyXG5cdFx0XHQnc2VydmVyL2Jsb2cvZ2FpblBvc3REZXRhaWwnLFxyXG5cdFx0XHQnc2VydmVyL2Jsb2cvZ2FpblBvc3RDb21tZW50JyxcclxuXHRcdFx0J3NlcnZlci91c2VyL2NvbGxlY3RQb3N0TGlzdCdcclxuXHRcdF1cclxuXHJcblx0XHRyZXR1cm4gcHVibGljQXBpcy5zb21lKGFwaSA9PiB1cmwuc3RhcnRzV2l0aChhcGkpKVxyXG5cdH1cclxuXHJcblx0Ly8gIOW/q+aNt+aWueazlVxyXG5cdGdldCh1cmwsIHBhcmFtcyA9IHt9LCBjb25maWcgPSB7fSkge1xyXG5cdFx0cmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcblx0XHRcdHVybCxcclxuXHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0ZGF0YTogcGFyYW1zLFxyXG5cdFx0XHQuLi5jb25maWdcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRwb3N0KHVybCwgZGF0YSA9IHt9LCBjb25maWcgPSB7fSkge1xyXG5cdFx0cmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcblx0XHRcdHVybCxcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGRhdGEsXHJcblx0XHRcdC4uLmNvbmZpZ1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHB1dCh1cmwsIGRhdGEgPSB7fSwgY29uZmlnID0ge30pIHtcclxuXHRcdHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG5cdFx0XHR1cmwsXHJcblx0XHRcdG1ldGhvZDogJ1BVVCcsXHJcblx0XHRcdGRhdGEsXHJcblx0XHRcdC4uLmNvbmZpZ1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGRlbGV0ZSh1cmwsIGNvbmZpZyA9IHt9KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsLFxyXG5cdFx0XHRtZXRob2Q6ICdERUxFVEUnLFxyXG5cdFx0XHQuLi5jb25maWdcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQvLyAg5paH5Lu25LiK5LygIC0g5pSv5oyB6K6k6K+BXHJcblx0dXBsb2FkKHVybCwgZmlsZVBhdGgsIGZvcm1EYXRhID0ge30sIGNvbmZpZyA9IHt9KSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRjb25zdCBoZWFkZXJzID0ge1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcblx0XHRcdFx0J0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYzJGaVpYSTZjMkZpWlhKZmMyVmpjbVYwJyxcclxuXHRcdFx0XHQuLi5jb25maWcuaGVhZGVyXHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgYXV0aEhlYWRlciA9IHRoaXMuYnVpbGRBdXRoSGVhZGVyKClcclxuXHJcblx0XHRcdGlmIChhdXRoSGVhZGVyKSB7XHJcblx0XHRcdFx0aGVhZGVyc1t0aGlzLmF1dGhDb25maWcudG9rZW5GaWVsZF0gPSBhdXRoSGVhZGVyXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHVuaS51cGxvYWRGaWxlKHtcclxuXHRcdFx0XHR1cmw6IHRoaXMuYmFzZVVSTCArIHVybCxcclxuXHRcdFx0XHRmaWxlUGF0aCxcclxuXHRcdFx0XHRuYW1lOiAnZmlsZScsXHJcblx0XHRcdFx0Zm9ybURhdGEsXHJcblx0XHRcdFx0aGVhZGVyOiBoZWFkZXJzLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlRGF0YSA9IHR5cGVvZiByZXMuZGF0YSA9PT0gJ3N0cmluZycgP1xyXG5cdFx0XHRcdFx0XHRcdEpTT04ucGFyc2UocmVzLmRhdGEpIDpcclxuXHRcdFx0XHRcdFx0XHRyZXMuZGF0YVxyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy5oYW5kbGVCdXNpbmVzc1Jlc3BvbnNlKHJlc3BvbnNlRGF0YSwgcmVzb2x2ZSwgcmVqZWN0KVxyXG5cdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXMuZGF0YSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWw6IHJlamVjdFxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cclxuXHQvLyAg5aSE55CG5Lia5Yqh5ZON5bqUXHJcblx0aGFuZGxlQnVzaW5lc3NSZXNwb25zZShyZXNwb25zZURhdGEsIHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0aWYgKHJlc3BvbnNlRGF0YSAmJiB0eXBlb2YgcmVzcG9uc2VEYXRhID09PSAnb2JqZWN0JyAmJiAnY29kZScgaW4gcmVzcG9uc2VEYXRhKSB7XHJcblx0XHRcdGNvbnN0IHtcclxuXHRcdFx0XHRjb2RlLFxyXG5cdFx0XHRcdG1zZyxcclxuXHRcdFx0XHRkYXRhXHJcblx0XHRcdH0gPSByZXNwb25zZURhdGFcclxuXHRcdFx0aWYgKGNvZGUgPT09IDIwMCkge1xyXG5cdFx0XHRcdHJlc29sdmUoZGF0YSAhPT0gdW5kZWZpbmVkID8gZGF0YSA6IHJlc3BvbnNlRGF0YSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmhhbmRsZUJ1c2luZXNzRXJyb3IoY29kZSwgbXNnLCByZXNwb25zZURhdGEpXHJcblx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihtc2cgfHwgYOS4muWKoemUmeivrzogJHtjb2RlfWApKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXNvbHZlKHJlc3BvbnNlRGF0YSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vICDkuJrliqHplJnor6/lpITnkIZcclxuXHRoYW5kbGVCdXNpbmVzc0Vycm9yKGNvZGUsIG1zZywgZGF0YSkge1xyXG5cdFx0bGV0IG1lc3NhZ2UgPSBtc2cgfHwgJ+aTjeS9nOWksei0pSdcclxuXHRcdHN3aXRjaCAoY29kZSkge1xyXG5cdFx0XHRjYXNlIDQwMDpcclxuXHRcdFx0XHRtZXNzYWdlID0gJ+i+k+WFpeaVsOaNruacieivr++8jOivt+mHjeaWsOi+k+WFpSdcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlIDQwMTpcclxuXHRcdFx0XHRtZXNzYWdlID0gJ+eZu+W9leW3sui/h+acn++8jOivt+mHjeaWsOeZu+W9lSdcclxuXHRcdFx0XHR0aGlzLmhhbmRsZVVuYXV0aG9yaXplZCgpXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSA0MDQ6XHJcblx0XHRcdFx0bWVzc2FnZSA9ICfmnKrmib7liLDor6XotYTmupDvvIzor7fnqI3lkI7ph43or5UnXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSA1MDA6XHJcblx0XHRcdFx0bWVzc2FnZSA9ICfmnI3liqHlpZTmuoPvvIzor7fnqI3lkI7ph43or5UnXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSA1MDM6XHJcblx0XHRcdFx0bWVzc2FnZSA9ICfmnI3liqHlmajnuYHlv5nvvIzor7fnqI3lkI7ph43or5UnXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRtZXNzYWdlID0gbXNnIHx8IGDmk43kvZzlpLHotKU6ICR7Y29kZX1gXHJcblx0XHR9XHJcblxyXG5cdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdHRpdGxlOiBtZXNzYWdlLFxyXG5cdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0Ly8gIOacquaOiOadg+WkhOeQhlxyXG5cdGhhbmRsZVVuYXV0aG9yaXplZCgpIHtcclxuXHRcdHRoaXMuY2xlYXJUb2tlbigpIC8vIOa4hemZpHRva2VuXHJcblx0XHR1c2VyU3RvcmUuY2xlYXJVc2VySW5mbygpO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHVuaS5yZUxhdW5jaCh7XHJcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL2xvZ2luQW5kUmVnaXN0ZXIvbG9naW5BbmRSZWdpc3RlcidcclxuXHRcdFx0fSlcclxuXHRcdH0sIDE1MDApXHJcblx0fVxyXG5cclxuXHJcblx0Ly8gIEhUVFDplJnor6/lpITnkIbvvIjku4XnlKjkuo7mlofku7bkuIvovb3vvIlcclxuXHRoYW5kbGVIdHRwRXJyb3Ioc3RhdHVzQ29kZSkge1xyXG5cdFx0bGV0IG1lc3NhZ2UgPSAn5LiL6L295aSx6LSlJ1xyXG5cdFx0c3dpdGNoIChzdGF0dXNDb2RlKSB7XHJcblx0XHRcdGNhc2UgNDA0OlxyXG5cdFx0XHRcdG1lc3NhZ2UgPSAn5paH5Lu25LiN5a2Y5ZyoJ1xyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgNTAwOlxyXG5cdFx0XHRcdG1lc3NhZ2UgPSAn5pyN5Yqh5Zmo6ZSZ6K+vJ1xyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0bWVzc2FnZSA9IGDkuIvovb3lpLHotKU6ICR7c3RhdHVzQ29kZX1gXHJcblx0XHR9XHJcblx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0dGl0bGU6IG1lc3NhZ2UsXHJcblx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0ZHVyYXRpb246IDIwMDBcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQvLyAg572R57uc6ZSZ6K+v5aSE55CGXHJcblx0aGFuZGxlTmV0d29ya0Vycm9yKGVycikge1xyXG5cdFx0bGV0IG1lc3NhZ2UgPSAn572R57uc5byC5bi4J1xyXG5cdFx0aWYgKGVyci5lcnJNc2cuaW5jbHVkZXMoJ3RpbWVvdXQnKSkge1xyXG5cdFx0XHRtZXNzYWdlID0gJ+ivt+axgui2heaXtidcclxuXHRcdH0gZWxzZSBpZiAoZXJyLmVyck1zZy5pbmNsdWRlcygnZmFpbCcpKSB7XHJcblx0XHRcdG1lc3NhZ2UgPSAn572R57uc6L+e5o6l5aSx6LSlJ1xyXG5cdFx0fVxyXG5cdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdHRpdGxlOiBtZXNzYWdlLFxyXG5cdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuLy8gIOWIm+W7uuWFqOWxgOWunuS+i1xyXG5jb25zdCBodHRwID0gbmV3IEh0dHBSZXF1ZXN0KClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGh0dHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 21 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 22);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 22 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 20)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 23);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 23 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 20)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 24 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 25 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 22);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 26 */
/*!**********************************************!*\
  !*** D:/毕设项目/baf-client/baf/config/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  // BASE_URL:'http://115.191.63.22:8884/',\n  // WEBSOCKET_URL:'ws://115.191.63.22:8884/system/'\n\n  BASE_URL: 'http://192.168.1.28:8884/',\n  WEBSOCKET_URL: 'ws://192.168.1.28:8884/system/'\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29uZmlnL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwiV0VCU09DS0VUX1VSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQWM7RUFDYjtFQUNBOztFQUVBQSxRQUFRLEVBQUMsMkJBQTJCO0VBQ3BDQyxhQUFhLEVBQUM7QUFDZixDQUFDO0FBQUEiLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdHtcclxuXHQvLyBCQVNFX1VSTDonaHR0cDovLzExNS4xOTEuNjMuMjI6ODg4NC8nLFxyXG5cdC8vIFdFQlNPQ0tFVF9VUkw6J3dzOi8vMTE1LjE5MS42My4yMjo4ODg0L3N5c3RlbS8nXHJcblx0XHJcblx0QkFTRV9VUkw6J2h0dHA6Ly8xOTIuMTY4LjEuMjg6ODg4NC8nLFxyXG5cdFdFQlNPQ0tFVF9VUkw6J3dzOi8vMTkyLjE2OC4xLjI4Ojg4ODQvc3lzdGVtLycgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!********************************************************!*\
  !*** D:/毕设项目/baf-client/baf/store/localStore/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 11);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _request = _interopRequireDefault(__webpack_require__(/*! @/utils/request.js */ 19));\nvar _default = {\n  //保存用户数据\n  saveUserInfo: function saveUserInfo(userInfo) {\n    uni.setStorageSync('userInfo', userInfo);\n  },\n  //获取用户id\n  getUserid: function getUserid() {\n    try {\n      var userInfo = uni.getStorageSync('userInfo');\n      if (userInfo && userInfo.id) {\n        return userInfo.id;\n      }\n      return undefined;\n    } catch (error) {\n      __f__(\"error\", '获取用户ID失败:', error, \" at store/localStore/index.js:19\");\n      return undefined;\n    }\n  },\n  //获取用户信息\n  getUserInfo: function getUserInfo() {\n    try {\n      var userInfo = uni.getStorageSync(\"userInfo\");\n      return userInfo || undefined;\n    } catch (error) {\n      __f__(\"error\", '获取用户信息失败:', error, \" at store/localStore/index.js:31\");\n      return undefined;\n    }\n  },\n  //用户退出登录\n  clearUserInfo: function clearUserInfo() {\n    uni.removeStorageSync('userInfo');\n    _request.default.clearToken();\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 28)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbG9jYWxTdG9yZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJzYXZlVXNlckluZm8iLCJ1c2VySW5mbyIsInVuaSIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0VXNlcmlkIiwiZ2V0U3RvcmFnZVN5bmMiLCJpZCIsInVuZGVmaW5lZCIsImVycm9yIiwiZ2V0VXNlckluZm8iLCJjbGVhclVzZXJJbmZvIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJodHRwIiwiY2xlYXJUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQXNDLGVBRXZCO0VBRWQ7RUFDQUEsWUFBWSx3QkFBQ0MsUUFBUSxFQUFFO0lBQ3RCQyxHQUFHLENBQUNDLGNBQWMsQ0FBQyxVQUFVLEVBQUVGLFFBQVEsQ0FBQztFQUN6QyxDQUFDO0VBRUQ7RUFDQUcsU0FBUyx1QkFBRztJQUNYLElBQUk7TUFDSCxJQUFNSCxRQUFRLEdBQUdDLEdBQUcsQ0FBQ0csY0FBYyxDQUFDLFVBQVUsQ0FBQztNQUMvQyxJQUFJSixRQUFRLElBQUlBLFFBQVEsQ0FBQ0ssRUFBRSxFQUFFO1FBQzVCLE9BQU9MLFFBQVEsQ0FBQ0ssRUFBRTtNQUNuQjtNQUNBLE9BQU9DLFNBQVM7SUFDakIsQ0FBQyxDQUFDLE9BQU9DLEtBQUssRUFBRTtNQUNmLGVBQWMsV0FBVyxFQUFFQSxLQUFLO01BQ2hDLE9BQU9ELFNBQVM7SUFDakI7RUFDRCxDQUFDO0VBRUQ7RUFDQUUsV0FBVyx5QkFBRztJQUNiLElBQUk7TUFDSCxJQUFNUixRQUFRLEdBQUdDLEdBQUcsQ0FBQ0csY0FBYyxDQUFDLFVBQVUsQ0FBQztNQUUvQyxPQUFPSixRQUFRLElBQUlNLFNBQVM7SUFDN0IsQ0FBQyxDQUFDLE9BQU9DLEtBQUssRUFBRTtNQUNmLGVBQWMsV0FBVyxFQUFFQSxLQUFLO01BQ2hDLE9BQU9ELFNBQVM7SUFDakI7RUFFRCxDQUFDO0VBRUQ7RUFDQUcsYUFBYSwyQkFBRztJQUNmUixHQUFHLENBQUNTLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztJQUNqQ0MsZ0JBQUksQ0FBQ0MsVUFBVSxFQUFFO0VBQ2xCO0FBRUQsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHAgZnJvbSBcIkAvdXRpbHMvcmVxdWVzdC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuXHQvL+S/neWtmOeUqOaIt+aVsOaNrlxyXG5cdHNhdmVVc2VySW5mbyh1c2VySW5mbykge1xyXG5cdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycsIHVzZXJJbmZvKVxyXG5cdH0sXHJcblxyXG5cdC8v6I635Y+W55So5oi3aWRcclxuXHRnZXRVc2VyaWQoKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCB1c2VySW5mbyA9IHVuaS5nZXRTdG9yYWdlU3luYygndXNlckluZm8nKTtcclxuXHRcdFx0aWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLmlkKSB7XHJcblx0XHRcdFx0cmV0dXJuIHVzZXJJbmZvLmlkO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCfojrflj5bnlKjmiLdJROWksei0pTonLCBlcnJvcik7XHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0Ly/ojrflj5bnlKjmiLfkv6Hmga9cclxuXHRnZXRVc2VySW5mbygpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHVzZXJJbmZvID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwidXNlckluZm9cIik7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gdXNlckluZm8gfHwgdW5kZWZpbmVkO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcign6I635Y+W55So5oi35L+h5oGv5aSx6LSlOicsIGVycm9yKTtcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHJcblx0Ly/nlKjmiLfpgIDlh7rnmbvlvZVcclxuXHRjbGVhclVzZXJJbmZvKCkge1xyXG5cdFx0dW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCd1c2VySW5mbycpO1xyXG5cdFx0aHR0cC5jbGVhclRva2VuKCk7XHJcblx0fSxcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLog;
exports.log = log;
function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}
function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;
  }
}
function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}
function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();
    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  console[type](msg);
}

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 33 */
/*!**********************************************************************************************!*\
  !*** D:/毕设项目/baf-client/baf/main.js?{"page":"pages%2FpostDetails%2FsubNvue%2FcommentPopup"} ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_postDetails_subNvue_commentPopup_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/postDetails/subNvue/commentPopup.nvue?mpType=page */ 34);\n\n        \n        \n        \n        \n        _pages_postDetails_subNvue_commentPopup_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_postDetails_subNvue_commentPopup_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/postDetails/subNvue/commentPopup'\n        _pages_postDetails_subNvue_commentPopup_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_postDetails_subNvue_commentPopup_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBbUY7QUFDbkYsUUFBUSxnR0FBRztBQUNYLFFBQVEsZ0dBQUc7QUFDWCxRQUFRLGdHQUFHO0FBQ1gsZ0JBQWdCLGdHQUFHIiwiZmlsZSI6IjMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCAndW5pLXBvbHlmaWxsJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvcG9zdERldGFpbHMvc3ViTnZ1ZS9jb21tZW50UG9wdXAubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvcG9zdERldGFpbHMvc3ViTnZ1ZS9jb21tZW50UG9wdXAnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!**************************************************************************************!*\
  !*** D:/毕设项目/baf-client/baf/pages/postDetails/subNvue/commentPopup.nvue?mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _commentPopup_nvue_vue_type_template_id_77589478_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentPopup.nvue?vue&type=template&id=77589478&scoped=true&mpType=page */ 35);\n/* harmony import */ var _commentPopup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentPopup.nvue?vue&type=script&lang=js&mpType=page */ 46);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _commentPopup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _commentPopup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _commentPopup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _commentPopup_nvue_vue_type_template_id_77589478_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _commentPopup_nvue_vue_type_template_id_77589478_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"77589478\",\n  \"76667a43\",\n  false,\n  _commentPopup_nvue_vue_type_template_id_77589478_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/postDetails/subNvue/commentPopup.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUo7QUFDako7QUFDNEU7QUFDTDtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDcUs7QUFDckssZ0JBQWdCLCtLQUFVO0FBQzFCLEVBQUUsOEZBQU07QUFDUixFQUFFLCtHQUFNO0FBQ1IsRUFBRSx3SEFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtSEFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9jb21tZW50UG9wdXAubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NzU4OTQ3OCZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29tbWVudFBvcHVwLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vY29tbWVudFBvcHVwLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3NzU4OTQ3OFwiLFxuICBcIjc2NjY3YTQzXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3Bvc3REZXRhaWxzL3N1Yk52dWUvY29tbWVudFBvcHVwLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!********************************************************************************************************************************!*\
  !*** D:/毕设项目/baf-client/baf/pages/postDetails/subNvue/commentPopup.nvue?vue&type=template&id=77589478&scoped=true&mpType=page ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_commentPopup_nvue_vue_type_template_id_77589478_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./commentPopup.nvue?vue&type=template&id=77589478&scoped=true&mpType=page */ 36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_commentPopup_nvue_vue_type_template_id_77589478_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_commentPopup_nvue_vue_type_template_id_77589478_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_commentPopup_nvue_vue_type_template_id_77589478_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_commentPopup_nvue_vue_type_template_id_77589478_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 36 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/毕设项目/baf-client/baf/pages/postDetails/subNvue/commentPopup.nvue?vue&type=template&id=77589478&scoped=true&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniIcons: __webpack_require__(/*! @dcloudio/uni-ui/lib/uni-icons/uni-icons.vue */ 37).default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { style: _vm.childCommentContainer },
    [
      _c(
        "view",
        {
          style: _vm.controlBlock,
          on: {
            click: function ($event) {
              _vm.closeChildCommentblock()
            },
          },
        },
        [_c("uni-icons", { attrs: { type: "closeempty", size: "25" } })],
        1
      ),
      _c(
        "scroll-view",
        {
          style: _vm.scrollView,
          attrs: { scrollY: true, lowerThreshold: "50" },
          on: { scrolltolower: _vm.getChildCommentList },
        },
        [
          _c("view", { style: _vm.commentBlock }, [
            _vm.parentComment !== null &&
            _vm.parentComment.userVo.avatar !== null &&
            _vm.parentComment.userVo.avatar !== undefined
              ? _c("view", { style: _vm.avatarBlock }, [
                  _c(
                    "view",
                    {
                      style: _vm.avatarBorderBlock,
                      on: {
                        click: function ($event) {
                          _vm.skipToUserDetail(_vm.parentComment.userVo.id)
                        },
                      },
                    },
                    [
                      _c("u-image", {
                        style: _vm.imageBlock,
                        attrs: { src: _vm.parentComment.userVo.avatar },
                      }),
                    ],
                    1
                  ),
                ])
              : _vm._e(),
            _c("view", { style: _vm.userMessageBlock }, [
              _c("view", { style: _vm.userNameIsLikedBlock }, [
                _c("view", { style: _vm.userNameIsPosterTimeAddrBlock }, [
                  _c("view", { style: _vm.userNameIsPosterBlock }, [
                    _c("view", { style: _vm.userNameBlock }, [
                      _c(
                        "u-text",
                        {
                          style: _vm.userNameTextBlock,
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(_vm.parentComment.userVo.userName))]
                      ),
                    ]),
                    _c(
                      "view",
                      { style: _vm.isPosterBlock },
                      [
                        _c("u-image", {
                          style: _vm.isPosterImgBlock,
                          attrs: { src: "/static/poster.png" },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _c("view", { style: _vm.timeAddrBlock }, [
                    _c("view", { style: _vm.timeAndAddrBlock }, [
                      _c(
                        "u-text",
                        {
                          style: _vm.timeAddrTextBlock,
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.formatTimeAgo(_vm.parentComment.publicTime)
                            )
                          ),
                        ]
                      ),
                    ]),
                    _c("view", { style: _vm.timeAndAddrBlock }, [
                      _c(
                        "u-text",
                        {
                          style: _vm.timeAddrTextBlock,
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [
                          _vm._v(
                            "· " + _vm._s(_vm.parentComment.userVo.province)
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]),
                _c(
                  "view",
                  { style: _vm.isLikedBlock },
                  [
                    _vm.parentComment.isLiked
                      ? _c("u-image", {
                          style: _vm.isLikedImgBlock,
                          attrs: { src: "/static/liked.png" },
                          on: {
                            click: function ($event) {
                              _vm.tapLiked()
                            },
                          },
                        })
                      : _c("u-image", {
                          style: _vm.isLikedImgBlock,
                          attrs: { src: "/static/like.png" },
                          on: {
                            click: function ($event) {
                              _vm.tapLiked()
                            },
                          },
                        }),
                    _c("view", { style: _vm.isLikedCountBlock }, [
                      _c(
                        "u-text",
                        {
                          style: _vm.countBlock,
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(_vm.parentComment.likedCount))]
                      ),
                    ]),
                  ],
                  1
                ),
              ]),
              _c(
                "view",
                { style: _vm.contentMediaBlock },
                [
                  _c("view", { style: _vm.contentBlock }, [
                    _c(
                      "u-text",
                      {
                        style: _vm.contentFont,
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v(_vm._s(_vm.parentComment.comment))]
                    ),
                  ]),
                  _vm.parentComment.fileType !== null &&
                  _vm.parentComment.fileType === "video"
                    ? _c("u-video", {
                        style: {
                          height: _vm.device.rpxToPx(280) + "px",
                          width: _vm.device.rpxToPx(500) + "px",
                        },
                        attrs: {
                          src: _vm.parentComment.fileName,
                          poster: _vm.parentComment.cover,
                        },
                      })
                    : _vm.parentComment.fileType !== null &&
                      _vm.parentComment.fileType === "image"
                    ? _c(
                        "view",
                        { style: _vm.mediaBlock },
                        _vm._l(_vm.imgList, function (item, index) {
                          return _c(
                            "view",
                            { style: _vm.contentImageBlock },
                            [
                              _c("u-image", {
                                style: _vm.image,
                                attrs: { src: item },
                                on: {
                                  click: function ($event) {
                                    _vm.previewImage(index)
                                  },
                                },
                              }),
                            ],
                            1
                          )
                        }),
                        0
                      )
                    : _vm._e(),
                ],
                1
              ),
            ]),
          ]),
          _c("view", { style: _vm.cuttingLine }),
          _vm._l(_vm.childCommentList, function (childComment, index) {
            return _c(
              "view",
              { key: childComment.id, style: _vm.commentBlock },
              [
                childComment !== null &&
                childComment.userVo.avatar !== null &&
                childComment.userVo.avatar !== undefined
                  ? _c("view", { style: _vm.avatarBlock }, [
                      _c(
                        "view",
                        {
                          style: _vm.avatarBorderBlock,
                          on: {
                            click: function ($event) {
                              _vm.skipToUserDetail(childComment.userVo.id)
                            },
                          },
                        },
                        [
                          _c("u-image", {
                            style: _vm.imageBlock,
                            attrs: { src: childComment.userVo.avatar },
                          }),
                        ],
                        1
                      ),
                    ])
                  : _vm._e(),
                _c("view", { style: _vm.userMessageBlock }, [
                  _c("view", { style: _vm.userNameIsLikedBlock }, [
                    _c("view", { style: _vm.userNameIsPosterTimeAddrBlock }, [
                      _c("view", { style: _vm.userNameIsPosterBlock }, [
                        _c("view", { style: _vm.userNameBlock }, [
                          _c(
                            "u-text",
                            {
                              style: _vm.userNameTextBlock,
                              appendAsTree: true,
                              attrs: { append: "tree" },
                            },
                            [_vm._v(_vm._s(childComment.userVo.userName))]
                          ),
                        ]),
                        _c(
                          "view",
                          { style: _vm.isPosterBlock },
                          [
                            _c("u-image", {
                              style: _vm.isPosterImgBlock,
                              attrs: { src: "/static/poster.png" },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _c("view", { style: _vm.timeAddrBlock }, [
                        _c("view", { style: _vm.timeAndAddrBlock }, [
                          _c(
                            "u-text",
                            {
                              style: _vm.timeAddrTextBlock,
                              appendAsTree: true,
                              attrs: { append: "tree" },
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.formatTimeAgo(childComment.publicTime)
                                )
                              ),
                            ]
                          ),
                        ]),
                        _c("view", { style: _vm.timeAndAddrBlock }, [
                          _c(
                            "u-text",
                            {
                              style: _vm.timeAddrTextBlock,
                              appendAsTree: true,
                              attrs: { append: "tree" },
                            },
                            [
                              _vm._v(
                                "· " + _vm._s(childComment.userVo.province)
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                    _c(
                      "view",
                      { style: _vm.isLikedBlock },
                      [
                        childComment.isLiked
                          ? _c("u-image", {
                              style: _vm.isLikedImgBlock,
                              attrs: { src: "/static/liked.png" },
                              on: {
                                click: function ($event) {
                                  _vm.tapLiked()
                                },
                              },
                            })
                          : _c("u-image", {
                              style: _vm.isLikedImgBlock,
                              attrs: { src: "/static/like.png" },
                              on: {
                                click: function ($event) {
                                  _vm.tapLiked()
                                },
                              },
                            }),
                        _c("view", { style: _vm.isLikedCountBlock }, [
                          _c(
                            "u-text",
                            {
                              style: _vm.countBlock,
                              appendAsTree: true,
                              attrs: { append: "tree" },
                            },
                            [_vm._v(_vm._s(childComment.likedCount))]
                          ),
                        ]),
                      ],
                      1
                    ),
                  ]),
                  _c(
                    "view",
                    { style: _vm.contentMediaBlock },
                    [
                      _c("view", { style: _vm.contentBlock }, [
                        _c(
                          "u-text",
                          {
                            style: _vm.contentFont,
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [_vm._v(_vm._s(childComment.comment))]
                        ),
                      ]),
                      childComment.fileType !== null &&
                      childComment.fileType === "video"
                        ? _c("u-video", {
                            style: {
                              height: _vm.device.rpxToPx(280) + "px",
                              width: _vm.device.rpxToPx(500) + "px",
                            },
                            attrs: {
                              src: childComment.fileName,
                              poster: childComment.cover,
                            },
                          })
                        : childComment.fileType !== null &&
                          childComment.fileType === "image"
                        ? _c(
                            "view",
                            { style: _vm.mediaBlock },
                            _vm._l(
                              _vm.processChildImageUrls(childComment.fileName),
                              function (item, index) {
                                return _c(
                                  "view",
                                  { style: _vm.contentImageBlock },
                                  [
                                    _c("u-image", {
                                      style: _vm.image,
                                      attrs: { src: item },
                                      on: {
                                        click: function ($event) {
                                          _vm.previewImage(index)
                                        },
                                      },
                                    }),
                                  ],
                                  1
                                )
                              }
                            ),
                            0
                          )
                        : _vm._e(),
                    ],
                    1
                  ),
                ]),
              ]
            )
          }),
        ],
        2
      ),
      _c(
        "view",
        { style: _vm.mediaFlag === 0 ? _vm.inputBlock : _vm.inputDisplayBlock },
        [
          _vm.mediaFlag !== 0
            ? _c("view", { style: _vm.imgVideoDisplay }, [
                _vm.mediaFlag === 1
                  ? _c(
                      "view",
                      { style: _vm.displayImgBlock },
                      _vm._l(_vm.displayedImages, function (file, index) {
                        return _c(
                          "view",
                          { key: file.id, style: _vm.imgCss(index) },
                          [
                            _c("u-image", {
                              style: _vm.previewImg,
                              attrs: { src: file.fileUrl, mode: "aspectFill" },
                              on: {
                                click: function ($event) {
                                  _vm.previewCommentImage(index)
                                },
                              },
                            }),
                            index === 2 && _vm.fileList.length > 3
                              ? _c("view", { style: _vm.moreTips }, [
                                  _c("view", { style: _vm.moreText }, [
                                    _c("u-text", [
                                      _vm._v(
                                        "+" + _vm._s(_vm.fileList.length - 3)
                                      ),
                                    ]),
                                  ]),
                                ])
                              : _vm._e(),
                          ],
                          1
                        )
                      }),
                      0
                    )
                  : _vm.mediaFlag === 2
                  ? _c(
                      "view",
                      { style: _vm.displayVideoBlock },
                      [
                        _c("u-video", {
                          style: _vm.videoElement,
                          attrs: {
                            src: _vm.fileList[0].fileUrl,
                            poster: _vm.fileList[0].coverUrl,
                          },
                        }),
                      ],
                      1
                    )
                  : _vm._e(),
              ])
            : _vm._e(),
          _c("view", { style: _vm.inputStatusBlock }, [
            _c("view", { style: _vm.inputSty, on: { click: _vm.openInput } }, [
              _c(
                "u-text",
                {
                  style: _vm.fontSty,
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [
                  _vm._v(
                    _vm._s(_vm.remark.length > 0 ? _vm.remark : _vm.placeholder)
                  ),
                ]
              ),
            ]),
            _c(
              "view",
              { style: _vm.statusSty },
              [
                _vm.remark.trim().length === 0 && _vm.fileList.length === 0
                  ? _c("u-image", {
                      style: _vm.imgSty,
                      attrs: { src: "/static/send.png" },
                    })
                  : _c("u-image", {
                      style: _vm.imgSty,
                      attrs: { src: "/static/sendable.png" },
                      on: { click: _vm.childComment },
                    }),
              ],
              1
            ),
          ]),
        ]
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 37 */
/*!****************************************************************************************!*\
  !*** D:/毕设项目/baf-client/baf/node_modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_icons_vue_vue_type_template_id_857088fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-icons.vue?vue&type=template&id=857088fc& */ 38);
/* harmony import */ var _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-icons.vue?vue&type=script&lang=js& */ 40);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-icons.vue?vue&type=style&index=0&lang=scss& */ 44).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-icons.vue?vue&type=style&index=0&lang=scss& */ 44).default)
            }

}

/* normalize component */

var component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_icons_vue_vue_type_template_id_857088fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_icons_vue_vue_type_template_id_857088fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "7d46679b",
  false,
  _uni_icons_vue_vue_type_template_id_857088fc___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "node_modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 38 */
/*!***********************************************************************************************************************!*\
  !*** D:/毕设项目/baf-client/baf/node_modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue?vue&type=template&id=857088fc& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_857088fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=template&id=857088fc& */ 39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_857088fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_857088fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_857088fc___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_857088fc___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 39 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/毕设项目/baf-client/baf/node_modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue?vue&type=template&id=857088fc& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "u-text",
    {
      staticClass: ["uni-icons"],
      style: _vm.styleObj,
      appendAsTree: true,
      attrs: { append: "tree" },
      on: { click: _vm._onClick },
    },
    [_vm._v(_vm._s(_vm.unicode))]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 40 */
/*!*****************************************************************************************************************!*\
  !*** D:/毕设项目/baf-client/baf/node_modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=script&lang=js& */ 41);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 41 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/毕设项目/baf-client/baf/node_modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 11);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _uniicons_file_vue = __webpack_require__(/*! ./uniicons_file_vue.js */ 42);
var _uniicons = _interopRequireDefault(__webpack_require__(/*! ./uniicons.ttf */ 43));
//
//
//
//
//
//
//
//
//
//
//

var getVal = function getVal(val) {
  var reg = /^[0-9]*$/g;
  return typeof val === 'number' || reg.test(val) ? val + 'px' : val;
};
var domModule = weex.requireModule('dom');
domModule.addRule('fontFace', {
  'fontFamily': "uniicons",
  'src': "url('" + _uniicons.default + "')"
});

/**
 * Icons 图标
 * @description 用于展示 icons 图标
 * @tutorial https://ext.dcloud.net.cn/plugin?id=28
 * @property {Number} size 图标大小
 * @property {String} type 图标图案，参考示例
 * @property {String} color 图标颜色
 * @property {String} customPrefix 自定义图标
 * @event {Function} click 点击 Icon 触发事件
 */
var _default = {
  name: 'UniIcons',
  emits: ['click'],
  props: {
    type: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#333333'
    },
    size: {
      type: [Number, String],
      default: 16
    },
    customPrefix: {
      type: String,
      default: ''
    },
    fontFamily: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      icons: _uniicons_file_vue.fontData
    };
  },
  computed: {
    unicode: function unicode() {
      var _this = this;
      var code = this.icons.find(function (v) {
        return v.font_class === _this.type;
      });
      if (code) {
        return code.unicode;
      }
      return '';
    },
    iconSize: function iconSize() {
      return getVal(this.size);
    },
    styleObj: function styleObj() {
      if (this.fontFamily !== '') {
        return "color: ".concat(this.color, "; font-size: ").concat(this.iconSize, "; font-family: ").concat(this.fontFamily, ";");
      }
      return "color: ".concat(this.color, "; font-size: ").concat(this.iconSize, ";");
    }
  },
  methods: {
    _onClick: function _onClick(e) {
      this.$emit('click', e);
    }
  }
};
exports.default = _default;

/***/ }),
/* 42 */
/*!***********************************************************************************************!*\
  !*** D:/毕设项目/baf-client/baf/node_modules/@dcloudio/uni-ui/lib/uni-icons/uniicons_file_vue.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontData = void 0;
var fontData = [{
  "font_class": "arrow-down",
  "unicode": "\uE6BE"
}, {
  "font_class": "arrow-left",
  "unicode": "\uE6BC"
}, {
  "font_class": "arrow-right",
  "unicode": "\uE6BB"
}, {
  "font_class": "arrow-up",
  "unicode": "\uE6BD"
}, {
  "font_class": "auth",
  "unicode": "\uE6AB"
}, {
  "font_class": "auth-filled",
  "unicode": "\uE6CC"
}, {
  "font_class": "back",
  "unicode": "\uE6B9"
}, {
  "font_class": "bars",
  "unicode": "\uE627"
}, {
  "font_class": "calendar",
  "unicode": "\uE6A0"
}, {
  "font_class": "calendar-filled",
  "unicode": "\uE6C0"
}, {
  "font_class": "camera",
  "unicode": "\uE65A"
}, {
  "font_class": "camera-filled",
  "unicode": "\uE658"
}, {
  "font_class": "cart",
  "unicode": "\uE631"
}, {
  "font_class": "cart-filled",
  "unicode": "\uE6D0"
}, {
  "font_class": "chat",
  "unicode": "\uE65D"
}, {
  "font_class": "chat-filled",
  "unicode": "\uE659"
}, {
  "font_class": "chatboxes",
  "unicode": "\uE696"
}, {
  "font_class": "chatboxes-filled",
  "unicode": "\uE692"
}, {
  "font_class": "chatbubble",
  "unicode": "\uE697"
}, {
  "font_class": "chatbubble-filled",
  "unicode": "\uE694"
}, {
  "font_class": "checkbox",
  "unicode": "\uE62B"
}, {
  "font_class": "checkbox-filled",
  "unicode": "\uE62C"
}, {
  "font_class": "checkmarkempty",
  "unicode": "\uE65C"
}, {
  "font_class": "circle",
  "unicode": "\uE65B"
}, {
  "font_class": "circle-filled",
  "unicode": "\uE65E"
}, {
  "font_class": "clear",
  "unicode": "\uE66D"
}, {
  "font_class": "close",
  "unicode": "\uE673"
}, {
  "font_class": "closeempty",
  "unicode": "\uE66C"
}, {
  "font_class": "cloud-download",
  "unicode": "\uE647"
}, {
  "font_class": "cloud-download-filled",
  "unicode": "\uE646"
}, {
  "font_class": "cloud-upload",
  "unicode": "\uE645"
}, {
  "font_class": "cloud-upload-filled",
  "unicode": "\uE648"
}, {
  "font_class": "color",
  "unicode": "\uE6CF"
}, {
  "font_class": "color-filled",
  "unicode": "\uE6C9"
}, {
  "font_class": "compose",
  "unicode": "\uE67F"
}, {
  "font_class": "contact",
  "unicode": "\uE693"
}, {
  "font_class": "contact-filled",
  "unicode": "\uE695"
}, {
  "font_class": "down",
  "unicode": "\uE6B8"
}, {
  "font_class": "bottom",
  "unicode": "\uE6B8"
}, {
  "font_class": "download",
  "unicode": "\uE68D"
}, {
  "font_class": "download-filled",
  "unicode": "\uE681"
}, {
  "font_class": "email",
  "unicode": "\uE69E"
}, {
  "font_class": "email-filled",
  "unicode": "\uE69A"
}, {
  "font_class": "eye",
  "unicode": "\uE651"
}, {
  "font_class": "eye-filled",
  "unicode": "\uE66A"
}, {
  "font_class": "eye-slash",
  "unicode": "\uE6B3"
}, {
  "font_class": "eye-slash-filled",
  "unicode": "\uE6B4"
}, {
  "font_class": "fire",
  "unicode": "\uE6A1"
}, {
  "font_class": "fire-filled",
  "unicode": "\uE6C5"
}, {
  "font_class": "flag",
  "unicode": "\uE65F"
}, {
  "font_class": "flag-filled",
  "unicode": "\uE660"
}, {
  "font_class": "folder-add",
  "unicode": "\uE6A9"
}, {
  "font_class": "folder-add-filled",
  "unicode": "\uE6C8"
}, {
  "font_class": "font",
  "unicode": "\uE6A3"
}, {
  "font_class": "forward",
  "unicode": "\uE6BA"
}, {
  "font_class": "gear",
  "unicode": "\uE664"
}, {
  "font_class": "gear-filled",
  "unicode": "\uE661"
}, {
  "font_class": "gift",
  "unicode": "\uE6A4"
}, {
  "font_class": "gift-filled",
  "unicode": "\uE6C4"
}, {
  "font_class": "hand-down",
  "unicode": "\uE63D"
}, {
  "font_class": "hand-down-filled",
  "unicode": "\uE63C"
}, {
  "font_class": "hand-up",
  "unicode": "\uE63F"
}, {
  "font_class": "hand-up-filled",
  "unicode": "\uE63E"
}, {
  "font_class": "headphones",
  "unicode": "\uE630"
}, {
  "font_class": "heart",
  "unicode": "\uE639"
}, {
  "font_class": "heart-filled",
  "unicode": "\uE641"
}, {
  "font_class": "help",
  "unicode": "\uE679"
}, {
  "font_class": "help-filled",
  "unicode": "\uE674"
}, {
  "font_class": "home",
  "unicode": "\uE662"
}, {
  "font_class": "home-filled",
  "unicode": "\uE663"
}, {
  "font_class": "image",
  "unicode": "\uE670"
}, {
  "font_class": "image-filled",
  "unicode": "\uE678"
}, {
  "font_class": "images",
  "unicode": "\uE650"
}, {
  "font_class": "images-filled",
  "unicode": "\uE64B"
}, {
  "font_class": "info",
  "unicode": "\uE669"
}, {
  "font_class": "info-filled",
  "unicode": "\uE649"
}, {
  "font_class": "left",
  "unicode": "\uE6B7"
}, {
  "font_class": "link",
  "unicode": "\uE6A5"
}, {
  "font_class": "list",
  "unicode": "\uE644"
}, {
  "font_class": "location",
  "unicode": "\uE6AE"
}, {
  "font_class": "location-filled",
  "unicode": "\uE6AF"
}, {
  "font_class": "locked",
  "unicode": "\uE66B"
}, {
  "font_class": "locked-filled",
  "unicode": "\uE668"
}, {
  "font_class": "loop",
  "unicode": "\uE633"
}, {
  "font_class": "mail-open",
  "unicode": "\uE643"
}, {
  "font_class": "mail-open-filled",
  "unicode": "\uE63A"
}, {
  "font_class": "map",
  "unicode": "\uE667"
}, {
  "font_class": "map-filled",
  "unicode": "\uE666"
}, {
  "font_class": "map-pin",
  "unicode": "\uE6AD"
}, {
  "font_class": "map-pin-ellipse",
  "unicode": "\uE6AC"
}, {
  "font_class": "medal",
  "unicode": "\uE6A2"
}, {
  "font_class": "medal-filled",
  "unicode": "\uE6C3"
}, {
  "font_class": "mic",
  "unicode": "\uE671"
}, {
  "font_class": "mic-filled",
  "unicode": "\uE677"
}, {
  "font_class": "micoff",
  "unicode": "\uE67E"
}, {
  "font_class": "micoff-filled",
  "unicode": "\uE6B0"
}, {
  "font_class": "minus",
  "unicode": "\uE66F"
}, {
  "font_class": "minus-filled",
  "unicode": "\uE67D"
}, {
  "font_class": "more",
  "unicode": "\uE64D"
}, {
  "font_class": "more-filled",
  "unicode": "\uE64E"
}, {
  "font_class": "navigate",
  "unicode": "\uE66E"
}, {
  "font_class": "navigate-filled",
  "unicode": "\uE67A"
}, {
  "font_class": "notification",
  "unicode": "\uE6A6"
}, {
  "font_class": "notification-filled",
  "unicode": "\uE6C1"
}, {
  "font_class": "paperclip",
  "unicode": "\uE652"
}, {
  "font_class": "paperplane",
  "unicode": "\uE672"
}, {
  "font_class": "paperplane-filled",
  "unicode": "\uE675"
}, {
  "font_class": "person",
  "unicode": "\uE699"
}, {
  "font_class": "person-filled",
  "unicode": "\uE69D"
}, {
  "font_class": "personadd",
  "unicode": "\uE69F"
}, {
  "font_class": "personadd-filled",
  "unicode": "\uE698"
}, {
  "font_class": "personadd-filled-copy",
  "unicode": "\uE6D1"
}, {
  "font_class": "phone",
  "unicode": "\uE69C"
}, {
  "font_class": "phone-filled",
  "unicode": "\uE69B"
}, {
  "font_class": "plus",
  "unicode": "\uE676"
}, {
  "font_class": "plus-filled",
  "unicode": "\uE6C7"
}, {
  "font_class": "plusempty",
  "unicode": "\uE67B"
}, {
  "font_class": "pulldown",
  "unicode": "\uE632"
}, {
  "font_class": "pyq",
  "unicode": "\uE682"
}, {
  "font_class": "qq",
  "unicode": "\uE680"
}, {
  "font_class": "redo",
  "unicode": "\uE64A"
}, {
  "font_class": "redo-filled",
  "unicode": "\uE655"
}, {
  "font_class": "refresh",
  "unicode": "\uE657"
}, {
  "font_class": "refresh-filled",
  "unicode": "\uE656"
}, {
  "font_class": "refreshempty",
  "unicode": "\uE6BF"
}, {
  "font_class": "reload",
  "unicode": "\uE6B2"
}, {
  "font_class": "right",
  "unicode": "\uE6B5"
}, {
  "font_class": "scan",
  "unicode": "\uE62A"
}, {
  "font_class": "search",
  "unicode": "\uE654"
}, {
  "font_class": "settings",
  "unicode": "\uE653"
}, {
  "font_class": "settings-filled",
  "unicode": "\uE6CE"
}, {
  "font_class": "shop",
  "unicode": "\uE62F"
}, {
  "font_class": "shop-filled",
  "unicode": "\uE6CD"
}, {
  "font_class": "smallcircle",
  "unicode": "\uE67C"
}, {
  "font_class": "smallcircle-filled",
  "unicode": "\uE665"
}, {
  "font_class": "sound",
  "unicode": "\uE684"
}, {
  "font_class": "sound-filled",
  "unicode": "\uE686"
}, {
  "font_class": "spinner-cycle",
  "unicode": "\uE68A"
}, {
  "font_class": "staff",
  "unicode": "\uE6A7"
}, {
  "font_class": "staff-filled",
  "unicode": "\uE6CB"
}, {
  "font_class": "star",
  "unicode": "\uE688"
}, {
  "font_class": "star-filled",
  "unicode": "\uE68F"
}, {
  "font_class": "starhalf",
  "unicode": "\uE683"
}, {
  "font_class": "trash",
  "unicode": "\uE687"
}, {
  "font_class": "trash-filled",
  "unicode": "\uE685"
}, {
  "font_class": "tune",
  "unicode": "\uE6AA"
}, {
  "font_class": "tune-filled",
  "unicode": "\uE6CA"
}, {
  "font_class": "undo",
  "unicode": "\uE64F"
}, {
  "font_class": "undo-filled",
  "unicode": "\uE64C"
}, {
  "font_class": "up",
  "unicode": "\uE6B6"
}, {
  "font_class": "top",
  "unicode": "\uE6B6"
}, {
  "font_class": "upload",
  "unicode": "\uE690"
}, {
  "font_class": "upload-filled",
  "unicode": "\uE68E"
}, {
  "font_class": "videocam",
  "unicode": "\uE68C"
}, {
  "font_class": "videocam-filled",
  "unicode": "\uE689"
}, {
  "font_class": "vip",
  "unicode": "\uE6A8"
}, {
  "font_class": "vip-filled",
  "unicode": "\uE6C6"
}, {
  "font_class": "wallet",
  "unicode": "\uE6B1"
}, {
  "font_class": "wallet-filled",
  "unicode": "\uE6C2"
}, {
  "font_class": "weibo",
  "unicode": "\uE68B"
}, {
  "font_class": "weixin",
  "unicode": "\uE691"
}];

// export const fontData = JSON.parse<IconsDataItem>(fontDataJson)
exports.fontData = fontData;

/***/ }),
/* 43 */
/*!***************************************************************************************!*\
  !*** D:/毕设项目/baf-client/baf/node_modules/@dcloudio/uni-ui/lib/uni-icons/uniicons.ttf ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/uniicons.2579c7da.ttf";

/***/ }),
/* 44 */
/*!**************************************************************************************************************************!*\
  !*** D:/毕设项目/baf-client/baf/node_modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=style&index=0&lang=scss& */ 45);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 45 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/毕设项目/baf-client/baf/node_modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-icons": {
    "": {
      "fontFamily": [
        "uniicons",
        0,
        0,
        16
      ],
      "textDecoration": [
        "none",
        0,
        0,
        16
      ],
      "textAlign": [
        "center",
        0,
        0,
        16
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 46 */
/*!**************************************************************************************************************!*\
  !*** D:/毕设项目/baf-client/baf/pages/postDetails/subNvue/commentPopup.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_commentPopup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./commentPopup.nvue?vue&type=script&lang=js&mpType=page */ 47);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_commentPopup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_commentPopup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_commentPopup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_commentPopup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_commentPopup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNiLENBQWdCLGtlQUFHLEVBQUMiLCJmaWxlIjoiNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29tbWVudFBvcHVwLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbW1lbnRQb3B1cC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///46\n");

/***/ }),
/* 47 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/毕设项目/baf-client/baf/pages/postDetails/subNvue/commentPopup.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 11);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 12));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 21));\nvar _device = __webpack_require__(/*! @/utils/device/device.js */ 48);\nvar _blog = __webpack_require__(/*! @/utils/blog/blog.js */ 49);\nvar _index = _interopRequireDefault(__webpack_require__(/*! @/store/localStore/index.js */ 27));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = {\n  created: function created() {\n    this.device = (0, _device.getDeviceInfo)();\n    uni.$on('openChildComment', this.handleOpenChildComment);\n    uni.$on('resetChildComment', this.handleResetChildComment);\n\n    // 只注册一次\n    uni.$on('changeInputVal', this.handleChangeInputVal);\n    uni.$on('comment', this.handleNewComment);\n  },\n  beforeDestroy: function beforeDestroy() {\n    this.unbindEvents();\n  },\n  destroyed: function destroyed() {\n    this.unbindEvents();\n  },\n  onReady: function onReady() {\n    var _this = this;\n    // 页面准备好后再获取\n    setTimeout(function () {\n      _this.inputPopup = uni.getSubNVueById('input_popup');\n      _this.inputPopup.setStyle({\n        \"height\": \"60%\"\n      });\n    }, 300);\n  },\n  computed: {\n    displayedImages: function displayedImages() {\n      return this.fileList.slice(0, 3);\n    },\n    childCommentContainer: function childCommentContainer() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.windowWidth + 'px',\n        height: device.windowHeight * 0.95 + 'px',\n        backgroundColor: 'white',\n        position: 'relative'\n      };\n    },\n    controlBlock: function controlBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        height: device.rpxToPx(100) + 'px',\n        width: device.rpxToPx(100) + 'px',\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'center'\n      };\n    },\n    commentBlock: function commentBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        display: 'flex',\n        flexDirection: 'row',\n        width: device.percentToPx(100) + 'px',\n        padding: device.rpxToPx(20) + 'px',\n        border: 'solid ' + device.rpxToPx(1) + 'px' + ' #eee'\n      };\n    },\n    scrollView: function scrollView() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        height: device.rpxToPx(1350) + 'px'\n      };\n    },\n    avatarBlock: function avatarBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(100) + 'px'\n      };\n    },\n    avatarBorderBlock: function avatarBorderBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(100) + 'px',\n        height: device.rpxToPx(100) + 'px',\n        overflow: 'hidden'\n      };\n    },\n    imageBlock: function imageBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(100) + 'px',\n        height: device.rpxToPx(100) + 'px',\n        radius: device.rpxToPx(100) / 2 + 'px',\n        overflow: 'hidden',\n        justifyContent: 'center',\n        alignItems: 'center',\n        borderRadius: device.rpxToPx(100) / 2 + 'px'\n      };\n    },\n    userMessageBlock: function userMessageBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        flex: '1',\n        padding: device.rpxToPx(0) + ' ' + device.rpxToPx(20) + 'px'\n      };\n    },\n    userNameIsLikedBlock: function userNameIsLikedBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        height: device.rpxToPx(100) + 'px',\n        width: device.rpxToPx(580) + 'px',\n        display: 'flex',\n        flexDirection: 'row'\n      };\n    },\n    userNameIsPosterTimeAddrBlock: function userNameIsPosterTimeAddrBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(406) + 'px',\n        height: device.rpxToPx(100) + 'px'\n      };\n    },\n    userNameIsPosterBlock: function userNameIsPosterBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(406) + 'px',\n        height: device.rpxToPx(50) + 'px',\n        display: 'flex',\n        flexDirection: 'row',\n        marginTop: device.rpxToPx(20) + 'px'\n      };\n    },\n    userNameBlock: function userNameBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        maxWidth: device.rpxToPx(284) + 'px',\n        height: device.rpxToPx(50) + 'px',\n        lineHeight: device.rpxToPx(50) + 'px',\n        overflow: 'hidden',\n        textOverflow: 'ellipsis',\n        whiteSpace: 'nowrap'\n      };\n    },\n    isPosterBlock: function isPosterBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(81) + 'px',\n        height: device.rpxToPx(40) + 'px',\n        display: 'flex',\n        alignItems: 'center',\n        // 垂直居中\n        justifyContent: 'center',\n        marginLeft: device.rpxToPx(5) + 'px'\n      };\n    },\n    userNameTextBlock: function userNameTextBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        fontSize: device.rpxToPx(28) + 'px',\n        color: '#7e7e7e'\n      };\n    },\n    isPosterImgBlock: function isPosterImgBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(41) + 'px',\n        height: device.rpxToPx(50) + 'px'\n      };\n    },\n    timeAddrBlock: function timeAddrBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(406) + 'px',\n        height: device.rpxToPx(50) + 'px',\n        display: 'flex',\n        flexDirection: 'row'\n      };\n    },\n    timeAndAddrBlock: function timeAndAddrBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        height: device.rpxToPx(50) + 'px',\n        lineHeight: device.rpxToPx(50) + 'px',\n        maxWidth: device.rpxToPx(203) + 'px'\n      };\n    },\n    timeAddrTextBlock: function timeAddrTextBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        fontSize: device.rpxToPx(22) + 'px'\n      };\n    },\n    isLikedBlock: function isLikedBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(174) + 'px',\n        height: device.rpxToPx(100) + 'px',\n        display: 'flex',\n        justifyContent: 'center',\n        flexDirection: 'row'\n      };\n    },\n    isLikedImgBlock: function isLikedImgBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(35) + 'px',\n        height: device.rpxToPx(30) + 'px',\n        marginTop: device.rpxToPx(20) + 'px'\n      };\n    },\n    isLikedCountBlock: function isLikedCountBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        marginTop: device.rpxToPx(15) + 'px',\n        marginLeft: device.rpxToPx(12) + 'px',\n        paddingTop: device.rpxToPx(10) + 'px'\n      };\n    },\n    countBlock: function countBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        fontSize: device.rpxToPx(25) + 'px'\n      };\n    },\n    contentMediaBlock: function contentMediaBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(570) + 'px'\n      };\n    },\n    contentBlock: function contentBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(570) + 'px',\n        paddingBottom: device.rpxToPx(20) + 'px',\n        paddingTop: device.rpxToPx(20) + 'px',\n        paddingRight: device.rpxToPx(20) + 'px'\n      };\n    },\n    contentFont: function contentFont() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        fontSize: device.rpxToPx(30) + 'px'\n      };\n    },\n    mediaBlock: function mediaBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(580) + 'px',\n        display: 'flex',\n        flexDirection: 'row',\n        flexWrap: 'wrap'\n      };\n    },\n    contentImageBlock: function contentImageBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(180) + 'px',\n        height: device.rpxToPx(180) + 'px',\n        marginRight: device.rpxToPx(10) + 'px',\n        marginBottom: device.rpxToPx(10) + 'px'\n      };\n    },\n    image: function image() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(180) + 'px',\n        height: device.rpxToPx(180) + 'px'\n      };\n    },\n    cuttingLine: function cuttingLine() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.percentToPx(100) + 'px',\n        height: device.rpxToPx(10) + 'px',\n        backgroundColor: '#e9e9e9'\n      };\n    },\n    inputBlock: function inputBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(750) + 'px',\n        height: device.rpxToPx(100) + 'px',\n        display: 'flex',\n        backgroundColor: 'white',\n        position: 'absolute',\n        left: device.rpxToPx(0) + 'px',\n        bottom: device.rpxToPx(0) + 'px'\n      };\n    },\n    inputDisplayBlock: function inputDisplayBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(750) + 'px',\n        height: device.rpxToPx(350) + 'px',\n        display: 'flex',\n        position: 'absolute',\n        left: device.rpxToPx(0) + 'px',\n        bottom: device.rpxToPx(0) + 'px',\n        backgroundColor: 'white'\n      };\n    },\n    imgVideoDisplay: function imgVideoDisplay() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(750) + 'px',\n        height: device.rpxToPx(250) + 'px',\n        display: 'flex',\n        flexDirection: 'row'\n      };\n    },\n    displayImgBlock: function displayImgBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(750) + 'px',\n        height: device.rpxToPx(250) + 'px',\n        display: 'flex',\n        flexDirection: 'row'\n      };\n    },\n    imgCss: function imgCss(index) {\n      var device = this.device;\n      if (!device) return {};\n      var baseStyle = {\n        height: device.rpxToPx(250) + 'px',\n        width: device.rpxToPx(250) + 'px',\n        paddingLeft: device.rpxToPx(20) + 'px',\n        position: 'relative'\n      };\n      if (index === 2 && this.fileList.length > 3) {\n        return _objectSpread(_objectSpread({}, baseStyle), {}, {\n          position: 'relative'\n        });\n      }\n      return baseStyle;\n    },\n    previewImg: function previewImg() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        height: device.rpxToPx(250) + 'px',\n        width: device.rpxToPx(250) + 'px',\n        position: 'absolute'\n      };\n    },\n    moreTips: function moreTips() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        position: 'absolute',\n        bottom: device.rpxToPx(10) + 'px',\n        right: device.rpxToPx(10) + 'px',\n        width: device.rpxToPx(50) + 'px',\n        height: device.rpxToPx(50) + 'px',\n        opacity: '0.1'\n      };\n    },\n    moreText: function moreText() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        fontSize: device.rpxToPx(36) + 'px',\n        fontWeight: 'blod',\n        color: 'white'\n      };\n    },\n    inputStatusBlock: function inputStatusBlock() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(750) + 'px',\n        height: device.rpxToPx(100) + 'px',\n        display: 'flex',\n        flexDirection: 'row',\n        paddingTop: device.rpxToPx(20) + 'px',\n        paddingLeft: device.rpxToPx(20) + 'px'\n      };\n    },\n    inputSty: function inputSty() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(600) + 'px',\n        height: device.rpxToPx(80) + 'px',\n        paddingTop: device.rpxToPx(20) + 'px',\n        paddingRight: device.rpxToPx(10) + 'px',\n        paddingBottom: device.rpxToPx(12) + 'px',\n        paddingLeft: device.rpxToPx(10) + 'px',\n        backgroundColor: '#e9e9e9'\n      };\n    },\n    fontSty: function fontSty() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        fontSize: device.rpxToPx(30) + 'px',\n        color: '#bcbcbc'\n      };\n    },\n    statusSty: function statusSty() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(100) + 'px',\n        height: device.rpxToPx(80) + 'px',\n        marginLeft: device.rpxToPx(10) + 'px',\n        display: 'flex',\n        flexDirection: 'row'\n      };\n    },\n    imgSty: function imgSty() {\n      var device = this.device;\n      if (!device) return {};\n      return {\n        width: device.rpxToPx(80) + 'px',\n        height: device.rpxToPx(80) + 'px'\n      };\n    }\n  },\n  methods: {\n    init: function init(data) {\n      this.reset();\n      this.parentComment = data.parentComment || {};\n      this.postId = data.postId;\n      this.current = 1;\n      this.size = 5;\n      this.pages = 0;\n      this.flag = true;\n      this.getChildCommentList();\n      this.initImg();\n    },\n    unbindEvents: function unbindEvents() {\n      uni.$off('openChildComment', this.handleOpenChildComment);\n      uni.$off('resetChildComment', this.handleResetChildComment);\n      uni.$off('changeInputVal', this.handleChangeInputVal);\n      uni.$off('comment', this.handleNewComment);\n    },\n    handleOpenChildComment: function handleOpenChildComment(data) {\n      this.init(data);\n    },\n    handleResetChildComment: function handleResetChildComment() {\n      this.reset();\n    },\n    handleChangeInputVal: function handleChangeInputVal(data) {\n      if (!data) return;\n      this.fileList = Array.isArray(data.fileList) ? (0, _toConsumableArray2.default)(data.fileList) : [];\n      this.remark = data.remark || '';\n      this.mediaFlag = data.mediaFlag || 0;\n      this.$forceUpdate();\n    },\n    handleNewComment: function handleNewComment(comment) {\n      this.addChildCommentOnce(comment, 'unshift');\n      this.$forceUpdate();\n    },\n    getCommentKey: function getCommentKey(comment) {\n      if (!comment) return '';\n      if (comment.id !== null && comment.id !== undefined) {\n        return String(comment.id);\n      }\n      var userId = comment.userVo && comment.userVo.id ? comment.userVo.id : '';\n      return [comment.postId || this.postId || '', comment.parentId || this.parentComment.id || '', userId, comment.publicTime || '', comment.comment || '', comment.fileName || ''].join('_');\n    },\n    hasRenderedComment: function hasRenderedComment(comment) {\n      var key = this.getCommentKey(comment);\n      if (!key) return true;\n      return this.renderedCommentKeyList.includes(key);\n    },\n    markRenderedComment: function markRenderedComment(comment) {\n      var key = this.getCommentKey(comment);\n      if (!key) return;\n      if (!this.renderedCommentKeyList.includes(key)) {\n        this.renderedCommentKeyList.push(key);\n      }\n    },\n    addNewCommentId: function addNewCommentId(comment) {\n      if (!comment || comment.id === null || comment.id === undefined) return;\n      var id = String(comment.id);\n      if (!this.newCommentIdList.includes(id)) {\n        this.newCommentIdList.push(id);\n      }\n    },\n    getCommentUniqueKey: function getCommentUniqueKey(comment) {\n      if (!comment) return null;\n\n      // 优先使用数据库 id\n      if (comment.id !== null && comment.id !== undefined) {\n        return 'id_' + comment.id;\n      }\n\n      // 如果有前端临时 id，也可以兜底\n      if (comment.clientId) {\n        return 'client_' + comment.clientId;\n      }\n      return null;\n    },\n    addChildCommentOnce: function addChildCommentOnce(comment) {\n      var _this2 = this;\n      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'push';\n      if (!comment) return false;\n      var key = this.getCommentUniqueKey(comment);\n      if (!key) {\n        return false;\n      }\n\n      // 第一层：检查 key 列表\n      if (this.renderedCommentKeyList.includes(key)) {\n        return false;\n      }\n\n      // 第二层：直接检查 childCommentList，防止 renderedCommentKeyList 状态丢失\n      var exists = this.childCommentList.some(function (item) {\n        return _this2.getCommentUniqueKey(item) === key;\n      });\n      if (exists) {\n        this.renderedCommentKeyList.push(key);\n        return false;\n      }\n      this.renderedCommentKeyList.push(key);\n      if (position === 'unshift') {\n        this.childCommentList.unshift(comment);\n      } else {\n        this.childCommentList.push(comment);\n      }\n      return true;\n    },\n    addChildCommentListOnce: function addChildCommentListOnce(list) {\n      var _this3 = this;\n      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'push';\n      if (!Array.isArray(list) || list.length === 0) return;\n      list.forEach(function (comment) {\n        _this3.addChildCommentOnce(comment, position);\n      });\n    },\n    rebuildRenderedCommentKeys: function rebuildRenderedCommentKeys() {\n      var _this4 = this;\n      this.renderedCommentKeyList = [];\n      if (!Array.isArray(this.childCommentList)) return;\n      this.childCommentList.forEach(function (comment) {\n        _this4.markRenderedComment(comment);\n      });\n    },\n    imgCss: function imgCss(index) {\n      var device = this.device;\n      if (!device) return {};\n      var baseStyle = {\n        height: device.rpxToPx(250) + 'px',\n        width: device.rpxToPx(250) + 'px',\n        paddingLeft: device.rpxToPx(20) + 'px',\n        position: 'relative'\n      };\n      if (index === 2 && this.fileList.length > 3) {\n        return _objectSpread(_objectSpread({}, baseStyle), {}, {\n          position: 'relative'\n        });\n      }\n      return baseStyle;\n    },\n    getChildCommentList: function getChildCommentList() {\n      var _this5 = this;\n      if (!this.flag) {\n        return;\n      }\n      var params = {\n        current: this.current,\n        size: this.size,\n        type: 1,\n        parentId: this.parentComment.id,\n        postId: this.postId\n      };\n      (0, _blog.gainPostComment)(params, {}).then(function (res) {\n        var list = Array.isArray(res.commentList) ? res.commentList : [];\n        _this5.addChildCommentListOnce(list, 'push');\n        _this5.current = res.current + 1;\n        _this5.pages = res.pages;\n        if (_this5.current > _this5.pages) {\n          _this5.flag = false;\n        }\n        _this5.$forceUpdate();\n      });\n      this.initImg();\n    },\n    initImg: function initImg() {\n      if (this.parentComment.fileType !== null && this.parentComment.fileType === 'image') {\n        this.processImageUrls(this.parentComment.fileName);\n      }\n    },\n    closeChildCommentblock: function closeChildCommentblock() {\n      uni.$emit('closeChildCommentBlock');\n    },\n    formatTimeAgo: function formatTimeAgo(timeStr) {\n      if (!timeStr) return '';\n      var date = new Date(timeStr);\n      var now = new Date();\n      var diffInSeconds = Math.floor((now - date) / 1000);\n      var diffInMinutes = Math.floor(diffInSeconds / 60);\n      var diffInHours = Math.floor(diffInMinutes / 60);\n      var diffInDays = Math.floor(diffInHours / 24);\n\n      // 一分钟内\n      if (diffInSeconds < 60) {\n        return \"\\u521A\\u521A\";\n      }\n\n      // 一小时内\n      if (diffInMinutes < 60) {\n        return \"\".concat(diffInMinutes, \"\\u5206\\u949F\\u524D\");\n      }\n\n      // 一天内\n      if (diffInHours < 24) {\n        return \"\".concat(diffInHours, \"\\u5C0F\\u65F6\\u524D\");\n      }\n      var currentYear = now.getFullYear();\n      var targetYear = date.getFullYear();\n      var month = date.getMonth() + 1;\n      var day = date.getDate();\n\n      // 一年内\n      if (currentYear === targetYear) {\n        if (month < 10) {\n          return \"\".concat(month, \"-\").concat(day.toString().padStart(2, '0'));\n        } else {\n          return \"\".concat(month.toString().padStart(2, '0'), \"-\").concat(day.toString().padStart(2, '0'));\n        }\n        return \"\".concat(month, \"-\").concat(day);\n      }\n\n      // 一年后\n      var year = date.getFullYear();\n      return \"\".concat(year, \"-\").concat(month.toString().padStart(2, '0'), \"-\").concat(day.toString().padStart(2, '0'));\n    },\n    processImageUrls: function processImageUrls(urls) {\n      if (!urls || typeof urls !== 'string') {\n        this.imgList = [];\n        return;\n      }\n      var list = urls.split(',').map(function (url) {\n        return url.trim();\n      }).filter(function (url) {\n        return url && url !== '';\n      });\n      this.imgList = list;\n    },\n    processChildImageUrls: function processChildImageUrls(urls) {\n      if (!urls || typeof urls !== 'string') {\n        return [];\n      }\n      var list = urls.split(',').map(function (url) {\n        return url.trim();\n      }).filter(function (url) {\n        return url && url !== '';\n      });\n      return list;\n    },\n    previewImage: function previewImage(currentIndex) {\n      if (!this.imgList.length) {\n        return;\n      }\n      uni.previewImage({\n        current: currentIndex,\n        urls: this.imgList,\n        indicator: 'number',\n        loop: false\n      });\n    },\n    previewCommentImage: function previewCommentImage(currentIndex) {\n      var _this6 = this;\n      var urls = this.fileList.map(function (file) {\n        return file.fileUrl;\n      });\n      uni.previewImage({\n        current: currentIndex,\n        urls: urls,\n        indicator: 'number',\n        loop: false,\n        complete: function complete() {\n          // 使用箭头函数，继承外层 this\n          if (_this6.$refs.remarkInput) {\n            _this6.$refs.remarkInput.focus();\n          }\n        }\n      });\n    },\n    skipToUserDetail: function skipToUserDetail(id) {\n      uni.navigateTo({\n        url: \"/pages/userDetail/userDetail?id=\" + id\n      });\n    },\n    openInput: function openInput() {\n      uni.$emit('openInput', {\n        postId: this.postId,\n        parentId: this.parentComment.id,\n        fileList: this.fileList,\n        mediaFlag: this.mediaFlag,\n        remark: this.remark\n      });\n      if (this.inputPopup) {\n        this.inputPopup.show('slide-in-bottom', 600);\n      }\n    },\n    childComment: function childComment() {\n      var _this7 = this;\n      var content = this.remark ? this.remark.trim() : '';\n      var hasFile = Array.isArray(this.fileList) && this.fileList.length > 0;\n      if (!content && !hasFile) {\n        return;\n      }\n      var data = {\n        postId: this.postId,\n        parentId: this.parentComment.id,\n        comment: content,\n        fileType: this.mediaFlag === 0 ? null : this.mediaFlag === 1 ? 'image' : 'video',\n        fileName: this.mediaFlag === 0 ? null : this.mediaFlag === 1 ? this.mergeStr() : this.fileList[0] ? this.fileList[0].fileName : null,\n        cover: this.mediaFlag === 2 && this.fileList[0] ? this.fileList[0].cover : null\n      };\n      (0, _blog.comment)(data, {}).then(function (res) {\n        var added = _this7.addChildCommentOnce(res, 'unshift');\n        _this7.remark = '';\n        _this7.fileList = [];\n        _this7.mediaFlag = 0;\n        if (!added) {\n          return;\n        }\n        _this7.$forceUpdate();\n        _this7.$nextTick(function () {\n          _this7.$forceUpdate();\n          uni.pageScrollTo({\n            scrollTop: 0,\n            duration: 300\n          });\n        });\n      });\n    },\n    mergeStr: function mergeStr() {\n      var str = this.fileList.map(function (item) {\n        return item.fileName;\n      }).join(\",\");\n      return str;\n    },\n    reset: function reset() {\n      this.postId = null;\n      this.current = 1;\n      this.size = 5;\n      this.pages = 0;\n      this.flag = true;\n      this.parentComment = {};\n      this.childCommentList = [];\n      this.fileList = [];\n      this.mediaFlag = 0;\n      this.remark = '';\n\n      // 重要：重置已渲染 key\n      this.renderedCommentKeyList = [];\n    }\n  },\n  data: function data() {\n    return {\n      postId: null,\n      current: 1,\n      size: 5,\n      pages: 0,\n      flag: true,\n      parentComment: {},\n      childCommentList: [],\n      device: null,\n      styles: {},\n      imgList: [],\n      fileList: [],\n      mediaFlag: 0,\n      newCommentIdList: [],\n      renderedCommentKeyList: [],\n      remark: '',\n      placeholder: '说说看法吧',\n      inputPopup: null\n    };\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcG9zdERldGFpbHMvc3ViTnZ1ZS9jb21tZW50UG9wdXAubnZ1ZSJdLCJuYW1lcyI6WyJjcmVhdGVkIiwidW5pIiwiYmVmb3JlRGVzdHJveSIsImRlc3Ryb3llZCIsIm9uUmVhZHkiLCJzZXRUaW1lb3V0IiwiY29tcHV0ZWQiLCJkaXNwbGF5ZWRJbWFnZXMiLCJjaGlsZENvbW1lbnRDb250YWluZXIiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwiY29udHJvbEJsb2NrIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImNvbW1lbnRCbG9jayIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nIiwiYm9yZGVyIiwic2Nyb2xsVmlldyIsImF2YXRhckJsb2NrIiwiYXZhdGFyQm9yZGVyQmxvY2siLCJvdmVyZmxvdyIsImltYWdlQmxvY2siLCJyYWRpdXMiLCJib3JkZXJSYWRpdXMiLCJ1c2VyTWVzc2FnZUJsb2NrIiwiZmxleCIsInVzZXJOYW1lSXNMaWtlZEJsb2NrIiwidXNlck5hbWVJc1Bvc3RlclRpbWVBZGRyQmxvY2siLCJ1c2VyTmFtZUlzUG9zdGVyQmxvY2siLCJtYXJnaW5Ub3AiLCJ1c2VyTmFtZUJsb2NrIiwibWF4V2lkdGgiLCJsaW5lSGVpZ2h0IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsImlzUG9zdGVyQmxvY2siLCJtYXJnaW5MZWZ0IiwidXNlck5hbWVUZXh0QmxvY2siLCJmb250U2l6ZSIsImNvbG9yIiwiaXNQb3N0ZXJJbWdCbG9jayIsInRpbWVBZGRyQmxvY2siLCJ0aW1lQW5kQWRkckJsb2NrIiwidGltZUFkZHJUZXh0QmxvY2siLCJpc0xpa2VkQmxvY2siLCJpc0xpa2VkSW1nQmxvY2siLCJpc0xpa2VkQ291bnRCbG9jayIsInBhZGRpbmdUb3AiLCJjb3VudEJsb2NrIiwiY29udGVudE1lZGlhQmxvY2siLCJjb250ZW50QmxvY2siLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1JpZ2h0IiwiY29udGVudEZvbnQiLCJtZWRpYUJsb2NrIiwiZmxleFdyYXAiLCJjb250ZW50SW1hZ2VCbG9jayIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwiaW1hZ2UiLCJjdXR0aW5nTGluZSIsImlucHV0QmxvY2siLCJsZWZ0IiwiYm90dG9tIiwiaW5wdXREaXNwbGF5QmxvY2siLCJpbWdWaWRlb0Rpc3BsYXkiLCJkaXNwbGF5SW1nQmxvY2siLCJpbWdDc3MiLCJwYWRkaW5nTGVmdCIsImJhc2VTdHlsZSIsInByZXZpZXdJbWciLCJtb3JlVGlwcyIsInJpZ2h0Iiwib3BhY2l0eSIsIm1vcmVUZXh0IiwiZm9udFdlaWdodCIsImlucHV0U3RhdHVzQmxvY2siLCJpbnB1dFN0eSIsImZvbnRTdHkiLCJzdGF0dXNTdHkiLCJpbWdTdHkiLCJtZXRob2RzIiwiaW5pdCIsInVuYmluZEV2ZW50cyIsImhhbmRsZU9wZW5DaGlsZENvbW1lbnQiLCJoYW5kbGVSZXNldENoaWxkQ29tbWVudCIsImhhbmRsZUNoYW5nZUlucHV0VmFsIiwiaGFuZGxlTmV3Q29tbWVudCIsImdldENvbW1lbnRLZXkiLCJjb21tZW50IiwidXNlcklkIiwiaGFzUmVuZGVyZWRDb21tZW50IiwibWFya1JlbmRlcmVkQ29tbWVudCIsImFkZE5ld0NvbW1lbnRJZCIsImdldENvbW1lbnRVbmlxdWVLZXkiLCJhZGRDaGlsZENvbW1lbnRPbmNlIiwiYWRkQ2hpbGRDb21tZW50TGlzdE9uY2UiLCJsaXN0IiwicmVidWlsZFJlbmRlcmVkQ29tbWVudEtleXMiLCJnZXRDaGlsZENvbW1lbnRMaXN0IiwiY3VycmVudCIsInNpemUiLCJ0eXBlIiwicGFyZW50SWQiLCJwb3N0SWQiLCJpbml0SW1nIiwiY2xvc2VDaGlsZENvbW1lbnRibG9jayIsImZvcm1hdFRpbWVBZ28iLCJwcm9jZXNzSW1hZ2VVcmxzIiwibWFwIiwiZmlsdGVyIiwicHJvY2Vzc0NoaWxkSW1hZ2VVcmxzIiwicHJldmlld0ltYWdlIiwidXJscyIsImluZGljYXRvciIsImxvb3AiLCJwcmV2aWV3Q29tbWVudEltYWdlIiwiY29tcGxldGUiLCJza2lwVG9Vc2VyRGV0YWlsIiwidXJsIiwib3BlbklucHV0IiwiZmlsZUxpc3QiLCJtZWRpYUZsYWciLCJyZW1hcmsiLCJjaGlsZENvbW1lbnQiLCJmaWxlVHlwZSIsImZpbGVOYW1lIiwiY292ZXIiLCJzY3JvbGxUb3AiLCJkdXJhdGlvbiIsIm1lcmdlU3RyIiwicmVzZXQiLCJkYXRhIiwicGFnZXMiLCJmbGFnIiwicGFyZW50Q29tbWVudCIsImNoaWxkQ29tbWVudExpc3QiLCJkZXZpY2UiLCJzdHlsZXMiLCJpbWdMaXN0IiwibmV3Q29tbWVudElkTGlzdCIsInJlbmRlcmVkQ29tbWVudEtleUxpc3QiLCJwbGFjZWhvbGRlciIsImlucHV0UG9wdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQTZKQTtBQUdBO0FBR0E7QUFBQTtBQUFBO0FBQUEsZUFFQTtFQUNBQTtJQUNBO0lBRUFDO0lBQ0FBOztJQUVBO0lBQ0FBO0lBQ0FBO0VBQ0E7RUFFQUM7SUFDQTtFQUNBO0VBRUFDO0lBQ0E7RUFDQTtFQUdBQztJQUFBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO1FBQ0E7TUFFQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtRQUNBSDtRQUNBRDtRQUNBSztRQUNBQztRQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7UUFDQUg7UUFDQUk7UUFDQVQ7UUFDQVU7UUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO1FBQ0FYO01BQ0E7SUFDQTtJQUNBWTtNQUNBO01BQ0E7TUFDQTtRQUNBYjtNQUVBO0lBQ0E7SUFDQWM7TUFDQTtNQUNBO01BQ0E7UUFDQWQ7UUFDQUM7UUFDQWM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtN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QTtRQUNBO01BQ0E7TUFFQTtRQUNBcEI7UUFDQUQ7UUFDQWQ7UUFDQW9DO1FBQ0FDLGlDQUNBLE9BQ0EsdUJBQ0Esa0JBQ0EsbUJBQ0EsNEJBQ0E7UUFDQUMsa0RBQ0EseUJBQ0E7TUFDQTtNQUVBO1FBQ0E7UUFFQTtRQUNBO1FBQ0E7UUFFQTtVQUNBO1FBQ0E7UUFFQTtRQUVBO1VBQ0E7VUFFQWxJO1lBQ0FtSTtZQUNBQztVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7UUFBQTtNQUFBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BRUE7TUFDQTtNQUNBOztNQUVBO01BQ0E7SUFDQTtFQUVBO0VBRUFDO0lBQ0E7TUFDQTVCO01BQ0FKO01BQ0FDO01BQ0FnQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBbEI7TUFDQUM7TUFDQWtCO01BQ0FDO01BQ0FsQjtNQUNBbUI7TUFDQUM7SUFDQTtFQUNBO0FBRUE7QUFBQSIsImZpbGUiOiI0Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgOnN0eWxlPVwiY2hpbGRDb21tZW50Q29udGFpbmVyXCI+XG5cdFx0PCEtLSDmjqfliLblsYIgLS0+XG5cdFx0PHZpZXcgOnN0eWxlPVwiY29udHJvbEJsb2NrXCIgQGNsaWNrPVwiY2xvc2VDaGlsZENvbW1lbnRibG9jaygpXCI+XG5cdFx0XHQ8dW5pLWljb25zIHR5cGU9XCJjbG9zZWVtcHR5XCIgc2l6ZT1cIjI1XCI+PC91bmktaWNvbnM+XG5cdFx0PC92aWV3PlxuXHRcdDxzY3JvbGwtdmlldyA6c2Nyb2xsLXk9XCJ0cnVlXCIgOnN0eWxlPVwic2Nyb2xsVmlld1wiIGxvd2VyLXRocmVzaG9sZD1cIjUwXCIgQHNjcm9sbHRvbG93ZXI9XCJnZXRDaGlsZENvbW1lbnRMaXN0XCI+XG5cdFx0XHQ8IS0tIOeItuivhOiuuiAtLT5cblx0XHRcdDx2aWV3IDpzdHlsZT1cImNvbW1lbnRCbG9ja1wiPlxuXHRcdFx0XHQ8dmlldyB2LWlmPVwicGFyZW50Q29tbWVudCAhPT0gbnVsbCAmJiBwYXJlbnRDb21tZW50LnVzZXJWby5hdmF0YXIgIT09IG51bGwgJiYgcGFyZW50Q29tbWVudC51c2VyVm8uYXZhdGFyICE9PSB1bmRlZmluZWRcIiA6c3R5bGU9XCJhdmF0YXJCbG9ja1wiPlxuXHRcdFx0XHRcdDx2aWV3IDpzdHlsZT1cImF2YXRhckJvcmRlckJsb2NrXCIgQGNsaWNrPVwic2tpcFRvVXNlckRldGFpbChwYXJlbnRDb21tZW50LnVzZXJWby5pZClcIj5cblx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwicGFyZW50Q29tbWVudC51c2VyVm8uYXZhdGFyXCIgOnN0eWxlPVwiaW1hZ2VCbG9ja1wiIC8+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IDpzdHlsZT1cInVzZXJNZXNzYWdlQmxvY2tcIj5cblx0XHRcdFx0XHQ8dmlldyA6c3R5bGU9XCJ1c2VyTmFtZUlzTGlrZWRCbG9ja1wiPlxuXHRcdFx0XHRcdFx0PHZpZXcgOnN0eWxlPVwidXNlck5hbWVJc1Bvc3RlclRpbWVBZGRyQmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0PHZpZXcgOnN0eWxlPVwidXNlck5hbWVJc1Bvc3RlckJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgOnN0eWxlPVwidXNlck5hbWVCbG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgOnN0eWxlPVwidXNlck5hbWVUZXh0QmxvY2tcIj57e3BhcmVudENvbW1lbnQudXNlclZvLnVzZXJOYW1lfX08L3RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IDpzdHlsZT1cImlzUG9zdGVyQmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL3Bvc3Rlci5wbmdcIiA6c3R5bGU9XCJpc1Bvc3RlckltZ0Jsb2NrXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0PHZpZXcgOnN0eWxlPVwidGltZUFkZHJCbG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IDpzdHlsZT1cInRpbWVBbmRBZGRyQmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IDpzdHlsZT1cInRpbWVBZGRyVGV4dEJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt7Zm9ybWF0VGltZUFnbyhwYXJlbnRDb21tZW50LnB1YmxpY1RpbWUpfX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvdGV4dD5cblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgOnN0eWxlPVwidGltZUFuZEFkZHJCbG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgOnN0eWxlPVwidGltZUFkZHJUZXh0QmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0wrcge3twYXJlbnRDb21tZW50LnVzZXJWby5wcm92aW5jZX19XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyA6c3R5bGU9XCJpc0xpa2VkQmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJwYXJlbnRDb21tZW50LmlzTGlrZWRcIiBzcmM9XCIvc3RhdGljL2xpa2VkLnBuZ1wiIDpzdHlsZT1cImlzTGlrZWRJbWdCbG9ja1wiXG5cdFx0XHRcdFx0XHRcdFx0QGNsaWNrLnN0b3A9XCJ0YXBMaWtlZCgpXCIgLz5cblx0XHRcdFx0XHRcdFx0PGltYWdlIHYtZWxzZSBzcmM9XCIvc3RhdGljL2xpa2UucG5nXCIgQGNsaWNrLnN0b3A9XCJ0YXBMaWtlZCgpXCIgOnN0eWxlPVwiaXNMaWtlZEltZ0Jsb2NrXCIgLz5cblx0XHRcdFx0XHRcdFx0PHZpZXcgOnN0eWxlPVwiaXNMaWtlZENvdW50QmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCA6c3R5bGU9XCJjb3VudEJsb2NrXCI+e3twYXJlbnRDb21tZW50Lmxpa2VkQ291bnR9fTwvdGV4dD5cblx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyA6c3R5bGU9XCJjb250ZW50TWVkaWFCbG9ja1wiPlxuXHRcdFx0XHRcdFx0PHZpZXcgOnN0eWxlPVwiY29udGVudEJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IDpzdHlsZT1cImNvbnRlbnRGb250XCI+XG5cdFx0XHRcdFx0XHRcdFx0e3twYXJlbnRDb21tZW50LmNvbW1lbnR9fVxuXHRcdFx0XHRcdFx0XHQ8L3RleHQ+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlkZW8gdi1pZj1cInBhcmVudENvbW1lbnQuZmlsZVR5cGUgIT09IG51bGwgJiYgcGFyZW50Q29tbWVudC5maWxlVHlwZSA9PT0ndmlkZW8nXCJcblx0XHRcdFx0XHRcdFx0OnNyYz1cInBhcmVudENvbW1lbnQuZmlsZU5hbWVcIiA6cG9zdGVyPVwicGFyZW50Q29tbWVudC5jb3ZlclwiXG5cdFx0XHRcdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6ZGV2aWNlLnJweFRvUHgoMjgwKSArICdweCcsd2lkdGg6ZGV2aWNlLnJweFRvUHgoNTAwKSArICdweCd9XCIgLz5cblx0XHRcdFx0XHRcdDx2aWV3IHYtZWxzZS1pZj1cInBhcmVudENvbW1lbnQuZmlsZVR5cGUgIT09IG51bGwgJiYgcGFyZW50Q29tbWVudC5maWxlVHlwZSA9PT0gJ2ltYWdlJ1wiXG5cdFx0XHRcdFx0XHRcdDpzdHlsZT1cIm1lZGlhQmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0PHZpZXcgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gaW1nTGlzdFwiIDpzdHlsZT1cImNvbnRlbnRJbWFnZUJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtXCIgOnN0eWxlPVwiaW1hZ2VcIiBAY2xpY2s9XCJwcmV2aWV3SW1hZ2UoaW5kZXgpXCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHZpZXcgOnN0eWxlPVwiY3V0dGluZ0xpbmVcIj48L3ZpZXc+XG5cdFx0XHQ8IS0tIOWtkOivhOiuuuWIl+ihqCAtLT5cblx0XHRcdDx2aWV3IDpzdHlsZT1cImNvbW1lbnRCbG9ja1wiIHYtZm9yPVwiKGNoaWxkQ29tbWVudCxpbmRleCkgaW4gY2hpbGRDb21tZW50TGlzdFwiIDprZXk9XCJjaGlsZENvbW1lbnQuaWRcIj5cblx0XHRcdFx0PHZpZXcgOnN0eWxlPVwiYXZhdGFyQmxvY2tcIiB2LWlmPVwiY2hpbGRDb21tZW50ICE9PSBudWxsICYmIChjaGlsZENvbW1lbnQudXNlclZvLmF2YXRhciAhPT0gbnVsbCAmJiBjaGlsZENvbW1lbnQudXNlclZvLmF2YXRhciAhPT0gdW5kZWZpbmVkKVwiPlxuXHRcdFx0XHRcdDx2aWV3IDpzdHlsZT1cImF2YXRhckJvcmRlckJsb2NrXCIgQGNsaWNrPVwic2tpcFRvVXNlckRldGFpbChjaGlsZENvbW1lbnQudXNlclZvLmlkKVwiPlxuXHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJjaGlsZENvbW1lbnQudXNlclZvLmF2YXRhclwiIDpzdHlsZT1cImltYWdlQmxvY2tcIiAvPlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyA6c3R5bGU9XCJ1c2VyTWVzc2FnZUJsb2NrXCI+XG5cdFx0XHRcdFx0PHZpZXcgOnN0eWxlPVwidXNlck5hbWVJc0xpa2VkQmxvY2tcIj5cblx0XHRcdFx0XHRcdDx2aWV3IDpzdHlsZT1cInVzZXJOYW1lSXNQb3N0ZXJUaW1lQWRkckJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdDx2aWV3IDpzdHlsZT1cInVzZXJOYW1lSXNQb3N0ZXJCbG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IDpzdHlsZT1cInVzZXJOYW1lQmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IDpzdHlsZT1cInVzZXJOYW1lVGV4dEJsb2NrXCI+e3tjaGlsZENvbW1lbnQudXNlclZvLnVzZXJOYW1lfX08L3RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IDpzdHlsZT1cImlzUG9zdGVyQmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL3Bvc3Rlci5wbmdcIiA6c3R5bGU9XCJpc1Bvc3RlckltZ0Jsb2NrXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0PHZpZXcgOnN0eWxlPVwidGltZUFkZHJCbG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IDpzdHlsZT1cInRpbWVBbmRBZGRyQmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IDpzdHlsZT1cInRpbWVBZGRyVGV4dEJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt7Zm9ybWF0VGltZUFnbyhjaGlsZENvbW1lbnQucHVibGljVGltZSl9fVxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0XHQ8dmlldyA6c3R5bGU9XCJ0aW1lQW5kQWRkckJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCA6c3R5bGU9XCJ0aW1lQWRkclRleHRCbG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHTCtyB7e2NoaWxkQ29tbWVudC51c2VyVm8ucHJvdmluY2V9fVxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgOnN0eWxlPVwiaXNMaWtlZEJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiY2hpbGRDb21tZW50LmlzTGlrZWRcIiBzcmM9XCIvc3RhdGljL2xpa2VkLnBuZ1wiIDpzdHlsZT1cImlzTGlrZWRJbWdCbG9ja1wiXG5cdFx0XHRcdFx0XHRcdFx0QGNsaWNrLnN0b3A9XCJ0YXBMaWtlZCgpXCIgLz5cblx0XHRcdFx0XHRcdFx0PGltYWdlIHYtZWxzZSBzcmM9XCIvc3RhdGljL2xpa2UucG5nXCIgQGNsaWNrLnN0b3A9XCJ0YXBMaWtlZCgpXCIgOnN0eWxlPVwiaXNMaWtlZEltZ0Jsb2NrXCIgLz5cblx0XHRcdFx0XHRcdFx0PHZpZXcgOnN0eWxlPVwiaXNMaWtlZENvdW50QmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCA6c3R5bGU9XCJjb3VudEJsb2NrXCI+e3tjaGlsZENvbW1lbnQubGlrZWRDb3VudH19PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IDpzdHlsZT1cImNvbnRlbnRNZWRpYUJsb2NrXCI+XG5cdFx0XHRcdFx0XHQ8dmlldyA6c3R5bGU9XCJjb250ZW50QmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0PHRleHQgOnN0eWxlPVwiY29udGVudEZvbnRcIj5cblx0XHRcdFx0XHRcdFx0XHR7e2NoaWxkQ29tbWVudC5jb21tZW50fX1cblx0XHRcdFx0XHRcdFx0PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZGVvIHYtaWY9XCJjaGlsZENvbW1lbnQuZmlsZVR5cGUgIT09IG51bGwgJiYgY2hpbGRDb21tZW50LmZpbGVUeXBlID09PSd2aWRlbydcIlxuXHRcdFx0XHRcdFx0XHQ6c3JjPVwiY2hpbGRDb21tZW50LmZpbGVOYW1lXCIgOnBvc3Rlcj1cImNoaWxkQ29tbWVudC5jb3ZlclwiXG5cdFx0XHRcdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6ZGV2aWNlLnJweFRvUHgoMjgwKSArICdweCcsd2lkdGg6ZGV2aWNlLnJweFRvUHgoNTAwKSArICdweCd9XCIgLz5cblx0XHRcdFx0XHRcdDx2aWV3IHYtZWxzZS1pZj1cImNoaWxkQ29tbWVudC5maWxlVHlwZSAhPT0gbnVsbCAmJiBjaGlsZENvbW1lbnQuZmlsZVR5cGUgPT09ICdpbWFnZSdcIlxuXHRcdFx0XHRcdFx0XHQ6c3R5bGU9XCJtZWRpYUJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdDx2aWV3IHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHByb2Nlc3NDaGlsZEltYWdlVXJscyhjaGlsZENvbW1lbnQuZmlsZU5hbWUpXCJcblx0XHRcdFx0XHRcdFx0XHQ6c3R5bGU9XCJjb250ZW50SW1hZ2VCbG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbVwiIDpzdHlsZT1cImltYWdlXCIgQGNsaWNrPVwicHJldmlld0ltYWdlKGluZGV4KVwiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3Njcm9sbC12aWV3PlxuXHRcdDx2aWV3IDpzdHlsZT1cIm1lZGlhRmxhZyA9PT0gMCA/IGlucHV0QmxvY2sgOiBpbnB1dERpc3BsYXlCbG9ja1wiPlxuXHRcdFx0PHZpZXcgdi1pZj1cIm1lZGlhRmxhZyAhPT0gMFwiIDpzdHlsZT1cImltZ1ZpZGVvRGlzcGxheVwiPlxuXHRcdFx0XHQ8dmlldyB2LWlmPVwibWVkaWFGbGFnID09PSAxXCIgOnN0eWxlPVwiZGlzcGxheUltZ0Jsb2NrXCI+XG5cdFx0XHRcdFx0PHZpZXcgdi1mb3I9XCIoZmlsZSxpbmRleCkgaW4gZGlzcGxheWVkSW1hZ2VzXCIgOmtleT1cImZpbGUuaWRcIiA6c3R5bGU9XCJpbWdDc3MoaW5kZXgpXCIgPlxuXHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJmaWxlLmZpbGVVcmxcIiBAY2xpY2s9XCJwcmV2aWV3Q29tbWVudEltYWdlKGluZGV4KVwiIG1vZGU9XCJhc3BlY3RGaWxsXCIgOnN0eWxlPVwicHJldmlld0ltZ1wiPjwvaW1hZ2U+XG5cdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiaW5kZXggPT09IDIgJiYgZmlsZUxpc3QubGVuZ3RoID4gM1wiIDpzdHlsZT1cIm1vcmVUaXBzXCI+XG5cdFx0XHRcdFx0XHRcdDx2aWV3IDpzdHlsZT1cIm1vcmVUZXh0XCI+K3t7ZmlsZUxpc3QubGVuZ3RoIC0gM319PC92aWV3PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyB2LWVsc2UtaWY9XCJtZWRpYUZsYWcgPT09IDJcIiA6c3R5bGU9XCJkaXNwbGF5VmlkZW9CbG9ja1wiPlxuXHRcdFx0XHRcdDx2aWRlbyA6c3JjPVwiZmlsZUxpc3RbMF0uZmlsZVVybFwiIDpwb3N0ZXI9XCJmaWxlTGlzdFswXS5jb3ZlclVybFwiIDpzdHlsZT1cInZpZGVvRWxlbWVudFwiPjwvdmlkZW8+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHRcdDx2aWV3IDpzdHlsZT1cImlucHV0U3RhdHVzQmxvY2tcIj5cblx0XHRcdFx0PHZpZXcgOnN0eWxlPVwiaW5wdXRTdHlcIiBAY2xpY2s9XCJvcGVuSW5wdXRcIj5cblx0XHRcdFx0XHQ8dGV4dCA6c3R5bGU9XCJmb250U3R5XCI+XG5cdFx0XHRcdFx0XHR7e3JlbWFyay5sZW5ndGggPiAwID8gcmVtYXJrIDogcGxhY2Vob2xkZXJ9fVxuXHRcdFx0XHRcdDwvdGV4dD5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyA6c3R5bGU9XCJzdGF0dXNTdHlcIj5cblx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cInJlbWFyay50cmltKCkubGVuZ3RoID09PSAwICYmIGZpbGVMaXN0Lmxlbmd0aCA9PT0gMFwiIHNyYz1cIi9zdGF0aWMvc2VuZC5wbmdcIiA6c3R5bGU9XCJpbWdTdHlcIj48L2ltYWdlPlxuXHRcdFx0XHRcdDxpbWFnZSB2LWVsc2Ugc3JjPVwiL3N0YXRpYy9zZW5kYWJsZS5wbmdcIiA6c3R5bGU9XCJpbWdTdHlcIiBAY2xpY2s9XCJjaGlsZENvbW1lbnRcIj48L2ltYWdlPlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcblx0XHQ8L3ZpZXc+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7XG5cdFx0Z2V0RGV2aWNlSW5mb1xuXHR9IGZyb20gJ0AvdXRpbHMvZGV2aWNlL2RldmljZS5qcydcblx0aW1wb3J0IHtcblx0XHRnYWluUG9zdENvbW1lbnQsY29tbWVudFxuXHR9IGZyb20gJ0AvdXRpbHMvYmxvZy9ibG9nLmpzJ1xuXHRpbXBvcnQgdXNlclN0b3JlIGZyb20gJ0Avc3RvcmUvbG9jYWxTdG9yZS9pbmRleC5qcydcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdCAgdGhpcy5kZXZpY2UgPSBnZXREZXZpY2VJbmZvKClcclxuXHRcdFxyXG5cdFx0ICB1bmkuJG9uKCdvcGVuQ2hpbGRDb21tZW50JywgdGhpcy5oYW5kbGVPcGVuQ2hpbGRDb21tZW50KVxyXG5cdFx0ICB1bmkuJG9uKCdyZXNldENoaWxkQ29tbWVudCcsIHRoaXMuaGFuZGxlUmVzZXRDaGlsZENvbW1lbnQpXHJcblx0XHRcclxuXHRcdCAgLy8g5Y+q5rOo5YaM5LiA5qyhXHJcblx0XHQgIHVuaS4kb24oJ2NoYW5nZUlucHV0VmFsJywgdGhpcy5oYW5kbGVDaGFuZ2VJbnB1dFZhbClcclxuXHRcdCAgdW5pLiRvbignY29tbWVudCcsIHRoaXMuaGFuZGxlTmV3Q29tbWVudClcclxuXHRcdH0sXHJcblxuXHRcdGJlZm9yZURlc3Ryb3koKSB7XHJcblx0XHQgIHRoaXMudW5iaW5kRXZlbnRzKClcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGRlc3Ryb3llZCgpIHtcclxuXHRcdCAgdGhpcy51bmJpbmRFdmVudHMoKVxyXG5cdFx0fSxcclxuXG5cdFx0XG5cdFx0b25SZWFkeSgpIHtcblx0XHRcdC8vIOmhtemdouWHhuWkh+WlveWQjuWGjeiOt+WPllxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuaW5wdXRQb3B1cCA9IHVuaS5nZXRTdWJOVnVlQnlJZCgnaW5wdXRfcG9wdXAnKVxuXHRcdFx0XHR0aGlzLmlucHV0UG9wdXAuc2V0U3R5bGUoe1xuXHRcdFx0XHRcdFwiaGVpZ2h0XCI6XCI2MCVcIixcblx0XHRcdFx0XHRcblx0XHRcdFx0fSlcblx0XHRcdH0sIDMwMClcblx0XHR9LCBcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0ZGlzcGxheWVkSW1hZ2VzKCkge1xuXHRcdFx0ICAgIHJldHVybiB0aGlzLmZpbGVMaXN0LnNsaWNlKDAsIDMpO1xuXHRcdFx0fSxcblx0XHRcdGNoaWxkQ29tbWVudENvbnRhaW5lcigpIHtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2Vcblx0XHRcdFx0aWYgKCFkZXZpY2UpIHJldHVybiB7fVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHdpZHRoOiBkZXZpY2Uud2luZG93V2lkdGggKyAncHgnLFxuXHRcdFx0XHRcdGhlaWdodDogZGV2aWNlLndpbmRvd0hlaWdodCAqIDAuOTUgKyAncHgnLFxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcblx0XHRcdFx0XHRwb3NpdGlvbjoncmVsYXRpdmUnXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjb250cm9sQmxvY2soKSB7XG5cdFx0XHRcdGNvbnN0IGRldmljZSA9IHRoaXMuZGV2aWNlXG5cdFx0XHRcdGlmICghZGV2aWNlKSByZXR1cm4ge31cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRoZWlnaHQ6IGRldmljZS5ycHhUb1B4KDEwMCkgKyAncHgnLFxuXHRcdFx0XHRcdHdpZHRoOiBkZXZpY2UucnB4VG9QeCgxMDApICsgJ3B4Jyxcblx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y29tbWVudEJsb2NrKCkge1xuXHRcdFx0XHRjb25zdCBkZXZpY2UgPSB0aGlzLmRldmljZVxuXHRcdFx0XHRpZiAoIWRldmljZSkgcmV0dXJuIHt9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuXHRcdFx0XHRcdHdpZHRoOiBkZXZpY2UucGVyY2VudFRvUHgoMTAwKSArICdweCcsXG5cdFx0XHRcdFx0cGFkZGluZzogZGV2aWNlLnJweFRvUHgoMjApICsgJ3B4Jyxcblx0XHRcdFx0XHRib3JkZXI6ICdzb2xpZCAnICsgZGV2aWNlLnJweFRvUHgoMSkgKyAncHgnICsgJyAjZWVlJ1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0c2Nyb2xsVmlldygpe1xuXHRcdFx0XHRjb25zdCBkZXZpY2UgPSB0aGlzLmRldmljZVxuXHRcdFx0XHRpZighZGV2aWNlKSByZXR1cm4ge31cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRoZWlnaHQ6ZGV2aWNlLnJweFRvUHgoMTM1MCkgKyAncHgnXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRhdmF0YXJCbG9jaygpIHtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2Vcblx0XHRcdFx0aWYgKCFkZXZpY2UpIHJldHVybiB7fVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHdpZHRoOiBkZXZpY2UucnB4VG9QeCgxMDApICsgJ3B4JyxcblxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0YXZhdGFyQm9yZGVyQmxvY2soKSB7XG5cdFx0XHRcdGNvbnN0IGRldmljZSA9IHRoaXMuZGV2aWNlXG5cdFx0XHRcdGlmICghZGV2aWNlKSByZXR1cm4ge31cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR3aWR0aDogZGV2aWNlLnJweFRvUHgoMTAwKSArICdweCcsXG5cdFx0XHRcdFx0aGVpZ2h0OiBkZXZpY2UucnB4VG9QeCgxMDApICsgJ3B4Jyxcblx0XHRcdFx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRpbWFnZUJsb2NrKCkge1xuXHRcdFx0XHRjb25zdCBkZXZpY2UgPSB0aGlzLmRldmljZVxuXHRcdFx0XHRpZiAoIWRldmljZSkgcmV0dXJuIHt9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0d2lkdGg6IGRldmljZS5ycHhUb1B4KDEwMCkgKyAncHgnLFxuXHRcdFx0XHRcdGhlaWdodDogZGV2aWNlLnJweFRvUHgoMTAwKSArICdweCcsXG5cdFx0XHRcdFx0cmFkaXVzOiAoZGV2aWNlLnJweFRvUHgoMTAwKSAvIDIpICsgJ3B4Jyxcblx0XHRcdFx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXG5cdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdFx0XHRcdGJvcmRlclJhZGl1czogKGRldmljZS5ycHhUb1B4KDEwMCkgLyAyKSArICdweCcsXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR1c2VyTWVzc2FnZUJsb2NrKCkge1xuXHRcdFx0XHRjb25zdCBkZXZpY2UgPSB0aGlzLmRldmljZVxuXHRcdFx0XHRpZiAoIWRldmljZSkgcmV0dXJuIHt9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZmxleDogJzEnLFxuXHRcdFx0XHRcdHBhZGRpbmc6IGRldmljZS5ycHhUb1B4KDApICsgJyAnICsgZGV2aWNlLnJweFRvUHgoMjApICsgJ3B4J1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0dXNlck5hbWVJc0xpa2VkQmxvY2soKSB7XG5cdFx0XHRcdGNvbnN0IGRldmljZSA9IHRoaXMuZGV2aWNlXG5cdFx0XHRcdGlmICghZGV2aWNlKSByZXR1cm4ge31cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRoZWlnaHQ6IGRldmljZS5ycHhUb1B4KDEwMCkgKyAncHgnLFxuXHRcdFx0XHRcdHdpZHRoOiBkZXZpY2UucnB4VG9QeCg1ODApICsgJ3B4Jyxcblx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogJ3Jvdydcblx0XHRcdFx0fVxuXG5cdFx0XHR9LFxuXHRcdFx0dXNlck5hbWVJc1Bvc3RlclRpbWVBZGRyQmxvY2soKSB7XG5cdFx0XHRcdGNvbnN0IGRldmljZSA9IHRoaXMuZGV2aWNlXG5cdFx0XHRcdGlmICghZGV2aWNlKSByZXR1cm4ge31cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR3aWR0aDogZGV2aWNlLnJweFRvUHgoNDA2KSArICdweCcsXG5cdFx0XHRcdFx0aGVpZ2h0OiBkZXZpY2UucnB4VG9QeCgxMDApICsgJ3B4J1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0dXNlck5hbWVJc1Bvc3RlckJsb2NrKCkge1xuXHRcdFx0XHRjb25zdCBkZXZpY2UgPSB0aGlzLmRldmljZVxuXHRcdFx0XHRpZiAoIWRldmljZSkgcmV0dXJuIHt9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0d2lkdGg6IGRldmljZS5ycHhUb1B4KDQwNikgKyAncHgnLFxuXHRcdFx0XHRcdGhlaWdodDogZGV2aWNlLnJweFRvUHgoNTApICsgJ3B4Jyxcblx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogJ3JvdycsXG5cdFx0XHRcdFx0bWFyZ2luVG9wOiBkZXZpY2UucnB4VG9QeCgyMCkgKyAncHgnXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR1c2VyTmFtZUJsb2NrKCkge1xuXHRcdFx0XHRjb25zdCBkZXZpY2UgPSB0aGlzLmRldmljZVxuXHRcdFx0XHRpZiAoIWRldmljZSkgcmV0dXJuIHt9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0bWF4V2lkdGg6IGRldmljZS5ycHhUb1B4KDI4NCkgKyAncHgnLFxuXHRcdFx0XHRcdGhlaWdodDogZGV2aWNlLnJweFRvUHgoNTApICsgJ3B4Jyxcblx0XHRcdFx0XHRsaW5lSGVpZ2h0OiBkZXZpY2UucnB4VG9QeCg1MCkgKyAncHgnLFxuXHRcdFx0XHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0XHRcdFx0XHR0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG5cdFx0XHRcdFx0d2hpdGVTcGFjZTogJ25vd3JhcCcsXG5cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGlzUG9zdGVyQmxvY2soKSB7XG5cdFx0XHRcdGNvbnN0IGRldmljZSA9IHRoaXMuZGV2aWNlXG5cdFx0XHRcdGlmICghZGV2aWNlKSByZXR1cm4ge31cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR3aWR0aDogZGV2aWNlLnJweFRvUHgoODEpICsgJ3B4Jyxcblx0XHRcdFx0XHRoZWlnaHQ6IGRldmljZS5ycHhUb1B4KDQwKSArICdweCcsXG5cdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLCAvLyDlnoLnm7TlsYXkuK1cblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdFx0XHRcdFx0bWFyZ2luTGVmdDogZGV2aWNlLnJweFRvUHgoNSkgKyAncHgnXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR1c2VyTmFtZVRleHRCbG9jaygpIHtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2Vcblx0XHRcdFx0aWYgKCFkZXZpY2UpIHJldHVybiB7fVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGZvbnRTaXplOiBkZXZpY2UucnB4VG9QeCgyOCkgKyAncHgnLFxuXHRcdFx0XHRcdGNvbG9yOiAnIzdlN2U3ZSdcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGlzUG9zdGVySW1nQmxvY2soKSB7XG5cdFx0XHRcdGNvbnN0IGRldmljZSA9IHRoaXMuZGV2aWNlXG5cdFx0XHRcdGlmICghZGV2aWNlKSByZXR1cm4ge31cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR3aWR0aDogZGV2aWNlLnJweFRvUHgoNDEpICsgJ3B4Jyxcblx0XHRcdFx0XHRoZWlnaHQ6IGRldmljZS5ycHhUb1B4KDUwKSArICdweCcsXG5cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHRpbWVBZGRyQmxvY2soKSB7XG5cdFx0XHRcdGNvbnN0IGRldmljZSA9IHRoaXMuZGV2aWNlXG5cdFx0XHRcdGlmICghZGV2aWNlKSByZXR1cm4ge31cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR3aWR0aDogZGV2aWNlLnJweFRvUHgoNDA2KSArICdweCcsXG5cdFx0XHRcdFx0aGVpZ2h0OiBkZXZpY2UucnB4VG9QeCg1MCkgKyAncHgnLFxuXHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAncm93Jyxcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHRpbWVBbmRBZGRyQmxvY2soKSB7XG5cdFx0XHRcdGNvbnN0IGRldmljZSA9IHRoaXMuZGV2aWNlXG5cdFx0XHRcdGlmICghZGV2aWNlKSByZXR1cm4ge31cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRoZWlnaHQ6IGRldmljZS5ycHhUb1B4KDUwKSArICdweCcsXG5cdFx0XHRcdFx0bGluZUhlaWdodDogZGV2aWNlLnJweFRvUHgoNTApICsgJ3B4Jyxcblx0XHRcdFx0XHRtYXhXaWR0aDogZGV2aWNlLnJweFRvUHgoMjAzKSArICdweCdcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHRpbWVBZGRyVGV4dEJsb2NrKCkge1xuXHRcdFx0XHRjb25zdCBkZXZpY2UgPSB0aGlzLmRldmljZVxuXHRcdFx0XHRpZiAoIWRldmljZSkgcmV0dXJuIHt9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Zm9udFNpemU6IGRldmljZS5ycHhUb1B4KDIyKSArICdweCdcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGlzTGlrZWRCbG9jaygpIHtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2Vcblx0XHRcdFx0aWYgKCFkZXZpY2UpIHJldHVybiB7fVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHdpZHRoOiBkZXZpY2UucnB4VG9QeCgxNzQpICsgJ3B4Jyxcblx0XHRcdFx0XHRoZWlnaHQ6IGRldmljZS5ycHhUb1B4KDEwMCkgKyAncHgnLFxuXHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogJ3Jvdydcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGlzTGlrZWRJbWdCbG9jaygpIHtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2Vcblx0XHRcdFx0aWYgKCFkZXZpY2UpIHJldHVybiB7fVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHdpZHRoOiBkZXZpY2UucnB4VG9QeCgzNSkgKyAncHgnLFxuXHRcdFx0XHRcdGhlaWdodDogZGV2aWNlLnJweFRvUHgoMzApICsgJ3B4Jyxcblx0XHRcdFx0XHRtYXJnaW5Ub3A6IGRldmljZS5ycHhUb1B4KDIwKSArICdweCdcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGlzTGlrZWRDb3VudEJsb2NrKCkge1xuXHRcdFx0XHRjb25zdCBkZXZpY2UgPSB0aGlzLmRldmljZVxuXHRcdFx0XHRpZiAoIWRldmljZSkgcmV0dXJuIHt9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0bWFyZ2luVG9wOiBkZXZpY2UucnB4VG9QeCgxNSkgKyAncHgnLFxuXHRcdFx0XHRcdG1hcmdpbkxlZnQ6IGRldmljZS5ycHhUb1B4KDEyKSArICdweCcsXG5cdFx0XHRcdFx0cGFkZGluZ1RvcDogZGV2aWNlLnJweFRvUHgoMTApICsgJ3B4J1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y291bnRCbG9jaygpIHtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2Vcblx0XHRcdFx0aWYgKCFkZXZpY2UpIHJldHVybiB7fVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGZvbnRTaXplOiBkZXZpY2UucnB4VG9QeCgyNSkgKyAncHgnXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjb250ZW50TWVkaWFCbG9jaygpIHtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2Vcblx0XHRcdFx0aWYgKCFkZXZpY2UpIHJldHVybiB7fVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHdpZHRoOiBkZXZpY2UucnB4VG9QeCg1NzApICsgJ3B4JyxcblxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y29udGVudEJsb2NrKCkge1xuXHRcdFx0XHRjb25zdCBkZXZpY2UgPSB0aGlzLmRldmljZVxuXHRcdFx0XHRpZiAoIWRldmljZSkgcmV0dXJuIHt9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0d2lkdGg6IGRldmljZS5ycHhUb1B4KDU3MCkgKyAncHgnLFxuXHRcdFx0XHRcdHBhZGRpbmdCb3R0b206IGRldmljZS5ycHhUb1B4KDIwKSArICdweCcsXG5cdFx0XHRcdFx0cGFkZGluZ1RvcDogZGV2aWNlLnJweFRvUHgoMjApICsgJ3B4Jyxcblx0XHRcdFx0XHRwYWRkaW5nUmlnaHQ6IGRldmljZS5ycHhUb1B4KDIwKSArICdweCcsXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjb250ZW50Rm9udCgpIHtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2Vcblx0XHRcdFx0aWYgKCFkZXZpY2UpIHJldHVybiB7fVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGZvbnRTaXplOiBkZXZpY2UucnB4VG9QeCgzMCkgKyAncHgnXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRtZWRpYUJsb2NrKCkge1xuXHRcdFx0XHRjb25zdCBkZXZpY2UgPSB0aGlzLmRldmljZVxuXHRcdFx0XHRpZiAoIWRldmljZSkgcmV0dXJuIHt9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0d2lkdGg6IGRldmljZS5ycHhUb1B4KDU4MCkgKyAncHgnLFxuXHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAncm93Jyxcblx0XHRcdFx0XHRmbGV4V3JhcDogJ3dyYXAnXG5cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGNvbnRlbnRJbWFnZUJsb2NrKCkge1xuXHRcdFx0XHRjb25zdCBkZXZpY2UgPSB0aGlzLmRldmljZVxuXHRcdFx0XHRpZiAoIWRldmljZSkgcmV0dXJuIHt9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0d2lkdGg6IGRldmljZS5ycHhUb1B4KDE4MCkgKyAncHgnLFxuXHRcdFx0XHRcdGhlaWdodDogZGV2aWNlLnJweFRvUHgoMTgwKSArICdweCcsXG5cdFx0XHRcdFx0bWFyZ2luUmlnaHQ6IGRldmljZS5ycHhUb1B4KDEwKSArICdweCcsXG5cdFx0XHRcdFx0bWFyZ2luQm90dG9tOiBkZXZpY2UucnB4VG9QeCgxMCkgKyAncHgnXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRpbWFnZSgpIHtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2Vcblx0XHRcdFx0aWYgKCFkZXZpY2UpIHJldHVybiB7fVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHdpZHRoOiBkZXZpY2UucnB4VG9QeCgxODApICsgJ3B4Jyxcblx0XHRcdFx0XHRoZWlnaHQ6IGRldmljZS5ycHhUb1B4KDE4MCkgKyAncHgnLFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y3V0dGluZ0xpbmUoKSB7XG5cdFx0XHRcdGNvbnN0IGRldmljZSA9IHRoaXMuZGV2aWNlXG5cdFx0XHRcdGlmICghZGV2aWNlKSByZXR1cm4ge31cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR3aWR0aDogZGV2aWNlLnBlcmNlbnRUb1B4KDEwMCkgKyAncHgnLFxuXHRcdFx0XHRcdGhlaWdodDogZGV2aWNlLnJweFRvUHgoMTApICsgJ3B4Jyxcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZTllOWU5J1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0aW5wdXRCbG9jaygpIHtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2Vcblx0XHRcdFx0aWYoIWRldmljZSkgcmV0dXJuIHt9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0d2lkdGg6ZGV2aWNlLnJweFRvUHgoNzUwKSArICdweCcsXG5cdFx0XHRcdFx0aGVpZ2h0OmRldmljZS5ycHhUb1B4KDEwMCkgKyAncHgnLFxuXHRcdFx0XHRcdGRpc3BsYXk6J2ZsZXgnLFxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjond2hpdGUnLFxuXHRcdFx0XHRcdHBvc2l0aW9uOidhYnNvbHV0ZScsXG5cdFx0XHRcdFx0bGVmdDpkZXZpY2UucnB4VG9QeCgwKSArICdweCcsXG5cdFx0XHRcdFx0Ym90dG9tOmRldmljZS5ycHhUb1B4KDApICsgJ3B4J1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0aW5wdXREaXNwbGF5QmxvY2soKXtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2Vcblx0XHRcdFx0aWYoIWRldmljZSkgcmV0dXJuIHt9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0d2lkdGg6ZGV2aWNlLnJweFRvUHgoNzUwKSArICdweCcsXG5cdFx0XHRcdFx0aGVpZ2h0OmRldmljZS5ycHhUb1B4KDM1MCkgKyAncHgnLFxuXHRcdFx0XHRcdGRpc3BsYXk6J2ZsZXgnLFxuXHRcdFx0XHRcdHBvc2l0aW9uOidhYnNvbHV0ZScsXG5cdFx0XHRcdFx0bGVmdDpkZXZpY2UucnB4VG9QeCgwKSArICdweCcsXG5cdFx0XHRcdFx0Ym90dG9tOmRldmljZS5ycHhUb1B4KDApICsgJ3B4Jyxcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJ1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XHRcblx0XHRcdH0sXG5cdFx0XHRpbWdWaWRlb0Rpc3BsYXkoKXtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2Vcblx0XHRcdFx0aWYoIWRldmljZSkgcmV0dXJue31cblx0XHRcdFx0cmV0dXJue1xuXHRcdFx0XHRcdHdpZHRoOmRldmljZS5ycHhUb1B4KDc1MCkgKyAncHgnLFxuXHRcdFx0XHRcdGhlaWdodDpkZXZpY2UucnB4VG9QeCgyNTApICsgJ3B4Jyxcblx0XHRcdFx0XHRkaXNwbGF5OidmbGV4Jyxcblx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOidyb3cnLFxuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XHRcblx0XHRcdH0sXG5cdFx0XHRkaXNwbGF5SW1nQmxvY2soKXtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2Vcblx0XHRcdFx0aWYoIWRldmljZSkgcmV0dXJue31cblx0XHRcdFx0cmV0dXJue1xuXHRcdFx0XHRcdHdpZHRoOmRldmljZS5ycHhUb1B4KDc1MCkgKyAncHgnLFxuXHRcdFx0XHRcdGhlaWdodDpkZXZpY2UucnB4VG9QeCgyNTApICsgJ3B4Jyxcblx0XHRcdFx0XHRkaXNwbGF5OidmbGV4Jyxcblx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOidyb3cnXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRpbWdDc3MoaW5kZXgpe1xuXHRcdFx0XHRjb25zdCBkZXZpY2UgPSB0aGlzLmRldmljZVxuXHRcdFx0XHRpZighZGV2aWNlKSByZXR1cm57fVxuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgYmFzZVN0eWxlID0ge1xuXHRcdFx0XHRcdGhlaWdodDpkZXZpY2UucnB4VG9QeCgyNTApICsgJ3B4Jyxcblx0XHRcdFx0XHR3aWR0aDpkZXZpY2UucnB4VG9QeCgyNTApICsgJ3B4Jyxcblx0XHRcdFx0XHRwYWRkaW5nTGVmdDpkZXZpY2UucnB4VG9QeCgyMCkgKyAncHgnLFxuXHRcdFx0XHRcdHBvc2l0aW9uOidyZWxhdGl2ZScsXG5cdFx0XHRcdH1cdFxuXHRcdFx0XHRpZihpbmRleCA9PT0gMiAmJiB0aGlzLmZpbGVMaXN0Lmxlbmd0aCA+IDMpe1xuXHRcdFx0XHRcdHJldHVybntcblx0XHRcdFx0XHRcdC4uLmJhc2VTdHlsZSxcblx0XHRcdFx0XHRcdHBvc2l0aW9uOidyZWxhdGl2ZSdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGJhc2VTdHlsZVxuXHRcdFx0fSxcblx0XHRcdHByZXZpZXdJbWcoKXtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2Vcblx0XHRcdFx0aWYoIWRldmljZSkgcmV0dXJue31cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRoZWlnaHQ6ZGV2aWNlLnJweFRvUHgoMjUwKSArICdweCcsXG5cdFx0XHRcdFx0d2lkdGg6ZGV2aWNlLnJweFRvUHgoMjUwKSArICdweCcsXG5cdFx0XHRcdFx0cG9zaXRpb246J2Fic29sdXRlJ1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0bW9yZVRpcHMoKXtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2Vcblx0XHRcdFx0aWYoIWRldmljZSkgcmV0dXJue31cblx0XHRcdFx0cmV0dXJue1xuXHRcdFx0XHRcdHBvc2l0aW9uOidhYnNvbHV0ZScsXG5cdFx0XHRcdFx0Ym90dG9tOmRldmljZS5ycHhUb1B4KDEwKSArICdweCcsXG5cdFx0XHRcdFx0cmlnaHQ6ZGV2aWNlLnJweFRvUHgoMTApICsgJ3B4Jyxcblx0XHRcdFx0XHR3aWR0aDpkZXZpY2UucnB4VG9QeCg1MCkgKyAncHgnLFxuXHRcdFx0XHRcdGhlaWdodDpkZXZpY2UucnB4VG9QeCg1MCkgKyAncHgnLFxuXHRcdFx0XHRcdG9wYWNpdHk6JzAuMSdcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdG1vcmVUZXh0KCl7XG5cdFx0XHRcdGNvbnN0IGRldmljZSA9IHRoaXMuZGV2aWNlXG5cdFx0XHRcdGlmKCFkZXZpY2UpIHJldHVybnt9XG5cdFx0XHRcdHJldHVybntcblx0XHRcdFx0XHRmb250U2l6ZTpkZXZpY2UucnB4VG9QeCgzNikrJ3B4Jyxcblx0XHRcdFx0XHRmb250V2VpZ2h0OidibG9kJyxcblx0XHRcdFx0XHRjb2xvcjond2hpdGUnXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRpbnB1dFN0YXR1c0Jsb2NrKCl7XG5cdFx0XHRcdGNvbnN0IGRldmljZSA9IHRoaXMuZGV2aWNlXG5cdFx0XHRcdGlmKCFkZXZpY2UpIHJldHVybnt9XG5cdFx0XHRcdHJldHVybntcblx0XHRcdFx0XHR3aWR0aDpkZXZpY2UucnB4VG9QeCg3NTApICsgJ3B4Jyxcblx0XHRcdFx0XHRoZWlnaHQ6ZGV2aWNlLnJweFRvUHgoMTAwKSArICdweCcsXG5cdFx0XHRcdFx0ZGlzcGxheTonZmxleCcsXG5cdFx0XHRcdFx0ZmxleERpcmVjdGlvbjoncm93Jyxcblx0XHRcdFx0XHRwYWRkaW5nVG9wOiBkZXZpY2UucnB4VG9QeCgyMCkgKyAncHgnLFxuXHRcdFx0XHRcdHBhZGRpbmdMZWZ0OiBkZXZpY2UucnB4VG9QeCgyMCkgKyAncHgnLFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0aW5wdXRTdHkoKXtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2Vcblx0XHRcdFx0aWYoIWRldmljZSkgcmV0dXJue31cblx0XHRcdFx0cmV0dXJue1xuXHRcdFx0XHRcdHdpZHRoOmRldmljZS5ycHhUb1B4KDYwMCkgKyAncHgnLFxuXHRcdFx0XHRcdGhlaWdodDpkZXZpY2UucnB4VG9QeCg4MCkgKyAncHgnLFxuXHRcdFx0XHRcdHBhZGRpbmdUb3A6ZGV2aWNlLnJweFRvUHgoMjApICsgJ3B4Jyxcblx0XHRcdFx0XHRwYWRkaW5nUmlnaHQ6ZGV2aWNlLnJweFRvUHgoMTApICsgJ3B4Jyxcblx0XHRcdFx0XHRwYWRkaW5nQm90dG9tOiBkZXZpY2UucnB4VG9QeCgxMikgKyAncHgnLFxuXHRcdFx0XHRcdHBhZGRpbmdMZWZ0OiBkZXZpY2UucnB4VG9QeCgxMCkgKyAncHgnLFxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjonI2U5ZTllOSdcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGZvbnRTdHkoKXtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2Vcblx0XHRcdFx0aWYoIWRldmljZSkgcmV0dXJue31cblx0XHRcdFx0cmV0dXJue1xuXHRcdFx0XHRcdGZvbnRTaXplOmRldmljZS5ycHhUb1B4KDMwKSArICdweCcsXG5cdFx0XHRcdFx0Y29sb3I6JyNiY2JjYmMnXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRzdGF0dXNTdHkoKXtcblx0XHRcdFx0Y29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2Vcblx0XHRcdFx0aWYoIWRldmljZSkgcmV0dXJue31cblx0XHRcdFx0cmV0dXJue1xuXHRcdFx0XHRcdHdpZHRoOmRldmljZS5ycHhUb1B4KDEwMCkgKyAncHgnLFxuXHRcdFx0XHRcdGhlaWdodDpkZXZpY2UucnB4VG9QeCg4MCkgKyAncHgnLFxuXHRcdFx0XHRcdG1hcmdpbkxlZnQ6IGRldmljZS5ycHhUb1B4KDEwKSArICdweCcsXG5cdFx0XHRcdFx0ZGlzcGxheTonZmxleCcsXG5cdFx0XHRcdFx0ZmxleERpcmVjdGlvbjoncm93Jyxcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGltZ1N0eSgpe1xuXHRcdFx0XHRjb25zdCBkZXZpY2UgPSB0aGlzLmRldmljZVxuXHRcdFx0XHRpZighZGV2aWNlKSByZXR1cm57fVxuXHRcdFx0XHRyZXR1cm57XG5cdFx0XHRcdFx0d2lkdGg6ZGV2aWNlLnJweFRvUHgoODApICsgJ3B4Jyxcblx0XHRcdFx0XHRoZWlnaHQ6ZGV2aWNlLnJweFRvUHgoODApICsgJ3B4J1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRpbml0KGRhdGEpIHtcclxuXHRcdFx0ICB0aGlzLnJlc2V0KClcclxuXHRcdFx0XHJcblx0XHRcdCAgdGhpcy5wYXJlbnRDb21tZW50ID0gZGF0YS5wYXJlbnRDb21tZW50IHx8IHt9XHJcblx0XHRcdCAgdGhpcy5wb3N0SWQgPSBkYXRhLnBvc3RJZFxyXG5cdFx0XHRcclxuXHRcdFx0ICB0aGlzLmN1cnJlbnQgPSAxXHJcblx0XHRcdCAgdGhpcy5zaXplID0gNVxyXG5cdFx0XHQgIHRoaXMucGFnZXMgPSAwXHJcblx0XHRcdCAgdGhpcy5mbGFnID0gdHJ1ZVxyXG5cdFx0XHRcclxuXHRcdFx0ICB0aGlzLmdldENoaWxkQ29tbWVudExpc3QoKVxyXG5cdFx0XHQgIHRoaXMuaW5pdEltZygpXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR1bmJpbmRFdmVudHMoKSB7XHJcblx0XHRcdCAgdW5pLiRvZmYoJ29wZW5DaGlsZENvbW1lbnQnLCB0aGlzLmhhbmRsZU9wZW5DaGlsZENvbW1lbnQpXHJcblx0XHRcdCAgdW5pLiRvZmYoJ3Jlc2V0Q2hpbGRDb21tZW50JywgdGhpcy5oYW5kbGVSZXNldENoaWxkQ29tbWVudClcclxuXHRcdFx0ICB1bmkuJG9mZignY2hhbmdlSW5wdXRWYWwnLCB0aGlzLmhhbmRsZUNoYW5nZUlucHV0VmFsKVxyXG5cdFx0XHQgIHVuaS4kb2ZmKCdjb21tZW50JywgdGhpcy5oYW5kbGVOZXdDb21tZW50KVxyXG5cdFx0XHR9LFxyXG5oYW5kbGVPcGVuQ2hpbGRDb21tZW50KGRhdGEpIHtcbiAgdGhpcy5pbml0KGRhdGEpXG59LFxuXG5oYW5kbGVSZXNldENoaWxkQ29tbWVudCgpIHtcbiAgdGhpcy5yZXNldCgpXG59LFxuXG5oYW5kbGVDaGFuZ2VJbnB1dFZhbChkYXRhKSB7XG4gIGlmICghZGF0YSkgcmV0dXJuXG5cbiAgdGhpcy5maWxlTGlzdCA9IEFycmF5LmlzQXJyYXkoZGF0YS5maWxlTGlzdCkgPyBbLi4uZGF0YS5maWxlTGlzdF0gOiBbXVxuICB0aGlzLnJlbWFyayA9IGRhdGEucmVtYXJrIHx8ICcnXG4gIHRoaXMubWVkaWFGbGFnID0gZGF0YS5tZWRpYUZsYWcgfHwgMFxuXG4gIHRoaXMuJGZvcmNlVXBkYXRlKClcbn0sXG5cbmhhbmRsZU5ld0NvbW1lbnQoY29tbWVudCkge1xuICB0aGlzLmFkZENoaWxkQ29tbWVudE9uY2UoY29tbWVudCwgJ3Vuc2hpZnQnKVxuICB0aGlzLiRmb3JjZVVwZGF0ZSgpXG59LFxuXHJcblx0XHRcdGdldENvbW1lbnRLZXkoY29tbWVudCkge1xyXG5cdFx0XHQgIGlmICghY29tbWVudCkgcmV0dXJuICcnXHJcblx0XHRcdFxyXG5cdFx0XHQgIGlmIChjb21tZW50LmlkICE9PSBudWxsICYmIGNvbW1lbnQuaWQgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHQgICAgcmV0dXJuIFN0cmluZyhjb21tZW50LmlkKVxyXG5cdFx0XHQgIH1cclxuXHRcdFx0XHJcblx0XHRcdCAgY29uc3QgdXNlcklkID0gY29tbWVudC51c2VyVm8gJiYgY29tbWVudC51c2VyVm8uaWRcclxuXHRcdFx0ICAgID8gY29tbWVudC51c2VyVm8uaWRcclxuXHRcdFx0ICAgIDogJydcclxuXHRcdFx0XHJcblx0XHRcdCAgcmV0dXJuIFtcclxuXHRcdFx0ICAgIGNvbW1lbnQucG9zdElkIHx8IHRoaXMucG9zdElkIHx8ICcnLFxyXG5cdFx0XHQgICAgY29tbWVudC5wYXJlbnRJZCB8fCB0aGlzLnBhcmVudENvbW1lbnQuaWQgfHwgJycsXHJcblx0XHRcdCAgICB1c2VySWQsXHJcblx0XHRcdCAgICBjb21tZW50LnB1YmxpY1RpbWUgfHwgJycsXHJcblx0XHRcdCAgICBjb21tZW50LmNvbW1lbnQgfHwgJycsXHJcblx0XHRcdCAgICBjb21tZW50LmZpbGVOYW1lIHx8ICcnXHJcblx0XHRcdCAgXS5qb2luKCdfJylcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdGhhc1JlbmRlcmVkQ29tbWVudChjb21tZW50KSB7XHJcblx0XHRcdCAgY29uc3Qga2V5ID0gdGhpcy5nZXRDb21tZW50S2V5KGNvbW1lbnQpXHJcblx0XHRcdFxyXG5cdFx0XHQgIGlmICgha2V5KSByZXR1cm4gdHJ1ZVxyXG5cdFx0XHRcclxuXHRcdFx0ICByZXR1cm4gdGhpcy5yZW5kZXJlZENvbW1lbnRLZXlMaXN0LmluY2x1ZGVzKGtleSlcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdG1hcmtSZW5kZXJlZENvbW1lbnQoY29tbWVudCkge1xyXG5cdFx0XHQgIGNvbnN0IGtleSA9IHRoaXMuZ2V0Q29tbWVudEtleShjb21tZW50KVxyXG5cdFx0XHRcclxuXHRcdFx0ICBpZiAoIWtleSkgcmV0dXJuXHJcblx0XHRcdFxyXG5cdFx0XHQgIGlmICghdGhpcy5yZW5kZXJlZENvbW1lbnRLZXlMaXN0LmluY2x1ZGVzKGtleSkpIHtcclxuXHRcdFx0ICAgIHRoaXMucmVuZGVyZWRDb21tZW50S2V5TGlzdC5wdXNoKGtleSlcclxuXHRcdFx0ICB9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRhZGROZXdDb21tZW50SWQoY29tbWVudCkge1xyXG5cdFx0XHQgIGlmICghY29tbWVudCB8fCBjb21tZW50LmlkID09PSBudWxsIHx8IGNvbW1lbnQuaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuXHJcblx0XHRcdFxyXG5cdFx0XHQgIGNvbnN0IGlkID0gU3RyaW5nKGNvbW1lbnQuaWQpXHJcblx0XHRcdFxyXG5cdFx0XHQgIGlmICghdGhpcy5uZXdDb21tZW50SWRMaXN0LmluY2x1ZGVzKGlkKSkge1xyXG5cdFx0XHQgICAgdGhpcy5uZXdDb21tZW50SWRMaXN0LnB1c2goaWQpXHJcblx0XHRcdCAgfVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Z2V0Q29tbWVudFVuaXF1ZUtleShjb21tZW50KSB7XHJcblx0XHRcdCAgaWYgKCFjb21tZW50KSByZXR1cm4gbnVsbFxyXG5cdFx0XHRcclxuXHRcdFx0ICAvLyDkvJjlhYjkvb/nlKjmlbDmja7lupMgaWRcclxuXHRcdFx0ICBpZiAoY29tbWVudC5pZCAhPT0gbnVsbCAmJiBjb21tZW50LmlkICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0ICAgIHJldHVybiAnaWRfJyArIGNvbW1lbnQuaWRcclxuXHRcdFx0ICB9XHJcblx0XHRcdFxyXG5cdFx0XHQgIC8vIOWmguaenOacieWJjeerr+S4tOaXtiBpZO+8jOS5n+WPr+S7peWFnOW6lVxyXG5cdFx0XHQgIGlmIChjb21tZW50LmNsaWVudElkKSB7XHJcblx0XHRcdCAgICByZXR1cm4gJ2NsaWVudF8nICsgY29tbWVudC5jbGllbnRJZFxyXG5cdFx0XHQgIH1cclxuXHRcdFx0XHJcblx0XHRcdCAgcmV0dXJuIG51bGxcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdGFkZENoaWxkQ29tbWVudE9uY2UoY29tbWVudCwgcG9zaXRpb24gPSAncHVzaCcpIHtcclxuXHRcdFx0ICBpZiAoIWNvbW1lbnQpIHJldHVybiBmYWxzZVxyXG5cdFx0XHRcclxuXHRcdFx0ICBjb25zdCBrZXkgPSB0aGlzLmdldENvbW1lbnRVbmlxdWVLZXkoY29tbWVudClcclxuXHRcdFx0XHJcblx0XHRcdCAgaWYgKCFrZXkpIHtcclxuXHRcdFx0ICAgIHJldHVybiBmYWxzZVxyXG5cdFx0XHQgIH1cclxuXHRcdFx0XHJcblx0XHRcdCAgLy8g56ys5LiA5bGC77ya5qOA5p+lIGtleSDliJfooahcclxuXHRcdFx0ICBpZiAodGhpcy5yZW5kZXJlZENvbW1lbnRLZXlMaXN0LmluY2x1ZGVzKGtleSkpIHtcclxuXHRcdFx0ICAgIHJldHVybiBmYWxzZVxyXG5cdFx0XHQgIH1cclxuXHRcdFx0XHJcblx0XHRcdCAgLy8g56ys5LqM5bGC77ya55u05o6l5qOA5p+lIGNoaWxkQ29tbWVudExpc3TvvIzpmLLmraIgcmVuZGVyZWRDb21tZW50S2V5TGlzdCDnirbmgIHkuKLlpLFcclxuXHRcdFx0ICBjb25zdCBleGlzdHMgPSB0aGlzLmNoaWxkQ29tbWVudExpc3Quc29tZShpdGVtID0+IHtcclxuXHRcdFx0ICAgIHJldHVybiB0aGlzLmdldENvbW1lbnRVbmlxdWVLZXkoaXRlbSkgPT09IGtleVxyXG5cdFx0XHQgIH0pXHJcblx0XHRcdFxyXG5cdFx0XHQgIGlmIChleGlzdHMpIHtcclxuXHRcdFx0ICAgIHRoaXMucmVuZGVyZWRDb21tZW50S2V5TGlzdC5wdXNoKGtleSlcclxuXHRcdFx0ICAgIHJldHVybiBmYWxzZVxyXG5cdFx0XHQgIH1cclxuXHRcdFx0XHJcblx0XHRcdCAgdGhpcy5yZW5kZXJlZENvbW1lbnRLZXlMaXN0LnB1c2goa2V5KVxyXG5cdFx0XHRcclxuXHRcdFx0ICBpZiAocG9zaXRpb24gPT09ICd1bnNoaWZ0Jykge1xyXG5cdFx0XHQgICAgdGhpcy5jaGlsZENvbW1lbnRMaXN0LnVuc2hpZnQoY29tbWVudClcclxuXHRcdFx0ICB9IGVsc2Uge1xyXG5cdFx0XHQgICAgdGhpcy5jaGlsZENvbW1lbnRMaXN0LnB1c2goY29tbWVudClcclxuXHRcdFx0ICB9XHJcblx0XHRcdFxyXG5cdFx0XHQgIHJldHVybiB0cnVlXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRcclxuXHRcdFx0YWRkQ2hpbGRDb21tZW50TGlzdE9uY2UobGlzdCwgcG9zaXRpb24gPSAncHVzaCcpIHtcclxuXHRcdFx0ICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkgfHwgbGlzdC5sZW5ndGggPT09IDApIHJldHVyblxyXG5cdFx0XHRcclxuXHRcdFx0ICBsaXN0LmZvckVhY2goY29tbWVudCA9PiB7XHJcblx0XHRcdCAgICB0aGlzLmFkZENoaWxkQ29tbWVudE9uY2UoY29tbWVudCwgcG9zaXRpb24pXHJcblx0XHRcdCAgfSlcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdFxyXG5cdFx0XHRyZWJ1aWxkUmVuZGVyZWRDb21tZW50S2V5cygpIHtcclxuXHRcdFx0ICB0aGlzLnJlbmRlcmVkQ29tbWVudEtleUxpc3QgPSBbXVxyXG5cdFx0XHRcclxuXHRcdFx0ICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5jaGlsZENvbW1lbnRMaXN0KSkgcmV0dXJuXHJcblx0XHRcdFxyXG5cdFx0XHQgIHRoaXMuY2hpbGRDb21tZW50TGlzdC5mb3JFYWNoKGNvbW1lbnQgPT4ge1xyXG5cdFx0XHQgICAgdGhpcy5tYXJrUmVuZGVyZWRDb21tZW50KGNvbW1lbnQpXHJcblx0XHRcdCAgfSlcclxuXHRcdFx0fSxcclxuXG5cdFx0XHRpbWdDc3MoaW5kZXgpe1xuXHRcdFx0XHRjb25zdCBkZXZpY2UgPSB0aGlzLmRldmljZVxuXHRcdFx0XHRpZighZGV2aWNlKSByZXR1cm57fVxuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgYmFzZVN0eWxlID0ge1xuXHRcdFx0XHRcdGhlaWdodDpkZXZpY2UucnB4VG9QeCgyNTApICsgJ3B4Jyxcblx0XHRcdFx0XHR3aWR0aDpkZXZpY2UucnB4VG9QeCgyNTApICsgJ3B4Jyxcblx0XHRcdFx0XHRwYWRkaW5nTGVmdDpkZXZpY2UucnB4VG9QeCgyMCkgKyAncHgnLFxuXHRcdFx0XHRcdHBvc2l0aW9uOidyZWxhdGl2ZScsXG5cdFx0XHRcdH1cdFxuXHRcdFx0XHRpZihpbmRleCA9PT0gMiAmJiB0aGlzLmZpbGVMaXN0Lmxlbmd0aCA+IDMpe1xuXHRcdFx0XHRcdHJldHVybntcblx0XHRcdFx0XHRcdC4uLmJhc2VTdHlsZSxcblx0XHRcdFx0XHRcdHBvc2l0aW9uOidyZWxhdGl2ZSdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGJhc2VTdHlsZVxuXHRcdFx0fSxcblx0XHRcdGdldENoaWxkQ29tbWVudExpc3QoKSB7XHJcblx0XHRcdCAgaWYgKCF0aGlzLmZsYWcpIHtcclxuXHRcdFx0ICAgIHJldHVyblxyXG5cdFx0XHQgIH1cclxuXHRcdFx0XHJcblx0XHRcdCAgbGV0IHBhcmFtcyA9IHtcclxuXHRcdFx0ICAgIGN1cnJlbnQ6IHRoaXMuY3VycmVudCxcclxuXHRcdFx0ICAgIHNpemU6IHRoaXMuc2l6ZSxcclxuXHRcdFx0ICAgIHR5cGU6IDEsXHJcblx0XHRcdCAgICBwYXJlbnRJZDogdGhpcy5wYXJlbnRDb21tZW50LmlkLFxyXG5cdFx0XHQgICAgcG9zdElkOiB0aGlzLnBvc3RJZFxyXG5cdFx0XHQgIH1cclxuXHRcdFx0XHJcblx0XHRcdCAgZ2FpblBvc3RDb21tZW50KHBhcmFtcywge30pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0ICAgIGNvbnN0IGxpc3QgPSBBcnJheS5pc0FycmF5KHJlcy5jb21tZW50TGlzdCkgPyByZXMuY29tbWVudExpc3QgOiBbXVxyXG5cdFx0XHRcclxuXHRcdFx0ICAgIHRoaXMuYWRkQ2hpbGRDb21tZW50TGlzdE9uY2UobGlzdCwgJ3B1c2gnKVxyXG5cdFx0XHRcclxuXHRcdFx0ICAgIHRoaXMuY3VycmVudCA9IHJlcy5jdXJyZW50ICsgMVxyXG5cdFx0XHQgICAgdGhpcy5wYWdlcyA9IHJlcy5wYWdlc1xyXG5cdFx0XHRcclxuXHRcdFx0ICAgIGlmICh0aGlzLmN1cnJlbnQgPiB0aGlzLnBhZ2VzKSB7XHJcblx0XHRcdCAgICAgIHRoaXMuZmxhZyA9IGZhbHNlXHJcblx0XHRcdCAgICB9XHJcblx0XHRcdFxyXG5cdFx0XHQgICAgdGhpcy4kZm9yY2VVcGRhdGUoKVxyXG5cdFx0XHQgIH0pXHJcblx0XHRcdFxyXG5cdFx0XHQgIHRoaXMuaW5pdEltZygpXHJcblx0XHRcdH0sXHJcblxuXHRcdFx0aW5pdEltZygpIHtcblx0XHRcdFx0aWYgKHRoaXMucGFyZW50Q29tbWVudC5maWxlVHlwZSAhPT0gbnVsbCAmJiB0aGlzLnBhcmVudENvbW1lbnQuZmlsZVR5cGUgPT09ICdpbWFnZScpIHtcblx0XHRcdFx0XHR0aGlzLnByb2Nlc3NJbWFnZVVybHModGhpcy5wYXJlbnRDb21tZW50LmZpbGVOYW1lKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y2xvc2VDaGlsZENvbW1lbnRibG9jaygpIHtcblx0XHRcdFx0dW5pLiRlbWl0KCdjbG9zZUNoaWxkQ29tbWVudEJsb2NrJylcblx0XHRcdH0sXG5cblx0XHRcdGZvcm1hdFRpbWVBZ28odGltZVN0cikge1xuXHRcdFx0XHRpZiAoIXRpbWVTdHIpIHJldHVybiAnJ1xuXG5cdFx0XHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lU3RyKVxuXHRcdFx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpXG5cdFx0XHRcdGNvbnN0IGRpZmZJblNlY29uZHMgPSBNYXRoLmZsb29yKChub3cgLSBkYXRlKSAvIDEwMDApXG5cdFx0XHRcdGNvbnN0IGRpZmZJbk1pbnV0ZXMgPSBNYXRoLmZsb29yKGRpZmZJblNlY29uZHMgLyA2MClcblx0XHRcdFx0Y29uc3QgZGlmZkluSG91cnMgPSBNYXRoLmZsb29yKGRpZmZJbk1pbnV0ZXMgLyA2MClcblx0XHRcdFx0Y29uc3QgZGlmZkluRGF5cyA9IE1hdGguZmxvb3IoZGlmZkluSG91cnMgLyAyNClcblxuXHRcdFx0XHQvLyDkuIDliIbpkp/lhoVcblx0XHRcdFx0aWYgKGRpZmZJblNlY29uZHMgPCA2MCkge1xuXHRcdFx0XHRcdHJldHVybiBg5Yia5YiaYFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8g5LiA5bCP5pe25YaFXG5cdFx0XHRcdGlmIChkaWZmSW5NaW51dGVzIDwgNjApIHtcblx0XHRcdFx0XHRyZXR1cm4gYCR7ZGlmZkluTWludXRlc33liIbpkp/liY1gXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyDkuIDlpKnlhoVcblx0XHRcdFx0aWYgKGRpZmZJbkhvdXJzIDwgMjQpIHtcblx0XHRcdFx0XHRyZXR1cm4gYCR7ZGlmZkluSG91cnN95bCP5pe25YmNYFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgY3VycmVudFllYXIgPSBub3cuZ2V0RnVsbFllYXIoKVxuXHRcdFx0XHRjb25zdCB0YXJnZXRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG5cdFx0XHRcdGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuXHRcdFx0XHRjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKVxuXG5cdFx0XHRcdC8vIOS4gOW5tOWGhVxuXHRcdFx0XHRpZiAoY3VycmVudFllYXIgPT09IHRhcmdldFllYXIpIHtcblx0XHRcdFx0XHRpZiAobW9udGggPCAxMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGAke21vbnRofS0ke2RheS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YFxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYCR7bW9udGgudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfS0ke2RheS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gYCR7bW9udGh9LSR7ZGF5fWBcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIOS4gOW5tOWQjlxuXHRcdFx0XHRjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG5cdFx0XHRcdHJldHVybiBgJHt5ZWFyfS0ke21vbnRoLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX0tJHtkYXkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfWBcblx0XHRcdH0sXG5cdFx0XHRwcm9jZXNzSW1hZ2VVcmxzKHVybHMpIHtcblx0XHRcdFx0aWYgKCF1cmxzIHx8IHR5cGVvZiB1cmxzICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdHRoaXMuaW1nTGlzdCA9IFtdO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBsaXN0ID0gdXJscy5zcGxpdCgnLCcpXG5cdFx0XHRcdFx0Lm1hcCh1cmwgPT4gdXJsLnRyaW0oKSlcblx0XHRcdFx0XHQuZmlsdGVyKHVybCA9PiB1cmwgJiYgdXJsICE9PSAnJyk7XG5cblx0XHRcdFx0dGhpcy5pbWdMaXN0ID0gbGlzdDtcblx0XHRcdH0sXG5cdFx0XHRwcm9jZXNzQ2hpbGRJbWFnZVVybHModXJscykge1xuXHRcdFx0XHRpZiAoIXVybHMgfHwgdHlwZW9mIHVybHMgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IGxpc3QgPSB1cmxzLnNwbGl0KCcsJylcblx0XHRcdFx0XHQubWFwKHVybCA9PiB1cmwudHJpbSgpKVxuXHRcdFx0XHRcdC5maWx0ZXIodXJsID0+IHVybCAmJiB1cmwgIT09ICcnKTtcblxuXHRcdFx0XHRyZXR1cm4gbGlzdFxuXHRcdFx0fSxcblx0XHRcdHByZXZpZXdJbWFnZShjdXJyZW50SW5kZXgpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmltZ0xpc3QubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dW5pLnByZXZpZXdJbWFnZSh7XG5cdFx0XHRcdFx0Y3VycmVudDogY3VycmVudEluZGV4LFxuXHRcdFx0XHRcdHVybHM6IHRoaXMuaW1nTGlzdCxcblx0XHRcdFx0XHRpbmRpY2F0b3I6ICdudW1iZXInLFxuXHRcdFx0XHRcdGxvb3A6IGZhbHNlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdHByZXZpZXdDb21tZW50SW1hZ2UoY3VycmVudEluZGV4KSB7XG5cdFx0XHRcdGNvbnN0IHVybHMgPSB0aGlzLmZpbGVMaXN0Lm1hcChmaWxlID0+IGZpbGUuZmlsZVVybClcblx0XHRcdFx0dW5pLnByZXZpZXdJbWFnZSh7XG5cdFx0XHRcdFx0Y3VycmVudDogY3VycmVudEluZGV4LFxuXHRcdFx0XHRcdHVybHM6IHVybHMsXG5cdFx0XHRcdFx0aW5kaWNhdG9yOiAnbnVtYmVyJyxcblx0XHRcdFx0XHRsb29wOiBmYWxzZSxcblx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0XHRcdCAgICAvLyDkvb/nlKjnrq3lpLTlh73mlbDvvIznu6fmib/lpJblsYIgdGhpc1xuXHRcdFx0XHRcdCAgICBpZiAodGhpcy4kcmVmcy5yZW1hcmtJbnB1dCkge1xuXHRcdFx0XHRcdCAgICAgICAgdGhpcy4kcmVmcy5yZW1hcmtJbnB1dC5mb2N1cygpO1xuXHRcdFx0XHRcdCAgICB9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRza2lwVG9Vc2VyRGV0YWlsKGlkKSB7XG5cblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdHVybDogXCIvcGFnZXMvdXNlckRldGFpbC91c2VyRGV0YWlsP2lkPVwiICsgaWRcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRvcGVuSW5wdXQoKSB7XHJcblx0XHRcdCAgdW5pLiRlbWl0KCdvcGVuSW5wdXQnLCB7XHJcblx0XHRcdCAgICBwb3N0SWQ6IHRoaXMucG9zdElkLFxyXG5cdFx0XHQgICAgcGFyZW50SWQ6IHRoaXMucGFyZW50Q29tbWVudC5pZCxcclxuXHRcdFx0ICAgIGZpbGVMaXN0OiB0aGlzLmZpbGVMaXN0LFxyXG5cdFx0XHQgICAgbWVkaWFGbGFnOiB0aGlzLm1lZGlhRmxhZyxcclxuXHRcdFx0ICAgIHJlbWFyazogdGhpcy5yZW1hcmtcclxuXHRcdFx0ICB9KVxyXG5cdFx0XHRcclxuXHRcdFx0ICBpZiAodGhpcy5pbnB1dFBvcHVwKSB7XHJcblx0XHRcdCAgICB0aGlzLmlucHV0UG9wdXAuc2hvdygnc2xpZGUtaW4tYm90dG9tJywgNjAwKVxyXG5cdFx0XHQgIH1cclxuXHRcdFx0fSxcblx0XHRcdGNoaWxkQ29tbWVudCgpIHtcclxuXHRcdFx0ICBjb25zdCBjb250ZW50ID0gdGhpcy5yZW1hcmsgPyB0aGlzLnJlbWFyay50cmltKCkgOiAnJ1xyXG5cdFx0XHQgIGNvbnN0IGhhc0ZpbGUgPSBBcnJheS5pc0FycmF5KHRoaXMuZmlsZUxpc3QpICYmIHRoaXMuZmlsZUxpc3QubGVuZ3RoID4gMFxyXG5cdFx0XHRcclxuXHRcdFx0ICBpZiAoIWNvbnRlbnQgJiYgIWhhc0ZpbGUpIHtcclxuXHRcdFx0ICAgIHJldHVyblxyXG5cdFx0XHQgIH1cclxuXHRcdFx0XHJcblx0XHRcdCAgbGV0IGRhdGEgPSB7XHJcblx0XHRcdCAgICBwb3N0SWQ6IHRoaXMucG9zdElkLFxyXG5cdFx0XHQgICAgcGFyZW50SWQ6IHRoaXMucGFyZW50Q29tbWVudC5pZCxcclxuXHRcdFx0ICAgIGNvbW1lbnQ6IGNvbnRlbnQsXHJcblx0XHRcdCAgICBmaWxlVHlwZTogdGhpcy5tZWRpYUZsYWcgPT09IDAgPyBudWxsIDogdGhpcy5tZWRpYUZsYWcgPT09IDEgPyAnaW1hZ2UnIDogJ3ZpZGVvJyxcclxuXHRcdFx0ICAgIGZpbGVOYW1lOiB0aGlzLm1lZGlhRmxhZyA9PT0gMFxyXG5cdFx0XHQgICAgICA/IG51bGxcclxuXHRcdFx0ICAgICAgOiB0aGlzLm1lZGlhRmxhZyA9PT0gMVxyXG5cdFx0XHQgICAgICAgID8gdGhpcy5tZXJnZVN0cigpXHJcblx0XHRcdCAgICAgICAgOiB0aGlzLmZpbGVMaXN0WzBdXHJcblx0XHRcdCAgICAgICAgICA/IHRoaXMuZmlsZUxpc3RbMF0uZmlsZU5hbWVcclxuXHRcdFx0ICAgICAgICAgIDogbnVsbCxcclxuXHRcdFx0ICAgIGNvdmVyOiB0aGlzLm1lZGlhRmxhZyA9PT0gMiAmJiB0aGlzLmZpbGVMaXN0WzBdXHJcblx0XHRcdCAgICAgID8gdGhpcy5maWxlTGlzdFswXS5jb3ZlclxyXG5cdFx0XHQgICAgICA6IG51bGxcclxuXHRcdFx0ICB9XHJcblx0XHRcdFxyXG5cdFx0XHQgIGNvbW1lbnQoZGF0YSwge30pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0ICAgIGNvbnN0IGFkZGVkID0gdGhpcy5hZGRDaGlsZENvbW1lbnRPbmNlKHJlcywgJ3Vuc2hpZnQnKVxyXG5cdFx0XHRcclxuXHRcdFx0ICAgIHRoaXMucmVtYXJrID0gJydcclxuXHRcdFx0ICAgIHRoaXMuZmlsZUxpc3QgPSBbXVxyXG5cdFx0XHQgICAgdGhpcy5tZWRpYUZsYWcgPSAwXHJcblx0XHRcdFxyXG5cdFx0XHQgICAgaWYgKCFhZGRlZCkge1xyXG5cdFx0XHQgICAgICByZXR1cm5cclxuXHRcdFx0ICAgIH1cclxuXHRcdFx0XHJcblx0XHRcdCAgICB0aGlzLiRmb3JjZVVwZGF0ZSgpXHJcblx0XHRcdFxyXG5cdFx0XHQgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHQgICAgICB0aGlzLiRmb3JjZVVwZGF0ZSgpXHJcblx0XHRcdFxyXG5cdFx0XHQgICAgICB1bmkucGFnZVNjcm9sbFRvKHtcclxuXHRcdFx0ICAgICAgICBzY3JvbGxUb3A6IDAsXHJcblx0XHRcdCAgICAgICAgZHVyYXRpb246IDMwMFxyXG5cdFx0XHQgICAgICB9KVxyXG5cdFx0XHQgICAgfSlcclxuXHRcdFx0ICB9KVxyXG5cdFx0XHR9LFxyXG5cblx0XHRcdG1lcmdlU3RyKCl7XG5cdFx0XHRcdGNvbnN0IHN0ciA9IHRoaXMuZmlsZUxpc3QubWFwKGl0ZW0gPT4gaXRlbS5maWxlTmFtZSkuam9pbihcIixcIilcblx0XHRcdFx0cmV0dXJuIHN0clxuXHRcdFx0fSxcblx0XHRcdHJlc2V0KCkge1xyXG5cdFx0XHQgIHRoaXMucG9zdElkID0gbnVsbFxyXG5cdFx0XHQgIHRoaXMuY3VycmVudCA9IDFcclxuXHRcdFx0ICB0aGlzLnNpemUgPSA1XHJcblx0XHRcdCAgdGhpcy5wYWdlcyA9IDBcclxuXHRcdFx0ICB0aGlzLmZsYWcgPSB0cnVlXHJcblx0XHRcdCAgdGhpcy5wYXJlbnRDb21tZW50ID0ge31cclxuXHRcdFx0ICB0aGlzLmNoaWxkQ29tbWVudExpc3QgPSBbXVxyXG5cdFx0XHRcclxuXHRcdFx0ICB0aGlzLmZpbGVMaXN0ID0gW11cclxuXHRcdFx0ICB0aGlzLm1lZGlhRmxhZyA9IDBcclxuXHRcdFx0ICB0aGlzLnJlbWFyayA9ICcnXHJcblx0XHRcdFxyXG5cdFx0XHQgIC8vIOmHjeimge+8mumHjee9ruW3sua4suafkyBrZXlcclxuXHRcdFx0ICB0aGlzLnJlbmRlcmVkQ29tbWVudEtleUxpc3QgPSBbXVxyXG5cdFx0XHR9LFxyXG5cblx0XHR9LFxuXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHBvc3RJZDogbnVsbCxcblx0XHRcdFx0Y3VycmVudDogMSxcblx0XHRcdFx0c2l6ZTogNSxcblx0XHRcdFx0cGFnZXM6IDAsXG5cdFx0XHRcdGZsYWc6IHRydWUsXG5cdFx0XHRcdHBhcmVudENvbW1lbnQ6IHt9LFxuXHRcdFx0XHRjaGlsZENvbW1lbnRMaXN0OiBbXSxcblx0XHRcdFx0ZGV2aWNlOiBudWxsLFxuXHRcdFx0XHRzdHlsZXM6IHt9LFxuXHRcdFx0XHRpbWdMaXN0OiBbXSxcblx0XHRcdFx0ZmlsZUxpc3Q6W10sXG5cdFx0XHRcdG1lZGlhRmxhZzowLFxuXHRcdFx0XHRuZXdDb21tZW50SWRMaXN0OltdLFxyXG5cdFx0XHRcdHJlbmRlcmVkQ29tbWVudEtleUxpc3Q6IFtdLFxuXHRcdFx0XHRyZW1hcms6JycsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOifor7Tor7TnnIvms5XlkKcnLFxuXHRcdFx0XHRpbnB1dFBvcHVwOm51bGxcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cblxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///47\n");

/***/ }),
/* 48 */
/*!*****************************************************!*\
  !*** D:/毕设项目/baf-client/baf/utils/device/device.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getDeviceInfo = getDeviceInfo;\nvar deviceInfo = null;\nfunction getDeviceInfo() {\n  if (deviceInfo) return deviceInfo;\n  var info = uni.getSystemInfoSync();\n  var windowWidth = info.windowWidth,\n    windowHeight = info.windowHeight,\n    screenWidth = info.screenWidth,\n    screenHeight = info.screenHeight,\n    statusBarHeight = info.statusBarHeight,\n    platform = info.platform;\n\n  // 计算 rpx 转换比例\n  var rpxRatio = 750 / windowWidth;\n  deviceInfo = {\n    // 屏幕尺寸\n    windowWidth: windowWidth,\n    windowHeight: windowHeight,\n    screenWidth: screenWidth,\n    screenHeight: screenHeight,\n    // 状态栏高度\n    statusBarHeight: statusBarHeight,\n    // 平台\n    platform: platform,\n    // 计算比例\n    rpxRatio: rpxRatio,\n    // 常用计算函数\n    rpxToPx: function rpxToPx(rpx) {\n      return Math.floor(rpx / rpxRatio);\n    },\n    pxToRpx: function pxToRpx(px) {\n      return Math.floor(px * rpxRatio);\n    },\n    // 百分比计算\n    percentToPx: function percentToPx(percent) {\n      var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : windowWidth;\n      return Math.floor(base * percent / 100);\n    },\n    // 适配不同屏幕\n    adaptivePx: function adaptivePx(designPx) {\n      var designWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 750;\n      return Math.floor(designPx * windowWidth / designWidth);\n    }\n  };\n  return deviceInfo;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvZGV2aWNlL2RldmljZS5qcyJdLCJuYW1lcyI6WyJkZXZpY2VJbmZvIiwiZ2V0RGV2aWNlSW5mbyIsImluZm8iLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJzdGF0dXNCYXJIZWlnaHQiLCJwbGF0Zm9ybSIsInJweFJhdGlvIiwicnB4VG9QeCIsInJweCIsIk1hdGgiLCJmbG9vciIsInB4VG9ScHgiLCJweCIsInBlcmNlbnRUb1B4IiwicGVyY2VudCIsImJhc2UiLCJhZGFwdGl2ZVB4IiwiZGVzaWduUHgiLCJkZXNpZ25XaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHLElBQUk7QUFFZCxTQUFTQyxhQUFhLEdBQUc7RUFDOUIsSUFBSUQsVUFBVSxFQUFFLE9BQU9BLFVBQVU7RUFFakMsSUFBTUUsSUFBSSxHQUFHQyxHQUFHLENBQUNDLGlCQUFpQixFQUFFO0VBQ3BDLElBQVFDLFdBQVcsR0FBeUVILElBQUksQ0FBeEZHLFdBQVc7SUFBRUMsWUFBWSxHQUEyREosSUFBSSxDQUEzRUksWUFBWTtJQUFFQyxXQUFXLEdBQThDTCxJQUFJLENBQTdESyxXQUFXO0lBQUVDLFlBQVksR0FBZ0NOLElBQUksQ0FBaERNLFlBQVk7SUFBRUMsZUFBZSxHQUFlUCxJQUFJLENBQWxDTyxlQUFlO0lBQUVDLFFBQVEsR0FBS1IsSUFBSSxDQUFqQlEsUUFBUTs7RUFFdkY7RUFDQSxJQUFNQyxRQUFRLEdBQUcsR0FBRyxHQUFHTixXQUFXO0VBRWxDTCxVQUFVLEdBQUc7SUFDWDtJQUNBSyxXQUFXLEVBQVhBLFdBQVc7SUFDWEMsWUFBWSxFQUFaQSxZQUFZO0lBQ1pDLFdBQVcsRUFBWEEsV0FBVztJQUNYQyxZQUFZLEVBQVpBLFlBQVk7SUFFWjtJQUNBQyxlQUFlLEVBQWZBLGVBQWU7SUFFZjtJQUNBQyxRQUFRLEVBQVJBLFFBQVE7SUFFUjtJQUNBQyxRQUFRLEVBQVJBLFFBQVE7SUFFUjtJQUNBQyxPQUFPLG1CQUFDQyxHQUFHLEVBQUU7TUFDWCxPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0YsR0FBRyxHQUFHRixRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUVESyxPQUFPLG1CQUFDQyxFQUFFLEVBQUU7TUFDVixPQUFPSCxJQUFJLENBQUNDLEtBQUssQ0FBQ0UsRUFBRSxHQUFHTixRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUVEO0lBQ0FPLFdBQVcsdUJBQUNDLE9BQU8sRUFBc0I7TUFBQSxJQUFwQkMsSUFBSSx1RUFBR2YsV0FBVztNQUNyQyxPQUFPUyxJQUFJLENBQUNDLEtBQUssQ0FBQ0ssSUFBSSxHQUFHRCxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBQ3pDLENBQUM7SUFFRDtJQUNBRSxVQUFVLHNCQUFDQyxRQUFRLEVBQXFCO01BQUEsSUFBbkJDLFdBQVcsdUVBQUcsR0FBRztNQUNwQyxPQUFPVCxJQUFJLENBQUNDLEtBQUssQ0FBQ08sUUFBUSxHQUFHakIsV0FBVyxHQUFHa0IsV0FBVyxDQUFDO0lBQ3pEO0VBQ0YsQ0FBQztFQUVELE9BQU92QixVQUFVO0FBQ25CIiwiZmlsZSI6IjQ4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGRldmljZUluZm8gPSBudWxsXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXZpY2VJbmZvKCkge1xuICBpZiAoZGV2aWNlSW5mbykgcmV0dXJuIGRldmljZUluZm9cbiAgXG4gIGNvbnN0IGluZm8gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxuICBjb25zdCB7IHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQsIHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQsIHN0YXR1c0JhckhlaWdodCwgcGxhdGZvcm0gfSA9IGluZm9cbiAgXG4gIC8vIOiuoeeulyBycHgg6L2s5o2i5q+U5L6LXG4gIGNvbnN0IHJweFJhdGlvID0gNzUwIC8gd2luZG93V2lkdGhcbiAgXG4gIGRldmljZUluZm8gPSB7XG4gICAgLy8g5bGP5bmV5bC65a+4XG4gICAgd2luZG93V2lkdGgsXG4gICAgd2luZG93SGVpZ2h0LFxuICAgIHNjcmVlbldpZHRoLCBcbiAgICBzY3JlZW5IZWlnaHQsXG4gICAgXG4gICAgLy8g54q25oCB5qCP6auY5bqmXG4gICAgc3RhdHVzQmFySGVpZ2h0LFxuICAgIFxuICAgIC8vIOW5s+WPsFxuICAgIHBsYXRmb3JtLFxuICAgIFxuICAgIC8vIOiuoeeul+avlOS+i1xuICAgIHJweFJhdGlvLFxuICAgIFxuICAgIC8vIOW4uOeUqOiuoeeul+WHveaVsFxuICAgIHJweFRvUHgocnB4KSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihycHggLyBycHhSYXRpbylcbiAgICB9LFxuICAgIFxuICAgIHB4VG9ScHgocHgpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKHB4ICogcnB4UmF0aW8pXG4gICAgfSxcbiAgICBcbiAgICAvLyDnmb7liIbmr5TorqHnrpdcbiAgICBwZXJjZW50VG9QeChwZXJjZW50LCBiYXNlID0gd2luZG93V2lkdGgpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGJhc2UgKiBwZXJjZW50IC8gMTAwKVxuICAgIH0sXG4gICAgXG4gICAgLy8g6YCC6YWN5LiN5ZCM5bGP5bmVXG4gICAgYWRhcHRpdmVQeChkZXNpZ25QeCwgZGVzaWduV2lkdGggPSA3NTApIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGRlc2lnblB4ICogd2luZG93V2lkdGggLyBkZXNpZ25XaWR0aClcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBkZXZpY2VJbmZvXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///48\n");

/***/ }),
/* 49 */
/*!*************************************************!*\
  !*** D:/毕设项目/baf-client/baf/utils/blog/blog.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 11);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.uploadBlog = exports.likedHandle = exports.gainPostDetail = exports.gainPostComment = exports.commentLikedHandle = exports.comment = exports.collectHandle = exports.childCommentList = exports.askPostList = void 0;\nvar _request = _interopRequireDefault(__webpack_require__(/*! @/utils/request.js */ 19));\nvar _index = _interopRequireDefault(__webpack_require__(/*! @/config/index.js */ 26));\nvar uploadBlog = function uploadBlog() {\n  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return _request.default.post(\"server/blog/uploadBlog\", data, config);\n};\nexports.uploadBlog = uploadBlog;\nvar askPostList = function askPostList() {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return _request.default.get(\"server/blog/postList\", params, config);\n};\nexports.askPostList = askPostList;\nvar likedHandle = function likedHandle() {\n  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return _request.default.post(\"server/blog/likedHandle\", data, config);\n};\nexports.likedHandle = likedHandle;\nvar collectHandle = function collectHandle() {\n  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return _request.default.post('server/blog/collectHandle', data, config);\n};\nexports.collectHandle = collectHandle;\nvar gainPostDetail = function gainPostDetail() {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return _request.default.get('server/blog/gainPostDetail', params, config);\n};\nexports.gainPostDetail = gainPostDetail;\nvar gainPostComment = function gainPostComment() {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return _request.default.get('server/blog/gainPostComment', params, config);\n};\nexports.gainPostComment = gainPostComment;\nvar commentLikedHandle = function commentLikedHandle() {\n  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return _request.default.post('server/blog/commentLikedHandle', data, config);\n};\nexports.commentLikedHandle = commentLikedHandle;\nvar childCommentList = function childCommentList() {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return _request.default.get('server/blog/childCommentList', params, config);\n};\nexports.childCommentList = childCommentList;\nvar comment = function comment() {\n  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return _request.default.post('server/blog/comment', data, config);\n};\nexports.comment = comment;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvYmxvZy9ibG9nLmpzIl0sIm5hbWVzIjpbInVwbG9hZEJsb2ciLCJkYXRhIiwiY29uZmlnIiwiaHR0cCIsInBvc3QiLCJhc2tQb3N0TGlzdCIsInBhcmFtcyIsImdldCIsImxpa2VkSGFuZGxlIiwiY29sbGVjdEhhbmRsZSIsImdhaW5Qb3N0RGV0YWlsIiwiZ2FpblBvc3RDb21tZW50IiwiY29tbWVudExpa2VkSGFuZGxlIiwiY2hpbGRDb21tZW50TGlzdCIsImNvbW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBR08sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQVUsR0FBd0I7RUFBQSxJQUFwQkMsSUFBSSx1RUFBQyxDQUFDLENBQUM7RUFBQSxJQUFDQyxNQUFNLHVFQUFDLENBQUMsQ0FBQztFQUMzQyxPQUFPQyxnQkFBSSxDQUFDQyxJQUFJLENBQ2Ysd0JBQXdCLEVBQ3hCSCxJQUFJLEVBQ0pDLE1BQU0sQ0FDTjtBQUNGLENBQUM7QUFBQTtBQUdNLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFXLEdBQTBCO0VBQUEsSUFBdEJDLE1BQU0sdUVBQUMsQ0FBQyxDQUFDO0VBQUEsSUFBQ0osTUFBTSx1RUFBQyxDQUFDLENBQUM7RUFDOUMsT0FBT0MsZ0JBQUksQ0FBQ0ksR0FBRyxDQUNkLHNCQUFzQixFQUN0QkQsTUFBTSxFQUNOSixNQUFNLENBQ047QUFDRixDQUFDO0FBQUE7QUFFTSxJQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxHQUE0QjtFQUFBLElBQXhCUCxJQUFJLHVFQUFHLENBQUMsQ0FBQztFQUFBLElBQUNDLE1BQU0sdUVBQUcsQ0FBQyxDQUFDO0VBQ2hELE9BQU9DLGdCQUFJLENBQUNDLElBQUksQ0FDZix5QkFBeUIsRUFDekJILElBQUksRUFDSkMsTUFBTSxDQUNOO0FBQ0YsQ0FBQztBQUFBO0FBRU0sSUFBTU8sYUFBYSxHQUFHLFNBQWhCQSxhQUFhLEdBQThCO0VBQUEsSUFBMUJSLElBQUksdUVBQUcsQ0FBQyxDQUFDO0VBQUEsSUFBQ0MsTUFBTSx1RUFBRyxDQUFDLENBQUM7RUFDbEQsT0FBT0MsZ0JBQUksQ0FBQ0MsSUFBSSxDQUNmLDJCQUEyQixFQUMzQkgsSUFBSSxFQUNKQyxNQUFNLENBQ047QUFDRixDQUFDO0FBQUE7QUFFTSxJQUFNUSxjQUFjLEdBQUcsU0FBakJBLGNBQWMsR0FBZ0M7RUFBQSxJQUE1QkosTUFBTSx1RUFBRyxDQUFDLENBQUM7RUFBQSxJQUFDSixNQUFNLHVFQUFHLENBQUMsQ0FBQztFQUNyRCxPQUFPQyxnQkFBSSxDQUFDSSxHQUFHLENBQ2QsNEJBQTRCLEVBQzVCRCxNQUFNLEVBQ05KLE1BQU0sQ0FDTjtBQUNGLENBQUM7QUFBQTtBQUVNLElBQU1TLGVBQWUsR0FBRyxTQUFsQkEsZUFBZSxHQUFpQztFQUFBLElBQTdCTCxNQUFNLHVFQUFHLENBQUMsQ0FBQztFQUFBLElBQUVKLE1BQU0sdUVBQUcsQ0FBQyxDQUFDO0VBQ3ZELE9BQU9DLGdCQUFJLENBQUNJLEdBQUcsQ0FDZCw2QkFBNkIsRUFDN0JELE1BQU0sRUFDTkosTUFBTSxDQUNOO0FBQ0YsQ0FBQztBQUFBO0FBRU0sSUFBTVUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQixHQUE4QjtFQUFBLElBQTFCWCxJQUFJLHVFQUFHLENBQUMsQ0FBQztFQUFBLElBQUVDLE1BQU0sdUVBQUcsQ0FBQyxDQUFDO0VBQ3hELE9BQU9DLGdCQUFJLENBQUNDLElBQUksQ0FDZixnQ0FBZ0MsRUFDaENILElBQUksRUFDSkMsTUFBTSxDQUNOO0FBQ0YsQ0FBQztBQUFBO0FBRU0sSUFBTVcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQixHQUErQjtFQUFBLElBQTNCUCxNQUFNLHVFQUFHLENBQUMsQ0FBQztFQUFBLElBQUNKLE1BQU0sdUVBQUcsQ0FBQyxDQUFDO0VBQ3ZELE9BQU9DLGdCQUFJLENBQUNJLEdBQUcsQ0FDZCw4QkFBOEIsRUFDOUJELE1BQU0sRUFDTkosTUFBTSxDQUNOO0FBQ0YsQ0FBQztBQUFBO0FBRU0sSUFBTVksT0FBTyxHQUFHLFNBQVZBLE9BQU8sR0FBOEI7RUFBQSxJQUExQmIsSUFBSSx1RUFBRyxDQUFDLENBQUM7RUFBQSxJQUFDQyxNQUFNLHVFQUFHLENBQUMsQ0FBQztFQUM1QyxPQUFPQyxnQkFBSSxDQUFDQyxJQUFJLENBQ2YscUJBQXFCLEVBQ3JCSCxJQUFJLEVBQ0pDLE1BQU0sQ0FDTjtBQUNGLENBQUM7QUFBQSIsImZpbGUiOiI0OS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwIGZyb20gXCJAL3V0aWxzL3JlcXVlc3QuanNcIjtcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tIFwiQC9jb25maWcvaW5kZXguanNcIlxyXG5pbXBvcnQgY29uZmlnIGZyb20gXCJAL2NvbmZpZy9pbmRleC5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwbG9hZEJsb2cgPSAoZGF0YT17fSxjb25maWc9e30pPT57XHJcblx0cmV0dXJuIGh0dHAucG9zdChcclxuXHRcdFwic2VydmVyL2Jsb2cvdXBsb2FkQmxvZ1wiLFxyXG5cdFx0ZGF0YSxcclxuXHRcdGNvbmZpZ1xyXG5cdClcclxufVxyXG5cclxuXHRcclxuZXhwb3J0IGNvbnN0IGFza1Bvc3RMaXN0ID0gKHBhcmFtcz17fSxjb25maWc9e30pPT57XHJcblx0cmV0dXJuIGh0dHAuZ2V0KFxyXG5cdFx0XCJzZXJ2ZXIvYmxvZy9wb3N0TGlzdFwiLFxyXG5cdFx0cGFyYW1zLFxyXG5cdFx0Y29uZmlnXHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGlrZWRIYW5kbGUgPSAoZGF0YSA9IHt9LGNvbmZpZyA9IHt9KT0+e1xyXG5cdHJldHVybiBodHRwLnBvc3QoXHJcblx0XHRcInNlcnZlci9ibG9nL2xpa2VkSGFuZGxlXCIsXHJcblx0XHRkYXRhLFxyXG5cdFx0Y29uZmlnXHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29sbGVjdEhhbmRsZSA9IChkYXRhID0ge30sY29uZmlnID0ge30pID0+IHtcclxuXHRyZXR1cm4gaHR0cC5wb3N0KFxyXG5cdFx0J3NlcnZlci9ibG9nL2NvbGxlY3RIYW5kbGUnLFxyXG5cdFx0ZGF0YSxcclxuXHRcdGNvbmZpZ1xyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdhaW5Qb3N0RGV0YWlsID0gKHBhcmFtcyA9IHt9LGNvbmZpZyA9IHt9KSA9PiB7XHJcblx0cmV0dXJuIGh0dHAuZ2V0KFxyXG5cdFx0J3NlcnZlci9ibG9nL2dhaW5Qb3N0RGV0YWlsJyxcclxuXHRcdHBhcmFtcyxcclxuXHRcdGNvbmZpZ1xyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdhaW5Qb3N0Q29tbWVudCA9IChwYXJhbXMgPSB7fSwgY29uZmlnID0ge30pID0+IHtcclxuXHRyZXR1cm4gaHR0cC5nZXQoXHJcblx0XHQnc2VydmVyL2Jsb2cvZ2FpblBvc3RDb21tZW50JyxcclxuXHRcdHBhcmFtcyxcclxuXHRcdGNvbmZpZ1xyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1lbnRMaWtlZEhhbmRsZSA9IChkYXRhID0ge30sIGNvbmZpZyA9IHt9KSA9PntcclxuXHRyZXR1cm4gaHR0cC5wb3N0KFxyXG5cdFx0J3NlcnZlci9ibG9nL2NvbW1lbnRMaWtlZEhhbmRsZScsXHJcblx0XHRkYXRhLFxyXG5cdFx0Y29uZmlnXHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hpbGRDb21tZW50TGlzdCA9IChwYXJhbXMgPSB7fSxjb25maWcgPSB7fSkgPT57XHJcblx0cmV0dXJuIGh0dHAuZ2V0KFxyXG5cdFx0J3NlcnZlci9ibG9nL2NoaWxkQ29tbWVudExpc3QnLCBcclxuXHRcdHBhcmFtcyxcclxuXHRcdGNvbmZpZ1xyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1lbnQgPSAoZGF0YSA9IHt9LGNvbmZpZyA9IHt9KSA9PiB7XHJcblx0cmV0dXJuIGh0dHAucG9zdChcclxuXHRcdCdzZXJ2ZXIvYmxvZy9jb21tZW50JyxcclxuXHRcdGRhdGEsXHJcblx0XHRjb25maWdcclxuXHQpXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///49\n");

/***/ })
/******/ ]);