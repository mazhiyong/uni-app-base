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
/******/ 	return __webpack_require__(__webpack_require__.s = 210);
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

/***/ 210:
/*!******************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/main.js?{"page":"pages%2FextUI%2Ftransition%2Ftransition"} ***!
  \******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_extUI_transition_transition_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/extUI/transition/transition.nvue?mpType=page */ 211);

        
        
        
        _pages_extUI_transition_transition_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].mpType = 'page'
        _pages_extUI_transition_transition_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].route = 'pages/extUI/transition/transition'
        _pages_extUI_transition_transition_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].el = '#root'
        new Vue(_pages_extUI_transition_transition_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"])
        

/***/ }),

/***/ 211:
/*!**********************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/pages/extUI/transition/transition.nvue?mpType=page ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transition_nvue_vue_type_template_id_fc1e2d18_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition.nvue?vue&type=template&id=fc1e2d18&mpType=page */ 212);
/* harmony import */ var _transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition.nvue?vue&type=script&lang=js&mpType=page */ 222);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./transition.nvue?vue&type=style&index=0&lang=css&mpType=page */ 224).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./transition.nvue?vue&type=style&index=0&lang=css&mpType=page */ 224).default)
            }

}

/* normalize component */

var component = Object(_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _transition_nvue_vue_type_template_id_fc1e2d18_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _transition_nvue_vue_type_template_id_fc1e2d18_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "1d734216",
  false,
  _transition_nvue_vue_type_template_id_fc1e2d18_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/uni-app/StudyUniApp2/pages/extUI/transition/transition.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 212:
/*!****************************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/pages/extUI/transition/transition.nvue?vue&type=template&id=fc1e2d18&mpType=page ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_template_id_fc1e2d18_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./transition.nvue?vue&type=template&id=fc1e2d18&mpType=page */ 213);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_template_id_fc1e2d18_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_template_id_fc1e2d18_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_template_id_fc1e2d18_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_template_id_fc1e2d18_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 213:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/pages/extUI/transition/transition.nvue?vue&type=template&id=fc1e2d18&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  uniTransition: __webpack_require__(/*! @/components/uni-transition/uni-transition.vue */ 214)
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
          _c("u-text", { staticClass: ["example-info"] }, [
            _vm._v(
              "过渡动画，通常用于元素的过渡效果，例如淡隐淡出效果，遮罩层的效果、放大缩小的效果等"
            )
          ]),
          _c("uni-section", { attrs: { title: "基础过渡动画", type: "line" } }),
          _c(
            "view",
            { staticClass: ["example-body"] },
            [
              _c(
                "button",
                {
                  staticClass: ["transition-button"],
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.open(["fade"])
                    }
                  }
                },
                [_vm._v("fade")]
              ),
              _c(
                "button",
                {
                  staticClass: ["transition-button"],
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.open(["slide-top"])
                    }
                  }
                },
                [_vm._v("slide-top")]
              ),
              _c(
                "button",
                {
                  staticClass: ["transition-button"],
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.open(["slide-left"])
                    }
                  }
                },
                [_vm._v("slide-left")]
              ),
              _c(
                "button",
                {
                  staticClass: ["transition-button"],
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.open(["slide-right"])
                    }
                  }
                },
                [_vm._v("slide-right")]
              ),
              _c(
                "button",
                {
                  staticClass: ["transition-button"],
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.open(["slide-bottom"])
                    }
                  }
                },
                [_vm._v("slide-bottom")]
              ),
              _c(
                "button",
                {
                  staticClass: ["transition-button"],
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.open(["zoom-in", "fade"])
                    }
                  }
                },
                [_vm._v("zoom-in")]
              ),
              _c(
                "button",
                {
                  staticClass: ["transition-button"],
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.open(["zoom-out", "fade"])
                    }
                  }
                },
                [_vm._v("zoom-out")]
              )
            ],
            1
          ),
          _c("uni-section", { attrs: { title: "组合过渡动画", type: "line" } }),
          _c(
            "view",
            { staticClass: ["example-body"] },
            [
              _c(
                "button",
                {
                  staticClass: ["transition-button"],
                  attrs: { type: "primary" },
                  on: { click: _vm.mask }
                },
                [_vm._v("透明遮罩层")]
              ),
              _c(
                "button",
                {
                  staticClass: ["transition-button"],
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.open(["fade", "zoom-out", "slide-top"])
                    }
                  }
                },
                [_vm._v("组合动画示例一")]
              ),
              _c(
                "button",
                {
                  staticClass: ["transition-button"],
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.open(["zoom-in", "slide-bottom", "fade"])
                    }
                  }
                },
                [_vm._v("组合动画示例二")]
              ),
              _c(
                "button",
                {
                  staticClass: ["transition-button"],
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.open(["slide-left", "slide-top", "fade"])
                    }
                  }
                },
                [_vm._v("组合动画示例三")]
              )
            ],
            1
          ),
          _c("uni-transition", {
            attrs: {
              modeClass: ["fade"],
              styles: _vm.maskClass,
              show: _vm.show
            },
            on: { click: _vm.onTap }
          }),
          _c(
            "uni-transition",
            {
              attrs: {
                duration: 500,
                modeClass: _vm.modeClass,
                styles: _vm.transfromClass,
                show: _vm.transShow
              },
              on: { click: _vm.onTap, change: _vm.change }
            },
            [_c("u-text", { staticClass: ["box"] }, [_vm._v("Test")])]
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

/***/ 214:
/*!****************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-transition/uni-transition.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_transition_vue_vue_type_template_id_b3c95e54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=template&id=b3c95e54&scoped=true& */ 215);
/* harmony import */ var _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=script&lang=js& */ 217);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-transition.vue?vue&type=style&index=0&id=b3c95e54&scoped=true&lang=css& */ 220).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-transition.vue?vue&type=style&index=0&id=b3c95e54&scoped=true&lang=css& */ 220).default)
            }

}

/* normalize component */

var component = Object(_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_transition_vue_vue_type_template_id_b3c95e54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_transition_vue_vue_type_template_id_b3c95e54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b3c95e54",
  "160292ea",
  false,
  _uni_transition_vue_vue_type_template_id_b3c95e54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "E:/uni-app/StudyUniApp2/components/uni-transition/uni-transition.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 215:
/*!***********************************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-transition/uni-transition.vue?vue&type=template&id=b3c95e54&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_b3c95e54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=template&id=b3c95e54&scoped=true& */ 216);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_b3c95e54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_b3c95e54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_b3c95e54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_b3c95e54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 216:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/components/uni-transition/uni-transition.vue?vue&type=template&id=b3c95e54&scoped=true& ***!
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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isShow
    ? _c(
        "view",
        {
          ref: "ani",
          staticClass: ["uni-transition"],
          class: [_vm.ani.in],
          style: "transform:" + _vm.transform + ";" + _vm.stylesObject,
          on: { click: _vm.change }
        },
        [_vm._t("default")],
        2
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 217:
/*!*****************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=script&lang=js& */ 218);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 218:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
//
//
//
//
//


var animation = __webpack_provided_uni_dot_requireNativePlugin('animation');

/**
                                                       * Transition 过渡动画
                                                       * @description 简单过渡动画组件
                                                       * @tutorial https://ext.dcloud.net.cn/plugin?id=985
                                                       * @property {Boolean} show = [false|true] 控制组件显示或隐藏
                                                       * @property {Array} modeClass = [fade|slide-top|slide-right|slide-bottom|slide-left|zoom-in|zoom-out] 过渡动画类型
                                                       *  @value fade 渐隐渐出过渡
                                                       *  @value slide-top 由上至下过渡
                                                       *  @value slide-right 由右至左过渡
                                                       *  @value slide-bottom 由下至上过渡
                                                       *  @value slide-left 由左至右过渡
                                                       *  @value zoom-in 由小到大过渡
                                                       *  @value zoom-out 由大到小过渡
                                                       * @property {Number} duration 过渡动画持续时间
                                                       * @property {Object} styles 组件样式，同 css 样式，注意带’-‘连接符的属性需要使用小驼峰写法如：`backgroundColor:red`
                                                       */var _default2 =
{
  name: 'uniTransition',
  props: {
    show: {
      type: Boolean,
      default: false },

    modeClass: {
      type: Array,
      default: function _default() {
        return [];
      } },

    duration: {
      type: Number,
      default: 300 },

    styles: {
      type: Object,
      default: function _default() {
        return {};
      } } },


  data: function data() {
    return {
      isShow: false,
      transform: '',
      ani: {
        in: '',
        active: '' } };


  },
  watch: {
    show: {
      handler: function handler(newVal) {
        if (newVal) {
          this.open();
        } else {
          this.close();
        }
      },
      immediate: true } },


  computed: {
    stylesObject: function stylesObject() {
      var styles = _objectSpread({},
      this.styles, {
        'transition-duration': this.duration / 1000 + 's' });

      var transfrom = '';
      for (var i in styles) {
        var line = this.toLine(i);
        transfrom += line + ':' + styles[i] + ';';
      }
      return transfrom;
    } },

  created: function created() {
    // this.timer = null
    // this.nextTick = (time = 50) => new Promise(resolve => {
    // 	clearTimeout(this.timer)
    // 	this.timer = setTimeout(resolve, time)
    // 	return this.timer
    // });
  },
  methods: {
    change: function change() {
      this.$emit('click', {
        detail: this.isShow });

    },
    open: function open() {var _this = this;
      clearTimeout(this.timer);
      this.isShow = true;
      this.transform = '';
      this.ani.in = '';
      for (var i in this.getTranfrom(false)) {
        if (i === 'opacity') {
          this.ani.in = 'fade-in';
        } else {
          this.transform += "".concat(this.getTranfrom(false)[i], " ");
        }
      }
      this.$nextTick(function () {
        setTimeout(function () {
          _this._animation(true);
        }, 50);
      });

    },
    close: function close(type) {
      clearTimeout(this.timer);
      this._animation(false);
    },
    _animation: function _animation(type) {var _this2 = this;
      var styles = this.getTranfrom(type);

      if (!this.$refs['ani']) return;
      animation.transition(this.$refs['ani'].ref, {
        styles: styles,
        duration: this.duration, //ms
        timingFunction: 'ease',
        needLayout: false,
        delay: 0 //ms
      }, function () {
        if (!type) {
          _this2.isShow = false;
        }
        _this2.$emit('change', {
          detail: _this2.isShow });

      });





















    },
    getTranfrom: function getTranfrom(type) {
      var styles = {
        transform: '' };

      this.modeClass.forEach(function (mode) {
        switch (mode) {
          case 'fade':
            styles.opacity = type ? 1 : 0;
            break;
          case 'slide-top':
            styles.transform += "translateY(".concat(type ? '0' : '-100%', ") ");
            break;
          case 'slide-right':
            styles.transform += "translateX(".concat(type ? '0' : '100%', ") ");
            break;
          case 'slide-bottom':
            styles.transform += "translateY(".concat(type ? '0' : '100%', ") ");
            break;
          case 'slide-left':
            styles.transform += "translateX(".concat(type ? '0' : '-100%', ") ");
            break;
          case 'zoom-in':
            styles.transform += "scale(".concat(type ? 1 : 0.8, ") ");
            break;
          case 'zoom-out':
            styles.transform += "scale(".concat(type ? 1 : 1.2, ") ");
            break;}

      });
      return styles;
    },
    _modeClassArr: function _modeClassArr(type) {
      var mode = this.modeClass;
      if (typeof mode !== "string") {
        var modestr = '';
        mode.forEach(function (item) {
          modestr += item + '-' + type + ',';
        });
        return modestr.substr(0, modestr.length - 1);
      } else {
        return mode + '-' + type;
      }
    },
    // getEl(el) {
    // 	console.log(el || el.ref || null);
    // 	return el || el.ref || null
    // },
    toLine: function toLine(name) {
      return name.replace(/([A-Z])/g, "-$1").toLowerCase();
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 219)["default"]))

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

/***/ 220:
/*!*************************************************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/components/uni-transition/uni-transition.vue?vue&type=style&index=0&id=b3c95e54&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_id_b3c95e54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=style&index=0&id=b3c95e54&scoped=true&lang=css& */ 221);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_id_b3c95e54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_id_b3c95e54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_id_b3c95e54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_id_b3c95e54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_id_b3c95e54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 221:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/components/uni-transition/uni-transition.vue?vue&type=style&index=0&id=b3c95e54&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@TRANSITION": {
    "uni-transition": {
      "timingFunction": "ease",
      "duration": 300,
      "property": "transform,opacity"
    }
  },
  "uni-transition": {
    "transitionTimingFunction": "ease",
    "transitionDuration": 300,
    "transitionProperty": "transform,opacity"
  },
  "fade-in": {
    "opacity": 0
  },
  "fade-active": {
    "opacity": 1
  },
  "slide-top-in": {
    "transform": "translateY(-100%)"
  },
  "slide-top-active": {
    "transform": "translateY(0)"
  },
  "slide-right-in": {
    "transform": "translateX(100%)"
  },
  "slide-right-active": {
    "transform": "translateX(0)"
  },
  "slide-bottom-in": {
    "transform": "translateY(100%)"
  },
  "slide-bottom-active": {
    "transform": "translateY(0)"
  },
  "slide-left-in": {
    "transform": "translateX(-100%)"
  },
  "slide-left-active": {
    "transform": "translateX(0)",
    "opacity": 1
  },
  "zoom-in-in": {
    "transform": "scale(0.8)"
  },
  "zoom-out-active": {
    "transform": "scale(1)"
  },
  "zoom-out-in": {
    "transform": "scale(1.2)"
  }
}

/***/ }),

/***/ 222:
/*!**********************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/pages/extUI/transition/transition.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./transition.nvue?vue&type=script&lang=js&mpType=page */ 223);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 223:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/pages/extUI/transition/transition.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





























var _uniSection = _interopRequireDefault(__webpack_require__(/*! @/components/uni-section/uni-section.vue */ 177));
var _uniTransition = _interopRequireDefault(__webpack_require__(/*! @/components/uni-transition/uni-transition.vue */ 214));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default = { components: { uniSection: _uniSection.default, uniTransition: _uniTransition.default }, data: function data() {return { show: false, transShow: false, modeClass: ['fade'], maskClass: { 'position': 'fixed', 'bottom': 0, 'top': 0, 'left': 0, 'right': 0, 'background-color': 'rgba(0, 0, 0, 0.4)' }, transfromClass: { 'position': 'fixed', 'bottom': 0, 'top': 0, 'left': 0, 'right': 0, 'justify-content': 'center', 'align-items': 'center' } };


  },
  onLoad: function onLoad() {},
  methods: {
    mask: function mask() {
      this.show = true;
    },
    open: function open(mode) {
      this.modeClass = mode;
      this.transShow = !this.transShow;
    },
    onTap: function onTap() {
      this.transShow = this.show = false;
    },
    change: function change(e) {
      __f__("log", e.detail, " at pages/extUI/transition/transition.nvue:78");
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 47)["default"]))

/***/ }),

/***/ 224:
/*!******************************************************************************************************************!*\
  !*** E:/uni-app/StudyUniApp2/pages/extUI/transition/transition.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./transition.nvue?vue&type=style&index=0&lang=css&mpType=page */ 225);
/* harmony import */ var _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderx_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_transition_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 225:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uni-app/StudyUniApp2/pages/extUI/transition/transition.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "paddingTop": "15",
    "paddingRight": "20",
    "paddingBottom": "15",
    "paddingLeft": "20",
    "backgroundColor": "#ffffff",
    "flexWrap": "wrap",
    "justifyContent": "flex-start"
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
  "transition-button": {
    "paddingTop": 0,
    "paddingRight": "15",
    "paddingBottom": 0,
    "paddingLeft": "15",
    "marginTop": "10",
    "marginRight": "5",
    "marginBottom": "10",
    "marginLeft": "5"
  },
  "box": {
    "color": "#ffffff",
    "width": "100",
    "height": "100",
    "lineHeight": "100",
    "textAlign": "center",
    "backgroundColor": "#4CD964"
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9tYWluLmpzP2Y3YzEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzP2YwYzUiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlPzlmMjIiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlP2ZhNTYiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlP2EyMDciLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlPzU2YzIiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlIiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZT85YjNhIiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZT8xZjNlIiwid2VicGFjazovLy9FOi91bmktYXBwL1N0dWR5VW5pQXBwMi9BcHAudnVlP2VmMzUiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL21haW4uanM/NGEwNSIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvcGFnZXMvZXh0VUkvdHJhbnNpdGlvbi90cmFuc2l0aW9uLm52dWU/OTRjZiIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvcGFnZXMvZXh0VUkvdHJhbnNpdGlvbi90cmFuc2l0aW9uLm52dWU/OWMyMiIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvcGFnZXMvZXh0VUkvdHJhbnNpdGlvbi90cmFuc2l0aW9uLm52dWU/NzUyMiIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWU/NGQ3MCIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWU/ZTNiZiIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWU/NzViOSIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWU/YWI0OCIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdW5pLWFwcC1wbHVzLW52dWUvZGlzdC9yZXF1aXJlLW5hdGl2ZS1wbHVnaW4uanM/ZWZlNSIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWU/YzQ4NyIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWU/MGMxZCIsIndlYnBhY2s6Ly8vRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvcGFnZXMvZXh0VUkvdHJhbnNpdGlvbi90cmFuc2l0aW9uLm52dWU/ZTY4MSIsInVuaS1hcHA6Ly8vcGFnZXMvZXh0VUkvdHJhbnNpdGlvbi90cmFuc2l0aW9uLm52dWUiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL3BhZ2VzL2V4dFVJL3RyYW5zaXRpb24vdHJhbnNpdGlvbi5udnVlPzk0N2EiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL3BhZ2VzL2V4dFVJL3RyYW5zaXRpb24vdHJhbnNpdGlvbi5udnVlPzhmYTkiLCJ3ZWJwYWNrOi8vL0U6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL0FwcC52dWU/OTk0NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9saWIvZm9ybWF0LWxvZy5qcz8wZGU5Il0sIm5hbWVzIjpbInJlcXVpcmVOYXRpdmVQbHVnaW4iLCJuYW1lIiwid2VleCIsInJlcXVpcmVNb2R1bGUiLCJ0eXBvZiIsInYiLCJzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiaXNEZWJ1Z01vZGUiLCJfX2NoYW5uZWxJZF9fIiwibG9nIiwidHlwZSIsIl9sZW4iLCJhcmd1bWVudHMiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY29uc29sZSIsImFwcGx5IiwiZm9ybWF0TG9nIiwic2hpZnQiLCJwdXNoIiwicG9wIiwicmVwbGFjZSIsIm1zZ3MiLCJtYXAiLCJ0b0xvd2VyQ2FzZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwidW5kZWZpbmVkIiwidlR5cGUiLCJ0b1VwcGVyQ2FzZSIsIlN0cmluZyIsIm1zZyIsImxhc3RNc2ciLCJqb2luIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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LENBQUMsS0FBSzhCLFNBQVYsRUFBcUI7QUFDMUI5QixTQUFDLEdBQUcsaUJBQUo7QUFDRCxPQUZNLE1BRUE7QUFDTCxZQUFJK0IsS0FBSyxHQUFHaEMsS0FBSyxDQUFDQyxDQUFELENBQUwsQ0FBU2dDLFdBQVQsRUFBWjs7QUFFQSxZQUFJRCxLQUFLLEtBQUssUUFBVixJQUFzQkEsS0FBSyxLQUFLLFNBQXBDLEVBQStDO0FBQzdDL0IsV0FBQyxHQUFHLGNBQWMrQixLQUFkLEdBQXNCLEtBQXRCLEdBQThCL0IsQ0FBOUIsR0FBa0MsU0FBbEMsR0FBOEMrQixLQUE5QyxHQUFzRCxLQUExRDtBQUNELFNBRkQsTUFFTztBQUNML0IsV0FBQyxHQUFHaUMsTUFBTSxDQUFDakMsQ0FBRCxDQUFWO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFdBQU9BLENBQVA7QUFDRCxHQTFCVSxDQUFYO0FBMkJBLE1BQUlrQyxHQUFHLEdBQUcsRUFBVjs7QUFFQSxNQUFJVixJQUFJLENBQUNqQixNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDbkIsUUFBSTRCLE9BQU8sR0FBR1gsSUFBSSxDQUFDRixHQUFMLEVBQWQ7QUFDQVksT0FBRyxHQUFHVixJQUFJLENBQUNZLElBQUwsQ0FBVSxhQUFWLENBQU47O0FBRUEsUUFBSUQsT0FBTyxDQUFDRSxPQUFSLENBQWdCLE1BQWhCLE1BQTRCLENBQWhDLEVBQW1DO0FBQ2pDSCxTQUFHLElBQUlDLE9BQVA7QUFDRCxLQUZELE1BRU87QUFDTEQsU0FBRyxJQUFJLGdCQUFnQkMsT0FBdkI7QUFDRDtBQUNGLEdBVEQsTUFTTztBQUNMRCxPQUFHLEdBQUdWLElBQUksQ0FBQyxDQUFELENBQVY7QUFDRDs7QUFFRFAsU0FBTyxDQUFDTixJQUFELENBQVAsQ0FBY3VCLEdBQWQ7QUFDRCxDIiwiZmlsZSI6InBhZ2VzL2V4dFVJL3RyYW5zaXRpb24vdHJhbnNpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMTApO1xuIiwiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUsIC8qIHZ1ZS1jbGkgb25seSAqL1xuICBjb21wb25lbnRzLCAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIHJlbmRlcmpzIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICBpZiAoY29tcG9uZW50cykge1xuICAgIGlmICghb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgICBvcHRpb25zLmNvbXBvbmVudHMgPSB7fVxuICAgIH1cbiAgICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAgIGZvciAodmFyIG5hbWUgaW4gY29tcG9uZW50cykge1xuICAgICAgaWYgKGhhc093bi5jYWxsKGNvbXBvbmVudHMsIG5hbWUpICYmICFoYXNPd24uY2FsbChvcHRpb25zLmNvbXBvbmVudHMsIG5hbWUpKSB7XG4gICAgICAgIG9wdGlvbnMuY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudHNbbmFtZV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4gIGlmIChyZW5kZXJqcykge1xuICAgIChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgfHwgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSA9IFtdKSkudW5zaGlmdChmdW5jdGlvbigpIHtcbiAgICAgIHRoaXNbcmVuZGVyanMuX19tb2R1bGVdID0gdGhpc1xuICAgIH0pO1xuICAgIChvcHRpb25zLm1peGlucyB8fCAob3B0aW9ucy5taXhpbnMgPSBbXSkpLnB1c2gocmVuZGVyanMpXG4gIH1cblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMzNDA4YzMwJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMzQwOGMzMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzM0MDhjMzAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYzM0MDhjMzBcIixcbiAgXCJlMjlhMTJmY1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOi91bmktYXBwL1N0dWR5VW5pQXBwMi9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLnJlY3ljbGUuanMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMCFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzM0MDhjMzAmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZpZXdcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktc2VjdGlvblwiXSwgYXR0cnM6IHsgbnZ1ZTogdHJ1ZSB9IH0sXG4gICAgW1xuICAgICAgX3ZtLnR5cGVcbiAgICAgICAgPyBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLXNlY3Rpb25fX2hlYWRcIl0gfSwgW1xuICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1zZWN0aW9uX19oZWFkLXRhZ1wiXSxcbiAgICAgICAgICAgICAgY2xhc3M6IF92bS50eXBlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLXNlY3Rpb25fX2NvbnRlbnRcIl0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktc2VjdGlvbl9fY29udGVudC10aXRsZVwiXSxcbiAgICAgICAgICAgIGNsYXNzOiB7IGRpc3RyYWN0aW9uOiAhX3ZtLnN1YlRpdGxlIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uc3ViVGl0bGVcbiAgICAgICAgICA/IF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1zZWN0aW9uX19jb250ZW50LXN1YlwiXSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnN1YlRpdGxlKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3QoXCJkZWZhdWx0XCIpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwidW5pLXNlY3Rpb25cIiBudnVlPlxyXG5cdFx0PHZpZXcgdi1pZj1cInR5cGVcIiBjbGFzcz1cInVuaS1zZWN0aW9uX19oZWFkXCI+XHJcblx0XHRcdDx2aWV3IDpjbGFzcz1cInR5cGVcIiBjbGFzcz1cInVuaS1zZWN0aW9uX19oZWFkLXRhZ1wiIC8+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInVuaS1zZWN0aW9uX19jb250ZW50XCI+XHJcblx0XHRcdDx0ZXh0IDpjbGFzcz1cInsnZGlzdHJhY3Rpb24nOiFzdWJUaXRsZX1cIiBjbGFzcz1cInVuaS1zZWN0aW9uX19jb250ZW50LXRpdGxlXCI+e3sgdGl0bGUgfX08L3RleHQ+XHJcblx0XHRcdDx0ZXh0IHYtaWY9XCJzdWJUaXRsZVwiIGNsYXNzPVwidW5pLXNlY3Rpb25fX2NvbnRlbnQtc3ViXCI+e3sgc3ViVGl0bGUgfX08L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8c2xvdCAvPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0LyoqXHJcblx0ICogU2VjdGlvbiDmoIfpopjmoI9cclxuXHQgKiBAZGVzY3JpcHRpb24g5qCH6aKY5qCPXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IHR5cGUgPSBbbGluZXxjaXJjbGVdIOagh+mimOijhemlsOexu+Wei1xyXG5cdCAqIFx0QHZhbHVlIGxpbmUg56uW57q/XHJcblx0ICogXHRAdmFsdWUgY2lyY2xlIOWchuW9olxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0aXRsZSDkuLvmoIfpophcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gc3ViVGl0bGUg5Ymv5qCH6aKYXHJcblx0ICovXHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdVbmlUaXRsZScsXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHR0eXBlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdHRpdGxlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1YlRpdGxlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge31cclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHR0aXRsZShuZXdWYWwpIHtcclxuXHRcdFx0XHRpZiAodW5pLnJlcG9ydCAmJiBuZXdWYWwgIT09ICcnKSB7XHJcblx0XHRcdFx0XHR1bmkucmVwb3J0KCd0aXRsZScsIG5ld1ZhbClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdG9uQ2xpY2soKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQudW5pLXNlY3Rpb24ge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMCAxMHB4O1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuXHRcdC8qICNpZmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2U1ZTVlNTtcclxuXHRcdGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMC41cHg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0fVxyXG5cclxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0LnVuaS1zZWN0aW9uOmFmdGVyIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGhlaWdodDogMXB4O1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKC41KTtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGVZKC41KTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcblx0fVxyXG5cclxuXHQvKiAjZW5kaWYgKi9cclxuXHJcblx0LnVuaS1zZWN0aW9uX19oZWFkIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0fVxyXG5cclxuXHQubGluZSB7XHJcblx0XHRoZWlnaHQ6IDE1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0d2lkdGg6IDNweDtcclxuXHR9XHJcblxyXG5cdC5jaXJjbGUge1xyXG5cdFx0d2lkdGg6IDhweDtcclxuXHRcdGhlaWdodDogOHB4O1xyXG5cdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcblx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcclxuXHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcclxuXHR9XHJcblxyXG5cdC51bmktc2VjdGlvbl9fY29udGVudCB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0Y29sb3I6ICMzMzM7XHJcblx0fVxyXG5cclxuXHQudW5pLXNlY3Rpb25fX2NvbnRlbnQtdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdH1cclxuXHJcblx0LmRpc3RyYWN0aW9uIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnVuaS1zZWN0aW9uX19jb250ZW50LXN1YiB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk7XHJcblx0fVxyXG48L3N0eWxlPiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzM0MDhjMzAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzM0MDhjMzAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ1bmktc2VjdGlvblwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBcIixcbiAgICBcImhlaWdodFwiOiBcIjUwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjhmOGY4XCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNlNWU1ZTVcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMC41XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwibm9ybWFsXCJcbiAgfSxcbiAgXCJ1bmktc2VjdGlvbl9faGVhZFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMFwiXG4gIH0sXG4gIFwibGluZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxNVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2MwYzBjMFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNVwiLFxuICAgIFwid2lkdGhcIjogXCIzXCJcbiAgfSxcbiAgXCJjaXJjbGVcIjoge1xuICAgIFwid2lkdGhcIjogXCI4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4XCIsXG4gICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiOiBcIjUwXCIsXG4gICAgXCJib3JkZXJUb3BMZWZ0UmFkaXVzXCI6IFwiNTBcIixcbiAgICBcImJvcmRlckJvdHRvbUxlZnRSYWRpdXNcIjogXCI1MFwiLFxuICAgIFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIjogXCI1MFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2MwYzBjMFwiXG4gIH0sXG4gIFwidW5pLXNlY3Rpb25fX2NvbnRlbnRcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgfSxcbiAgXCJ1bmktc2VjdGlvbl9fY29udGVudC10aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcImRpc3RyYWN0aW9uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInVuaS1zZWN0aW9uX19jb250ZW50LXN1YlwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIlxuICB9XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvZXh0VUkvdHJhbnNpdGlvbi90cmFuc2l0aW9uLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2V4dFVJL3RyYW5zaXRpb24vdHJhbnNpdGlvbidcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi90cmFuc2l0aW9uLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmMxZTJkMTgmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RyYW5zaXRpb24ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi90cmFuc2l0aW9uLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3RyYW5zaXRpb24ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3RyYW5zaXRpb24ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMWQ3MzQyMTZcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTovdW5pLWFwcC9TdHVkeVVuaUFwcDIvcGFnZXMvZXh0VUkvdHJhbnNpdGlvbi90cmFuc2l0aW9uLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxccGFnZS1tZXRhLmpzIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdHJhbnNpdGlvbi5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZjMWUyZDE4Jm1wVHlwZT1wYWdlXCIiLCJ2YXIgY29tcG9uZW50cyA9IHtcbiAgdW5pU2VjdGlvbjogcmVxdWlyZShcIkAvY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWVcIikuZGVmYXVsdCxcbiAgdW5pVHJhbnNpdGlvbjogcmVxdWlyZShcIkAvY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWVcIilcbiAgICAuZGVmYXVsdFxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNjcm9sbC12aWV3XCIsXG4gICAge1xuICAgICAgc3RhdGljU3R5bGU6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgc2Nyb2xsWTogdHJ1ZSxcbiAgICAgICAgc2hvd1Njcm9sbGJhcjogdHJ1ZSxcbiAgICAgICAgZW5hYmxlQmFja1RvVG9wOiB0cnVlLFxuICAgICAgICBidWJibGU6IFwidHJ1ZVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJleGFtcGxlLWluZm9cIl0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIui/h+a4oeWKqOeUu++8jOmAmuW4uOeUqOS6juWFg+e0oOeahOi/h+a4oeaViOaenO+8jOS+i+Wmgua3oemakOa3oeWHuuaViOaenO+8jOmBrue9qeWxgueahOaViOaenOOAgeaUvuWkp+e8qeWwj+eahOaViOaenOetiVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJ1bmktc2VjdGlvblwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIuWfuuehgOi/h+a4oeWKqOeUu1wiLCB0eXBlOiBcImxpbmVcIiB9IH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJleGFtcGxlLWJvZHlcIl0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widHJhbnNpdGlvbi1idXR0b25cIl0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGVuKFtcImZhZGVcIl0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJmYWRlXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0cmFuc2l0aW9uLWJ1dHRvblwiXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm9wZW4oW1wic2xpZGUtdG9wXCJdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwic2xpZGUtdG9wXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0cmFuc2l0aW9uLWJ1dHRvblwiXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm9wZW4oW1wic2xpZGUtbGVmdFwiXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcInNsaWRlLWxlZnRcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInRyYW5zaXRpb24tYnV0dG9uXCJdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ub3BlbihbXCJzbGlkZS1yaWdodFwiXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcInNsaWRlLXJpZ2h0XCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0cmFuc2l0aW9uLWJ1dHRvblwiXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm9wZW4oW1wic2xpZGUtYm90dG9tXCJdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwic2xpZGUtYm90dG9tXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0cmFuc2l0aW9uLWJ1dHRvblwiXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm9wZW4oW1wiem9vbS1pblwiLCBcImZhZGVcIl0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJ6b29tLWluXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0cmFuc2l0aW9uLWJ1dHRvblwiXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm9wZW4oW1wiem9vbS1vdXRcIiwgXCJmYWRlXCJdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiem9vbS1vdXRcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcInVuaS1zZWN0aW9uXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwi57uE5ZCI6L+H5rih5Yqo55S7XCIsIHR5cGU6IFwibGluZVwiIH0gfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImV4YW1wbGUtYm9keVwiXSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0cmFuc2l0aW9uLWJ1dHRvblwiXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm1hc2sgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIumAj+aYjumBrue9qeWxglwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widHJhbnNpdGlvbi1idXR0b25cIl0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGVuKFtcImZhZGVcIiwgXCJ6b29tLW91dFwiLCBcInNsaWRlLXRvcFwiXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIue7hOWQiOWKqOeUu+ekuuS+i+S4gFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widHJhbnNpdGlvbi1idXR0b25cIl0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGVuKFtcInpvb20taW5cIiwgXCJzbGlkZS1ib3R0b21cIiwgXCJmYWRlXCJdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi57uE5ZCI5Yqo55S756S65L6L5LqMXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ0cmFuc2l0aW9uLWJ1dHRvblwiXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm9wZW4oW1wic2xpZGUtbGVmdFwiLCBcInNsaWRlLXRvcFwiLCBcImZhZGVcIl0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLnu4TlkIjliqjnlLvnpLrkvovkuIlcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcInVuaS10cmFuc2l0aW9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG1vZGVDbGFzczogW1wiZmFkZVwiXSxcbiAgICAgICAgICAgICAgc3R5bGVzOiBfdm0ubWFza0NsYXNzLFxuICAgICAgICAgICAgICBzaG93OiBfdm0uc2hvd1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25UYXAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1bmktdHJhbnNpdGlvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgbW9kZUNsYXNzOiBfdm0ubW9kZUNsYXNzLFxuICAgICAgICAgICAgICAgIHN0eWxlczogX3ZtLnRyYW5zZnJvbUNsYXNzLFxuICAgICAgICAgICAgICAgIHNob3c6IF92bS50cmFuc1Nob3dcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vblRhcCwgY2hhbmdlOiBfdm0uY2hhbmdlIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiYm94XCJdIH0sIFtfdm0uX3YoXCJUZXN0XCIpXSldXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjNjOTVlNTQmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWIzYzk1ZTU0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iM2M5NWU1NCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJiM2M5NWU1NFwiLFxuICBcIjE2MDI5MmVhXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6L3VuaS1hcHAvU3R1ZHlVbmlBcHAyL2NvbXBvbmVudHMvdW5pLXRyYW5zaXRpb24vdW5pLXRyYW5zaXRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUucmVjeWNsZS5qcyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0wIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iM2M5NWU1NCZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5pc1Nob3dcbiAgICA/IF9jKFxuICAgICAgICBcInZpZXdcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJhbmlcIixcbiAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLXRyYW5zaXRpb25cIl0sXG4gICAgICAgICAgY2xhc3M6IFtfdm0uYW5pLmluXSxcbiAgICAgICAgICBzdHlsZTogXCJ0cmFuc2Zvcm06XCIgKyBfdm0udHJhbnNmb3JtICsgXCI7XCIgKyBfdm0uc3R5bGVzT2JqZWN0LFxuICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2hhbmdlIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgICAgICAyXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgdi1pZj1cImlzU2hvd1wiIHJlZj1cImFuaVwiIGNsYXNzPVwidW5pLXRyYW5zaXRpb25cIiA6Y2xhc3M9XCJbYW5pLmluXVwiIDpzdHlsZT1cIid0cmFuc2Zvcm06JyArdHJhbnNmb3JtKyc7JytzdHlsZXNPYmplY3RcIiBAY2xpY2s9XCJjaGFuZ2VcIj5cclxuXHRcdDxzbG90Pjwvc2xvdD5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8vICNpZmRlZiBBUFAtTlZVRVxyXG5cdGNvbnN0IGFuaW1hdGlvbiA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdhbmltYXRpb24nKTtcclxuXHQvLyAjZW5kaWZcclxuXHQvKipcclxuXHQgKiBUcmFuc2l0aW9uIOi/h+a4oeWKqOeUu1xyXG5cdCAqIEBkZXNjcmlwdGlvbiDnroDljZXov4fmuKHliqjnlLvnu4Tku7ZcclxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9OTg1XHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBzaG93ID0gW2ZhbHNlfHRydWVdIOaOp+WItue7hOS7tuaYvuekuuaIlumakOiXj1xyXG5cdCAqIEBwcm9wZXJ0eSB7QXJyYXl9IG1vZGVDbGFzcyA9IFtmYWRlfHNsaWRlLXRvcHxzbGlkZS1yaWdodHxzbGlkZS1ib3R0b218c2xpZGUtbGVmdHx6b29tLWlufHpvb20tb3V0XSDov4fmuKHliqjnlLvnsbvlnotcclxuXHQgKiAgQHZhbHVlIGZhZGUg5riQ6ZqQ5riQ5Ye66L+H5rihXHJcblx0ICogIEB2YWx1ZSBzbGlkZS10b3Ag55Sx5LiK6Iez5LiL6L+H5rihXHJcblx0ICogIEB2YWx1ZSBzbGlkZS1yaWdodCDnlLHlj7Poh7Plt6bov4fmuKFcclxuXHQgKiAgQHZhbHVlIHNsaWRlLWJvdHRvbSDnlLHkuIvoh7PkuIrov4fmuKFcclxuXHQgKiAgQHZhbHVlIHNsaWRlLWxlZnQg55Sx5bem6Iez5Y+z6L+H5rihXHJcblx0ICogIEB2YWx1ZSB6b29tLWluIOeUseWwj+WIsOWkp+i/h+a4oVxyXG5cdCAqICBAdmFsdWUgem9vbS1vdXQg55Sx5aSn5Yiw5bCP6L+H5rihXHJcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IGR1cmF0aW9uIOi/h+a4oeWKqOeUu+aMgee7reaXtumXtFxyXG5cdCAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBzdHlsZXMg57uE5Lu25qC35byP77yM5ZCMIGNzcyDmoLflvI/vvIzms6jmhI/luKbigJkt4oCY6L+e5o6l56ym55qE5bGe5oCn6ZyA6KaB5L2/55So5bCP6am85bOw5YaZ5rOV5aaC77yaYGJhY2tncm91bmRDb2xvcjpyZWRgXHJcblx0ICovXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ3VuaVRyYW5zaXRpb24nLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0c2hvdzoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0bW9kZUNsYXNzOiB7XHJcblx0XHRcdFx0dHlwZTogQXJyYXksXHJcblx0XHRcdFx0ZGVmYXVsdCAoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gW11cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGR1cmF0aW9uOiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDMwMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdHlsZXM6IHtcclxuXHRcdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdFx0ZGVmYXVsdCAoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge31cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlzU2hvdzogZmFsc2UsXHJcblx0XHRcdFx0dHJhbnNmb3JtOiAnJyxcclxuXHRcdFx0XHRhbmk6IHtcclxuXHRcdFx0XHRcdGluOiAnJyxcclxuXHRcdFx0XHRcdGFjdGl2ZTogJydcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0c2hvdzoge1xyXG5cdFx0XHRcdGhhbmRsZXIobmV3VmFsKSB7XHJcblx0XHRcdFx0XHRpZiAobmV3VmFsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMub3BlbigpXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNsb3NlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0c3R5bGVzT2JqZWN0KCkge1xyXG5cdFx0XHRcdGxldCBzdHlsZXMgPSB7XHJcblx0XHRcdFx0XHQuLi50aGlzLnN0eWxlcyxcclxuXHRcdFx0XHRcdCd0cmFuc2l0aW9uLWR1cmF0aW9uJzogdGhpcy5kdXJhdGlvbiAvIDEwMDAgKyAncydcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IHRyYW5zZnJvbSA9ICcnXHJcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiBzdHlsZXMpIHtcclxuXHRcdFx0XHRcdGxldCBsaW5lID0gdGhpcy50b0xpbmUoaSlcclxuXHRcdFx0XHRcdHRyYW5zZnJvbSArPSBsaW5lICsgJzonICsgc3R5bGVzW2ldICsgJzsnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB0cmFuc2Zyb21cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdC8vIHRoaXMudGltZXIgPSBudWxsXHJcblx0XHRcdC8vIHRoaXMubmV4dFRpY2sgPSAodGltZSA9IDUwKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuXHRcdFx0Ly8gXHRjbGVhclRpbWVvdXQodGhpcy50aW1lcilcclxuXHRcdFx0Ly8gXHR0aGlzLnRpbWVyID0gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKVxyXG5cdFx0XHQvLyBcdHJldHVybiB0aGlzLnRpbWVyXHJcblx0XHRcdC8vIH0pO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Y2hhbmdlKCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJywge1xyXG5cdFx0XHRcdFx0ZGV0YWlsOiB0aGlzLmlzU2hvd1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdG9wZW4oKSB7XHJcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXHJcblx0XHRcdFx0dGhpcy5pc1Nob3cgPSB0cnVlXHJcblx0XHRcdFx0dGhpcy50cmFuc2Zvcm0gPSAnJ1xyXG5cdFx0XHRcdHRoaXMuYW5pLmluID0gJydcclxuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoaXMuZ2V0VHJhbmZyb20oZmFsc2UpKSB7XHJcblx0XHRcdFx0XHRpZiAoaSA9PT0gJ29wYWNpdHknKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYW5pLmluID0gJ2ZhZGUtaW4nXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRyYW5zZm9ybSArPSBgJHt0aGlzLmdldFRyYW5mcm9tKGZhbHNlKVtpXX0gYFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5fYW5pbWF0aW9uKHRydWUpXHJcblx0XHRcdFx0XHR9LCA1MClcclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xvc2UodHlwZSkge1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxyXG5cdFx0XHRcdHRoaXMuX2FuaW1hdGlvbihmYWxzZSlcclxuXHRcdFx0fSxcclxuXHRcdFx0X2FuaW1hdGlvbih0eXBlKSB7XHJcblx0XHRcdFx0bGV0IHN0eWxlcyA9IHRoaXMuZ2V0VHJhbmZyb20odHlwZSlcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLU5WVUVcclxuXHRcdFx0XHRpZiAoIXRoaXMuJHJlZnNbJ2FuaSddKSByZXR1cm5cclxuXHRcdFx0XHRhbmltYXRpb24udHJhbnNpdGlvbih0aGlzLiRyZWZzWydhbmknXS5yZWYsIHtcclxuXHRcdFx0XHRcdHN0eWxlcyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLCAvL21zXHJcblx0XHRcdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxyXG5cdFx0XHRcdFx0bmVlZExheW91dDogZmFsc2UsXHJcblx0XHRcdFx0XHRkZWxheTogMCAvL21zXHJcblx0XHRcdFx0fSwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCF0eXBlKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuaXNTaG93ID0gZmFsc2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcclxuXHRcdFx0XHRcdFx0ZGV0YWlsOiB0aGlzLmlzU2hvd1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdC8vICNpZm5kZWYgQVBQLU5WVUVcclxuXHRcdFx0XHR0aGlzLnRyYW5zZm9ybSA9ICcnXHJcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiBzdHlsZXMpIHtcclxuXHRcdFx0XHRcdGlmIChpID09PSAnb3BhY2l0eScpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5hbmkuaW4gPSBgZmFkZS0ke3R5cGU/J291dCc6J2luJ31gXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRyYW5zZm9ybSArPSBgJHtzdHlsZXNbaV19IGBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCF0eXBlKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuaXNTaG93ID0gZmFsc2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcclxuXHRcdFx0XHRcdFx0ZGV0YWlsOiB0aGlzLmlzU2hvd1xyXG5cdFx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0fSwgdGhpcy5kdXJhdGlvbilcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldFRyYW5mcm9tKHR5cGUpIHtcclxuXHRcdFx0XHRsZXQgc3R5bGVzID0ge1xyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiAnJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLm1vZGVDbGFzcy5mb3JFYWNoKChtb2RlKSA9PiB7XHJcblx0XHRcdFx0XHRzd2l0Y2ggKG1vZGUpIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSAnZmFkZSc6XHJcblx0XHRcdFx0XHRcdFx0c3R5bGVzLm9wYWNpdHkgPSB0eXBlID8gMSA6IDBcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAnc2xpZGUtdG9wJzpcclxuXHRcdFx0XHRcdFx0XHRzdHlsZXMudHJhbnNmb3JtICs9IGB0cmFuc2xhdGVZKCR7dHlwZT8nMCc6Jy0xMDAlJ30pIGBcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAnc2xpZGUtcmlnaHQnOlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlcy50cmFuc2Zvcm0gKz0gYHRyYW5zbGF0ZVgoJHt0eXBlPycwJzonMTAwJSd9KSBgXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3NsaWRlLWJvdHRvbSc6XHJcblx0XHRcdFx0XHRcdFx0c3R5bGVzLnRyYW5zZm9ybSArPSBgdHJhbnNsYXRlWSgke3R5cGU/JzAnOicxMDAlJ30pIGBcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAnc2xpZGUtbGVmdCc6XHJcblx0XHRcdFx0XHRcdFx0c3R5bGVzLnRyYW5zZm9ybSArPSBgdHJhbnNsYXRlWCgke3R5cGU/JzAnOictMTAwJSd9KSBgXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3pvb20taW4nOlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlcy50cmFuc2Zvcm0gKz0gYHNjYWxlKCR7dHlwZT8xOjAuOH0pIGBcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAnem9vbS1vdXQnOlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlcy50cmFuc2Zvcm0gKz0gYHNjYWxlKCR7dHlwZT8xOjEuMn0pIGBcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVybiBzdHlsZXNcclxuXHRcdFx0fSxcclxuXHRcdFx0X21vZGVDbGFzc0Fycih0eXBlKSB7XHJcblx0XHRcdFx0bGV0IG1vZGUgPSB0aGlzLm1vZGVDbGFzc1xyXG5cdFx0XHRcdGlmICh0eXBlb2YobW9kZSkgIT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRcdGxldCBtb2Rlc3RyID0gJydcclxuXHRcdFx0XHRcdG1vZGUuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRtb2Rlc3RyICs9IChpdGVtICsgJy0nICsgdHlwZSArICcsJylcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRyZXR1cm4gbW9kZXN0ci5zdWJzdHIoMCwgbW9kZXN0ci5sZW5ndGggLSAxKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbW9kZSArICctJyArIHR5cGVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIGdldEVsKGVsKSB7XHJcblx0XHRcdC8vIFx0Y29uc29sZS5sb2coZWwgfHwgZWwucmVmIHx8IG51bGwpO1xyXG5cdFx0XHQvLyBcdHJldHVybiBlbCB8fCBlbC5yZWYgfHwgbnVsbFxyXG5cdFx0XHQvLyB9LFxyXG5cdFx0XHR0b0xpbmUobmFtZSkge1xyXG5cdFx0XHRcdHJldHVybiBuYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgXCItJDFcIikudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC51bmktdHJhbnNpdGlvbiB7XHJcblx0XHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuXHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcblx0XHR0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcblx0fVxyXG5cclxuXHQuZmFkZS1pbiB7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdH1cclxuXHJcblx0LmZhZGUtYWN0aXZlIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cclxuXHQuc2xpZGUtdG9wLWluIHtcclxuXHRcdC8qIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTsgKi9cclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcblx0fVxyXG5cclxuXHQuc2xpZGUtdG9wLWFjdGl2ZSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcblx0XHQvKiBvcGFjaXR5OiAxOyAqL1xyXG5cdH1cclxuXHJcblx0LnNsaWRlLXJpZ2h0LWluIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuXHR9XHJcblxyXG5cdC5zbGlkZS1yaWdodC1hY3RpdmUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG5cdH1cclxuXHJcblx0LnNsaWRlLWJvdHRvbS1pbiB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcblx0fVxyXG5cclxuXHQuc2xpZGUtYm90dG9tLWFjdGl2ZSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcblx0fVxyXG5cclxuXHQuc2xpZGUtbGVmdC1pbiB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG5cdH1cclxuXHJcblx0LnNsaWRlLWxlZnQtYWN0aXZlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cclxuXHQuem9vbS1pbi1pbiB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcblx0fVxyXG5cclxuXHQuem9vbS1vdXQtYWN0aXZlIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcblx0fVxyXG5cclxuXHQuem9vbS1vdXQtaW4ge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG5cdH1cclxuPC9zdHlsZT4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlTmF0aXZlUGx1Z2luKG5hbWUpIHtcclxuICByZXR1cm4gd2VleC5yZXF1aXJlTW9kdWxlKG5hbWUpXHJcbn1cclxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iM2M5NWU1NCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iM2M5NWU1NCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIkBUUkFOU0lUSU9OXCI6IHtcbiAgICBcInVuaS10cmFuc2l0aW9uXCI6IHtcbiAgICAgIFwidGltaW5nRnVuY3Rpb25cIjogXCJlYXNlXCIsXG4gICAgICBcImR1cmF0aW9uXCI6IDMwMCxcbiAgICAgIFwicHJvcGVydHlcIjogXCJ0cmFuc2Zvcm0sb3BhY2l0eVwiXG4gICAgfVxuICB9LFxuICBcInVuaS10cmFuc2l0aW9uXCI6IHtcbiAgICBcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiOiBcImVhc2VcIixcbiAgICBcInRyYW5zaXRpb25EdXJhdGlvblwiOiAzMDAsXG4gICAgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjogXCJ0cmFuc2Zvcm0sb3BhY2l0eVwiXG4gIH0sXG4gIFwiZmFkZS1pblwiOiB7XG4gICAgXCJvcGFjaXR5XCI6IDBcbiAgfSxcbiAgXCJmYWRlLWFjdGl2ZVwiOiB7XG4gICAgXCJvcGFjaXR5XCI6IDFcbiAgfSxcbiAgXCJzbGlkZS10b3AtaW5cIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWSgtMTAwJSlcIlxuICB9LFxuICBcInNsaWRlLXRvcC1hY3RpdmVcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWSgwKVwiXG4gIH0sXG4gIFwic2xpZGUtcmlnaHQtaW5cIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWCgxMDAlKVwiXG4gIH0sXG4gIFwic2xpZGUtcmlnaHQtYWN0aXZlXCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVgoMClcIlxuICB9LFxuICBcInNsaWRlLWJvdHRvbS1pblwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGVZKDEwMCUpXCJcbiAgfSxcbiAgXCJzbGlkZS1ib3R0b20tYWN0aXZlXCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVkoMClcIlxuICB9LFxuICBcInNsaWRlLWxlZnQtaW5cIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWCgtMTAwJSlcIlxuICB9LFxuICBcInNsaWRlLWxlZnQtYWN0aXZlXCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVgoMClcIixcbiAgICBcIm9wYWNpdHlcIjogMVxuICB9LFxuICBcInpvb20taW4taW5cIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwic2NhbGUoMC44KVwiXG4gIH0sXG4gIFwiem9vbS1vdXQtYWN0aXZlXCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInNjYWxlKDEpXCJcbiAgfSxcbiAgXCJ6b29tLW91dC1pblwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJzY2FsZSgxLjIpXCJcbiAgfVxufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90cmFuc2l0aW9uLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RyYW5zaXRpb24ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHRleHQgY2xhc3M9XCJleGFtcGxlLWluZm9cIj7ov4fmuKHliqjnlLvvvIzpgJrluLjnlKjkuo7lhYPntKDnmoTov4fmuKHmlYjmnpzvvIzkvovlpoLmt6HpmpDmt6Hlh7rmlYjmnpzvvIzpga7nvanlsYLnmoTmlYjmnpzjgIHmlL7lpKfnvKnlsI/nmoTmlYjmnpznrYk8L3RleHQ+XHJcblx0XHQ8dW5pLXNlY3Rpb24gdGl0bGU9XCLln7rnoYDov4fmuKHliqjnlLtcIiB0eXBlPVwibGluZVwiPjwvdW5pLXNlY3Rpb24+XHJcblx0XHQ8dmlldyBjbGFzcz1cImV4YW1wbGUtYm9keVwiPlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwidHJhbnNpdGlvbi1idXR0b25cIiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cIm9wZW4oWydmYWRlJ10pXCI+ZmFkZTwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwidHJhbnNpdGlvbi1idXR0b25cIiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cIm9wZW4oWydzbGlkZS10b3AnXSlcIj5zbGlkZS10b3A8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cInRyYW5zaXRpb24tYnV0dG9uXCIgdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJvcGVuKFsnc2xpZGUtbGVmdCddKVwiPnNsaWRlLWxlZnQ8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cInRyYW5zaXRpb24tYnV0dG9uXCIgdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJvcGVuKFsnc2xpZGUtcmlnaHQnXSlcIj5zbGlkZS1yaWdodDwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwidHJhbnNpdGlvbi1idXR0b25cIiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cIm9wZW4oWydzbGlkZS1ib3R0b20nXSlcIj5zbGlkZS1ib3R0b208L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cInRyYW5zaXRpb24tYnV0dG9uXCIgdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJvcGVuKFsnem9vbS1pbicsJ2ZhZGUnXSlcIj56b29tLWluPC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJ0cmFuc2l0aW9uLWJ1dHRvblwiIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwib3BlbihbJ3pvb20tb3V0JywnZmFkZSddKVwiPnpvb20tb3V0PC9idXR0b24+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dW5pLXNlY3Rpb24gdGl0bGU9XCLnu4TlkIjov4fmuKHliqjnlLtcIiB0eXBlPVwibGluZVwiPjwvdW5pLXNlY3Rpb24+XHJcblx0XHQ8dmlldyBjbGFzcz1cImV4YW1wbGUtYm9keVwiPlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwidHJhbnNpdGlvbi1idXR0b25cIiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cIm1hc2tcIj7pgI/mmI7pga7nvanlsYI8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cInRyYW5zaXRpb24tYnV0dG9uXCIgdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJvcGVuKFsnZmFkZScsJ3pvb20tb3V0Jywnc2xpZGUtdG9wJ10pXCI+57uE5ZCI5Yqo55S756S65L6L5LiAPC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJ0cmFuc2l0aW9uLWJ1dHRvblwiIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwib3BlbihbJ3pvb20taW4nLCdzbGlkZS1ib3R0b20nLCdmYWRlJ10pXCI+57uE5ZCI5Yqo55S756S65L6L5LqMPC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJ0cmFuc2l0aW9uLWJ1dHRvblwiIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwib3BlbihbJ3NsaWRlLWxlZnQnLCdzbGlkZS10b3AnLCdmYWRlJ10pXCI+57uE5ZCI5Yqo55S756S65L6L5LiJPC9idXR0b24+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOmBrue9qSAtLT5cclxuXHRcdDx1bmktdHJhbnNpdGlvbiA6bW9kZS1jbGFzcz1cIlsnZmFkZSddXCIgOnN0eWxlcz1cIm1hc2tDbGFzc1wiIDpzaG93PVwic2hvd1wiIEBjbGljaz1cIm9uVGFwXCIgLz5cclxuXHRcdDwhLS0g6L+H5rihIC0tPlxyXG5cdFx0PHVuaS10cmFuc2l0aW9uIDpkdXJhdGlvbj1cIjUwMFwiIDptb2RlLWNsYXNzPVwibW9kZUNsYXNzXCIgOnN0eWxlcz1cInRyYW5zZnJvbUNsYXNzXCIgOnNob3c9XCJ0cmFuc1Nob3dcIiBAY2xpY2s9XCJvblRhcFwiIEBjaGFuZ2U9XCJjaGFuZ2VcIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJib3hcIj5UZXN0PC90ZXh0PlxyXG5cdFx0PC91bmktdHJhbnNpdGlvbj5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB1bmlTZWN0aW9uIGZyb20gJ0AvY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWUnXHJcblx0aW1wb3J0IHVuaVRyYW5zaXRpb24gZnJvbSAnQC9jb21wb25lbnRzL3VuaS10cmFuc2l0aW9uL3VuaS10cmFuc2l0aW9uLnZ1ZSdcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdHVuaVNlY3Rpb24sXHJcblx0XHRcdHVuaVRyYW5zaXRpb25cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHNob3c6IGZhbHNlLFxyXG5cdFx0XHRcdHRyYW5zU2hvdzogZmFsc2UsXHJcblx0XHRcdFx0bW9kZUNsYXNzOiBbJ2ZhZGUnXSxcclxuXHRcdFx0XHRtYXNrQ2xhc3M6IHtcclxuXHRcdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXHJcblx0XHRcdFx0XHQnYm90dG9tJzogMCxcclxuXHRcdFx0XHRcdCd0b3AnOiAwLFxyXG5cdFx0XHRcdFx0J2xlZnQnOiAwLFxyXG5cdFx0XHRcdFx0J3JpZ2h0JzogMCxcclxuXHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgMC40KSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHRyYW5zZnJvbUNsYXNzOiB7XHJcblx0XHRcdFx0XHQncG9zaXRpb24nOiAnZml4ZWQnLFxyXG5cdFx0XHRcdFx0J2JvdHRvbSc6IDAsXHJcblx0XHRcdFx0XHQndG9wJzogMCxcclxuXHRcdFx0XHRcdCdsZWZ0JzogMCxcclxuXHRcdFx0XHRcdCdyaWdodCc6IDAsXHJcblx0XHRcdFx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRcdFx0XHQnZGlzcGxheSc6ICdmbGV4JyxcclxuXHRcdFx0XHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0XHRcdFx0J2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0J2FsaWduLWl0ZW1zJzogJ2NlbnRlcidcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0bWFzaygpIHtcclxuXHRcdFx0XHR0aGlzLnNob3cgPSB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdG9wZW4obW9kZSkge1xyXG5cdFx0XHRcdHRoaXMubW9kZUNsYXNzID0gbW9kZVxyXG5cdFx0XHRcdHRoaXMudHJhbnNTaG93ID0gIXRoaXMudHJhbnNTaG93XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uVGFwKCkge1xyXG5cdFx0XHRcdHRoaXMudHJhbnNTaG93ID0gdGhpcy5zaG93ID0gZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhbmdlKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlLmRldGFpbCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC8qIOWktOadoeWwj+eoi+W6j+e7hOS7tuWGheS4jeiDveW8leWFpeWtl+S9kyAqL1xyXG5cdC8qICNpZmRlZiBNUC1UT1VUSUFPICovXHJcblx0QGZvbnQtZmFjZSB7XHJcblx0XHRmb250LWZhbWlseTogdW5paWNvbnM7XHJcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdFx0c3JjOiB1cmwoJ35AL3N0YXRpYy91bmkudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcblxyXG5cdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRwYWdlIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlZmVmZjQ7XHJcblx0XHRtaW4taGVpZ2h0OiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdH1cclxuXHJcblx0dmlldyB7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuXHR9XHJcblxyXG5cdC5leGFtcGxlIHtcclxuXHRcdHBhZGRpbmc6IDAgMTVweCAxNXB4O1xyXG5cdH1cclxuXHJcblx0LmV4YW1wbGUtaW5mbyB7XHJcblx0XHRwYWRkaW5nOiAxNXB4O1xyXG5cdFx0Y29sb3I6ICMzYjQxNDQ7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cdH1cclxuXHJcblx0LmV4YW1wbGUtYm9keSB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHR9XHJcblxyXG5cdC8qICNlbmRpZiAqL1xyXG5cdC5leGFtcGxlIHtcclxuXHRcdHBhZGRpbmc6IDAgMTVweDtcclxuXHR9XHJcblxyXG5cdC5leGFtcGxlLWluZm8ge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0XHRjb2xvcjogIzNiNDE0NDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHR9XHJcblxyXG5cdC5leGFtcGxlLWluZm8tdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRcdGNvbG9yOiAjM2I0MTQ0O1xyXG5cdH1cclxuXHJcblxyXG5cdC5leGFtcGxlLWJvZHkge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdH1cclxuXHJcblx0LndvcmQtYnRuLXdoaXRlIHtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LndvcmQtYnRuIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0XHRoZWlnaHQ6IDQ4cHg7XHJcblx0XHRtYXJnaW46IDE1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QUZGO1xyXG5cdH1cclxuXHJcblx0LndvcmQtYnRuLS1ob3ZlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhMmZmO1xyXG5cdH1cclxuXHJcblx0LmV4YW1wbGUtYm9keSB7XHJcblx0XHRwYWRkaW5nOiAxNXB4IDIwcHg7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdH1cclxuXHJcblx0LnRyYW5zaXRpb24tYnV0dG9uIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdC8qIHdpZHRoOiAxMDAlOyAqL1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0XHRtYXJnaW46IDEwcHggNXB4O1xyXG5cdH1cclxuXHJcblx0LmJveCB7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdHdpZHRoOiAxMDBweDtcclxuXHRcdGhlaWdodDogMTAwcHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTAwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNENEOTY0O1xyXG5cdH1cclxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RyYW5zaXRpb24ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyeFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlcnhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhRDpcXFxcSEJ1aWxkZXJ4XFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdHJhbnNpdGlvbi5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImV4YW1wbGVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTVcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTVcIlxuICB9LFxuICBcImV4YW1wbGUtaW5mb1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE1XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTVcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTVcIixcbiAgICBcImNvbG9yXCI6IFwiIzNiNDE0NFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxNFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJleGFtcGxlLWluZm8tdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE0XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMjBcIixcbiAgICBcImNvbG9yXCI6IFwiIzNiNDE0NFwiXG4gIH0sXG4gIFwiZXhhbXBsZS1ib2R5XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNVwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNVwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcIndvcmQtYnRuLXdoaXRlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMThcIixcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwid29yZC1idG5cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjZcIixcbiAgICBcImhlaWdodFwiOiBcIjQ4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxNVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwN0FGRlwiXG4gIH0sXG4gIFwid29yZC1idG4tLWhvdmVyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM0Y2EyZmZcIlxuICB9LFxuICBcInRyYW5zaXRpb24tYnV0dG9uXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE1XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE1XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIlxuICB9LFxuICBcImJveFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDBcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIxMDBcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzRDRDk2NFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHt9IiwiZnVuY3Rpb24gdHlwb2YgKHYpIHtcbiAgdmFyIHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSlcbn1cblxuZnVuY3Rpb24gaXNEZWJ1Z01vZGUgKCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICByZXR1cm4gdHlwZW9mIF9fY2hhbm5lbElkX18gPT09ICdzdHJpbmcnICYmIF9fY2hhbm5lbElkX19cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZyAodHlwZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV1cbiAgfVxuICBjb25zb2xlW3R5cGVdLmFwcGx5KGNvbnNvbGUsIGFyZ3MpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdExvZyAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV1cbiAgfVxuICB2YXIgdHlwZSA9IGFyZ3Muc2hpZnQoKVxuICBpZiAoaXNEZWJ1Z01vZGUoKSkge1xuICAgIGFyZ3MucHVzaChhcmdzLnBvcCgpLnJlcGxhY2UoJ2F0ICcsICd1bmktYXBwOi8vLycpKVxuICAgIHJldHVybiBjb25zb2xlW3R5cGVdLmFwcGx5KGNvbnNvbGUsIGFyZ3MpXG4gIH1cblxuICB2YXIgbXNncyA9IGFyZ3MubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodikudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IG9iamVjdF0nIHx8IHR5cGUgPT09ICdbb2JqZWN0IGFycmF5XScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHYgPSAnLS0tQkVHSU46SlNPTi0tLScgKyBKU09OLnN0cmluZ2lmeSh2KSArICctLS1FTkQ6SlNPTi0tLSdcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdiA9ICdbb2JqZWN0IG9iamVjdF0nXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2ID09PSBudWxsKSB7XG4gICAgICAgIHYgPSAnLS0tTlVMTC0tLSdcbiAgICAgIH0gZWxzZSBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHYgPSAnLS0tVU5ERUZJTkVELS0tJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHZUeXBlID0gdHlwb2YodikudG9VcHBlckNhc2UoKVxuXG4gICAgICAgIGlmICh2VHlwZSA9PT0gJ05VTUJFUicgfHwgdlR5cGUgPT09ICdCT09MRUFOJykge1xuICAgICAgICAgIHYgPSAnLS0tQkVHSU46JyArIHZUeXBlICsgJy0tLScgKyB2ICsgJy0tLUVORDonICsgdlR5cGUgKyAnLS0tJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHYgPSBTdHJpbmcodilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2XG4gIH0pXG4gIHZhciBtc2cgPSAnJ1xuXG4gIGlmIChtc2dzLmxlbmd0aCA+IDEpIHtcbiAgICB2YXIgbGFzdE1zZyA9IG1zZ3MucG9wKClcbiAgICBtc2cgPSBtc2dzLmpvaW4oJy0tLUNPTU1BLS0tJylcblxuICAgIGlmIChsYXN0TXNnLmluZGV4T2YoJyBhdCAnKSA9PT0gMCkge1xuICAgICAgbXNnICs9IGxhc3RNc2dcbiAgICB9IGVsc2Uge1xuICAgICAgbXNnICs9ICctLS1DT01NQS0tLScgKyBsYXN0TXNnXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1zZyA9IG1zZ3NbMF1cbiAgfVxuXG4gIGNvbnNvbGVbdHlwZV0obXNnKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==