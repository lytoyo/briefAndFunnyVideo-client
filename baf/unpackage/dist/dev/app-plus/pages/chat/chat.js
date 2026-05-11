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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************************************************************!*\
  !*** D:/毕设项目/baf-client/baf/main.js?{"page":"pages%2Fchat%2Fchat"} ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_chat_chat_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/chat/chat.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_chat_chat_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_chat_chat_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/chat/chat'\n        _pages_chat_chat_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_chat_chat_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBNEQ7QUFDNUQsUUFBUSx5RUFBRztBQUNYLFFBQVEseUVBQUc7QUFDWCxRQUFRLHlFQUFHO0FBQ1gsZ0JBQWdCLHlFQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9jaGF0L2NoYXQubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvY2hhdC9jaGF0J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
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
/* 5 */
/*!***************************************************************!*\
  !*** D:/毕设项目/baf-client/baf/pages/chat/chat.nvue?mpType=page ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chat_nvue_vue_type_template_id_d5c8bdb0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.nvue?vue&type=template&id=d5c8bdb0&scoped=true&mpType=page */ 6);\n/* harmony import */ var _chat_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chat.nvue?vue&type=style&index=0&id=d5c8bdb0&scoped=true&lang=css&mpType=page */ 30).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chat.nvue?vue&type=style&index=0&id=d5c8bdb0&scoped=true&lang=css&mpType=page */ 30).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chat_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chat_nvue_vue_type_template_id_d5c8bdb0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chat_nvue_vue_type_template_id_d5c8bdb0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"d5c8bdb0\",\n  \"f9f414bc\",\n  false,\n  _chat_nvue_vue_type_template_id_d5c8bdb0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/chat/chat.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHlGQUFpRjtBQUNySSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMseUZBQWlGO0FBQzFJOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9jaGF0Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDVjOGJkYjAmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NoYXQubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaGF0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2NoYXQubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ1YzhiZGIwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2NoYXQubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ1YzhiZGIwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZDVjOGJkYjBcIixcbiAgXCJmOWY0MTRiY1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9jaGF0L2NoYXQubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*********************************************************************************************************!*\
  !*** D:/毕设项目/baf-client/baf/pages/chat/chat.nvue?vue&type=template&id=d5c8bdb0&scoped=true&mpType=page ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_nvue_vue_type_template_id_d5c8bdb0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chat.nvue?vue&type=template&id=d5c8bdb0&scoped=true&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_nvue_vue_type_template_id_d5c8bdb0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_nvue_vue_type_template_id_d5c8bdb0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_nvue_vue_type_template_id_d5c8bdb0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_nvue_vue_type_template_id_d5c8bdb0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/毕设项目/baf-client/baf/pages/chat/chat.nvue?vue&type=template&id=d5c8bdb0&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: ["chat-container"] }, [
    _c("view", { staticClass: ["status-bar-placeholder"] }),
    _c("view", { staticClass: ["navigation-bar"] }, [
      _c(
        "view",
        {
          staticClass: ["return-block"],
          on: {
            click: function ($event) {
              _vm.returnBack()
            },
          },
        },
        [
          _c(
            "u-text",
            {
              staticClass: ["return-icon"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [_vm._v("‹")]
          ),
        ]
      ),
      _c("view", { staticClass: ["navigation-bar-userName-block"] }, [
        _c(
          "u-text",
          {
            staticClass: ["user-name"],
            appendAsTree: true,
            attrs: { append: "tree" },
          },
          [_vm._v(_vm._s(_vm.toUserVo.userName || "聊天中"))]
        ),
      ]),
      _c("view", { staticClass: ["setting-block"], on: { click: _vm.del } }, [
        _c(
          "u-text",
          {
            staticClass: ["setting-icon"],
            appendAsTree: true,
            attrs: { append: "tree" },
          },
          [_vm._v("···")]
        ),
      ]),
    ]),
    _c(
      "list",
      {
        staticClass: ["content-area"],
        attrs: { showScrollbar: false, loadmoreoffset: 100 },
      },
      [
        _c(
          "refresh",
          {
            staticClass: ["refresh-box"],
            attrs: { display: _vm.refreshing ? "show" : "hide" },
            on: { refresh: _vm.onRefresh },
          },
          [
            _c(
              "u-text",
              {
                staticClass: ["refresh-text"],
                appendAsTree: true,
                attrs: { append: "tree" },
              },
              [_vm._v("正在加载历史消息...")]
            ),
          ]
        ),
        _vm._l(_vm.chatMessage.chatList, function (item, index) {
          return _c(
            "cell",
            {
              key: item.id || index,
              ref: "msg_" + item.id,
              refInFor: true,
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [
              item.fromUserId === _vm.otherId && item.type === "private"
                ? _c("view", { staticClass: ["status-block"] }, [
                    _c(
                      "view",
                      { staticClass: ["user-avatar-block"] },
                      [
                        item.fromUserVo.avatar
                          ? _c("u-image", {
                              staticClass: ["image-block"],
                              attrs: { src: item.fromUserVo.avatar },
                            })
                          : _vm._e(),
                      ],
                      1
                    ),
                    _c(
                      "view",
                      { staticClass: ["user-name-chat-message-block"] },
                      [
                        item.data.fileType === "image"
                          ? _c(
                              "view",
                              { staticClass: ["image-content-block"] },
                              [
                                _c("u-image", {
                                  staticClass: ["message-image"],
                                  attrs: {
                                    src: item.data.fileUrl,
                                    mode: "widthFix",
                                  },
                                }),
                              ],
                              1
                            )
                          : item.data.fileType === "video"
                          ? _c(
                              "view",
                              { staticClass: ["video-content-block"] },
                              [
                                _c("u-video", {
                                  staticClass: ["message-video"],
                                  attrs: { src: item.data.fileUrl },
                                }),
                              ],
                              1
                            )
                          : _c("view", { staticClass: ["bubble-container"] }, [
                              _c(
                                "view",
                                {
                                  staticClass: [
                                    "bubble-content",
                                    "other-bubble-content",
                                  ],
                                },
                                [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["message-text"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [_vm._v(_vm._s(item.data.content))]
                                  ),
                                ]
                              ),
                            ]),
                      ]
                    ),
                  ])
                : item.fromUserId === _vm.userId && item.type === "private"
                ? _c("view", { staticClass: ["self-status-block"] }, [
                    _c(
                      "view",
                      { staticClass: ["self-user-name-chat-message-block"] },
                      [
                        item.data.fileType === "image"
                          ? _c(
                              "view",
                              { staticClass: ["image-content-block"] },
                              [
                                _c("u-image", {
                                  staticClass: ["message-image"],
                                  attrs: {
                                    src: item.data.fileUrl,
                                    mode: "widthFix",
                                  },
                                }),
                              ],
                              1
                            )
                          : _c("view", { staticClass: ["bubble-container"] }, [
                              _c(
                                "view",
                                {
                                  staticClass: [
                                    "bubble-content",
                                    "my-bubble-content",
                                  ],
                                },
                                [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["message-text"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [_vm._v(_vm._s(item.data.content))]
                                  ),
                                ]
                              ),
                            ]),
                      ]
                    ),
                    _c(
                      "view",
                      { staticClass: ["self-user-avatar-block"] },
                      [
                        item.fromUserVo.avatar
                          ? _c("u-image", {
                              staticClass: ["image-block"],
                              attrs: { src: item.fromUserVo.avatar },
                            })
                          : _vm._e(),
                      ],
                      1
                    ),
                  ])
                : _vm._e(),
            ]
          )
        }),
        _c("cell", { appendAsTree: true, attrs: { append: "tree" } }, [
          _c("view", { ref: "bottomAnchor", staticStyle: { height: "20rpx" } }),
        ]),
      ],
      2
    ),
    _c("view", { staticClass: ["input-send-file-block"] }, [
      _c(
        "view",
        { staticClass: ["input-block"] },
        [
          _c("u-input", {
            staticClass: ["input-field"],
            attrs: {
              cursorSpacing: 20,
              placeholder: "请输入内容...",
              value: _vm.content,
            },
            on: {
              confirm: _vm.sendMessage,
              input: function ($event) {
                _vm.content = $event.detail.value
              },
            },
          }),
        ],
        1
      ),
      _c(
        "view",
        { staticClass: ["send-block"], on: { click: _vm.sendMessage } },
        [
          _c("u-image", {
            staticClass: ["send-icon"],
            attrs: {
              src:
                _vm.content.trim() === ""
                  ? "/static/send.png"
                  : "/static/sendable.png",
            },
          }),
        ],
        1
      ),
      _c(
        "view",
        { staticClass: ["file-block"], on: { click: _vm.chooseFile } },
        [
          _c("u-image", {
            staticClass: ["file-icon"],
            attrs: { src: "/static/fileChoose.png" },
          }),
        ],
        1
      ),
    ]),
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!***************************************************************************************!*\
  !*** D:/毕设项目/baf-client/baf/pages/chat/chat.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chat.nvue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThhLENBQWdCLDBkQUFHLEVBQUMiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaGF0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoYXQubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/毕设项目/baf-client/baf/pages/chat/chat.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 11);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 12));\nvar _message = __webpack_require__(/*! @/utils/message/message */ 18);\nvar _index = _interopRequireDefault(__webpack_require__(/*! @/store/localStore/index.js */ 27));\nvar _index2 = _interopRequireDefault(__webpack_require__(/*! @/store/message/index.js */ 29));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar dom = __webpack_provided_uni_dot_requireNativePlugin('dom'); // Nvue 滚动定位必须\nvar _default = {\n  data: function data() {\n    return {\n      otherId: null,\n      userId: null,\n      p2pId: null,\n      fromUserVo: {},\n      toUserVo: {},\n      chatMessage: {\n        chatList: []\n      },\n      current: 0,\n      newCount: 0,\n      size: 15,\n      content: '',\n      refreshing: false,\n      hasMoreMessage: true,\n      isReturn: false,\n      isSendMsg: false\n    };\n  },\n  onLoad: function onLoad(opt) {\n    uni.$on(\"chatMessage\", this.handleReceiveMessage);\n    this.userId = _index.default.getUserid();\n    if (opt.otherId) this.otherId = Number(opt.otherId);\n    if (opt.p2pId) this.p2pId = Number(opt.p2pId);\n    this.initChatMessageList();\n  },\n  onUnload: function onUnload() {\n    uni.$off('chatMessage', this.handleReceiveMessage);\n  },\n  methods: {\n    initChatMessageList: function initChatMessageList() {\n      var res = _index2.default.getChatWindowMessage(0, this.size, this.otherId);\n      this.chatMessage = res;\n      this.p2pId = res.p2pId || this.p2pId;\n      this.current = this.chatMessage.chatList.length;\n      if (this.chatMessage.chatList.length > 0) {\n        var firstMsg = this.chatMessage.chatList[0];\n        if (firstMsg.fromUserId === Number(this.userId)) {\n          this.fromUserVo = firstMsg.fromUserVo;\n          this.toUserVo = firstMsg.toUserVo;\n        } else {\n          this.fromUserVo = firstMsg.toUserVo;\n          this.toUserVo = firstMsg.fromUserVo;\n        }\n      }\n      this.scrollToBottom();\n      this.clearUnreadBadge();\n    },\n    clearUnreadBadge: function clearUnreadBadge() {\n      var _this = this;\n      // 假设你的 messageStore 中有一个获取当前会话未读数的方法\n      // 如果没有 getUnreadCount 方法，你需要去 store/message/index.js 里写一个\n      var unreadCount = 0;\n      if (_index2.default.getUnreadCount) {\n        unreadCount = _index2.default.getUnreadCount(this.p2pId || this.otherId);\n      } else {\n        // 兼容处理：如果没有单独获取未读数的方法，默认给个保底策略\n        // 建议去 store 完善逻辑\n        unreadCount = this.chatMessage.chatList.filter(function (msg) {\n          return !msg.isRead && msg.fromUserId !== _this.userId;\n        }).length || 0;\n      }\n      if (unreadCount > 0) {\n        // 1. 调用 store 方法，把当前 p2pId 的消息标记为已读\n        if (_index2.default.clearUnreadMessage) {\n          _index2.default.clearUnreadMessage(this.p2pId || this.otherId);\n        }\n\n        // 2. 触发全局事件，让 App.vue 把底部的 tabBar 气泡减掉对应的数量\n        uni.$emit('subMessageTabbarBadge', unreadCount);\n      }\n    },\n    // 下拉加载\n    onRefresh: function onRefresh() {\n      var _this2 = this;\n      if (this.refreshing || !this.hasMoreMessage) {\n        this.refreshing = false;\n        return;\n      }\n      this.refreshing = true;\n\n      // 记录当前最顶部的消息\n      var topMsg = this.chatMessage.chatList[0];\n      var params = {\n        p2pId: this.p2pId,\n        otherId: this.otherId,\n        current: this.chatMessage.chatList.length,\n        size: this.size\n      };\n      (0, _message.getHistoryChatMessage)(params).then(function (res) {\n        if (!res || res.length === 0) {\n          _this2.hasMoreMessage = false;\n        } else {\n          // 假设后端返回是时间正序\n          _this2.chatMessage.chatList = [].concat((0, _toConsumableArray2.default)(res), (0, _toConsumableArray2.default)(_this2.chatMessage.chatList));\n          _this2.current += res.length;\n          res.forEach(function (m) {\n            return _index2.default.saveChatMessage(m);\n          });\n\n          // Nvue 加载历史后的滚动锁定\n          if (topMsg) {\n            _this2.$nextTick(function () {\n              dom.scrollToElement(_this2.$refs['msg_' + topMsg.id][0], {\n                offset: 0,\n                animated: false\n              });\n            });\n          }\n        }\n      }).finally(function () {\n        _this2.refreshing = false;\n      });\n    },\n    sendMessage: function sendMessage() {\n      var _this3 = this;\n      if (this.isSendMsg) return;\n      this.isSendMsg = true;\n      if (this.content.trim() === '') return;\n      var data = {\n        id: Date.now(),\n        // 临时ID\n        type: 'private',\n        fromUserId: Number(this.userId),\n        toUserId: this.otherId,\n        fromUserVo: this.fromUserVo,\n        toUserVo: this.toUserVo,\n        p2pId: this.p2pId,\n        data: {\n          content: this.content\n        }\n      };\n      this.chatMessage.chatList.push(data);\n      this.newCount += 1;\n      uni.$webSocketManager.send(data);\n      this.content = '';\n      this.scrollToBottom();\n      setTimeout(function () {\n        _this3.isSendMsg = false;\n      }, 800);\n    },\n    handleReceiveMessage: function handleReceiveMessage(message) {\n      if (message.p2pId === this.p2pId) {\n        if (message.fromUserId === Number(this.userId)) return;\n        this.chatMessage.chatList.push(message);\n        this.newCount += 1;\n        this.scrollToBottom();\n        if (_index2.default.clearUnreadMessage) {\n          _index2.default.clearUnreadMessage(this.p2pId);\n        }\n        // 立刻把 App.vue 刚加上的 1 个红点减掉\n        uni.$emit('subMessageTabbarBadge', 1);\n      }\n    },\n    scrollToBottom: function scrollToBottom() {\n      var _this4 = this;\n      this.$nextTick(function () {\n        setTimeout(function () {\n          if (_this4.$refs.bottomAnchor) {\n            dom.scrollToElement(_this4.$refs.bottomAnchor, {\n              offset: 0,\n              animated: true\n            });\n          }\n        }, 100);\n      });\n    },\n    returnBack: function returnBack() {\n      var _this5 = this;\n      if (this.isReturn) return;\n      this.isReturn = true;\n      uni.navigateBack({\n        complete: function complete() {\n          setTimeout(function () {\n            _this5.isReturn = false;\n          }, 800);\n        }\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2hhdC9jaGF0Lm52dWUiXSwibmFtZXMiOlsiZGF0YSIsIm90aGVySWQiLCJ1c2VySWQiLCJwMnBJZCIsImZyb21Vc2VyVm8iLCJ0b1VzZXJWbyIsImNoYXRNZXNzYWdlIiwiY2hhdExpc3QiLCJjdXJyZW50IiwibmV3Q291bnQiLCJzaXplIiwiY29udGVudCIsInJlZnJlc2hpbmciLCJoYXNNb3JlTWVzc2FnZSIsImlzUmV0dXJuIiwiaXNTZW5kTXNnIiwib25Mb2FkIiwidW5pIiwib25VbmxvYWQiLCJtZXRob2RzIiwiaW5pdENoYXRNZXNzYWdlTGlzdCIsImNsZWFyVW5yZWFkQmFkZ2UiLCJ1bnJlYWRDb3VudCIsImxlbmd0aCIsIm1lc3NhZ2VTdG9yZSIsIm9uUmVmcmVzaCIsInJlcyIsImRvbSIsIm9mZnNldCIsImFuaW1hdGVkIiwic2VuZE1lc3NhZ2UiLCJpZCIsInR5cGUiLCJmcm9tVXNlcklkIiwidG9Vc2VySWQiLCJzZXRUaW1lb3V0IiwiaGFuZGxlUmVjZWl2ZU1lc3NhZ2UiLCJzY3JvbGxUb0JvdHRvbSIsInJldHVybkJhY2siLCJjb21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUEwRkE7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFMQTtBQUFBLGVBT0E7RUFDQUE7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztRQUNBQztNQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUQ7RUFDQTtFQUNBRTtJQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BRUE7UUFDQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBO01BQ0E7TUFDQTtNQUVBO1FBQ0FDO01BQ0E7UUFDQTtRQUNBO1FBQ0FBO1VBQUE7UUFBQSxHQUNBQztNQUNBO01BRUE7UUFDQTtRQUNBO1VBQ0FDO1FBQ0E7O1FBRUE7UUFDQVA7TUFDQTtJQUNBO0lBQ0E7SUFDQVE7TUFBQTtNQUNBO1FBQ0E7UUFDQTtNQUNBO01BQ0E7O01BRUE7TUFDQTtNQUVBO1FBQ0F0QjtRQUNBRjtRQUNBTztRQUNBRTtNQUNBO01BRUE7UUFDQTtVQUNBO1FBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQWdCO1lBQUE7VUFBQTs7VUFFQTtVQUNBO1lBQ0E7Y0FDQUM7Z0JBQ0FDO2dCQUNBQztjQUNBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFBQTtNQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0FDO1FBQUE7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQTlCO1FBQ0FDO1FBQ0FGO1FBQ0FIO1VBQ0FXO1FBQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQU07TUFDQTtNQUNBO01BQ0FrQjtRQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtVQUNBWjtRQUNBO1FBQ0E7UUFDQVA7TUFDQTtJQUNBO0lBRUFvQjtNQUFBO01BQ0E7UUFDQUY7VUFDQTtZQUNBUjtjQUNBQztjQUNBQztZQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFFQVM7TUFBQTtNQUNBO01BQ0E7TUFDQXJCO1FBQ0FzQjtVQUNBSjtZQUNBO1VBQ0E7UUFDQTtNQUNBO0lBRUE7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNoYXQtY29udGFpbmVyXCI+XHJcblx0XHQ8IS0tIOeKtuaAgeagj+WNoOS9jSAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwic3RhdHVzLWJhci1wbGFjZWhvbGRlclwiPjwvdmlldz5cclxuXHJcblx0XHQ8IS0tIOWvvOiIquagjyAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwibmF2aWdhdGlvbi1iYXJcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJyZXR1cm4tYmxvY2tcIiBAY2xpY2s9XCJyZXR1cm5CYWNrKClcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInJldHVybi1pY29uXCI+4oC5PC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibmF2aWdhdGlvbi1iYXItdXNlck5hbWUtYmxvY2tcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVzZXItbmFtZVwiPnt7dG9Vc2VyVm8udXNlck5hbWUgfHwgJ+iBiuWkqeS4rSd9fTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInNldHRpbmctYmxvY2tcIiBAY2xpY2s9XCJkZWxcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNldHRpbmctaWNvblwiPsK3wrfCtzwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDwhLS0g5YiX6KGo5Yy65Z+f77yaZmxleDoxIOehruS/neWNoOa7oeWJqeS9meepuumXtCAtLT5cclxuXHRcdDxsaXN0IGNsYXNzPVwiY29udGVudC1hcmVhXCIgOnNob3ctc2Nyb2xsYmFyPVwiZmFsc2VcIiA6bG9hZG1vcmVvZmZzZXQ9XCIxMDBcIj5cclxuXHRcdFx0PCEtLSDkuIvmi4nliqDovb3ljoblj7Lmtojmga8gLS0+XHJcblx0XHRcdDxyZWZyZXNoIGNsYXNzPVwicmVmcmVzaC1ib3hcIiBAcmVmcmVzaD1cIm9uUmVmcmVzaFwiIDpkaXNwbGF5PVwicmVmcmVzaGluZyA/ICdzaG93JyA6ICdoaWRlJ1wiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwicmVmcmVzaC10ZXh0XCI+5q2j5Zyo5Yqg6L295Y6G5Y+y5raI5oGvLi4uPC90ZXh0PlxyXG5cdFx0XHQ8L3JlZnJlc2g+XHJcblxyXG5cdFx0XHQ8IS0tIOa2iOaBr+mhue+8muW/hemhu+S9v+eUqCBjZWxsIC0tPlxyXG5cdFx0XHQ8Y2VsbCB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gY2hhdE1lc3NhZ2UuY2hhdExpc3RcIiA6a2V5PVwiaXRlbS5pZCB8fCBpbmRleFwiIDpyZWY9XCInbXNnXycgKyBpdGVtLmlkXCI+XHJcblx0XHRcdFx0PCEtLSDlr7nmlrnmtojmga8gLS0+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cIml0ZW0uZnJvbVVzZXJJZCA9PT0gb3RoZXJJZCAmJiBpdGVtLnR5cGUgPT09ICdwcml2YXRlJ1wiIGNsYXNzPVwic3RhdHVzLWJsb2NrXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItYXZhdGFyLWJsb2NrXCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiaXRlbS5mcm9tVXNlclZvLmF2YXRhclwiIDpzcmM9XCJpdGVtLmZyb21Vc2VyVm8uYXZhdGFyXCIgY2xhc3M9XCJpbWFnZS1ibG9ja1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXItbmFtZS1jaGF0LW1lc3NhZ2UtYmxvY2tcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cIml0ZW0uZGF0YS5maWxlVHlwZSA9PT0gJ2ltYWdlJ1wiIGNsYXNzPVwiaW1hZ2UtY29udGVudC1ibG9ja1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5kYXRhLmZpbGVVcmxcIiBtb2RlPVwid2lkdGhGaXhcIiBjbGFzcz1cIm1lc3NhZ2UtaW1hZ2VcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IHYtZWxzZS1pZj1cIml0ZW0uZGF0YS5maWxlVHlwZSA9PT0gJ3ZpZGVvJ1wiIGNsYXNzPVwidmlkZW8tY29udGVudC1ibG9ja1wiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWRlbyA6c3JjPVwiaXRlbS5kYXRhLmZpbGVVcmxcIiBjbGFzcz1cIm1lc3NhZ2UtdmlkZW9cIj48L3ZpZGVvPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IHYtZWxzZSBjbGFzcz1cImJ1YmJsZS1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJ1YmJsZS1jb250ZW50IG90aGVyLWJ1YmJsZS1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1lc3NhZ2UtdGV4dFwiPnt7aXRlbS5kYXRhLmNvbnRlbnR9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdDwhLS0g6Ieq5bex5raI5oGvIC0tPlxyXG5cdFx0XHRcdDx2aWV3IHYtZWxzZS1pZj1cIml0ZW0uZnJvbVVzZXJJZCA9PT0gdXNlcklkICYmIGl0ZW0udHlwZSA9PT0gJ3ByaXZhdGUnXCIgY2xhc3M9XCJzZWxmLXN0YXR1cy1ibG9ja1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWxmLXVzZXItbmFtZS1jaGF0LW1lc3NhZ2UtYmxvY2tcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cIml0ZW0uZGF0YS5maWxlVHlwZSA9PT0gJ2ltYWdlJ1wiIGNsYXNzPVwiaW1hZ2UtY29udGVudC1ibG9ja1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5kYXRhLmZpbGVVcmxcIiBtb2RlPVwid2lkdGhGaXhcIiBjbGFzcz1cIm1lc3NhZ2UtaW1hZ2VcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IHYtZWxzZSBjbGFzcz1cImJ1YmJsZS1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJ1YmJsZS1jb250ZW50IG15LWJ1YmJsZS1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1lc3NhZ2UtdGV4dFwiPnt7aXRlbS5kYXRhLmNvbnRlbnR9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VsZi11c2VyLWF2YXRhci1ibG9ja1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIml0ZW0uZnJvbVVzZXJWby5hdmF0YXJcIiA6c3JjPVwiaXRlbS5mcm9tVXNlclZvLmF2YXRhclwiIGNsYXNzPVwiaW1hZ2UtYmxvY2tcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC9jZWxsPlxyXG5cclxuXHRcdFx0PCEtLSDlupXpg6jljaDkvY3vvJrmm7/ku6MgYW5jaG9yIC0tPlxyXG5cdFx0XHQ8Y2VsbD5cclxuXHRcdFx0XHQ8dmlldyByZWY9XCJib3R0b21BbmNob3JcIiBzdHlsZT1cImhlaWdodDogMjBycHg7XCI+PC92aWV3PlxyXG5cdFx0XHQ8L2NlbGw+XHJcblx0XHQ8L2xpc3Q+XHJcblxyXG5cdFx0PCEtLSDovpPlhaXmoYbljLrln58gLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImlucHV0LXNlbmQtZmlsZS1ibG9ja1wiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0LWJsb2NrXCI+XHJcblx0XHRcdFx0PGlucHV0IHYtbW9kZWw9XCJjb250ZW50XCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiIDpjdXJzb3Itc3BhY2luZz1cIjIwXCIgQGNvbmZpcm09XCJzZW5kTWVzc2FnZVwiXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWGheWuuS4uLlwiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzZW5kLWJsb2NrXCIgQGNsaWNrPVwic2VuZE1lc3NhZ2VcIj5cclxuXHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImNvbnRlbnQudHJpbSgpID09PSAnJyA/ICcvc3RhdGljL3NlbmQucG5nJyA6ICcvc3RhdGljL3NlbmRhYmxlLnBuZydcIiBjbGFzcz1cInNlbmQtaWNvblwiPlxyXG5cdFx0XHRcdDwvaW1hZ2U+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJmaWxlLWJsb2NrXCIgQGNsaWNrPVwiY2hvb3NlRmlsZVwiPlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL2ZpbGVDaG9vc2UucG5nXCIgY2xhc3M9XCJmaWxlLWljb25cIj48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRjb25zdCBkb20gPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignZG9tJyk7IC8vIE52dWUg5rua5Yqo5a6a5L2N5b+F6aG7XHJcblx0aW1wb3J0IHtcclxuXHRcdGdldEhpc3RvcnlDaGF0TWVzc2FnZVxyXG5cdH0gZnJvbSAnQC91dGlscy9tZXNzYWdlL21lc3NhZ2UnXHJcblx0aW1wb3J0IHVzZXJTdG9yZSBmcm9tICdAL3N0b3JlL2xvY2FsU3RvcmUvaW5kZXguanMnXHJcblx0aW1wb3J0IG1lc3NhZ2VTdG9yZSBmcm9tICdAL3N0b3JlL21lc3NhZ2UvaW5kZXguanMnXHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0b3RoZXJJZDogbnVsbCxcclxuXHRcdFx0XHR1c2VySWQ6IG51bGwsXHJcblx0XHRcdFx0cDJwSWQ6IG51bGwsXHJcblx0XHRcdFx0ZnJvbVVzZXJWbzoge30sXHJcblx0XHRcdFx0dG9Vc2VyVm86IHt9LFxyXG5cdFx0XHRcdGNoYXRNZXNzYWdlOiB7XHJcblx0XHRcdFx0XHRjaGF0TGlzdDogW11cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGN1cnJlbnQ6IDAsXHJcblx0XHRcdFx0bmV3Q291bnQ6IDAsXHJcblx0XHRcdFx0c2l6ZTogMTUsXHJcblx0XHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdFx0cmVmcmVzaGluZzogZmFsc2UsXHJcblx0XHRcdFx0aGFzTW9yZU1lc3NhZ2U6IHRydWUsXHJcblx0XHRcdFx0aXNSZXR1cm46IGZhbHNlLFxyXG5cdFx0XHRcdGlzU2VuZE1zZzogZmFsc2UsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQob3B0KSB7XHJcblx0XHRcdHVuaS4kb24oXCJjaGF0TWVzc2FnZVwiLCB0aGlzLmhhbmRsZVJlY2VpdmVNZXNzYWdlKTtcclxuXHRcdFx0dGhpcy51c2VySWQgPSB1c2VyU3RvcmUuZ2V0VXNlcmlkKCk7XHJcblx0XHRcdGlmIChvcHQub3RoZXJJZCkgdGhpcy5vdGhlcklkID0gTnVtYmVyKG9wdC5vdGhlcklkKTtcclxuXHRcdFx0aWYgKG9wdC5wMnBJZCkgdGhpcy5wMnBJZCA9IE51bWJlcihvcHQucDJwSWQpO1xyXG5cdFx0XHR0aGlzLmluaXRDaGF0TWVzc2FnZUxpc3QoKTtcclxuXHRcdH0sXHJcblx0XHRvblVubG9hZCgpIHtcclxuXHRcdFx0dW5pLiRvZmYoJ2NoYXRNZXNzYWdlJywgdGhpcy5oYW5kbGVSZWNlaXZlTWVzc2FnZSk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRpbml0Q2hhdE1lc3NhZ2VMaXN0KCkge1xyXG5cdFx0XHRcdGNvbnN0IHJlcyA9IG1lc3NhZ2VTdG9yZS5nZXRDaGF0V2luZG93TWVzc2FnZSgwLCB0aGlzLnNpemUsIHRoaXMub3RoZXJJZCk7XHJcblx0XHRcdFx0dGhpcy5jaGF0TWVzc2FnZSA9IHJlcztcclxuXHRcdFx0XHR0aGlzLnAycElkID0gcmVzLnAycElkIHx8IHRoaXMucDJwSWQ7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50ID0gdGhpcy5jaGF0TWVzc2FnZS5jaGF0TGlzdC5sZW5ndGg7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLmNoYXRNZXNzYWdlLmNoYXRMaXN0Lmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdGNvbnN0IGZpcnN0TXNnID0gdGhpcy5jaGF0TWVzc2FnZS5jaGF0TGlzdFswXTtcclxuXHRcdFx0XHRcdGlmIChmaXJzdE1zZy5mcm9tVXNlcklkID09PSBOdW1iZXIodGhpcy51c2VySWQpKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZnJvbVVzZXJWbyA9IGZpcnN0TXNnLmZyb21Vc2VyVm87XHJcblx0XHRcdFx0XHRcdHRoaXMudG9Vc2VyVm8gPSBmaXJzdE1zZy50b1VzZXJWbztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZnJvbVVzZXJWbyA9IGZpcnN0TXNnLnRvVXNlclZvO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRvVXNlclZvID0gZmlyc3RNc2cuZnJvbVVzZXJWbztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xyXG5cdFx0XHRcdHRoaXMuY2xlYXJVbnJlYWRCYWRnZSgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbGVhclVucmVhZEJhZGdlKCkge1xyXG5cdFx0XHRcdC8vIOWBh+iuvuS9oOeahCBtZXNzYWdlU3RvcmUg5Lit5pyJ5LiA5Liq6I635Y+W5b2T5YmN5Lya6K+d5pyq6K+75pWw55qE5pa55rOVXHJcblx0XHRcdFx0Ly8g5aaC5p6c5rKh5pyJIGdldFVucmVhZENvdW50IOaWueazle+8jOS9oOmcgOimgeWOuyBzdG9yZS9tZXNzYWdlL2luZGV4LmpzIOmHjOWGmeS4gOS4qlxyXG5cdFx0XHRcdGxldCB1bnJlYWRDb3VudCA9IDA7XHJcblxyXG5cdFx0XHRcdGlmIChtZXNzYWdlU3RvcmUuZ2V0VW5yZWFkQ291bnQpIHtcclxuXHRcdFx0XHRcdHVucmVhZENvdW50ID0gbWVzc2FnZVN0b3JlLmdldFVucmVhZENvdW50KHRoaXMucDJwSWQgfHwgdGhpcy5vdGhlcklkKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8g5YW85a655aSE55CG77ya5aaC5p6c5rKh5pyJ5Y2V54us6I635Y+W5pyq6K+75pWw55qE5pa55rOV77yM6buY6K6k57uZ5Liq5L+d5bqV562W55WlXHJcblx0XHRcdFx0XHQvLyDlu7rorq7ljrsgc3RvcmUg5a6M5ZaE6YC76L6RXHJcblx0XHRcdFx0XHR1bnJlYWRDb3VudCA9IHRoaXMuY2hhdE1lc3NhZ2UuY2hhdExpc3QuZmlsdGVyKG1zZyA9PiAhbXNnLmlzUmVhZCAmJiBtc2cuZnJvbVVzZXJJZCAhPT0gdGhpcy51c2VySWQpXHJcblx0XHRcdFx0XHRcdC5sZW5ndGggfHwgMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh1bnJlYWRDb3VudCA+IDApIHtcclxuXHRcdFx0XHRcdC8vIDEuIOiwg+eUqCBzdG9yZSDmlrnms5XvvIzmiorlvZPliY0gcDJwSWQg55qE5raI5oGv5qCH6K6w5Li65bey6K+7XHJcblx0XHRcdFx0XHRpZiAobWVzc2FnZVN0b3JlLmNsZWFyVW5yZWFkTWVzc2FnZSkge1xyXG5cdFx0XHRcdFx0XHRtZXNzYWdlU3RvcmUuY2xlYXJVbnJlYWRNZXNzYWdlKHRoaXMucDJwSWQgfHwgdGhpcy5vdGhlcklkKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyAyLiDop6blj5HlhajlsYDkuovku7bvvIzorqkgQXBwLnZ1ZSDmiorlupXpg6jnmoQgdGFiQmFyIOawlOazoeWHj+aOieWvueW6lOeahOaVsOmHj1xyXG5cdFx0XHRcdFx0dW5pLiRlbWl0KCdzdWJNZXNzYWdlVGFiYmFyQmFkZ2UnLCB1bnJlYWRDb3VudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDkuIvmi4nliqDovb1cclxuXHRcdFx0b25SZWZyZXNoKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnJlZnJlc2hpbmcgfHwgIXRoaXMuaGFzTW9yZU1lc3NhZ2UpIHtcclxuXHRcdFx0XHRcdHRoaXMucmVmcmVzaGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnJlZnJlc2hpbmcgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHQvLyDorrDlvZXlvZPliY3mnIDpobbpg6jnmoTmtojmga9cclxuXHRcdFx0XHRjb25zdCB0b3BNc2cgPSB0aGlzLmNoYXRNZXNzYWdlLmNoYXRMaXN0WzBdO1xyXG5cclxuXHRcdFx0XHRjb25zdCBwYXJhbXMgPSB7XHJcblx0XHRcdFx0XHRwMnBJZDogdGhpcy5wMnBJZCxcclxuXHRcdFx0XHRcdG90aGVySWQ6IHRoaXMub3RoZXJJZCxcclxuXHRcdFx0XHRcdGN1cnJlbnQ6IHRoaXMuY2hhdE1lc3NhZ2UuY2hhdExpc3QubGVuZ3RoLFxyXG5cdFx0XHRcdFx0c2l6ZTogdGhpcy5zaXplXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0Z2V0SGlzdG9yeUNoYXRNZXNzYWdlKHBhcmFtcykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCFyZXMgfHwgcmVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmhhc01vcmVNZXNzYWdlID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQvLyDlgYforr7lkI7nq6/ov5Tlm57mmK/ml7bpl7TmraPluo9cclxuXHRcdFx0XHRcdFx0dGhpcy5jaGF0TWVzc2FnZS5jaGF0TGlzdCA9IFsuLi5yZXMsIC4uLnRoaXMuY2hhdE1lc3NhZ2UuY2hhdExpc3RdO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnQgKz0gcmVzLmxlbmd0aDtcclxuXHRcdFx0XHRcdFx0cmVzLmZvckVhY2gobSA9PiBtZXNzYWdlU3RvcmUuc2F2ZUNoYXRNZXNzYWdlKG0pKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIE52dWUg5Yqg6L295Y6G5Y+y5ZCO55qE5rua5Yqo6ZSB5a6aXHJcblx0XHRcdFx0XHRcdGlmICh0b3BNc2cpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRkb20uc2Nyb2xsVG9FbGVtZW50KHRoaXMuJHJlZnNbJ21zZ18nICsgdG9wTXNnLmlkXVswXSwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvZmZzZXQ6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVkOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KS5maW5hbGx5KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucmVmcmVzaGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0c2VuZE1lc3NhZ2UoKSB7XHJcblx0XHRcdFx0aWYodGhpcy5pc1NlbmRNc2cpIHJldHVyblxyXG5cdFx0XHRcdHRoaXMuaXNTZW5kTXNnID0gdHJ1ZVxyXG5cdFx0XHRcdGlmICh0aGlzLmNvbnRlbnQudHJpbSgpID09PSAnJykgcmV0dXJuO1xyXG5cdFx0XHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdFx0XHRpZDogRGF0ZS5ub3coKSwgLy8g5Li05pe2SURcclxuXHRcdFx0XHRcdHR5cGU6ICdwcml2YXRlJyxcclxuXHRcdFx0XHRcdGZyb21Vc2VySWQ6IE51bWJlcih0aGlzLnVzZXJJZCksXHJcblx0XHRcdFx0XHR0b1VzZXJJZDogdGhpcy5vdGhlcklkLFxyXG5cdFx0XHRcdFx0ZnJvbVVzZXJWbzogdGhpcy5mcm9tVXNlclZvLFxyXG5cdFx0XHRcdFx0dG9Vc2VyVm86IHRoaXMudG9Vc2VyVm8sXHJcblx0XHRcdFx0XHRwMnBJZDogdGhpcy5wMnBJZCxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogdGhpcy5jb250ZW50XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0dGhpcy5jaGF0TWVzc2FnZS5jaGF0TGlzdC5wdXNoKGRhdGEpO1xyXG5cdFx0XHRcdHRoaXMubmV3Q291bnQgKz0gMTtcclxuXHRcdFx0XHR1bmkuJHdlYlNvY2tldE1hbmFnZXIuc2VuZChkYXRhKTtcclxuXHRcdFx0XHR0aGlzLmNvbnRlbnQgPSAnJztcclxuXHRcdFx0XHR0aGlzLnNjcm9sbFRvQm90dG9tKCk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0dGhpcy5pc1NlbmRNc2cgPSBmYWxzZVxyXG5cdFx0XHRcdH0sODAwKVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0aGFuZGxlUmVjZWl2ZU1lc3NhZ2UobWVzc2FnZSkge1xyXG5cdFx0XHRcdGlmIChtZXNzYWdlLnAycElkID09PSB0aGlzLnAycElkKSB7XHJcblx0XHRcdFx0XHRpZiAobWVzc2FnZS5mcm9tVXNlcklkID09PSBOdW1iZXIodGhpcy51c2VySWQpKSByZXR1cm47XHJcblx0XHRcdFx0XHR0aGlzLmNoYXRNZXNzYWdlLmNoYXRMaXN0LnB1c2gobWVzc2FnZSk7XHJcblx0XHRcdFx0XHR0aGlzLm5ld0NvdW50ICs9IDE7XHJcblx0XHRcdFx0XHR0aGlzLnNjcm9sbFRvQm90dG9tKCk7XHJcblx0XHRcdFx0XHRpZiAobWVzc2FnZVN0b3JlLmNsZWFyVW5yZWFkTWVzc2FnZSkge1xyXG5cdFx0XHRcdFx0XHRtZXNzYWdlU3RvcmUuY2xlYXJVbnJlYWRNZXNzYWdlKHRoaXMucDJwSWQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8g56uL5Yi75oqKIEFwcC52dWUg5Yia5Yqg5LiK55qEIDEg5Liq57qi54K55YeP5o6JXHJcblx0XHRcdFx0XHR1bmkuJGVtaXQoJ3N1Yk1lc3NhZ2VUYWJiYXJCYWRnZScsIDEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHNjcm9sbFRvQm90dG9tKCkge1xyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy4kcmVmcy5ib3R0b21BbmNob3IpIHtcclxuXHRcdFx0XHRcdFx0XHRkb20uc2Nyb2xsVG9FbGVtZW50KHRoaXMuJHJlZnMuYm90dG9tQW5jaG9yLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRvZmZzZXQ6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHRhbmltYXRlZDogdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LCAxMDApO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0cmV0dXJuQmFjaygpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5pc1JldHVybikgcmV0dXJuXHJcblx0XHRcdFx0dGhpcy5pc1JldHVybiA9IHRydWVcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHRcdFx0XHRcdGNvbXBsZXRlOigpPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmlzUmV0dXJuID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0fSwgODAwKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC5jaGF0LWNvbnRhaW5lciB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0LyogTnZ1ZeW/hemhuyBmbGV4OjEgKi9cclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcblx0fVxyXG5cclxuXHQuc3RhdHVzLWJhci1wbGFjZWhvbGRlciB7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHR9XHJcblxyXG5cdC5uYXZpZ2F0aW9uLWJhciB7XHJcblx0XHRoZWlnaHQ6IDEwMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGJvcmRlci1ib3R0b20td2lkdGg6IDFycHg7XHJcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjZjBmMGYwO1xyXG5cdH1cclxuXHJcblx0LmNvbnRlbnQtYXJlYSB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0Lyog5Y2g5o2u5Ymp5L2Z5YWo6YOo6auY5bqmICovXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG5cdH1cclxuXHJcblx0LnJlZnJlc2gtYm94IHtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRoZWlnaHQ6IDEwMHJweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5yZWZyZXNoLXRleHQge1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuXHJcblx0Lyog5raI5oGv6YCa55So5qC35byPICovXHJcblx0LnN0YXR1cy1ibG9jayB7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdHBhZGRpbmc6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnNlbGYtc3RhdHVzLWJsb2NrIHtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRcdHBhZGRpbmc6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnVzZXItYXZhdGFyLWJsb2NrLFxyXG5cdC5zZWxmLXVzZXItYXZhdGFyLWJsb2NrIHtcclxuXHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdGhlaWdodDogODBycHg7XHJcblx0fVxyXG5cclxuXHQuaW1hZ2UtYmxvY2sge1xyXG5cdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDQwcnB4O1xyXG5cdH1cclxuXHJcblx0LmJ1YmJsZS1jb250YWluZXIge1xyXG5cdFx0bWFyZ2luOiAwIDIwcnB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR9XHJcblxyXG5cdC5idWJibGUtY29udGVudCB7XHJcblx0XHRwYWRkaW5nOiAxNXJweCAyMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEycnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0fVxyXG5cclxuXHQub3RoZXItYnViYmxlLWNvbnRlbnQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHR9XHJcblxyXG5cdC5teS1idWJibGUtY29udGVudCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTVlYzY5O1xyXG5cdH1cclxuXHJcblx0Lm1lc3NhZ2UtdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0Y29sb3I6ICMzMzMzMzM7XHJcblx0XHRsaW5lLWhlaWdodDogNDBycHg7XHJcblx0XHRtYXgtd2lkdGg6IDQ4MHJweDtcclxuXHRcdGxpbmVzOiAwO1xyXG5cdFx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdFx0d29yZC1icmVhazogYnJlYWstYWxsO1xyXG5cdH1cclxuXHJcblx0Lm1lc3NhZ2UtaW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDMwMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdFx0bWFyZ2luOiAwIDIwcnB4O1xyXG5cdH1cclxuXHJcblx0Lyog6L6T5YWl5Yy65Z+fICovXHJcblx0LmlucHV0LXNlbmQtZmlsZS1ibG9jayB7XHJcblx0XHRoZWlnaHQ6IDExMHJweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHRcdHBhZGRpbmc6IDAgMjBycHg7XHJcblx0XHRib3JkZXItdG9wLXdpZHRoOiAxcnB4O1xyXG5cdFx0Ym9yZGVyLXRvcC1jb2xvcjogI2VlZWVlZTtcclxuXHR9XHJcblxyXG5cdC5pbnB1dC1ibG9jayB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuXHRcdGhlaWdodDogNzBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHRcdHBhZGRpbmc6IDAgMjBycHg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5pbnB1dC1maWVsZCB7XHJcblx0XHRoZWlnaHQ6IDcwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHR9XHJcblxyXG5cdC5zZW5kLWljb24sXHJcblx0LmZpbGUtaWNvbiB7XHJcblx0XHR3aWR0aDogNTVycHg7XHJcblx0XHRoZWlnaHQ6IDU1cnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnJldHVybi1pY29uIHtcclxuXHRcdGZvbnQtc2l6ZTogNjBycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQudXNlci1uYW1lIHtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requireNativePlugin;
function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
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
/* 18 */
/*!*******************************************************!*\
  !*** D:/毕设项目/baf-client/baf/utils/message/message.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 11);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.uploadChatFile = exports.getHistoryChatMessage = exports.gainChatMessage = exports.createPrivateWindow = exports.checkP2pId = void 0;\nvar _request = _interopRequireDefault(__webpack_require__(/*! @/utils/request.js */ 19));\nvar checkP2pId = function checkP2pId() {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return _request.default.get('server/message/checkP2pId', params, config);\n};\nexports.checkP2pId = checkP2pId;\nvar createPrivateWindow = function createPrivateWindow() {\n  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return _request.default.post('server/message/createPrivateWindow', data, config);\n};\nexports.createPrivateWindow = createPrivateWindow;\nvar gainChatMessage = function gainChatMessage() {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return _request.default.get('server/message/gainChatMessage', params, config);\n};\nexports.gainChatMessage = gainChatMessage;\nvar uploadChatFile = function uploadChatFile() {\n  var filePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  return _request.default.upload('server/message/uploadChatFile', filePath, formData, config);\n};\nexports.uploadChatFile = uploadChatFile;\nvar getHistoryChatMessage = function getHistoryChatMessage() {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return _request.default.get('server/message/getHistoryChatMessage', params, config);\n};\nexports.getHistoryChatMessage = getHistoryChatMessage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvbWVzc2FnZS9tZXNzYWdlLmpzIl0sIm5hbWVzIjpbImNoZWNrUDJwSWQiLCJwYXJhbXMiLCJjb25maWciLCJodHRwIiwiZ2V0IiwiY3JlYXRlUHJpdmF0ZVdpbmRvdyIsImRhdGEiLCJwb3N0IiwiZ2FpbkNoYXRNZXNzYWdlIiwidXBsb2FkQ2hhdEZpbGUiLCJmaWxlUGF0aCIsImZvcm1EYXRhIiwidXBsb2FkIiwiZ2V0SGlzdG9yeUNoYXRNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBVSxHQUE4QjtFQUFBLElBQTFCQyxNQUFNLHVFQUFHLENBQUMsQ0FBQztFQUFBLElBQUNDLE1BQU0sdUVBQUcsQ0FBQyxDQUFDO0VBQ2pELE9BQU9DLGdCQUFJLENBQUNDLEdBQUcsQ0FDZCwyQkFBMkIsRUFDM0JILE1BQU0sRUFDTkMsTUFBTSxDQUNOO0FBQ0YsQ0FBQztBQUFBO0FBRU0sSUFBTUcsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQixHQUErQjtFQUFBLElBQTNCQyxJQUFJLHVFQUFHLENBQUMsQ0FBQztFQUFBLElBQUVKLE1BQU0sdUVBQUcsQ0FBQyxDQUFDO0VBQ3pELE9BQU9DLGdCQUFJLENBQUNJLElBQUksQ0FDZixvQ0FBb0MsRUFDcENELElBQUksRUFDSkosTUFBTSxDQUNOO0FBQ0YsQ0FBQztBQUFBO0FBRU0sSUFBTU0sZUFBZSxHQUFHLFNBQWxCQSxlQUFlLEdBQWlDO0VBQUEsSUFBN0JQLE1BQU0sdUVBQUcsQ0FBQyxDQUFDO0VBQUEsSUFBRUMsTUFBTSx1RUFBRyxDQUFDLENBQUM7RUFDdkQsT0FBT0MsZ0JBQUksQ0FBQ0MsR0FBRyxDQUNkLGdDQUFnQyxFQUNoQ0gsTUFBTSxFQUNOQyxNQUFNLENBQ047QUFDRixDQUFDO0FBQUE7QUFFTSxJQUFNTyxjQUFjLEdBQUcsU0FBakJBLGNBQWMsR0FBZ0Q7RUFBQSxJQUE1Q0MsUUFBUSx1RUFBRyxDQUFDLENBQUM7RUFBQSxJQUFDQyxRQUFRLHVFQUFHLENBQUMsQ0FBQztFQUFBLElBQUNULE1BQU0sdUVBQUcsQ0FBQyxDQUFDO0VBQ3JFLE9BQU9DLGdCQUFJLENBQUNTLE1BQU0sQ0FDakIsK0JBQStCLEVBQy9CRixRQUFRLEVBQ1JDLFFBQVEsRUFDUlQsTUFBTSxDQUNOO0FBQ0YsQ0FBQztBQUFBO0FBRU0sSUFBTVcscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUFxQixHQUFnQztFQUFBLElBQTVCWixNQUFNLHVFQUFHLENBQUMsQ0FBQztFQUFBLElBQUNDLE1BQU0sdUVBQUcsQ0FBQyxDQUFDO0VBQzVELE9BQU9DLGdCQUFJLENBQUNDLEdBQUcsQ0FDZCxzQ0FBc0MsRUFDdENILE1BQU0sRUFDTkMsTUFBTSxDQUNOO0FBQ0YsQ0FBQztBQUFBIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHAgZnJvbSBcIkAvdXRpbHMvcmVxdWVzdC5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrUDJwSWQgPSAocGFyYW1zID0ge30sY29uZmlnID0ge30pPT57XHJcblx0cmV0dXJuIGh0dHAuZ2V0KFxyXG5cdFx0J3NlcnZlci9tZXNzYWdlL2NoZWNrUDJwSWQnLFxyXG5cdFx0cGFyYW1zLFxyXG5cdFx0Y29uZmlnXHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUHJpdmF0ZVdpbmRvdyA9IChkYXRhID0ge30sIGNvbmZpZyA9IHt9KSA9PiB7XHJcblx0cmV0dXJuIGh0dHAucG9zdChcclxuXHRcdCdzZXJ2ZXIvbWVzc2FnZS9jcmVhdGVQcml2YXRlV2luZG93JyxcclxuXHRcdGRhdGEsXHJcblx0XHRjb25maWdcclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnYWluQ2hhdE1lc3NhZ2UgPSAocGFyYW1zID0ge30sIGNvbmZpZyA9IHt9KSA9PiB7XHJcblx0cmV0dXJuIGh0dHAuZ2V0KFxyXG5cdFx0J3NlcnZlci9tZXNzYWdlL2dhaW5DaGF0TWVzc2FnZScsXHJcblx0XHRwYXJhbXMsXHJcblx0XHRjb25maWdcclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGxvYWRDaGF0RmlsZSA9IChmaWxlUGF0aCA9IHt9LGZvcm1EYXRhID0ge30sY29uZmlnID0ge30pID0+IHtcclxuXHRyZXR1cm4gaHR0cC51cGxvYWQoXHJcblx0XHQnc2VydmVyL21lc3NhZ2UvdXBsb2FkQ2hhdEZpbGUnLFxyXG5cdFx0ZmlsZVBhdGgsXHJcblx0XHRmb3JtRGF0YSxcclxuXHRcdGNvbmZpZ1xyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEhpc3RvcnlDaGF0TWVzc2FnZSA9IChwYXJhbXMgPSB7fSxjb25maWcgPSB7fSkgPT4ge1xyXG5cdHJldHVybiBodHRwLmdldChcclxuXHRcdCdzZXJ2ZXIvbWVzc2FnZS9nZXRIaXN0b3J5Q2hhdE1lc3NhZ2UnLFxyXG5cdFx0cGFyYW1zLFxyXG5cdFx0Y29uZmlnXHJcblx0KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
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
/* 29 */
/*!*****************************************************!*\
  !*** D:/毕设项目/baf-client/baf/store/message/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 11);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _index = _interopRequireDefault(__webpack_require__(/*! @/store/localStore/index.js */ 27));\nvar _default = {\n  chatKey: 'chatMessageList_',\n  // 存入消息（用于上滑加载历史旧消息，插入数组开头）\n  saveChatMessage: function saveChatMessage(message) {\n    var _message$fromUserVo, _message$toUserVo, _message$fromUserVo2, _message$toUserVo2;\n    var userId = _index.default.getUserid();\n    var storageKey = this.chatKey + userId;\n    var chatMessageList = uni.getStorageSync(storageKey) || [];\n    for (var i = 0; i < chatMessageList.length; i++) {\n      if (chatMessageList[i].p2pId === message.p2pId) {\n        // 【核心：去重判断】\n        var isExist = chatMessageList[i].chatList.some(function (item) {\n          return item.id === message.id;\n        });\n        if (!isExist) {\n          if (message.toUserId === userId) {\n            chatMessageList[i].unread += 1;\n          }\n          // 历史消息插入到列表最前方\n          chatMessageList[i].chatList.unshift(message);\n          uni.setStorageSync(storageKey, chatMessageList);\n        }\n        return;\n      }\n    }\n\n    // 创建新的私聊窗口\n    var isCurrentUserReceiver = message.toUserId === userId;\n    chatMessageList.unshift({\n      type: 'private',\n      p2pId: message.p2pId,\n      otherId: isCurrentUserReceiver ? message.fromUserId : message.toUserId,\n      otherAvatar: isCurrentUserReceiver ? (_message$fromUserVo = message.fromUserVo) === null || _message$fromUserVo === void 0 ? void 0 : _message$fromUserVo.avatar : (_message$toUserVo = message.toUserVo) === null || _message$toUserVo === void 0 ? void 0 : _message$toUserVo.avatar,\n      otherUserName: isCurrentUserReceiver ? (_message$fromUserVo2 = message.fromUserVo) === null || _message$fromUserVo2 === void 0 ? void 0 : _message$fromUserVo2.userName : (_message$toUserVo2 = message.toUserVo) === null || _message$toUserVo2 === void 0 ? void 0 : _message$toUserVo2.userName,\n      unread: isCurrentUserReceiver ? 1 : 0,\n      chatList: [message]\n    });\n    __f__(\"log\", chatMessageList, \" at store/message/index.js:39\");\n    uni.setStorageSync(storageKey, chatMessageList);\n  },\n  // 存入新消息（用于实时收发消息，插入数组末尾）\n  insertNewMessage: function insertNewMessage(message) {\n    var _message$fromUserVo3, _message$toUserVo3, _message$fromUserVo4, _message$toUserVo4;\n    var userId = _index.default.getUserid();\n    var storageKey = this.chatKey + userId;\n    var chatMessageList = uni.getStorageSync(storageKey) || [];\n    for (var i = 0; i < chatMessageList.length; i++) {\n      if (chatMessageList[i].p2pId === message.p2pId) {\n        var isExist = chatMessageList[i].chatList.some(function (item) {\n          return item.id === message.id;\n        });\n        if (!isExist) {\n          if (message.toUserId === userId) {\n            chatMessageList[i].unread += 1;\n            // 正确发出增加事件\n            uni.$emit('addMessageTabbarBadge', 1);\n          }\n          chatMessageList[i].chatList.push(message);\n          uni.setStorageSync(storageKey, chatMessageList);\n        }\n        return;\n      }\n    }\n\n    // 创建新的私聊窗口\n    var isCurrentUserReceiver = message.toUserId === userId;\n    chatMessageList.unshift({\n      type: 'private',\n      p2pId: message.p2pId,\n      otherId: isCurrentUserReceiver ? message.fromUserId : message.toUserId,\n      otherAvatar: isCurrentUserReceiver ? (_message$fromUserVo3 = message.fromUserVo) === null || _message$fromUserVo3 === void 0 ? void 0 : _message$fromUserVo3.avatar : (_message$toUserVo3 = message.toUserVo) === null || _message$toUserVo3 === void 0 ? void 0 : _message$toUserVo3.avatar,\n      otherUserName: isCurrentUserReceiver ? (_message$fromUserVo4 = message.fromUserVo) === null || _message$fromUserVo4 === void 0 ? void 0 : _message$fromUserVo4.userName : (_message$toUserVo4 = message.toUserVo) === null || _message$toUserVo4 === void 0 ? void 0 : _message$toUserVo4.userName,\n      unread: isCurrentUserReceiver ? 1 : 0,\n      chatList: [message]\n    });\n    uni.setStorageSync(storageKey, chatMessageList);\n\n    // 【修复】：如果是全新的会话，且我是接收方，也必须让总红点 +1\n    if (isCurrentUserReceiver) {\n      uni.$emit('addMessageTabbarBadge', 1);\n    }\n  },\n  // 获取聊天窗口信息（进入页面时调用）\n  getChatWindowMessage: function getChatWindowMessage(current, size, otherId) {\n    var userId = _index.default.getUserid();\n    var chatMessageList = uni.getStorageSync(this.chatKey + userId) || [];\n    for (var i = 0; i < chatMessageList.length; i++) {\n      if (chatMessageList[i].otherId === otherId) {\n        var chatWindow = JSON.parse(JSON.stringify(chatMessageList[i]));\n        // 逻辑：获取最近的 size 条\n        var total = chatWindow.chatList.length;\n        var start = total - size < 0 ? 0 : total - size;\n        chatWindow.chatList = chatWindow.chatList.slice(start, total);\n        return chatWindow;\n      }\n    }\n    return {\n      p2pId: null,\n      chatList: [],\n      unread: 0\n    };\n  },\n  // 查询本地缓存的更旧的消息（上滑时调用）\n  selectChatMessage: function selectChatMessage(current, size, otherId, newCount) {\n    var userId = _index.default.getUserid();\n    var chatMessageList = uni.getStorageSync(this.chatKey + userId) || [];\n    for (var i = 0; i < chatMessageList.length; i++) {\n      if (chatMessageList[i].otherId === otherId) {\n        var list = chatMessageList[i].chatList;\n        // 已经展示了 current 条，新收到了 newCount 条，所以偏移量是 current + newCount\n        // 我们要取的是这之后更旧的 size 条\n        var end = list.length - (current + newCount);\n        if (end <= 0) return [];\n        var start = end - size < 0 ? 0 : end - size;\n        return list.slice(start, end);\n      }\n    }\n    return [];\n  },\n  delUnread: function delUnread(p2pId) {\n    var userId = _index.default.getUserid();\n    var chatMessageList = uni.getStorageSync(this.chatKey + userId) || [];\n    for (var i = 0; i < chatMessageList.length; i++) {\n      if (chatMessageList[i].p2pId === p2pId) {\n        if (chatMessageList[i].unread > 0) {\n          uni.$emit('subMessageTabbarBadge', chatMessageList[i].unread);\n          chatMessageList[i].unread = 0;\n          uni.setStorageSync(this.chatKey + userId, chatMessageList);\n        }\n      }\n    }\n  },\n  delete: function _delete() {\n    var userId = _index.default.getUserid();\n    uni.setStorageSync(this.chatKey + userId, []);\n  },\n  gainMessageList: function gainMessageList(type) {\n    var userId = _index.default.getUserid();\n    var chatMessageList = uni.getStorageSync(this.chatKey + userId) || [];\n    return chatMessageList.filter(function (item) {\n      return item.type === type;\n    }).sort(function (a, b) {\n      return b.unread - a.unread;\n    });\n  },\n  calc: function calc() {\n    var userId = _index.default.getUserid();\n    var chatMessageList = uni.getStorageSync(this.chatKey + userId) || [];\n    return chatMessageList.reduce(function (sum, item) {\n      return sum + item.unread;\n    }, 0);\n  },\n  clearUnreadMessage: function clearUnreadMessage(p2pId) {\n    var userId = _index.default.getUserid();\n    var storageKey = this.chatKey + userId;\n    // 【修复】：必须从原始 Storage 里拿全量数据（包含系统消息），不能用 gainMessageList\n    var list = uni.getStorageSync(storageKey) || [];\n    for (var i = 0; i < list.length; i++) {\n      if (list[i].p2pId === p2pId) {\n        list[i].unread = 0;\n        uni.setStorageSync(storageKey, list);\n        break;\n      }\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 28)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbWVzc2FnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJjaGF0S2V5Iiwic2F2ZUNoYXRNZXNzYWdlIiwibWVzc2FnZSIsInVzZXJJZCIsInVzZXJTdG9yZSIsImdldFVzZXJpZCIsInN0b3JhZ2VLZXkiLCJjaGF0TWVzc2FnZUxpc3QiLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsImkiLCJsZW5ndGgiLCJwMnBJZCIsImlzRXhpc3QiLCJjaGF0TGlzdCIsInNvbWUiLCJpdGVtIiwiaWQiLCJ0b1VzZXJJZCIsInVucmVhZCIsInVuc2hpZnQiLCJzZXRTdG9yYWdlU3luYyIsImlzQ3VycmVudFVzZXJSZWNlaXZlciIsInR5cGUiLCJvdGhlcklkIiwiZnJvbVVzZXJJZCIsIm90aGVyQXZhdGFyIiwiZnJvbVVzZXJWbyIsImF2YXRhciIsInRvVXNlclZvIiwib3RoZXJVc2VyTmFtZSIsInVzZXJOYW1lIiwiaW5zZXJ0TmV3TWVzc2FnZSIsIiRlbWl0IiwicHVzaCIsImdldENoYXRXaW5kb3dNZXNzYWdlIiwiY3VycmVudCIsInNpemUiLCJjaGF0V2luZG93IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwidG90YWwiLCJzdGFydCIsInNsaWNlIiwic2VsZWN0Q2hhdE1lc3NhZ2UiLCJuZXdDb3VudCIsImxpc3QiLCJlbmQiLCJkZWxVbnJlYWQiLCJkZWxldGUiLCJnYWluTWVzc2FnZUxpc3QiLCJmaWx0ZXIiLCJzb3J0IiwiYSIsImIiLCJjYWxjIiwicmVkdWNlIiwic3VtIiwiY2xlYXJVbnJlYWRNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBbUQsZUFFcEM7RUFDZEEsT0FBTyxFQUFFLGtCQUFrQjtFQUUzQjtFQUNBQyxlQUFlLDJCQUFDQyxPQUFPLEVBQUU7SUFBQTtJQUN4QixJQUFJQyxNQUFNLEdBQUdDLGNBQVMsQ0FBQ0MsU0FBUyxFQUFFO0lBQ2xDLElBQU1DLFVBQVUsR0FBRyxJQUFJLENBQUNOLE9BQU8s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LElBQU1FLGVBQWUsR0FBR0MsR0FBRyxDQUFDQyxjQUFjLENBQUMsSUFBSSxDQUFDVCxPQUFPLEdBQUdHLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDdkUsT0FBT0ksZUFBZSxDQUFDa0QsTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRTFDLElBQUk7TUFBQSxPQUFLMEMsR0FBRyxHQUFHMUMsSUFBSSxDQUFDRyxNQUFNO0lBQUEsR0FBRSxDQUFDLENBQUM7RUFDbkUsQ0FBQztFQUNEd0Msa0JBQWtCLDhCQUFDL0MsS0FBSyxFQUFFO0lBQ3RCLElBQU1ULE1BQU0sR0FBR0MsY0FBUyxDQUFDQyxTQUFTLEVBQUU7SUFDcEMsSUFBTUMsVUFBVSxHQUFHLElBQUksQ0FBQ04sT0FBTyxHQUFHRyxNQUFNO0lBQ3hDO0lBQ0EsSUFBSTRDLElBQUksR0FBR3ZDLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDSCxVQUFVLENBQUMsSUFBSSxFQUFFO0lBRS9DLEtBQUksSUFBSUksQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHcUMsSUFBSSxDQUFDcEMsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNqQyxJQUFHcUMsSUFBSSxDQUFDckMsQ0FBQyxDQUFDLENBQUNFLEtBQUssS0FBS0EsS0FBSyxFQUFFO1FBQ3hCbUMsSUFBSSxDQUFDckMsQ0FBQyxDQUFDLENBQUNTLE1BQU0sR0FBRyxDQUFDO1FBQ2xCWCxHQUFHLENBQUNhLGNBQWMsQ0FBQ2YsVUFBVSxFQUFFeUMsSUFBSSxDQUFDO1FBQ3BDO01BQ0o7SUFDSjtFQUNKO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZXJTdG9yZSBmcm9tICdAL3N0b3JlL2xvY2FsU3RvcmUvaW5kZXguanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y2hhdEtleTogJ2NoYXRNZXNzYWdlTGlzdF8nLFxyXG5cclxuXHQvLyDlrZjlhaXmtojmga/vvIjnlKjkuo7kuIrmu5HliqDovb3ljoblj7Lml6fmtojmga/vvIzmj5LlhaXmlbDnu4TlvIDlpLTvvIlcclxuXHRzYXZlQ2hhdE1lc3NhZ2UobWVzc2FnZSkge1xyXG5cdFx0bGV0IHVzZXJJZCA9IHVzZXJTdG9yZS5nZXRVc2VyaWQoKVxyXG5cdFx0Y29uc3Qgc3RvcmFnZUtleSA9IHRoaXMuY2hhdEtleSArIHVzZXJJZFxyXG5cdFx0Y29uc3QgY2hhdE1lc3NhZ2VMaXN0ID0gdW5pLmdldFN0b3JhZ2VTeW5jKHN0b3JhZ2VLZXkpIHx8IFtdO1xyXG5cdFx0XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNoYXRNZXNzYWdlTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoY2hhdE1lc3NhZ2VMaXN0W2ldLnAycElkID09PSBtZXNzYWdlLnAycElkKSB7XHJcblx0XHRcdFx0Ly8g44CQ5qC45b+D77ya5Y676YeN5Yik5pat44CRXHJcblx0XHRcdFx0Y29uc3QgaXNFeGlzdCA9IGNoYXRNZXNzYWdlTGlzdFtpXS5jaGF0TGlzdC5zb21lKGl0ZW0gPT4gaXRlbS5pZCA9PT0gbWVzc2FnZS5pZCk7XHJcblx0XHRcdFx0aWYgKCFpc0V4aXN0KSB7XHJcblx0XHRcdFx0XHRpZiAobWVzc2FnZS50b1VzZXJJZCA9PT0gdXNlcklkKSB7XHJcblx0XHRcdFx0XHRcdGNoYXRNZXNzYWdlTGlzdFtpXS51bnJlYWQgKz0gMVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8g5Y6G5Y+y5raI5oGv5o+S5YWl5Yiw5YiX6KGo5pyA5YmN5pa5XHJcblx0XHRcdFx0XHRjaGF0TWVzc2FnZUxpc3RbaV0uY2hhdExpc3QudW5zaGlmdChtZXNzYWdlKVxyXG5cdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKHN0b3JhZ2VLZXksIGNoYXRNZXNzYWdlTGlzdClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyDliJvlu7rmlrDnmoTnp4HogYrnqpflj6NcclxuXHRcdGNvbnN0IGlzQ3VycmVudFVzZXJSZWNlaXZlciA9IG1lc3NhZ2UudG9Vc2VySWQgPT09IHVzZXJJZFxyXG5cdFx0Y2hhdE1lc3NhZ2VMaXN0LnVuc2hpZnQoe1xyXG5cdFx0XHR0eXBlOiAncHJpdmF0ZScsXHJcblx0XHRcdHAycElkOiBtZXNzYWdlLnAycElkLFxyXG5cdFx0XHRvdGhlcklkOiBpc0N1cnJlbnRVc2VyUmVjZWl2ZXIgPyBtZXNzYWdlLmZyb21Vc2VySWQgOiBtZXNzYWdlLnRvVXNlcklkLFxyXG5cdFx0XHRvdGhlckF2YXRhcjogaXNDdXJyZW50VXNlclJlY2VpdmVyID8gbWVzc2FnZS5mcm9tVXNlclZvPy5hdmF0YXIgOiBtZXNzYWdlLnRvVXNlclZvPy5hdmF0YXIsXHJcblx0XHRcdG90aGVyVXNlck5hbWU6IGlzQ3VycmVudFVzZXJSZWNlaXZlciA/IG1lc3NhZ2UuZnJvbVVzZXJWbz8udXNlck5hbWUgOiBtZXNzYWdlLnRvVXNlclZvPy51c2VyTmFtZSxcclxuXHRcdFx0dW5yZWFkOiBpc0N1cnJlbnRVc2VyUmVjZWl2ZXIgPyAxIDogMCxcclxuXHRcdFx0Y2hhdExpc3Q6IFttZXNzYWdlXVxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKGNoYXRNZXNzYWdlTGlzdClcclxuXHRcdHVuaS5zZXRTdG9yYWdlU3luYyhzdG9yYWdlS2V5LCBjaGF0TWVzc2FnZUxpc3QpXHJcblx0fSxcclxuXHJcblx0Ly8g5a2Y5YWl5paw5raI5oGv77yI55So5LqO5a6e5pe25pS25Y+R5raI5oGv77yM5o+S5YWl5pWw57uE5pyr5bC+77yJXHJcblx0aW5zZXJ0TmV3TWVzc2FnZShtZXNzYWdlKSB7XHJcblx0ICAgIGxldCB1c2VySWQgPSB1c2VyU3RvcmUuZ2V0VXNlcmlkKCk7XHJcblx0ICAgIGNvbnN0IHN0b3JhZ2VLZXkgPSB0aGlzLmNoYXRLZXkgKyB1c2VySWQ7XHJcblx0ICAgIGNvbnN0IGNoYXRNZXNzYWdlTGlzdCA9IHVuaS5nZXRTdG9yYWdlU3luYyhzdG9yYWdlS2V5KSB8fCBbXTtcclxuXHQgICAgXHJcblx0ICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhdE1lc3NhZ2VMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgICBpZiAoY2hhdE1lc3NhZ2VMaXN0W2ldLnAycElkID09PSBtZXNzYWdlLnAycElkKSB7XHJcblx0ICAgICAgICAgICAgY29uc3QgaXNFeGlzdCA9IGNoYXRNZXNzYWdlTGlzdFtpXS5jaGF0TGlzdC5zb21lKGl0ZW0gPT4gaXRlbS5pZCA9PT0gbWVzc2FnZS5pZCk7XHJcblx0ICAgICAgICAgICAgaWYgKCFpc0V4aXN0KSB7XHJcblx0ICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnRvVXNlcklkID09PSB1c2VySWQpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGNoYXRNZXNzYWdlTGlzdFtpXS51bnJlYWQgKz0gMTtcclxuXHQgICAgICAgICAgICAgICAgICAgIC8vIOato+ehruWPkeWHuuWinuWKoOS6i+S7tlxyXG5cdCAgICAgICAgICAgICAgICAgICAgdW5pLiRlbWl0KCdhZGRNZXNzYWdlVGFiYmFyQmFkZ2UnLCAxKTtcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICBjaGF0TWVzc2FnZUxpc3RbaV0uY2hhdExpc3QucHVzaChtZXNzYWdlKTtcclxuXHQgICAgICAgICAgICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKHN0b3JhZ2VLZXksIGNoYXRNZXNzYWdlTGlzdCk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIHJldHVybjtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfVxyXG5cdFxyXG5cdCAgICAvLyDliJvlu7rmlrDnmoTnp4HogYrnqpflj6NcclxuXHQgICAgY29uc3QgaXNDdXJyZW50VXNlclJlY2VpdmVyID0gbWVzc2FnZS50b1VzZXJJZCA9PT0gdXNlcklkO1xyXG5cdCAgICBjaGF0TWVzc2FnZUxpc3QudW5zaGlmdCh7XHJcblx0ICAgICAgICB0eXBlOiAncHJpdmF0ZScsXHJcblx0ICAgICAgICBwMnBJZDogbWVzc2FnZS5wMnBJZCxcclxuXHQgICAgICAgIG90aGVySWQ6IGlzQ3VycmVudFVzZXJSZWNlaXZlciA/IG1lc3NhZ2UuZnJvbVVzZXJJZCA6IG1lc3NhZ2UudG9Vc2VySWQsXHJcblx0ICAgICAgICBvdGhlckF2YXRhcjogaXNDdXJyZW50VXNlclJlY2VpdmVyID8gbWVzc2FnZS5mcm9tVXNlclZvPy5hdmF0YXIgOiBtZXNzYWdlLnRvVXNlclZvPy5hdmF0YXIsXHJcblx0ICAgICAgICBvdGhlclVzZXJOYW1lOiBpc0N1cnJlbnRVc2VyUmVjZWl2ZXIgPyBtZXNzYWdlLmZyb21Vc2VyVm8/LnVzZXJOYW1lIDogbWVzc2FnZS50b1VzZXJWbz8udXNlck5hbWUsXHJcblx0ICAgICAgICB1bnJlYWQ6IGlzQ3VycmVudFVzZXJSZWNlaXZlciA/IDEgOiAwLFxyXG5cdCAgICAgICAgY2hhdExpc3Q6IFttZXNzYWdlXVxyXG5cdCAgICB9KTtcclxuXHQgICAgdW5pLnNldFN0b3JhZ2VTeW5jKHN0b3JhZ2VLZXksIGNoYXRNZXNzYWdlTGlzdCk7XHJcblx0ICAgIFxyXG5cdCAgICAvLyDjgJDkv67lpI3jgJHvvJrlpoLmnpzmmK/lhajmlrDnmoTkvJror53vvIzkuJTmiJHmmK/mjqXmlLbmlrnvvIzkuZ/lv4XpobvorqnmgLvnuqLngrkgKzFcclxuXHQgICAgaWYgKGlzQ3VycmVudFVzZXJSZWNlaXZlcikge1xyXG5cdCAgICAgICAgdW5pLiRlbWl0KCdhZGRNZXNzYWdlVGFiYmFyQmFkZ2UnLCAxKTtcclxuXHQgICAgfVxyXG5cdH0sXHJcblx0Ly8g6I635Y+W6IGK5aSp56qX5Y+j5L+h5oGv77yI6L+b5YWl6aG16Z2i5pe26LCD55So77yJXHJcblx0Z2V0Q2hhdFdpbmRvd01lc3NhZ2UoY3VycmVudCwgc2l6ZSwgb3RoZXJJZCkge1xyXG5cdFx0Y29uc3QgdXNlcklkID0gdXNlclN0b3JlLmdldFVzZXJpZCgpXHJcblx0XHRjb25zdCBjaGF0TWVzc2FnZUxpc3QgPSB1bmkuZ2V0U3RvcmFnZVN5bmModGhpcy5jaGF0S2V5ICsgdXNlcklkKSB8fCBbXVxyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2hhdE1lc3NhZ2VMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChjaGF0TWVzc2FnZUxpc3RbaV0ub3RoZXJJZCA9PT0gb3RoZXJJZCkge1xyXG5cdFx0XHRcdGxldCBjaGF0V2luZG93ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjaGF0TWVzc2FnZUxpc3RbaV0pKVxyXG5cdFx0XHRcdC8vIOmAu+i+ke+8muiOt+WPluacgOi/keeahCBzaXplIOadoVxyXG5cdFx0XHRcdGNvbnN0IHRvdGFsID0gY2hhdFdpbmRvdy5jaGF0TGlzdC5sZW5ndGg7XHJcblx0XHRcdFx0Y29uc3Qgc3RhcnQgPSB0b3RhbCAtIHNpemUgPCAwID8gMCA6IHRvdGFsIC0gc2l6ZTtcclxuXHRcdFx0XHRjaGF0V2luZG93LmNoYXRMaXN0ID0gY2hhdFdpbmRvdy5jaGF0TGlzdC5zbGljZShzdGFydCwgdG90YWwpO1xyXG5cdFx0XHRcdHJldHVybiBjaGF0V2luZG93XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB7IHAycElkOiBudWxsLCBjaGF0TGlzdDogW10sIHVucmVhZDogMCB9O1xyXG5cdH0sXHJcblxyXG5cdC8vIOafpeivouacrOWcsOe8k+WtmOeahOabtOaXp+eahOa2iOaBr++8iOS4iua7keaXtuiwg+eUqO+8iVxyXG5cdHNlbGVjdENoYXRNZXNzYWdlKGN1cnJlbnQsIHNpemUsIG90aGVySWQsIG5ld0NvdW50KSB7XHJcblx0XHRjb25zdCB1c2VySWQgPSB1c2VyU3RvcmUuZ2V0VXNlcmlkKClcclxuXHRcdGNvbnN0IGNoYXRNZXNzYWdlTGlzdCA9IHVuaS5nZXRTdG9yYWdlU3luYyh0aGlzLmNoYXRLZXkgKyB1c2VySWQpIHx8IFtdXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNoYXRNZXNzYWdlTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoY2hhdE1lc3NhZ2VMaXN0W2ldLm90aGVySWQgPT09IG90aGVySWQpIHtcclxuXHRcdFx0XHRjb25zdCBsaXN0ID0gY2hhdE1lc3NhZ2VMaXN0W2ldLmNoYXRMaXN0O1xyXG5cdFx0XHRcdC8vIOW3sue7j+WxleekuuS6hiBjdXJyZW50IOadoe+8jOaWsOaUtuWIsOS6hiBuZXdDb3VudCDmnaHvvIzmiYDku6XlgY/np7vph4/mmK8gY3VycmVudCArIG5ld0NvdW50XHJcblx0XHRcdFx0Ly8g5oiR5Lus6KaB5Y+W55qE5piv6L+Z5LmL5ZCO5pu05pen55qEIHNpemUg5p2hXHJcblx0XHRcdFx0Y29uc3QgZW5kID0gbGlzdC5sZW5ndGggLSAoY3VycmVudCArIG5ld0NvdW50KTtcclxuXHRcdFx0XHRpZiAoZW5kIDw9IDApIHJldHVybiBbXTtcclxuXHRcdFx0XHRjb25zdCBzdGFydCA9IGVuZCAtIHNpemUgPCAwID8gMCA6IGVuZCAtIHNpemU7XHJcblx0XHRcdFx0cmV0dXJuIGxpc3Quc2xpY2Uoc3RhcnQsIGVuZCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBbXVxyXG5cdH0sXHJcblxyXG5cdGRlbFVucmVhZChwMnBJZCkge1xyXG5cdFx0Y29uc3QgdXNlcklkID0gdXNlclN0b3JlLmdldFVzZXJpZCgpXHJcblx0XHRjb25zdCBjaGF0TWVzc2FnZUxpc3QgPSB1bmkuZ2V0U3RvcmFnZVN5bmModGhpcy5jaGF0S2V5ICsgdXNlcklkKSB8fCBbXVxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjaGF0TWVzc2FnZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGNoYXRNZXNzYWdlTGlzdFtpXS5wMnBJZCA9PT0gcDJwSWQpIHtcclxuXHRcdFx0XHRpZihjaGF0TWVzc2FnZUxpc3RbaV0udW5yZWFkID4gMCkge1xyXG5cdFx0XHRcdFx0dW5pLiRlbWl0KCdzdWJNZXNzYWdlVGFiYmFyQmFkZ2UnLCBjaGF0TWVzc2FnZUxpc3RbaV0udW5yZWFkKVxyXG5cdFx0XHRcdFx0Y2hhdE1lc3NhZ2VMaXN0W2ldLnVucmVhZCA9IDBcclxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyh0aGlzLmNoYXRLZXkgKyB1c2VySWQsIGNoYXRNZXNzYWdlTGlzdClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRkZWxldGUoKSB7XHJcblx0XHRsZXQgdXNlcklkID0gdXNlclN0b3JlLmdldFVzZXJpZCgpXHJcblx0XHR1bmkuc2V0U3RvcmFnZVN5bmModGhpcy5jaGF0S2V5ICsgdXNlcklkLCBbXSlcclxuXHR9LFxyXG5cclxuXHRnYWluTWVzc2FnZUxpc3QodHlwZSkge1xyXG5cdFx0Y29uc3QgdXNlcklkID0gdXNlclN0b3JlLmdldFVzZXJpZCgpXHJcblx0XHRjb25zdCBjaGF0TWVzc2FnZUxpc3QgPSB1bmkuZ2V0U3RvcmFnZVN5bmModGhpcy5jaGF0S2V5ICsgdXNlcklkKSB8fCBbXVxyXG5cdFx0cmV0dXJuIGNoYXRNZXNzYWdlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnR5cGUgPT09IHR5cGUpLnNvcnQoKGEsIGIpID0+IGIudW5yZWFkIC0gYS51bnJlYWQpO1xyXG5cdH0sXHJcblxyXG5cdGNhbGMoKSB7XHJcblx0XHRjb25zdCB1c2VySWQgPSB1c2VyU3RvcmUuZ2V0VXNlcmlkKClcclxuXHRcdGNvbnN0IGNoYXRNZXNzYWdlTGlzdCA9IHVuaS5nZXRTdG9yYWdlU3luYyh0aGlzLmNoYXRLZXkgKyB1c2VySWQpIHx8IFtdXHJcblx0XHRyZXR1cm4gY2hhdE1lc3NhZ2VMaXN0LnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLnVucmVhZCwgMCk7XHJcblx0fSxcclxuXHRjbGVhclVucmVhZE1lc3NhZ2UocDJwSWQpIHtcclxuXHQgICAgY29uc3QgdXNlcklkID0gdXNlclN0b3JlLmdldFVzZXJpZCgpO1xyXG5cdCAgICBjb25zdCBzdG9yYWdlS2V5ID0gdGhpcy5jaGF0S2V5ICsgdXNlcklkO1xyXG5cdCAgICAvLyDjgJDkv67lpI3jgJHvvJrlv4Xpobvku47ljp/lp4sgU3RvcmFnZSDph4zmi7/lhajph4/mlbDmja7vvIjljIXlkKvns7vnu5/mtojmga/vvInvvIzkuI3og73nlKggZ2Fpbk1lc3NhZ2VMaXN0XHJcblx0ICAgIGxldCBsaXN0ID0gdW5pLmdldFN0b3JhZ2VTeW5jKHN0b3JhZ2VLZXkpIHx8IFtdOyBcclxuXHQgICAgXHJcblx0ICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgICBpZihsaXN0W2ldLnAycElkID09PSBwMnBJZCkge1xyXG5cdCAgICAgICAgICAgIGxpc3RbaV0udW5yZWFkID0gMDtcclxuXHQgICAgICAgICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoc3RvcmFnZUtleSwgbGlzdCk7XHJcblx0ICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH1cclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!***********************************************************************************************************************!*\
  !*** D:/毕设项目/baf-client/baf/pages/chat/chat.nvue?vue&type=style&index=0&id=d5c8bdb0&scoped=true&lang=css&mpType=page ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_nvue_vue_type_style_index_0_id_d5c8bdb0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chat.nvue?vue&type=style&index=0&id=d5c8bdb0&scoped=true&lang=css&mpType=page */ 31);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_nvue_vue_type_style_index_0_id_d5c8bdb0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_nvue_vue_type_style_index_0_id_d5c8bdb0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_nvue_vue_type_style_index_0_id_d5c8bdb0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_nvue_vue_type_style_index_0_id_d5c8bdb0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chat_nvue_vue_type_style_index_0_id_d5c8bdb0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 31 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/毕设项目/baf-client/baf/pages/chat/chat.nvue?vue&type=style&index=0&id=d5c8bdb0&scoped=true&lang=css&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".chat-container": {
    "": {
      "flex": [
        1,
        0,
        0,
        0
      ],
      "backgroundColor": [
        "#f5f5f5",
        0,
        0,
        0
      ]
    }
  },
  ".status-bar-placeholder": {
    "": {
      "height": [
        "80rpx",
        0,
        0,
        1
      ],
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        1
      ]
    }
  },
  ".navigation-bar": {
    "": {
      "height": [
        "100rpx",
        0,
        0,
        2
      ],
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        2
      ],
      "flexDirection": [
        "row",
        0,
        0,
        2
      ],
      "alignItems": [
        "center",
        0,
        0,
        2
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        2
      ],
      "borderBottomWidth": [
        "1rpx",
        0,
        0,
        2
      ],
      "borderBottomColor": [
        "#f0f0f0",
        0,
        0,
        2
      ]
    }
  },
  ".content-area": {
    "": {
      "flex": [
        1,
        0,
        0,
        3
      ],
      "backgroundColor": [
        "#f5f5f5",
        0,
        0,
        3
      ]
    }
  },
  ".refresh-box": {
    "": {
      "width": [
        "750rpx",
        0,
        0,
        4
      ],
      "height": [
        "100rpx",
        0,
        0,
        4
      ],
      "alignItems": [
        "center",
        0,
        0,
        4
      ],
      "justifyContent": [
        "center",
        0,
        0,
        4
      ]
    }
  },
  ".refresh-text": {
    "": {
      "color": [
        "#999999",
        0,
        0,
        5
      ],
      "fontSize": [
        "24rpx",
        0,
        0,
        5
      ]
    }
  },
  ".status-block": {
    "": {
      "width": [
        "750rpx",
        0,
        0,
        7
      ],
      "flexDirection": [
        "row",
        0,
        0,
        7
      ],
      "paddingTop": [
        "20rpx",
        0,
        0,
        7
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        7
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        7
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        7
      ]
    }
  },
  ".self-status-block": {
    "": {
      "width": [
        "750rpx",
        0,
        0,
        8
      ],
      "flexDirection": [
        "row",
        0,
        0,
        8
      ],
      "justifyContent": [
        "flex-end",
        0,
        0,
        8
      ],
      "paddingTop": [
        "20rpx",
        0,
        0,
        8
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        8
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        8
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        8
      ]
    }
  },
  ".user-avatar-block": {
    "": {
      "width": [
        "80rpx",
        0,
        0,
        9
      ],
      "height": [
        "80rpx",
        0,
        0,
        9
      ]
    }
  },
  ".self-user-avatar-block": {
    "": {
      "width": [
        "80rpx",
        0,
        0,
        9
      ],
      "height": [
        "80rpx",
        0,
        0,
        9
      ]
    }
  },
  ".image-block": {
    "": {
      "width": [
        "80rpx",
        0,
        0,
        10
      ],
      "height": [
        "80rpx",
        0,
        0,
        10
      ],
      "borderRadius": [
        "40rpx",
        0,
        0,
        10
      ]
    }
  },
  ".bubble-container": {
    "": {
      "marginTop": [
        0,
        0,
        0,
        11
      ],
      "marginRight": [
        "20rpx",
        0,
        0,
        11
      ],
      "marginBottom": [
        0,
        0,
        0,
        11
      ],
      "marginLeft": [
        "20rpx",
        0,
        0,
        11
      ],
      "flexDirection": [
        "column",
        0,
        0,
        11
      ]
    }
  },
  ".bubble-content": {
    "": {
      "paddingTop": [
        "15rpx",
        0,
        0,
        12
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        12
      ],
      "paddingBottom": [
        "15rpx",
        0,
        0,
        12
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        12
      ],
      "borderRadius": [
        "12rpx",
        0,
        0,
        12
      ],
      "alignItems": [
        "flex-start",
        0,
        0,
        12
      ]
    }
  },
  ".other-bubble-content": {
    "": {
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        13
      ]
    }
  },
  ".my-bubble-content": {
    "": {
      "backgroundColor": [
        "#95ec69",
        0,
        0,
        14
      ]
    }
  },
  ".message-text": {
    "": {
      "fontSize": [
        "30rpx",
        0,
        0,
        15
      ],
      "color": [
        "#333333",
        0,
        0,
        15
      ],
      "lineHeight": [
        "40rpx",
        0,
        0,
        15
      ],
      "maxWidth": [
        "480rpx",
        0,
        0,
        15
      ],
      "lines": [
        0,
        0,
        0,
        15
      ],
      "wordWrap": [
        "break-word",
        0,
        0,
        15
      ],
      "wordBreak": [
        "break-all",
        0,
        0,
        15
      ]
    }
  },
  ".message-image": {
    "": {
      "width": [
        "300rpx",
        0,
        0,
        16
      ],
      "borderRadius": [
        "10rpx",
        0,
        0,
        16
      ],
      "marginTop": [
        0,
        0,
        0,
        16
      ],
      "marginRight": [
        "20rpx",
        0,
        0,
        16
      ],
      "marginBottom": [
        0,
        0,
        0,
        16
      ],
      "marginLeft": [
        "20rpx",
        0,
        0,
        16
      ]
    }
  },
  ".input-send-file-block": {
    "": {
      "height": [
        "110rpx",
        0,
        0,
        18
      ],
      "flexDirection": [
        "row",
        0,
        0,
        18
      ],
      "alignItems": [
        "center",
        0,
        0,
        18
      ],
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        18
      ],
      "paddingTop": [
        0,
        0,
        0,
        18
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        18
      ],
      "paddingBottom": [
        0,
        0,
        0,
        18
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        18
      ],
      "borderTopWidth": [
        "1rpx",
        0,
        0,
        18
      ],
      "borderTopColor": [
        "#eeeeee",
        0,
        0,
        18
      ]
    }
  },
  ".input-block": {
    "": {
      "flex": [
        1,
        0,
        0,
        19
      ],
      "backgroundColor": [
        "#f8f8f8",
        0,
        0,
        19
      ],
      "height": [
        "70rpx",
        0,
        0,
        19
      ],
      "borderRadius": [
        "10rpx",
        0,
        0,
        19
      ],
      "paddingTop": [
        0,
        0,
        0,
        19
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        19
      ],
      "paddingBottom": [
        0,
        0,
        0,
        19
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        19
      ],
      "justifyContent": [
        "center",
        0,
        0,
        19
      ]
    }
  },
  ".input-field": {
    "": {
      "height": [
        "70rpx",
        0,
        0,
        20
      ],
      "fontSize": [
        "28rpx",
        0,
        0,
        20
      ]
    }
  },
  ".send-icon": {
    "": {
      "width": [
        "55rpx",
        0,
        0,
        21
      ],
      "height": [
        "55rpx",
        0,
        0,
        21
      ],
      "marginLeft": [
        "20rpx",
        0,
        0,
        21
      ]
    }
  },
  ".file-icon": {
    "": {
      "width": [
        "55rpx",
        0,
        0,
        21
      ],
      "height": [
        "55rpx",
        0,
        0,
        21
      ],
      "marginLeft": [
        "20rpx",
        0,
        0,
        21
      ]
    }
  },
  ".return-icon": {
    "": {
      "fontSize": [
        "60rpx",
        0,
        0,
        22
      ],
      "marginLeft": [
        "20rpx",
        0,
        0,
        22
      ]
    }
  },
  ".user-name": {
    "": {
      "fontSize": [
        "32rpx",
        0,
        0,
        23
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        23
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
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


/***/ })
/******/ ]);