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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************************!*\
  !*** D:/my-project/uni-tetris/main.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! uni-pages?{"type":"view"} */ 1);

function initView() {
  function injectStyles(context) {

    var style0 = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 22);
    if (style0.__inject__) style0.__inject__(context);

  }
  typeof injectStyles === 'function' && injectStyles();

  UniViewJSBridge.publishHandler('webviewReady');
}
if (typeof plus !== 'undefined') {
  initView();
} else {
  document.addEventListener('plusready', initView);
}

/***/ }),
/* 1 */
/*!***********************************************************!*\
  !*** D:/my-project/uni-tetris/pages.json?{"type":"view"} ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}
window.__uniConfig = { "window": { "navigationBarTextStyle": "black", "navigationBarTitleText": "俄罗斯方块", "navigationBarBackgroundColor": "#F8F8F8", "backgroundColor": "#F8F8F8" } };
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!******************************************************************!*\
  !*** D:/my-project/uni-tetris/pages/index/index.vue?mpType=page ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 3);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 17);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_2be84a3c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=2be84a3c&scoped=true&lang=css&mpType=page */ 19);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2be84a3c",
  null,
  false,
  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/*!************************************************************************************************************!*\
  !*** D:/my-project/uni-tetris/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/my-project/uni-tetris/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  components = { score: __webpack_require__(/*! @/components/score/score.vue */ 5).default }
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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
            _vm._l(_vm._$g(3, "f"), function(item, index, $20, $30) {
              return _c(
                "v-uni-view",
                {
                  key: item,
                  staticClass: _vm._$g("3-" + $30, "sc"),
                  attrs: { _i: "3-" + $30 }
                },
                _vm._l(_vm._$g(4 + "-" + $30, "f"), function(
                  block,
                  i,
                  $21,
                  $31
                ) {
                  return _c("v-uni-view", {
                    key: block,
                    staticClass: _vm._$g("4-" + $30 + "-" + $31, "sc"),
                    class: _vm._$g("4-" + $30 + "-" + $31, "c"),
                    attrs: { _i: "4-" + $30 + "-" + $31 }
                  })
                }),
                1
              )
            }),
            1
          ),
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
            [
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
                    [_vm._v("HI-SCORE")]
                  ),
                  _c(
                    "v-uni-view",
                    {
                      staticClass: _vm._$g(8, "sc"),
                      attrs: { id: "hiscore", _i: 8 }
                    },
                    [_c("score", { attrs: { _i: 9 } })],
                    1
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                    [_vm._v("NOW-SCORE")]
                  ),
                  _c(
                    "v-uni-view",
                    {
                      staticClass: _vm._$g(12, "sc"),
                      attrs: { id: "hiscore", _i: 12 }
                    },
                    [_c("score", { attrs: { _i: 13 } })],
                    1
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(14, "sc"), attrs: { _i: 14 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
                    [_vm._v("LINES")]
                  ),
                  _c(
                    "v-uni-view",
                    {
                      staticClass: _vm._$g(16, "sc"),
                      attrs: { id: "lines", _i: 16 }
                    },
                    [_c("score", { attrs: { _i: 17 } })],
                    1
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(18, "sc"), attrs: { _i: 18 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(19, "sc"), attrs: { _i: 19 } },
                    [_vm._v("LEVEL")]
                  ),
                  _c(
                    "v-uni-view",
                    {
                      staticClass: _vm._$g(20, "sc"),
                      attrs: { id: "level", _i: 20 }
                    },
                    [_c("score", { attrs: { _i: 21 } })],
                    1
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(22, "sc"), attrs: { _i: 22 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                    [_vm._v("NEXT")]
                  ),
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(24, "sc"), attrs: { _i: 24 } },
                    _vm._l(_vm._$g(25, "f"), function(item, index, $22, $32) {
                      return _c(
                        "v-uni-view",
                        {
                          key: item,
                          staticClass: _vm._$g("25-" + $32, "sc"),
                          attrs: { _i: "25-" + $32 }
                        },
                        _vm._l(_vm._$g(26 + "-" + $32, "f"), function(
                          block,
                          i,
                          $23,
                          $33
                        ) {
                          return _c("v-uni-view", {
                            key: block,
                            staticClass: _vm._$g("26-" + $32 + "-" + $33, "sc"),
                            class: _vm._$g("26-" + $32 + "-" + $33, "c"),
                            attrs: { _i: "26-" + $32 + "-" + $33 }
                          })
                        }),
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._$g(27, "i")
                ? _c(
                    "v-uni-view",
                    {
                      staticClass: _vm._$g(27, "sc"),
                      attrs: { _i: 27 },
                      on: {
                        click: function($event) {
                          return _vm.$handleViewEvent($event)
                        }
                      }
                    },
                    [_c("span", { attrs: { _i: 28 } }, [_vm._v("开始游戏")])],
                    1
                  )
                : _vm._e(),
              _vm._$g(29, "i")
                ? _c(
                    "v-uni-view",
                    {
                      staticClass: _vm._$g(29, "sc"),
                      attrs: { _i: 29 },
                      on: {
                        click: function($event) {
                          return _vm.$handleViewEvent($event)
                        }
                      }
                    },
                    [_c("span", { attrs: { _i: 30 } }, [_vm._v("结束游戏")])],
                    1
                  )
                : _vm._e(),
              _vm._$g(31, "i")
                ? _c(
                    "v-uni-view",
                    {
                      staticClass: _vm._$g(31, "sc"),
                      attrs: { _i: 31 },
                      on: {
                        click: function($event) {
                          return _vm.$handleViewEvent($event)
                        }
                      }
                    },
                    [_c("span", { attrs: { _i: 32 } }, [_vm._v("暂停游戏")])],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(33, "sc"), attrs: { _i: 33 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(34, "sc"), attrs: { _i: 34 } },
            [
              _c("v-uni-view", {
                staticClass: _vm._$g(35, "sc"),
                attrs: { _i: 35 },
                on: {
                  click: function($event) {
                    return _vm.$handleViewEvent($event)
                  }
                }
              }),
              _c("v-uni-view", {
                staticClass: _vm._$g(36, "sc"),
                attrs: { _i: 36 },
                on: {
                  click: function($event) {
                    return _vm.$handleViewEvent($event)
                  }
                }
              }),
              _c("v-uni-view", {
                staticClass: _vm._$g(37, "sc"),
                attrs: { _i: 37 },
                on: {
                  click: function($event) {
                    return _vm.$handleViewEvent($event)
                  }
                }
              }),
              _c("v-uni-view", {
                staticClass: _vm._$g(38, "sc"),
                attrs: { _i: 38 },
                on: {
                  click: function($event) {
                    return _vm.$handleViewEvent($event)
                  }
                }
              })
            ],
            1
          ),
          _c("v-uni-view", {
            staticClass: _vm._$g(39, "sc"),
            attrs: { _i: 39 },
            on: {
              click: function($event) {
                return _vm.$handleViewEvent($event)
              }
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!***********************************************************!*\
  !*** D:/my-project/uni-tetris/components/score/score.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _score_vue_vue_type_template_id_d17ff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score.vue?vue&type=template&id=d17ff72c&scoped=true& */ 6);
/* harmony import */ var _score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score.vue?vue&type=script&lang=js& */ 8);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _score_vue_vue_type_style_index_0_id_d17ff72c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score.vue?vue&type=style&index=0&id=d17ff72c&scoped=true&lang=css& */ 10);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _score_vue_vue_type_template_id_d17ff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _score_vue_vue_type_template_id_d17ff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d17ff72c",
  null,
  false,
  _score_vue_vue_type_template_id_d17ff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/score/score.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 6 */
/*!******************************************************************************************************!*\
  !*** D:/my-project/uni-tetris/components/score/score.vue?vue&type=template&id=d17ff72c&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_score_vue_vue_type_template_id_d17ff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./score.vue?vue&type=template&id=d17ff72c&scoped=true& */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_score_vue_vue_type_template_id_d17ff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_score_vue_vue_type_template_id_d17ff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_score_vue_vue_type_template_id_d17ff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_score_vue_vue_type_template_id_d17ff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/my-project/uni-tetris/components/score/score.vue?vue&type=template&id=d17ff72c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    _vm._l(_vm._$g(1, "f"), function(item, index, $20, $30) {
      return _c(
        "v-uni-view",
        {
          key: item,
          staticClass: _vm._$g("1-" + $30, "sc"),
          class: _vm._$g("1-" + $30, "c"),
          attrs: { _i: "1-" + $30 }
        },
        [
          _c("v-uni-view", {
            staticClass: _vm._$g("2-" + $30, "sc"),
            attrs: { _i: "2-" + $30 }
          }),
          _c("v-uni-view", {
            staticClass: _vm._$g("3-" + $30, "sc"),
            attrs: { _i: "3-" + $30 }
          })
        ],
        1
      )
    }),
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!************************************************************************************!*\
  !*** D:/my-project/uni-tetris/components/score/score.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./score.vue?vue&type=script&lang=js& */ 9);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 9 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/my-project/uni-tetris/components/score/score.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{
  props: ["value", "maxLength"],
  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 10 */
/*!********************************************************************************************************************!*\
  !*** D:/my-project/uni-tetris/components/score/score.vue?vue&type=style&index=0&id=d17ff72c&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_score_vue_vue_type_style_index_0_id_d17ff72c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./score.vue?vue&type=style&index=0&id=d17ff72c&scoped=true&lang=css& */ 11);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_score_vue_vue_type_style_index_0_id_d17ff72c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_score_vue_vue_type_style_index_0_id_d17ff72c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_score_vue_vue_type_style_index_0_id_d17ff72c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_score_vue_vue_type_style_index_0_id_d17ff72c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_score_vue_vue_type_style_index_0_id_d17ff72c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/my-project/uni-tetris/components/score/score.vue?vue&type=style&index=0&id=d17ff72c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./score.vue?vue&type=style&index=0&id=d17ff72c&scoped=true&lang=css& */ 12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 14).default
var update = add("c34cafec", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 12 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/my-project/uni-tetris/components/score/score.vue?vue&type=style&index=0&id=d17ff72c&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/runtime/api.js */ 13);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.scores[data-v-d17ff72c] {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-webkit-align-items: center;\n\t        align-items: center;\n\t-webkit-box-pack: end;\n\t-webkit-justify-content: flex-end;\n\t        justify-content: flex-end;\n\tbackground-color: #030504;\n\tpadding: 5rpx;\n}\n.default-score[data-v-d17ff72c] {\n\tmargin: 0 0 0 10rpx;\n}\n.default-score .score[data-v-d17ff72c] {\n\twidth: 22rpx;\n\theight: 18rpx;\n\tposition: relative;\n}\n.default-score .score[data-v-d17ff72c]::before, .default-score .score[data-v-d17ff72c]::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\t-webkit-transform: translate(-50%, -50%);\n\t        transform: translate(-50%, -50%);\n\tbox-sizing: border-box;\n\tborder-width: 4rpx;\n\tborder-style: solid;\n}\n.default-score .score[data-v-d17ff72c]::before {\n\twidth: 100%;\n\theight: 80%;\n\tborder-left-color: #030504;\n\tborder-right-color: #030504;\n\tborder-top-color: transparent;\n\tborder-bottom-color: transparent;\n}\n.default-score .score[data-v-d17ff72c]::after {\n\twidth: 80%;\n\theight: 100%;\n\tborder-left-color: transparent;\n\tborder-right-color: transparent;\n}\n.default-score .score-top[data-v-d17ff72c]::after {\n\tborder-top-color: #030504;\n\tborder-bottom-color: #030504;\n\tborder-bottom-width: 2rpx;\n}\n.default-score .score-bottom[data-v-d17ff72c]::after {\n\tborder-top-color: #030504;\n\tborder-bottom-color: #030504;\n\tborder-top-width: 2rpx;\n}\n/* 0 */\n.score_0 .score-top[data-v-d17ff72c]::before {\n\tborder-left-color: #8A9378;\n\tborder-right-color: #8A9378;\n}\n.score_0 .score-top[data-v-d17ff72c]::after {\n\tborder-top-color: #8A9378;\n}\n.score_0 .score-bottom[data-v-d17ff72c]::before {\n\tborder-left-color: #8A9378;\n\tborder-right-color: #8A9378;\n}\n.score_0 .score-bottom[data-v-d17ff72c]::after {\n\tborder-bottom-color: #8A9378;\n}\n/* 1 */\n.score_1 .score-top[data-v-d17ff72c]::before, .score_1 .score-bottom[data-v-d17ff72c]::before {\n\tborder-right-color: #8A9378;\n}\n/* 2 */\n.score_2 .score-top[data-v-d17ff72c]::before {\n\tborder-right-color: #8A9378;\n}\n.score_2 .score-top[data-v-d17ff72c]::after {\n\tborder-top-color: #8A9378;\n\tborder-bottom-color: #8A9378;\n}\n.score_2 .score-bottom[data-v-d17ff72c]::before {\n\tborder-left-color: #8A9378;\n}\n.score_2 .score-bottom[data-v-d17ff72c]::after {\n\tborder-top-color: #8A9378;\n\tborder-bottom-color: #8A9378;\n}\n/* 3 */\n.score_3 .score-top[data-v-d17ff72c]::before, .score_3 .score-bottom[data-v-d17ff72c]::before {\n\tborder-right-color: #8A9378;\n}\n.score_3 .score-top[data-v-d17ff72c]::after, .score_3 .score-bottom[data-v-d17ff72c]::after {\n\tborder-top-color: #8A9378;\n\tborder-bottom-color: #8A9378;\n}\n/* 4 */\n.score_4 .score-top[data-v-d17ff72c]::before {\n\tborder-left-color: #8A9378;\n\tborder-right-color: #8A9378;\n}\n.score_4 .score-top[data-v-d17ff72c]::after {\n\tborder-bottom-color: #8A9378;\n}\n.score_4 .score-bottom[data-v-d17ff72c]::after {\n\tborder-top-color: #8A9378;\n}\n.score_4 .score-bottom[data-v-d17ff72c]::before {\n\tborder-right-color: #8A9378;\n}\n/* 5 */\n.score_5 .score-top[data-v-d17ff72c]::before {\n\tborder-left-color: #8A9378;\n}\n.score_5 .score-top[data-v-d17ff72c]::after {\n\tborder-top-color: #8A9378;\n\tborder-bottom-color: #8A9378;\n}\n.score_5 .score-bottom[data-v-d17ff72c]::before {\n\tborder-right-color: #8A9378;\n}\n.score_5 .score-bottom[data-v-d17ff72c]::after {\n\tborder-top-color: #8A9378;\n\tborder-bottom-color: #8A9378;\n}\n/* 6 */\n.score_6 .score-top[data-v-d17ff72c]::before {\n\tborder-left-color: #8A9378;\n}\n.score_6 .score-top[data-v-d17ff72c]::after {\n\tborder-top-color: #8A9378;\n\tborder-bottom-color: #8A9378;\n}\n.score_6 .score-bottom[data-v-d17ff72c]::before {\n\tborder-left-color: #8A9378;\n\tborder-right-color: #8A9378;\n}\n.score_6 .score-bottom[data-v-d17ff72c]::after {\n\tborder-top-color: #8A9378;\n\tborder-bottom-color: #8A9378;\n}\n/* 7 */\n.score_7 .score-top[data-v-d17ff72c]::before {\n\tborder-right-color: #8A9378;\n}\n.score_7 .score-top[data-v-d17ff72c]::after {\n\tborder-top-color: #8A9378;\n}\n.score_7 .score-bottom[data-v-d17ff72c]::before {\n\tborder-right-color: #8A9378;\n}\n/* 8 */\n.score_8 .score-top[data-v-d17ff72c]::before, .score_8 .score-bottom[data-v-d17ff72c]::before {\n\tborder-left-color: #8A9378;\n\tborder-right-color: #8A9378;\n}\n.score_8 .score-top[data-v-d17ff72c]::after, .score_8 .score-bottom[data-v-d17ff72c]::after {\n\tborder-top-color: #8A9378;\n\tborder-bottom-color: #8A9378;\n}\n/* 9 */\n.score_9 .score-top[data-v-d17ff72c]::before {\n\tborder-left-color: #8A9378;\n\tborder-right-color: #8A9378;\n}\n.score_9 .score-top[data-v-d17ff72c]::after, .score_9 .score-bottom[data-v-d17ff72c]::after {\n\tborder-top-color: #8A9378;\n\tborder-bottom-color: #8A9378;\n}\n.score_9 .score-bottom[data-v-d17ff72c]::before {\n\tborder-right-color: #8A9378;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 13 */
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 14 */
/*!********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ 15);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : processCss(obj.css) // fixed by xxxxxx

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = processCss(obj.css) // fixed by xxxxxx
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}

//fixed by xxxxxx
var UPX_RE = /\b([+-]?\d+(\.\d+)?)[r|u]px\b/g
var VAR_STATUS_BAR_HEIGHT = /var\(--status-bar-height\)/gi
var VAR_WINDOW_TOP = /var\(--window-top\)/gi
var VAR_WINDOW_BOTTOM = /var\(--window-bottom\)/gi
var VAR_WINDOW_LEFT = /var\(--window-left\)/gi
var VAR_WINDOW_RIGHT = /var\(--window-right\)/gi

var statusBarHeight = false
function processCss(css) {
	if (!uni.canIUse('css.var')) { //不支持 css 变量
    if (statusBarHeight === false) {
      statusBarHeight = plus.navigator.getStatusbarHeight()
    }
		var offset = {
            statusBarHeight: statusBarHeight,
            top: window.__WINDOW_TOP || 0,
            bottom: window.__WINDOW_BOTTOM || 0
        }
		css = css.replace(VAR_STATUS_BAR_HEIGHT, offset.statusBarHeight + 'px')
			.replace(VAR_WINDOW_TOP, offset.top + 'px')
			.replace(VAR_WINDOW_BOTTOM, offset.bottom + 'px')
            .replace(VAR_WINDOW_LEFT, '0px')
            .replace(VAR_WINDOW_RIGHT, '0px')
	}
  return css.replace(/\{[\s\S]+?\}|@media.+\{/g, function (css) {
    return css.replace(UPX_RE, function (a, b) {
      return uni.upx2px(b) + 'px'
    })
  })
}


/***/ }),
/* 15 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/listToStyles.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 16 */
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
/* 17 */
/*!******************************************************************************************!*\
  !*** D:/my-project/uni-tetris/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=script&lang=js&mpType=page */ 18);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 18 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/my-project/uni-tetris/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _score = _interopRequireDefault(__webpack_require__(/*! @/components/score/score.vue */ 5));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {
    'Score': _score.default } };exports.default = _default;

/***/ }),
/* 19 */
/*!**************************************************************************************************************************!*\
  !*** D:/my-project/uni-tetris/pages/index/index.vue?vue&type=style&index=0&id=2be84a3c&scoped=true&lang=css&mpType=page ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_2be84a3c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&id=2be84a3c&scoped=true&lang=css&mpType=page */ 20);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_2be84a3c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_2be84a3c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_2be84a3c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_2be84a3c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_2be84a3c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 20 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/my-project/uni-tetris/pages/index/index.vue?vue&type=style&index=0&id=2be84a3c&scoped=true&lang=css&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&id=2be84a3c&scoped=true&lang=css&mpType=page */ 21);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 14).default
var update = add("994f6126", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 21 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/my-project/uni-tetris/pages/index/index.vue?vue&type=style&index=0&id=2be84a3c&scoped=true&lang=css&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/runtime/api.js */ 13);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".control[data-v-2be84a3c] {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: flex;\r\n\tpadding: 40rpx 60rpx;\r\n\t-webkit-box-pack: justify;\r\n\t-webkit-justify-content: space-between;\r\n\t        justify-content: space-between;\r\n\t-webkit-box-align: center;\r\n\t-webkit-align-items: center;\r\n\t        align-items: center;\r\n\tbox-sizing: border-box;\n}\n.direction[data-v-2be84a3c] {\r\n\twidth: 180rpx;\r\n\theight: 190rpx;\r\n\tposition: relative;\n}\n.control-btn[data-v-2be84a3c] {\r\n\twidth: 40rpx;\r\n\theight: 60rpx;\r\n\tbackground: -webkit-radial-gradient(#4b5a6f 34%, #3c495b 94%);\r\n\tbackground: radial-gradient(#4b5a6f 34%, #3c495b 94%);\r\n\tposition: absolute;\r\n\tborder-bottom-left-radius: 20rpx;\r\n\tborder-bottom-right-radius: 20rpx;\n}\n.control-top[data-v-2be84a3c] {\r\n\ttop: 0;\r\n\tleft: 50%;\r\n\t-webkit-transform: translateX(-50%);\r\n\t        transform: translateX(-50%);\r\n\tbox-shadow: 0 2rpx 2rpx rgba(75,90,111,0.7);\n}\n.control-left[data-v-2be84a3c] {\r\n\ttop: 50%;\r\n\tleft: 0;\r\n\t-webkit-transform: translateY(-50%) rotateZ(-90deg);\r\n\t        transform: translateY(-50%) rotateZ(-90deg);\r\n\tbox-shadow: -1rpx 1rpx 1rpx rgba(75,90,111,0.7);\n}\n.control-right[data-v-2be84a3c] {\r\n\ttop: 50%;\r\n\tright: 0;\r\n\t-webkit-transform: translateY(-50%) rotateZ(90deg);\r\n\t        transform: translateY(-50%) rotateZ(90deg);\r\n\tbox-shadow: 2rpx 2rpx 2rpx rgba(75,90,111,0.7);\n}\n.control-bottom[data-v-2be84a3c] {\r\n\tbottom: 0;\r\n\tleft: 50%;\r\n\t-webkit-transform: translateX(-50%) rotateZ(180deg);\r\n\t        transform: translateX(-50%) rotateZ(180deg);\r\n\tbox-shadow: 0 -1rpx 1rpx rgba(75,90,111,0.7);\n}\n.circle-btn[data-v-2be84a3c] {\r\n\twidth: 180rpx;\r\n\theight: 180rpx;\r\n\tborder-radius: 180rpx;\r\n\tbackground: -webkit-radial-gradient(circle, #4b5a6f 34%, #3c495b 94%);\r\n\tbackground: radial-gradient(circle, #4b5a6f 34%, #3c495b 94%);\r\n\tbox-shadow: 0 4rpx 2rpx rgba(75,90,111,0.7);\n}\n.default-score[data-v-2be84a3c] {\r\n\tmargin: 0 10rpx 0 0;\n}\n.default-score .score[data-v-2be84a3c] {\r\n\twidth: 22rpx;\r\n\theight: 18rpx;\r\n\tposition: relative;\n}\n.default-score .score[data-v-2be84a3c]::before, .default-score .score[data-v-2be84a3c]::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\t        transform: translate(-50%, -50%);\r\n\tbox-sizing: border-box;\r\n\tborder-width: 4rpx;\r\n\tborder-style: solid;\n}\n.default-score .score[data-v-2be84a3c]::before {\r\n\twidth: 100%;\r\n\theight: 80%;\r\n\tborder-left-color: #8A9378;\r\n\tborder-right-color: #8A9378;\r\n\tborder-top-color: transparent;\r\n\tborder-bottom-color: transparent;\n}\n.default-score .score[data-v-2be84a3c]::after {\r\n\twidth: 80%;\r\n\theight: 100%;\r\n\tborder-left-color: transparent;\r\n\tborder-right-color: transparent;\n}\n.default-score .score-top[data-v-2be84a3c]::after {\r\n\tborder-top-color: #8A9378;\r\n\tborder-bottom-color: #8A9378;\r\n\tborder-bottom-width: 2rpx;\n}\n.default-score .score-bottom[data-v-2be84a3c]::after {\r\n\tborder-top-color: #8A9378;\r\n\tborder-bottom-color: #8A9378;\r\n\tborder-top-width: 2rpx;\n}\r\n\r\n/* 0 */\n.score_0 .score-top[data-v-2be84a3c]::before {\r\n\tborder-left-color: #030504;\r\n\tborder-right-color: #030504;\n}\n.score_0 .score-top[data-v-2be84a3c]::after {\r\n\tborder-top-color: #030504;\n}\n.score_0 .score-bottom[data-v-2be84a3c]::before {\r\n\tborder-left-color: #030504;\r\n\tborder-right-color: #030504;\n}\n.score_0 .score-bottom[data-v-2be84a3c]::after {\r\n\tborder-bottom-color: #030504;\n}\r\n\r\n/* 1 */\n.score_1 .score-top[data-v-2be84a3c]::before, .score_1 .score-bottom[data-v-2be84a3c]::before {\r\n\tborder-right-color: #030504;\n}\r\n\r\n/* 2 */\n.score_2 .score-top[data-v-2be84a3c]::before {\r\n\tborder-right-color: #030504;\n}\n.score_2 .score-top[data-v-2be84a3c]::after {\r\n\tborder-top-color: #030504;\r\n\tborder-bottom-color: #030504;\n}\n.score_2 .score-bottom[data-v-2be84a3c]::before {\r\n\tborder-left-color: #030504;\n}\n.score_2 .score-bottom[data-v-2be84a3c]::after {\r\n\tborder-top-color: #030504;\r\n\tborder-bottom-color: #030504;\n}\r\n\r\n/* 3 */\n.score_3 .score-top[data-v-2be84a3c]::before, .score_3 .score-bottom[data-v-2be84a3c]::before {\r\n\tborder-right-color: #030504;\n}\n.score_3 .score-top[data-v-2be84a3c]::after, .score_3 .score-bottom[data-v-2be84a3c]::after {\r\n\tborder-top-color: #030504;\r\n\tborder-bottom-color: #030504;\n}\r\n\r\n/* 4 */\n.score_4 .score-top[data-v-2be84a3c]::before {\r\n\tborder-left-color: #030504;\r\n\tborder-right-color: #030504;\n}\n.score_4 .score-top[data-v-2be84a3c]::after {\r\n\tborder-bottom-color: #030504;\n}\n.score_4 .score-bottom[data-v-2be84a3c]::after {\r\n\tborder-top-color: #030504;\n}\n.score_4 .score-bottom[data-v-2be84a3c]::before {\r\n\tborder-right-color: #030504;\n}\r\n\r\n/* 5 */\n.score_5 .score-top[data-v-2be84a3c]::before {\r\n\tborder-left-color: #030504;\n}\n.score_5 .score-top[data-v-2be84a3c]::after {\r\n\tborder-top-color: #030504;\r\n\tborder-bottom-color: #030504;\n}\n.score_5 .score-bottom[data-v-2be84a3c]::before {\r\n\tborder-right-color: #030504;\n}\n.score_5 .score-bottom[data-v-2be84a3c]::after {\r\n\tborder-top-color: #030504;\r\n\tborder-bottom-color: #030504;\n}\r\n\r\n/* 6 */\n.score_6 .score-top[data-v-2be84a3c]::before {\r\n\tborder-left-color: #030504;\n}\n.score_6 .score-top[data-v-2be84a3c]::after {\r\n\tborder-top-color: #030504;\r\n\tborder-bottom-color: #030504;\n}\n.score_6 .score-bottom[data-v-2be84a3c]::before {\r\n\tborder-left-color: #030504;\r\n\tborder-right-color: #030504;\n}\n.score_6 .score-bottom[data-v-2be84a3c]::after {\r\n\tborder-top-color: #030504;\r\n\tborder-bottom-color: #030504;\n}\r\n\r\n/* 7 */\n.score_7 .score-top[data-v-2be84a3c]::before {\r\n\tborder-right-color: #030504;\n}\n.score_7 .score-top[data-v-2be84a3c]::after {\r\n\tborder-top-color: #030504;\n}\n.score_7 .score-bottom[data-v-2be84a3c]::before {\r\n\tborder-right-color: #030504;\n}\r\n\r\n/* 8 */\n.score_8 .score-top[data-v-2be84a3c]::before, .score_8 .score-bottom[data-v-2be84a3c]::before {\r\n\tborder-left-color: #030504;\r\n\tborder-right-color: #030504;\n}\n.score_8 .score-top[data-v-2be84a3c]::after, .score_8 .score-bottom[data-v-2be84a3c]::after {\r\n\tborder-top-color: #030504;\r\n\tborder-bottom-color: #030504;\n}\r\n\r\n/* 9 */\n.score_9 .score-top[data-v-2be84a3c]::before {\r\n\tborder-left-color: #030504;\r\n\tborder-right-color: #030504;\n}\n.score_9 .score-top[data-v-2be84a3c]::after, .score_9 .score-bottom[data-v-2be84a3c]::after {\r\n\tborder-top-color: #030504;\r\n\tborder-bottom-color: #030504;\n}\n.score_9 .score-bottom[data-v-2be84a3c]::before {\r\n\tborder-right-color: #030504;\n}\n.container[data-v-2be84a3c] {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t-webkit-flex-direction: column;\r\n\t        flex-direction: column;\r\n\theight: 100vh;\r\n\tpadding: 5rpx;\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tbackground-color: #A1AA8D;\n}\n.top[data-v-2be84a3c] {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: flex;\n}\n.game-world[data-v-2be84a3c] {\r\n\tborder: 4rpx solid #060E03;\r\n\theight: 100%;\r\n\tpadding: 5rpx;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t-webkit-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-pack: justify;\r\n\t-webkit-justify-content: space-between;\r\n\t        justify-content: space-between;\r\n\theight: 960rpx;\n}\n.line[data-v-2be84a3c] {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: flex;\n}\n.block[data-v-2be84a3c] {\r\n\twidth: 40rpx;\r\n\theight: 40rpx;\r\n\tmargin: 4rpx;\r\n\tborder: 4rpx solid #8A9378;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t-webkit-align-items: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: center;\r\n\t-webkit-justify-content: center;\r\n\t        justify-content: center;\r\n\tbox-sizing: border-box;\n}\n.block[data-v-2be84a3c]::after {\r\n\tcontent: '';\r\n\twidth: 70%;\r\n\theight: 70%;\r\n\tbackground-color: #8A9378;\n}\n.act_block[data-v-2be84a3c] {\r\n\tborder: 4rpx solid #030504;\n}\n.act_block[data-v-2be84a3c]::after {\r\n\tbackground-color: #030504;\n}\n.game-info[data-v-2be84a3c] {\r\n\t-webkit-box-flex: 1;\r\n\t-webkit-flex: 1;\r\n\t        flex: 1;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t-webkit-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-align: center;\r\n\t-webkit-align-items: center;\r\n\t        align-items: center;\r\n\tpadding: 0 10px;\r\n\tbox-sizing: border-box;\n}\n.game-score[data-v-2be84a3c] {\r\n\twidth: 100%;\r\n\tmargin-top: 20rpx;\n}\n.score-title[data-v-2be84a3c] {\r\n\tfont-size: 18rpx;\r\n\tfont-weight: bold;\n}\n.score-line[data-v-2be84a3c] {\r\n\tmargin-top: 10rpx;\n}\n.next-world[data-v-2be84a3c] {\r\n\tmargin-top: 10rpx;\n}\n.game-btn[data-v-2be84a3c] {\r\n\tborder: 4rpx solid #030504;\r\n\tpadding: 10rpx 5rpx;\r\n\tcolor: #8A9378;\r\n\tfont-size: 24rpx;\r\n\tmargin-top: 30rpx;\r\n\tbox-sizing: border-box;\n}\n.game-btn span[data-v-2be84a3c] {\r\n\tbackground-color: #030504;\r\n\tpadding: 5rpx;\n}\n.control[data-v-2be84a3c] {\r\n\tpadding: 0 100rpx;\r\n\t-webkit-box-flex: 1;\r\n\t-webkit-flex: 1;\r\n\t        flex: 1;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 22 */
/*!*************************************************************************!*\
  !*** D:/my-project/uni-tetris/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 23);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/my-project/uni-tetris/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 24);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 14).default
var update = add("0ad31461", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 24 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/my-project/uni-tetris/App.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/runtime/api.js */ 13);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */\n", ""]);
// Exports
module.exports = exports;


/***/ })
/******/ ]);