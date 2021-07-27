(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!****************************************!*\
  !*** D:/my-project/uni-tetris/main.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 16));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 17));\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread(_objectSpread({},\n_App.default), {}, {\n  store: _store.default }));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwic3RvcmUiLCIkbW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFtQjtBQUNuQjtBQUNBLDRFOztBQUVBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7O0FBRUFDLGFBQUlDLE1BQUosR0FBYSxLQUFiOztBQUVBLElBQU1DLEdBQUcsR0FBRyxJQUFJTCxZQUFKO0FBQ0xHLFlBREs7QUFFWEcsT0FBSyxFQUFMQSxjQUZXLElBQVo7O0FBSUFELEdBQUcsQ0FBQ0UsTUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwLFxyXG5cdHN0b3JlXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************************!*\
  !*** D:/my-project/uni-tetris/pages.json ***!
  \*******************************************/
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2be84a3c\",\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3dLO0FBQ3hLLGdCQUFnQixrTEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjJiZTg0YTNjXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!************************************************************************************************************!*\
  !*** D:/my-project/uni-tetris/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/my-project/uni-tetris/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "view",
    { staticClass: _vm._$s(0, "sc", "container"), attrs: { _i: 0 } },
    [
      _c("view", { staticClass: _vm._$s(1, "sc", "top"), attrs: { _i: 1 } }, [
        _c(
          "view",
          { staticClass: _vm._$s(2, "sc", "game-world"), attrs: { _i: 2 } },
          _vm._l(_vm._$s(3, "f", { forItems: _vm.worldData }), function(
            item,
            index,
            $20,
            $30
          ) {
            return _c(
              "view",
              {
                key: _vm._$s(3, "f", { forIndex: $20, key: index }),
                staticClass: _vm._$s("3-" + $30, "sc", "line"),
                attrs: { _i: "3-" + $30 }
              },
              _vm._l(_vm._$s(4 + "-" + $30, "f", { forItems: item }), function(
                block,
                i,
                $21,
                $31
              ) {
                return _c("view", {
                  key: _vm._$s(4 + "-" + $30, "f", { forIndex: $21, key: i }),
                  staticClass: _vm._$s("4-" + $30 + "-" + $31, "sc", "block"),
                  class: _vm._$s("4-" + $30 + "-" + $31, "c", {
                    act_block: block == 1
                  }),
                  attrs: { _i: "4-" + $30 + "-" + $31 }
                })
              }),
              0
            )
          }),
          0
        ),
        _c(
          "view",
          { staticClass: _vm._$s(5, "sc", "game-info"), attrs: { _i: 5 } },
          [
            _c(
              "view",
              { staticClass: _vm._$s(6, "sc", "game-score"), attrs: { _i: 6 } },
              [
                _c("view", {
                  staticClass: _vm._$s(7, "sc", "score-title"),
                  attrs: { _i: 7 }
                }),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(8, "sc", "score-line"),
                    attrs: { id: "hiscore", _i: 8 }
                  },
                  [_c("score", { attrs: { value: _vm.hiScore, _i: 9 } })],
                  1
                )
              ]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s(10, "sc", "game-score"),
                attrs: { _i: 10 }
              },
              [
                _c("view", {
                  staticClass: _vm._$s(11, "sc", "score-title"),
                  attrs: { _i: 11 }
                }),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(12, "sc", "score-line"),
                    attrs: { id: "hiscore", _i: 12 }
                  },
                  [_c("score", { attrs: { value: _vm.score, _i: 13 } })],
                  1
                )
              ]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s(14, "sc", "game-score"),
                attrs: { _i: 14 }
              },
              [
                _c("view", {
                  staticClass: _vm._$s(15, "sc", "score-title"),
                  attrs: { _i: 15 }
                }),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(16, "sc", "score-line"),
                    attrs: { id: "lines", _i: 16 }
                  },
                  [_c("score", { attrs: { value: _vm.lines, _i: 17 } })],
                  1
                )
              ]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s(18, "sc", "game-score"),
                attrs: { _i: 18 }
              },
              [
                _c("view", {
                  staticClass: _vm._$s(19, "sc", "score-title"),
                  attrs: { _i: 19 }
                }),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(20, "sc", "score-line"),
                    attrs: { id: "level", _i: 20 }
                  },
                  [_c("score", { attrs: { value: _vm.level, _i: 21 } })],
                  1
                )
              ]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s(22, "sc", "game-score"),
                attrs: { _i: 22 }
              },
              [
                _c("view", {
                  staticClass: _vm._$s(23, "sc", "score-title"),
                  attrs: { _i: 23 }
                }),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(24, "sc", "next-world"),
                    attrs: { _i: 24 }
                  },
                  _vm._l(_vm._$s(25, "f", { forItems: _vm.nextData }), function(
                    item,
                    index,
                    $22,
                    $32
                  ) {
                    return _c(
                      "view",
                      {
                        key: _vm._$s(25, "f", { forIndex: $22, key: index }),
                        staticClass: _vm._$s("25-" + $32, "sc", "line"),
                        attrs: { _i: "25-" + $32 }
                      },
                      _vm._l(
                        _vm._$s(26 + "-" + $32, "f", { forItems: item }),
                        function(block, i, $23, $33) {
                          return _c("view", {
                            key: _vm._$s(26 + "-" + $32, "f", {
                              forIndex: $23,
                              key: i
                            }),
                            staticClass: _vm._$s(
                              "26-" + $32 + "-" + $33,
                              "sc",
                              "block"
                            ),
                            class: _vm._$s("26-" + $32 + "-" + $33, "c", {
                              act_block: block == 1
                            }),
                            attrs: { _i: "26-" + $32 + "-" + $33 }
                          })
                        }
                      ),
                      0
                    )
                  }),
                  0
                )
              ]
            ),
            _vm._$s(27, "i", _vm.ended)
              ? _c(
                  "view",
                  {
                    staticClass: _vm._$s(27, "sc", "game-btn"),
                    attrs: { _i: 27 },
                    on: { click: _vm.startGame }
                  },
                  [_c("span")]
                )
              : _vm._e(),
            _vm._$s(29, "i", !_vm.ended)
              ? _c(
                  "view",
                  {
                    staticClass: _vm._$s(29, "sc", "game-btn"),
                    attrs: { _i: 29 },
                    on: { click: _vm.endGame }
                  },
                  [_c("span")]
                )
              : _vm._e(),
            _vm._$s(31, "i", !_vm.ended && !_vm.pause)
              ? _c(
                  "view",
                  {
                    staticClass: _vm._$s(31, "sc", "game-btn"),
                    attrs: { _i: 31 },
                    on: { click: _vm.pauseGame }
                  },
                  [_c("span")]
                )
              : _vm._e()
          ]
        )
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(33, "sc", "control"), attrs: { _i: 33 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(34, "sc", "direction"), attrs: { _i: 34 } },
            [
              _c("view", {
                staticClass: _vm._$s(35, "sc", "control-btn control-top"),
                attrs: { _i: 35 },
                on: { click: _vm.changeBlock }
              }),
              _c("view", {
                staticClass: _vm._$s(36, "sc", "control-btn control-left"),
                attrs: { _i: 36 },
                on: { click: _vm.left }
              }),
              _c("view", {
                staticClass: _vm._$s(37, "sc", "control-btn control-right"),
                attrs: { _i: 37 },
                on: { click: _vm.right }
              }),
              _c("view", {
                staticClass: _vm._$s(38, "sc", "control-btn control-bottom"),
                attrs: { _i: 38 },
                on: { click: _vm.drop }
              })
            ]
          ),
          _c("view", {
            staticClass: _vm._$s(39, "sc", "circle-btn"),
            attrs: { _i: 39 },
            on: { click: _vm.quickDrop }
          })
        ]
      )
    ]
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _score_vue_vue_type_template_id_d17ff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score.vue?vue&type=template&id=d17ff72c&scoped=true& */ 6);\n/* harmony import */ var _score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score.vue?vue&type=script&lang=js& */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _score_vue_vue_type_template_id_d17ff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _score_vue_vue_type_template_id_d17ff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"d17ff72c\",\n  null,\n  false,\n  _score_vue_vue_type_template_id_d17ff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/score/score.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDeUQ7QUFDTDs7O0FBR3BEO0FBQ3dLO0FBQ3hLLGdCQUFnQixrTEFBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vc2NvcmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQxN2ZmNzJjJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2NvcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zY29yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImQxN2ZmNzJjXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvc2NvcmUvc2NvcmUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!******************************************************************************************************!*\
  !*** D:/my-project/uni-tetris/components/score/score.vue?vue&type=template&id=d17ff72c&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_template_id_d17ff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./score.vue?vue&type=template&id=d17ff72c&scoped=true& */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_template_id_d17ff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_template_id_d17ff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_template_id_d17ff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_template_id_d17ff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/my-project/uni-tetris/components/score/score.vue?vue&type=template&id=d17ff72c&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "view",
    { staticClass: _vm._$s(0, "sc", "scores"), attrs: { _i: 0 } },
    _vm._l(_vm._$s(1, "f", { forItems: _vm.valueSync }), function(
      item,
      index,
      $20,
      $30
    ) {
      return _c(
        "view",
        {
          key: _vm._$s(1, "f", { forIndex: $20, key: index }),
          staticClass: _vm._$s("1-" + $30, "sc", "default-score"),
          class: _vm._$s("1-" + $30, "c", "score_" + item),
          attrs: { _i: "1-" + $30 }
        },
        [
          _c("view", {
            staticClass: _vm._$s("2-" + $30, "sc", "score score-top"),
            attrs: { _i: "2-" + $30 }
          }),
          _c("view", {
            staticClass: _vm._$s("3-" + $30, "sc", "score score-bottom"),
            attrs: { _i: "3-" + $30 }
          })
        ]
      )
    }),
    0
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./score.vue?vue&type=script&lang=js& */ 9);\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFqQixDQUFnQiwra0JBQUcsRUFBQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zY29yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2NvcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/my-project/uni-tetris/components/score/score.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    value: {\n      type: String | Number,\n      default: 0 },\n\n    maxLength: {\n      type: String | Number,\n      default: 6 } },\n\n\n  computed: {\n    valueSync: function valueSync() {\n      var valueSync = this.value.toString();\n      return valueSync.length <= this.maxLength ? this.str2arr(valueSync) : new Array(this.maxLength).fill(9);\n    } },\n\n  methods: {\n    str2arr: function str2arr(value) {\n      return value.length > 1 ? value.split('') : [value];\n    },\n    zeroFilling: function zeroFilling(value) {\n      for (var i = value.length - 1; i < this.maxLength; i++) {\n        value = '0' + value;\n      }\n      return value;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9zY29yZS9zY29yZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsZ0JBRkEsRUFEQTs7QUFLQTtBQUNBLDJCQURBO0FBRUEsZ0JBRkEsRUFMQSxFQURBOzs7QUFXQTtBQUNBLGFBREEsdUJBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FKQSxFQVhBOztBQWlCQTtBQUNBLFdBREEsbUJBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsZUFKQSx1QkFJQSxLQUpBLEVBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVEEsRUFqQkEsRSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwic2NvcmVzXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cImRlZmF1bHQtc2NvcmVcIiA6Y2xhc3M9XCInc2NvcmVfJyArIGl0ZW1cIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gdmFsdWVTeW5jXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic2NvcmUgc2NvcmUtdG9wXCI+PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInNjb3JlIHNjb3JlLWJvdHRvbVwiPjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHZhbHVlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nIHwgTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDBcclxuXHRcdFx0fSxcclxuXHRcdFx0bWF4TGVuZ3RoOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nIHwgTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDZcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdHZhbHVlU3luYyAoKSB7XHJcblx0XHRcdFx0bGV0IHZhbHVlU3luYyA9IHRoaXMudmFsdWUudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRyZXR1cm4gdmFsdWVTeW5jLmxlbmd0aCA8PSB0aGlzLm1heExlbmd0aCA/IHRoaXMuc3RyMmFycih2YWx1ZVN5bmMpIDogbmV3IEFycmF5KHRoaXMubWF4TGVuZ3RoKS5maWxsKDkpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRzdHIyYXJyICh2YWx1ZSkge1xyXG5cdFx0XHRcdHJldHVybiB2YWx1ZS5sZW5ndGggPiAxID8gdmFsdWUuc3BsaXQoJycpIDogW3ZhbHVlXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR6ZXJvRmlsbGluZyAodmFsdWUpIHtcclxuXHRcdFx0XHRmb3IgKCBsZXQgaSA9IHZhbHVlLmxlbmd0aCAtIDE7IGkgPCB0aGlzLm1heExlbmd0aDsgaSsrICkge1xyXG5cdFx0XHRcdFx0dmFsdWUgPSAnMCcgKyB2YWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cclxuXHQuc2NvcmVzIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMzA1MDQ7XHJcblx0XHRwYWRkaW5nOiA1cnB4O1xyXG5cdH1cclxuXHQuZGVmYXVsdC1zY29yZSB7XHJcblx0XHRtYXJnaW46IDAgMCAwIDEwcnB4O1xyXG5cdH1cclxuXHQuZGVmYXVsdC1zY29yZSAuc2NvcmUge1xyXG5cdFx0d2lkdGg6IDIycnB4O1xyXG5cdFx0aGVpZ2h0OiAxOHJweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0LmRlZmF1bHQtc2NvcmUgLnNjb3JlOjpiZWZvcmUsIC5kZWZhdWx0LXNjb3JlIC5zY29yZTo6YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDUwJTtcclxuXHRcdGxlZnQ6IDUwJTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdGJvcmRlci13aWR0aDogNHJweDtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0fVxyXG5cdC5kZWZhdWx0LXNjb3JlIC5zY29yZTo6YmVmb3JlIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiA4MCU7XHJcblx0XHRib3JkZXItbGVmdC1jb2xvcjogIzAzMDUwNDtcclxuXHRcdGJvcmRlci1yaWdodC1jb2xvcjogIzAzMDUwNDtcclxuXHRcdGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0fVxyXG5cdC5kZWZhdWx0LXNjb3JlIC5zY29yZTo6YWZ0ZXIge1xyXG5cdFx0d2lkdGg6IDgwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0fVxyXG5cdC5kZWZhdWx0LXNjb3JlIC5zY29yZS10b3A6OmFmdGVyIHtcclxuXHRcdGJvcmRlci10b3AtY29sb3I6ICMwMzA1MDQ7XHJcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjMDMwNTA0O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMnJweDtcclxuXHR9XHJcblx0LmRlZmF1bHQtc2NvcmUgLnNjb3JlLWJvdHRvbTo6YWZ0ZXIge1xyXG5cdFx0Ym9yZGVyLXRvcC1jb2xvcjogIzAzMDUwNDtcclxuXHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICMwMzA1MDQ7XHJcblx0XHRib3JkZXItdG9wLXdpZHRoOiAycnB4O1xyXG5cdH1cclxuXHRcclxuXHQvKiAwICovXHJcblx0LnNjb3JlXzAgLnNjb3JlLXRvcDo6YmVmb3JlIHtcclxuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiAjOEE5Mzc4O1xyXG5cdFx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAjOEE5Mzc4O1xyXG5cdH1cclxuXHQuc2NvcmVfMCAuc2NvcmUtdG9wOjphZnRlciB7XHJcblx0XHRib3JkZXItdG9wLWNvbG9yOiAjOEE5Mzc4O1xyXG5cdH1cclxuXHQuc2NvcmVfMCAuc2NvcmUtYm90dG9tOjpiZWZvcmUge1xyXG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6ICM4QTkzNzg7XHJcblx0XHRib3JkZXItcmlnaHQtY29sb3I6ICM4QTkzNzg7XHJcblx0fVxyXG5cdC5zY29yZV8wIC5zY29yZS1ib3R0b206OmFmdGVyIHtcclxuXHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICM4QTkzNzg7XHJcblx0fVxyXG5cdFxyXG5cdC8qIDEgKi9cclxuXHQuc2NvcmVfMSAuc2NvcmUtdG9wOjpiZWZvcmUsIC5zY29yZV8xIC5zY29yZS1ib3R0b206OmJlZm9yZSB7XHJcblx0XHRib3JkZXItcmlnaHQtY29sb3I6ICM4QTkzNzg7XHJcblx0fVxyXG5cdFxyXG5cdC8qIDIgKi9cclxuXHQuc2NvcmVfMiAuc2NvcmUtdG9wOjpiZWZvcmUge1xyXG5cdFx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAjOEE5Mzc4O1xyXG5cdH1cclxuXHQuc2NvcmVfMiAuc2NvcmUtdG9wOjphZnRlciB7XHJcblx0XHRib3JkZXItdG9wLWNvbG9yOiAjOEE5Mzc4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogIzhBOTM3ODtcclxuXHR9XHJcblx0LnNjb3JlXzIgLnNjb3JlLWJvdHRvbTo6YmVmb3JlIHtcclxuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiAjOEE5Mzc4O1xyXG5cdH1cclxuXHQuc2NvcmVfMiAuc2NvcmUtYm90dG9tOjphZnRlciB7XHJcblx0XHRib3JkZXItdG9wLWNvbG9yOiAjOEE5Mzc4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogIzhBOTM3ODtcclxuXHR9XHJcblx0XHJcblx0LyogMyAqL1xyXG5cdC5zY29yZV8zIC5zY29yZS10b3A6OmJlZm9yZSwgLnNjb3JlXzMgLnNjb3JlLWJvdHRvbTo6YmVmb3JlIHtcclxuXHRcdGJvcmRlci1yaWdodC1jb2xvcjogIzhBOTM3ODtcclxuXHR9XHJcblx0LnNjb3JlXzMgLnNjb3JlLXRvcDo6YWZ0ZXIsIC5zY29yZV8zIC5zY29yZS1ib3R0b206OmFmdGVyIHtcclxuXHRcdGJvcmRlci10b3AtY29sb3I6ICM4QTkzNzg7XHJcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjOEE5Mzc4O1xyXG5cdH1cclxuXHRcclxuXHQvKiA0ICovXHJcblx0LnNjb3JlXzQgLnNjb3JlLXRvcDo6YmVmb3JlIHtcclxuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiAjOEE5Mzc4O1xyXG5cdFx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAjOEE5Mzc4O1xyXG5cdH1cclxuXHQuc2NvcmVfNCAuc2NvcmUtdG9wOjphZnRlciB7XHJcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjOEE5Mzc4O1xyXG5cdH1cclxuXHQuc2NvcmVfNCAuc2NvcmUtYm90dG9tOjphZnRlciB7XHJcblx0XHRib3JkZXItdG9wLWNvbG9yOiAjOEE5Mzc4O1xyXG5cdH1cclxuXHQuc2NvcmVfNCAuc2NvcmUtYm90dG9tOjpiZWZvcmUge1xyXG5cdFx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAjOEE5Mzc4O1xyXG5cdH1cclxuXHRcclxuXHQvKiA1ICovXHJcblx0LnNjb3JlXzUgLnNjb3JlLXRvcDo6YmVmb3JlIHtcclxuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiAjOEE5Mzc4O1xyXG5cdH1cclxuXHQuc2NvcmVfNSAuc2NvcmUtdG9wOjphZnRlciB7XHJcblx0XHRib3JkZXItdG9wLWNvbG9yOiAjOEE5Mzc4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogIzhBOTM3ODtcclxuXHR9XHJcblx0LnNjb3JlXzUgLnNjb3JlLWJvdHRvbTo6YmVmb3JlIHtcclxuXHRcdGJvcmRlci1yaWdodC1jb2xvcjogIzhBOTM3ODtcclxuXHR9XHJcblx0LnNjb3JlXzUgLnNjb3JlLWJvdHRvbTo6YWZ0ZXIge1xyXG5cdFx0Ym9yZGVyLXRvcC1jb2xvcjogIzhBOTM3ODtcclxuXHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICM4QTkzNzg7XHJcblx0fVxyXG5cdFxyXG5cdC8qIDYgKi9cclxuXHQuc2NvcmVfNiAuc2NvcmUtdG9wOjpiZWZvcmUge1xyXG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6ICM4QTkzNzg7XHJcblx0fVxyXG5cdC5zY29yZV82IC5zY29yZS10b3A6OmFmdGVyIHtcclxuXHRcdGJvcmRlci10b3AtY29sb3I6ICM4QTkzNzg7XHJcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjOEE5Mzc4O1xyXG5cdH1cclxuXHQuc2NvcmVfNiAuc2NvcmUtYm90dG9tOjpiZWZvcmUge1xyXG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6ICM4QTkzNzg7XHJcblx0XHRib3JkZXItcmlnaHQtY29sb3I6ICM4QTkzNzg7XHJcblx0fVxyXG5cdC5zY29yZV82IC5zY29yZS1ib3R0b206OmFmdGVyIHtcclxuXHRcdGJvcmRlci10b3AtY29sb3I6ICM4QTkzNzg7XHJcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjOEE5Mzc4O1xyXG5cdH1cclxuXHRcclxuXHQvKiA3ICovXHJcblx0LnNjb3JlXzcgLnNjb3JlLXRvcDo6YmVmb3JlIHtcclxuXHRcdGJvcmRlci1yaWdodC1jb2xvcjogIzhBOTM3ODtcclxuXHR9XHJcblx0LnNjb3JlXzcgLnNjb3JlLXRvcDo6YWZ0ZXIge1xyXG5cdFx0Ym9yZGVyLXRvcC1jb2xvcjogIzhBOTM3ODtcclxuXHR9XHJcblx0LnNjb3JlXzcgLnNjb3JlLWJvdHRvbTo6YmVmb3JlIHtcclxuXHRcdGJvcmRlci1yaWdodC1jb2xvcjogIzhBOTM3ODtcclxuXHR9XHJcblx0XHJcblx0LyogOCAqL1xyXG5cdC5zY29yZV84IC5zY29yZS10b3A6OmJlZm9yZSwgLnNjb3JlXzggLnNjb3JlLWJvdHRvbTo6YmVmb3JlIHtcclxuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiAjOEE5Mzc4O1xyXG5cdFx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAjOEE5Mzc4O1xyXG5cdH1cclxuXHQuc2NvcmVfOCAuc2NvcmUtdG9wOjphZnRlciwgLnNjb3JlXzggLnNjb3JlLWJvdHRvbTo6YWZ0ZXIge1xyXG5cdFx0Ym9yZGVyLXRvcC1jb2xvcjogIzhBOTM3ODtcclxuXHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICM4QTkzNzg7XHJcblx0fVxyXG5cdFxyXG5cdC8qIDkgKi9cclxuXHQuc2NvcmVfOSAuc2NvcmUtdG9wOjpiZWZvcmUge1xyXG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6ICM4QTkzNzg7XHJcblx0XHRib3JkZXItcmlnaHQtY29sb3I6ICM4QTkzNzg7XHJcblx0fVxyXG5cdC5zY29yZV85IC5zY29yZS10b3A6OmFmdGVyLCAuc2NvcmVfOSAuc2NvcmUtYm90dG9tOjphZnRlciB7XHJcblx0XHRib3JkZXItdG9wLWNvbG9yOiAjOEE5Mzc4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogIzhBOTM3ODtcclxuXHR9XHJcblx0LnNjb3JlXzkgLnNjb3JlLWJvdHRvbTo6YmVmb3JlIHtcclxuXHRcdGJvcmRlci1yaWdodC1jb2xvcjogIzhBOTM3ODtcclxuXHR9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
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
/* 11 */
/*!******************************************************************************************!*\
  !*** D:/my-project/uni-tetris/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 12);\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdrQixDQUFnQiwwbEJBQUcsRUFBQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/my-project/uni-tetris/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _score = _interopRequireDefault(__webpack_require__(/*! @/components/score/score.vue */ 5));\nvar _utils = __webpack_require__(/*! @/assets/js/utils.js */ 13);\nvar _vuex = __webpack_require__(/*! vuex */ 14);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n//展示用方块\nvar NEXTBLOCKS = [\n[0x0660], //粉碎男孩\n[0x4444, 0x0F00], //英雄\n[0x4460, 0x2e0, 0x6220, 0x740], //橙色瑞克\n[0x2260, 0xe20, 0x6440, 0x4700], //蓝色瑞克\n[0x6C00, 0x4620], //罗德岛Z\n[0x2640, 0xC600], //克利夫兰Z\n[0x2620, 0x720, 0x2320, 0x2700] //小T\n];\n\n//游戏用方块\n// const BLOCKS = [\n// \t[0x6600],//粉碎男孩\n// \t[0x2222, 0xf00],//英雄\n// \t[0x4460, 0x2e0, 0x6220, 0x740],//橙色瑞克\n// \t[0x2260, 0xe20, 0x6440, 0x4700],//蓝色瑞克\n// \t[0x6c00, 0x4620],//罗德岛Z\n// \t[0x2640, 0xc600],//克利夫兰Z\n// \t[0x2620, 0x720, 0x2320, 0x2700]//小T\n// ];\nvar BLOCKS = [\n[\n[[1, 1], [1, 1]]],\n//粉碎男孩\n[\n[[1], [1], [1], [1]],\n[[1, 1, 1, 1]]],\n//英雄\n[\n[[0, 1], [0, 1], [1, 1]],\n[[1, 0, 0], [1, 1, 1]],\n[[1, 1], [1, 0], [1, 0]],\n[[1, 1, 1], [0, 0, 1]]],\n//橙色瑞克\n[\n[[1, 0], [1, 0], [1, 1]],\n[[1, 1, 1], [1, 0, 0]],\n[[1, 1], [0, 1], [0, 1]],\n[[0, 0, 1], [1, 1, 1]]],\n//蓝色瑞克\n[\n[[1, 1, 0], [0, 1, 1]],\n[[0, 1], [1, 1], [1, 0]]],\n//罗德岛Z\n[\n[[1, 0], [1, 1], [0, 1]],\n[[0, 1, 1], [1, 1, 0]]],\n//克利夫兰Z\n[\n[[1, 0], [1, 1], [1, 0]],\n[[1, 1, 1], [0, 1, 0]],\n[[0, 1], [1, 1], [0, 1]],\n[[0, 1, 0], [1, 1, 1]]]\n//小T\n];var _default =\n{\n  data: function data() {\n    return {\n      //绘制的游戏世界（给玩家看的游戏世界）\n      worldData: [],\n      //真实的游戏世界\n      oldWorldData: [],\n      //展示方块地图\n      nextData: [],\n      //当前方块\n      nowBlock: '',\n      //下个方块\n      nextBlock: '',\n      //方块是否完整展示在游戏地图上，用于判断游戏是否失败\n      isShowAll: false,\n      position: {\n        x: 3,\n        y: -1 },\n\n      //消除行数\n      lines: 0,\n\n      //是否暂停游戏\n      pause: false,\n      //是否结束游戏\n      ended: true,\n      //游戏失败\n      error: false };\n\n  },\n  created: function created() {\n    this.init();\n  },\n  computed: _objectSpread(_objectSpread({},\n  (0, _vuex.mapGetters)(['getHiScore'])), {}, {\n    //方块下降时间\n    downTime: function downTime() {\n      var time = 1000 - this.level * 50;\n      return time > 40 ? time : 40;\n    },\n    //等级\n    level: function level() {\n      return Math.floor(this.lines / 10);\n    },\n    //分数\n    score: function score() {\n      return this.lines * 10;\n    },\n    //最高分数\n    hiScore: function hiScore() {\n      return this.getHiScore;\n    } }),\n\n  methods: _objectSpread(_objectSpread({},\n  (0, _vuex.mapMutations)(['setHiScore'])), {}, {\n    //初始化地图数据\n    init: function init() {\n      var worldData = [];\n      for (var i = 0; i < 20; i++) {\n        worldData.push([]);\n        for (var j = 0; j < 10; j++) {\n          worldData[i].push(0);\n        }\n      }\n      this.worldData = (0, _utils.deepClone)(worldData);\n      this.oldWorldData = (0, _utils.deepClone)(worldData);\n      this.nextData = this.scale2Arr();\n    },\n    //16进制转2维数组\n    scale2Arr: function scale2Arr() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0x0000;\n      var arr = [[], [], [], []];\n      for (var i = 0; i < 4; i++) {\n        for (var j = 0; j < 4; j++) {\n          arr[Math.abs(i - 3)].push(value & Math.pow(2, i * 4 + j) ? 1 : 0);\n        }\n      }\n      return arr;\n    },\n    //随机方块\n    randomBlock: function randomBlock() {\n      var index = ~~(Math.random() * 7);\n      var direction = ~~(Math.random() * NEXTBLOCKS[index].length);\n      return {\n        index: index,\n        direction: direction };\n\n    },\n    //开始游戏\n    startGame: function startGame() {\n      this.ended = false;\n      this.nowBlock = this.nextBlock || this.randomBlock();\n      // this.nowBlock = {\n      // \tindex: 2,\n      // \tdirection: 0\n      // };\n      this.nextBlock = this.randomBlock();\n      this.nextData = this.scale2Arr(NEXTBLOCKS[this.nextBlock.index][this.nextBlock.direction]);\n      this.position = {\n        x: 5,\n        y: -1 };\n\n      this.down();\n    },\n    //结束游戏\n    endGame: function endGame() {\n      this.pause = false;\n      this.error = false;\n      this.ended = true;\n      this.lines = 0;\n      clearTimeout(this.downTimer);\n      this.init();\n    },\n    //暂停游戏\n    pauseGame: function pauseGame() {var _this = this;\n      this.pause = true;\n      clearTimeout(this.downTimer);\n      uni.showModal({\n        title: '提示',\n        content: '游戏暂停',\n        showCancel: false,\n        confirmText: '继续游戏',\n        success: function success(res) {\n          if (res.confirm) {\n            _this.pause = false;\n            _this.downTimer = setTimeout(function () {\n              _this.down();\n            }, _this.downTime);\n          }\n        } });\n\n    },\n    //补全方块横向到10位\n    completionColumn: function completionColumn(arr, positionX) {\n      var len = arr.length;\n      var nowBlock = [];\n      var maxLen = arr[0].length;\n      //根据positionX计算出方块横向位置\n      for (var i = 0; i < len; i++) {\n        var x = positionX - (maxLen - 1) > 0 ? positionX - (maxLen - 1) : 0;\n        var obj = new Array(x).fill(0).concat(arr[i]);\n        obj = obj.concat(new Array(10 - (x + maxLen)).fill(0));\n        nowBlock.push(obj);\n      }\n      return nowBlock;\n    },\n    //生成当前方块 10 X 20 地图\n    getNowBlock: function getNowBlock(positionX, direction) {\n      var arr = BLOCKS[this.nowBlock.index][direction];\n      var nowBlock = this.completionColumn(arr, positionX);\n      var len = nowBlock.length;\n      var y = this.position.y - (len - 1) > 0 ? this.position.y - (len - 1) : 0;\n      //刚开始下落要截取方块一部分显示\n      var start = len - (this.position.y + 1) > 0 ? len - (this.position.y + 1) : 0;\n      nowBlock = nowBlock.slice(start, len);\n      //判断方块是否完整展示在地图上\n      this.isShowAll = len == nowBlock.length;\n      //补全方块竖向到20位\n      len = nowBlock.length;\n      nowBlock = new Array(y).fill(new Array(10).fill(0)).concat(nowBlock);\n      nowBlock = nowBlock.concat(new Array(20 - (y + len)).fill(new Array(10).fill(0)));\n      return nowBlock;\n    },\n    //方块下落\n    down: function down() {var _this2 = this;var isQuick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      if (this.ended) {\n        return;\n      }\n      this.position.y++;\n      var nowBlock = this.getNowBlock(this.position.x, this.nowBlock.direction);\n      var isBlock = false;\n      //判断方块有没有遇到阻挡\n      for (var i in nowBlock) {\n        for (var j in nowBlock[i]) {\n          if (this.oldWorldData[i][j] == 1 && nowBlock[i][j] == 1) {\n            if (this.isShowAll) {\n              //如果遇到阻挡，且方块完整展示在地图上，则开始下一个方块下落\n              isBlock = true;\n            } else {\n              //如果遇到阻挡，且方块没有完整展示在地图上，则游戏失败\n              this.error = true;\n            }\n            break;\n          }\n        }\n        if (isBlock) {\n          break;\n        }\n      }\n      //没有遇到阻挡才将下移的方块绘制到地图上\n      if (!isBlock && !this.error) {\n        for (var _i in nowBlock) {\n          for (var _j in nowBlock[_i]) {\n            this.$set(this.worldData[_i], _j, this.oldWorldData[_i][_j] | nowBlock[_i][_j]);\n          }\n        }\n      }\n      if (this.error) {//方块超出界面游戏失败\n        //如果当前游戏分数大于最高记录分数。则更新最高记录分数\n        if (this.score > this.hiScore) {\n          this.setHiScore(this.score);\n        }\n        uni.showModal({\n          title: '提示',\n          content: '游戏结束',\n          showCancel: false,\n          success: function success(res) {\n            if (res.confirm) {\n              _this2.endGame();\n            }\n          } });\n\n      } else if (this.ended) {//用户主动结束游戏\n        return;\n      } else if (this.pause) {//用户暂停游戏\n        return;\n      } else if (this.position.y == 19 || isBlock) {//方块停止，继续降落下一个方块\n        this.downTimer = setTimeout(function () {\n          var worldData = _this2.worldData.filter(function (item) {return item.toString().replace(/,/g, '') != '1111111111';});\n          _this2.lines += _this2.worldData.length - worldData.length;\n          _this2.worldData = (0, _utils.deepClone)(new Array(_this2.worldData.length - worldData.length).fill(new Array(10).fill(0)).concat(worldData));\n          _this2.oldWorldData = (0, _utils.deepClone)(_this2.worldData);\n          _this2.startGame();\n        }, this.downTime);\n      } else if (isQuick) {//用户选择快速降落方块\n        this.down(true);\n      } else {//默认速度降落方块\n        this.downTimer = setTimeout(function () {\n          _this2.down();\n        }, this.downTime);\n      }\n    },\n    //左移方块\n    left: function left() {\n      this.move(-1);\n    },\n    //左移方块\n    right: function right() {\n      this.move(1);\n    },\n    //手动降落方块\n    drop: function drop() {\n      if (this.position.y == 19) {\n        return;\n      }\n      clearTimeout(this.downTimer);\n      this.down();\n    },\n    //快速降落方块\n    quickDrop: function quickDrop() {\n      if (this.position.y == 19) {\n        return;\n      }\n      clearTimeout(this.downTimer);\n      this.down(true);\n    },\n    //切换方块\n    changeBlock: function changeBlock() {\n      var maxLen = BLOCKS[this.nowBlock.index].length;\n      var direction = this.nowBlock.direction + 1 < maxLen ? this.nowBlock.direction + 1 : 0;\n      var nowBlock = this.getNowBlock(this.position.x, direction);\n      //是否被挡住\n      var isBlock = false;\n      //判断方块移动时有没有遇到阻挡\n      for (var i in nowBlock) {\n        for (var j in nowBlock[i]) {\n          if (this.oldWorldData[i][j] == 1 && nowBlock[i][j] == 1) {\n            isBlock = true;\n            break;\n          }\n        }\n        if (isBlock) {\n          break;\n        }\n      }\n      //没有遇到阻挡才将变化的方块绘制到地图上\n      if (!isBlock && !this.error) {\n        this.nowBlock.direction = direction;\n        for (var _i2 in nowBlock) {\n          for (var _j2 in nowBlock[_i2]) {\n            this.$set(this.worldData[_i2], _j2, this.oldWorldData[_i2][_j2] | nowBlock[_i2][_j2]);\n          }\n        }\n      }\n    },\n    //移动方块\n    move: function move(x) {\n      if (this.ended) {\n        return;\n      }\n      var positionX = 0;\n      if (x < 0) {\n        positionX = this.position.x + x > 0 ? this.position.x + x : 0;\n      } else {\n        positionX = this.position.x + x < 9 ? this.position.x + x : 9;\n      }\n      var nowBlock = this.getNowBlock(positionX, this.nowBlock.direction);\n      //是否被挡住\n      var isBlock = false;\n      //判断方块移动时有没有遇到阻挡\n      for (var i in nowBlock) {\n        for (var j in nowBlock[i]) {\n          if (this.oldWorldData[i][j] == 1 && nowBlock[i][j] == 1) {\n            isBlock = true;\n            break;\n          }\n        }\n        if (isBlock) {\n          break;\n        }\n      }\n      //没有遇到阻挡才将移动的方块绘制到地图上\n      if (!isBlock && !this.error) {\n        this.position.x = positionX;\n        for (var _i3 in nowBlock) {\n          for (var _j3 in nowBlock[_i3]) {\n            this.$set(this.worldData[_i3], _j3, this.oldWorldData[_i3][_j3] | nowBlock[_i3][_j3]);\n          }\n        }\n      }\n    } }),\n\n  components: {\n    Score: _score.default } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbIk5FWFRCTE9DS1MiLCJCTE9DS1MiLCJkYXRhIiwid29ybGREYXRhIiwib2xkV29ybGREYXRhIiwibmV4dERhdGEiLCJub3dCbG9jayIsIm5leHRCbG9jayIsImlzU2hvd0FsbCIsInBvc2l0aW9uIiwieCIsInkiLCJsaW5lcyIsInBhdXNlIiwiZW5kZWQiLCJlcnJvciIsImNyZWF0ZWQiLCJpbml0IiwiY29tcHV0ZWQiLCJkb3duVGltZSIsInRpbWUiLCJsZXZlbCIsIk1hdGgiLCJmbG9vciIsInNjb3JlIiwiaGlTY29yZSIsImdldEhpU2NvcmUiLCJtZXRob2RzIiwiaSIsInB1c2giLCJqIiwic2NhbGUyQXJyIiwidmFsdWUiLCJhcnIiLCJhYnMiLCJwb3ciLCJyYW5kb21CbG9jayIsImluZGV4IiwicmFuZG9tIiwiZGlyZWN0aW9uIiwibGVuZ3RoIiwic3RhcnRHYW1lIiwiZG93biIsImVuZEdhbWUiLCJjbGVhclRpbWVvdXQiLCJkb3duVGltZXIiLCJwYXVzZUdhbWUiLCJ1bmkiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29uZmlybVRleHQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsInNldFRpbWVvdXQiLCJjb21wbGV0aW9uQ29sdW1uIiwicG9zaXRpb25YIiwibGVuIiwibWF4TGVuIiwib2JqIiwiQXJyYXkiLCJmaWxsIiwiY29uY2F0IiwiZ2V0Tm93QmxvY2siLCJzdGFydCIsInNsaWNlIiwiaXNRdWljayIsImlzQmxvY2siLCIkc2V0Iiwic2V0SGlTY29yZSIsImZpbHRlciIsIml0ZW0iLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJsZWZ0IiwibW92ZSIsInJpZ2h0IiwiZHJvcCIsInF1aWNrRHJvcCIsImNoYW5nZUJsb2NrIiwiY29tcG9uZW50cyIsIlNjb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0QsWUFBS0EsT0FBTCxFQUFlO0FBQ2Q7QUFDQTtBQUNEO0FBQ0Q7QUFDQSxVQUFLLENBQUNBLE9BQUQsSUFBWSxDQUFDLEtBQUt0RCxLQUF2QixFQUErQjtBQUM5QixhQUFLTixRQUFMLENBQWNDLENBQWQsR0FBa0JnRCxTQUFsQjtBQUNBLGFBQU0sSUFBSTlCLEdBQVYsSUFBZXRCLFFBQWYsRUFBMEI7QUFDekIsZUFBTSxJQUFJd0IsR0FBVixJQUFleEIsUUFBUSxDQUFDc0IsR0FBRCxDQUF2QixFQUE2QjtBQUM1QixpQkFBSzBDLElBQUwsQ0FBVSxLQUFLbkUsU0FBTCxDQUFleUIsR0FBZixDQUFWLEVBQTZCRSxHQUE3QixFQUFnQyxLQUFLMUIsWUFBTCxDQUFrQndCLEdBQWxCLEVBQXFCRSxHQUFyQixJQUEwQnhCLFFBQVEsQ0FBQ3NCLEdBQUQsQ0FBUixDQUFZRSxHQUFaLENBQTFEO0FBQ0E7QUFDRDtBQUNEO0FBQ0QsS0ExUUssR0FyRE87O0FBaVVkb0QsWUFBVSxFQUFFO0FBQ1hDLFNBQUssRUFBTEEsY0FEVyxFQWpVRSxFIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCBTY29yZSBmcm9tICdAL2NvbXBvbmVudHMvc2NvcmUvc2NvcmUudnVlJztcbmltcG9ydCB7IGRlZXBDbG9uZSB9IGZyb20gJ0AvYXNzZXRzL2pzL3V0aWxzLmpzJztcbmltcG9ydCB7IG1hcEdldHRlcnMsIG1hcE11dGF0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xuLy/lsZXnpLrnlKjmlrnlnZdcbmNvbnN0IE5FWFRCTE9DS1MgPSBbXG5cdFsweDA2NjBdLC8v57KJ56KO55S35a2pXG5cdFsweDQ0NDQsIDB4MEYwMF0sLy/oi7Hpm4Rcblx0WzB4NDQ2MCwgMHgyZTAsIDB4NjIyMCwgMHg3NDBdLC8v5qmZ6Imy55Ge5YWLXG5cdFsweDIyNjAsIDB4ZTIwLCAweDY0NDAsIDB4NDcwMF0sLy/ok53oibLnkZ7lhYtcblx0WzB4NkMwMCwgMHg0NjIwXSwvL+e9l+W+t+Wym1pcblx0WzB4MjY0MCwgMHhDNjAwXSwvL+WFi+WIqeWkq+WFsFpcblx0WzB4MjYyMCwgMHg3MjAsIDB4MjMyMCwgMHgyNzAwXS8v5bCPVFxuXVxuXG4vL+a4uOaIj+eUqOaWueWdl1xuLy8gY29uc3QgQkxPQ0tTID0gW1xuLy8gXHRbMHg2NjAwXSwvL+eyieeijueUt+WtqVxuLy8gXHRbMHgyMjIyLCAweGYwMF0sLy/oi7Hpm4Rcbi8vIFx0WzB4NDQ2MCwgMHgyZTAsIDB4NjIyMCwgMHg3NDBdLC8v5qmZ6Imy55Ge5YWLXG4vLyBcdFsweDIyNjAsIDB4ZTIwLCAweDY0NDAsIDB4NDcwMF0sLy/ok53oibLnkZ7lhYtcbi8vIFx0WzB4NmMwMCwgMHg0NjIwXSwvL+e9l+W+t+Wym1pcbi8vIFx0WzB4MjY0MCwgMHhjNjAwXSwvL+WFi+WIqeWkq+WFsFpcbi8vIFx0WzB4MjYyMCwgMHg3MjAsIDB4MjMyMCwgMHgyNzAwXS8v5bCPVFxuLy8gXTtcbmNvbnN0IEJMT0NLUyA9IFtcblx0W1xuXHRcdFtbMSwxXSxbMSwxXV0sXG5cdF0sLy/nsonnoo7nlLflralcblx0W1xuXHRcdFtbMV0sWzFdLFsxXSxbMV1dLFxuXHRcdFtbMSwxLDEsMV1dLFxuXHRdLC8v6Iux6ZuEXG5cdFtcblx0XHRbWzAsMV0sWzAsMV0sWzEsMV1dLFxuXHRcdFtbMSwwLDBdLFsxLDEsMV1dLFxuXHRcdFtbMSwxXSxbMSwwXSxbMSwwXV0sXG5cdFx0W1sxLDEsMV0sWzAsMCwxXV0sXG5cdF0sLy/mqZnoibLnkZ7lhYtcblx0W1xuXHRcdFtbMSwwXSxbMSwwXSxbMSwxXV0sXG5cdFx0W1sxLDEsMV0sWzEsMCwwXV0sXG5cdFx0W1sxLDFdLFswLDFdLFswLDFdXSxcblx0XHRbWzAsMCwxXSxbMSwxLDFdXSxcblx0XSwvL+iTneiJsueRnuWFi1xuXHRbXG5cdFx0W1sxLDEsMF0sWzAsMSwxXV0sXG5cdFx0W1swLDFdLFsxLDFdLFsxLDBdXSxcblx0XSwvL+e9l+W+t+Wym1pcblx0W1xuXHRcdFtbMSwwXSxbMSwxXSxbMCwxXV0sXG5cdFx0W1swLDEsMV0sWzEsMSwwXV0sXG5cdF0sLy/lhYvliKnlpKvlhbBaXG5cdFtcblx0XHRbWzEsMF0sWzEsMV0sWzEsMF1dLFxuXHRcdFtbMSwxLDFdLFswLDEsMF1dLFxuXHRcdFtbMCwxXSxbMSwxXSxbMCwxXV0sXG5cdFx0W1swLDEsMF0sWzEsMSwxXV0sXG5cdF0vL+Wwj1Rcbl07XG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdC8v57uY5Yi255qE5ri45oiP5LiW55WM77yI57uZ546p5a6255yL55qE5ri45oiP5LiW55WM77yJXG5cdFx0XHR3b3JsZERhdGE6IFtdLFxuXHRcdFx0Ly/nnJ/lrp7nmoTmuLjmiI/kuJbnlYxcblx0XHRcdG9sZFdvcmxkRGF0YTogW10sXG5cdFx0XHQvL+WxleekuuaWueWdl+WcsOWbvlxuXHRcdFx0bmV4dERhdGE6IFtdLFxuXHRcdFx0Ly/lvZPliY3mlrnlnZdcblx0XHRcdG5vd0Jsb2NrOiAnJyxcblx0XHRcdC8v5LiL5Liq5pa55Z2XXG5cdFx0XHRuZXh0QmxvY2s6ICcnLFxuXHRcdFx0Ly/mlrnlnZfmmK/lkKblrozmlbTlsZXnpLrlnKjmuLjmiI/lnLDlm77kuIrvvIznlKjkuo7liKTmlq3muLjmiI/mmK/lkKblpLHotKVcblx0XHRcdGlzU2hvd0FsbDogZmFsc2UsXG5cdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHR4OiAzLFxuXHRcdFx0XHR5OiAtMVxuXHRcdFx0fSxcblx0XHRcdC8v5raI6Zmk6KGM5pWwXG5cdFx0XHRsaW5lczogMCxcblx0XHRcdFxuXHRcdFx0Ly/mmK/lkKbmmoLlgZzmuLjmiI9cblx0XHRcdHBhdXNlOiBmYWxzZSxcblx0XHRcdC8v5piv5ZCm57uT5p2f5ri45oiPXG5cdFx0XHRlbmRlZDogdHJ1ZSxcblx0XHRcdC8v5ri45oiP5aSx6LSlXG5cdFx0XHRlcnJvcjogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdGNyZWF0ZWQoKSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0Li4ubWFwR2V0dGVycyhbJ2dldEhpU2NvcmUnXSksXG5cdFx0Ly/mlrnlnZfkuIvpmY3ml7bpl7Rcblx0XHRkb3duVGltZSAoKSB7XG5cdFx0XHRsZXQgdGltZSA9IDEwMDAgLSAodGhpcy5sZXZlbCAqIDUwKTtcblx0XHRcdHJldHVybiB0aW1lID4gNDAgPyB0aW1lIDogNDA7XG5cdFx0fSxcblx0XHQvL+etiee6p1xuXHRcdGxldmVsICgpIHtcblx0XHRcdHJldHVybiBNYXRoLmZsb29yKHRoaXMubGluZXMgLyAxMCk7IFxuXHRcdH0sXG5cdFx0Ly/liIbmlbBcblx0XHRzY29yZSAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5saW5lcyAqIDEwO1xuXHRcdH0sXG5cdFx0Ly/mnIDpq5jliIbmlbBcblx0XHRoaVNjb3JlICgpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldEhpU2NvcmU7XG5cdFx0fVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Li4ubWFwTXV0YXRpb25zKFsnc2V0SGlTY29yZSddKSxcblx0XHQvL+WIneWni+WMluWcsOWbvuaVsOaNrlxuXHRcdGluaXQgKCkge1xuXHRcdFx0bGV0IHdvcmxkRGF0YSA9IFtdO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG5cdFx0XHRcdHdvcmxkRGF0YS5wdXNoKFtdKVxuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcblx0XHRcdFx0XHR3b3JsZERhdGFbaV0ucHVzaCgwKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLndvcmxkRGF0YSA9IGRlZXBDbG9uZSh3b3JsZERhdGEpO1xuXHRcdFx0dGhpcy5vbGRXb3JsZERhdGEgPSBkZWVwQ2xvbmUod29ybGREYXRhKTtcblx0XHRcdHRoaXMubmV4dERhdGEgPSB0aGlzLnNjYWxlMkFycigpO1xuXHRcdH0sXG5cdFx0Ly8xNui/m+WItui9rDLnu7TmlbDnu4Rcblx0XHRzY2FsZTJBcnIgKHZhbHVlID0gMHgwMDAwKSB7XG5cdFx0XHRsZXQgYXJyID0gW1tdLFtdLFtdLFtdXTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG5cdFx0XHRcdFx0YXJyW01hdGguYWJzKGkgLSAzKV0ucHVzaCgodmFsdWUgJiBNYXRoLnBvdygyLCBpICogNCArIGopKSA/IDEgOiAwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGFycjtcblx0XHR9LFxuXHRcdC8v6ZqP5py65pa55Z2XXG5cdFx0cmFuZG9tQmxvY2sgKCkge1xuXHRcdFx0bGV0IGluZGV4ID0gfn4oTWF0aC5yYW5kb20oKSAqIDcpO1xuXHRcdFx0bGV0IGRpcmVjdGlvbiA9IH5+KE1hdGgucmFuZG9tKCkgKiBORVhUQkxPQ0tTW2luZGV4XS5sZW5ndGgpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aW5kZXg6IGluZGV4LFxuXHRcdFx0XHRkaXJlY3Rpb246IGRpcmVjdGlvblxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdC8v5byA5aeL5ri45oiPXG5cdFx0c3RhcnRHYW1lICgpIHtcblx0XHRcdHRoaXMuZW5kZWQgPSBmYWxzZTtcblx0XHRcdHRoaXMubm93QmxvY2sgPSB0aGlzLm5leHRCbG9jayB8fCB0aGlzLnJhbmRvbUJsb2NrKCk7XG5cdFx0XHQvLyB0aGlzLm5vd0Jsb2NrID0ge1xuXHRcdFx0Ly8gXHRpbmRleDogMixcblx0XHRcdC8vIFx0ZGlyZWN0aW9uOiAwXG5cdFx0XHQvLyB9O1xuXHRcdFx0dGhpcy5uZXh0QmxvY2sgPSB0aGlzLnJhbmRvbUJsb2NrKCk7XG5cdFx0XHR0aGlzLm5leHREYXRhID0gdGhpcy5zY2FsZTJBcnIoTkVYVEJMT0NLU1t0aGlzLm5leHRCbG9jay5pbmRleF1bdGhpcy5uZXh0QmxvY2suZGlyZWN0aW9uXSk7XG5cdFx0XHR0aGlzLnBvc2l0aW9uID0ge1xuXHRcdFx0XHR4OiA1LFxuXHRcdFx0XHR5OiAtMVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5kb3duKCk7XG5cdFx0fSxcblx0XHQvL+e7k+adn+a4uOaIj1xuXHRcdGVuZEdhbWUgKCkge1xuXHRcdFx0dGhpcy5wYXVzZSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5lcnJvciA9IGZhbHNlO1xuXHRcdFx0dGhpcy5lbmRlZCA9IHRydWU7XG5cdFx0XHR0aGlzLmxpbmVzID0gMDtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLmRvd25UaW1lcik7XG5cdFx0XHR0aGlzLmluaXQoKTtcblx0XHR9LFxuXHRcdC8v5pqC5YGc5ri45oiPXG5cdFx0cGF1c2VHYW1lICgpIHtcblx0XHRcdHRoaXMucGF1c2UgPSB0cnVlO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuZG93blRpbWVyKTtcblx0XHRcdHVuaS5zaG93TW9kYWwoe1xuXHRcdFx0XHR0aXRsZTogJ+aPkOekuicsXG5cdFx0XHRcdGNvbnRlbnQ6ICfmuLjmiI/mmoLlgZwnLFxuXHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZSxcblx0XHRcdFx0Y29uZmlybVRleHQ6ICfnu6fnu63muLjmiI8nLFxuXHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnBhdXNlID0gZmFsc2U7XG5cdFx0XHRcdFx0XHR0aGlzLmRvd25UaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmRvd24oKTtcblx0XHRcdFx0XHRcdH0sIHRoaXMuZG93blRpbWUpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0Ly/ooaXlhajmlrnlnZfmqKrlkJHliLAxMOS9jVxuXHRcdGNvbXBsZXRpb25Db2x1bW4gKGFyciwgcG9zaXRpb25YKSB7XG5cdFx0XHRsZXQgbGVuID0gYXJyLmxlbmd0aDtcblx0XHRcdGxldCBub3dCbG9jayA9IFtdO1xuXHRcdFx0bGV0IG1heExlbiA9IGFyclswXS5sZW5ndGg7XG5cdFx0XHQvL+agueaNrnBvc2l0aW9uWOiuoeeul+WHuuaWueWdl+aoquWQkeS9jee9rlxuXHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0bGV0IHggPSBwb3NpdGlvblggLSAobWF4TGVuIC0gMSkgPiAwID8gKHBvc2l0aW9uWCAtIChtYXhMZW4gLSAxKSkgOiAwO1xuXHRcdFx0XHRsZXQgb2JqID0gbmV3IEFycmF5KHgpLmZpbGwoMCkuY29uY2F0KGFycltpXSk7XG5cdFx0XHRcdG9iaiA9IG9iai5jb25jYXQobmV3IEFycmF5KDEwIC0gKHggKyBtYXhMZW4pKS5maWxsKDApKTtcblx0XHRcdFx0bm93QmxvY2sucHVzaChvYmopO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5vd0Jsb2NrO1xuXHRcdH0sXG5cdFx0Ly/nlJ/miJDlvZPliY3mlrnlnZcgMTAgWCAyMCDlnLDlm75cblx0XHRnZXROb3dCbG9jayAocG9zaXRpb25YLCBkaXJlY3Rpb24pIHtcblx0XHRcdGxldCBhcnIgPSBCTE9DS1NbdGhpcy5ub3dCbG9jay5pbmRleF1bZGlyZWN0aW9uXTtcblx0XHRcdGxldCBub3dCbG9jayA9IHRoaXMuY29tcGxldGlvbkNvbHVtbihhcnIsIHBvc2l0aW9uWCk7XG5cdFx0XHRsZXQgbGVuID0gbm93QmxvY2subGVuZ3RoO1xuXHRcdFx0bGV0IHkgPSB0aGlzLnBvc2l0aW9uLnkgLSAobGVuIC0gMSkgPiAwID8gKHRoaXMucG9zaXRpb24ueSAtIChsZW4gLSAxKSkgOiAwO1xuXHRcdFx0Ly/liJrlvIDlp4vkuIvokL3opoHmiKrlj5bmlrnlnZfkuIDpg6jliIbmmL7npLpcblx0XHRcdGxldCBzdGFydCA9IGxlbiAtICh0aGlzLnBvc2l0aW9uLnkgKyAxKSA+IDAgPyBsZW4gLSAodGhpcy5wb3NpdGlvbi55ICsgMSkgOiAwO1xuXHRcdFx0bm93QmxvY2sgPSBub3dCbG9jay5zbGljZShzdGFydCwgbGVuKTtcblx0XHRcdC8v5Yik5pat5pa55Z2X5piv5ZCm5a6M5pW05bGV56S65Zyo5Zyw5Zu+5LiKXG5cdFx0XHR0aGlzLmlzU2hvd0FsbCA9IGxlbiA9PSBub3dCbG9jay5sZW5ndGg7XG5cdFx0XHQvL+ihpeWFqOaWueWdl+erluWQkeWIsDIw5L2NXG5cdFx0XHRsZW4gPSBub3dCbG9jay5sZW5ndGg7XG5cdFx0XHRub3dCbG9jayA9IG5ldyBBcnJheSh5KS5maWxsKG5ldyBBcnJheSgxMCkuZmlsbCgwKSkuY29uY2F0KG5vd0Jsb2NrKTtcblx0XHRcdG5vd0Jsb2NrID0gbm93QmxvY2suY29uY2F0KG5ldyBBcnJheSgyMCAtICh5ICsgbGVuKSkuZmlsbChuZXcgQXJyYXkoMTApLmZpbGwoMCkpKTtcblx0XHRcdHJldHVybiBub3dCbG9jaztcblx0XHR9LFxuXHRcdC8v5pa55Z2X5LiL6JC9XG5cdFx0ZG93biAoaXNRdWljayA9IGZhbHNlKSB7XG5cdFx0XHRpZiAoIHRoaXMuZW5kZWQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMucG9zaXRpb24ueSsrO1xuXHRcdFx0bGV0IG5vd0Jsb2NrID0gdGhpcy5nZXROb3dCbG9jayh0aGlzLnBvc2l0aW9uLngsIHRoaXMubm93QmxvY2suZGlyZWN0aW9uKTtcblx0XHRcdGxldCBpc0Jsb2NrID0gZmFsc2U7XG5cdFx0XHQvL+WIpOaWreaWueWdl+acieayoeaciemBh+WIsOmYu+aMoVxuXHRcdFx0Zm9yICggbGV0IGkgaW4gbm93QmxvY2sgKSB7XG5cdFx0XHRcdGZvciAoIGxldCBqIGluIG5vd0Jsb2NrW2ldICkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5vbGRXb3JsZERhdGFbaV1bal0gPT0gMSAmJiBub3dCbG9ja1tpXVtqXSA9PSAxICkge1xuXHRcdFx0XHRcdFx0aWYgKCB0aGlzLmlzU2hvd0FsbCApIHtcblx0XHRcdFx0XHRcdFx0Ly/lpoLmnpzpgYfliLDpmLvmjKHvvIzkuJTmlrnlnZflrozmlbTlsZXnpLrlnKjlnLDlm77kuIrvvIzliJnlvIDlp4vkuIvkuIDkuKrmlrnlnZfkuIvokL1cblx0XHRcdFx0XHRcdFx0aXNCbG9jayA9IHRydWU7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQvL+WmguaenOmBh+WIsOmYu+aMoe+8jOS4lOaWueWdl+ayoeacieWujOaVtOWxleekuuWcqOWcsOWbvuS4iu+8jOWImea4uOaIj+Wksei0pVxuXHRcdFx0XHRcdFx0XHR0aGlzLmVycm9yID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIGlzQmxvY2sgKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8v5rKh5pyJ6YGH5Yiw6Zi75oyh5omN5bCG5LiL56e755qE5pa55Z2X57uY5Yi25Yiw5Zyw5Zu+5LiKXG5cdFx0XHRpZiAoICFpc0Jsb2NrICYmICF0aGlzLmVycm9yICkge1xuXHRcdFx0XHRmb3IgKCBsZXQgaSBpbiBub3dCbG9jayApIHtcblx0XHRcdFx0XHRmb3IgKCBsZXQgaiBpbiBub3dCbG9ja1tpXSApIHtcblx0XHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLndvcmxkRGF0YVtpXSwgaiwgdGhpcy5vbGRXb3JsZERhdGFbaV1bal0gfCBub3dCbG9ja1tpXVtqXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIHRoaXMuZXJyb3IgKSB7Ly/mlrnlnZfotoXlh7rnlYzpnaLmuLjmiI/lpLHotKVcblx0XHRcdFx0Ly/lpoLmnpzlvZPliY3muLjmiI/liIbmlbDlpKfkuo7mnIDpq5jorrDlvZXliIbmlbDjgILliJnmm7TmlrDmnIDpq5jorrDlvZXliIbmlbBcblx0XHRcdFx0aWYgKCB0aGlzLnNjb3JlID4gdGhpcy5oaVNjb3JlICkge1xuXHRcdFx0XHRcdHRoaXMuc2V0SGlTY29yZSh0aGlzLnNjb3JlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdFx0XHR0aXRsZTogJ+aPkOekuicsXG5cdFx0XHRcdFx0Y29udGVudDogJ+a4uOaIj+e7k+adnycsXG5cdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XG5cdFx0XHRcdFx0XHQgICB0aGlzLmVuZEdhbWUoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2UgaWYgKCB0aGlzLmVuZGVkICkgey8v55So5oi35Li75Yqo57uT5p2f5ri45oiPXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gZWxzZSBpZiAoIHRoaXMucGF1c2UgKSB7Ly/nlKjmiLfmmoLlgZzmuLjmiI9cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnkgPT0gMTkgfHwgaXNCbG9jaykgey8v5pa55Z2X5YGc5q2i77yM57un57ut6ZmN6JC95LiL5LiA5Liq5pa55Z2XXG5cdFx0XHRcdHRoaXMuZG93blRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHdvcmxkRGF0YSA9IHRoaXMud29ybGREYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0udG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csICcnKSAhPSAnMTExMTExMTExMScpO1xuXHRcdFx0XHRcdHRoaXMubGluZXMgKz0oIHRoaXMud29ybGREYXRhLmxlbmd0aCAtIHdvcmxkRGF0YS5sZW5ndGgpO1xuXHRcdFx0XHRcdHRoaXMud29ybGREYXRhID0gZGVlcENsb25lKG5ldyBBcnJheSAodGhpcy53b3JsZERhdGEubGVuZ3RoIC0gd29ybGREYXRhLmxlbmd0aCkuZmlsbChuZXcgQXJyYXkoMTApLmZpbGwoMCkpLmNvbmNhdCh3b3JsZERhdGEpKTtcblx0XHRcdFx0XHR0aGlzLm9sZFdvcmxkRGF0YSA9IGRlZXBDbG9uZSh0aGlzLndvcmxkRGF0YSk7XG5cdFx0XHRcdFx0dGhpcy5zdGFydEdhbWUoKTtcblx0XHRcdFx0fSwgdGhpcy5kb3duVGltZSlcblx0XHRcdH0gZWxzZSBpZiAoIGlzUXVpY2sgKSB7Ly/nlKjmiLfpgInmi6nlv6vpgJ/pmY3okL3mlrnlnZdcblx0XHRcdFx0dGhpcy5kb3duKHRydWUpO1xuXHRcdFx0fSBlbHNlIHsvL+m7mOiupOmAn+W6pumZjeiQveaWueWdl1xuXHRcdFx0XHR0aGlzLmRvd25UaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZG93bigpO1xuXHRcdFx0XHR9LCB0aGlzLmRvd25UaW1lKVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly/lt6bnp7vmlrnlnZdcblx0XHRsZWZ0ICgpIHtcblx0XHRcdHRoaXMubW92ZSgtMSk7XG5cdFx0fSxcblx0XHQvL+W3puenu+aWueWdl1xuXHRcdHJpZ2h0ICgpIHtcblx0XHRcdHRoaXMubW92ZSgxKTtcblx0XHR9LFxuXHRcdC8v5omL5Yqo6ZmN6JC95pa55Z2XXG5cdFx0ZHJvcCAoKSB7XG5cdFx0XHRpZiAoIHRoaXMucG9zaXRpb24ueSA9PSAxOSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuZG93blRpbWVyKTtcblx0XHRcdHRoaXMuZG93bigpO1xuXHRcdH0sXG5cdFx0Ly/lv6vpgJ/pmY3okL3mlrnlnZdcblx0XHRxdWlja0Ryb3AgKCkge1xuXHRcdFx0aWYgKCB0aGlzLnBvc2l0aW9uLnkgPT0gMTkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLmRvd25UaW1lcik7XG5cdFx0XHR0aGlzLmRvd24odHJ1ZSk7XG5cdFx0fSxcblx0XHQvL+WIh+aNouaWueWdl1xuXHRcdGNoYW5nZUJsb2NrICgpIHtcblx0XHRcdGxldCBtYXhMZW4gPSBCTE9DS1NbdGhpcy5ub3dCbG9jay5pbmRleF0ubGVuZ3RoO1xuXHRcdFx0bGV0IGRpcmVjdGlvbiA9IHRoaXMubm93QmxvY2suZGlyZWN0aW9uICsgMSA8IG1heExlbiA/IHRoaXMubm93QmxvY2suZGlyZWN0aW9uICsgMSA6IDA7XG5cdFx0XHRsZXQgbm93QmxvY2sgPSB0aGlzLmdldE5vd0Jsb2NrKHRoaXMucG9zaXRpb24ueCwgZGlyZWN0aW9uKTtcblx0XHRcdC8v5piv5ZCm6KKr5oyh5L2PXG5cdFx0XHRsZXQgaXNCbG9jayA9IGZhbHNlO1xuXHRcdFx0Ly/liKTmlq3mlrnlnZfnp7vliqjml7bmnInmsqHmnInpgYfliLDpmLvmjKFcblx0XHRcdGZvciAoIGxldCBpIGluIG5vd0Jsb2NrICkge1xuXHRcdFx0XHRmb3IgKCBsZXQgaiBpbiBub3dCbG9ja1tpXSApIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMub2xkV29ybGREYXRhW2ldW2pdID09IDEgJiYgbm93QmxvY2tbaV1bal0gPT0gMSApIHtcblx0XHRcdFx0XHRcdGlzQmxvY2sgPSB0cnVlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggaXNCbG9jayApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly/msqHmnInpgYfliLDpmLvmjKHmiY3lsIblj5jljJbnmoTmlrnlnZfnu5jliLbliLDlnLDlm77kuIpcblx0XHRcdGlmICggIWlzQmxvY2sgJiYgIXRoaXMuZXJyb3IgKSB7XG5cdFx0XHRcdHRoaXMubm93QmxvY2suZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXHRcdFx0XHRmb3IgKCBsZXQgaSBpbiBub3dCbG9jayApIHtcblx0XHRcdFx0XHRmb3IgKCBsZXQgaiBpbiBub3dCbG9ja1tpXSApIHtcblx0XHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLndvcmxkRGF0YVtpXSwgaiwgdGhpcy5vbGRXb3JsZERhdGFbaV1bal0gfCBub3dCbG9ja1tpXVtqXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL+enu+WKqOaWueWdl1xuXHRcdG1vdmUgKHgpIHtcblx0XHRcdGlmICggdGhpcy5lbmRlZCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHBvc2l0aW9uWCA9IDA7XG5cdFx0XHRpZiAoIHggPCAwICkge1xuXHRcdFx0XHRwb3NpdGlvblggPSB0aGlzLnBvc2l0aW9uLnggKyB4ID4gMCA/ICh0aGlzLnBvc2l0aW9uLnggKyB4KSA6IDA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwb3NpdGlvblggPSB0aGlzLnBvc2l0aW9uLnggKyB4IDwgOSA/ICh0aGlzLnBvc2l0aW9uLnggKyB4KSA6IDk7XG5cdFx0XHR9XG5cdFx0XHRsZXQgbm93QmxvY2sgPSB0aGlzLmdldE5vd0Jsb2NrKHBvc2l0aW9uWCwgdGhpcy5ub3dCbG9jay5kaXJlY3Rpb24pO1xuXHRcdFx0Ly/mmK/lkKbooqvmjKHkvY9cblx0XHRcdGxldCBpc0Jsb2NrID0gZmFsc2U7XG5cdFx0XHQvL+WIpOaWreaWueWdl+enu+WKqOaXtuacieayoeaciemBh+WIsOmYu+aMoVxuXHRcdFx0Zm9yICggbGV0IGkgaW4gbm93QmxvY2sgKSB7XG5cdFx0XHRcdGZvciAoIGxldCBqIGluIG5vd0Jsb2NrW2ldICkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5vbGRXb3JsZERhdGFbaV1bal0gPT0gMSAmJiBub3dCbG9ja1tpXVtqXSA9PSAxICkge1xuXHRcdFx0XHRcdFx0aXNCbG9jayA9IHRydWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBpc0Jsb2NrICkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvL+ayoeaciemBh+WIsOmYu+aMoeaJjeWwhuenu+WKqOeahOaWueWdl+e7mOWItuWIsOWcsOWbvuS4ilxuXHRcdFx0aWYgKCAhaXNCbG9jayAmJiAhdGhpcy5lcnJvciApIHtcblx0XHRcdFx0dGhpcy5wb3NpdGlvbi54ID0gcG9zaXRpb25YO1xuXHRcdFx0XHRmb3IgKCBsZXQgaSBpbiBub3dCbG9jayApIHtcblx0XHRcdFx0XHRmb3IgKCBsZXQgaiBpbiBub3dCbG9ja1tpXSApIHtcblx0XHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLndvcmxkRGF0YVtpXSwgaiwgdGhpcy5vbGRXb3JsZERhdGFbaV1bal0gfCBub3dCbG9ja1tpXVtqXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRjb21wb25lbnRzOiB7XG5cdFx0U2NvcmVcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!***************************************************!*\
  !*** D:/my-project/uni-tetris/assets/js/utils.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.deepClone = deepClone;exports.indexOf = indexOf; /**\r\n                                                                                                                                       * 深度克隆\r\n                                                                                                                                       * @param {Object} obj 对象\r\n                                                                                                                                      */\nfunction deepClone(obj) {\n  if (typeof obj !== \"object\" && typeof obj !== 'function') {\n    //原始类型直接返回\n    return obj;\n  }\n  var o = isArray(obj) ? [] : {};\n  for (var i in obj) {\n    if (obj.hasOwnProperty(i)) {\n      o[i] = typeof obj[i] === \"object\" ? deepClone(obj[i]) : obj[i];\n    }\n  }\n  return o;\n}\n\n/**\r\n   * 数组查找符合条件元素并返回下标\r\n   * @param {Array} arr 传入数组\r\n   * @param {String} value 条件元素\r\n   * @param {String} query 对比key值\r\n  */\nfunction indexOf(arr, query, value) {\n  var len = arr.length;\n  for (var i = 0; i < len; i++) {\n    if (arr[i][query] == value) {\n      return parseInt(i);\n    }\n  }\n  return -1;\n}\n\n// 判断arr是否为一个数组，返回一个bool值\nfunction isArray(arr) {\n  return Object.prototype.toString.call(arr) === '[object Array]';\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXNzZXRzL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImRlZXBDbG9uZSIsIm9iaiIsIm8iLCJpc0FycmF5IiwiaSIsImhhc093blByb3BlcnR5IiwiaW5kZXhPZiIsImFyciIsInF1ZXJ5IiwidmFsdWUiLCJsZW4iLCJsZW5ndGgiLCJwYXJzZUludCIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCJdLCJtYXBwaW5ncyI6InVIQUFBOzs7O0FBSU8sU0FBU0EsU0FBVCxDQUFvQkMsR0FBcEIsRUFBeUI7QUFDOUIsTUFBRyxPQUFPQSxHQUFQLEtBQWUsUUFBZixJQUEyQixPQUFPQSxHQUFQLEtBQWUsVUFBN0MsRUFBeUQ7QUFDMUQ7QUFDSyxXQUFPQSxHQUFQO0FBQ0g7QUFDRCxNQUFJQyxDQUFDLEdBQUdDLE9BQU8sQ0FBQ0YsR0FBRCxDQUFQLEdBQWUsRUFBZixHQUFvQixFQUE1QjtBQUNBLE9BQUksSUFBSUcsQ0FBUixJQUFhSCxHQUFiLEVBQWtCO0FBQ2QsUUFBR0EsR0FBRyxDQUFDSSxjQUFKLENBQW1CRCxDQUFuQixDQUFILEVBQXlCO0FBQ3JCRixPQUFDLENBQUNFLENBQUQsQ0FBRCxHQUFPLE9BQU9ILEdBQUcsQ0FBQ0csQ0FBRCxDQUFWLEtBQWtCLFFBQWxCLEdBQTZCSixTQUFTLENBQUNDLEdBQUcsQ0FBQ0csQ0FBRCxDQUFKLENBQXRDLEdBQWlESCxHQUFHLENBQUNHLENBQUQsQ0FBM0Q7QUFDSDtBQUNKO0FBQ0QsU0FBT0YsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7QUFNTyxTQUFTSSxPQUFULENBQWtCQyxHQUFsQixFQUF1QkMsS0FBdkIsRUFBOEJDLEtBQTlCLEVBQXNDO0FBQzVDLE1BQUlDLEdBQUcsR0FBR0gsR0FBRyxDQUFDSSxNQUFkO0FBQ0EsT0FBTSxJQUFJUCxDQUFDLEdBQUcsQ0FBZCxFQUFpQkEsQ0FBQyxHQUFHTSxHQUFyQixFQUEwQk4sQ0FBQyxFQUEzQixFQUFnQztBQUMvQixRQUFLRyxHQUFHLENBQUNILENBQUQsQ0FBSCxDQUFPSSxLQUFQLEtBQWlCQyxLQUF0QixFQUE4QjtBQUM3QixhQUFPRyxRQUFRLENBQUNSLENBQUQsQ0FBZjtBQUNBO0FBQ0Q7QUFDRCxTQUFPLENBQUMsQ0FBUjtBQUNBOztBQUVEO0FBQ0EsU0FBU0QsT0FBVCxDQUFrQkksR0FBbEIsRUFBdUI7QUFDbkIsU0FBT00sTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JULEdBQS9CLE1BQXdDLGdCQUEvQztBQUNIIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAgICog5rex5bqm5YWL6ZqGXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iaiDlr7nosaFcclxuICAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lIChvYmopIHtcclxuICBpZih0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbicpIHtcclxuXHQvL+WOn+Wni+exu+Wei+ebtOaOpei/lOWbnlxyXG4gICAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxuICB2YXIgbyA9IGlzQXJyYXkob2JqKSA/IFtdIDoge307XHJcbiAgZm9yKGxldCBpIGluIG9iaikge1xyXG4gICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoaSkpe1xyXG4gICAgICAgICAgb1tpXSA9IHR5cGVvZiBvYmpbaV0gPT09IFwib2JqZWN0XCIgPyBkZWVwQ2xvbmUob2JqW2ldKSA6IG9ialtpXTtcclxuICAgICAgfVxyXG4gIH1cclxuICByZXR1cm4gbztcclxufVxyXG5cclxuLyoqXHJcbiAqIOaVsOe7hOafpeaJvuespuWQiOadoeS7tuWFg+e0oOW5tui/lOWbnuS4i+agh1xyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIg5Lyg5YWl5pWw57uEXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSDmnaHku7blhYPntKBcclxuICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5IOWvueavlGtleeWAvFxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZiAoYXJyLCBxdWVyeSwgdmFsdWUgKSB7XHJcblx0bGV0IGxlbiA9IGFyci5sZW5ndGg7XHJcblx0Zm9yICggbGV0IGkgPSAwOyBpIDwgbGVuOyBpKysgKSB7XHJcblx0XHRpZiAoIGFycltpXVtxdWVyeV0gPT0gdmFsdWUgKSB7XHJcblx0XHRcdHJldHVybiBwYXJzZUludChpKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIC0xO1xyXG59XHJcblxyXG4vLyDliKTmlq1hcnLmmK/lkKbkuLrkuIDkuKrmlbDnu4TvvIzov5Tlm57kuIDkuKpib29s5YC8XHJcbmZ1bmN0aW9uIGlzQXJyYXkgKGFycikge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09PSAnW29iamVjdCBBcnJheV0nO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 15)))

/***/ }),
/* 15 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 17 */
/*!****************************************!*\
  !*** D:/my-project/uni-tetris/App.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 18);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDa0s7QUFDbEssZ0JBQWdCLGtMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*****************************************************************!*\
  !*** D:/my-project/uni-tetris/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 19);\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJoQixDQUFnQiw2a0JBQUcsRUFBQyIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/my-project/uni-tetris/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 20)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 21 */
/*!***********************************************!*\
  !*** D:/my-project/uni-tetris/store/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 16));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 14));\nvar _config = __webpack_require__(/*! @/assets/js/config.js */ 22);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n_vue.default.use(_vuex.default);\nvar store = new _vuex.default.Store({\n  state: {\n    hiScore: uni.getStorageSync(_config.HISCORE) || 0 //最高分数\n  },\n  getters: {\n    //获取当前登录信息\n    getHiScore: function getHiScore(state) {\n      return state.hiScore;\n    } },\n\n  mutations: {\n    //设置登录信息\n    setHiScore: function setHiScore(state, score) {\n      state.hiScore = score;\n      uni.setStorageSync(_config.HISCORE, score);\n    },\n    //清楚登录信息\n    clearHiscore: function clearHiscore(state) {\n      state.hiScore = '';\n      uni.removeStorageSync(_config.HISCORE);\n    } },\n\n  actions: {} });var _default =\n\nstore;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsImhpU2NvcmUiLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsIkhJU0NPUkUiLCJnZXR0ZXJzIiwiZ2V0SGlTY29yZSIsIm11dGF0aW9ucyIsInNldEhpU2NvcmUiLCJzY29yZSIsInNldFN0b3JhZ2VTeW5jIiwiY2xlYXJIaXNjb3JlIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoidUZBQUE7QUFDQTtBQUNBLG1FO0FBQ0FBLGFBQUlDLEdBQUosQ0FBUUMsYUFBUjtBQUNBLElBQU1DLEtBQUssR0FBRyxJQUFJRCxjQUFLRSxLQUFULENBQWU7QUFDekJDLE9BQUssRUFBRTtBQUNUQyxXQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsY0FBSixDQUFtQkMsZUFBbkIsS0FBK0IsQ0FEL0IsQ0FDa0M7QUFEbEMsR0FEa0I7QUFJNUJDLFNBQU8sRUFBRTtBQUNSO0FBQ0FDLGNBRlEsc0JBRUlOLEtBRkosRUFFVztBQUNsQixhQUFPQSxLQUFLLENBQUNDLE9BQWI7QUFDQSxLQUpPLEVBSm1COztBQVV6Qk0sV0FBUyxFQUFFO0FBQ2I7QUFDQUMsY0FGYSxzQkFFRFIsS0FGQyxFQUVNUyxLQUZOLEVBRWE7QUFDekJULFdBQUssQ0FBQ0MsT0FBTixHQUFnQlEsS0FBaEI7QUFDQVAsU0FBRyxDQUFDUSxjQUFKLENBQW1CTixlQUFuQixFQUE0QkssS0FBNUI7QUFDQSxLQUxZO0FBTWI7QUFDQUUsZ0JBUGEsd0JBT0NYLEtBUEQsRUFPUTtBQUNwQkEsV0FBSyxDQUFDQyxPQUFOLEdBQWdCLEVBQWhCO0FBQ0FDLFNBQUcsQ0FBQ1UsaUJBQUosQ0FBc0JSLGVBQXRCO0FBQ0EsS0FWWSxFQVZjOztBQXNCekJTLFNBQU8sRUFBRSxFQXRCZ0IsRUFBZixDQUFkLEM7O0FBd0JlZixLIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCB7IEhJU0NPUkUgfSBmcm9tICdAL2Fzc2V0cy9qcy9jb25maWcuanMnXHJcblZ1ZS51c2UoVnVleClcclxuY29uc3Qgc3RvcmUgPSBuZXcgVnVleC5TdG9yZSh7XHJcbiAgICBzdGF0ZToge1xyXG5cdFx0aGlTY29yZTogdW5pLmdldFN0b3JhZ2VTeW5jKEhJU0NPUkUpIHx8IDAsIC8v5pyA6auY5YiG5pWwXHJcblx0fSxcclxuXHRnZXR0ZXJzOiB7XHJcblx0XHQvL+iOt+WPluW9k+WJjeeZu+W9leS/oeaBr1xyXG5cdFx0Z2V0SGlTY29yZSAoc3RhdGUpIHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlLmhpU2NvcmVcclxuXHRcdH1cclxuXHR9LFxyXG4gICAgbXV0YXRpb25zOiB7XHJcblx0XHQvL+iuvue9rueZu+W9leS/oeaBr1xyXG5cdFx0c2V0SGlTY29yZSAoc3RhdGUsIHNjb3JlKSB7XHJcblx0XHRcdHN0YXRlLmhpU2NvcmUgPSBzY29yZTtcclxuXHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKEhJU0NPUkUsIHNjb3JlKVxyXG5cdFx0fSxcclxuXHRcdC8v5riF5qWa55m75b2V5L+h5oGvXHJcblx0XHRjbGVhckhpc2NvcmUgKHN0YXRlKSB7XHJcblx0XHRcdHN0YXRlLmhpU2NvcmUgPSAnJztcclxuXHRcdFx0dW5pLnJlbW92ZVN0b3JhZ2VTeW5jKEhJU0NPUkUpO1xyXG5cdFx0fVxyXG5cdH0sXHJcbiAgICBhY3Rpb25zOiB7fVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!****************************************************!*\
  !*** D:/my-project/uni-tetris/assets/js/config.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.HISCORE = void 0;var HISCORE = 'UNI_TETRIS_SCORE';exports.HISCORE = HISCORE;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXNzZXRzL2pzL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJISVNDT1JFIl0sIm1hcHBpbmdzIjoidUZBQU8sSUFBTUEsT0FBTyxHQUFHLGtCQUFoQixDIiwiZmlsZSI6IjIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEhJU0NPUkUgPSAnVU5JX1RFVFJJU19TQ09SRSc7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///22\n");

/***/ })
],[[0,"app-config"]]]);