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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 516);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!***********************************************************!*\
  !*** E:/uni-app/StudyUniApp2/main.js?{"type":"appStyle"} ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)


/***/ }),

/***/ 14:
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

/***/ 177:
/*!**********************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-section/uni-section.vue ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_section_vue_vue_type_template_id_c3408c30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-section.vue?vue&type=template&id=c3408c30&scoped=true& */ 178);
/* harmony import */ var _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-section.vue?vue&type=script&lang=js& */ 180);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-section.vue?vue&type=style&index=0&id=c3408c30&scoped=true&lang=css& */ 182).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-section.vue?vue&type=style&index=0&id=c3408c30&scoped=true&lang=css& */ 182).default)
            }

}

/* normalize component */

var component = Object(_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_section_vue_vue_type_template_id_c3408c30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_section_vue_vue_type_template_id_c3408c30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c3408c30",
  "e29a12fc",
  false,
  _uni_section_vue_vue_type_template_id_c3408c30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/uni-app/StudyUniApp2/components/uni-section/uni-section.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 178:
/*!*****************************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-section/uni-section.vue?vue&type=template&id=c3408c30&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_c3408c30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-section.vue?vue&type=template&id=c3408c30&scoped=true& */ 179);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_c3408c30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_c3408c30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_c3408c30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_c3408c30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 179:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/components/uni-section/uni-section.vue?vue&type=template&id=c3408c30&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: ["uni-section"], attrs: { nvue: true } },
    [
      _vm.type
        ? _c("view", { staticClass: ["uni-section__head"] }, [
            _c("view", {
              staticClass: ["uni-section__head-tag"],
              class: _vm.type
            })
          ])
        : _vm._e(),
      _c("view", { staticClass: ["uni-section__content"] }, [
        _c(
          "u-text",
          {
            staticClass: ["uni-section__content-title"],
            class: { distraction: !_vm.subTitle }
          },
          [_vm._v(_vm._s(_vm.title))]
        ),
        _vm.subTitle
          ? _c("u-text", { staticClass: ["uni-section__content-sub"] }, [
              _vm._v(_vm._s(_vm.subTitle))
            ])
          : _vm._e()
      ]),
      _vm._t("default")
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 180:
/*!***********************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-section/uni-section.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-section.vue?vue&type=script&lang=js& */ 181);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 181:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/components/uni-section/uni-section.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
//

/**
 * Section 标题栏
 * @description 标题栏
 * @property {String} type = [line|circle] 标题装饰类型
 * 	@value line 竖线
 * 	@value circle 圆形
 * @property {String} title 主标题
 * @property {String} subTitle 副标题
 */var _default =

{
  name: 'UniTitle',
  props: {
    type: {
      type: String,
      default: '' },

    title: {
      type: String,
      default: '' },

    subTitle: {
      type: String,
      default: '' } },


  data: function data() {
    return {};
  },
  watch: {
    title: function title(newVal) {
      if (uni.report && newVal !== '') {
        uni.report('title', newVal);
      }
    } },

  methods: {
    onClick: function onClick() {
      this.$emit('click');
    } } };exports.default = _default;

/***/ }),

/***/ 182:
/*!*******************************************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-section/uni-section.vue?vue&type=style&index=0&id=c3408c30&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_c3408c30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-section.vue?vue&type=style&index=0&id=c3408c30&scoped=true&lang=css& */ 183);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_c3408c30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_c3408c30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_c3408c30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_c3408c30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_c3408c30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 183:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/components/uni-section/uni-section.vue?vue&type=style&index=0&id=c3408c30&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-section": {
    "position": "relative",
    "marginTop": "10",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10",
    "height": "50",
    "backgroundColor": "#f8f8f8",
    "borderBottomColor": "#e5e5e5",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "0.5",
    "fontWeight": "normal"
  },
  "uni-section__head": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "marginRight": "10"
  },
  "line": {
    "height": "15",
    "backgroundColor": "#c0c0c0",
    "borderRadius": "5",
    "width": "3"
  },
  "circle": {
    "width": "8",
    "height": "8",
    "borderTopRightRadius": "50",
    "borderTopLeftRadius": "50",
    "borderBottomLeftRadius": "50",
    "borderBottomRightRadius": "50",
    "backgroundColor": "#c0c0c0"
  },
  "uni-section__content": {
    "flex": 1,
    "color": "#333333"
  },
  "uni-section__content-title": {
    "fontSize": "28rpx",
    "color": "#333333"
  },
  "distraction": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "uni-section__content-sub": {
    "fontSize": "24rpx",
    "color": "#999999"
  }
}

/***/ }),

/***/ 2:
/*!***********************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/App.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 3:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 516:
/*!****************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/main.js?{"page":"pages%2FextUI%2Ftag%2Ftag"} ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_extUI_tag_tag_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/extUI/tag/tag.nvue?mpType=page */ 517);

        
        
        
        _pages_extUI_tag_tag_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].mpType = 'page'
        _pages_extUI_tag_tag_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].route = 'pages/extUI/tag/tag'
        _pages_extUI_tag_tag_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].el = '#root'
        new Vue(_pages_extUI_tag_tag_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"])
        

/***/ }),

/***/ 517:
/*!********************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/pages/extUI/tag/tag.nvue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_nvue_vue_type_template_id_e915f4c4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag.nvue?vue&type=template&id=e915f4c4&mpType=page */ 518);
/* harmony import */ var _tag_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag.nvue?vue&type=script&lang=js&mpType=page */ 527);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tag_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tag_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./tag.nvue?vue&type=style&index=0&lang=css&mpType=page */ 529).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./tag.nvue?vue&type=style&index=0&lang=css&mpType=page */ 529).default)
            }

}

/* normalize component */

var component = Object(_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tag_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _tag_nvue_vue_type_template_id_e915f4c4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _tag_nvue_vue_type_template_id_e915f4c4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "9c4310ce",
  false,
  _tag_nvue_vue_type_template_id_e915f4c4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/uni-app/StudyUniApp2/pages/extUI/tag/tag.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 518:
/*!**************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/pages/extUI/tag/tag.nvue?vue&type=template&id=e915f4c4&mpType=page ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tag_nvue_vue_type_template_id_e915f4c4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tag.nvue?vue&type=template&id=e915f4c4&mpType=page */ 519);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tag_nvue_vue_type_template_id_e915f4c4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tag_nvue_vue_type_template_id_e915f4c4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tag_nvue_vue_type_template_id_e915f4c4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tag_nvue_vue_type_template_id_e915f4c4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 519:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/pages/extUI/tag/tag.nvue?vue&type=template&id=e915f4c4&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uniSection: __webpack_require__(/*! @/components/uni-section/uni-section.vue */ 177).default,
  uniTag: __webpack_require__(/*! @/components/uni-tag/uni-tag.vue */ 520).default
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        [
          _c("u-text", { staticClass: ["example-info"] }, [
            _vm._v("标签组件多用于商品分类、重点内容显示等场景。")
          ]),
          _c("uni-section", { attrs: { title: "实心标签", type: "line" } }),
          _c("view", { staticClass: ["example-body"] }, [
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [_c("uni-tag", { attrs: { text: "标签" } })],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [_c("uni-tag", { attrs: { text: "标签", type: "primary" } })],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [_c("uni-tag", { attrs: { text: "标签", type: "success" } })],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [_c("uni-tag", { attrs: { text: "标签", type: "warning" } })],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [_c("uni-tag", { attrs: { text: "标签", type: "error" } })],
              1
            )
          ]),
          _c("uni-section", { attrs: { title: "空心标签", type: "line" } }),
          _c("view", { staticClass: ["example-body"] }, [
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [_c("uni-tag", { attrs: { inverted: true, text: "标签" } })],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: { inverted: true, text: "标签", type: "primary" }
                })
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: { inverted: true, text: "标签", type: "success" }
                })
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: { inverted: true, text: "标签", type: "warning" }
                })
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: { inverted: true, text: "标签", type: "error" }
                })
              ],
              1
            )
          ]),
          _c("uni-section", { attrs: { title: "圆角样式", type: "line" } }),
          _c("view", { staticClass: ["example-body"] }, [
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: {
                    circle: true,
                    text: "标签",
                    type: "primary",
                    size: "small"
                  }
                })
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: {
                    inverted: true,
                    circle: true,
                    text: "标签",
                    type: "success",
                    size: "small"
                  }
                })
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: { circle: true, text: "标签", type: "warning" }
                })
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: {
                    inverted: true,
                    circle: true,
                    text: "标签",
                    type: "error"
                  }
                })
              ],
              1
            )
          ]),
          _c("uni-section", { attrs: { title: "标记样式", type: "line" } }),
          _c("view", { staticClass: ["example-body"] }, [
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: {
                    mark: true,
                    text: "标签",
                    type: "primary",
                    size: "small"
                  }
                })
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: {
                    mark: true,
                    text: "标签",
                    type: "success",
                    size: "small"
                  }
                })
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: { mark: true, text: "标签", type: "warning" }
                })
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: {
                    mark: true,
                    circle: true,
                    text: "标签",
                    type: "error"
                  }
                })
              ],
              1
            )
          ]),
          _c("uni-section", { attrs: { title: "点击事件", type: "line" } }),
          _c("view", { staticClass: ["example-body"] }, [
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: { type: _vm.type, text: "标签" },
                  on: { click: _vm.setType }
                })
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: {
                    circle: true,
                    inverted: _vm.inverted,
                    text: "标签",
                    type: "primary"
                  },
                  on: { click: _vm.setInverted }
                })
              ],
              1
            )
          ]),
          _c("uni-section", { attrs: { title: "小标签", type: "line" } }),
          _c("view", { staticClass: ["example-body"] }, [
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [_c("uni-tag", { attrs: { text: "标签", size: "small" } })],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: { text: "标签", type: "primary", size: "small" }
                })
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: { text: "标签", type: "success", size: "small" }
                })
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: {
                    inverted: true,
                    mark: true,
                    text: "标签",
                    type: "warning",
                    size: "small"
                  }
                })
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: {
                    inverted: true,
                    circle: true,
                    text: "标签",
                    type: "error",
                    size: "small"
                  }
                })
              ],
              1
            )
          ]),
          _c("uni-section", { attrs: { title: "不可点击状态", type: "line" } }),
          _c("view", { staticClass: ["example-body"] }, [
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [_c("uni-tag", { attrs: { disabled: true, text: "标签" } })],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: { disabled: true, text: "标签", type: "primary" }
                })
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["tag-view"] },
              [
                _c("uni-tag", {
                  attrs: {
                    inverted: true,
                    disabled: true,
                    text: "标签",
                    type: "error",
                    size: "small"
                  }
                })
              ],
              1
            )
          ])
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 520:
/*!**************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-tag/uni-tag.vue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_tag_vue_vue_type_template_id_9e02b05c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-tag.vue?vue&type=template&id=9e02b05c&scoped=true& */ 521);
/* harmony import */ var _uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-tag.vue?vue&type=script&lang=js& */ 523);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-tag.vue?vue&type=style&index=0&id=9e02b05c&scoped=true&lang=css& */ 525).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-tag.vue?vue&type=style&index=0&id=9e02b05c&scoped=true&lang=css& */ 525).default)
            }

}

/* normalize component */

var component = Object(_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_tag_vue_vue_type_template_id_9e02b05c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_tag_vue_vue_type_template_id_9e02b05c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9e02b05c",
  "4abb6628",
  false,
  _uni_tag_vue_vue_type_template_id_9e02b05c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/uni-app/StudyUniApp2/components/uni-tag/uni-tag.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 521:
/*!*********************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-tag/uni-tag.vue?vue&type=template&id=9e02b05c&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_template_id_9e02b05c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-tag.vue?vue&type=template&id=9e02b05c&scoped=true& */ 522);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_template_id_9e02b05c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_template_id_9e02b05c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_template_id_9e02b05c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_template_id_9e02b05c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 522:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/components/uni-tag/uni-tag.vue?vue&type=template&id=9e02b05c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.text
    ? _c(
        "view",
        {
          staticClass: ["uni-tag"],
          class: [
            "uni-tag--" + _vm.type,
            _vm.disabled === true || _vm.disabled === "true"
              ? "uni-tag--disabled"
              : "",
            _vm.inverted === true || _vm.inverted === "true"
              ? _vm.type + "-uni-tag--inverted"
              : "",
            _vm.circle === true || _vm.circle === "true"
              ? "uni-tag--circle"
              : "",
            _vm.mark === true || _vm.mark === "true" ? "uni-tag--mark" : "",
            "uni-tag--" + _vm.size
          ],
          on: {
            click: function($event) {
              _vm.onClick()
            }
          }
        },
        [
          _c(
            "u-text",
            {
              class: [
                _vm.type === "default" ? "uni-tag--default" : "uni-tag-text",
                _vm.inverted === true || _vm.inverted === "true"
                  ? "uni-tag-text--" + _vm.type
                  : "",
                _vm.size === "small" ? "uni-tag-text--small" : ""
              ]
            },
            [_vm._v(_vm._s(_vm.text))]
          )
        ]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 523:
/*!***************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-tag/uni-tag.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-tag.vue?vue&type=script&lang=js& */ 524);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 524:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/components/uni-tag/uni-tag.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
//

/**
 * Tag 标签
 * @description 用于展示1个或多个文字标签，可点击切换选中、不选中的状态
 * @tutorial https://ext.dcloud.net.cn/plugin?id=35
 * @property {String} text 标签内容
 * @property {String} size = [normal|small] 大小尺寸
 * 	@value normal 正常
 * 	@value small 小尺寸
 * @property {String} type = [default|primary|success｜warning｜error｜royal]  颜色类型
 * 	@value default 灰色
 * 	@value primary 蓝色
 * 	@value success 绿色
 * 	@value warning 黄色
 * 	@value error 红色
 * 	@value royal 紫色
 * @property {Boolean} disabled = [true|false] 是否为禁用状态
 * @property {Boolean} inverted = [true|false] 是否无需背景颜色（空心标签）
 * @property {Boolean} circle = [true|false] 是否为圆角
 * @event {Function} click 点击 Tag 触发事件
 */var _default =

{
  name: "UniTag",
  props: {
    type: {
      // 标签类型default、primary、success、warning、error、royal
      type: String,
      default: "default" },

    size: {
      // 标签大小 normal, small
      type: String,
      default: "normal" },

    // 标签内容
    text: {
      type: String,
      default: "" },

    disabled: {
      // 是否为禁用状态
      type: [Boolean, String],
      default: false },

    inverted: {
      // 是否为空心
      type: [Boolean, String],
      default: false },

    circle: {
      // 是否为圆角样式
      type: [Boolean, String],
      default: false },

    mark: {
      // 是否为标记样式
      type: [Boolean, String],
      default: false } },


  methods: {
    onClick: function onClick() {
      if (this.disabled === true || this.disabled === "true") {
        return;
      }
      this.$emit("click");
    } } };exports.default = _default;

/***/ }),

/***/ 525:
/*!***********************************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-tag/uni-tag.vue?vue&type=style&index=0&id=9e02b05c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_style_index_0_id_9e02b05c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-tag.vue?vue&type=style&index=0&id=9e02b05c&scoped=true&lang=css& */ 526);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_style_index_0_id_9e02b05c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_style_index_0_id_9e02b05c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_style_index_0_id_9e02b05c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_style_index_0_id_9e02b05c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_tag_vue_vue_type_style_index_0_id_9e02b05c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 526:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/components/uni-tag/uni-tag.vue?vue&type=style&index=0&id=9e02b05c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-tag": {
    "paddingTop": "0",
    "paddingRight": "16",
    "paddingBottom": "0",
    "paddingLeft": "16",
    "height": "30",
    "lineHeight": "30",
    "justifyContent": "center",
    "color": "#333333",
    "borderRadius": "6rpx",
    "backgroundColor": "#f8f8f8",
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#f8f8f8"
  },
  "uni-tag--circle": {
    "borderRadius": "15"
  },
  "uni-tag--mark": {
    "borderTopLeftRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderTopRightRadius": "15",
    "borderBottomRightRadius": "15"
  },
  "uni-tag--disabled": {
    "opacity": 0.5
  },
  "uni-tag--small": {
    "height": "20",
    "paddingTop": "0",
    "paddingRight": "8",
    "paddingBottom": "0",
    "paddingLeft": "8",
    "lineHeight": "20",
    "fontSize": "24rpx"
  },
  "uni-tag--default": {
    "color": "#333333",
    "fontSize": "28rpx"
  },
  "uni-tag-text--small": {
    "fontSize": "24rpx"
  },
  "uni-tag-text": {
    "color": "#ffffff",
    "fontSize": "28rpx"
  },
  "uni-tag-text--primary": {
    "color": "#007aff"
  },
  "uni-tag-text--success": {
    "color": "#4cd964"
  },
  "uni-tag-text--warning": {
    "color": "#f0ad4e"
  },
  "uni-tag-text--error": {
    "color": "#dd524d"
  },
  "uni-tag--primary": {
    "color": "#ffffff",
    "backgroundColor": "#007aff",
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#007aff"
  },
  "primary-uni-tag--inverted": {
    "color": "#007aff",
    "backgroundColor": "#ffffff",
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#007aff"
  },
  "uni-tag--success": {
    "color": "#ffffff",
    "backgroundColor": "#4cd964",
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#4cd964"
  },
  "success-uni-tag--inverted": {
    "color": "#4cd964",
    "backgroundColor": "#ffffff",
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#4cd964"
  },
  "uni-tag--warning": {
    "color": "#ffffff",
    "backgroundColor": "#f0ad4e",
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#f0ad4e"
  },
  "warning-uni-tag--inverted": {
    "color": "#f0ad4e",
    "backgroundColor": "#ffffff",
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#f0ad4e"
  },
  "uni-tag--error": {
    "color": "#ffffff",
    "backgroundColor": "#dd524d",
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#dd524d"
  },
  "error-uni-tag--inverted": {
    "color": "#dd524d",
    "backgroundColor": "#ffffff",
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#dd524d"
  },
  "uni-tag--inverted": {
    "color": "#333333",
    "backgroundColor": "#ffffff",
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#f8f8f8"
  }
}

/***/ }),

/***/ 527:
/*!********************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/pages/extUI/tag/tag.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tag_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tag.nvue?vue&type=script&lang=js&mpType=page */ 528);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tag_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tag_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tag_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tag_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tag_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 528:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/pages/extUI/tag/tag.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

















































































































var _uniTag = _interopRequireDefault(__webpack_require__(/*! @/components/uni-tag/uni-tag.vue */ 520));
var _uniSection = _interopRequireDefault(__webpack_require__(/*! @/components/uni-section/uni-section.vue */ 177));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
//
//
var _default = { components: { uniTag: _uniTag.default, uniSection: _uniSection.default }, data: function data() {return { type: 'default', inverted: false };}, methods: { setType: function setType() {var types = ['default', 'primary', 'success', 'warning', 'error'];var index = types.indexOf(this.type);types.splice(index, 1);var randomIndex = Math.floor(Math.random() * 4);this.type = types[randomIndex];}, setInverted: function setInverted() {this.inverted = !this.inverted;} } };exports.default = _default;

/***/ }),

/***/ 529:
/*!****************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/pages/extUI/tag/tag.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tag_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tag.nvue?vue&type=style&index=0&lang=css&mpType=page */ 530);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tag_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tag_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tag_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tag_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tag_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 530:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/pages/extUI/tag/tag.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "example": {
    "paddingTop": 0,
    "paddingRight": "15",
    "paddingBottom": 0,
    "paddingLeft": "15"
  },
  "example-info": {
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "color": "#3b4144",
    "backgroundColor": "#ffffff",
    "fontSize": "14",
    "lineHeight": "20"
  },
  "example-info-text": {
    "fontSize": "14",
    "lineHeight": "20",
    "color": "#3b4144"
  },
  "example-body": {
    "flexDirection": "row",
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "backgroundColor": "#ffffff",
    "justifyContent": "flex-start",
    "flexWrap": "wrap"
  },
  "word-btn-white": {
    "fontSize": "18",
    "color": "#FFFFFF"
  },
  "word-btn": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "6",
    "height": "48",
    "marginTop": "15",
    "marginRight": "15",
    "marginBottom": "15",
    "marginLeft": "15",
    "backgroundColor": "#007AFF"
  },
  "word-btn--hover": {
    "backgroundColor": "#4ca2ff"
  },
  "tag-view": {
    "flexDirection": "column",
    "marginTop": "10rpx",
    "marginRight": "15rpx",
    "marginBottom": "10rpx",
    "marginLeft": "15rpx",
    "justifyContent": "center"
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9tYWluLmpzP2Y3YzEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzP2YwYzUiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlPzlmMjIiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlP2ZhNTYiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlP2EyMDciLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlPzU2YzIiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlIiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZT85YjNhIiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZT8xZjNlIiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9BcHAudnVlP2VmMzUiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL0FwcC52dWU/OTk0NSIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvbWFpbi5qcz9kNWY5Iiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9wYWdlcy9leHRVSS90YWcvdGFnLm52dWU/ZjdmMiIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvcGFnZXMvZXh0VUkvdGFnL3RhZy5udnVlP2IyYzgiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL3BhZ2VzL2V4dFVJL3RhZy90YWcubnZ1ZT83Y2ZmIiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9jb21wb25lbnRzL3VuaS10YWcvdW5pLXRhZy52dWU/ZmUzNiIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvY29tcG9uZW50cy91bmktdGFnL3VuaS10YWcudnVlPzRjMjMiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXRhZy91bmktdGFnLnZ1ZT84MzBkIiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9jb21wb25lbnRzL3VuaS10YWcvdW5pLXRhZy52dWU/NDRlMyIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktdGFnL3VuaS10YWcudnVlIiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9jb21wb25lbnRzL3VuaS10YWcvdW5pLXRhZy52dWU/NDcxYyIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvY29tcG9uZW50cy91bmktdGFnL3VuaS10YWcudnVlPzM2M2MiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL3BhZ2VzL2V4dFVJL3RhZy90YWcubnZ1ZT9kZDdkIiwidW5pLWFwcDovLy9wYWdlcy9leHRVSS90YWcvdGFnLm52dWUiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL3BhZ2VzL2V4dFVJL3RhZy90YWcubnZ1ZT8zZDBiIiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9wYWdlcy9leHRVSS90YWcvdGFnLm52dWU/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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJwYWdlcy9leHRVSS90YWcvdGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUxNik7XG4iLCJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSwgLyogdnVlLWNsaSBvbmx5ICovXG4gIGNvbXBvbmVudHMsIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgcmVuZGVyanMgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgaWYgKCFvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgIG9wdGlvbnMuY29tcG9uZW50cyA9IHt9XG4gICAgfVxuICAgIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICAgZm9yICh2YXIgbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgICBpZiAoaGFzT3duLmNhbGwoY29tcG9uZW50cywgbmFtZSkgJiYgIWhhc093bi5jYWxsKG9wdGlvbnMuY29tcG9uZW50cywgbmFtZSkpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50c1tuYW1lXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbiAgaWYgKHJlbmRlcmpzKSB7XG4gICAgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSB8fCAocmVuZGVyanMuYmVmb3JlQ3JlYXRlID0gW10pKS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpc1tyZW5kZXJqcy5fX21vZHVsZV0gPSB0aGlzXG4gICAgfSk7XG4gICAgKG9wdGlvbnMubWl4aW5zIHx8IChvcHRpb25zLm1peGlucyA9IFtdKSkucHVzaChyZW5kZXJqcylcbiAgfVxuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzM0MDhjMzAmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMzNDA4YzMwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMzQwOGMzMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjMzQwOGMzMFwiLFxuICBcImUyOWExMmZjXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUucmVjeWNsZS5qcyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMzQwOGMzMCZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidmlld1wiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1zZWN0aW9uXCJdLCBhdHRyczogeyBudnVlOiB0cnVlIH0gfSxcbiAgICBbXG4gICAgICBfdm0udHlwZVxuICAgICAgICA/IF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktc2VjdGlvbl9faGVhZFwiXSB9LCBbXG4gICAgICAgICAgICBfYyhcInZpZXdcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLXNlY3Rpb25fX2hlYWQtdGFnXCJdLFxuICAgICAgICAgICAgICBjbGFzczogX3ZtLnR5cGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktc2VjdGlvbl9fY29udGVudFwiXSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1zZWN0aW9uX19jb250ZW50LXRpdGxlXCJdLFxuICAgICAgICAgICAgY2xhc3M6IHsgZGlzdHJhY3Rpb246ICFfdm0uc3ViVGl0bGUgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldXG4gICAgICAgICksXG4gICAgICAgIF92bS5zdWJUaXRsZVxuICAgICAgICAgID8gX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLXNlY3Rpb25fX2NvbnRlbnQtc3ViXCJdIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc3ViVGl0bGUpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdChcImRlZmF1bHRcIilcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ1bmktc2VjdGlvblwiIG52dWU+XHJcblx0XHQ8dmlldyB2LWlmPVwidHlwZVwiIGNsYXNzPVwidW5pLXNlY3Rpb25fX2hlYWRcIj5cclxuXHRcdFx0PHZpZXcgOmNsYXNzPVwidHlwZVwiIGNsYXNzPVwidW5pLXNlY3Rpb25fX2hlYWQtdGFnXCIgLz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLXNlY3Rpb25fX2NvbnRlbnRcIj5cclxuXHRcdFx0PHRleHQgOmNsYXNzPVwieydkaXN0cmFjdGlvbic6IXN1YlRpdGxlfVwiIGNsYXNzPVwidW5pLXNlY3Rpb25fX2NvbnRlbnQtdGl0bGVcIj57eyB0aXRsZSB9fTwvdGV4dD5cclxuXHRcdFx0PHRleHQgdi1pZj1cInN1YlRpdGxlXCIgY2xhc3M9XCJ1bmktc2VjdGlvbl9fY29udGVudC1zdWJcIj57eyBzdWJUaXRsZSB9fTwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHRcdDxzbG90IC8+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHQvKipcclxuXHQgKiBTZWN0aW9uIOagh+mimOagj1xyXG5cdCAqIEBkZXNjcmlwdGlvbiDmoIfpopjmoI9cclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gdHlwZSA9IFtsaW5lfGNpcmNsZV0g5qCH6aKY6KOF6aWw57G75Z6LXHJcblx0ICogXHRAdmFsdWUgbGluZSDnq5bnur9cclxuXHQgKiBcdEB2YWx1ZSBjaXJjbGUg5ZyG5b2iXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IHRpdGxlIOS4u+agh+mimFxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzdWJUaXRsZSDlia/moIfpophcclxuXHQgKi9cclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ1VuaVRpdGxlJyxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHR5cGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0dGl0bGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0c3ViVGl0bGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7fVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdHRpdGxlKG5ld1ZhbCkge1xyXG5cdFx0XHRcdGlmICh1bmkucmVwb3J0ICYmIG5ld1ZhbCAhPT0gJycpIHtcclxuXHRcdFx0XHRcdHVuaS5yZXBvcnQoJ3RpdGxlJywgbmV3VmFsKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0b25DbGljaygpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjbGljaycpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC51bmktc2VjdGlvbiB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAwIDEwcHg7XHJcblx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG5cdFx0LyogI2lmZGVmIEFQUC1OVlVFICovXHJcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjZTVlNWU1O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAwLjVweDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHR9XHJcblxyXG5cdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHQudW5pLXNlY3Rpb246YWZ0ZXIge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0aGVpZ2h0OiAxcHg7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLjUpO1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZVkoLjUpO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcclxuXHR9XHJcblxyXG5cdC8qICNlbmRpZiAqL1xyXG5cclxuXHQudW5pLXNlY3Rpb25fX2hlYWQge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHR9XHJcblxyXG5cdC5saW5lIHtcclxuXHRcdGhlaWdodDogMTVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHR3aWR0aDogM3B4O1xyXG5cdH1cclxuXHJcblx0LmNpcmNsZSB7XHJcblx0XHR3aWR0aDogOHB4O1xyXG5cdFx0aGVpZ2h0OiA4cHg7XHJcblx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcclxuXHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XHJcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xyXG5cdH1cclxuXHJcblx0LnVuaS1zZWN0aW9uX19jb250ZW50IHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHR9XHJcblxyXG5cdC51bmktc2VjdGlvbl9fY29udGVudC10aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Y29sb3I6ICMzMzM7XHJcblx0fVxyXG5cclxuXHQuZGlzdHJhY3Rpb24ge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudW5pLXNlY3Rpb25fX2NvbnRlbnQtc3ViIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzk5OTtcclxuXHR9XHJcbjwvc3R5bGU+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMzQwOGMzMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMzQwOGMzMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInVuaS1zZWN0aW9uXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmOGY4ZjhcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2U1ZTVlNVwiLFxuICAgIFwiYm9yZGVyQm90dG9tU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIwLjVcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJub3JtYWxcIlxuICB9LFxuICBcInVuaS1zZWN0aW9uX19oZWFkXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwXCJcbiAgfSxcbiAgXCJsaW5lXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjE1XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjYzBjMGMwXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI1XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjNcIlxuICB9LFxuICBcImNpcmNsZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjhcIixcbiAgICBcImhlaWdodFwiOiBcIjhcIixcbiAgICBcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCI6IFwiNTBcIixcbiAgICBcImJvcmRlclRvcExlZnRSYWRpdXNcIjogXCI1MFwiLFxuICAgIFwiYm9yZGVyQm90dG9tTGVmdFJhZGl1c1wiOiBcIjUwXCIsXG4gICAgXCJib3JkZXJCb3R0b21SaWdodFJhZGl1c1wiOiBcIjUwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjYzBjMGMwXCJcbiAgfSxcbiAgXCJ1bmktc2VjdGlvbl9fY29udGVudFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcInVuaS1zZWN0aW9uX19jb250ZW50LXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwiZGlzdHJhY3Rpb25cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwidW5pLXNlY3Rpb25fX2NvbnRlbnQtc3ViXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiXG4gIH1cbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwibW9kdWxlLmV4cG9ydHMgPSB7fSIsIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvZXh0VUkvdGFnL3RhZy5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9leHRVSS90YWcvdGFnJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3RhZy5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU5MTVmNGM0Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90YWcubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi90YWcubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdGFnLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi90YWcubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiOWM0MzEwY2VcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvcGFnZXMvZXh0VUkvdGFnL3RhZy5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUuanMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHBhZ2UtbWV0YS5qcyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhZy5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU5MTVmNGM0Jm1wVHlwZT1wYWdlXCIiLCJ2YXIgY29tcG9uZW50cyA9IHtcbiAgdW5pU2VjdGlvbjogcmVxdWlyZShcIkAvY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWVcIikuZGVmYXVsdCxcbiAgdW5pVGFnOiByZXF1aXJlKFwiQC9jb21wb25lbnRzL3VuaS10YWcvdW5pLXRhZy52dWVcIikuZGVmYXVsdFxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNjcm9sbC12aWV3XCIsXG4gICAge1xuICAgICAgc3RhdGljU3R5bGU6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgc2Nyb2xsWTogdHJ1ZSxcbiAgICAgICAgc2hvd1Njcm9sbGJhcjogdHJ1ZSxcbiAgICAgICAgZW5hYmxlQmFja1RvVG9wOiB0cnVlLFxuICAgICAgICBidWJibGU6IFwidHJ1ZVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJleGFtcGxlLWluZm9cIl0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi5qCH562+57uE5Lu25aSa55So5LqO5ZWG5ZOB5YiG57G744CB6YeN54K55YaF5a655pi+56S6562J5Zy65pmv44CCXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJ1bmktc2VjdGlvblwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIuWunuW/g+agh+etvlwiLCB0eXBlOiBcImxpbmVcIiB9IH0pLFxuICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJleGFtcGxlLWJvZHlcIl0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ0YWctdmlld1wiXSB9LFxuICAgICAgICAgICAgICBbX2MoXCJ1bmktdGFnXCIsIHsgYXR0cnM6IHsgdGV4dDogXCLmoIfnrb5cIiB9IH0pXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widGFnLXZpZXdcIl0gfSxcbiAgICAgICAgICAgICAgW19jKFwidW5pLXRhZ1wiLCB7IGF0dHJzOiB7IHRleHQ6IFwi5qCH562+XCIsIHR5cGU6IFwicHJpbWFyeVwiIH0gfSldLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ0YWctdmlld1wiXSB9LFxuICAgICAgICAgICAgICBbX2MoXCJ1bmktdGFnXCIsIHsgYXR0cnM6IHsgdGV4dDogXCLmoIfnrb5cIiwgdHlwZTogXCJzdWNjZXNzXCIgfSB9KV0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInRhZy12aWV3XCJdIH0sXG4gICAgICAgICAgICAgIFtfYyhcInVuaS10YWdcIiwgeyBhdHRyczogeyB0ZXh0OiBcIuagh+etvlwiLCB0eXBlOiBcIndhcm5pbmdcIiB9IH0pXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widGFnLXZpZXdcIl0gfSxcbiAgICAgICAgICAgICAgW19jKFwidW5pLXRhZ1wiLCB7IGF0dHJzOiB7IHRleHQ6IFwi5qCH562+XCIsIHR5cGU6IFwiZXJyb3JcIiB9IH0pXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwidW5pLXNlY3Rpb25cIiwgeyBhdHRyczogeyB0aXRsZTogXCLnqbrlv4PmoIfnrb5cIiwgdHlwZTogXCJsaW5lXCIgfSB9KSxcbiAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wiZXhhbXBsZS1ib2R5XCJdIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widGFnLXZpZXdcIl0gfSxcbiAgICAgICAgICAgICAgW19jKFwidW5pLXRhZ1wiLCB7IGF0dHJzOiB7IGludmVydGVkOiB0cnVlLCB0ZXh0OiBcIuagh+etvlwiIH0gfSldLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ0YWctdmlld1wiXSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1bmktdGFnXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGludmVydGVkOiB0cnVlLCB0ZXh0OiBcIuagh+etvlwiLCB0eXBlOiBcInByaW1hcnlcIiB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widGFnLXZpZXdcIl0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidW5pLXRhZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpbnZlcnRlZDogdHJ1ZSwgdGV4dDogXCLmoIfnrb5cIiwgdHlwZTogXCJzdWNjZXNzXCIgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInRhZy12aWV3XCJdIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInVuaS10YWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaW52ZXJ0ZWQ6IHRydWUsIHRleHQ6IFwi5qCH562+XCIsIHR5cGU6IFwid2FybmluZ1wiIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ0YWctdmlld1wiXSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1bmktdGFnXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGludmVydGVkOiB0cnVlLCB0ZXh0OiBcIuagh+etvlwiLCB0eXBlOiBcImVycm9yXCIgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcInVuaS1zZWN0aW9uXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwi5ZyG6KeS5qC35byPXCIsIHR5cGU6IFwibGluZVwiIH0gfSksXG4gICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImV4YW1wbGUtYm9keVwiXSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInRhZy12aWV3XCJdIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInVuaS10YWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIuagh+etvlwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widGFnLXZpZXdcIl0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidW5pLXRhZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBpbnZlcnRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIuagh+etvlwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widGFnLXZpZXdcIl0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidW5pLXRhZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjaXJjbGU6IHRydWUsIHRleHQ6IFwi5qCH562+XCIsIHR5cGU6IFwid2FybmluZ1wiIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ0YWctdmlld1wiXSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1bmktdGFnXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGludmVydGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaXJjbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi5qCH562+XCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcInVuaS1zZWN0aW9uXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwi5qCH6K6w5qC35byPXCIsIHR5cGU6IFwibGluZVwiIH0gfSksXG4gICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImV4YW1wbGUtYm9keVwiXSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInRhZy12aWV3XCJdIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInVuaS10YWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLmoIfnrb5cIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInRhZy12aWV3XCJdIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInVuaS10YWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLmoIfnrb5cIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInRhZy12aWV3XCJdIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInVuaS10YWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbWFyazogdHJ1ZSwgdGV4dDogXCLmoIfnrb5cIiwgdHlwZTogXCJ3YXJuaW5nXCIgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInRhZy12aWV3XCJdIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInVuaS10YWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIuagh+etvlwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJ1bmktc2VjdGlvblwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIueCueWHu+S6i+S7tlwiLCB0eXBlOiBcImxpbmVcIiB9IH0pLFxuICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJleGFtcGxlLWJvZHlcIl0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ0YWctdmlld1wiXSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1bmktdGFnXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IF92bS50eXBlLCB0ZXh0OiBcIuagh+etvlwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNldFR5cGUgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInRhZy12aWV3XCJdIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInVuaS10YWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpbnZlcnRlZDogX3ZtLmludmVydGVkLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIuagh+etvlwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2V0SW52ZXJ0ZWQgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcInVuaS1zZWN0aW9uXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwi5bCP5qCH562+XCIsIHR5cGU6IFwibGluZVwiIH0gfSksXG4gICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImV4YW1wbGUtYm9keVwiXSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInRhZy12aWV3XCJdIH0sXG4gICAgICAgICAgICAgIFtfYyhcInVuaS10YWdcIiwgeyBhdHRyczogeyB0ZXh0OiBcIuagh+etvlwiLCBzaXplOiBcInNtYWxsXCIgfSB9KV0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInRhZy12aWV3XCJdIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInVuaS10YWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCLmoIfnrb5cIiwgdHlwZTogXCJwcmltYXJ5XCIsIHNpemU6IFwic21hbGxcIiB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widGFnLXZpZXdcIl0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidW5pLXRhZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIuagh+etvlwiLCB0eXBlOiBcInN1Y2Nlc3NcIiwgc2l6ZTogXCJzbWFsbFwiIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ0YWctdmlld1wiXSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1bmktdGFnXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGludmVydGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtYXJrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIuagh+etvlwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widGFnLXZpZXdcIl0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidW5pLXRhZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBpbnZlcnRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIuagh+etvlwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcInVuaS1zZWN0aW9uXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwi5LiN5Y+v54K55Ye754q25oCBXCIsIHR5cGU6IFwibGluZVwiIH0gfSksXG4gICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImV4YW1wbGUtYm9keVwiXSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInRhZy12aWV3XCJdIH0sXG4gICAgICAgICAgICAgIFtfYyhcInVuaS10YWdcIiwgeyBhdHRyczogeyBkaXNhYmxlZDogdHJ1ZSwgdGV4dDogXCLmoIfnrb5cIiB9IH0pXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widGFnLXZpZXdcIl0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidW5pLXRhZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogdHJ1ZSwgdGV4dDogXCLmoIfnrb5cIiwgdHlwZTogXCJwcmltYXJ5XCIgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInRhZy12aWV3XCJdIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInVuaS10YWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIuagh+etvlwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktdGFnLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ZTAyYjA1YyZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS10YWcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktdGFnLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS10YWcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWUwMmIwNWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS10YWcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWUwMmIwNWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiOWUwMmIwNWNcIixcbiAgXCI0YWJiNjYyOFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOi91bmktYXBwL1N0dWR5VW5pQXBwMi9jb21wb25lbnRzL3VuaS10YWcvdW5pLXRhZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5yZWN5Y2xlLmpzIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXRhZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWUwMmIwNWMmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0udGV4dFxuICAgID8gX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS10YWdcIl0sXG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgIFwidW5pLXRhZy0tXCIgKyBfdm0udHlwZSxcbiAgICAgICAgICAgIF92bS5kaXNhYmxlZCA9PT0gdHJ1ZSB8fCBfdm0uZGlzYWJsZWQgPT09IFwidHJ1ZVwiXG4gICAgICAgICAgICAgID8gXCJ1bmktdGFnLS1kaXNhYmxlZFwiXG4gICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgIF92bS5pbnZlcnRlZCA9PT0gdHJ1ZSB8fCBfdm0uaW52ZXJ0ZWQgPT09IFwidHJ1ZVwiXG4gICAgICAgICAgICAgID8gX3ZtLnR5cGUgKyBcIi11bmktdGFnLS1pbnZlcnRlZFwiXG4gICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgIF92bS5jaXJjbGUgPT09IHRydWUgfHwgX3ZtLmNpcmNsZSA9PT0gXCJ0cnVlXCJcbiAgICAgICAgICAgICAgPyBcInVuaS10YWctLWNpcmNsZVwiXG4gICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgIF92bS5tYXJrID09PSB0cnVlIHx8IF92bS5tYXJrID09PSBcInRydWVcIiA/IFwidW5pLXRhZy0tbWFya1wiIDogXCJcIixcbiAgICAgICAgICAgIFwidW5pLXRhZy0tXCIgKyBfdm0uc2l6ZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLm9uQ2xpY2soKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICBfdm0udHlwZSA9PT0gXCJkZWZhdWx0XCIgPyBcInVuaS10YWctLWRlZmF1bHRcIiA6IFwidW5pLXRhZy10ZXh0XCIsXG4gICAgICAgICAgICAgICAgX3ZtLmludmVydGVkID09PSB0cnVlIHx8IF92bS5pbnZlcnRlZCA9PT0gXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgID8gXCJ1bmktdGFnLXRleHQtLVwiICsgX3ZtLnR5cGVcbiAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICBfdm0uc2l6ZSA9PT0gXCJzbWFsbFwiID8gXCJ1bmktdGFnLXRleHQtLXNtYWxsXCIgOiBcIlwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0udGV4dCkpXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXRhZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdGFnLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyA6Y2xhc3M9XCJbXHJcbiAgICAgICd1bmktdGFnLS0nICsgdHlwZSxcclxuICAgICAgZGlzYWJsZWQgPT09IHRydWUgfHwgZGlzYWJsZWQgPT09ICd0cnVlJyA/ICd1bmktdGFnLS1kaXNhYmxlZCcgOiAnJyxcclxuICAgICAgaW52ZXJ0ZWQgPT09IHRydWUgfHwgaW52ZXJ0ZWQgPT09ICd0cnVlJyA/IHR5cGUgKyAnLXVuaS10YWctLWludmVydGVkJyA6ICcnLFxyXG4gICAgICBjaXJjbGUgPT09IHRydWUgfHwgY2lyY2xlID09PSAndHJ1ZScgPyAndW5pLXRhZy0tY2lyY2xlJyA6ICcnLFxyXG4gICAgICBtYXJrID09PSB0cnVlIHx8IG1hcmsgPT09ICd0cnVlJyA/ICd1bmktdGFnLS1tYXJrJyA6ICcnLFxyXG4gICAgICAndW5pLXRhZy0tJyArIHNpemVcclxuICAgIF1cIiBAY2xpY2s9XCJvbkNsaWNrKClcIiBjbGFzcz1cInVuaS10YWdcIiB2LWlmPVwidGV4dFwiPlxyXG5cdFx0PHRleHQgOmNsYXNzPVwiW3R5cGUgPT09ICdkZWZhdWx0JyA/ICd1bmktdGFnLS1kZWZhdWx0JzondW5pLXRhZy10ZXh0JyxpbnZlcnRlZCA9PT0gdHJ1ZSB8fCBpbnZlcnRlZCA9PT0gJ3RydWUnID8gJ3VuaS10YWctdGV4dC0tJyt0eXBlIDogJycsc2l6ZSA9PT0gJ3NtYWxsJyA/ICd1bmktdGFnLXRleHQtLXNtYWxsJzonJyBdXCI+e3sgdGV4dCB9fTwvdGV4dD5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8qKlxyXG5cdCAqIFRhZyDmoIfnrb5cclxuXHQgKiBAZGVzY3JpcHRpb24g55So5LqO5bGV56S6MeS4quaIluWkmuS4quaWh+Wtl+agh+etvu+8jOWPr+eCueWHu+WIh+aNoumAieS4reOAgeS4jemAieS4reeahOeKtuaAgVxyXG5cdCAqIEB0dXRvcmlhbCBodHRwczovL2V4dC5kY2xvdWQubmV0LmNuL3BsdWdpbj9pZD0zNVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0ZXh0IOagh+etvuWGheWuuVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzaXplID0gW25vcm1hbHxzbWFsbF0g5aSn5bCP5bC65a+4XHJcblx0ICogXHRAdmFsdWUgbm9ybWFsIOato+W4uFxyXG5cdCAqIFx0QHZhbHVlIHNtYWxsIOWwj+WwuuWvuFxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0eXBlID0gW2RlZmF1bHR8cHJpbWFyeXxzdWNjZXNz772cd2FybmluZ++9nGVycm9y772ccm95YWxdICDpopzoibLnsbvlnotcclxuXHQgKiBcdEB2YWx1ZSBkZWZhdWx0IOeBsOiJslxyXG5cdCAqIFx0QHZhbHVlIHByaW1hcnkg6JOd6ImyXHJcblx0ICogXHRAdmFsdWUgc3VjY2VzcyDnu7/oibJcclxuXHQgKiBcdEB2YWx1ZSB3YXJuaW5nIOm7hOiJslxyXG5cdCAqIFx0QHZhbHVlIGVycm9yIOe6ouiJslxyXG5cdCAqIFx0QHZhbHVlIHJveWFsIOe0q+iJslxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGlzYWJsZWQgPSBbdHJ1ZXxmYWxzZV0g5piv5ZCm5Li656aB55So54q25oCBXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBpbnZlcnRlZCA9IFt0cnVlfGZhbHNlXSDmmK/lkKbml6DpnIDog4zmma/popzoibLvvIjnqbrlv4PmoIfnrb7vvIlcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGNpcmNsZSA9IFt0cnVlfGZhbHNlXSDmmK/lkKbkuLrlnIbop5JcclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBjbGljayDngrnlh7sgVGFnIOinpuWPkeS6i+S7tlxyXG5cdCAqL1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiBcIlVuaVRhZ1wiLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0dHlwZToge1xyXG5cdFx0XHRcdC8vIOagh+etvuexu+Wei2RlZmF1bHTjgIFwcmltYXJ544CBc3VjY2Vzc+OAgXdhcm5pbmfjgIFlcnJvcuOAgXJveWFsXHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IFwiZGVmYXVsdFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHNpemU6IHtcclxuXHRcdFx0XHQvLyDmoIfnrb7lpKflsI8gbm9ybWFsLCBzbWFsbFxyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiBcIm5vcm1hbFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOagh+etvuWGheWuuVxyXG5cdFx0XHR0ZXh0OiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IFwiXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGlzYWJsZWQ6IHtcclxuXHRcdFx0XHQvLyDmmK/lkKbkuLrnpoHnlKjnirbmgIFcclxuXHRcdFx0XHR0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpbnZlcnRlZDoge1xyXG5cdFx0XHRcdC8vIOaYr+WQpuS4uuepuuW/g1xyXG5cdFx0XHRcdHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdGNpcmNsZToge1xyXG5cdFx0XHRcdC8vIOaYr+WQpuS4uuWchuinkuagt+W8j1xyXG5cdFx0XHRcdHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdG1hcms6IHtcclxuXHRcdFx0XHQvLyDmmK/lkKbkuLrmoIforrDmoLflvI9cclxuXHRcdFx0XHR0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRvbkNsaWNrKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmRpc2FibGVkID09PSB0cnVlIHx8IHRoaXMuZGlzYWJsZWQgPT09IFwidHJ1ZVwiKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoXCJjbGlja1wiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQudW5pLXRhZyB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRwYWRkaW5nOiAwcHggMTZweDtcclxuXHRcdGhlaWdodDogMzBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHRcdGJvcmRlci1yYWRpdXM6IDZycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxcnB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci1jb2xvcjogI2Y4ZjhmODtcclxuXHR9XHJcblxyXG5cdC51bmktdGFnLS1jaXJjbGUge1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTVweDtcclxuXHR9XHJcblxyXG5cdC51bmktdGFnLS1tYXJrIHtcclxuXHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG5cdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XHJcblx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcclxuXHR9XHJcblxyXG5cdC51bmktdGFnLS1kaXNhYmxlZCB7XHJcblx0XHRvcGFjaXR5OiAwLjU7XHJcblx0fVxyXG5cclxuXHQudW5pLXRhZy0tc21hbGwge1xyXG5cdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0cGFkZGluZzogMHB4IDhweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG5cdC51bmktdGFnLS1kZWZhdWx0IHtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHR9XHJcblxyXG5cdC51bmktdGFnLXRleHQtLXNtYWxsIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHggIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC51bmktdGFnLXRleHQge1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdH1cclxuXHJcblx0LnVuaS10YWctdGV4dC0tcHJpbWFyeSB7XHJcblx0XHRjb2xvcjogIzAwN2FmZiAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LnVuaS10YWctdGV4dC0tc3VjY2VzcyB7XHJcblx0XHRjb2xvcjogIzRjZDk2NCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LnVuaS10YWctdGV4dC0td2FybmluZyB7XHJcblx0XHRjb2xvcjogI2YwYWQ0ZSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LnVuaS10YWctdGV4dC0tZXJyb3Ige1xyXG5cdFx0Y29sb3I6ICNkZDUyNGQgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC51bmktdGFnLS1wcmltYXJ5IHtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwN2FmZjtcclxuXHRcdGJvcmRlci13aWR0aDogMXJweDtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItY29sb3I6ICMwMDdhZmY7XHJcblx0fVxyXG5cclxuXHQucHJpbWFyeS11bmktdGFnLS1pbnZlcnRlZCB7XHJcblx0XHRjb2xvcjogIzAwN2FmZjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0XHRib3JkZXItd2lkdGg6IDFycHg7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjMDA3YWZmO1xyXG5cdH1cclxuXHJcblx0LnVuaS10YWctLXN1Y2Nlc3Mge1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGNkOTY0O1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxcnB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci1jb2xvcjogIzRjZDk2NDtcclxuXHR9XHJcblxyXG5cdC5zdWNjZXNzLXVuaS10YWctLWludmVydGVkIHtcclxuXHRcdGNvbG9yOiAjNGNkOTY0O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHRcdGJvcmRlci13aWR0aDogMXJweDtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItY29sb3I6ICM0Y2Q5NjQ7XHJcblx0fVxyXG5cclxuXHQudW5pLXRhZy0td2FybmluZyB7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7XHJcblx0XHRib3JkZXItd2lkdGg6IDFycHg7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjZjBhZDRlO1xyXG5cdH1cclxuXHJcblx0Lndhcm5pbmctdW5pLXRhZy0taW52ZXJ0ZWQge1xyXG5cdFx0Y29sb3I6ICNmMGFkNGU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxcnB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci1jb2xvcjogI2YwYWQ0ZTtcclxuXHR9XHJcblxyXG5cdC51bmktdGFnLS1lcnJvciB7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNkZDUyNGQ7XHJcblx0XHRib3JkZXItd2lkdGg6IDFycHg7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjZGQ1MjRkO1xyXG5cdH1cclxuXHJcblx0LmVycm9yLXVuaS10YWctLWludmVydGVkIHtcclxuXHRcdGNvbG9yOiAjZGQ1MjRkO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHRcdGJvcmRlci13aWR0aDogMXJweDtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItY29sb3I6ICNkZDUyNGQ7XHJcblx0fVxyXG5cclxuXHQudW5pLXRhZy0taW52ZXJ0ZWQge1xyXG5cdFx0Y29sb3I6ICMzMzM7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxcnB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci1jb2xvcjogI2Y4ZjhmODtcclxuXHR9XHJcbjwvc3R5bGU+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdGFnLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTllMDJiMDVjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS10YWcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWUwMmIwNWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ1bmktdGFnXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNlwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTZcIixcbiAgICBcImhlaWdodFwiOiBcIjMwXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMzBcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjZycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmOGY4ZjhcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IFwiMXJweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZjhmOGY4XCJcbiAgfSxcbiAgXCJ1bmktdGFnLS1jaXJjbGVcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTVcIlxuICB9LFxuICBcInVuaS10YWctLW1hcmtcIjoge1xuICAgIFwiYm9yZGVyVG9wTGVmdFJhZGl1c1wiOiAwLFxuICAgIFwiYm9yZGVyQm90dG9tTGVmdFJhZGl1c1wiOiAwLFxuICAgIFwiYm9yZGVyVG9wUmlnaHRSYWRpdXNcIjogXCIxNVwiLFxuICAgIFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIjogXCIxNVwiXG4gIH0sXG4gIFwidW5pLXRhZy0tZGlzYWJsZWRcIjoge1xuICAgIFwib3BhY2l0eVwiOiAwLjVcbiAgfSxcbiAgXCJ1bmktdGFnLS1zbWFsbFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIyMFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIyMFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwidW5pLXRhZy0tZGVmYXVsdFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIlxuICB9LFxuICBcInVuaS10YWctdGV4dC0tc21hbGxcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwidW5pLXRhZy10ZXh0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOHJweFwiXG4gIH0sXG4gIFwidW5pLXRhZy10ZXh0LS1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwN2FmZlwiXG4gIH0sXG4gIFwidW5pLXRhZy10ZXh0LS1zdWNjZXNzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzRjZDk2NFwiXG4gIH0sXG4gIFwidW5pLXRhZy10ZXh0LS13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2YwYWQ0ZVwiXG4gIH0sXG4gIFwidW5pLXRhZy10ZXh0LS1lcnJvclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNkZDUyNGRcIlxuICB9LFxuICBcInVuaS10YWctLXByaW1hcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3YWZmXCIsXG4gICAgXCJib3JkZXJXaWR0aFwiOiBcIjFycHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzAwN2FmZlwiXG4gIH0sXG4gIFwicHJpbWFyeS11bmktdGFnLS1pbnZlcnRlZFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwMDdhZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IFwiMXJweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMDA3YWZmXCJcbiAgfSxcbiAgXCJ1bmktdGFnLS1zdWNjZXNzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzRjZDk2NFwiLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiM0Y2Q5NjRcIlxuICB9LFxuICBcInN1Y2Nlc3MtdW5pLXRhZy0taW52ZXJ0ZWRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNGNkOTY0XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJib3JkZXJXaWR0aFwiOiBcIjFycHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzRjZDk2NFwiXG4gIH0sXG4gIFwidW5pLXRhZy0td2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMGFkNGVcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IFwiMXJweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZjBhZDRlXCJcbiAgfSxcbiAgXCJ3YXJuaW5nLXVuaS10YWctLWludmVydGVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2YwYWQ0ZVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmMGFkNGVcIlxuICB9LFxuICBcInVuaS10YWctLWVycm9yXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RkNTI0ZFwiLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNkZDUyNGRcIlxuICB9LFxuICBcImVycm9yLXVuaS10YWctLWludmVydGVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2RkNTI0ZFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNkZDUyNGRcIlxuICB9LFxuICBcInVuaS10YWctLWludmVydGVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmOGY4ZjhcIlxuICB9XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhZy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWcubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHRleHQgY2xhc3M9XCJleGFtcGxlLWluZm9cIj7moIfnrb7nu4Tku7blpJrnlKjkuo7llYblk4HliIbnsbvjgIHph43ngrnlhoXlrrnmmL7npLrnrYnlnLrmma/jgII8L3RleHQ+XHJcblx0XHQ8dW5pLXNlY3Rpb24gdGl0bGU9XCLlrp7lv4PmoIfnrb5cIiB0eXBlPVwibGluZVwiPjwvdW5pLXNlY3Rpb24+XHJcblx0XHQ8dmlldyBjbGFzcz1cImV4YW1wbGUtYm9keVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhZy12aWV3XCI+XHJcblx0XHRcdFx0PHVuaS10YWcgdGV4dD1cIuagh+etvlwiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWctdmlld1wiPlxyXG5cdFx0XHRcdDx1bmktdGFnIHRleHQ9XCLmoIfnrb5cIiB0eXBlPVwicHJpbWFyeVwiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWctdmlld1wiPlxyXG5cdFx0XHRcdDx1bmktdGFnIHRleHQ9XCLmoIfnrb5cIiB0eXBlPVwic3VjY2Vzc1wiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWctdmlld1wiPlxyXG5cdFx0XHRcdDx1bmktdGFnIHRleHQ9XCLmoIfnrb5cIiB0eXBlPVwid2FybmluZ1wiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWctdmlld1wiPlxyXG5cdFx0XHRcdDx1bmktdGFnIHRleHQ9XCLmoIfnrb5cIiB0eXBlPVwiZXJyb3JcIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dW5pLXNlY3Rpb24gdGl0bGU9XCLnqbrlv4PmoIfnrb5cIiB0eXBlPVwibGluZVwiPjwvdW5pLXNlY3Rpb24+XHJcblx0XHQ8dmlldyBjbGFzcz1cImV4YW1wbGUtYm9keVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhZy12aWV3XCI+XHJcblx0XHRcdFx0PHVuaS10YWcgOmludmVydGVkPVwidHJ1ZVwiIHRleHQ9XCLmoIfnrb5cIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGFnLXZpZXdcIj5cclxuXHRcdFx0XHQ8dW5pLXRhZyA6aW52ZXJ0ZWQ9XCJ0cnVlXCIgdGV4dD1cIuagh+etvlwiIHR5cGU9XCJwcmltYXJ5XCIgLz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhZy12aWV3XCI+XHJcblx0XHRcdFx0PHVuaS10YWcgOmludmVydGVkPVwidHJ1ZVwiIHRleHQ9XCLmoIfnrb5cIiB0eXBlPVwic3VjY2Vzc1wiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWctdmlld1wiPlxyXG5cdFx0XHRcdDx1bmktdGFnIDppbnZlcnRlZD1cInRydWVcIiB0ZXh0PVwi5qCH562+XCIgdHlwZT1cIndhcm5pbmdcIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGFnLXZpZXdcIj5cclxuXHRcdFx0XHQ8dW5pLXRhZyA6aW52ZXJ0ZWQ9XCJ0cnVlXCIgdGV4dD1cIuagh+etvlwiIHR5cGU9XCJlcnJvclwiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx1bmktc2VjdGlvbiB0aXRsZT1cIuWchuinkuagt+W8j1wiIHR5cGU9XCJsaW5lXCI+PC91bmktc2VjdGlvbj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZXhhbXBsZS1ib2R5XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGFnLXZpZXdcIj5cclxuXHRcdFx0XHQ8dW5pLXRhZyA6Y2lyY2xlPVwidHJ1ZVwiIHRleHQ9XCLmoIfnrb5cIiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJzbWFsbFwiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWctdmlld1wiPlxyXG5cdFx0XHRcdDx1bmktdGFnIDppbnZlcnRlZD1cInRydWVcIiA6Y2lyY2xlPVwidHJ1ZVwiIHRleHQ9XCLmoIfnrb5cIiB0eXBlPVwic3VjY2Vzc1wiIHNpemU9XCJzbWFsbFwiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWctdmlld1wiPlxyXG5cdFx0XHRcdDx1bmktdGFnIDpjaXJjbGU9XCJ0cnVlXCIgdGV4dD1cIuagh+etvlwiIHR5cGU9XCJ3YXJuaW5nXCIgLz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhZy12aWV3XCI+XHJcblx0XHRcdFx0PHVuaS10YWcgOmludmVydGVkPVwidHJ1ZVwiIDpjaXJjbGU9XCJ0cnVlXCIgdGV4dD1cIuagh+etvlwiIHR5cGU9XCJlcnJvclwiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx1bmktc2VjdGlvbiB0aXRsZT1cIuagh+iusOagt+W8j1wiIHR5cGU9XCJsaW5lXCI+PC91bmktc2VjdGlvbj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZXhhbXBsZS1ib2R5XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGFnLXZpZXdcIj5cclxuXHRcdFx0XHQ8dW5pLXRhZyA6bWFyaz1cInRydWVcIiB0ZXh0PVwi5qCH562+XCIgdHlwZT1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGFnLXZpZXdcIj5cclxuXHRcdFx0XHQ8dW5pLXRhZyA6bWFyaz1cInRydWVcIiB0ZXh0PVwi5qCH562+XCIgdHlwZT1cInN1Y2Nlc3NcIiBzaXplPVwic21hbGxcIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGFnLXZpZXdcIj5cclxuXHRcdFx0XHQ8dW5pLXRhZyA6bWFyaz1cInRydWVcIiB0ZXh0PVwi5qCH562+XCIgdHlwZT1cIndhcm5pbmdcIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGFnLXZpZXdcIj5cclxuXHRcdFx0XHQ8dW5pLXRhZyA6bWFyaz1cInRydWVcIiA6Y2lyY2xlPVwidHJ1ZVwiIHRleHQ9XCLmoIfnrb5cIiB0eXBlPVwiZXJyb3JcIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dW5pLXNlY3Rpb24gdGl0bGU9XCLngrnlh7vkuovku7ZcIiB0eXBlPVwibGluZVwiPjwvdW5pLXNlY3Rpb24+XHJcblx0XHQ8dmlldyBjbGFzcz1cImV4YW1wbGUtYm9keVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhZy12aWV3XCI+XHJcblx0XHRcdFx0PHVuaS10YWcgOnR5cGU9XCJ0eXBlXCIgdGV4dD1cIuagh+etvlwiIEBjbGljaz1cInNldFR5cGVcIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGFnLXZpZXdcIj5cclxuXHRcdFx0XHQ8dW5pLXRhZyA6Y2lyY2xlPVwidHJ1ZVwiIDppbnZlcnRlZD1cImludmVydGVkXCIgdGV4dD1cIuagh+etvlwiIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwic2V0SW52ZXJ0ZWRcIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PHVuaS1zZWN0aW9uIHRpdGxlPVwi5bCP5qCH562+XCIgdHlwZT1cImxpbmVcIj48L3VuaS1zZWN0aW9uPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJleGFtcGxlLWJvZHlcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWctdmlld1wiPlxyXG5cdFx0XHRcdDx1bmktdGFnIHRleHQ9XCLmoIfnrb5cIiBzaXplPVwic21hbGxcIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGFnLXZpZXdcIj5cclxuXHRcdFx0XHQ8dW5pLXRhZyB0ZXh0PVwi5qCH562+XCIgdHlwZT1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGFnLXZpZXdcIj5cclxuXHRcdFx0XHQ8dW5pLXRhZyB0ZXh0PVwi5qCH562+XCIgdHlwZT1cInN1Y2Nlc3NcIiBzaXplPVwic21hbGxcIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGFnLXZpZXdcIj5cclxuXHRcdFx0XHQ8dW5pLXRhZyA6aW52ZXJ0ZWQ9XCJ0cnVlXCIgOm1hcms9XCJ0cnVlXCIgdGV4dD1cIuagh+etvlwiIHR5cGU9XCJ3YXJuaW5nXCIgc2l6ZT1cInNtYWxsXCIgLz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhZy12aWV3XCI+XHJcblx0XHRcdFx0PHVuaS10YWcgOmludmVydGVkPVwidHJ1ZVwiIDpjaXJjbGU9XCJ0cnVlXCIgdGV4dD1cIuagh+etvlwiIHR5cGU9XCJlcnJvclwiIHNpemU9XCJzbWFsbFwiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8dW5pLXNlY3Rpb24gdGl0bGU9XCLkuI3lj6/ngrnlh7vnirbmgIFcIiB0eXBlPVwibGluZVwiPjwvdW5pLXNlY3Rpb24+XHJcblx0XHQ8dmlldyBjbGFzcz1cImV4YW1wbGUtYm9keVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhZy12aWV3XCI+XHJcblx0XHRcdFx0PHVuaS10YWcgOmRpc2FibGVkPVwidHJ1ZVwiIHRleHQ9XCLmoIfnrb5cIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGFnLXZpZXdcIj5cclxuXHRcdFx0XHQ8dW5pLXRhZyA6ZGlzYWJsZWQ9XCJ0cnVlXCIgdGV4dD1cIuagh+etvlwiIHR5cGU9XCJwcmltYXJ5XCIgLz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhZy12aWV3XCI+XHJcblx0XHRcdFx0PHVuaS10YWcgOmludmVydGVkPVwidHJ1ZVwiIDpkaXNhYmxlZD1cInRydWVcIiB0ZXh0PVwi5qCH562+XCIgdHlwZT1cImVycm9yXCIgc2l6ZT1cInNtYWxsXCIgLz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHVuaVRhZyBmcm9tICdAL2NvbXBvbmVudHMvdW5pLXRhZy91bmktdGFnLnZ1ZSc7XHJcblx0aW1wb3J0IHVuaVNlY3Rpb24gZnJvbSAnQC9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZSdcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdHVuaVRhZyxcclxuXHRcdFx0dW5pU2VjdGlvblxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dHlwZTogJ2RlZmF1bHQnLFxyXG5cdFx0XHRcdGludmVydGVkOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0c2V0VHlwZSgpIHtcclxuXHRcdFx0XHRsZXQgdHlwZXMgPSBbJ2RlZmF1bHQnLCAncHJpbWFyeScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZXJyb3InXTtcclxuXHRcdFx0XHRsZXQgaW5kZXggPSB0eXBlcy5pbmRleE9mKHRoaXMudHlwZSk7XHJcblx0XHRcdFx0dHlwZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcclxuXHRcdFx0XHR0aGlzLnR5cGUgPSB0eXBlc1tyYW5kb21JbmRleF07XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldEludmVydGVkKCkge1xyXG5cdFx0XHRcdHRoaXMuaW52ZXJ0ZWQgPSAhdGhpcy5pbnZlcnRlZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC8qIOWktOadoeWwj+eoi+W6j+e7hOS7tuWGheS4jeiDveW8leWFpeWtl+S9kyAqL1xyXG5cdC8qICNpZmRlZiBNUC1UT1VUSUFPICovXHJcblx0QGZvbnQtZmFjZSB7XHJcblx0XHRmb250LWZhbWlseTogdW5paWNvbnM7XHJcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdFx0c3JjOiB1cmwoJ35AL3N0YXRpYy91bmkudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcblxyXG5cdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRwYWdlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlZmVmZjQ7XHJcblx0XHRtaW4taGVpZ2h0OiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdH1cclxuXHJcblx0dmlldyB7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuXHR9XHJcblxyXG5cdC5leGFtcGxlIHtcclxuXHRcdHBhZGRpbmc6IDAgMTVweCAxNXB4O1xyXG5cdH1cclxuXHJcblx0LmV4YW1wbGUtaW5mbyB7XHJcblx0XHRwYWRkaW5nOiAxNXB4O1xyXG5cdFx0Y29sb3I6ICMzYjQxNDQ7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cdH1cclxuXHJcblx0LmV4YW1wbGUtYm9keSB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHR9XHJcblxyXG5cdC8qICNlbmRpZiAqL1xyXG5cdC5leGFtcGxlIHtcclxuXHRcdHBhZGRpbmc6IDAgMTVweDtcclxuXHR9XHJcblxyXG5cdC5leGFtcGxlLWluZm8ge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0XHRjb2xvcjogIzNiNDE0NDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHR9XHJcblxyXG5cdC5leGFtcGxlLWluZm8tdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRcdGNvbG9yOiAjM2I0MTQ0O1xyXG5cdH1cclxuXHJcblxyXG5cdC5leGFtcGxlLWJvZHkge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdH1cclxuXHJcblx0LndvcmQtYnRuLXdoaXRlIHtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LndvcmQtYnRuIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0XHRoZWlnaHQ6IDQ4cHg7XHJcblx0XHRtYXJnaW46IDE1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QUZGO1xyXG5cdH1cclxuXHJcblx0LndvcmQtYnRuLS1ob3ZlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhMmZmO1xyXG5cdH1cclxuXHJcblxyXG5cdC5leGFtcGxlLWJvZHkge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtUExVUy1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0cGFkZGluZzogMjBycHg7XHJcblx0fVxyXG5cclxuXHQudGFnLXZpZXcge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtUExVUy1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0bWFyZ2luOiAxMHJweCAxNXJweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhZy5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWcubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJleGFtcGxlXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE1XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE1XCJcbiAgfSxcbiAgXCJleGFtcGxlLWluZm9cIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE1XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNVwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE1XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE1XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzYjQxNDRcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMTRcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIyMFwiXG4gIH0sXG4gIFwiZXhhbXBsZS1pbmZvLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjIwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMzYjQxNDRcIlxuICB9LFxuICBcImV4YW1wbGUtYm9keVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJ3b3JkLWJ0bi13aGl0ZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcIndvcmQtYnRuXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI2XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0OFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE1XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdBRkZcIlxuICB9LFxuICBcIndvcmQtYnRuLS1ob3ZlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNGNhMmZmXCJcbiAgfSxcbiAgXCJ0YWctdmlld1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxNXJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxNXJweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==