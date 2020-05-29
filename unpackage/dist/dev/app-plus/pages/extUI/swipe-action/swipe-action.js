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
/******/ 	return __webpack_require__(__webpack_require__.s = 353);
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

/***/ 219:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),

/***/ 3:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 353:
/*!**********************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/main.js?{"page":"pages%2FextUI%2Fswipe-action%2Fswipe-action"} ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_extUI_swipe_action_swipe_action_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/extUI/swipe-action/swipe-action.nvue?mpType=page */ 354);

        
        
        
        _pages_extUI_swipe_action_swipe_action_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].mpType = 'page'
        _pages_extUI_swipe_action_swipe_action_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].route = 'pages/extUI/swipe-action/swipe-action'
        _pages_extUI_swipe_action_swipe_action_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].el = '#root'
        new Vue(_pages_extUI_swipe_action_swipe_action_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"])
        

/***/ }),

/***/ 354:
/*!**************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/pages/extUI/swipe-action/swipe-action.nvue?mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _swipe_action_nvue_vue_type_template_id_0f18f8f4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swipe-action.nvue?vue&type=template&id=0f18f8f4&mpType=page */ 355);
/* harmony import */ var _swipe_action_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swipe-action.nvue?vue&type=script&lang=js&mpType=page */ 370);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _swipe_action_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _swipe_action_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./swipe-action.nvue?vue&type=style&index=0&lang=css&mpType=page */ 372).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./swipe-action.nvue?vue&type=style&index=0&lang=css&mpType=page */ 372).default)
            }

}

/* normalize component */

var component = Object(_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _swipe_action_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _swipe_action_nvue_vue_type_template_id_0f18f8f4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _swipe_action_nvue_vue_type_template_id_0f18f8f4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "71a4b6b5",
  false,
  _swipe_action_nvue_vue_type_template_id_0f18f8f4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/uni-app/StudyUniApp2/pages/extUI/swipe-action/swipe-action.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 355:
/*!********************************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/pages/extUI/swipe-action/swipe-action.nvue?vue&type=template&id=0f18f8f4&mpType=page ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swipe_action_nvue_vue_type_template_id_0f18f8f4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./swipe-action.nvue?vue&type=template&id=0f18f8f4&mpType=page */ 356);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swipe_action_nvue_vue_type_template_id_0f18f8f4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swipe_action_nvue_vue_type_template_id_0f18f8f4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swipe_action_nvue_vue_type_template_id_0f18f8f4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swipe_action_nvue_vue_type_template_id_0f18f8f4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 356:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/pages/extUI/swipe-action/swipe-action.nvue?vue&type=template&id=0f18f8f4&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  uniSwipeAction: __webpack_require__(/*! @/components/uni-swipe-action/uni-swipe-action.vue */ 357)
    .default,
  uniSwipeActionItem: __webpack_require__(/*! @/components/uni-swipe-action-item/uni-swipe-action-item.vue */ 362)
    .default
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
          _c("uni-section", { attrs: { title: "基本用法", type: "line" } }),
          _c(
            "uni-swipe-action",
            [
              _c(
                "uni-swipe-action-item",
                {
                  attrs: { options: _vm.options1 },
                  on: { click: _vm.bindClick }
                },
                [
                  _c("u-text", { staticClass: ["cont"] }, [
                    _vm._v("SwipeAction 基础使用场景")
                  ])
                ]
              )
            ],
            1
          ),
          _c("uni-section", { attrs: { title: "禁止滑动", type: "line" } }),
          _c(
            "uni-swipe-action",
            [
              _c("uni-swipe-action-item", { attrs: { disabled: true } }, [
                _c("u-text", { staticClass: ["cont"] }, [
                  _vm._v("SwipeAction 禁止滑动展示")
                ])
              ])
            ],
            1
          ),
          _c("uni-section", {
            attrs: { title: "使用变量控制开关", type: "line" }
          }),
          _c("view", { staticClass: ["example-body"] }, [
            _c(
              "view",
              { staticClass: ["button"], on: { click: _vm.setOpened } },
              [
                _c("u-text", { staticClass: ["button-text"] }, [
                  _vm._v("当前状态：" + _vm._s(_vm.isOpened ? "开" : "关"))
                ])
              ]
            )
          ]),
          _c(
            "uni-swipe-action",
            [
              _c(
                "uni-swipe-action-item",
                {
                  attrs: {
                    options: _vm.options2,
                    show: _vm.isOpened,
                    autoClose: false
                  },
                  on: { change: _vm.change, click: _vm.bindClick }
                },
                [
                  _c("u-text", { staticClass: ["cont"] }, [
                    _vm._v("使用变量控制SwipeAction的开启状态")
                  ])
                ]
              )
            ],
            1
          ),
          _c("uni-section", {
            attrs: { title: "swipe-action 列表", type: "line" }
          }),
          _c(
            "uni-swipe-action",
            _vm._l(_vm.swipeList, function(item, index) {
              return _c(
                "uni-swipe-action-item",
                {
                  key: item.id,
                  attrs: { options: item.options },
                  on: {
                    change: _vm.swipeChange,
                    click: function($event) {
                      _vm.swipeClick($event, index)
                    }
                  }
                },
                [
                  _c("u-text", { staticClass: ["cont"] }, [
                    _vm._v(_vm._s(item.content))
                  ])
                ]
              )
            }),
            1
          )
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

/***/ 357:
/*!********************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-swipe-action/uni-swipe-action.vue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_swipe_action_vue_vue_type_template_id_0bf04896_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-swipe-action.vue?vue&type=template&id=0bf04896&scoped=true& */ 358);
/* harmony import */ var _uni_swipe_action_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-swipe-action.vue?vue&type=script&lang=js& */ 360);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_swipe_action_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_swipe_action_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      
}

/* normalize component */

var component = Object(_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_swipe_action_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_swipe_action_vue_vue_type_template_id_0bf04896_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_swipe_action_vue_vue_type_template_id_0bf04896_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0bf04896",
  "00a8d02c",
  false,
  _uni_swipe_action_vue_vue_type_template_id_0bf04896_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/uni-app/StudyUniApp2/components/uni-swipe-action/uni-swipe-action.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 358:
/*!***************************************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-swipe-action/uni-swipe-action.vue?vue&type=template&id=0bf04896&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_vue_vue_type_template_id_0bf04896_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-swipe-action.vue?vue&type=template&id=0bf04896&scoped=true& */ 359);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_vue_vue_type_template_id_0bf04896_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_vue_vue_type_template_id_0bf04896_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_vue_vue_type_template_id_0bf04896_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_vue_vue_type_template_id_0bf04896_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 359:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/components/uni-swipe-action/uni-swipe-action.vue?vue&type=template&id=0bf04896&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", [_vm._t("default")], 2)
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 360:
/*!*********************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-swipe-action/uni-swipe-action.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-swipe-action.vue?vue&type=script&lang=js& */ 361);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 361:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/components/uni-swipe-action/uni-swipe-action.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//

/**
 * SwipeAction 滑动操作
 * @description 通过滑动触发选项的容器
 * @tutorial https://ext.dcloud.net.cn/plugin?id=181
 */var _default =
{
  data: function data() {
    return {};
  },
  provide: function provide() {
    return {
      swipeaction: this };

  },
  created: function created() {
    this.children = [];
  },
  methods: {
    closeOther: function closeOther(vm) {
      var children = this.children;
      children.forEach(function (item, index) {
        if (vm === item) return;
        // 支付宝执行以下操作






        // app vue 端、h5 、微信、支付宝  执行以下操作








        // nvue 执行以下操作

        item.close();

      });
    } } };exports.default = _default;

/***/ }),

/***/ 362:
/*!******************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-swipe-action-item/uni-swipe-action-item.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_swipe_action_item_vue_vue_type_template_id_7fbda4cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-swipe-action-item.vue?vue&type=template&id=7fbda4cc&scoped=true& */ 363);
/* harmony import */ var _uni_swipe_action_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-swipe-action-item.vue?vue&type=script&lang=js& */ 365);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_swipe_action_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_swipe_action_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-swipe-action-item.vue?vue&type=style&index=0&id=7fbda4cc&scoped=true&lang=css& */ 368).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-swipe-action-item.vue?vue&type=style&index=0&id=7fbda4cc&scoped=true&lang=css& */ 368).default)
            }

}

/* normalize component */

var component = Object(_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_swipe_action_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_swipe_action_item_vue_vue_type_template_id_7fbda4cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_swipe_action_item_vue_vue_type_template_id_7fbda4cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7fbda4cc",
  "5a354426",
  false,
  _uni_swipe_action_item_vue_vue_type_template_id_7fbda4cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/uni-app/StudyUniApp2/components/uni-swipe-action-item/uni-swipe-action-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 363:
/*!*************************************************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-swipe-action-item/uni-swipe-action-item.vue?vue&type=template&id=7fbda4cc&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_item_vue_vue_type_template_id_7fbda4cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-swipe-action-item.vue?vue&type=template&id=7fbda4cc&scoped=true& */ 364);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_item_vue_vue_type_template_id_7fbda4cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_item_vue_vue_type_template_id_7fbda4cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_item_vue_vue_type_template_id_7fbda4cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_item_vue_vue_type_template_id_7fbda4cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 364:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/components/uni-swipe-action-item/uni-swipe-action-item.vue?vue&type=template&id=7fbda4cc&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: ["uni-swipe"] }, [
    _c(
      "view",
      {
        ref: "selector-box-hock",
        staticClass: ["uni-swipe_content"],
        on: { horizontalpan: _vm.touchstart, touchend: _vm.touchend }
      },
      [
        _c(
          "view",
          {
            ref: "selector-button-hock",
            staticClass: [
              "uni-swipe_button-group",
              "selector-query-hock",
              "move-hock"
            ],
            style: { width: _vm.right + "px" }
          },
          _vm._l(_vm.options, function(item, index) {
            return _c(
              "view",
              {
                key: index,
                ref: "button-hock",
                refInFor: true,
                staticClass: ["uni-swipe_button"],
                style: {
                  backgroundColor:
                    item.style && item.style.backgroundColor
                      ? item.style.backgroundColor
                      : "#C7C6CD",
                  left: _vm.right + "px"
                },
                on: {
                  click: function($event) {
                    _vm.onClick(index, item)
                  }
                }
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["uni-swipe_button-text"],
                    style: {
                      color:
                        item.style && item.style.color
                          ? item.style.color
                          : "#FFFFFF",
                      fontSize:
                        item.style && item.style.fontSize
                          ? item.style.fontSize
                          : "16px"
                    }
                  },
                  [_vm._v(_vm._s(item.text))]
                )
              ]
            )
          }),
          0
        ),
        _c(
          "view",
          {
            ref: "selector-content-hock",
            staticClass: ["uni-swipe_move-box", "selector-query-hock"]
          },
          [
            _c(
              "view",
              { staticClass: ["uni-swipe_box"] },
              [_vm._t("default")],
              2
            )
          ]
        )
      ]
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 365:
/*!*******************************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-swipe-action-item/uni-swipe-action-item.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-swipe-action-item.vue?vue&type=script&lang=js& */ 366);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 366:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/components/uni-swipe-action-item/uni-swipe-action-item.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;















































































var _bindingx = _interopRequireDefault(__webpack_require__(/*! ./bindingx.js */ 367));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
/**
 * SwipeActionItem 滑动操作子组件
 * @description 通过滑动触发选项的容器
 * @tutorial https://ext.dcloud.net.cn/plugin?id=181
 * @property {Boolean} show = [true|false] 开启关闭组件，auto-close = false 时生效
 * @property {Boolean} disabled = [true|false] 是否禁止滑动
 * @property {Boolean} autoClose = [true|false] 其他组件开启的时候，当前组件是否自动关闭
 * @property {Array} options 组件选项内容及样式
 * @event {Function} click 点击选项按钮时触发事件，e = {content,index} ，content（点击内容）、index（下标)
 * @event {Function} change 组件打开或关闭时触发，true：开启状态；false：关闭状态
 */var _default2 = { mixins: [_bindingx.default], props: { /**
                                                            * 按钮内容
                                                            */options: { type: Array, default: function _default() {return [];} }, /**
                                                                                                                                    * 禁用
                                                                                                                                    */disabled: { type: Boolean, default: false }, /**
                                                                                                                                                                                    * 变量控制开关
                                                                                                                                                                                    */show: { type: Boolean, default: false }, /**
                                                                                                                                                                                                                                * 是否自动关闭
                                                                                                                                                                                                                                */autoClose: { type: Boolean, default: true } }, inject: ['swipeaction'] };exports.default = _default2;

/***/ }),

/***/ 367:
/*!****************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-swipe-action-item/bindingx.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var BindingX = __webpack_provided_uni_dot_requireNativePlugin('bindingx');
var dom = __webpack_provided_uni_dot_requireNativePlugin('dom');
var animation = __webpack_provided_uni_dot_requireNativePlugin('animation');var _default =

{
  data: function data() {
    return {
      right: 0,
      button: [],
      preventGesture: false };

  },

  watch: {
    show: function show(newVal) {
      if (!this.position || JSON.stringify(this.position) === '{}') return;
      if (this.autoClose) return;
      if (this.isInAnimation) return;
      if (newVal) {
        this.open();
      } else {
        this.close();
      }
    } },

  created: function created() {
    if (this.swipeaction.children !== undefined) {
      this.swipeaction.children.push(this);
    }
  },
  mounted: function mounted() {var _this = this;
    this.boxSelector = this.getEl(this.$refs['selector-box-hock']);
    this.selector = this.getEl(this.$refs['selector-content-hock']);
    this.buttonSelector = this.getEl(this.$refs['selector-button-hock']);
    this.position = {};
    this.x = 0;
    setTimeout(function () {
      _this.getSelectorQuery();
    }, 200);
  },
  beforeDestroy: function beforeDestroy() {var _this2 = this;
    if (this.timing) {
      BindingX.unbind({
        token: this.timing.token,
        eventType: 'timing' });

    }
    if (this.eventpan) {
      BindingX.unbind({
        token: this.eventpan.token,
        eventType: 'pan' });

    }
    this.swipeaction.children.forEach(function (item, index) {
      if (item === _this2) {
        _this2.swipeaction.children.splice(index, 1);
      }
    });
  },
  methods: {
    onClick: function onClick(index, item) {
      this.$emit('click', {
        content: item,
        index: index });

    },
    touchstart: function touchstart(e) {var _this3 = this;
      if (this.isInAnimation) return;
      if (this.stop) return;
      this.stop = true;
      if (this.autoClose) {
        this.swipeaction.closeOther(this);
      }
      var endWidth = this.right;
      var boxStep = "(x+".concat(this.x, ")");
      var pageX = "".concat(boxStep, "> ").concat(-endWidth, " && ").concat(boxStep, " < 0?").concat(boxStep, ":(x+").concat(this.x, " < 0? ").concat(-endWidth, ":0)");

      var props = [{
        element: this.selector,
        property: 'transform.translateX',
        expression: pageX }];


      var left = 0;
      for (var i = 0; i < this.options.length; i++) {
        var buttonSelectors = this.getEl(this.$refs['button-hock'][i]);
        if (this.button.length === 0 || !this.button[i] || !this.button[i].width) return;
        var moveMix = endWidth - left;
        left += this.button[i].width;
        var step = "(".concat(this.x, "+x)/").concat(endWidth);
        var moveX = "(".concat(step, ") * ").concat(moveMix);
        var pageButtonX = "".concat(moveX, "&& (x+").concat(this.x, " > ").concat(-endWidth, ")?").concat(moveX, ":").concat(-moveMix);
        props.push({
          element: buttonSelectors,
          property: 'transform.translateX',
          expression: pageButtonX });

      }

      this.eventpan = this._bind(this.boxSelector, props, 'pan', function (e) {
        if (e.state === 'end') {
          _this3.x = e.deltaX + _this3.x;
          if (_this3.x < -endWidth) {
            _this3.x = -endWidth;
          }
          if (_this3.x > 0) {
            _this3.x = 0;
          }
          _this3.stop = false;
          _this3.bindTiming();
        }
      });
    },
    touchend: function touchend(e) {var _this4 = this;
      this.$nextTick(function () {
        if (_this4.isopen && !_this4.isDrag && !_this4.isInAnimation) {
          _this4.close();
        }
      });
    },
    bindTiming: function bindTiming() {
      if (this.isopen) {
        this.move(this.x, -this.right);
      } else {
        this.move(this.x, -40);
      }
    },
    move: function move(left, value) {
      if (left >= value) {
        this.close();
      } else {
        this.open();
      }
    },
    /**
        * 开启swipe
        */
    open: function open() {
      this.animation(true);
    },
    /**
        * 关闭swipe
        */
    close: function close() {
      this.animation(false);
    },
    /**
        * 开启关闭动画
        * @param {Object} type
        */
    animation: function animation(type) {var _this5 = this;
      this.isDrag = true;
      var endWidth = this.right;
      var time = 200;
      this.isInAnimation = true;

      var exit = "t>".concat(time);
      var translate_x_expression = "easeOutExpo(t,".concat(this.x, ",").concat(type ? -endWidth - this.x : -this.x, ",").concat(time, ")");
      var props = [{
        element: this.selector,
        property: 'transform.translateX',
        expression: translate_x_expression }];


      var left = 0;
      for (var i = 0; i < this.options.length; i++) {
        var buttonSelectors = this.getEl(this.$refs['button-hock'][i]);
        if (this.button.length === 0 || !this.button[i] || !this.button[i].width) return;
        var moveMix = endWidth - left;
        left += this.button[i].width;
        var step = "".concat(this.x, "/").concat(endWidth);
        var moveX = "(".concat(step, ") * ").concat(moveMix);
        var pageButtonX = "easeOutExpo(t,".concat(moveX, ",").concat(type ? -moveMix + '-' + moveX : 0 + '-' + moveX, ",").concat(time, ")");
        props.push({
          element: buttonSelectors,
          property: 'transform.translateX',
          expression: pageButtonX });

      }

      this.timing = BindingX.bind({
        eventType: 'timing',
        exitExpression: exit,
        props: props },
      function (e) {
        if (e.state === 'end' || e.state === 'exit') {
          _this5.x = type ? -endWidth : 0;
          _this5.isInAnimation = false;

          _this5.isopen = _this5.isopen || false;
          if (_this5.isopen !== type) {
            _this5.$emit('change', type);
          }
          _this5.isopen = type;
          _this5.isDrag = false;
        }
      });
    },
    /**
        * 绑定  BindingX
        * @param {Object} anchor
        * @param {Object} props
        * @param {Object} fn
        */
    _bind: function _bind(anchor, props, eventType, fn) {
      return BindingX.bind({
        anchor: anchor,
        eventType: eventType,
        props: props },
      function (e) {
        typeof fn === 'function' && fn(e);
      });
    },
    /**
        * 获取ref
        * @param {Object} el
        */
    getEl: function getEl(el) {
      return el.ref;
    },
    /**
        * 获取节点信息
        */
    getSelectorQuery: function getSelectorQuery() {var _this6 = this;
      dom.getComponentRect(this.$refs['selector-content-hock'], function (data) {
        if (_this6.position.content) return;
        _this6.position.content = data.size;
      });
      for (var i = 0; i < this.options.length; i++) {
        dom.getComponentRect(this.$refs['button-hock'][i], function (data) {
          if (!_this6.button) {
            _this6.button = [];
          }
          if (_this6.options.length === _this6.button.length) return;
          _this6.button.push(data.size);
          _this6.right += data.size.width;
          if (_this6.autoClose) return;
          if (_this6.show) {
            _this6.open();
          }
        });
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 219)["default"]))

/***/ }),

/***/ 368:
/*!***************************************************************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-swipe-action-item/uni-swipe-action-item.vue?vue&type=style&index=0&id=7fbda4cc&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_item_vue_vue_type_style_index_0_id_7fbda4cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-swipe-action-item.vue?vue&type=style&index=0&id=7fbda4cc&scoped=true&lang=css& */ 369);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_item_vue_vue_type_style_index_0_id_7fbda4cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_item_vue_vue_type_style_index_0_id_7fbda4cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_item_vue_vue_type_style_index_0_id_7fbda4cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_item_vue_vue_type_style_index_0_id_7fbda4cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_swipe_action_item_vue_vue_type_style_index_0_id_7fbda4cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 369:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/components/uni-swipe-action-item/uni-swipe-action-item.vue?vue&type=style&index=0&id=7fbda4cc&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-swipe": {
    "overflow": "hidden"
  },
  "uni-swipe-box": {
    "position": "relative",
    "width": 100
  },
  "uni-swipe_content": {
    "flex": 1,
    "position": "relative"
  },
  "uni-swipe_move-box": {
    "position": "relative",
    "flexDirection": "row"
  },
  "uni-swipe_box": {
    "flex": 1,
    "fontSize": "14",
    "backgroundColor": "#ffffff"
  },
  "uni-swipe_button-group": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "zIndex": 0,
    "flexDirection": "row"
  },
  "uni-swipe_button": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20"
  },
  "uni-swipe_button-text": {
    "fontSize": "14"
  },
  "@TRANSITION": {
    "ani": {
      "property": "transform",
      "duration": 300,
      "timingFunction": "cubic-bezier(0.165,0.84,0.44,1)"
    }
  },
  "ani": {
    "transitionProperty": "transform",
    "transitionDuration": 300,
    "transitionTimingFunction": "cubic-bezier(0.165,0.84,0.44,1)"
  }
}

/***/ }),

/***/ 370:
/*!**************************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/pages/extUI/swipe-action/swipe-action.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swipe_action_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./swipe-action.nvue?vue&type=script&lang=js&mpType=page */ 371);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swipe_action_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swipe_action_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swipe_action_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swipe_action_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swipe_action_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 371:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/pages/extUI/swipe-action/swipe-action.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

































var _uniSection = _interopRequireDefault(__webpack_require__(/*! @/components/uni-section/uni-section.vue */ 177));
var _uniSwipeAction = _interopRequireDefault(__webpack_require__(/*! @/components/uni-swipe-action/uni-swipe-action.vue */ 357));
var _uniSwipeActionItem = _interopRequireDefault(__webpack_require__(/*! @/components/uni-swipe-action-item/uni-swipe-action-item.vue */ 362));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default = { components: { uniSection: _uniSection.default, uniSwipeAction: _uniSwipeAction.default, uniSwipeActionItem: _uniSwipeActionItem.default }, data: function data() {return { isOpened: false, options1: [{ text: '取消置顶' }], options2: [{ text: '取消', style: { backgroundColor: '#007aff' } }, { text: '确认', style: { backgroundColor: '#dd524d' } }], swipeList: [{ options: [{ text: '添加', style: { backgroundColor: 'rgb(255,58,49)' } }], id: 0, content: 'item1' }, {
        id: 1,
        options: [{
          text: '置顶' },
        {
          text: '删除',
          style: {
            backgroundColor: 'rgb(255,58,49)' } }],


        content: 'item2' },
      {
        id: 2,
        options: [{
          text: '置顶' },
        {
          text: '标记为已读',
          style: {
            backgroundColor: 'rgb(254,156,1)' } },

        {
          text: '删除',
          style: {
            backgroundColor: 'rgb(255,58,49)' } }],


        content: 'item3' }]

      // options3: [{
      // 	text: '置顶'
      // }, {
      // 	text: '标记为已读',
      // 	style: {
      // 		backgroundColor: 'rgb(254,156,1)'
      // 	}
      // }, {
      // 	text: '删除',
      // 	style: {
      // 		backgroundColor: 'rgb(255,58,49)'
      // 	}
      // }]
    };
  },
  onReady: function onReady() {var _this = this;
    this.$nextTick(function () {
      _this.isOpened = true;
    });
  },
  methods: {
    bindClick: function bindClick(e) {
      uni.showToast({
        title: "\u70B9\u51FB\u4E86".concat(e.content.text, "\u6309\u94AE"),
        icon: 'none' });

    },
    setOpened: function setOpened() {
      this.isOpened = !this.isOpened;
    },
    change: function change(e) {
      this.isOpened = e;
      __f__("log", '返回：', e, " at pages/extUI/swipe-action/swipe-action.nvue:130");
    },
    swipeChange: function swipeChange(e) {
      __f__("log", '返回：', e, " at pages/extUI/swipe-action/swipe-action.nvue:133");
    },
    swipeClick: function swipeClick(e, index) {var _this2 = this;var

      content =
      e.content;
      if (content.text === '删除') {
        uni.showModal({
          title: '提示',
          content: '是否删除',
          success: function success(res) {
            if (res.confirm) {
              _this2.swipeList.splice(index, 1);
            } else if (res.cancel) {
              __f__("log", '用户点击取消', " at pages/extUI/swipe-action/swipe-action.nvue:147");
            }
          } });

      } else if (content.text === '添加') {
        if (this.swipeList.length < 10) {
          this.swipeList.push({
            id: new Date().getTime(),
            options: [{
              text: '置顶' },
            {
              text: '标记为已读',
              style: {
                backgroundColor: 'rgb(254,156,1)' } },

            {
              text: '删除',
              style: {
                backgroundColor: 'rgb(255,58,49)' } }],


            content: '新增' });

          uni.showToast({
            title: "\u6DFB\u52A0\u4E86\u4E00\u6761\u6570\u636E",
            icon: 'none' });

        } else {
          uni.showToast({
            title: "\u6700\u591A\u6DFB\u52A0\u5341\u6761\u6570\u636E",
            icon: 'none' });

        }
      } else {
        uni.showToast({
          title: "\u70B9\u51FB\u4E86".concat(e.content.text, "\u6309\u94AE"),
          icon: 'none' });

      }

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 47)["default"]))

/***/ }),

/***/ 372:
/*!**********************************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/pages/extUI/swipe-action/swipe-action.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swipe_action_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./swipe-action.nvue?vue&type=style&index=0&lang=css&mpType=page */ 373);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swipe_action_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swipe_action_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swipe_action_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swipe_action_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_swipe_action_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 373:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/pages/extUI/swipe-action/swipe-action.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "paddingTop": "10",
    "paddingRight": 0,
    "paddingBottom": "10",
    "paddingLeft": 0,
    "backgroundColor": "#ffffff",
    "justifyContent": "center"
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
  "cont": {
    "flex": 1,
    "height": "45",
    "lineHeight": "45",
    "paddingTop": 0,
    "paddingRight": "15",
    "paddingBottom": 0,
    "paddingLeft": "15",
    "position": "relative",
    "backgroundColor": "#ffffff",
    "fontSize": "15",
    "borderBottomColor": "#F5F5F5",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid"
  },
  "button": {
    "borderColor": "#e5e5e5",
    "borderStyle": "solid",
    "borderWidth": "1",
    "paddingTop": "4",
    "paddingRight": "8",
    "paddingBottom": "4",
    "paddingLeft": "8",
    "borderRadius": "4"
  },
  "button-text": {
    "fontSize": "15"
  }
}

/***/ }),

/***/ 47:
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
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
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9tYWluLmpzP2Y3YzEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzP2YwYzUiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlPzlmMjIiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlP2ZhNTYiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlP2EyMDciLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlPzU2YzIiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlIiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZT85YjNhIiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZT8xZjNlIiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9BcHAudnVlP2VmMzUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdW5pLWFwcC1wbHVzLW52dWUvZGlzdC9yZXF1aXJlLW5hdGl2ZS1wbHVnaW4uanM/ZWZlNSIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvQXBwLnZ1ZT85OTQ1Iiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9tYWluLmpzPzAyN2EiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL3BhZ2VzL2V4dFVJL3N3aXBlLWFjdGlvbi9zd2lwZS1hY3Rpb24ubnZ1ZT9iN2Y4Iiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9wYWdlcy9leHRVSS9zd2lwZS1hY3Rpb24vc3dpcGUtYWN0aW9uLm52dWU/ZmQ1MSIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvcGFnZXMvZXh0VUkvc3dpcGUtYWN0aW9uL3N3aXBlLWFjdGlvbi5udnVlPzZkMjMiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXN3aXBlLWFjdGlvbi91bmktc3dpcGUtYWN0aW9uLnZ1ZT9iMTUxIiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9jb21wb25lbnRzL3VuaS1zd2lwZS1hY3Rpb24vdW5pLXN3aXBlLWFjdGlvbi52dWU/NzBjYiIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvY29tcG9uZW50cy91bmktc3dpcGUtYWN0aW9uL3VuaS1zd2lwZS1hY3Rpb24udnVlPzNkYzYiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXN3aXBlLWFjdGlvbi91bmktc3dpcGUtYWN0aW9uLnZ1ZT9jZTUyIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3VuaS1zd2lwZS1hY3Rpb24vdW5pLXN3aXBlLWFjdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXN3aXBlLWFjdGlvbi1pdGVtL3VuaS1zd2lwZS1hY3Rpb24taXRlbS52dWU/YTljZCIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvY29tcG9uZW50cy91bmktc3dpcGUtYWN0aW9uLWl0ZW0vdW5pLXN3aXBlLWFjdGlvbi1pdGVtLnZ1ZT8xZTE5Iiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9jb21wb25lbnRzL3VuaS1zd2lwZS1hY3Rpb24taXRlbS91bmktc3dpcGUtYWN0aW9uLWl0ZW0udnVlPzcxM2YiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXN3aXBlLWFjdGlvbi1pdGVtL3VuaS1zd2lwZS1hY3Rpb24taXRlbS52dWU/MmVkNSIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktc3dpcGUtYWN0aW9uLWl0ZW0vdW5pLXN3aXBlLWFjdGlvbi1pdGVtLnZ1ZSIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktc3dpcGUtYWN0aW9uLWl0ZW0vYmluZGluZ3guanMiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXN3aXBlLWFjdGlvbi1pdGVtL3VuaS1zd2lwZS1hY3Rpb24taXRlbS52dWU/NDg2MCIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvY29tcG9uZW50cy91bmktc3dpcGUtYWN0aW9uLWl0ZW0vdW5pLXN3aXBlLWFjdGlvbi1pdGVtLnZ1ZT80YjdhIiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9wYWdlcy9leHRVSS9zd2lwZS1hY3Rpb24vc3dpcGUtYWN0aW9uLm52dWU/MGFlYyIsInVuaS1hcHA6Ly8vcGFnZXMvZXh0VUkvc3dpcGUtYWN0aW9uL3N3aXBlLWFjdGlvbi5udnVlIiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9wYWdlcy9leHRVSS9zd2lwZS1hY3Rpb24vc3dpcGUtYWN0aW9uLm52dWU/MzU4ZiIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvcGFnZXMvZXh0VUkvc3dpcGUtYWN0aW9uL3N3aXBlLWFjdGlvbi5udnVlP2Y1MzgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvbGliL2Zvcm1hdC1sb2cuanM/MGRlOSJdLCJuYW1lcyI6WyJyZXF1aXJlTmF0aXZlUGx1Z2luIiwibmFtZSIsIndlZXgiLCJyZXF1aXJlTW9kdWxlIiwiQmluZGluZ1giLCJ1bmkiLCJkb20iLCJhbmltYXRpb24iLCJkYXRhIiwicmlnaHQiLCJidXR0b24iLCJwcmV2ZW50R2VzdHVyZSIsIndhdGNoIiwic2hvdyIsIm5ld1ZhbCIsInBvc2l0aW9uIiwiSlNPTiIsInN0cmluZ2lmeSIsImF1dG9DbG9zZSIsImlzSW5BbmltYXRpb24iLCJvcGVuIiwiY2xvc2UiLCJjcmVhdGVkIiwic3dpcGVhY3Rpb24iLCJjaGlsZHJlbiIsInVuZGVmaW5lZCIsInB1c2giLCJtb3VudGVkIiwiYm94U2VsZWN0b3IiLCJnZXRFbCIsIiRyZWZzIiwic2VsZWN0b3IiLCJidXR0b25TZWxlY3RvciIsIngiLCJzZXRUaW1lb3V0IiwiZ2V0U2VsZWN0b3JRdWVyeSIsImJlZm9yZURlc3Ryb3kiLCJ0aW1pbmciLCJ1bmJpbmQiLCJ0b2tlbiIsImV2ZW50VHlwZSIsImV2ZW50cGFuIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsInNwbGljZSIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiJGVtaXQiLCJjb250ZW50IiwidG91Y2hzdGFydCIsImUiLCJzdG9wIiwiY2xvc2VPdGhlciIsImVuZFdpZHRoIiwiYm94U3RlcCIsInBhZ2VYIiwicHJvcHMiLCJlbGVtZW50IiwicHJvcGVydHkiLCJleHByZXNzaW9uIiwibGVmdCIsImkiLCJvcHRpb25zIiwibGVuZ3RoIiwiYnV0dG9uU2VsZWN0b3JzIiwid2lkdGgiLCJtb3ZlTWl4Iiwic3RlcCIsIm1vdmVYIiwicGFnZUJ1dHRvblgiLCJfYmluZCIsInN0YXRlIiwiZGVsdGFYIiwiYmluZFRpbWluZyIsInRvdWNoZW5kIiwiJG5leHRUaWNrIiwiaXNvcGVuIiwiaXNEcmFnIiwibW92ZSIsInZhbHVlIiwidHlwZSIsInRpbWUiLCJleGl0IiwidHJhbnNsYXRlX3hfZXhwcmVzc2lvbiIsImJpbmQiLCJleGl0RXhwcmVzc2lvbiIsImFuY2hvciIsImZuIiwiZWwiLCJyZWYiLCJnZXRDb21wb25lbnRSZWN0Iiwic2l6ZSIsInR5cG9mIiwidiIsInMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJzdWJzdHJpbmciLCJpc0RlYnVnTW9kZSIsIl9fY2hhbm5lbElkX18iLCJsb2ciLCJfbGVuIiwiYXJndW1lbnRzIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNvbnNvbGUiLCJhcHBseSIsImZvcm1hdExvZyIsInNoaWZ0IiwicG9wIiwicmVwbGFjZSIsIm1zZ3MiLCJtYXAiLCJ0b0xvd2VyQ2FzZSIsInZUeXBlIiwidG9VcHBlckNhc2UiLCJTdHJpbmciLCJtc2ciLCJsYXN0TXNnIiwiam9pbiIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSwyREFBMkQsbUJBQU8sQ0FBQyxrREFBMkM7Ozs7Ozs7Ozs7Ozs7QUNEOUc7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9JO0FBQ3BJO0FBQytEO0FBQ0w7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsbUJBQU8sQ0FBQyxxRkFBNEU7QUFDaEksYUFBYTtBQUNiLGlEQUFpRCxtQkFBTyxDQUFDLHFGQUE0RTtBQUNySTs7QUFFQTs7QUFFQTtBQUNxSztBQUNySyxnQkFBZ0IsK0tBQVU7QUFDMUIsRUFBRSxpRkFBTTtBQUNSLEVBQUUsa0dBQU07QUFDUixFQUFFLDJHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3JDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUNBQXVDLGFBQWEsRUFBRTtBQUMzRDtBQUNBO0FBQ0Esc0JBQXNCLHFDQUFxQztBQUMzRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGtCQUFrQix3Q0FBd0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0Q0FBNEM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUF5YSxDQUFnQixxZEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYzdiOzs7Ozs7Ozs7O0FBVUE7QUFDQSxrQkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBREE7O0FBS0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBTEE7O0FBU0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBVEEsRUFGQTs7O0FBZ0JBLE1BaEJBLGtCQWdCQTtBQUNBO0FBQ0EsR0FsQkE7QUFtQkE7QUFDQSxTQURBLGlCQUNBLE1BREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEEsRUFuQkE7O0FBMEJBO0FBQ0EsV0FEQSxxQkFDQTtBQUNBO0FBQ0EsS0FIQSxFQTFCQSxFOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7QUFBb3ZCLENBQWdCLHV3QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQXh3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQUE7QUFBQTtBQUFtdEIsQ0FBZ0Isc3VCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O29HQ0F4dEIsU0FBU0EsbUJBQVQsQ0FBNkJDLElBQTdCLEVBQW1DO0FBQ2hELFNBQU9DLElBQUksQ0FBQ0MsYUFBTCxDQUFtQkYsSUFBbkIsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7O0FDRkQsbUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0VBLFFBQThCO0FBQzlCLFFBQWtGO0FBQ2xGLFFBQVEsK0ZBQUc7QUFDWCxRQUFRLCtGQUFHO0FBQ1gsUUFBUSwrRkFBRztBQUNYLGdCQUFnQiwrRkFBRzs7Ozs7Ozs7Ozs7OztBQ1BuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFJO0FBQ3JJO0FBQzRFO0FBQ0w7QUFDdkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsbUJBQU8sQ0FBQywwRUFBaUU7QUFDckgsYUFBYTtBQUNiLGlEQUFpRCxtQkFBTyxDQUFDLDBFQUFpRTtBQUMxSDs7QUFFQTs7QUFFQTtBQUNxSztBQUNySyxnQkFBZ0IsK0tBQVU7QUFDMUIsRUFBRSw4RkFBTTtBQUNSLEVBQUUsbUdBQU07QUFDUixFQUFFLDRHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3JDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxtREFBMEM7QUFDaEUsa0JBQWtCLG1CQUFPLENBQUMsNkRBQW9EO0FBQzlFO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsdUVBQThEO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsOEJBQThCLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdCQUF3QjtBQUNsRCx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0EsZ0NBQWdDLHdCQUF3QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixTQUFTLDhCQUE4QixFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxTQUFTLGlCQUFpQixFQUFFO0FBQ3ZFLDhCQUE4Qix3QkFBd0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYLHNCQUFzQixnQ0FBZ0M7QUFDdEQ7QUFDQTtBQUNBLGVBQWUsK0JBQStCLHVCQUF1QixFQUFFO0FBQ3ZFO0FBQ0EsOEJBQThCLCtCQUErQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBLGdDQUFnQyx3QkFBd0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsd0JBQXdCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGdDQUFnQyx3QkFBd0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5STtBQUN6STtBQUNvRTtBQUNMO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNxSztBQUNySyxnQkFBZ0IsK0tBQVU7QUFDMUIsRUFBRSxzRkFBTTtBQUNSLEVBQUUsdUdBQU07QUFDUixFQUFFLGdIQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ2hDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUE4YSxDQUFnQiwwZEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNPbGM7Ozs7O0FBS0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxHQUhBO0FBSUEsU0FKQSxxQkFJQTtBQUNBO0FBQ0EsdUJBREE7O0FBR0EsR0FSQTtBQVNBLFNBVEEscUJBU0E7QUFDQTtBQUNBLEdBWEE7QUFZQTtBQUNBLGNBREEsc0JBQ0EsRUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTs7Ozs7Ozs7O0FBU0E7O0FBRUE7O0FBRUEsT0F0QkE7QUF1QkEsS0ExQkEsRUFaQSxFOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThJO0FBQzlJO0FBQ3lFO0FBQ0w7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsbUJBQU8sQ0FBQywrRkFBc0Y7QUFDMUksYUFBYTtBQUNiLGlEQUFpRCxtQkFBTyxDQUFDLCtGQUFzRjtBQUMvSTs7QUFFQTs7QUFFQTtBQUNxSztBQUNySyxnQkFBZ0IsK0tBQVU7QUFDMUIsRUFBRSwyRkFBTTtBQUNSLEVBQUUsNEdBQU07QUFDUixFQUFFLHFIQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdIQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3JDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlDQUFpQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQUE7QUFBQTtBQUFBO0FBQW1iLENBQWdCLCtkQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNnRnZjLHNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7O21CQVlBLEVBTUEsMkJBTkEsRUFpQkEsU0FDQTs7OERBR0EsV0FDQSxXQURBLEVBRUEsT0FGQSxzQkFFQSxDQUNBLFVBQ0EsQ0FKQSxFQUpBLEVBVUE7O3NJQUdBLFlBQ0EsYUFEQSxFQUVBLGNBRkEsRUFiQSxFQWlCQTs7c0xBR0EsUUFDQSxhQURBLEVBRUEsY0FGQSxFQXBCQSxFQXdCQTs7a09BR0EsYUFDQSxhQURBLEVBRUEsYUFGQSxFQTNCQSxFQWpCQSxFQWlEQSx1QkFqREEsRTs7Ozs7Ozs7Ozs7OzZLQ3ZHQSxJQUFNRyxRQUFRLEdBQUdDLDhDQUFBLENBQXdCLFVBQXhCLENBQWpCO0FBQ0EsSUFBTUMsR0FBRyxHQUFHRCw4Q0FBQSxDQUF3QixLQUF4QixDQUFaO0FBQ0EsSUFBTUUsU0FBUyxHQUFHRiw4Q0FBQSxDQUF3QixXQUF4QixDQUFsQixDOztBQUVlO0FBQ2RHLE1BRGMsa0JBQ1A7QUFDTixXQUFPO0FBQ05DLFdBQUssRUFBRSxDQUREO0FBRU5DLFlBQU0sRUFBRSxFQUZGO0FBR05DLG9CQUFjLEVBQUUsS0FIVixFQUFQOztBQUtBLEdBUGE7O0FBU2RDLE9BQUssRUFBRTtBQUNOQyxRQURNLGdCQUNEQyxNQURDLEVBQ087QUFDWixVQUFJLENBQUMsS0FBS0MsUUFBTixJQUFrQkMsSUFBSSxDQUFDQyxTQUFMLENBQWUsS0FBS0YsUUFBcEIsTUFBa0MsSUFBeEQsRUFBOEQ7QUFDOUQsVUFBSSxLQUFLRyxTQUFULEVBQW9CO0FBQ3BCLFVBQUksS0FBS0MsYUFBVCxFQUF3QjtBQUN4QixVQUFJTCxNQUFKLEVBQVk7QUFDWCxhQUFLTSxJQUFMO0FBQ0EsT0FGRCxNQUVPO0FBQ04sYUFBS0MsS0FBTDtBQUNBO0FBQ0QsS0FWSyxFQVRPOztBQXFCZEMsU0FyQmMscUJBcUJKO0FBQ1QsUUFBSSxLQUFLQyxXQUFMLENBQWlCQyxRQUFqQixLQUE4QkMsU0FBbEMsRUFBNkM7QUFDNUMsV0FBS0YsV0FBTCxDQUFpQkMsUUFBakIsQ0FBMEJFLElBQTFCLENBQStCLElBQS9CO0FBQ0E7QUFDRCxHQXpCYTtBQTBCZEMsU0ExQmMscUJBMEJKO0FBQ1QsU0FBS0MsV0FBTCxHQUFtQixLQUFLQyxLQUFMLENBQVcsS0FBS0MsS0FBTCxDQUFXLG1CQUFYLENBQVgsQ0FBbkI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQUtGLEtBQUwsQ0FBVyxLQUFLQyxLQUFMLENBQVcsdUJBQVgsQ0FBWCxDQUFoQjtBQUNBLFNBQUtFLGNBQUwsR0FBc0IsS0FBS0gsS0FBTCxDQUFXLEtBQUtDLEtBQUwsQ0FBVyxzQkFBWCxDQUFYLENBQXRCO0FBQ0EsU0FBS2YsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtrQixDQUFMLEdBQVMsQ0FBVDtBQUNBQyxjQUFVLENBQUMsWUFBTTtBQUNoQixXQUFJLENBQUNDLGdCQUFMO0FBQ0EsS0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdBLEdBbkNhO0FBb0NkQyxlQXBDYywyQkFvQ0U7QUFDZixRQUFJLEtBQUtDLE1BQVQsRUFBaUI7QUFDaEJqQyxjQUFRLENBQUNrQyxNQUFULENBQWdCO0FBQ2ZDLGFBQUssRUFBRSxLQUFLRixNQUFMLENBQVlFLEtBREo7QUFFZkMsaUJBQVMsRUFBRSxRQUZJLEVBQWhCOztBQUlBO0FBQ0QsUUFBSSxLQUFLQyxRQUFULEVBQW1CO0FBQ2xCckMsY0FBUSxDQUFDa0MsTUFBVCxDQUFnQjtBQUNmQyxhQUFLLEVBQUUsS0FBS0UsUUFBTCxDQUFjRixLQUROO0FBRWZDLGlCQUFTLEVBQUUsS0FGSSxFQUFoQjs7QUFJQTtBQUNELFNBQUtqQixXQUFMLENBQWlCQyxRQUFqQixDQUEwQmtCLE9BQTFCLENBQWtDLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNsRCxVQUFJRCxJQUFJLEtBQUssTUFBYixFQUFtQjtBQUNsQixjQUFJLENBQUNwQixXQUFMLENBQWlCQyxRQUFqQixDQUEwQnFCLE1BQTFCLENBQWlDRCxLQUFqQyxFQUF3QyxDQUF4QztBQUNBO0FBQ0QsS0FKRDtBQUtBLEdBdERhO0FBdURkRSxTQUFPLEVBQUU7QUFDUkMsV0FEUSxtQkFDQUgsS0FEQSxFQUNPRCxJQURQLEVBQ2E7QUFDcEIsV0FBS0ssS0FBTCxDQUFXLE9BQVgsRUFBb0I7QUFDbkJDLGVBQU8sRUFBRU4sSUFEVTtBQUVuQkMsYUFBSyxFQUFMQSxLQUZtQixFQUFwQjs7QUFJQSxLQU5PO0FBT1JNLGNBUFEsc0JBT0dDLENBUEgsRUFPTTtBQUNiLFVBQUksS0FBS2hDLGFBQVQsRUFBd0I7QUFDeEIsVUFBSSxLQUFLaUMsSUFBVCxFQUFlO0FBQ2YsV0FBS0EsSUFBTCxHQUFZLElBQVo7QUFDQSxVQUFJLEtBQUtsQyxTQUFULEVBQW9CO0FBQ25CLGFBQUtLLFdBQUwsQ0FBaUI4QixVQUFqQixDQUE0QixJQUE1QjtBQUNBO0FBQ0QsVUFBSUMsUUFBUSxHQUFHLEtBQUs3QyxLQUFwQjtBQUNBLFVBQUk4QyxPQUFPLGdCQUFTLEtBQUt0QixDQUFkLE1BQVg7QUFDQSxVQUFJdUIsS0FBSyxhQUFNRCxPQUFOLGVBQWtCLENBQUNELFFBQW5CLGlCQUFrQ0MsT0FBbEMsa0JBQWlEQSxPQUFqRCxpQkFBK0QsS0FBS3RCLENBQXBFLG1CQUE4RSxDQUFDcUIsUUFBL0UsUUFBVDs7QUFFQSxVQUFJRyxLQUFLLEdBQUcsQ0FBQztBQUNaQyxlQUFPLEVBQUUsS0FBSzNCLFFBREY7QUFFWjRCLGdCQUFRLEVBQUUsc0JBRkU7QUFHWkMsa0JBQVUsRUFBRUosS0FIQSxFQUFELENBQVo7OztBQU1BLFVBQUlLLElBQUksR0FBRyxDQUFYO0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtDLE9BQUwsQ0FBYUMsTUFBakMsRUFBeUNGLENBQUMsRUFBMUMsRUFBOEM7QUFDN0MsWUFBSUcsZUFBZSxHQUFHLEtBQUtwQyxLQUFMLENBQVcsS0FBS0MsS0FBTCxDQUFXLGFBQVgsRUFBMEJnQyxDQUExQixDQUFYLENBQXRCO0FBQ0EsWUFBSSxLQUFLcEQsTUFBTCxDQUFZc0QsTUFBWixLQUF1QixDQUF2QixJQUE0QixDQUFDLEtBQUt0RCxNQUFMLENBQVlvRCxDQUFaLENBQTdCLElBQStDLENBQUMsS0FBS3BELE1BQUwsQ0FBWW9ELENBQVosRUFBZUksS0FBbkUsRUFBMEU7QUFDMUUsWUFBSUMsT0FBTyxHQUFHYixRQUFRLEdBQUdPLElBQXpCO0FBQ0FBLFlBQUksSUFBSSxLQUFLbkQsTUFBTCxDQUFZb0QsQ0FBWixFQUFlSSxLQUF2QjtBQUNBLFlBQUlFLElBQUksY0FBTyxLQUFLbkMsQ0FBWixpQkFBb0JxQixRQUFwQixDQUFSO0FBQ0EsWUFBSWUsS0FBSyxjQUFPRCxJQUFQLGlCQUFrQkQsT0FBbEIsQ0FBVDtBQUNBLFlBQUlHLFdBQVcsYUFBTUQsS0FBTixtQkFBb0IsS0FBS3BDLENBQXpCLGdCQUFnQyxDQUFDcUIsUUFBakMsZUFBOENlLEtBQTlDLGNBQXVELENBQUNGLE9BQXhELENBQWY7QUFDQVYsYUFBSyxDQUFDL0IsSUFBTixDQUFXO0FBQ1ZnQyxpQkFBTyxFQUFFTyxlQURDO0FBRVZOLGtCQUFRLEVBQUUsc0JBRkE7QUFHVkMsb0JBQVUsRUFBRVUsV0FIRixFQUFYOztBQUtBOztBQUVELFdBQUs3QixRQUFMLEdBQWdCLEtBQUs4QixLQUFMLENBQVcsS0FBSzNDLFdBQWhCLEVBQTZCNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsVUFBQ04sQ0FBRCxFQUFPO0FBQ2pFLFlBQUlBLENBQUMsQ0FBQ3FCLEtBQUYsS0FBWSxLQUFoQixFQUF1QjtBQUN0QixnQkFBSSxDQUFDdkMsQ0FBTCxHQUFTa0IsQ0FBQyxDQUFDc0IsTUFBRixHQUFXLE1BQUksQ0FBQ3hDLENBQXpCO0FBQ0EsY0FBSSxNQUFJLENBQUNBLENBQUwsR0FBUyxDQUFDcUIsUUFBZCxFQUF3QjtBQUN2QixrQkFBSSxDQUFDckIsQ0FBTCxHQUFTLENBQUNxQixRQUFWO0FBQ0E7QUFDRCxjQUFJLE1BQUksQ0FBQ3JCLENBQUwsR0FBUyxDQUFiLEVBQWdCO0FBQ2Ysa0JBQUksQ0FBQ0EsQ0FBTCxHQUFTLENBQVQ7QUFDQTtBQUNELGdCQUFJLENBQUNtQixJQUFMLEdBQVksS0FBWjtBQUNBLGdCQUFJLENBQUNzQixVQUFMO0FBQ0E7QUFDRCxPQVplLENBQWhCO0FBYUEsS0FyRE87QUFzRFJDLFlBdERRLG9CQXNEQ3hCLENBdERELEVBc0RJO0FBQ1gsV0FBS3lCLFNBQUwsQ0FBZSxZQUFNO0FBQ3BCLFlBQUksTUFBSSxDQUFDQyxNQUFMLElBQWUsQ0FBQyxNQUFJLENBQUNDLE1BQXJCLElBQStCLENBQUMsTUFBSSxDQUFDM0QsYUFBekMsRUFBd0Q7QUFDdkQsZ0JBQUksQ0FBQ0UsS0FBTDtBQUNBO0FBQ0QsT0FKRDtBQUtBLEtBNURPO0FBNkRScUQsY0E3RFEsd0JBNkRLO0FBQ1osVUFBSSxLQUFLRyxNQUFULEVBQWlCO0FBQ2hCLGFBQUtFLElBQUwsQ0FBVSxLQUFLOUMsQ0FBZixFQUFrQixDQUFDLEtBQUt4QixLQUF4QjtBQUNBLE9BRkQsTUFFTztBQUNOLGFBQUtzRSxJQUFMLENBQVUsS0FBSzlDLENBQWYsRUFBa0IsQ0FBQyxFQUFuQjtBQUNBO0FBQ0QsS0FuRU87QUFvRVI4QyxRQXBFUSxnQkFvRUhsQixJQXBFRyxFQW9FR21CLEtBcEVILEVBb0VVO0FBQ2pCLFVBQUluQixJQUFJLElBQUltQixLQUFaLEVBQW1CO0FBQ2xCLGFBQUszRCxLQUFMO0FBQ0EsT0FGRCxNQUVPO0FBQ04sYUFBS0QsSUFBTDtBQUNBO0FBQ0QsS0ExRU87QUEyRVI7OztBQUdBQSxRQTlFUSxrQkE4RUQ7QUFDTixXQUFLYixTQUFMLENBQWUsSUFBZjtBQUNBLEtBaEZPO0FBaUZSOzs7QUFHQWMsU0FwRlEsbUJBb0ZBO0FBQ1AsV0FBS2QsU0FBTCxDQUFlLEtBQWY7QUFDQSxLQXRGTztBQXVGUjs7OztBQUlBQSxhQTNGUSxxQkEyRkUwRSxJQTNGRixFQTJGUTtBQUNmLFdBQUtILE1BQUwsR0FBYyxJQUFkO0FBQ0EsVUFBSXhCLFFBQVEsR0FBRyxLQUFLN0MsS0FBcEI7QUFDQSxVQUFJeUUsSUFBSSxHQUFHLEdBQVg7QUFDQSxXQUFLL0QsYUFBTCxHQUFxQixJQUFyQjs7QUFFQSxVQUFJZ0UsSUFBSSxlQUFRRCxJQUFSLENBQVI7QUFDQSxVQUFJRSxzQkFBc0IsMkJBQW9CLEtBQUtuRCxDQUF6QixjQUE4QmdELElBQUksR0FBRSxDQUFDM0IsUUFBRCxHQUFVLEtBQUtyQixDQUFqQixHQUFxQixDQUFDLEtBQUtBLENBQTdELGNBQW1FaUQsSUFBbkUsTUFBMUI7QUFDQSxVQUFJekIsS0FBSyxHQUFHLENBQUM7QUFDWkMsZUFBTyxFQUFFLEtBQUszQixRQURGO0FBRVo0QixnQkFBUSxFQUFFLHNCQUZFO0FBR1pDLGtCQUFVLEVBQUV3QixzQkFIQSxFQUFELENBQVo7OztBQU1BLFVBQUl2QixJQUFJLEdBQUcsQ0FBWDtBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLQyxPQUFMLENBQWFDLE1BQWpDLEVBQXlDRixDQUFDLEVBQTFDLEVBQThDO0FBQzdDLFlBQUlHLGVBQWUsR0FBRyxLQUFLcEMsS0FBTCxDQUFXLEtBQUtDLEtBQUwsQ0FBVyxhQUFYLEVBQTBCZ0MsQ0FBMUIsQ0FBWCxDQUF0QjtBQUNBLFlBQUksS0FBS3BELE1BQUwsQ0FBWXNELE1BQVosS0FBdUIsQ0FBdkIsSUFBNEIsQ0FBQyxLQUFLdEQsTUFBTCxDQUFZb0QsQ0FBWixDQUE3QixJQUErQyxDQUFDLEtBQUtwRCxNQUFMLENBQVlvRCxDQUFaLEVBQWVJLEtBQW5FLEVBQTBFO0FBQzFFLFlBQUlDLE9BQU8sR0FBR2IsUUFBUSxHQUFHTyxJQUF6QjtBQUNBQSxZQUFJLElBQUksS0FBS25ELE1BQUwsQ0FBWW9ELENBQVosRUFBZUksS0FBdkI7QUFDQSxZQUFJRSxJQUFJLGFBQU0sS0FBS25DLENBQVgsY0FBZ0JxQixRQUFoQixDQUFSO0FBQ0EsWUFBSWUsS0FBSyxjQUFPRCxJQUFQLGlCQUFrQkQsT0FBbEIsQ0FBVDtBQUNBLFlBQUlHLFdBQVcsMkJBQW9CRCxLQUFwQixjQUE2QlksSUFBSSxHQUFHLENBQUNkLE9BQUQsR0FBVyxHQUFYLEdBQWlCRSxLQUFwQixHQUEyQixJQUFJLEdBQUosR0FBVUEsS0FBdEUsY0FBK0VhLElBQS9FLE1BQWY7QUFDQXpCLGFBQUssQ0FBQy9CLElBQU4sQ0FBVztBQUNWZ0MsaUJBQU8sRUFBRU8sZUFEQztBQUVWTixrQkFBUSxFQUFFLHNCQUZBO0FBR1ZDLG9CQUFVLEVBQUVVLFdBSEYsRUFBWDs7QUFLQTs7QUFFRCxXQUFLakMsTUFBTCxHQUFjakMsUUFBUSxDQUFDaUYsSUFBVCxDQUFjO0FBQzNCN0MsaUJBQVMsRUFBRSxRQURnQjtBQUUzQjhDLHNCQUFjLEVBQUVILElBRlc7QUFHM0IxQixhQUFLLEVBQUVBLEtBSG9CLEVBQWQ7QUFJWCxnQkFBQ04sQ0FBRCxFQUFPO0FBQ1QsWUFBSUEsQ0FBQyxDQUFDcUIsS0FBRixLQUFZLEtBQVosSUFBcUJyQixDQUFDLENBQUNxQixLQUFGLEtBQVksTUFBckMsRUFBNkM7QUFDNUMsZ0JBQUksQ0FBQ3ZDLENBQUwsR0FBU2dELElBQUksR0FBRyxDQUFDM0IsUUFBSixHQUFlLENBQTVCO0FBQ0EsZ0JBQUksQ0FBQ25DLGFBQUwsR0FBcUIsS0FBckI7O0FBRUEsZ0JBQUksQ0FBQzBELE1BQUwsR0FBYyxNQUFJLENBQUNBLE1BQUwsSUFBZSxLQUE3QjtBQUNBLGNBQUksTUFBSSxDQUFDQSxNQUFMLEtBQWdCSSxJQUFwQixFQUEwQjtBQUN6QixrQkFBSSxDQUFDakMsS0FBTCxDQUFXLFFBQVgsRUFBcUJpQyxJQUFyQjtBQUNBO0FBQ0QsZ0JBQUksQ0FBQ0osTUFBTCxHQUFjSSxJQUFkO0FBQ0EsZ0JBQUksQ0FBQ0gsTUFBTCxHQUFjLEtBQWQ7QUFDQTtBQUNELE9BaEJhLENBQWQ7QUFpQkEsS0ExSU87QUEySVI7Ozs7OztBQU1BUCxTQWpKUSxpQkFpSkZnQixNQWpKRSxFQWlKTTlCLEtBakpOLEVBaUphakIsU0FqSmIsRUFpSndCZ0QsRUFqSnhCLEVBaUo0QjtBQUNuQyxhQUFPcEYsUUFBUSxDQUFDaUYsSUFBVCxDQUFjO0FBQ3BCRSxjQUFNLEVBQU5BLE1BRG9CO0FBRXBCL0MsaUJBQVMsRUFBVEEsU0FGb0I7QUFHcEJpQixhQUFLLEVBQUxBLEtBSG9CLEVBQWQ7QUFJSixnQkFBQ04sQ0FBRCxFQUFPO0FBQ1QsZUFBT3FDLEVBQVAsS0FBZSxVQUFmLElBQTZCQSxFQUFFLENBQUNyQyxDQUFELENBQS9CO0FBQ0EsT0FOTSxDQUFQO0FBT0EsS0F6Sk87QUEwSlI7Ozs7QUFJQXRCLFNBOUpRLGlCQThKRjRELEVBOUpFLEVBOEpFO0FBQ1QsYUFBT0EsRUFBRSxDQUFDQyxHQUFWO0FBQ0EsS0FoS087QUFpS1I7OztBQUdBdkQsb0JBcEtRLDhCQW9LVztBQUNsQjdCLFNBQUcsQ0FBQ3FGLGdCQUFKLENBQXFCLEtBQUs3RCxLQUFMLENBQVcsdUJBQVgsQ0FBckIsRUFBMEQsVUFBQ3RCLElBQUQsRUFBVTtBQUNuRSxZQUFJLE1BQUksQ0FBQ08sUUFBTCxDQUFja0MsT0FBbEIsRUFBMkI7QUFDM0IsY0FBSSxDQUFDbEMsUUFBTCxDQUFja0MsT0FBZCxHQUF3QnpDLElBQUksQ0FBQ29GLElBQTdCO0FBQ0EsT0FIRDtBQUlBLFdBQUssSUFBSTlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0MsT0FBTCxDQUFhQyxNQUFqQyxFQUF5Q0YsQ0FBQyxFQUExQyxFQUE4QztBQUM3Q3hELFdBQUcsQ0FBQ3FGLGdCQUFKLENBQXFCLEtBQUs3RCxLQUFMLENBQVcsYUFBWCxFQUEwQmdDLENBQTFCLENBQXJCLEVBQW1ELFVBQUN0RCxJQUFELEVBQVU7QUFDNUQsY0FBSSxDQUFDLE1BQUksQ0FBQ0UsTUFBVixFQUFrQjtBQUNqQixrQkFBSSxDQUFDQSxNQUFMLEdBQWMsRUFBZDtBQUNBO0FBQ0QsY0FBSSxNQUFJLENBQUNxRCxPQUFMLENBQWFDLE1BQWIsS0FBd0IsTUFBSSxDQUFDdEQsTUFBTCxDQUFZc0QsTUFBeEMsRUFBZ0Q7QUFDaEQsZ0JBQUksQ0FBQ3RELE1BQUwsQ0FBWWdCLElBQVosQ0FBaUJsQixJQUFJLENBQUNvRixJQUF0QjtBQUNBLGdCQUFJLENBQUNuRixLQUFMLElBQWNELElBQUksQ0FBQ29GLElBQUwsQ0FBVTFCLEtBQXhCO0FBQ0EsY0FBSSxNQUFJLENBQUNoRCxTQUFULEVBQW9CO0FBQ3BCLGNBQUksTUFBSSxDQUFDTCxJQUFULEVBQWU7QUFDZCxrQkFBSSxDQUFDTyxJQUFMO0FBQ0E7QUFDRCxTQVhEO0FBWUE7QUFDRCxLQXZMTyxFQXZESyxFOzs7Ozs7Ozs7Ozs7O0FDSmY7QUFBQTtBQUFBO0FBQUE7QUFBOHZCLENBQWdCLGl4QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQWx4QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6REE7QUFBQTtBQUFBO0FBQUE7QUFBc2IsQ0FBZ0Isa2VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDa0MxYztBQUNBO0FBQ0EsK0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUNBLEVBQ0EsY0FDQSwrQkFEQSxFQUVBLHVDQUZBLEVBR0EsK0NBSEEsRUFEQSxFQU1BLElBTkEsa0JBTUEsQ0FDQSxTQUNBLGVBREEsRUFFQSxhQUNBLFlBREEsR0FGQSxFQUtBLGFBQ0EsVUFEQSxFQUVBLFNBQ0EsMEJBREEsRUFGQSxJQUtBLEVBQ0EsVUFEQSxFQUVBLFNBQ0EsMEJBREEsRUFGQSxFQUxBLENBTEEsRUFnQkEsY0FDQSxZQUNBLFVBREEsRUFFQSxTQUNBLGlDQURBLEVBRkEsR0FEQSxFQU9BLEtBUEEsRUFRQSxnQkFSQSxJQVNBO0FBQ0EsYUFEQTtBQUVBO0FBQ0Esb0JBREE7QUFFQTtBQUNBLG9CQURBO0FBRUE7QUFDQSw2Q0FEQSxFQUZBLEVBRkEsQ0FGQTs7O0FBVUEsd0JBVkEsRUFUQTtBQW9CQTtBQUNBLGFBREE7QUFFQTtBQUNBLG9CQURBO0FBRUE7QUFDQSx1QkFEQTtBQUVBO0FBQ0EsNkNBREEsRUFGQSxFQUZBOztBQU9BO0FBQ0Esb0JBREE7QUFFQTtBQUNBLDZDQURBLEVBRkEsRUFQQSxDQUZBOzs7QUFlQSx3QkFmQSxFQXBCQTs7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqRUE7QUFtRUEsR0ExRUE7QUEyRUEsU0EzRUEscUJBMkVBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQS9FQTtBQWdGQTtBQUNBLGFBREEscUJBQ0EsQ0FEQSxFQUNBO0FBQ0E7QUFDQSwwRUFEQTtBQUVBLG9CQUZBOztBQUlBLEtBTkE7QUFPQSxhQVBBLHVCQU9BO0FBQ0E7QUFDQSxLQVRBO0FBVUEsVUFWQSxrQkFVQSxDQVZBLEVBVUE7QUFDQTtBQUNBO0FBQ0EsS0FiQTtBQWNBLGVBZEEsdUJBY0EsQ0FkQSxFQWNBO0FBQ0E7QUFDQSxLQWhCQTtBQWlCQSxjQWpCQSxzQkFpQkEsQ0FqQkEsRUFpQkEsS0FqQkEsRUFpQkE7O0FBRUEsYUFGQTtBQUdBLE9BSEEsQ0FFQSxPQUZBO0FBSUE7QUFDQTtBQUNBLHFCQURBO0FBRUEseUJBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsV0FUQTs7QUFXQSxPQVpBLE1BWUE7QUFDQTtBQUNBO0FBQ0Esb0NBREE7QUFFQTtBQUNBLHdCQURBO0FBRUE7QUFDQSwyQkFEQTtBQUVBO0FBQ0EsaURBREEsRUFGQSxFQUZBOztBQU9BO0FBQ0Esd0JBREE7QUFFQTtBQUNBLGlEQURBLEVBRkEsRUFQQSxDQUZBOzs7QUFlQSx5QkFmQTs7QUFpQkE7QUFDQSwrREFEQTtBQUVBLHdCQUZBOztBQUlBLFNBdEJBLE1Bc0JBO0FBQ0E7QUFDQSxxRUFEQTtBQUVBLHdCQUZBOztBQUlBO0FBQ0EsT0E3QkEsTUE2QkE7QUFDQTtBQUNBLDRFQURBO0FBRUEsc0JBRkE7O0FBSUE7O0FBRUEsS0FyRUEsRUFoRkEsRTs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFBQTtBQUF5dUIsQ0FBZ0IsNHZCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBN3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs0R0M5RUEsU0FBU3lFLEtBQVQsQ0FBZ0JDLENBQWhCLEVBQW1CO0FBQ2pCLE1BQUlDLENBQUMsR0FBR0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JMLENBQS9CLENBQVI7QUFDQSxTQUFPQyxDQUFDLENBQUNLLFNBQUYsQ0FBWSxDQUFaLEVBQWVMLENBQUMsQ0FBQy9CLE1BQUYsR0FBVyxDQUExQixDQUFQO0FBQ0Q7O0FBRUQsU0FBU3FDLFdBQVQsR0FBd0I7QUFDdEI7QUFDQSxTQUFPLE9BQU9DLGFBQVAsS0FBeUIsUUFBekIsSUFBcUNBLGFBQTVDO0FBQ0Q7O0FBRU0sU0FBU0MsR0FBVCxDQUFjdEIsSUFBZCxFQUFvQjtBQUN6QixPQUFLLElBQUl1QixJQUFJLEdBQUdDLFNBQVMsQ0FBQ3pDLE1BQXJCLEVBQTZCMEMsSUFBSSxHQUFHLElBQUlDLEtBQUosQ0FBVUgsSUFBSSxHQUFHLENBQVAsR0FBV0EsSUFBSSxHQUFHLENBQWxCLEdBQXNCLENBQWhDLENBQXBDLEVBQXdFSSxJQUFJLEdBQUcsQ0FBcEYsRUFBdUZBLElBQUksR0FBR0osSUFBOUYsRUFBb0dJLElBQUksRUFBeEcsRUFBNEc7QUFDMUdGLFFBQUksQ0FBQ0UsSUFBSSxHQUFHLENBQVIsQ0FBSixHQUFpQkgsU0FBUyxDQUFDRyxJQUFELENBQTFCO0FBQ0Q7QUFDREMsU0FBTyxDQUFDNUIsSUFBRCxDQUFQLENBQWM2QixLQUFkLENBQW9CRCxPQUFwQixFQUE2QkgsSUFBN0I7QUFDRDs7QUFFYyxTQUFTSyxTQUFULEdBQXNCO0FBQ25DLE9BQUssSUFBSVAsSUFBSSxHQUFHQyxTQUFTLENBQUN6QyxNQUFyQixFQUE2QjBDLElBQUksR0FBRyxJQUFJQyxLQUFKLENBQVVILElBQVYsQ0FBcEMsRUFBcURJLElBQUksR0FBRyxDQUFqRSxFQUFvRUEsSUFBSSxHQUFHSixJQUEzRSxFQUFpRkksSUFBSSxFQUFyRixFQUF5RjtBQUN2RkYsUUFBSSxDQUFDRSxJQUFELENBQUosR0FBYUgsU0FBUyxDQUFDRyxJQUFELENBQXRCO0FBQ0Q7QUFDRCxNQUFJM0IsSUFBSSxHQUFHeUIsSUFBSSxDQUFDTSxLQUFMLEVBQVg7QUFDQSxNQUFJWCxXQUFXLEVBQWYsRUFBbUI7QUFDakJLLFFBQUksQ0FBQ2hGLElBQUwsQ0FBVWdGLElBQUksQ0FBQ08sR0FBTCxHQUFXQyxPQUFYLENBQW1CLEtBQW5CLEVBQTBCLGFBQTFCLENBQVY7QUFDQSxXQUFPTCxPQUFPLENBQUM1QixJQUFELENBQVAsQ0FBYzZCLEtBQWQsQ0FBb0JELE9BQXBCLEVBQTZCSCxJQUE3QixDQUFQO0FBQ0Q7O0FBRUQsTUFBSVMsSUFBSSxHQUFHVCxJQUFJLENBQUNVLEdBQUwsQ0FBUyxVQUFVdEIsQ0FBVixFQUFhO0FBQy9CLFFBQUliLElBQUksR0FBR2UsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JMLENBQS9CLEVBQWtDdUIsV0FBbEMsRUFBWDs7QUFFQSxRQUFJcEMsSUFBSSxLQUFLLGlCQUFULElBQThCQSxJQUFJLEtBQUssZ0JBQTNDLEVBQTZEO0FBQzNELFVBQUk7QUFDRmEsU0FBQyxHQUFHLHFCQUFxQjlFLElBQUksQ0FBQ0MsU0FBTCxDQUFlNkUsQ0FBZixDQUFyQixHQUF5QyxnQkFBN0M7QUFDRCxPQUZELENBRUUsT0FBTzNDLENBQVAsRUFBVTtBQUNWMkMsU0FBQyxHQUFHLGlCQUFKO0FBQ0Q7QUFDRixLQU5ELE1BTU87QUFDTCxVQUFJQSxDQUFDLEtBQUssSUFBVixFQUFnQjtBQUNkQSxTQUFDLEdBQUcsWUFBSjtBQUNELE9BRkQsTUFFTyxJQUFJQSxDQUFDLEtBQUtyRSxTQUFWLEVBQXFCO0FBQzFCcUUsU0FBQyxHQUFHLGlCQUFKO0FBQ0QsT0FGTSxNQUVBO0FBQ0wsWUFBSXdCLEtBQUssR0FBR3pCLEtBQUssQ0FBQ0MsQ0FBRCxDQUFMLENBQVN5QixXQUFULEVBQVo7O0FBRUEsWUFBSUQsS0FBSyxLQUFLLFFBQVYsSUFBc0JBLEtBQUssS0FBSyxTQUFwQyxFQUErQztBQUM3Q3hCLFdBQUMsR0FBRyxjQUFjd0IsS0FBZCxHQUFzQixLQUF0QixHQUE4QnhCLENBQTlCLEdBQWtDLFNBQWxDLEdBQThDd0IsS0FBOUMsR0FBc0QsS0FBMUQ7QUFDRCxTQUZELE1BRU87QUFDTHhCLFdBQUMsR0FBRzBCLE1BQU0sQ0FBQzFCLENBQUQsQ0FBVjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFPQSxDQUFQO0FBQ0QsR0ExQlUsQ0FBWDtBQTJCQSxNQUFJMkIsR0FBRyxHQUFHLEVBQVY7O0FBRUEsTUFBSU4sSUFBSSxDQUFDbkQsTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ25CLFFBQUkwRCxPQUFPLEdBQUdQLElBQUksQ0FBQ0YsR0FBTCxFQUFkO0FBQ0FRLE9BQUcsR0FBR04sSUFBSSxDQUFDUSxJQUFMLENBQVUsYUFBVixDQUFOOztBQUVBLFFBQUlELE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixNQUFoQixNQUE0QixDQUFoQyxFQUFtQztBQUNqQ0gsU0FBRyxJQUFJQyxPQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0xELFNBQUcsSUFBSSxnQkFBZ0JDLE9BQXZCO0FBQ0Q7QUFDRixHQVRELE1BU087QUFDTEQsT0FBRyxHQUFHTixJQUFJLENBQUMsQ0FBRCxDQUFWO0FBQ0Q7O0FBRUROLFNBQU8sQ0FBQzVCLElBQUQsQ0FBUCxDQUFjd0MsR0FBZDtBQUNELEMiLCJmaWxlIjoicGFnZXMvZXh0VUkvc3dpcGUtYWN0aW9uL3N3aXBlLWFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNTMpO1xuIiwiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUsIC8qIHZ1ZS1jbGkgb25seSAqL1xuICBjb21wb25lbnRzLCAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIHJlbmRlcmpzIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICBpZiAoY29tcG9uZW50cykge1xuICAgIGlmICghb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgICBvcHRpb25zLmNvbXBvbmVudHMgPSB7fVxuICAgIH1cbiAgICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAgIGZvciAodmFyIG5hbWUgaW4gY29tcG9uZW50cykge1xuICAgICAgaWYgKGhhc093bi5jYWxsKGNvbXBvbmVudHMsIG5hbWUpICYmICFoYXNPd24uY2FsbChvcHRpb25zLmNvbXBvbmVudHMsIG5hbWUpKSB7XG4gICAgICAgIG9wdGlvbnMuY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudHNbbmFtZV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4gIGlmIChyZW5kZXJqcykge1xuICAgIChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgfHwgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSA9IFtdKSkudW5zaGlmdChmdW5jdGlvbigpIHtcbiAgICAgIHRoaXNbcmVuZGVyanMuX19tb2R1bGVdID0gdGhpc1xuICAgIH0pO1xuICAgIChvcHRpb25zLm1peGlucyB8fCAob3B0aW9ucy5taXhpbnMgPSBbXSkpLnB1c2gocmVuZGVyanMpXG4gIH1cblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMzNDA4YzMwJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMzQwOGMzMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzM0MDhjMzAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYzM0MDhjMzBcIixcbiAgXCJlMjlhMTJmY1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOi91bmktYXBwL1N0dWR5VW5pQXBwMi9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLnJlY3ljbGUuanMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMCFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzM0MDhjMzAmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZpZXdcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktc2VjdGlvblwiXSwgYXR0cnM6IHsgbnZ1ZTogdHJ1ZSB9IH0sXG4gICAgW1xuICAgICAgX3ZtLnR5cGVcbiAgICAgICAgPyBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLXNlY3Rpb25fX2hlYWRcIl0gfSwgW1xuICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1zZWN0aW9uX19oZWFkLXRhZ1wiXSxcbiAgICAgICAgICAgICAgY2xhc3M6IF92bS50eXBlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLXNlY3Rpb25fX2NvbnRlbnRcIl0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktc2VjdGlvbl9fY29udGVudC10aXRsZVwiXSxcbiAgICAgICAgICAgIGNsYXNzOiB7IGRpc3RyYWN0aW9uOiAhX3ZtLnN1YlRpdGxlIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uc3ViVGl0bGVcbiAgICAgICAgICA/IF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1zZWN0aW9uX19jb250ZW50LXN1YlwiXSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnN1YlRpdGxlKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3QoXCJkZWZhdWx0XCIpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwidW5pLXNlY3Rpb25cIiBudnVlPlxyXG5cdFx0PHZpZXcgdi1pZj1cInR5cGVcIiBjbGFzcz1cInVuaS1zZWN0aW9uX19oZWFkXCI+XHJcblx0XHRcdDx2aWV3IDpjbGFzcz1cInR5cGVcIiBjbGFzcz1cInVuaS1zZWN0aW9uX19oZWFkLXRhZ1wiIC8+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInVuaS1zZWN0aW9uX19jb250ZW50XCI+XHJcblx0XHRcdDx0ZXh0IDpjbGFzcz1cInsnZGlzdHJhY3Rpb24nOiFzdWJUaXRsZX1cIiBjbGFzcz1cInVuaS1zZWN0aW9uX19jb250ZW50LXRpdGxlXCI+e3sgdGl0bGUgfX08L3RleHQ+XHJcblx0XHRcdDx0ZXh0IHYtaWY9XCJzdWJUaXRsZVwiIGNsYXNzPVwidW5pLXNlY3Rpb25fX2NvbnRlbnQtc3ViXCI+e3sgc3ViVGl0bGUgfX08L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8c2xvdCAvPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0LyoqXHJcblx0ICogU2VjdGlvbiDmoIfpopjmoI9cclxuXHQgKiBAZGVzY3JpcHRpb24g5qCH6aKY5qCPXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IHR5cGUgPSBbbGluZXxjaXJjbGVdIOagh+mimOijhemlsOexu+Wei1xyXG5cdCAqIFx0QHZhbHVlIGxpbmUg56uW57q/XHJcblx0ICogXHRAdmFsdWUgY2lyY2xlIOWchuW9olxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0aXRsZSDkuLvmoIfpophcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gc3ViVGl0bGUg5Ymv5qCH6aKYXHJcblx0ICovXHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdVbmlUaXRsZScsXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHR0eXBlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdHRpdGxlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1YlRpdGxlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge31cclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHR0aXRsZShuZXdWYWwpIHtcclxuXHRcdFx0XHRpZiAodW5pLnJlcG9ydCAmJiBuZXdWYWwgIT09ICcnKSB7XHJcblx0XHRcdFx0XHR1bmkucmVwb3J0KCd0aXRsZScsIG5ld1ZhbClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdG9uQ2xpY2soKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQudW5pLXNlY3Rpb24ge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMCAxMHB4O1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuXHRcdC8qICNpZmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2U1ZTVlNTtcclxuXHRcdGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMC41cHg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0fVxyXG5cclxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0LnVuaS1zZWN0aW9uOmFmdGVyIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGhlaWdodDogMXB4O1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKC41KTtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGVZKC41KTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcblx0fVxyXG5cclxuXHQvKiAjZW5kaWYgKi9cclxuXHJcblx0LnVuaS1zZWN0aW9uX19oZWFkIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0fVxyXG5cclxuXHQubGluZSB7XHJcblx0XHRoZWlnaHQ6IDE1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0d2lkdGg6IDNweDtcclxuXHR9XHJcblxyXG5cdC5jaXJjbGUge1xyXG5cdFx0d2lkdGg6IDhweDtcclxuXHRcdGhlaWdodDogOHB4O1xyXG5cdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcblx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcclxuXHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcclxuXHR9XHJcblxyXG5cdC51bmktc2VjdGlvbl9fY29udGVudCB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0Y29sb3I6ICMzMzM7XHJcblx0fVxyXG5cclxuXHQudW5pLXNlY3Rpb25fX2NvbnRlbnQtdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdH1cclxuXHJcblx0LmRpc3RyYWN0aW9uIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnVuaS1zZWN0aW9uX19jb250ZW50LXN1YiB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk7XHJcblx0fVxyXG48L3N0eWxlPiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzM0MDhjMzAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzM0MDhjMzAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ1bmktc2VjdGlvblwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBcIixcbiAgICBcImhlaWdodFwiOiBcIjUwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjhmOGY4XCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNlNWU1ZTVcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMC41XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwibm9ybWFsXCJcbiAgfSxcbiAgXCJ1bmktc2VjdGlvbl9faGVhZFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMFwiXG4gIH0sXG4gIFwibGluZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxNVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2MwYzBjMFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNVwiLFxuICAgIFwid2lkdGhcIjogXCIzXCJcbiAgfSxcbiAgXCJjaXJjbGVcIjoge1xuICAgIFwid2lkdGhcIjogXCI4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4XCIsXG4gICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiOiBcIjUwXCIsXG4gICAgXCJib3JkZXJUb3BMZWZ0UmFkaXVzXCI6IFwiNTBcIixcbiAgICBcImJvcmRlckJvdHRvbUxlZnRSYWRpdXNcIjogXCI1MFwiLFxuICAgIFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIjogXCI1MFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2MwYzBjMFwiXG4gIH0sXG4gIFwidW5pLXNlY3Rpb25fX2NvbnRlbnRcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgfSxcbiAgXCJ1bmktc2VjdGlvbl9fY29udGVudC10aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcImRpc3RyYWN0aW9uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInVuaS1zZWN0aW9uX19jb250ZW50LXN1YlwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIlxuICB9XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVOYXRpdmVQbHVnaW4obmFtZSkge1xyXG4gIHJldHVybiB3ZWV4LnJlcXVpcmVNb2R1bGUobmFtZSlcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9IiwiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9leHRVSS9zd2lwZS1hY3Rpb24vc3dpcGUtYWN0aW9uLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2V4dFVJL3N3aXBlLWFjdGlvbi9zd2lwZS1hY3Rpb24nXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vc3dpcGUtYWN0aW9uLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGYxOGY4ZjQmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3N3aXBlLWFjdGlvbi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3N3aXBlLWFjdGlvbi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9zd2lwZS1hY3Rpb24ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3N3aXBlLWFjdGlvbi5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI3MWE0YjZiNVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOi91bmktYXBwL1N0dWR5VW5pQXBwMi9wYWdlcy9leHRVSS9zd2lwZS1hY3Rpb24vc3dpcGUtYWN0aW9uLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxccGFnZS1tZXRhLmpzIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3dpcGUtYWN0aW9uLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGYxOGY4ZjQmbXBUeXBlPXBhZ2VcIiIsInZhciBjb21wb25lbnRzID0ge1xuICB1bmlTZWN0aW9uOiByZXF1aXJlKFwiQC9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZVwiKS5kZWZhdWx0LFxuICB1bmlTd2lwZUFjdGlvbjogcmVxdWlyZShcIkAvY29tcG9uZW50cy91bmktc3dpcGUtYWN0aW9uL3VuaS1zd2lwZS1hY3Rpb24udnVlXCIpXG4gICAgLmRlZmF1bHQsXG4gIHVuaVN3aXBlQWN0aW9uSXRlbTogcmVxdWlyZShcIkAvY29tcG9uZW50cy91bmktc3dpcGUtYWN0aW9uLWl0ZW0vdW5pLXN3aXBlLWFjdGlvbi1pdGVtLnZ1ZVwiKVxuICAgIC5kZWZhdWx0XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczoge1xuICAgICAgICBzY3JvbGxZOiB0cnVlLFxuICAgICAgICBzaG93U2Nyb2xsYmFyOiB0cnVlLFxuICAgICAgICBlbmFibGVCYWNrVG9Ub3A6IHRydWUsXG4gICAgICAgIGJ1YmJsZTogXCJ0cnVlXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidW5pLXNlY3Rpb25cIiwgeyBhdHRyczogeyB0aXRsZTogXCLln7rmnKznlKjms5VcIiwgdHlwZTogXCJsaW5lXCIgfSB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidW5pLXN3aXBlLWFjdGlvblwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVuaS1zd2lwZS1hY3Rpb24taXRlbVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9wdGlvbnM6IF92bS5vcHRpb25zMSB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5iaW5kQ2xpY2sgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiY29udFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlN3aXBlQWN0aW9uIOWfuuehgOS9v+eUqOWcuuaZr1wiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcInVuaS1zZWN0aW9uXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwi56aB5q2i5ruR5YqoXCIsIHR5cGU6IFwibGluZVwiIH0gfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVuaS1zd2lwZS1hY3Rpb25cIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ1bmktc3dpcGUtYWN0aW9uLWl0ZW1cIiwgeyBhdHRyczogeyBkaXNhYmxlZDogdHJ1ZSB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJjb250XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlN3aXBlQWN0aW9uIOemgeatoua7keWKqOWxleekulwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJ1bmktc2VjdGlvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCLkvb/nlKjlj5jph4/mjqfliLblvIDlhbNcIiwgdHlwZTogXCJsaW5lXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJleGFtcGxlLWJvZHlcIl0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJidXR0b25cIl0sIG9uOiB7IGNsaWNrOiBfdm0uc2V0T3BlbmVkIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImJ1dHRvbi10ZXh0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIuW9k+WJjeeKtuaAge+8mlwiICsgX3ZtLl9zKF92bS5pc09wZW5lZCA/IFwi5byAXCIgOiBcIuWFs1wiKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVuaS1zd2lwZS1hY3Rpb25cIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1bmktc3dpcGUtYWN0aW9uLWl0ZW1cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0ub3B0aW9uczIsXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IF92bS5pc09wZW5lZCxcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLmNoYW5nZSwgY2xpY2s6IF92bS5iaW5kQ2xpY2sgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiY29udFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuS9v+eUqOWPmOmHj+aOp+WItlN3aXBlQWN0aW9u55qE5byA5ZCv54q25oCBXCIpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwidW5pLXNlY3Rpb25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwic3dpcGUtYWN0aW9uIOWIl+ihqFwiLCB0eXBlOiBcImxpbmVcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVuaS1zd2lwZS1hY3Rpb25cIixcbiAgICAgICAgICAgIF92bS5fbChfdm0uc3dpcGVMaXN0LCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJ1bmktc3dpcGUtYWN0aW9uLWl0ZW1cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBvcHRpb25zOiBpdGVtLm9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogX3ZtLnN3aXBlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnN3aXBlQ2xpY2soJGV2ZW50LCBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiY29udFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5jb250ZW50KSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1zd2lwZS1hY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiZjA0ODk2JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXN3aXBlLWFjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1zd2lwZS1hY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjBiZjA0ODk2XCIsXG4gIFwiMDBhOGQwMmNcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvY29tcG9uZW50cy91bmktc3dpcGUtYWN0aW9uL3VuaS1zd2lwZS1hY3Rpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUucmVjeWNsZS5qcyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1zd2lwZS1hY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiZjA0ODk2JnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ2aWV3XCIsIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXN3aXBlLWFjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc3dpcGUtYWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldz5cclxuXHRcdDxzbG90Pjwvc2xvdD5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8qKlxyXG5cdCAqIFN3aXBlQWN0aW9uIOa7keWKqOaTjeS9nFxyXG5cdCAqIEBkZXNjcmlwdGlvbiDpgJrov4fmu5Hliqjop6blj5HpgInpobnnmoTlrrnlmahcclxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9MTgxXHJcblx0ICovXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fSxcclxuXHRcdHByb3ZpZGUoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3dpcGVhY3Rpb246IHRoaXNcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdHRoaXMuY2hpbGRyZW4gPSBbXVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Y2xvc2VPdGhlcih2bSkge1xyXG5cdFx0XHRcdGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW5cclxuXHRcdFx0XHRjaGlsZHJlbi5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHZtID09PSBpdGVtKSByZXR1cm5cclxuXHRcdFx0XHRcdC8vIOaUr+S7mOWuneaJp+ihjOS7peS4i+aTjeS9nFxyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIE1QLUFMSVBBWVxyXG5cdFx0XHRcdFx0aWYgKGl0ZW0uaXNvcGVuKSB7XHJcblx0XHRcdFx0XHRcdGl0ZW0uY2xvc2UoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdFx0Ly8gYXBwIHZ1ZSDnq6/jgIFoNSDjgIHlvq7kv6HjgIHmlK/ku5jlrp0gIOaJp+ihjOS7peS4i+aTjeS9nFxyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1WVUUgfHwgSDUgfHwgTVAtV0VJWElOXHJcblx0XHRcdFx0XHRsZXQgcG9zaXRpb24gPSBpdGVtLnBvc2l0aW9uWzBdXHJcblx0XHRcdFx0XHRsZXQgc2hvdyA9IHBvc2l0aW9uLnNob3dcclxuXHRcdFx0XHRcdGlmIChzaG93KSB7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uLnNob3cgPSBmYWxzZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdFx0Ly8gbnZ1ZSDmiafooYzku6XkuIvmk43kvZxcclxuXHRcdFx0XHRcdC8vICNpZmRlZiBBUFAtTlZVRSB8fCBNUC1CQUlEVSB8fCBNUC1RUSB8fCBNUC1UT1VUSUFPXHJcblx0XHRcdFx0XHRpdGVtLmNsb3NlKClcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktc3dpcGUtYWN0aW9uLWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdmYmRhNGNjJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXN3aXBlLWFjdGlvbi1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLXN3aXBlLWFjdGlvbi1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS1zd2lwZS1hY3Rpb24taXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ZmJkYTRjYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLXN3aXBlLWFjdGlvbi1pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdmYmRhNGNjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdmYmRhNGNjXCIsXG4gIFwiNWEzNTQ0MjZcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvY29tcG9uZW50cy91bmktc3dpcGUtYWN0aW9uLWl0ZW0vdW5pLXN3aXBlLWFjdGlvbi1pdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLnJlY3ljbGUuanMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMCFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc3dpcGUtYWN0aW9uLWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdmYmRhNGNjJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1zd2lwZVwiXSB9LCBbXG4gICAgX2MoXG4gICAgICBcInZpZXdcIixcbiAgICAgIHtcbiAgICAgICAgcmVmOiBcInNlbGVjdG9yLWJveC1ob2NrXCIsXG4gICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktc3dpcGVfY29udGVudFwiXSxcbiAgICAgICAgb246IHsgaG9yaXpvbnRhbHBhbjogX3ZtLnRvdWNoc3RhcnQsIHRvdWNoZW5kOiBfdm0udG91Y2hlbmQgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVmOiBcInNlbGVjdG9yLWJ1dHRvbi1ob2NrXCIsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICBcInVuaS1zd2lwZV9idXR0b24tZ3JvdXBcIixcbiAgICAgICAgICAgICAgXCJzZWxlY3Rvci1xdWVyeS1ob2NrXCIsXG4gICAgICAgICAgICAgIFwibW92ZS1ob2NrXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogX3ZtLnJpZ2h0ICsgXCJweFwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIF92bS5fbChfdm0ub3B0aW9ucywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgIHJlZjogXCJidXR0b24taG9ja1wiLFxuICAgICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktc3dpcGVfYnV0dG9uXCJdLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUgJiYgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIiNDN0M2Q0RcIixcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IF92bS5yaWdodCArIFwicHhcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLm9uQ2xpY2soaW5kZXgsIGl0ZW0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLXN3aXBlX2J1dHRvbi10ZXh0XCJdLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZSAmJiBpdGVtLnN0eWxlLmNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5zdHlsZS5jb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiI0ZGRkZGRlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZSAmJiBpdGVtLnN0eWxlLmZvbnRTaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5zdHlsZS5mb250U2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiMTZweFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLnRleHQpKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgICksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogXCJzZWxlY3Rvci1jb250ZW50LWhvY2tcIixcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktc3dpcGVfbW92ZS1ib3hcIiwgXCJzZWxlY3Rvci1xdWVyeS1ob2NrXCJdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1zd2lwZV9ib3hcIl0gfSxcbiAgICAgICAgICAgICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc3dpcGUtYWN0aW9uLWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXN3aXBlLWFjdGlvbi1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInVuaS1zd2lwZVwiPlxyXG5cdFx0PCEtLSDlnKjlvq7kv6HlsI/nqIvluo8gYXBwIHZ1ZeerryBoNSDkvb/nlKh3eHMg5a6e546wLS0+XHJcblx0XHQ8IS0tICNpZmRlZiBBUFAtVlVFIHx8IE1QLVdFSVhJTiB8fCBINSAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLXN3aXBlX2NvbnRlbnRcIj5cclxuXHRcdFx0PHZpZXcgOmRhdGEtZGlzYWJsZWQ9XCJkaXNhYmxlZFwiIDpkYXRhLXBvc2l0aW9uPVwicG9zXCIgOmNoYW5nZTpwcm9wPVwic3dpcGUuc2l6ZVJlYWR5XCIgOnByb3A9XCJwb3NcIiBjbGFzcz1cInVuaS1zd2lwZV9tb3ZlLWJveCBzZWxlY3Rvci1xdWVyeS1ob2NrIG1vdmUtaG9ja1wiIEB0b3VjaHN0YXJ0PVwic3dpcGUudG91Y2hzdGFydFwiIEB0b3VjaG1vdmU9XCJzd2lwZS50b3VjaG1vdmVcIiBAdG91Y2hlbmQ9XCJzd2lwZS50b3VjaGVuZFwiIEBjaGFuZ2U9XCJjaGFuZ2VcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1zd2lwZV9ib3hcIj5cclxuXHRcdFx0XHRcdDxzbG90IC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IHJlZj1cInNlbGVjdG9yLWJ1dHRvbi1ob2NrXCIgY2xhc3M9XCJ1bmktc3dpcGVfYnV0dG9uLWdyb3VwIHNlbGVjdG9yLXF1ZXJ5LWhvY2sgbW92ZS1ob2NrXCI+XHJcblx0XHRcdFx0XHQ8dmlldyB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBvcHRpb25zXCIgOmRhdGEtYnV0dG9uPVwiYnRuXCIgOmtleT1cImluZGV4XCIgOnN0eWxlPVwie1xyXG5cdFx0ICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXRlbS5zdHlsZSAmJiBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA/IGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yIDogJyNDN0M2Q0QnLFxyXG5cdFx0ICAgICAgICAgIGZvbnRTaXplOiBpdGVtLnN0eWxlICYmIGl0ZW0uc3R5bGUuZm9udFNpemUgPyBpdGVtLnN0eWxlLmZvbnRTaXplIDogJzE2cHgnXHJcblx0XHQgICAgICAgIH1cIiBjbGFzcz1cInVuaS1zd2lwZV9idXR0b24gYnV0dG9uLWhvY2tcIiBAY2xpY2suc3RvcD1cIm9uQ2xpY2soaW5kZXgsaXRlbSlcIj48dGV4dCBjbGFzcz1cInVuaS1zd2lwZV9idXR0b24tdGV4dFwiIDpzdHlsZT1cIntjb2xvcjogaXRlbS5zdHlsZSAmJiBpdGVtLnN0eWxlLmNvbG9yID8gaXRlbS5zdHlsZS5jb2xvciA6ICcjRkZGRkZGJyx9XCI+e3sgaXRlbS50ZXh0IH19PC90ZXh0Pjwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cclxuXHRcdDwhLS0gIGFwcCBudnVl56uvIOS9v+eUqCBiaW5kaW5neCAtLT5cclxuXHRcdDwhLS0gI2lmZGVmIEFQUC1OVlVFIC0tPlxyXG5cdFx0PHZpZXcgcmVmPVwic2VsZWN0b3ItYm94LWhvY2tcIiBjbGFzcz1cInVuaS1zd2lwZV9jb250ZW50XCIgQGhvcml6b250YWxwYW49XCJ0b3VjaHN0YXJ0XCIgQHRvdWNoZW5kPVwidG91Y2hlbmRcIj5cclxuXHRcdFx0PHZpZXcgcmVmPVwic2VsZWN0b3ItYnV0dG9uLWhvY2tcIiBjbGFzcz1cInVuaS1zd2lwZV9idXR0b24tZ3JvdXAgc2VsZWN0b3ItcXVlcnktaG9jayBtb3ZlLWhvY2tcIiA6c3R5bGU9XCJ7d2lkdGg6cmlnaHQrJ3B4J31cIj5cclxuXHRcdFx0XHQ8dmlldyByZWY9XCJidXR0b24taG9ja1wiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIG9wdGlvbnNcIiA6a2V5PVwiaW5kZXhcIiA6c3R5bGU9XCJ7XHJcblx0XHQgIGJhY2tncm91bmRDb2xvcjogaXRlbS5zdHlsZSAmJiBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA/IGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yIDogJyNDN0M2Q0QnLGxlZnQ6IHJpZ2h0KydweCd9XCIgY2xhc3M9XCJ1bmktc3dpcGVfYnV0dG9uIFwiIEBjbGljay5zdG9wPVwib25DbGljayhpbmRleCxpdGVtKVwiPjx0ZXh0IGNsYXNzPVwidW5pLXN3aXBlX2J1dHRvbi10ZXh0XCIgOnN0eWxlPVwie2NvbG9yOiBpdGVtLnN0eWxlICYmIGl0ZW0uc3R5bGUuY29sb3IgPyBpdGVtLnN0eWxlLmNvbG9yIDogJyNGRkZGRkYnLGZvbnRTaXplOiBpdGVtLnN0eWxlICYmIGl0ZW0uc3R5bGUuZm9udFNpemUgPyBpdGVtLnN0eWxlLmZvbnRTaXplIDogJzE2cHgnfVwiPnt7IGl0ZW0udGV4dCB9fTwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgcmVmPSdzZWxlY3Rvci1jb250ZW50LWhvY2snIGNsYXNzPVwidW5pLXN3aXBlX21vdmUtYm94IHNlbGVjdG9yLXF1ZXJ5LWhvY2tcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1zd2lwZV9ib3hcIj5cclxuXHRcdFx0XHRcdDxzbG90IC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHJcblx0XHQ8IS0tIOWcqOmdniBhcHAg56uv44CB6Z2e5b6u5L+h5bCP56iL5bqP44CB5pSv5LuY5a6d5bCP56iL5bqP44CBaDXnq6/kvb/nlKgganMgLS0+XHJcblx0XHQ8IS0tICNpZm5kZWYgQVBQLVBMVVMgfHwgTVAtV0VJWElOIHx8IE1QLUFMSVBBWSB8fCBINSAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLXN3aXBlX2NvbnRlbnRcIj5cclxuXHRcdFx0PHZpZXcgcmVmPVwic2VsZWN0b3ItYnV0dG9uLWhvY2tcIiBjbGFzcz1cInVuaS1zd2lwZV9idXR0b24tZ3JvdXAgc2VsZWN0b3ItcXVlcnktaG9jayBtb3ZlLWhvY2tcIj5cclxuXHRcdFx0XHQ8dmlldyB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBvcHRpb25zXCIgOmRhdGEtYnV0dG9uPVwiYnRuXCIgOmtleT1cImluZGV4XCIgOnN0eWxlPVwie1xyXG5cdFx0ICAgIGJhY2tncm91bmRDb2xvcjogaXRlbS5zdHlsZSAmJiBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA/IGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yIDogJyNDN0M2Q0QnLFxyXG5cdFx0ICAgIGZvbnRTaXplOiBpdGVtLnN0eWxlICYmIGl0ZW0uc3R5bGUuZm9udFNpemUgPyBpdGVtLnN0eWxlLmZvbnRTaXplIDogJzE2cHgnXHJcblx0XHQgIH1cIiBjbGFzcz1cInVuaS1zd2lwZV9idXR0b24gYnV0dG9uLWhvY2tcIiBAY2xpY2suc3RvcD1cIm9uQ2xpY2soaW5kZXgsaXRlbSlcIj48dGV4dCBjbGFzcz1cInVuaS1zd2lwZV9idXR0b24tdGV4dFwiIDpzdHlsZT1cIntjb2xvcjogaXRlbS5zdHlsZSAmJiBpdGVtLnN0eWxlLmNvbG9yID8gaXRlbS5zdHlsZS5jb2xvciA6ICcjRkZGRkZGJyx9XCI+e3sgaXRlbS50ZXh0IH19PC90ZXh0Pjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyByZWY9J3NlbGVjdG9yLWNvbnRlbnQtaG9jaycgY2xhc3M9XCJzZWxlY3Rvci1xdWVyeS1ob2NrXCIgQHRvdWNoc3RhcnQ9XCJ0b3VjaHN0YXJ0XCIgQHRvdWNobW92ZT1cInRvdWNobW92ZVwiIEB0b3VjaGVuZD1cInRvdWNoZW5kXCIgOmNsYXNzPVwieydhbmknOnVuaVNob3d9XCIgOnN0eWxlPVwie3RyYW5zZm9ybTptb3ZlTGVmdH1cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1zd2lwZV9tb3ZlLWJveFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktc3dpcGVfYm94XCI+XHJcblx0XHRcdFx0XHRcdDxzbG90IC8+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdDwhLS0gI2lmZGVmIE1QLUFMSVBBWSAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLXN3aXBlLWJveFwiIEB0b3VjaHN0YXJ0PVwidG91Y2hzdGFydFwiIEB0b3VjaG1vdmU9XCJ0b3VjaG1vdmVcIiBAdG91Y2hlbmQ9XCJ0b3VjaGVuZFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInZpZXdXaWR0aC1ob29rXCI+XHJcblx0XHRcdFx0PG1vdmFibGUtYXJlYSB2LWlmPVwidmlld1dpZHRoICE9PSAwXCIgY2xhc3M9XCJtb3ZhYmxlLWFyZWFcIiA6c3R5bGU9XCJ7d2lkdGg6KHZpZXdXaWR0aC1idXR0b25XaWR0aCkrJ3B4J31cIj5cclxuXHRcdFx0XHRcdDxtb3ZhYmxlLXZpZXcgY2xhc3M9XCJtb3ZhYmxlLXZpZXdcIiBkaXJlY3Rpb249XCJob3Jpem9udGFsXCIgOmFuaW1hdGlvbj1cIiF0cmFuc2l0aW9uXCIgOnN0eWxlPVwie3dpZHRoOnZpZXdXaWR0aCsncHgnfVwiIDpjbGFzcz1cIlt0cmFuc2l0aW9uPyd0cmFuc2l0aW9uJzonJ11cIiA6eD1cInhcIiA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFZpZXdcIiBAY2hhbmdlPVwib25DaGFuZ2VcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtb3ZhYmxlLXZpZXctYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0PHNsb3Q+PC9zbG90PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L21vdmFibGUtdmlldz5cclxuXHRcdFx0XHQ8L21vdmFibGUtYXJlYT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyByZWY9XCJzZWxlY3Rvci1idXR0b24taG9ja1wiIGNsYXNzPVwidW5pLXN3aXBlX2J1dHRvbi1ncm91cCB2aWV3V2lkdGgtaG9va1wiPlxyXG5cdFx0XHRcdDx2aWV3IHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIG9wdGlvbnNcIiA6ZGF0YS1idXR0b249XCJidG5cIiA6a2V5PVwiaW5kZXhcIiA6c3R5bGU9XCJ7XHJcblx0XHRcdFx0ICBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uc3R5bGUgJiYgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPyBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA6ICcjQzdDNkNEJyxcclxuXHRcdFx0XHQgIGZvbnRTaXplOiBpdGVtLnN0eWxlICYmIGl0ZW0uc3R5bGUuZm9udFNpemUgPyBpdGVtLnN0eWxlLmZvbnRTaXplIDogJzE2cHgnXHJcblx0XHRcdFx0fVwiIGNsYXNzPVwidW5pLXN3aXBlX2J1dHRvbiBidXR0b24taG9ja1wiIEBjbGljay5zdG9wPVwib25DbGljayhpbmRleCxpdGVtKVwiPjx0ZXh0IGNsYXNzPVwidW5pLXN3aXBlX2J1dHRvbi10ZXh0XCIgOnN0eWxlPVwie2NvbG9yOiBpdGVtLnN0eWxlICYmIGl0ZW0uc3R5bGUuY29sb3IgPyBpdGVtLnN0eWxlLmNvbG9yIDogJyNGRkZGRkYnLH1cIj57eyBpdGVtLnRleHQgfX08L3RleHQ+PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQgc3JjPVwiLi9pbmRleC53eHNcIiBtb2R1bGU9XCJzd2lwZVwiIGxhbmc9XCJ3eHNcIj48L3NjcmlwdD5cclxuPHNjcmlwdD5cclxuXHQvLyAjaWZkZWYgQVBQLVZVRXx8IE1QLVdFSVhJTiB8fCBINVxyXG5cdGltcG9ydCBtcHd4cyBmcm9tICcuL21wd3hzJ1xyXG5cdC8vICNlbmRpZlxyXG5cclxuXHQvLyAjaWZkZWYgQVBQLU5WVUVcclxuXHRpbXBvcnQgYmluZGluZ3ggZnJvbSAnLi9iaW5kaW5neC5qcydcclxuXHQvLyAjZW5kaWZcclxuXHJcblx0Ly8gI2lmbmRlZiBBUFAtUExVU3x8IE1QLVdFSVhJTiB8fCBNUC1BTElQQVkgfHwgIEg1XHJcblx0aW1wb3J0IG1peGlucyBmcm9tICcuL21wb3RoZXInXHJcblx0Ly8gI2VuZGlmXHJcblxyXG5cdC8vICNpZmRlZiBNUC1BTElQQVlcclxuXHRpbXBvcnQgbXBhbGlwYXkgZnJvbSAnLi9tcGFsaXBheSdcclxuXHQvLyAjZW5kaWZcclxuXHJcblx0LyoqXHJcblx0ICogU3dpcGVBY3Rpb25JdGVtIOa7keWKqOaTjeS9nOWtkOe7hOS7tlxyXG5cdCAqIEBkZXNjcmlwdGlvbiDpgJrov4fmu5Hliqjop6blj5HpgInpobnnmoTlrrnlmahcclxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9MTgxXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBzaG93ID0gW3RydWV8ZmFsc2VdIOW8gOWQr+WFs+mXree7hOS7tu+8jGF1dG8tY2xvc2UgPSBmYWxzZSDml7bnlJ/mlYhcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGRpc2FibGVkID0gW3RydWV8ZmFsc2VdIOaYr+WQpuemgeatoua7keWKqFxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXV0b0Nsb3NlID0gW3RydWV8ZmFsc2VdIOWFtuS7lue7hOS7tuW8gOWQr+eahOaXtuWAme+8jOW9k+WJjee7hOS7tuaYr+WQpuiHquWKqOWFs+mXrVxyXG5cdCAqIEBwcm9wZXJ0eSB7QXJyYXl9IG9wdGlvbnMg57uE5Lu26YCJ6aG55YaF5a655Y+K5qC35byPXHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gY2xpY2sg54K55Ye76YCJ6aG55oyJ6ZKu5pe26Kem5Y+R5LqL5Lu277yMZSA9IHtjb250ZW50LGluZGV4fSDvvIxjb250ZW5077yI54K55Ye75YaF5a6577yJ44CBaW5kZXjvvIjkuIvmoIcpXHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gY2hhbmdlIOe7hOS7tuaJk+W8gOaIluWFs+mXreaXtuinpuWPke+8jHRydWXvvJrlvIDlkK/nirbmgIHvvJtmYWxzZe+8muWFs+mXreeKtuaAgVxyXG5cdCAqL1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHQvLyAjaWZkZWYgQVBQLVZVRXx8IE1QLVdFSVhJTnx8SDVcclxuXHRcdG1peGluczogW21wd3hzXSxcclxuXHRcdC8vICNlbmRpZlxyXG5cclxuXHRcdC8vICNpZmRlZiBBUFAtTlZVRVxyXG5cdFx0bWl4aW5zOiBbYmluZGluZ3hdLFxyXG5cdFx0Ly8gI2VuZGlmXHJcblxyXG5cdFx0Ly8gI2lmbmRlZiBBUFAtUExVU3x8IE1QLVdFSVhJTiB8fCBNUC1BTElQQVkgfHwgIEg1XHJcblx0XHRtaXhpbnM6IFttaXhpbnNdLFxyXG5cdFx0Ly8gI2VuZGlmXHJcblxyXG5cdFx0Ly8gI2lmZGVmIE1QLUFMSVBBWVxyXG5cdFx0bWl4aW5zOiBbbXBhbGlwYXldLFxyXG5cdFx0Ly8gI2VuZGlmXHJcblxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOaMiemSruWGheWuuVxyXG5cdFx0XHQgKi9cclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdHR5cGU6IEFycmF5LFxyXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIFtdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICog56aB55SoXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRkaXNhYmxlZDoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOWPmOmHj+aOp+WItuW8gOWFs1xyXG5cdFx0XHQgKi9cclxuXHRcdFx0c2hvdzoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOaYr+WQpuiHquWKqOWFs+mXrVxyXG5cdFx0XHQgKi9cclxuXHRcdFx0YXV0b0Nsb3NlOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRpbmplY3Q6IFsnc3dpcGVhY3Rpb24nXVxyXG5cclxuXHJcblx0fVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQudW5pLXN3aXBlIHtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG5cclxuXHQudW5pLXN3aXBlLWJveCB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC51bmktc3dpcGVfY29udGVudCB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHJcblx0LnVuaS1zd2lwZV9tb3ZlLWJveCB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdH1cclxuXHJcblx0LnVuaS1zd2lwZV9ib3gge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGZsZXgtc2hyaW5rOiAwO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHQvKiAjaWZkZWYgQVBQLU5WVUUgKi9cclxuXHRcdGZsZXg6IDE7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHQudW5pLXN3aXBlX2J1dHRvbi1ncm91cCB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1WVUV8fCBNUC1XRUlYSU58fEg1ICovXHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHotaW5kZXg6IDA7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LXNocmluazogMDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHR9XHJcblxyXG5cdC51bmktc3dpcGVfYnV0dG9uIHtcclxuXHRcdC8qICNpZmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDAgMjBweDtcclxuXHR9XHJcblxyXG5cdC51bmktc3dpcGVfYnV0dG9uLXRleHQge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZmxleC1zaHJpbms6IDA7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHR9XHJcblxyXG5cdC5hbmkge1xyXG5cdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG5cdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuXHRcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG5cdH1cclxuXHJcblx0LyogI2lmZGVmIE1QLUFMSVBBWSAqL1xyXG5cdC5tb3ZhYmxlLWFyZWEge1xyXG5cdFx0d2lkdGg6IDMwMHB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiA0NXB4O1xyXG5cdH1cclxuXHJcblx0Lm1vdmFibGUtdmlldyB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogMTYwJTtcclxuXHRcdGhlaWdodDogNDVweDtcclxuXHRcdHotaW5kZXg6IDI7XHJcblx0fVxyXG5cclxuXHQudHJhbnNpdGlvbiB7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHR9XHJcblxyXG5cdC5tb3ZhYmxlLXZpZXctYm94IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHR9XHJcblxyXG5cdC8qICNlbmRpZiAqL1xyXG48L3N0eWxlPiIsImNvbnN0IEJpbmRpbmdYID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2JpbmRpbmd4Jyk7XHJcbmNvbnN0IGRvbSA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdkb20nKTtcclxuY29uc3QgYW5pbWF0aW9uID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ2FuaW1hdGlvbicpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyaWdodDogMCxcclxuXHRcdFx0YnV0dG9uOiBbXSxcclxuXHRcdFx0cHJldmVudEdlc3R1cmU6IGZhbHNlXHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0d2F0Y2g6IHtcclxuXHRcdHNob3cobmV3VmFsKSB7XHJcblx0XHRcdGlmICghdGhpcy5wb3NpdGlvbiB8fCBKU09OLnN0cmluZ2lmeSh0aGlzLnBvc2l0aW9uKSA9PT0gJ3t9JykgcmV0dXJuO1xyXG5cdFx0XHRpZiAodGhpcy5hdXRvQ2xvc2UpIHJldHVyblxyXG5cdFx0XHRpZiAodGhpcy5pc0luQW5pbWF0aW9uKSByZXR1cm5cclxuXHRcdFx0aWYgKG5ld1ZhbCkge1xyXG5cdFx0XHRcdHRoaXMub3BlbigpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jbG9zZSgpXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0aWYgKHRoaXMuc3dpcGVhY3Rpb24uY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLnN3aXBlYWN0aW9uLmNoaWxkcmVuLnB1c2godGhpcylcclxuXHRcdH1cclxuXHR9LFxyXG5cdG1vdW50ZWQoKSB7XHJcblx0XHR0aGlzLmJveFNlbGVjdG9yID0gdGhpcy5nZXRFbCh0aGlzLiRyZWZzWydzZWxlY3Rvci1ib3gtaG9jayddKTtcclxuXHRcdHRoaXMuc2VsZWN0b3IgPSB0aGlzLmdldEVsKHRoaXMuJHJlZnNbJ3NlbGVjdG9yLWNvbnRlbnQtaG9jayddKTtcclxuXHRcdHRoaXMuYnV0dG9uU2VsZWN0b3IgPSB0aGlzLmdldEVsKHRoaXMuJHJlZnNbJ3NlbGVjdG9yLWJ1dHRvbi1ob2NrJ10pO1xyXG5cdFx0dGhpcy5wb3NpdGlvbiA9IHt9XHJcblx0XHR0aGlzLnggPSAwXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5nZXRTZWxlY3RvclF1ZXJ5KClcclxuXHRcdH0sIDIwMClcclxuXHR9LFxyXG5cdGJlZm9yZURlc3Ryb3koKSB7XHJcblx0XHRpZiAodGhpcy50aW1pbmcpIHtcclxuXHRcdFx0QmluZGluZ1gudW5iaW5kKHtcclxuXHRcdFx0XHR0b2tlbjogdGhpcy50aW1pbmcudG9rZW4sXHJcblx0XHRcdFx0ZXZlbnRUeXBlOiAndGltaW5nJ1xyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuZXZlbnRwYW4pIHtcclxuXHRcdFx0QmluZGluZ1gudW5iaW5kKHtcclxuXHRcdFx0XHR0b2tlbjogdGhpcy5ldmVudHBhbi50b2tlbixcclxuXHRcdFx0XHRldmVudFR5cGU6ICdwYW4nXHJcblx0XHRcdH0pXHJcblx0XHR9IFxyXG5cdFx0dGhpcy5zd2lwZWFjdGlvbi5jaGlsZHJlbi5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRpZiAoaXRlbSA9PT0gdGhpcykge1xyXG5cdFx0XHRcdHRoaXMuc3dpcGVhY3Rpb24uY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0b25DbGljayhpbmRleCwgaXRlbSkge1xyXG5cdFx0XHR0aGlzLiRlbWl0KCdjbGljaycsIHtcclxuXHRcdFx0XHRjb250ZW50OiBpdGVtLFxyXG5cdFx0XHRcdGluZGV4XHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0dG91Y2hzdGFydChlKSB7XHJcblx0XHRcdGlmICh0aGlzLmlzSW5BbmltYXRpb24pIHJldHVyblxyXG5cdFx0XHRpZiAodGhpcy5zdG9wKSByZXR1cm5cclxuXHRcdFx0dGhpcy5zdG9wID0gdHJ1ZVxyXG5cdFx0XHRpZiAodGhpcy5hdXRvQ2xvc2UpIHtcclxuXHRcdFx0XHR0aGlzLnN3aXBlYWN0aW9uLmNsb3NlT3RoZXIodGhpcylcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgZW5kV2lkdGggPSB0aGlzLnJpZ2h0XHJcblx0XHRcdGxldCBib3hTdGVwID0gYCh4KyR7dGhpcy54fSlgXHJcblx0XHRcdGxldCBwYWdlWCA9IGAke2JveFN0ZXB9PiAkey1lbmRXaWR0aH0gJiYgJHtib3hTdGVwfSA8IDA/JHtib3hTdGVwfTooeCske3RoaXMueH0gPCAwPyAkey1lbmRXaWR0aH06MClgXHJcblxyXG5cdFx0XHRsZXQgcHJvcHMgPSBbe1xyXG5cdFx0XHRcdGVsZW1lbnQ6IHRoaXMuc2VsZWN0b3IsXHJcblx0XHRcdFx0cHJvcGVydHk6ICd0cmFuc2Zvcm0udHJhbnNsYXRlWCcsXHJcblx0XHRcdFx0ZXhwcmVzc2lvbjogcGFnZVhcclxuXHRcdFx0fV1cclxuXHJcblx0XHRcdGxldCBsZWZ0ID0gMFxyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGxldCBidXR0b25TZWxlY3RvcnMgPSB0aGlzLmdldEVsKHRoaXMuJHJlZnNbJ2J1dHRvbi1ob2NrJ11baV0pO1xyXG5cdFx0XHRcdGlmICh0aGlzLmJ1dHRvbi5sZW5ndGggPT09IDAgfHwgIXRoaXMuYnV0dG9uW2ldIHx8ICF0aGlzLmJ1dHRvbltpXS53aWR0aCkgcmV0dXJuXHJcblx0XHRcdFx0bGV0IG1vdmVNaXggPSBlbmRXaWR0aCAtIGxlZnRcclxuXHRcdFx0XHRsZWZ0ICs9IHRoaXMuYnV0dG9uW2ldLndpZHRoXHJcblx0XHRcdFx0bGV0IHN0ZXAgPSBgKCR7dGhpcy54fSt4KS8ke2VuZFdpZHRofWBcclxuXHRcdFx0XHRsZXQgbW92ZVggPSBgKCR7c3RlcH0pICogJHttb3ZlTWl4fWBcclxuXHRcdFx0XHRsZXQgcGFnZUJ1dHRvblggPSBgJHttb3ZlWH0mJiAoeCske3RoaXMueH0gPiAkey1lbmRXaWR0aH0pPyR7bW92ZVh9OiR7LW1vdmVNaXh9YFxyXG5cdFx0XHRcdHByb3BzLnB1c2goe1xyXG5cdFx0XHRcdFx0ZWxlbWVudDogYnV0dG9uU2VsZWN0b3JzLFxyXG5cdFx0XHRcdFx0cHJvcGVydHk6ICd0cmFuc2Zvcm0udHJhbnNsYXRlWCcsXHJcblx0XHRcdFx0XHRleHByZXNzaW9uOiBwYWdlQnV0dG9uWFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuZXZlbnRwYW4gPSB0aGlzLl9iaW5kKHRoaXMuYm94U2VsZWN0b3IsIHByb3BzLCAncGFuJywgKGUpID0+IHtcclxuXHRcdFx0XHRpZiAoZS5zdGF0ZSA9PT0gJ2VuZCcpIHtcclxuXHRcdFx0XHRcdHRoaXMueCA9IGUuZGVsdGFYICsgdGhpcy54O1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMueCA8IC1lbmRXaWR0aCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnggPSAtZW5kV2lkdGhcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh0aGlzLnggPiAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMueCA9IDBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMuc3RvcCA9IGZhbHNlXHJcblx0XHRcdFx0XHR0aGlzLmJpbmRUaW1pbmcoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0dG91Y2hlbmQoZSkge1xyXG5cdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNvcGVuICYmICF0aGlzLmlzRHJhZyAmJiAhdGhpcy5pc0luQW5pbWF0aW9uKSB7XHJcblx0XHRcdFx0XHR0aGlzLmNsb3NlKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0YmluZFRpbWluZygpIHtcclxuXHRcdFx0aWYgKHRoaXMuaXNvcGVuKSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZlKHRoaXMueCwgLXRoaXMucmlnaHQpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZlKHRoaXMueCwgLTQwKVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW92ZShsZWZ0LCB2YWx1ZSkge1xyXG5cdFx0XHRpZiAobGVmdCA+PSB2YWx1ZSkge1xyXG5cdFx0XHRcdHRoaXMuY2xvc2UoKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMub3BlbigpXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvKipcclxuXHRcdCAqIOW8gOWQr3N3aXBlXHJcblx0XHQgKi9cclxuXHRcdG9wZW4oKSB7XHJcblx0XHRcdHRoaXMuYW5pbWF0aW9uKHRydWUpXHJcblx0XHR9LFxyXG5cdFx0LyoqXHJcblx0XHQgKiDlhbPpl61zd2lwZVxyXG5cdFx0ICovXHJcblx0XHRjbG9zZSgpIHtcclxuXHRcdFx0dGhpcy5hbmltYXRpb24oZmFsc2UpXHJcblx0XHR9LFxyXG5cdFx0LyoqXHJcblx0XHQgKiDlvIDlkK/lhbPpl63liqjnlLtcclxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlXHJcblx0XHQgKi9cclxuXHRcdGFuaW1hdGlvbih0eXBlKSB7XHJcblx0XHRcdHRoaXMuaXNEcmFnID0gdHJ1ZVxyXG5cdFx0XHRsZXQgZW5kV2lkdGggPSB0aGlzLnJpZ2h0XHJcblx0XHRcdGxldCB0aW1lID0gMjAwXHJcblx0XHRcdHRoaXMuaXNJbkFuaW1hdGlvbiA9IHRydWU7XHJcblxyXG5cdFx0XHRsZXQgZXhpdCA9IGB0PiR7dGltZX1gO1xyXG5cdFx0XHRsZXQgdHJhbnNsYXRlX3hfZXhwcmVzc2lvbiA9IGBlYXNlT3V0RXhwbyh0LCR7dGhpcy54fSwke3R5cGU/KC1lbmRXaWR0aC10aGlzLngpOigtdGhpcy54KX0sJHt0aW1lfSlgXHJcblx0XHRcdGxldCBwcm9wcyA9IFt7XHJcblx0XHRcdFx0ZWxlbWVudDogdGhpcy5zZWxlY3RvcixcclxuXHRcdFx0XHRwcm9wZXJ0eTogJ3RyYW5zZm9ybS50cmFuc2xhdGVYJyxcclxuXHRcdFx0XHRleHByZXNzaW9uOiB0cmFuc2xhdGVfeF9leHByZXNzaW9uXHJcblx0XHRcdH1dXHJcblxyXG5cdFx0XHRsZXQgbGVmdCA9IDBcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRsZXQgYnV0dG9uU2VsZWN0b3JzID0gdGhpcy5nZXRFbCh0aGlzLiRyZWZzWydidXR0b24taG9jayddW2ldKTtcclxuXHRcdFx0XHRpZiAodGhpcy5idXR0b24ubGVuZ3RoID09PSAwIHx8ICF0aGlzLmJ1dHRvbltpXSB8fCAhdGhpcy5idXR0b25baV0ud2lkdGgpIHJldHVyblxyXG5cdFx0XHRcdGxldCBtb3ZlTWl4ID0gZW5kV2lkdGggLSBsZWZ0XHJcblx0XHRcdFx0bGVmdCArPSB0aGlzLmJ1dHRvbltpXS53aWR0aFxyXG5cdFx0XHRcdGxldCBzdGVwID0gYCR7dGhpcy54fS8ke2VuZFdpZHRofWBcclxuXHRcdFx0XHRsZXQgbW92ZVggPSBgKCR7c3RlcH0pICogJHttb3ZlTWl4fWBcclxuXHRcdFx0XHRsZXQgcGFnZUJ1dHRvblggPSBgZWFzZU91dEV4cG8odCwke21vdmVYfSwke3R5cGUgPyAtbW92ZU1peCArICctJyArIG1vdmVYOiAwICsgJy0nICsgbW92ZVh9LCR7dGltZX0pYFxyXG5cdFx0XHRcdHByb3BzLnB1c2goe1xyXG5cdFx0XHRcdFx0ZWxlbWVudDogYnV0dG9uU2VsZWN0b3JzLFxyXG5cdFx0XHRcdFx0cHJvcGVydHk6ICd0cmFuc2Zvcm0udHJhbnNsYXRlWCcsXHJcblx0XHRcdFx0XHRleHByZXNzaW9uOiBwYWdlQnV0dG9uWFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMudGltaW5nID0gQmluZGluZ1guYmluZCh7XHJcblx0XHRcdFx0ZXZlbnRUeXBlOiAndGltaW5nJyxcclxuXHRcdFx0XHRleGl0RXhwcmVzc2lvbjogZXhpdCxcclxuXHRcdFx0XHRwcm9wczogcHJvcHNcclxuXHRcdFx0fSwgKGUpID0+IHtcclxuXHRcdFx0XHRpZiAoZS5zdGF0ZSA9PT0gJ2VuZCcgfHwgZS5zdGF0ZSA9PT0gJ2V4aXQnKSB7XHJcblx0XHRcdFx0XHR0aGlzLnggPSB0eXBlID8gLWVuZFdpZHRoIDogMFxyXG5cdFx0XHRcdFx0dGhpcy5pc0luQW5pbWF0aW9uID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5pc29wZW4gPSB0aGlzLmlzb3BlbiB8fCBmYWxzZVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuaXNvcGVuICE9PSB0eXBlKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsIHR5cGUpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLmlzb3BlbiA9IHR5cGVcclxuXHRcdFx0XHRcdHRoaXMuaXNEcmFnID0gZmFsc2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdC8qKlxyXG5cdFx0ICog57uR5a6aICBCaW5kaW5nWFxyXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IGFuY2hvclxyXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gZm5cclxuXHRcdCAqL1xyXG5cdFx0X2JpbmQoYW5jaG9yLCBwcm9wcywgZXZlbnRUeXBlLCBmbikge1xyXG5cdFx0XHRyZXR1cm4gQmluZGluZ1guYmluZCh7XHJcblx0XHRcdFx0YW5jaG9yLFxyXG5cdFx0XHRcdGV2ZW50VHlwZSxcclxuXHRcdFx0XHRwcm9wc1xyXG5cdFx0XHR9LCAoZSkgPT4ge1xyXG5cdFx0XHRcdHR5cGVvZihmbikgPT09ICdmdW5jdGlvbicgJiYgZm4oZSlcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0LyoqXHJcblx0XHQgKiDojrflj5ZyZWZcclxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBlbFxyXG5cdFx0ICovXHJcblx0XHRnZXRFbChlbCkge1xyXG5cdFx0XHRyZXR1cm4gZWwucmVmXHJcblx0XHR9LFxyXG5cdFx0LyoqXHJcblx0XHQgKiDojrflj5boioLngrnkv6Hmga9cclxuXHRcdCAqL1xyXG5cdFx0Z2V0U2VsZWN0b3JRdWVyeSgpIHtcclxuXHRcdFx0ZG9tLmdldENvbXBvbmVudFJlY3QodGhpcy4kcmVmc1snc2VsZWN0b3ItY29udGVudC1ob2NrJ10sIChkYXRhKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMucG9zaXRpb24uY29udGVudCkgcmV0dXJuXHJcblx0XHRcdFx0dGhpcy5wb3NpdGlvbi5jb250ZW50ID0gZGF0YS5zaXplXHJcblx0XHRcdH0pXHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0ZG9tLmdldENvbXBvbmVudFJlY3QodGhpcy4kcmVmc1snYnV0dG9uLWhvY2snXVtpXSwgKGRhdGEpID0+IHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5idXR0b24pIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5idXR0b24gPSBbXVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5sZW5ndGggPT09IHRoaXMuYnV0dG9uLmxlbmd0aCkgcmV0dXJuXHJcblx0XHRcdFx0XHR0aGlzLmJ1dHRvbi5wdXNoKGRhdGEuc2l6ZSlcclxuXHRcdFx0XHRcdHRoaXMucmlnaHQgKz0gZGF0YS5zaXplLndpZHRoXHJcblx0XHRcdFx0XHRpZiAodGhpcy5hdXRvQ2xvc2UpIHJldHVyblxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuc2hvdykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm9wZW4oKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc3dpcGUtYWN0aW9uLWl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2ZiZGE0Y2Mmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXN3aXBlLWFjdGlvbi1pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdmYmRhNGNjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidW5pLXN3aXBlXCI6IHtcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcbiAgfSxcbiAgXCJ1bmktc3dpcGUtYm94XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcIndpZHRoXCI6IDEwMFxuICB9LFxuICBcInVuaS1zd2lwZV9jb250ZW50XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcInVuaS1zd2lwZV9tb3ZlLWJveFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJ1bmktc3dpcGVfYm94XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZvbnRTaXplXCI6IFwiMTRcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInVuaS1zd2lwZV9idXR0b24tZ3JvdXBcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogMCxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcInVuaS1zd2lwZV9idXR0b25cIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMFwiXG4gIH0sXG4gIFwidW5pLXN3aXBlX2J1dHRvbi10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTRcIlxuICB9LFxuICBcIkBUUkFOU0lUSU9OXCI6IHtcbiAgICBcImFuaVwiOiB7XG4gICAgICBcInByb3BlcnR5XCI6IFwidHJhbnNmb3JtXCIsXG4gICAgICBcImR1cmF0aW9uXCI6IDMwMCxcbiAgICAgIFwidGltaW5nRnVuY3Rpb25cIjogXCJjdWJpYy1iZXppZXIoMC4xNjUsMC44NCwwLjQ0LDEpXCJcbiAgICB9XG4gIH0sXG4gIFwiYW5pXCI6IHtcbiAgICBcInRyYW5zaXRpb25Qcm9wZXJ0eVwiOiBcInRyYW5zZm9ybVwiLFxuICAgIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IDMwMCxcbiAgICBcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiOiBcImN1YmljLWJlemllcigwLjE2NSwwLjg0LDAuNDQsMSlcIlxuICB9XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N3aXBlLWFjdGlvbi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zd2lwZS1hY3Rpb24ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHVuaS1zZWN0aW9uIHRpdGxlPVwi5Z+65pys55So5rOVXCIgdHlwZT1cImxpbmVcIj48L3VuaS1zZWN0aW9uPlxyXG5cdFx0PHVuaS1zd2lwZS1hY3Rpb24+XHJcblx0XHRcdDx1bmktc3dpcGUtYWN0aW9uLWl0ZW0gOm9wdGlvbnM9XCJvcHRpb25zMVwiIEBjbGljaz1cImJpbmRDbGlja1wiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY29udFwiPlN3aXBlQWN0aW9uIOWfuuehgOS9v+eUqOWcuuaZrzwvdGV4dD5cclxuXHRcdFx0PC91bmktc3dpcGUtYWN0aW9uLWl0ZW0+XHJcblx0XHQ8L3VuaS1zd2lwZS1hY3Rpb24+XHJcblx0XHQ8dW5pLXNlY3Rpb24gdGl0bGU9XCLnpoHmraLmu5HliqhcIiB0eXBlPVwibGluZVwiPjwvdW5pLXNlY3Rpb24+XHJcblx0XHQ8dW5pLXN3aXBlLWFjdGlvbj5cclxuXHRcdFx0PHVuaS1zd2lwZS1hY3Rpb24taXRlbSA6ZGlzYWJsZWQ9XCJ0cnVlXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJjb250XCI+U3dpcGVBY3Rpb24g56aB5q2i5ruR5Yqo5bGV56S6PC90ZXh0PlxyXG5cdFx0XHQ8L3VuaS1zd2lwZS1hY3Rpb24taXRlbT5cclxuXHRcdDwvdW5pLXN3aXBlLWFjdGlvbj5cclxuXHRcdDx1bmktc2VjdGlvbiB0aXRsZT1cIuS9v+eUqOWPmOmHj+aOp+WItuW8gOWFs1wiIHR5cGU9XCJsaW5lXCI+PC91bmktc2VjdGlvbj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZXhhbXBsZS1ib2R5XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYnV0dG9uXCIgQGNsaWNrPVwic2V0T3BlbmVkXCI+PHRleHQgY2xhc3M9XCJidXR0b24tdGV4dFwiPuW9k+WJjeeKtuaAge+8mnt7IGlzT3BlbmVkID8gJ+W8gCcgOiAn5YWzJyB9fTwvdGV4dD48L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dW5pLXN3aXBlLWFjdGlvbj5cclxuXHRcdFx0PHVuaS1zd2lwZS1hY3Rpb24taXRlbSA6b3B0aW9ucz1cIm9wdGlvbnMyXCIgOnNob3c9XCJpc09wZW5lZFwiIDphdXRvLWNsb3NlPVwiZmFsc2VcIiBAY2hhbmdlPVwiY2hhbmdlXCIgQGNsaWNrPVwiYmluZENsaWNrXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJjb250XCI+5L2/55So5Y+Y6YeP5o6n5Yi2U3dpcGVBY3Rpb27nmoTlvIDlkK/nirbmgIE8L3RleHQ+XHJcblx0XHRcdDwvdW5pLXN3aXBlLWFjdGlvbi1pdGVtPlxyXG5cdFx0PC91bmktc3dpcGUtYWN0aW9uPlxyXG5cclxuXHRcdDx1bmktc2VjdGlvbiB0aXRsZT1cInN3aXBlLWFjdGlvbiDliJfooahcIiB0eXBlPVwibGluZVwiPjwvdW5pLXNlY3Rpb24+XHJcblx0XHQ8dW5pLXN3aXBlLWFjdGlvbj5cclxuXHRcdFx0PHVuaS1zd2lwZS1hY3Rpb24taXRlbSB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBzd2lwZUxpc3RcIiA6b3B0aW9ucz1cIml0ZW0ub3B0aW9uc1wiIDprZXk9XCJpdGVtLmlkXCIgQGNoYW5nZT1cInN3aXBlQ2hhbmdlXCIgQGNsaWNrPVwic3dpcGVDbGljaygkZXZlbnQsaW5kZXgpXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJjb250XCI+e3tpdGVtLmNvbnRlbnR9fTwvdGV4dD5cclxuXHRcdFx0PC91bmktc3dpcGUtYWN0aW9uLWl0ZW0+XHJcblx0XHQ8L3VuaS1zd2lwZS1hY3Rpb24+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgdW5pU2VjdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlJ1xyXG5cdGltcG9ydCB1bmlTd2lwZUFjdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvdW5pLXN3aXBlLWFjdGlvbi91bmktc3dpcGUtYWN0aW9uLnZ1ZSdcclxuXHRpbXBvcnQgdW5pU3dpcGVBY3Rpb25JdGVtIGZyb20gJ0AvY29tcG9uZW50cy91bmktc3dpcGUtYWN0aW9uLWl0ZW0vdW5pLXN3aXBlLWFjdGlvbi1pdGVtLnZ1ZSdcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdHVuaVNlY3Rpb24sXHJcblx0XHRcdHVuaVN3aXBlQWN0aW9uLFxyXG5cdFx0XHR1bmlTd2lwZUFjdGlvbkl0ZW1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlzT3BlbmVkOiBmYWxzZSxcclxuXHRcdFx0XHRvcHRpb25zMTogW3tcclxuXHRcdFx0XHRcdHRleHQ6ICflj5bmtojnva7pobYnXHJcblx0XHRcdFx0fV0sXHJcblx0XHRcdFx0b3B0aW9uczI6IFt7XHJcblx0XHRcdFx0XHR0ZXh0OiAn5Y+W5raIJyxcclxuXHRcdFx0XHRcdHN0eWxlOiB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJyMwMDdhZmYnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0dGV4dDogJ+ehruiupCcsXHJcblx0XHRcdFx0XHRzdHlsZToge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZGQ1MjRkJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1dLFxyXG5cdFx0XHRcdHN3aXBlTGlzdDogW3tcclxuXHRcdFx0XHRcdG9wdGlvbnM6IFt7XHJcblx0XHRcdFx0XHRcdHRleHQ6ICfmt7vliqAnLFxyXG5cdFx0XHRcdFx0XHRzdHlsZToge1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYigyNTUsNTgsNDkpJ1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XSxcclxuXHRcdFx0XHRcdGlkOiAwLFxyXG5cdFx0XHRcdFx0Y29udGVudDogJ2l0ZW0xJ1xyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdFx0b3B0aW9uczogW3tcclxuXHRcdFx0XHRcdFx0dGV4dDogJ+e9rumhtidcclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJ+WIoOmZpCcsXHJcblx0XHRcdFx0XHRcdHN0eWxlOiB7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAncmdiKDI1NSw1OCw0OSknXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1dLFxyXG5cdFx0XHRcdFx0Y29udGVudDogJ2l0ZW0yJ1xyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdGlkOiAyLFxyXG5cdFx0XHRcdFx0b3B0aW9uczogW3tcclxuXHRcdFx0XHRcdFx0dGV4dDogJ+e9rumhtidcclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJ+agh+iusOS4uuW3suivuycsXHJcblx0XHRcdFx0XHRcdHN0eWxlOiB7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAncmdiKDI1NCwxNTYsMSknXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJ+WIoOmZpCcsXHJcblx0XHRcdFx0XHRcdHN0eWxlOiB7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAncmdiKDI1NSw1OCw0OSknXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1dLFxyXG5cdFx0XHRcdFx0Y29udGVudDogJ2l0ZW0zJ1xyXG5cdFx0XHRcdH1dXHJcblx0XHRcdFx0Ly8gb3B0aW9uczM6IFt7XHJcblx0XHRcdFx0Ly8gXHR0ZXh0OiAn572u6aG2J1xyXG5cdFx0XHRcdC8vIH0sIHtcclxuXHRcdFx0XHQvLyBcdHRleHQ6ICfmoIforrDkuLrlt7Lor7snLFxyXG5cdFx0XHRcdC8vIFx0c3R5bGU6IHtcclxuXHRcdFx0XHQvLyBcdFx0YmFja2dyb3VuZENvbG9yOiAncmdiKDI1NCwxNTYsMSknXHJcblx0XHRcdFx0Ly8gXHR9XHJcblx0XHRcdFx0Ly8gfSwge1xyXG5cdFx0XHRcdC8vIFx0dGV4dDogJ+WIoOmZpCcsXHJcblx0XHRcdFx0Ly8gXHRzdHlsZToge1xyXG5cdFx0XHRcdC8vIFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjU1LDU4LDQ5KSdcclxuXHRcdFx0XHQvLyBcdH1cclxuXHRcdFx0XHQvLyB9XVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25SZWFkeSgpIHtcclxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuaXNPcGVuZWQgPSB0cnVlXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRiaW5kQ2xpY2soZSkge1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6IGDngrnlh7vkuoYke2UuY29udGVudC50ZXh0feaMiemSrmAsXHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXRPcGVuZWQoKSB7XHJcblx0XHRcdFx0dGhpcy5pc09wZW5lZCA9ICF0aGlzLmlzT3BlbmVkXHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYW5nZShlKSB7XHJcblx0XHRcdFx0dGhpcy5pc09wZW5lZCA9IGVcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn6L+U5Zue77yaJywgZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN3aXBlQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn6L+U5Zue77yaJywgZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN3aXBlQ2xpY2soZSwgaW5kZXgpIHtcclxuXHRcdFx0XHRsZXQge1xyXG5cdFx0XHRcdFx0Y29udGVudFxyXG5cdFx0XHRcdH0gPSBlXHJcblx0XHRcdFx0aWYgKGNvbnRlbnQudGV4dCA9PT0gJ+WIoOmZpCcpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+aPkOekuicsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfmmK/lkKbliKDpmaQnLFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnN3aXBlTGlzdC5zcGxpY2UoaW5kZXgsIDEpXHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn55So5oi354K55Ye75Y+W5raIJyk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGNvbnRlbnQudGV4dCA9PT0gJ+a3u+WKoCcpIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnN3aXBlTGlzdC5sZW5ndGggPCAxMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN3aXBlTGlzdC5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRpZDogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcblx0XHRcdFx0XHRcdFx0b3B0aW9uczogW3tcclxuXHRcdFx0XHRcdFx0XHRcdHRleHQ6ICfnva7pobYnXHJcblx0XHRcdFx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogJ+agh+iusOS4uuW3suivuycsXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjU0LDE1NiwxKSdcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiAn5Yig6ZmkJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYigyNTUsNTgsNDkpJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1dLFxyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfmlrDlop4nXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBg5re75Yqg5LqG5LiA5p2h5pWw5o2uYCxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBg5pyA5aSa5re75Yqg5Y2B5p2h5pWw5o2uYCxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBg54K55Ye75LqGJHtlLmNvbnRlbnQudGV4dH3mjInpkq5gLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0Lyog5aS05p2h5bCP56iL5bqP57uE5Lu25YaF5LiN6IO95byV5YWl5a2X5L2TICovXHJcblx0LyogI2lmZGVmIE1QLVRPVVRJQU8gKi9cclxuXHRAZm9udC1mYWNlIHtcclxuXHRcdGZvbnQtZmFtaWx5OiB1bmlpY29ucztcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0XHRzcmM6IHVybCgnfkAvc3RhdGljL3VuaS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcblx0fVxyXG5cclxuXHQvKiAjZW5kaWYgKi9cclxuXHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdHBhZ2Uge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VmZWZmNDtcclxuXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0fVxyXG5cclxuXHR2aWV3IHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG5cdH1cclxuXHJcblx0LmV4YW1wbGUge1xyXG5cdFx0cGFkZGluZzogMCAxNXB4IDE1cHg7XHJcblx0fVxyXG5cclxuXHQuZXhhbXBsZS1pbmZvIHtcclxuXHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0XHRjb2xvcjogIzNiNDE0NDtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblx0fVxyXG5cclxuXHQuZXhhbXBsZS1ib2R5IHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcblx0LmV4YW1wbGUge1xyXG5cdFx0cGFkZGluZzogMCAxNXB4O1xyXG5cdH1cclxuXHJcblx0LmV4YW1wbGUtaW5mbyB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHRcdGNvbG9yOiAjM2I0MTQ0O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdH1cclxuXHJcblx0LmV4YW1wbGUtaW5mby10ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0Y29sb3I6ICMzYjQxNDQ7XHJcblx0fVxyXG5cclxuXHJcblx0LmV4YW1wbGUtYm9keSB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0fVxyXG5cclxuXHQud29yZC1idG4td2hpdGUge1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQud29yZC1idG4ge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRcdGhlaWdodDogNDhweDtcclxuXHRcdG1hcmdpbjogMTVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7XHJcblx0fVxyXG5cclxuXHQud29yZC1idG4tLWhvdmVyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM0Y2EyZmY7XHJcblx0fVxyXG5cclxuXHJcblx0LmNvbnQge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGhlaWdodDogNDVweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG5cdFx0cGFkZGluZzogMCAxNXB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICNGNUY1RjU7XHJcblx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcblx0XHRib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuXHR9XHJcblxyXG5cdC5leGFtcGxlLWJvZHkge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMTBweCAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHR9XHJcblxyXG5cdC5idXR0b24ge1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjZTVlNWU1O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci13aWR0aDogMXB4O1xyXG5cdFx0cGFkZGluZzogNHB4IDhweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHR9XHJcblxyXG5cdC5idXR0b24tdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0fVxyXG48L3N0eWxlPiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3dpcGUtYWN0aW9uLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N3aXBlLWFjdGlvbi5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImV4YW1wbGVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTVcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTVcIlxuICB9LFxuICBcImV4YW1wbGUtaW5mb1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE1XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTVcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTVcIixcbiAgICBcImNvbG9yXCI6IFwiIzNiNDE0NFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxNFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJleGFtcGxlLWluZm8tdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE0XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMjBcIixcbiAgICBcImNvbG9yXCI6IFwiIzNiNDE0NFwiXG4gIH0sXG4gIFwiZXhhbXBsZS1ib2R5XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwid29yZC1idG4td2hpdGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxOFwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgXCJ3b3JkLWJ0blwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNlwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjE1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjE1XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3QUZGXCJcbiAgfSxcbiAgXCJ3b3JkLWJ0bi0taG92ZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzRjYTJmZlwiXG4gIH0sXG4gIFwiY29udFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJoZWlnaHRcIjogXCI0NVwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjQ1XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNVwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNVwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxNVwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjRjVGNUY1XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIlxuICB9LFxuICBcImJ1dHRvblwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNlNWU1ZTVcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IFwiMVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjRcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjRcIlxuICB9LFxuICBcImJ1dHRvbi10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTVcIlxuICB9XG59IiwiZnVuY3Rpb24gdHlwb2YgKHYpIHtcbiAgdmFyIHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSlcbn1cblxuZnVuY3Rpb24gaXNEZWJ1Z01vZGUgKCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICByZXR1cm4gdHlwZW9mIF9fY2hhbm5lbElkX18gPT09ICdzdHJpbmcnICYmIF9fY2hhbm5lbElkX19cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZyAodHlwZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV1cbiAgfVxuICBjb25zb2xlW3R5cGVdLmFwcGx5KGNvbnNvbGUsIGFyZ3MpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdExvZyAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV1cbiAgfVxuICB2YXIgdHlwZSA9IGFyZ3Muc2hpZnQoKVxuICBpZiAoaXNEZWJ1Z01vZGUoKSkge1xuICAgIGFyZ3MucHVzaChhcmdzLnBvcCgpLnJlcGxhY2UoJ2F0ICcsICd1bmktYXBwOi8vLycpKVxuICAgIHJldHVybiBjb25zb2xlW3R5cGVdLmFwcGx5KGNvbnNvbGUsIGFyZ3MpXG4gIH1cblxuICB2YXIgbXNncyA9IGFyZ3MubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodikudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IG9iamVjdF0nIHx8IHR5cGUgPT09ICdbb2JqZWN0IGFycmF5XScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHYgPSAnLS0tQkVHSU46SlNPTi0tLScgKyBKU09OLnN0cmluZ2lmeSh2KSArICctLS1FTkQ6SlNPTi0tLSdcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdiA9ICdbb2JqZWN0IG9iamVjdF0nXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2ID09PSBudWxsKSB7XG4gICAgICAgIHYgPSAnLS0tTlVMTC0tLSdcbiAgICAgIH0gZWxzZSBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHYgPSAnLS0tVU5ERUZJTkVELS0tJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHZUeXBlID0gdHlwb2YodikudG9VcHBlckNhc2UoKVxuXG4gICAgICAgIGlmICh2VHlwZSA9PT0gJ05VTUJFUicgfHwgdlR5cGUgPT09ICdCT09MRUFOJykge1xuICAgICAgICAgIHYgPSAnLS0tQkVHSU46JyArIHZUeXBlICsgJy0tLScgKyB2ICsgJy0tLUVORDonICsgdlR5cGUgKyAnLS0tJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHYgPSBTdHJpbmcodilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2XG4gIH0pXG4gIHZhciBtc2cgPSAnJ1xuXG4gIGlmIChtc2dzLmxlbmd0aCA+IDEpIHtcbiAgICB2YXIgbGFzdE1zZyA9IG1zZ3MucG9wKClcbiAgICBtc2cgPSBtc2dzLmpvaW4oJy0tLUNPTU1BLS0tJylcblxuICAgIGlmIChsYXN0TXNnLmluZGV4T2YoJyBhdCAnKSA9PT0gMCkge1xuICAgICAgbXNnICs9IGxhc3RNc2dcbiAgICB9IGVsc2Uge1xuICAgICAgbXNnICs9ICctLS1DT01NQS0tLScgKyBsYXN0TXNnXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1zZyA9IG1zZ3NbMF1cbiAgfVxuXG4gIGNvbnNvbGVbdHlwZV0obXNnKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==